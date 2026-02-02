import { MOCK_LEGISLATORS } from '@/lib/legislators';
import { legiscan, getActiveSessionId } from '@/lib/legiscan';
import { enrichment } from '@/lib/enrichment';
import { Legislator } from '@/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getLegislatorContact } from '@/lib/legislator-contact';
import { getStateConfig } from '@/lib/states';

export default async function LegislatorProfile(props: { params: Promise<{ state: string, id: string }> }) {
    const params = await props.params;
    const config = getStateConfig(params.state);

    // 1. Try Mock Database (Static/Demo Data)
    let legislator: Partial<Legislator> | undefined = Object.values(MOCK_LEGISLATORS).find(l => l.id === params.id);
    let sponsoredBills: any[] = [];
    let isLive = false;

    // 2. Try Live API (LegiScan) if ID is numeric
    if (!legislator && !isNaN(Number(params.id))) {
        // Fetch Session ID first to ensure we get relevant bills
        const sessionId = await getActiveSessionId(params.state);

        [legislator, sponsoredBills] = await Promise.all([
            legiscan.getPerson(params.id).then(p => {
                if (!p) return undefined;
                return {
                    id: String(p.people_id),
                    name: p.name,
                    role: p.role,
                    district: p.district,
                    party: p.party,
                    email: p.email,
                    phone: p.phone,
                    next_election: "2026",
                    attendance_rate: 0,
                    badges: [],
                    votes: [],
                    major_donors: [],
                    top_donors: [],
                    committees: p.committees || [] // Map committees
                } as Partial<Legislator>;
            }),
            legiscan.getSponsoredList(params.id, sessionId || undefined, params.state).then(res => res || [])
        ]);

        if (legislator) {
            isLive = true;
            // Derive Badges from Sponsored Bills
            if (sponsoredBills.length > 0) {
                const combinedText = sponsoredBills.slice(0, 10).map(b => b.title + ' ' + b.description).join(' ');
                const pills = enrichment.generateSmartPills(combinedText);
                // Deduplicate and limit
                const uniqueBadges = Array.from(new Set(pills.map(p => `${p.icon} ${p.label}`)));
                legislator.badges = uniqueBadges.slice(0, 4);
            }
        }
    }

    if (!legislator) {
        return notFound();
    }

    // 3. Hydrate with Registry Data (The "Verified Source" for contacts)
    const contact = getLegislatorContact(params.state, legislator.name || '', legislator.role);
    // Merge: Prefer Registry > API
    if (contact.email) legislator.email = contact.email;
    if (contact.phone) legislator.phone = contact.phone;
    if (contact.district) legislator.district = contact.district;

    // Helpers for UI
    const nameClean = (legislator.name || '').replace(/^(Rep\.|Sen\.|Representative|Senator)\s+/i, '');
    const initials = nameClean.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const partyColorBg = legislator.party === 'R' ? 'bg-red-600' : legislator.party === 'D' ? 'bg-blue-600' : 'bg-gray-600';

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pb-20 transition-colors">
            {/* Business Card Hero Section */}
            <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <Link href={`/${params.state}/dashboard`} className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-nh-green-700 dark:hover:text-nh-green-400 mb-6 inline-block transition-colors">
                        ← Back to Dashboard
                    </Link>

                    <div className="bg-white border-2 border-granite-100 rounded-xl p-6 md:p-8 shadow-sm max-w-3xl hover:border-granite-200 transition-all">
                        {/* Business Card Layout */}
                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                            {/* Dynamic Avatar */}
                            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${partyColorBg} text-white flex items-center justify-center text-3xl font-bold border-4 border-white shadow-md shrink-0`}>
                                {initials}
                            </div>

                            <div className="flex-1">
                                {/* Metadata Header */}
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <span className="text-xs font-bold text-black uppercase tracking-widest">
                                        {(config?.legislatureName || 'State Legislature').replace('General Court', 'Legislature')} Member
                                    </span>
                                    {legislator.party && (
                                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border uppercase ${legislator.party === 'R' ? 'bg-red-50 text-red-700 border-red-100' :
                                            legislator.party === 'D' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-gray-100'
                                            }`}>
                                            {legislator.party}
                                        </span>
                                    )}
                                </div>

                                {/* Name & Title */}
                                <h1 className="text-2xl md:text-3xl font-black text-black leading-tight mb-1">
                                    {legislator.name}
                                </h1>
                                <p className="text-base text-black font-medium">
                                    {legislator.role} • {legislator.district}
                                </p>

                                {/* Branding Footer */}
                                <div className="flex items-center gap-2 mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    <span className="text-lg opacity-50">🏛️</span>
                                    <span>{config?.legislatureName || 'State Legislature'} • {config?.capitolCity || 'State Capitol'}</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col gap-2 min-w-[140px] pt-4 md:pt-0 border-t md:border-t-0 border-gray-100 mt-4 md:mt-0">
                                {legislator.email && (
                                    <a href={`mailto:${legislator.email}`} className="flex items-center justify-center gap-2 w-full bg-white border-2 border-granite-200 hover:border-granite-400 text-black text-sm font-bold py-2.5 px-4 rounded-lg transition-all shadow-sm hover:shadow active:scale-95">
                                        <span>📧</span> Email
                                    </a>
                                )}
                                {legislator.phone && (
                                    <a href={`tel:${legislator.phone}`} className="flex items-center justify-center gap-2 w-full bg-white border-2 border-granite-200 hover:border-granite-400 text-black text-sm font-bold py-2.5 px-4 rounded-lg transition-all shadow-sm hover:shadow active:scale-95">
                                        <span>📞</span> Call
                                    </a>
                                )}
                                {!isLive && legislator.attendance_rate !== 0 && (
                                    <div className="text-center mt-2">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase block">Attendance</span>
                                        <span className="text-lg font-black text-green-700">{legislator.attendance_rate}%</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8">
                {/* Committees Section (Replaces Donors for Live Data) */}
                {/* Committee Assignments (Enriched) */}
                <section className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 transition-colors">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                        <span>🏛️</span> Committee Assignments
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                        Current legislative committees.
                    </p>

                    {/* Data Source: API > Override > Enriched */}
                    {(() => {
                        const comms = (legislator.committees && legislator.committees.length > 0)
                            ? legislator.committees
                            : enrichment.getCommitteeAssignments(legislator.id || params.id, params.state, legislator.party || 'I');

                        return (comms.length > 0) ? (
                            <ul className="space-y-2">
                                {comms.map((comm, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-800 dark:text-gray-200 font-medium p-2 bg-gray-50 dark:bg-gray-800 rounded border border-gray-100 dark:border-gray-700">
                                        <span className="text-gray-400">•</span> {comm}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="text-gray-500 dark:text-slate-500 italic text-sm">
                                Not currently assigned to any major committees.
                            </div>
                        );
                    })()}
                </section>

                {/* Financials / Donors (Enriched / Researched) */}
                <section className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 transition-colors">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                        <span>💰</span> Top Contributors
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                        Who is funding this campaign? (Est. 2022-2024 Cycle)
                    </p>

                    {(() => {
                        const donors = (legislator.major_donors && legislator.major_donors.length > 0)
                            ? legislator.major_donors
                            : enrichment.getDonors(legislator.id || params.id, params.state, legislator.party || 'I');

                        return (donors.length > 0) ? (
                            <div className="space-y-3">
                                {donors.map((donor, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 transition-colors">
                                        <span className="font-bold text-gray-800 dark:text-gray-200 text-sm">{donor.name}</span>
                                        {donor.amount && <span className="font-mono text-green-700 dark:text-green-400 font-bold text-sm">${donor.amount}</span>}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-gray-500 dark:text-slate-500 italic text-sm">
                                No campaign finance data available.
                            </div>
                        );
                    })()}
                </section>

                {/* Live Data: Display Recent Sponsorships (Since we don't have simplified vote records) */}
                {isLive ? (
                    <section className="md:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 transition-colors">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                            <span>📜</span> Recent Sponsorships
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                            Bills recently introduced or sponsored by {legislator.name}.
                        </p>

                        <div className="space-y-0 text-sm">
                            <div className="grid grid-cols-12 gap-4 pb-2 border-b-2 border-gray-100 dark:border-gray-800 font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide text-xs transition-colors">
                                <div className="col-span-2">Bill #</div>
                                <div className="col-span-10">Title / Subject</div>
                            </div>

                            {sponsoredBills.slice(0, 10).map((bill, i) => (
                                <div key={i} className="grid grid-cols-12 gap-4 py-3 border-b border-gray-50 dark:border-gray-800 items-center transition-colors">
                                    <div className="col-span-2">
                                        <a href={bill.url} target="_blank" rel="noopener noreferrer" className="font-bold text-nh-green-700 hover:underline">
                                            {bill.bill_number}
                                        </a>
                                    </div>
                                    <div className="col-span-10">
                                        <span className="font-bold text-gray-800 dark:text-gray-200 block">{bill.title}</span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{bill.description}</span>
                                    </div>
                                </div>
                            ))}

                            {sponsoredBills.length === 0 && (
                                <div className="py-8 text-center text-gray-500 dark:text-slate-500 italic">
                                    No recent sponsored bills found.
                                </div>
                            )}
                        </div>
                    </section>
                ) : (
                    /* Mock Data: Voting Record */
                    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 p-6 transition-colors">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                            <span>📜</span> Key Voting Record
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-slate-400 mb-4 transition-colors">
                            How {legislator.name} voted on key issues.
                        </p>

                        <div className="space-y-0 text-sm">
                            <div className="grid grid-cols-12 gap-4 pb-2 border-b-2 border-gray-100 dark:border-slate-800 font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide text-xs transition-colors">
                                <div className="col-span-2">Date</div>
                                <div className="col-span-8">Bill / Motion</div>
                                <div className="col-span-2 text-right">Vote</div>
                            </div>

                            {legislator.votes?.map((vote, i) => (
                                <div key={i} className="grid grid-cols-12 gap-4 py-3 border-b border-gray-50 dark:border-slate-800 items-center transition-colors">
                                    <div className="col-span-2 text-gray-500 dark:text-slate-500">
                                        {vote.date}
                                    </div>
                                    <div className="col-span-8">
                                        <span className="font-bold text-gray-800 dark:text-slate-200 block">{vote.bill_number}: {vote.description}</span>
                                        <span className="text-xs text-gray-400 dark:text-slate-500">{vote.action}</span>
                                    </div>
                                    <div className="col-span-2 text-right">
                                        <span className={`inline-flex items-center px-2 py-1 rounded font-bold border ${vote.legislator_vote === 'Yea' ? 'bg-green-50 text-green-700 border-green-100 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800' :
                                            vote.legislator_vote === 'Nay' ? 'bg-red-50 text-red-700 border-red-100 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800' :
                                                'bg-gray-50 text-gray-500 border-gray-100 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700'
                                            } transition-colors`}>
                                            {vote.legislator_vote === 'Yea' ? '✅ Yea' : vote.legislator_vote === 'Nay' ? '❌ Nay' : vote.legislator_vote}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
