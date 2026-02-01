"use client";

import { format, addDays, isSameDay } from 'date-fns';
import { Hearing } from '@/types';

interface CalendarWidgetProps {
    hearings: Hearing[];
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
}

export default function CalendarWidget({ hearings, selectedDate, onSelectDate }: CalendarWidgetProps) {
    const today = new Date();
    const days = Array.from({ length: 7 }, (_, i) => addDays(today, i));

    const parseLocalDay = (dateStr: string) => {
        const [y, m, d] = dateStr.split('-').map(Number);
        return new Date(y, m - 1, d, 12, 0, 0);
    };

    const hasHearing = (date: Date) => {
        return hearings.some(h => isSameDay(parseLocalDay(h.date), date));
    };

    return (
        <div className="bg-gradient-to-br from-white to-granite-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-sm border border-granite-100 dark:border-slate-700 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-black text-granite-900 dark:text-slate-100 uppercase tracking-wide flex items-center gap-2">
                    <span>🗓️</span> Legislative Calendar
                </h3>
                <span className="text-xs font-bold text-granite-400 dark:text-slate-400 uppercase bg-white dark:bg-slate-800 px-2 py-1 rounded-full border border-granite-100 dark:border-slate-600">
                    Next 7 Days
                </span>
            </div>

            <div className="flex justify-between items-stretch gap-2 overflow-x-auto pt-4 pb-2 scrollbar-hide">
                {days.map((date) => {
                    const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
                    const isToday = isSameDay(date, today);
                    const active = hasHearing(date);

                    return (
                        <button
                            key={date.toISOString()}
                            onClick={() => onSelectDate(date)}
                            className={`flex-1 flex flex-col items-center justify-center min-w-[3.2rem] py-2 rounded-2xl transition-all border-2 relative group ${isSelected
                                ? 'bg-nh-green-700 text-white border-nh-green-700 shadow-lg transform scale-105 z-10'
                                : 'bg-white dark:bg-slate-800 text-granite-900 dark:text-slate-200 border-transparent hover:border-nh-green-200 dark:hover:border-nh-green-800 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md'
                                }`}
                        >
                            {isToday && !isSelected && (
                                <span className="absolute -top-2 text-[0.6rem] font-black uppercase bg-nh-green-100 dark:bg-nh-green-900/40 text-nh-green-800 dark:text-nh-green-300 px-1.5 py-0.5 rounded-full border border-nh-green-200 dark:border-nh-green-800">
                                    Today
                                </span>
                            )}

                            <span className={`text-[0.65rem] font-bold uppercase mb-0.5 mt-2 tracking-wider ${isSelected ? 'text-nh-green-100' : 'text-granite-400 dark:text-slate-400 group-hover:text-nh-green-600 dark:group-hover:text-nh-green-400'}`}>
                                {format(date, 'EEE')}
                            </span>

                            <span className={`text-lg font-black ${isSelected ? 'text-white' : 'text-granite-800 dark:text-slate-100'}`}>
                                {format(date, 'd')}
                            </span>

                            {/* Status Dot */}
                            <div className="h-1.5 mt-1 flex gap-0.5">
                                {active && (
                                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-nh-green-500'}`} />
                                )}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
