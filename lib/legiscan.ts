import { Bill, Hearing, AmendedBill, Pill } from '@/types';
import { enrichment } from './enrichment';

const API_KEY = process.env.LEGISCAN_API_KEY;
const BASE_URL = 'https://api.legiscan.com/';

// Mock Data for MVP
// Mock Data Factory
const getMockHearings = (state: string): Hearing[] => {
    if (state.toUpperCase() === 'NJ') {
        return [{
            hearing_id: 2,
            date: '2026-02-04',
            time: '1:00 PM',
            location: 'Committee Room 4, 1st Floor',
            description: 'Senate Budget and Appropriations Meeting',
            committee: 'Budget and Appropriations',
            bill_number: 'S123',
            bill_id: 2001,
            bill_url: 'https://legiscan.com/NJ/bill/S123/2024',
            type: 'Senate',
            ai_summary: 'Proposed legislation to provide extended property tax relief for veterans living in continuing care retirement communities.',
            sponsor_info: {
                name: 'Sen. Kristin M. Corrado',
                id: 'senator-corrado',
                party: 'R',
                next_election: '2027',
                major_donors: []
            },
            smart_pills: [
                { label: 'Veterans', category: 'people', icon: '🎖️' },
                { label: 'Tax Relief', category: 'impact', icon: '💰' }
            ]
        }];
    }

    // Default (NH/MA)
    return [{
        hearing_id: 1,
        date: '2026-02-03', // Next Tuesday
        time: '10:00 AM',
        location: 'LOB 301',
        description: 'Public Hearing on Zoning Modifications',
        committee: 'Municipal and County Government',
        bill_number: 'HB 1234',
        bill_id: 1001,
        bill_url: 'https://legiscan.com/NH/bill/HB1234/2024',
        type: 'House',
        ai_summary: 'This bill proposes changes to local zoning laws to allow for more "Accessory Dwelling Units" (granny flats) by right, aiming to increase affordable housing stock without major infrastructure changes.',
        sponsor_info: {
            name: 'Rep. Joe Smith',
            id: 'rep-joe-smith',
            party: 'R',
            next_election: '2026',
            major_donors: [
                { name: "AIPAC", amount: 5000, category: 'PAC' },
                { name: "NH Association of Realtors", amount: 500, category: 'Industry' }
            ]
        },
        smart_pills: [
            { label: 'This Week', category: 'urgency', icon: '⏰', description: 'Hearing is happening within 7 days' },
            { label: 'Affects Renters', category: 'people', icon: '🏠' },
            { label: 'Municipal Cost', category: 'impact', icon: '💰', description: 'May increase costs for town budgets' },
            { label: 'Local Control', category: 'impact', icon: '🏘️', description: 'Impacts ability of towns to set own zoning' }
        ]
    }];
};

import { cachedData } from './cache-utils';

// Helper to normalize LegiScan's weird "Object with numeric keys" arrays
// e.g. { "0": {...}, "1": {...} } -> [{...}, {...}]
const normalizeArray = (info: any): any[] => {
    if (!info) return [];
    if (Array.isArray(info)) return info;
    // Filter out non-numeric keys like "summary" or "mime_type" which sometimes appear mixed in
    return Object.keys(info)
        .filter(k => !isNaN(parseInt(k)))
        .map(k => info[k]);
};

// Helper to get the correct session ID for the current year
export const getActiveSessionId = async (state: string): Promise<number | null> => {
    try {
        const API_KEY = process.env.LEGISCAN_API_KEY; // Ensure API KEY is available
        const res = await fetch(`${BASE_URL}?key=${API_KEY}&op=getSessionList&state=${state}`);
        const data = await res.json();

        if (data.status === 'ERROR' || !data.sessions) {
            console.warn(`LegiScan Session Error for ${state}:`, data.alert?.message);
            return null;
        }

        // Find session covering today
        // Prefer "Regular Session" if multiple are active
        const currentYear = new Date().getFullYear();
        const activeSessions = data.sessions.filter((s: any) =>
            s.year_start <= currentYear && s.year_end >= currentYear
        );

        if (activeSessions.length === 0) {
            // Fallback: Just get the most recent one period
            return data.sessions[0]?.session_id || null;
        }

        // Sort: Prioritize special/regular based on specific strings if needed, 
        // but generally taking the most recent 'active' one is good.
        // For now, take the first one or the one marked explicitly as 'regular'
        const regular = activeSessions.find((s: any) => s.session_name.toLowerCase().includes('regular'));
        return regular ? regular.session_id : activeSessions[0].session_id;

    } catch (e) {
        console.error(`Failed to get session list for ${state}`, e);
        return null;
    }
}

export const legiscan = {
    // New Combined Fetch with Caching
    getDashboardData: async (state: string = 'NH'): Promise<{ hearings: Hearing[], amendments: AmendedBill[] }> => {
        return cachedData(
            async () => {
                const API_KEY = process.env.LEGISCAN_API_KEY; // Re-read env inside cache context if needed
                if (!API_KEY) {
                    console.warn('⚠️ No LegiScan API Key found. Returning mock hearings only.');
                    return { hearings: getMockHearings(state), amendments: [] };
                }

                try {
                    // 1. Get Session ID Explicitly
                    const sessionId = await getActiveSessionId(state);
                    if (!sessionId) {
                        console.error(`❌ Could not find active session for ${state}`);
                        return { hearings: getMockHearings(state), amendments: [] };
                    }

                    console.log(`📡 Fetching Master List for ${state} (Session ${sessionId})...`);
                    const masterListRes = await fetch(`${BASE_URL}?key=${API_KEY}&op=getMasterList&id=${sessionId}`);
                    const masterData = await masterListRes.json();

                    if (masterData.status === 'ERROR') { // Handle Limit/Errors at MasterList level
                        if (masterData.alert?.message?.includes('exceeded')) {
                            console.warn('⚠️ API Limit Exceeded (Global)');
                            throw new Error('API_LIMIT');
                        }
                        console.error('LegiScan Error:', masterData.alert?.message);
                        return { hearings: getMockHearings(state), amendments: [] };
                    }

                    // 2. Sort bills by most recently active
                    // REDUCED LIMIT: Only scan top 40 actively moving bills to save API calls (The "Miser" Strategy)
                    const bills = Object.values(masterData.masterlist || {})
                        .sort((a: any, b: any) => new Date(b.last_action_date).getTime() - new Date(a.last_action_date).getTime())
                        .slice(0, 40) as any[];

                    console.log(`🔍 Scanning top ${bills.length} bills for hearings & amendments...`);

                    const realHearings: Hearing[] = [];
                    const recentAmendments: AmendedBill[] = [];
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    const parseDate = (dateStr: string) => {
                        const [y, m, d] = dateStr.split('-').map(Number);
                        return new Date(y, m - 1, d, 12, 0, 0);
                    };

                    // Parallel wrapper
                    await Promise.all(bills.map(async (billMeta: any) => {
                        if (!billMeta.bill_id) return;

                        try {
                            const detailRes = await fetch(`${BASE_URL}?key=${API_KEY}&op=getBill&id=${billMeta.bill_id}`);
                            const detailData = await detailRes.json();

                            // Check for API Limit Error in Individual Response
                            if (detailData.alert && detailData.alert.message && detailData.alert.message.includes('exceeded')) {
                                console.warn('⚠️ API Limit hit during detail fetch');
                                throw new Error('API_LIMIT');
                            }

                            const bill = detailData.bill;
                            if (!bill) return;

                            // ... Enrichment Logic ...
                            const sponsorName = bill.sponsors && bill.sponsors[0] ? bill.sponsors[0].name : 'Unknown';
                            const apiSponsor = bill.sponsors && bill.sponsors[0];
                            const enriched = enrichment.getPersonDetails(sponsorName);

                            const sponsorInfo = {
                                name: sponsorName,
                                id: apiSponsor?.people_id ? String(apiSponsor.people_id) : enriched.id,
                                party: (apiSponsor ? apiSponsor.party : 'N/A') as 'R' | 'D' | 'I',
                                next_election: enriched.next_election || '2026',
                                major_donors: enriched.major_donors || []
                            };

                            // A) Check for Hearings
                            if (bill.calendar && bill.calendar.length > 0) {
                                bill.calendar.forEach((event: any) => {
                                    const hearingDate = parseDate(event.date);
                                    if (hearingDate >= today) {
                                        let formattedTime = event.time;
                                        try {
                                            const [h, m] = event.time.split(':');
                                            const hour = parseInt(h);
                                            const ampm = hour >= 12 ? 'PM' : 'AM';
                                            const hour12 = hour % 12 || 12;
                                            formattedTime = `${hour12}:${m} ${ampm}`;
                                        } catch (e) { }

                                        realHearings.push({
                                            hearing_id: event.event_id || Math.random(),
                                            date: event.date,
                                            time: formattedTime,
                                            location: event.location || 'State House',
                                            description: event.description || bill.title,
                                            committee: bill.committee ? bill.committee.name : 'Unknown Committee',
                                            bill_number: bill.bill_number,
                                            bill_id: bill.bill_id,
                                            bill_url: bill.url,
                                            type: bill.body_short === 'H' ? 'House' : 'Senate',
                                            ai_summary: bill.summary ? (bill.summary.length > 200 ? bill.summary.substring(0, 200) + '...' : bill.summary) : (bill.description || ''),
                                            sponsor_info: sponsorInfo,
                                            smart_pills: [
                                                ...enrichment.generateSmartPills(bill.title),
                                                ...(enrichment.calculateStalledStatus(bill.last_action_date, bill.status)
                                                    ? [{ label: 'Stalled', category: 'urgency', icon: '🕸️', description: `No action since ${bill.last_action_date}` }]
                                                    : []),
                                                ...(enrichment.calculateBipartisanship(bill.sponsors?.map((s: any) => s.party) || [])
                                                    ? [{ label: 'Bipartisan', category: 'politics', icon: '🤝', description: 'Supported by both parties' }]
                                                    : [])
                                            ] as Pill[]
                                        });
                                    }
                                });
                            }

                            // B) Check for Recent Amendments
                            if (bill.history && Array.isArray(bill.history)) {
                                const recentAmendmentEvent = bill.history.find((event: any) => {
                                    const evtDate = parseDate(event.date);
                                    const isRecent = (today.getTime() - evtDate.getTime()) / (1000 * 3600 * 24) < 90;
                                    const actionLower = event.action.toLowerCase();
                                    const isAmendment = actionLower.includes('amend') || actionLower.includes('report') || actionLower.includes('otpa') || actionLower.includes('adopted') || actionLower.includes('concur');
                                    return isRecent && isAmendment;
                                });

                                if (recentAmendmentEvent) {
                                    recentAmendments.push({
                                        bill_id: bill.bill_id,
                                        bill_number: bill.bill_number,
                                        description: bill.title,
                                        amendment_date: recentAmendmentEvent.date,
                                        amendment_action: recentAmendmentEvent.action,
                                        sponsor_info: sponsorInfo,
                                        link: bill.url,
                                        smart_pills: [
                                            ...enrichment.generateSmartPills(bill.title),
                                            ...(enrichment.calculateBipartisanship(bill.sponsors?.map((s: any) => s.party) || [])
                                                ? [{ label: 'Bipartisan', category: 'politics', icon: '🤝', description: 'Supported by both parties' }]
                                                : [])
                                        ] as Pill[]
                                    });
                                }
                            }

                        } catch (err: any) {
                            if (err.message === 'API_LIMIT') throw err; // Re-throw to stop fetching
                        }
                    }));

                    realHearings.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                    recentAmendments.sort((a, b) => new Date(b.amendment_date).getTime() - new Date(a.amendment_date).getTime());

                    return { hearings: realHearings, amendments: recentAmendments };

                } catch (e) {
                    console.error('LegiScan Global Error:', e);
                    // Fallback to MOCK if everything explodes
                    return { hearings: getMockHearings(state), amendments: [] };
                }
            },
            ['dashboard-data-v2', state], // Cache Key
            3600 // Revalidate every 1 hour
        );
    },

    // Legacy / Convenience
    getUpcomingHearings: async (state: string = 'NH'): Promise<Hearing[]> => {
        const data = await legiscan.getDashboardData(state);
        return data.hearings;
    },

    getBillDetails: async (billId: number): Promise<Bill | null> => {
        return cachedData(async () => {
            const API_KEY = process.env.LEGISCAN_API_KEY;
            if (!API_KEY) return null;
            try {
                const res = await fetch(`${BASE_URL}?key=${API_KEY}&op=getBill&id=${billId}`);
                const data = await res.json();
                return data.bill as Bill;
            } catch (e) {
                return null;
            }
        }, [`bill-details-${billId}`], 86400); // Cache individual bills for 24 hours
    },

    getRollCall: async (rollCallId: number): Promise<any | null> => {
        return cachedData(async () => {
            const API_KEY = process.env.LEGISCAN_API_KEY;
            if (!API_KEY) return null;
            try {
                const res = await fetch(`${BASE_URL}?key=${API_KEY}&op=getRollCall&id=${rollCallId}`);
                const data = await res.json();
                return data.roll_call;
            } catch (e) {
                return null;
            }
        }, [`roll-call-${rollCallId}`], 86400 * 7); // Cache roll calls heavily
    },

    getPerson: async (peopleId: string): Promise<any | null> => {
        return cachedData(async () => {
            const API_KEY = process.env.LEGISCAN_API_KEY;
            if (!API_KEY) return null;
            try {
                const res = await fetch(`${BASE_URL}?key=${API_KEY}&op=getPerson&id=${peopleId}`);
                const data = await res.json();

                console.log(`✅ getPerson(${peopleId}) - Status: ${data.status}`);

                // Enrich with committees if available
                if (data.person && data.person.committee_list) {
                    const committees = normalizeArray(data.person.committee_list);
                    data.person.committees = committees.map((c: any) => c.name);
                    console.log(`   ├─ Committees: ${committees.length} found`);
                } else {
                    console.log(`   ├─ Committees: NONE (raw value: ${typeof data.person?.committee_list})`);
                }

                return data.person;
            } catch (e) {
                return null;
            }
        }, [`person-v2-${peopleId}`], 86400 * 30); // Cache person details for 30 days (rarely changes)
    },

    getSponsoredList: async (peopleId: string, sessionId?: number): Promise<any[] | null> => {
        return cachedData(async () => {
            const API_KEY = process.env.LEGISCAN_API_KEY;
            if (!API_KEY) return null;
            try {
                // Fetch ALL sponsored bills (no session filter) to ensure we don't miss anything.
                // We will sort locally.
                let url = `${BASE_URL}?key=${API_KEY}&op=getSponsoredList&id=${peopleId}`;
                console.log(`📡 fetching sponsored list: ${url}`);

                const res = await fetch(url);
                const data = await res.json();

                console.log(`✅ getSponsoredList(${peopleId}) - Status: ${data.status}`);

                if (data.status === "ERROR") {
                    console.warn(`   ├─ API Error: ${data.alert?.message || 'Unknown'}`);
                    return [];
                }
                if (!data.sponsoredbills) return [];

                let bills = normalizeArray(data.sponsoredbills);
                console.log(`   ├─ Bills: ${bills.length} found (type was: ${Array.isArray(data.sponsoredbills) ? 'Array' : typeof data.sponsoredbills})`);

                // Sort by Year Descending, then Bill ID Descending (Proxy for newest)
                return bills.sort((a: any, b: any) => {
                    // Safe access to session_id and bill_id
                    return (b.session_id - a.session_id) || (b.bill_id - a.bill_id);
                });

            } catch (e) {
                return null;
            }
        }, [`sponsored-list-v2-${peopleId}`], 86400 * 7); // Cache for 7 days
    }
};
