import { MOCK_LEGISLATORS } from '@/lib/legislators';
import { legiscan, getActiveSessionId } from '@/lib/legiscan';
import { enrichment } from '@/lib/enrichment';
import { Legislator } from '@/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function LegislatorProfile(props: { params: Promise<{ state: string, id: string }> }) {
    const params = await props.params;

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
            legiscan.getSponsoredList(params.id).then(res => res || [])
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

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-950 pb-20 transition-colors">
            {/* Header / Hero */}
            <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    <Link href={`/${params.state}/dashboard`} className="text-sm font-bold text-gray-500 dark:text-slate-400 hover:text-nh-green-700 dark:hover:text-nh-green-400 mb-4 inline-block transition-colors">
                        ← Back to Dashboard
                    </Link>

                    <div className="flex flex-col md:flex-row items-start gap-6">
                        {/* Avatar Placeholder */}
                        <div className="w-24 h-24 bg-gray-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-3xl shadow-inner transition-colors">
                            👤
                        </div>

                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-black text-gray-900 dark:text-white transition-colors">{legislator.name}</h1>
                                <span className={`px-3 py-1 rounded-full text-sm font-bold border ${legislator.party === 'R' ? 'bg-red-50 text-red-700 border-red-100 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800' :
                                    legislator.party === 'D' ? 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800' :
                                        'bg-purple-50 text-purple-700 border-purple-100 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800'
                                    } transition-colors`}>
                                    {legislator.party === 'R' ? 'Republican' : legislator.party === 'D' ? 'Democrat' : 'Independent'}
                                </span>
                            </div>

                            <p className="text-lg text-gray-600 dark:text-slate-300 font-medium mb-4 transition-colors">
                                {legislator.role} • {legislator.district}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {(legislator.badges || []).map((badge, i) => (
                                    <span key={i} className="text-xs font-bold bg-gray-100 dark:bg-slate-800 text-gray-800 dark:text-slate-200 px-2 py-1 rounded border border-gray-300 dark:border-slate-700 transition-colors">
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Quick Stats Card */}
                        <div className="bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 rounded-xl p-4 min-w-[200px] transition-colors">
                            <h3 className="text-xs font-bold text-gray-500 dark:text-slate-400 uppercase mb-2">Contact & Stats</h3>
                            <div className="space-y-2 mb-4">
                                {!isLive && legislator.attendance_rate !== 0 && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600 dark:text-slate-400">Attendance</span>
                                        <span className="font-bold text-green-700 dark:text-green-400">{legislator.attendance_rate}%</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600 dark:text-slate-400">Up for re-election</span>
                                    <span className="font-bold text-gray-900 dark:text-white">{legislator.next_election}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 dark:border-slate-700 pt-3 space-y-2">
                                {legislator.email && (
                                    <a href={`mailto:${legislator.email}`} className="block w-full text-center bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-white text-sm font-bold py-2 rounded hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors">
                                        📧 Email
                                    </a>
                                )}
                                {legislator.phone && (
                                    <a href={`tel:${legislator.phone}`} className="block w-full text-center bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-800 dark:text-white text-sm font-bold py-2 rounded hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors">
                                        📞 Call
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-8 grid md:grid-cols-2 gap-8">
                {/* Committees Section (Replaces Donors for Live Data) */}
                {isLive && (
                    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 p-6 transition-colors">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                            <span>🏛️</span> Committee Assignments
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-slate-400 mb-4 transition-colors">
                            Current legislative committees.
                        </p>

                        {(legislator.committees && legislator.committees.length > 0) ? (
                            <ul className="space-y-2">
                                {legislator.committees.map((comm, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-800 dark:text-slate-200 font-medium p-2 bg-gray-50 dark:bg-slate-800 rounded border border-gray-100 dark:border-slate-700">
                                        <span className="text-gray-400">•</span> {comm}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="text-gray-500 dark:text-slate-500 italic text-sm">
                                Not currently assigned to any major committees.
                            </div>
                        )}
                    </section>
                )}

                {/* Financials / Donors (Only show for Mock Data / Manual Entries) */}
                {!isLive && (
                    <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 p-6 transition-colors">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                            <span>💰</span> Top Contributors
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-slate-400 mb-4 transition-colors">
                            Who is funding this campaign? (Data: Demo)
                        </p>

                        <div className="space-y-3">
                            {(legislator.major_donors || legislator.top_donors || []).map((donor, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700 transition-colors">
                                    <span className="font-bold text-gray-800 dark:text-slate-200">{donor.name}</span>
                                    {donor.amount && <span className="font-mono text-green-700 dark:text-green-400 font-bold">${donor.amount}</span>}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Live Data: Display Recent Sponsorships (Since we don't have simplified vote records) */}
                {isLive ? (
                    <section className="md:col-span-2 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-800 p-6 transition-colors">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2 transition-colors">
                            <span>📜</span> Recent Sponsorships
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-slate-400 mb-4 transition-colors">
                            Bills recently introduced or sponsored by {legislator.name}.
                        </p>

                        <div className="space-y-0 text-sm">
                            <div className="grid grid-cols-12 gap-4 pb-2 border-b-2 border-gray-100 dark:border-slate-800 font-bold text-gray-500 dark:text-slate-400 uppercase tracking-wide text-xs transition-colors">
                                <div className="col-span-2">Bill #</div>
                                <div className="col-span-10">Title / Subject</div>
                            </div>

                            {sponsoredBills.slice(0, 10).map((bill, i) => (
                                <div key={i} className="grid grid-cols-12 gap-4 py-3 border-b border-gray-50 dark:border-slate-800 items-center transition-colors">
                                    <div className="col-span-2">
                                        <a href={bill.url} target="_blank" rel="noopener noreferrer" className="font-bold text-nh-green-700 hover:underline">
                                            {bill.bill_number}
                                        </a>
                                    </div>
                                    <div className="col-span-10">
                                        <span className="font-bold text-gray-800 dark:text-slate-200 block">{bill.title}</span>
                                        <span className="text-xs text-gray-500 dark:text-slate-400 line-clamp-1">{bill.description}</span>
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
