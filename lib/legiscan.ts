import { Bill, Hearing, AmendedBill, Pill } from '@/types';
import { enrichment } from './enrichment';

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
const normalizeArray = (info: Record<string, unknown> | unknown[] | null | undefined): unknown[] => {
    if (!info) return [];
    if (Array.isArray(info)) return info;
    // Filter out non-numeric keys like "summary" or "mime_type" which sometimes appear mixed in
    return Object.keys(info)
        .filter(k => !isNaN(parseInt(k)))
        .map(k => (info as Record<string, unknown>)[k]);
};

// Helper to get the correct session ID for the current year
export const getActiveSessionId = async (state: string): Promise<{ id: number, year: number } | null> => {
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

        // Filter for sessions in current or last year
        const relevantSessions = data.sessions.filter((s: { year_start: number }) =>
            s.year_start >= currentYear - 1
        );

        // Sort by Year Descending
        relevantSessions.sort((a: { year_start: number }, b: { year_start: number }) => b.year_start - a.year_start);

        // 1. Try to find the latest session that actually has data (dataset_hash is not null)
        const activeWithData = relevantSessions.find((s: { dataset_hash: string }) => s.dataset_hash);

        if (activeWithData) {
            if (process.env.DEBUG) console.log(`State ${state}: Using most recent populated session: ${activeWithData.year_start} (ID: ${activeWithData.session_id})`);
            return { id: activeWithData.session_id, year: activeWithData.year_start };
        }

        // 2. Fallback: If no data hash (e.g. very new session), just take the newest one
        // and hope for the best, or maybe the previous year?
        // Let's take the newest one but warn.
        // Actually, for the demo, we prefer data. If 2026 is empty, show 2025.
        // The above check `activeWithData` handles this! It skips 2026 (null hash) and picks 2025.

        if (relevantSessions.length > 0) {
            if (process.env.DEBUG) console.log(`State ${state}: No populated session found? Defaulting to newest: ${relevantSessions[0].year_start}`);
            return { id: relevantSessions[0].session_id, year: relevantSessions[0].year_start };
        }

        const fallback = data.sessions[0];
        return fallback ? { id: fallback.session_id, year: fallback.year_start } : null;

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
                    const sessionInfo = await getActiveSessionId(state);
                    if (!sessionInfo) {
                        console.error(`❌ Could not find active session for ${state}`);
                        return { hearings: getMockHearings(state), amendments: [] };
                    }
                    const { id: sessionId, year: sessionYear } = sessionInfo;
                    const isHistorical = sessionYear < new Date().getFullYear();

                    if (process.env.DEBUG) console.log(`📡 Fetching Master List for ${state} (Session ${sessionId}, Historical: ${isHistorical})...`);
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
                    const bills = (Object.values(masterData.masterlist || {}) as { bill_id: number; last_action_date: string }[])
                        .sort((a, b) => new Date(b.last_action_date).getTime() - new Date(a.last_action_date).getTime())
                        .slice(0, 40);

                    if (process.env.DEBUG) console.log(`🔍 Scanning top ${bills.length} bills for hearings & amendments...`);

                    const realHearings: Hearing[] = [];
                    const recentAmendments: AmendedBill[] = [];
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    const parseDate = (dateStr: string) => {
                        const [y, m, d] = dateStr.split('-').map(Number);
                        return new Date(y, m - 1, d, 12, 0, 0);
                    };

                    // Parallel wrapper
                    await Promise.all(bills.map(async (billMeta: { bill_id: number }) => {
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
                            // Enrichment Logic (with Committee Fallback)
                            const sponsorName = (bill.sponsors && bill.sponsors[0]) ? bill.sponsors[0].name : (bill.committee ? `Joint Committee on ${bill.committee.name}` : 'Unknown');
                            const apiSponsor = bill.sponsors && bill.sponsors[0];
                            const enriched = enrichment.getPersonDetails(sponsorName);

                            const sponsorInfo = {
                                name: sponsorName,
                                id: apiSponsor?.people_id ? String(apiSponsor.people_id) : (bill.committee ? 'committee' : enriched.id),
                                party: (apiSponsor ? apiSponsor.party : 'N/A') as 'R' | 'D' | 'I' | 'N/A',
                                role: (bill.committee && !apiSponsor) ? 'Committee' : (apiSponsor?.role || 'Representative'),
                                next_election: enriched.next_election || '2026',
                                major_donors: enriched.major_donors || []
                            };

                            // A) Check for Hearings
                            if (bill.calendar && bill.calendar.length > 0) {
                                bill.calendar.forEach((event: { date: string, time: string, event_id: number, location: string, description: string }) => {
                                    const hearingDate = parseDate(event.date);
                                    // Relax filter for historical sessions
                                    if (hearingDate >= today || isHistorical) {
                                        let formattedTime = event.time;
                                        try {
                                            const [h, m] = event.time.split(':');
                                            const hour = parseInt(h);
                                            const ampm = hour >= 12 ? 'PM' : 'AM';
                                            const hour12 = hour % 12 || 12;
                                            formattedTime = `${hour12}:${m} ${ampm}`;
                                        } catch (_e) { }

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
                                            ai_summary: bill.summary ? (bill.summary.length > 140 ? bill.summary.substring(0, 140) + '...' : bill.summary) : (bill.description || ''),
                                            sponsor_info: sponsorInfo,
                                            smart_pills: [
                                                ...enrichment.generateSmartPills(bill.title),
                                                ...(enrichment.calculateStalledStatus(bill.last_action_date, bill.status)
                                                    ? [{ label: 'Stalled', category: 'urgency', icon: '🕸️', description: `No action since ${bill.last_action_date}` }]
                                                    : []),
                                                ...(enrichment.calculateBipartisanship(bill.sponsors?.map((s: { party: string }) => s.party) || [])
                                                    ? [{ label: 'Bipartisan', category: 'politics', icon: '🤝', description: 'Supported by both parties' }]
                                                    : [])
                                            ] as Pill[]
                                        });
                                    }
                                });
                            }

                            // B) Check for Recent Amendments
                            if (bill.history && Array.isArray(bill.history)) {
                                const recentAmendmentEvent = bill.history.find((event: { date: string, action: string }) => {
                                    const evtDate = parseDate(event.date);
                                    const isRecent = (today.getTime() - evtDate.getTime()) / (1000 * 3600 * 24) < 90;
                                    const actionLower = event.action.toLowerCase();
                                    const isAmendment = actionLower.includes('amend') || actionLower.includes('report') || actionLower.includes('otpa') || actionLower.includes('adopted') || actionLower.includes('concur');
                                    // Allow if recent OR historical session
                                    return (isRecent || isHistorical) && isAmendment;
                                });

                                const sponsorName = (bill.sponsors && bill.sponsors[0]) ? bill.sponsors[0].name : (bill.committee ? `Joint Committee on ${bill.committee.name}` : 'Unknown');
                                const apiSponsor = bill.sponsors && bill.sponsors[0];
                                const enriched = enrichment.getPersonDetails(sponsorName);

                                const sponsorInfo = {
                                    name: sponsorName,
                                    id: apiSponsor?.people_id ? String(apiSponsor.people_id) : (bill.committee ? 'committee' : enriched.id),
                                    party: (apiSponsor ? apiSponsor.party : 'N/A') as 'R' | 'D' | 'I' | 'N/A',
                                    role: (bill.committee && !apiSponsor) ? 'Committee' : (apiSponsor?.role || 'Representative'),
                                    next_election: enriched.next_election || '2026',
                                    major_donors: enriched.major_donors || []
                                };

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
                                            ...(enrichment.calculateBipartisanship(bill.sponsors?.map((s: { party: string }) => s.party) || [])
                                                ? [{ label: 'Bipartisan', category: 'politics', icon: '🤝', description: 'Supported by both parties' }]
                                                : [])
                                        ] as Pill[]
                                    });
                                }
                            }

                        } catch (err: unknown) {
                            if ((err as Error).message === 'API_LIMIT') throw err; // Re-throw to stop fetching
                        }
                    }));

                    realHearings.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
                    recentAmendments.sort((a, b) => new Date(b.amendment_date).getTime() - new Date(a.amendment_date).getTime());

                    // FALLBACK: If "Ghost Town" (No hearings, No amendments), show *something*
                    // Just take the top 5 most recently active bills and treat them as "Recent Activity"
                    if (realHearings.length === 0 && recentAmendments.length === 0) {
                        console.log(`State ${state}: No hearings or amendments found. Activating 'Recent Activity' fallback.`);

                        const recentActivity = await Promise.all(bills.slice(0, 5).map(async (billMeta: { bill_id: number }) => {
                            if (!billMeta.bill_id) return null;
                            try {
                                const detailRes = await fetch(`${BASE_URL}?key=${API_KEY}&op=getBill&id=${billMeta.bill_id}`);
                                const detailData = await detailRes.json();
                                const bill = detailData.bill;
                                if (!bill) return null;

                                const sponsorName = (bill.sponsors && bill.sponsors[0]) ? bill.sponsors[0].name : (bill.committee ? `Joint Committee on ${bill.committee.name}` : 'Unknown');
                                const apiSponsor = bill.sponsors && bill.sponsors[0];
                                const enriched = enrichment.getPersonDetails(sponsorName);

                                const sponsorInfo = {
                                    name: sponsorName,
                                    id: apiSponsor?.people_id ? String(apiSponsor.people_id) : (bill.committee ? 'committee' : enriched.id),
                                    party: (apiSponsor ? apiSponsor.party : 'N/A') as 'R' | 'D' | 'I' | 'N/A',
                                    role: (bill.committee && !apiSponsor) ? 'Committee' : (apiSponsor?.role || 'Representative'),
                                    next_election: enriched.next_election || '2026',
                                    major_donors: enriched.major_donors || []
                                };

                                // Create a "Generic Activity" entry
                                // We map it to AmendedBill type for UI compatibility, 
                                // but label the action clearly.
                                return {
                                    bill_id: bill.bill_id,
                                    bill_number: bill.bill_number,
                                    description: bill.title,
                                    amendment_date: bill.last_action_date,
                                    amendment_action: bill.last_action || 'Updated',
                                    sponsor_info: sponsorInfo,
                                    link: bill.url,
                                    smart_pills: [
                                        ...enrichment.generateSmartPills(bill.title),
                                        { label: 'Recent Update', category: 'urgency', icon: '⚡', description: 'Recently active' }
                                    ] as Pill[]
                                };
                            } catch (_e) { return null; }
                        }));

                        const validFallback = recentActivity.filter(Boolean) as AmendedBill[];
                        recentAmendments.push(...validFallback);
                    }

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
            } catch (_e) {
                return null;
            }
        }, [`bill-details-${billId}`], 86400); // Cache individual bills for 24 hours
    },

    getRollCall: async (rollCallId: number): Promise<unknown | null> => {
        return cachedData(async () => {
            const API_KEY = process.env.LEGISCAN_API_KEY;
            if (!API_KEY) return null;
            try {
                const res = await fetch(`${BASE_URL}?key=${API_KEY}&op=getRollCall&id=${rollCallId}`);
                const data = await res.json();
                return data.roll_call;
            } catch (_e) {
                return null;
            }
        }, [`roll-call-${rollCallId}`], 86400 * 7); // Cache roll calls heavily
    },

    getPerson: async (peopleId: string): Promise<Record<string, unknown> | null> => {
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
                    data.person.committees = committees.map((c) => (c as { name: string }).name);
                    console.log(`   ├─ Committees: ${committees.length} found`);
                } else {
                    console.log(`   ├─ Committees: NONE (raw value: ${typeof data.person?.committee_list})`);
                }

                return data.person;
            } catch (_e) {
                return null;
            }
        }, [`person-v2-${peopleId}`], 86400 * 30); // Cache person details for 30 days (rarely changes)
    },

    // Generic Search
    searchBills: async (state: string, query: string): Promise<unknown[]> => {
        return cachedData(async () => {
            const API_KEY = process.env.LEGISCAN_API_KEY;
            if (!API_KEY) return [];
            try {
                const res = await fetch(`${BASE_URL}?key=${API_KEY}&op=getSearch&state=${state}&query=${encodeURIComponent(query)}`);
                const data = await res.json();
                if (data.status === 'ERROR' || !data.searchresult) return [];

                return normalizeArray(data.searchresult);
            } catch (_e) {
                return [];
            }
        }, [`search-${state}-${query}`], 3600); // Cache search for 1 hour
    },

    getSponsoredList: async (peopleId: string, sessionId?: number, stateCode: string = 'NH'): Promise<Record<string, unknown>[] | null> => {
        return cachedData(async () => {
            const API_KEY = process.env.LEGISCAN_API_KEY;
            if (!API_KEY) return null;
            try {
                // 1. Try Standard Lookup
                let url = `${BASE_URL}?key=${API_KEY}&op=getSponsoredList&id=${peopleId}`;
                if (sessionId) {
                    url += `&session_id=${sessionId}`;
                }
                console.log(`📡 fetching sponsored list: ${url}`);

                const res = await fetch(url);
                const data = await res.json();

                let bills: Record<string, unknown>[] = [];
                if (data.sponsoredbills) {
                    bills = normalizeArray(data.sponsoredbills) as Record<string, unknown>[];
                }

                // 2. FALLBACK: If list is empty, try Name Search (Fix for broken API links)
                if (bills.length === 0) {
                    console.log(`⚠️ No direct sponsorships found for ${peopleId}. Attempting Search Fallback...`);

                    // A) Get Person Name
                    const person = await legiscan.getPerson(peopleId);
                    if (person && person.name) {
                        const nameQuery = String(person.name); // e.g. "David Walker"
                        console.log(`   🔎 Searching for bills matching: "${nameQuery}" in ${stateCode}`);

                        // B) Search Bills using properly passed state code
                        const searchResults = await legiscan.searchBills(stateCode, nameQuery);

                        // C) Verify Sponsorship by fetching details (Limit to top 10 to save API)
                        // This is expensive, so we only do it if absolutely necessary
                        const potentialBills = searchResults.slice(0, 10);

                        console.log(`   🔎 Found ${potentialBills.length} potential matches. Verifying...`);

                        const verifiedBills = [];
                        for (const pb of potentialBills) {
                            const b = pb as { bill_id: number; bill_number: string; title: string; last_action: string; last_action_date: string; text_url?: string; url?: string };
                            if (!b.bill_id) continue;
                            const details = await legiscan.getBillDetails(b.bill_id);
                            if (details && details.sponsors) {
                                // Check if OUR guy is in the sponsor list
                                const isSponsor = details.sponsors.some((s: { people_id: unknown }) => String(s.people_id) === String(peopleId));
                                if (isSponsor) {
                                    // Map to the "SponsoredList" format (which is lighter than full bill)
                                    verifiedBills.push({
                                        bill_id: b.bill_id,
                                        bill_number: b.bill_number,
                                        title: b.title,
                                        description: b.title, // Search results put title in title
                                        last_action: b.last_action,
                                        last_action_date: b.last_action_date,
                                        url: b.text_url || b.url
                                    });
                                }
                            }
                        }
                        console.log(`   ✅ Verified ${verifiedBills.length} bills via fallback.`);
                        bills = verifiedBills;
                    }
                }

                console.log(`   ├─ Bills: ${bills.length} found`);

                // Sort by Bill ID Descending (Proxy for newest)
                return (bills as { bill_id: number }[]).sort((a, b) => {
                    return (b.bill_id - a.bill_id);
                });

            } catch (e) {
                console.error("SponsoredList Error", e);
                return null;
            }
        }, [`sponsored-list-v3-${peopleId}`], 86400 * 7); // Cache for 7 days
    }
};
