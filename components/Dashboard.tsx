"use client";

import { useState } from 'react';
import { Hearing, AmendedBill } from '@/types';
import CalendarWidget from '@/components/CalendarWidget';
import Link from 'next/link';
import { isSameDay } from 'date-fns';
import SmartPill from './SmartPill';


import { useSavedBills } from '@/hooks/useSavedBills';

export default function Dashboard({ hearings, amendments = [], initialViewMode = 'hearings', stateCode }: { hearings: Hearing[], amendments?: AmendedBill[], initialViewMode?: 'hearings' | 'amendments' | 'saved', stateCode: string }) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [expandedHearingIds, setExpandedHearingIds] = useState<Set<number>>(new Set());
    const [viewMode, setViewMode] = useState<'hearings' | 'amendments' | 'saved'>(initialViewMode);

    // Saved Bills Hook
    // Saved Bills Hook
    const { savedBills, savedIds, toggleSave, isSaved, mounted } = useSavedBills();

    const toggleExpansion = (id: number) => {
        const newSet = new Set(expandedHearingIds);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        setExpandedHearingIds(newSet);
    };

    const parseLocalDay = (dateStr: string) => {
        const [y, m, d] = dateStr.split('-').map(Number);
        return new Date(y, m - 1, d, 12, 0, 0);
    };

    // Filter hearings based on selected date (show all if null)
    const filteredHearings = selectedDate
        ? hearings.filter(h => isSameDay(parseLocalDay(h.date), selectedDate))
        : hearings;

    // Filter Saved Items
    // We combine hearings and amendments that match saved IDs
    // Note: This logic assumes we have the data loaded. If saved bill isn't in current list, we might miss it.
    // For MVP, we filter strictly from loaded lists.
    const savedHearings = hearings.filter(h => h.bill_id && isSaved(h.bill_id));
    const savedAmendments = amendments.filter(a => isSaved(a.bill_id));
    const hasSavedItems = savedHearings.length > 0 || savedAmendments.length > 0;

    const BookmarkButton = ({ billId }: { billId?: number }) => {
        if (!billId || !mounted) return null;
        const active = isSaved(billId);
        return (
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleSave(billId, stateCode);
                }}
                className={`ml-2 p-1 rounded-full transition-all ${active
                    ? 'text-nh-green-600 bg-nh-green-50 dark:bg-nh-green-900 dark:text-nh-green-300 hover:bg-nh-green-100'
                    : 'text-granite-400 dark:text-gray-400 hover:text-nh-green-600 hover:bg-nh-green-50 dark:hover:bg-gray-800'}`}
                title={active ? "Remove from Saved" : "Save for later"}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" className="w-4 h-4">
                    {/* Bookmark Icon */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-7-3.5L5 21V5z" />
                </svg>
            </button>
        );
    };

    return (
        <div className="max-w-4xl mx-auto px-6 mt-8 -translate-y-4">
            {/* View Mode Tabs */}
            <div className="flex justify-center mb-8">
                <div className="bg-granite-50 p-1 rounded-xl shadow-sm border border-granite-200 inline-flex items-center">
                    <button
                        onClick={() => setViewMode('hearings')}
                        className={`px-4 md:px-6 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'hearings' ? 'bg-nh-green-700 text-white shadow-sm' : 'text-granite-800 hover:bg-granite-100'}`}
                    >
                        Upcoming Hearings
                    </button>
                    <button
                        onClick={() => setViewMode('amendments')}
                        className={`px-4 md:px-6 py-2 rounded-lg text-sm font-bold transition-all ${viewMode === 'amendments' ? 'bg-nh-green-700 text-white shadow-sm' : 'text-granite-800 hover:bg-granite-100'}`}
                    >
                        Recent Amendments
                    </button>
                    <button
                        onClick={() => setViewMode('saved')}
                        className={`px-4 md:px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${viewMode === 'saved' ? 'bg-nh-green-700 text-white shadow-sm' : 'text-granite-800 hover:bg-granite-100'}`}
                    >
                        <span>🔖</span> My Queue
                        {mounted && savedIds.length > 0 && (
                            <span className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${viewMode === 'saved' ? 'bg-white text-nh-green-800' : 'bg-granite-200 text-granite-800'}`}>
                                {savedIds.length}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {viewMode === 'hearings' ? (
                <>
                    <CalendarWidget
                        hearings={hearings}
                        selectedDate={selectedDate}
                        onSelectDate={setSelectedDate}
                    />

                    {/* Clear Filter Button (Only show if date selected) */}
                    {selectedDate && (
                        <div className="flex justify-center -mt-4 mb-6">
                            <button
                                onClick={() => setSelectedDate(null)}
                                className="text-xs font-bold text-granite-900 hover:text-nh-green-900 bg-granite-50 border border-granite-300 px-3 py-1 rounded-full shadow-sm hover:border-nh-green-500 transition-colors"
                            >
                                ✕ Clear Filter
                            </button>
                        </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-granite-900">
                            {selectedDate ? 'Hearings on ' + selectedDate.toLocaleDateString() : 'Upcoming Hearings'}
                        </h2>
                    </div>

                    {filteredHearings.length === 0 && (
                        <div className="text-center py-12 bg-granite-50 rounded-xl border border-granite-200 shadow-sm mb-6">
                            <div className="text-4xl mb-3">📅</div>
                            <h3 className="text-granite-900 font-bold text-lg">No Hearings Scheduled</h3>
                            <p className="text-granite-600 mt-2 px-4">
                                The legislature may be out of session or no public hearings are currently on the calendar.
                                <br />
                                <span className="text-sm mt-2 inline-block">Check the <strong>Recent Amendments</strong> tab for activity.</span>
                            </p>
                        </div>
                    )}

                    <div className="grid gap-6">
                        {filteredHearings.map((hearing) => {
                            const isExpanded = hearing.hearing_id ? expandedHearingIds.has(hearing.hearing_id) : false;
                            const smartPills = hearing.smart_pills || [];
                            const visiblePills = isExpanded ? smartPills : smartPills.slice(0, 3);
                            const hiddenCount = smartPills.length - visiblePills.length;

                            return (
                                <div
                                    key={hearing.hearing_id}
                                    className="bg-granite-50 dark:bg-gray-900 rounded-xl shadow-sm border border-granite-100 dark:border-gray-800 p-6 hover:shadow-md transition-shadow relative overflow-hidden"
                                >
                                    {/* AI Ribbon */}
                                    {hearing.ai_summary && (
                                        <div className="absolute top-0 right-0 bg-indigo-50 dark:bg-gray-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold px-3 py-1 rounded-bl-lg border-b border-l border-indigo-100 dark:border-gray-700 flex items-center gap-1">
                                            <span className="text-lg leading-none">✨</span> Bill Summary
                                        </div>
                                    )}

                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex-1">
                                            {/* Primary Meta (Bill #, Type) */}
                                            <div className="flex flex-wrap items-center gap-2 mb-3 pt-4 md:pt-0">
                                                <span className="text-sm font-bold text-freedom-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-gray-800 px-2 py-0.5 rounded border border-blue-100 dark:border-gray-700">
                                                    {hearing.bill_number}
                                                </span>
                                                <BookmarkButton billId={hearing.bill_id} />

                                                {hearing.bill_status && (
                                                    <span className={`text-xs font-bold px-2 py-0.5 rounded border uppercase tracking-wide ${hearing.bill_status === 'Passed' ? 'bg-green-50 dark:bg-gray-800 text-green-700 dark:text-green-400 border-green-200 dark:border-green-900' :
                                                        hearing.bill_status === 'Vetoed' ? 'bg-red-50 dark:bg-gray-800 text-red-700 dark:text-red-400 border-red-200 dark:border-red-900' :
                                                            hearing.bill_status === 'Floor Vote' ? 'bg-yellow-50 dark:bg-gray-800 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-900' :
                                                                'bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700'
                                                        }`}>
                                                        {hearing.bill_status}
                                                    </span>
                                                )}
                                                <span className="text-xs font-bold text-black dark:text-gray-300 bg-granite-100 dark:bg-gray-800 uppercase tracking-wide border border-granite-400 dark:border-gray-600 px-2 py-0.5 rounded">
                                                    {hearing.type} Hearing
                                                </span>
                                                {hearing.bill_url && (
                                                    <a href={hearing.bill_url} target="_blank" rel="noopener noreferrer" className="ml-auto text-xs font-black text-granite-900 hover:text-nh-green-900 flex items-center gap-1 bg-granite-50 px-3 py-1 rounded border border-granite-300 shadow-sm transition-all hover:shadow-md hover:border-nh-green-500">
                                                        <span>📄</span> View Text
                                                    </a>
                                                )}
                                            </div>

                                            <h3 className="text-xl font-bold text-granite-900 dark:text-white mb-3">
                                                {hearing.description}
                                            </h3>

                                            {/* Smart Pill Rack (Sponsors + AI) */}
                                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                                {/* Transparency Pills (Always Show) */}
                                                {hearing.sponsor_info && (
                                                    <>
                                                        {hearing.sponsor_info.id ? (
                                                            <Link href={`/${stateCode.toLowerCase()}/person/${hearing.sponsor_info.id}`} className={`text-xs font-bold px-3 py-1 rounded-full border gap-1 flex items-center hover:opacity-80 transition-opacity ${hearing.sponsor_info.party === 'R' ? 'bg-red-50 text-red-700 border-red-100' :
                                                                hearing.sponsor_info.party === 'D' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-gray-50 text-gray-700 border-gray-100'
                                                                }`}>
                                                                Sponsor: {hearing.sponsor_info.name} 🔗
                                                            </Link>
                                                        ) : (
                                                            <span className={`text-xs font-bold px-2 py-1 rounded border gap-1 flex items-center ${hearing.sponsor_info.party === 'R' ? 'bg-red-50 text-red-700 border-red-100' :
                                                                hearing.sponsor_info.party === 'D' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-gray-50 text-gray-700 border-gray-100'
                                                                }`}>
                                                                Sponsor: {hearing.sponsor_info.name}
                                                            </span>
                                                        )}
                                                        {hearing.sponsor_info.major_donors && hearing.sponsor_info.major_donors.length > 0 && (
                                                            <span className="text-xs font-bold bg-purple-50 text-purple-800 px-3 py-1 rounded-full border border-purple-100 flex items-center gap-1">
                                                                <span>💰</span> Major Donors: {hearing.sponsor_info.major_donors.slice(0, 2).map(d => d.name).join(', ')}
                                                            </span>
                                                        )}
                                                        {hearing.sponsor_info.next_election && (
                                                            <span className="text-xs font-bold bg-purple-50 text-purple-800 px-3 py-1 rounded-full border border-purple-100 flex items-center gap-1">
                                                                <span>🗳️</span> Election: {hearing.sponsor_info.next_election}
                                                            </span>
                                                        )}
                                                    </>
                                                )}

                                                {/* Dynamic Smart Pills */}
                                                {visiblePills.map((pill, i) => (
                                                    <SmartPill key={i} pill={pill} />
                                                ))}

                                                {/* Expand Toggle */}
                                                {hiddenCount > 0 && (
                                                    <button
                                                        onClick={() => hearing.hearing_id && toggleExpansion(hearing.hearing_id)}
                                                        className="text-xs font-bold text-granite-500 bg-granite-50 px-3 py-1 rounded-full border border-granite-200 hover:bg-granite-100 transition-colors"
                                                    >
                                                        +{hiddenCount} More
                                                    </button>
                                                )}
                                                {isExpanded && smartPills.length > 3 && (
                                                    <button
                                                        onClick={() => hearing.hearing_id && toggleExpansion(hearing.hearing_id)}
                                                        className="text-xs font-bold text-granite-400 hover:text-granite-600 px-1"
                                                    >
                                                        Show Less
                                                    </button>
                                                )}
                                            </div>

                                            {/* AI Summary Block */}
                                            {hearing.ai_summary && (
                                                <div className="bg-indigo-50/50 dark:bg-gray-800 border border-indigo-100 dark:border-gray-700 rounded-lg p-3 mb-3">
                                                    <p className="text-sm text-granite-800 dark:text-gray-300 leading-relaxed">
                                                        <span className="font-bold text-indigo-900 dark:text-indigo-300">Summary: </span>
                                                        {hearing.ai_summary}
                                                    </p>
                                                </div>
                                            )}

                                            <div className="text-granite-800 dark:text-gray-300 space-y-1 text-sm">
                                                <p className="flex items-center gap-2">
                                                    <span className="font-bold w-20 text-granite-900 dark:text-gray-100">Committee:</span>
                                                    {hearing.committee}
                                                </p>
                                                <p className="flex items-center gap-2">
                                                    <span className="font-bold w-20 text-granite-900 dark:text-gray-100">Location:</span>
                                                    {hearing.location}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-center justify-center bg-granite-50 dark:bg-gray-800 rounded-lg p-4 min-w-[120px] text-center border border-granite-200 dark:border-gray-700 self-start">
                                            <span className="text-sm font-bold text-black dark:text-white uppercase">
                                                {parseLocalDay(hearing.date).toLocaleDateString('en-US', { weekday: 'short' })}
                                            </span>
                                            <span className="text-2xl font-black text-granite-900 dark:text-white">
                                                {parseLocalDay(hearing.date).getDate()}
                                            </span>
                                            <span className="text-sm font-bold text-granite-800 dark:text-gray-300">
                                                {hearing.time}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-granite-50 dark:border-gray-800 flex items-center justify-end gap-3">
                                        <Link
                                            href={`/${stateCode.toLowerCase()}/wizard?bill=${hearing.bill_number}&committee=${encodeURIComponent(hearing.committee)}&date=${hearing.date}` +
                                                (hearing.sponsor_info ? `&sponsor=${encodeURIComponent(hearing.sponsor_info.name)}&party=${hearing.sponsor_info.party}&election=${hearing.sponsor_info.next_election}&id=${hearing.sponsor_info.id || ''}` : '')}
                                            className="w-full md:w-auto text-center px-4 py-3 text-sm font-bold text-white bg-nh-green-700 hover:bg-nh-green-900 rounded-lg shadow-sm transition-colors"
                                        >
                                            Prepare Testimony
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>

            ) : viewMode === 'saved' ? (
                /* SAVED QUEUE VIEW */
                <div className="grid gap-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-bold text-granite-900">
                                Your Saved Bills
                            </h2>
                            <span className="text-sm bg-granite-100 text-granite-600 px-2 py-0.5 rounded-full font-bold">
                                {savedHearings.length + savedAmendments.length}
                            </span>
                        </div>
                    </div>

                    {(() => {
                        // Calculate hidden/foreign count
                        const visibleIds = new Set([
                            ...savedHearings.map(h => h.bill_id),
                            ...savedAmendments.map(a => a.bill_id)
                        ]);

                        const hiddenStateCounts: Record<string, number> = {};
                        let hiddenTotalCount = 0;

                        // Use savedBills (objects) to get state info
                        savedBills.forEach(bill => {
                            // If bill is NOT visible in current view...
                            if (!visibleIds.has(bill.id)) {
                                // Group by state (safely handle missing state)
                                if (bill.state && bill.state.toUpperCase() !== stateCode) {
                                    const sc = bill.state.toUpperCase();
                                    hiddenStateCounts[sc] = (hiddenStateCounts[sc] || 0) + 1;
                                    hiddenTotalCount++;
                                } else if (!bill.state) {
                                    // Legacy/Unknown state bills
                                    hiddenTotalCount++;
                                }
                            }
                        });


                        const showEmptyState = !hasSavedItems && hiddenTotalCount === 0;

                        if (showEmptyState) {
                            return (
                                <div className="text-center py-16 bg-granite-50 rounded-xl border border-granite-200 shadow-sm border-dashed">
                                    <div className="text-5xl mb-4 text-granite-200 dark:text-slate-600">🔖</div>
                                    <h3 className="text-granite-900 font-bold text-lg mb-2">No Bills Saved Yet</h3>
                                    <p className="text-granite-500 dark:text-slate-400 max-w-sm mx-auto">
                                        Click the bookmark icon <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg> on any bill card to add it to your personal queue.
                                    </p>
                                </div>
                            );
                        }

                        return (
                            <div className="space-y-8">
                                {/* Saved Hearings Section */}
                                {savedHearings.length > 0 && (
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-black uppercase tracking-wide text-granite-500 dark:text-slate-400 border-b border-granite-200 dark:border-slate-700 pb-2">
                                            Upcoming Hearings
                                        </h3>
                                        {savedHearings.map(hearing => {
                                            // Reuse Hearing Card Logic (simplified)
                                            const smartPills = hearing.smart_pills || [];
                                            return (
                                                <div key={hearing.hearing_id} className="bg-granite-50 rounded-xl shadow-sm border border-l-4 border-l-nh-green-500 border-granite-100 p-6 flex items-start gap-4">
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="text-sm font-bold text-freedom-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-800">
                                                                {hearing.bill_number}
                                                            </span>
                                                            <BookmarkButton billId={hearing.bill_id} />
                                                            <span className="text-xs font-bold bg-granite-100 dark:bg-slate-700 text-granite-600 dark:text-slate-300 px-2 py-0.5 rounded">
                                                                {hearing.date} @ {hearing.time}
                                                            </span>
                                                        </div>
                                                        <h4 className="font-bold text-lg text-granite-900 mb-2">{hearing.description}</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {smartPills.slice(0, 3).map((pill, i) => <SmartPill key={i} pill={pill} />)}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {/* Saved Amendments Section */}
                                {savedAmendments.length > 0 && (
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-black uppercase tracking-wide text-granite-500 dark:text-slate-400 border-b border-granite-200 dark:border-slate-700 pb-2">
                                            Watched Amendments
                                        </h3>
                                        {savedAmendments.map(bill => (
                                            <div key={bill.bill_id} className="bg-granite-50 rounded-xl shadow-sm border border-l-4 border-l-orange-500 border-granite-100 p-6">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-sm font-bold text-freedom-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-800">
                                                        {bill.bill_number}
                                                    </span>
                                                    <BookmarkButton billId={bill.bill_id} />
                                                </div>
                                                <h4 className="font-bold text-lg text-granite-900 mb-2">{bill.description}</h4>
                                                <p className="text-sm text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 p-2 rounded block mb-2">
                                                    {bill.amendment_action}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Foreign State Warning */}
                                {hiddenTotalCount > 0 && (
                                    <div className="mt-8 p-6 bg-granite-50 dark:bg-slate-800 rounded-xl border border-granite-200 dark:border-slate-700 text-center">
                                        <p className="text-granite-600 dark:text-slate-400 text-sm font-medium mb-3">
                                            You have <span className="font-bold text-granite-800 dark:text-slate-200">{hiddenTotalCount}</span> {hiddenTotalCount === 1 ? 'bill' : 'bills'} saved in other states:
                                        </p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {Object.entries(hiddenStateCounts).map(([foreignStateCode, count]) => (
                                                <Link
                                                    key={foreignStateCode}
                                                    href={`/${foreignStateCode.toLowerCase()}/dashboard`}
                                                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-700 border border-granite-300 dark:border-slate-600 rounded-lg shadow-sm hover:border-nh-green-500 hover:text-nh-green-700 transition-colors"
                                                >
                                                    <span className="font-black text-granite-800 dark:text-slate-200">{foreignStateCode}</span>
                                                    <span className="text-xs bg-granite-100 dark:bg-slate-600 text-granite-600 dark:text-slate-300 px-1.5 py-0.5 rounded-full font-bold">
                                                        {count}
                                                    </span>
                                                    <span className="text-granite-400 text-xs">↗</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })()}
                </div>
            ) : (
                /* AMENDMENTS VIEW */
                <div className="grid gap-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-granite-900">
                            Recently Amended Bills
                        </h2>
                        <span className="text-sm text-granite-600 dark:text-slate-400 font-medium">Last 30 Days</span>
                    </div>
                    {amendments.length === 0 && (
                        <div className="text-center py-12 bg-granite-50 rounded-xl border border-granite-200 shadow-sm">
                            <p className="text-granite-900 font-bold text-lg">No recent amendments found in the last 90 days.</p>
                            <p className="text-granite-600 dark:text-slate-400 mt-2">Try checking back later as the session progresses.</p>
                        </div>
                    )}
                    {amendments.map((bill) => (
                        <div key={bill.bill_id} className="bg-granite-50 rounded-xl shadow-sm border border-granite-100 p-6 hover:shadow-md transition-shadow">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-sm font-bold text-freedom-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-800">
                                            {bill.bill_number}
                                        </span>
                                        <BookmarkButton billId={bill.bill_id} />
                                        <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-100 uppercase tracking-wide">
                                            Amended
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-granite-900 mb-2">{bill.description}</h3>

                                    {/* Smart Pills for Amendments */}
                                    <div className="flex flex-wrap items-center gap-2 mb-3">
                                        {bill.smart_pills && bill.smart_pills.map((pill, i) => (
                                            <SmartPill key={i} pill={pill} />
                                        ))}
                                    </div>

                                    {/* Transparency Pills for Amended Bills */}
                                    {bill.sponsor_info && (
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {bill.sponsor_info.id ? (
                                                <Link href={`/${stateCode.toLowerCase()}/person/${bill.sponsor_info.id}`} className={`text-xs font-bold px-3 py-1 rounded-full border gap-1 flex items-center hover:opacity-80 transition-opacity ${bill.sponsor_info.party === 'R' ? 'bg-red-50 text-red-700 border-red-100' :
                                                    bill.sponsor_info.party === 'D' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-gray-50 text-gray-700 border-gray-100'
                                                    }`}>
                                                    Sponsor: {bill.sponsor_info.name} 🔗
                                                </Link>
                                            ) : (
                                                <span className={`text-xs font-bold px-2 py-1 rounded border gap-1 flex items-center ${bill.sponsor_info.party === 'R' ? 'bg-red-50 text-red-700 border-red-100' :
                                                    bill.sponsor_info.party === 'D' ? 'bg-blue-50 text-blue-700 border-blue-100' : 'bg-gray-50 text-gray-700 border-gray-100'
                                                    }`}>
                                                    Sponsor: {bill.sponsor_info.name}
                                                </span>
                                            )}
                                            {bill.sponsor_info.major_donors && bill.sponsor_info.major_donors.length > 0 && (
                                                <span className="text-xs font-bold bg-purple-50 text-purple-800 px-3 py-1 rounded-full border border-purple-100 flex items-center gap-1">
                                                    <span>💰</span> Major Donors: {bill.sponsor_info.major_donors.slice(0, 2).map(d => d.name).join(', ')}
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    <div className="bg-orange-50 dark:bg-orange-950/40 border border-orange-100 dark:border-orange-900 p-3 rounded-lg">
                                        <p className="text-sm font-bold text-orange-950 dark:text-orange-200 mb-1">Action Taken:</p>
                                        <p className="text-sm text-granite-900 dark:text-slate-200 font-medium mb-2">{bill.amendment_action}</p>
                                        <p className="text-xs text-granite-700 dark:text-orange-200/60 font-mono font-bold">
                                            {bill.amendment_date && !isNaN(new Date(bill.amendment_date).getTime())
                                                ? new Date(bill.amendment_date).toLocaleDateString()
                                                : 'Date Pending'}
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href={bill.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hidden md:flex items-center justify-center w-12 h-12 bg-white border border-granite-200 rounded-full hover:bg-granite-50 text-granite-900 shadow-sm transition-all hover:shadow-md"
                                    title="View Official Text"
                                >
                                    📄
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )
            }
        </div >
    );
}
