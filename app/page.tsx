"use client";

import { SUPPORTED_STATES } from '@/lib/states';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function LandingPage() {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [mounted, setMounted] = useState(false);

    // Alphabetize states
    const sortedStates = Object.values(SUPPORTED_STATES).sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    // Load favorites on mount to avoid hydration mismatch
    useEffect(() => {
        const saved = localStorage.getItem('civic_favorites');
        if (saved) {
            setFavorites(JSON.parse(saved));
        }
        setMounted(true);
    }, []);

    const toggleFavorite = (e: React.MouseEvent, code: string) => {
        e.preventDefault(); // Prevent navigation
        e.stopPropagation();

        const newFavorites = favorites.includes(code)
            ? favorites.filter(f => f !== code)
            : [...favorites, code];

        setFavorites(newFavorites);
        localStorage.setItem('civic_favorites', JSON.stringify(newFavorites));
    };

    const FavoriteStar = ({ code, isFav }: { code: string, isFav: boolean }) => (
        <button
            onClick={(e) => toggleFavorite(e, code)}
            className={`absolute top-3 right-3 p-1.5 rounded-full transition-all z-10 ${isFav
                ? 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 scale-110'
                : 'bg-granite-50 text-granite-300 hover:text-yellow-400 hover:bg-yellow-50 dark:bg-slate-700 dark:text-slate-400 dark:hover:text-yellow-400 dark:hover:bg-yellow-900/20'
                }`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isFav ? "currentColor" : "none"} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        </button>
    );

    const StateCard = ({ state }: { state: any }) => {
        const isFav = favorites.includes(state.code);
        return (
            <Link
                href={`/${state.code.toLowerCase()}/dashboard`}
                className={`relative bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-sm border transition-all group flex flex-col items-center text-center ${isFav ? 'border-yellow-200 dark:border-yellow-900 shadow-md ring-1 ring-yellow-100 dark:ring-yellow-900/50' : 'border-granite-200 dark:border-slate-700 hover:shadow-md hover:border-nh-green-500 dark:hover:border-nh-green-500'
                    }`}
            >
                <FavoriteStar code={state.code} isFav={isFav} />
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {state.flagEmoji}
                </div>
                <h2 className="text-sm md:text-lg font-bold text-granite-900 dark:text-slate-100 break-words w-full leading-tight">
                    {state.name}
                </h2>
                <p className="text-xs text-granite-500 dark:text-slate-400 font-bold mt-1 uppercase tracking-wide">
                    {state.code}
                </p>
            </Link>
        );
    };

    if (!mounted) return null; // Prevent hydration mismatch

    const favoriteStates = sortedStates.filter(s => favorites.includes(s.code));

    return (
        <main id="main-content" className="min-h-screen bg-granite-50 flex flex-col items-center justify-center p-6">
            <div className="max-w-4xl w-full text-center flex flex-col items-center">
                <div className="w-32 h-32 mb-6 relative hover:scale-105 transition-transform duration-300">
                    <Image
                        src="/civic-badge.png"
                        alt="US Civic Action Logo"
                        fill
                        className="object-contain drop-shadow-xl"
                        priority
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-granite-900 mb-4 tracking-tight">
                    Civic Action
                </h1>
                <p className="text-xl text-granite-600 mb-12">
                    Track bills. Find hearings. Make your voice heard.
                </p>

                {favoriteStates.length > 0 && (
                    <div className="w-full mb-12">
                        <div className="flex items-center gap-2 mb-4 px-1">
                            <span className="text-yellow-500">⭐</span>
                            <h3 className="text-sm font-black text-granite-400 uppercase tracking-widest">Your Favorites</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {favoriteStates.map(state => (
                                <StateCard key={state.code} state={state} />
                            ))}
                        </div>
                        <div className="h-px bg-granite-200 w-full mt-8 opacity-50"></div>
                    </div>
                )}

                <div className="w-full">
                    <div className="flex items-center gap-2 mb-4 px-1">
                        <span className="text-granite-400">🇺🇸</span>
                        <h3 className="text-sm font-black text-granite-400 uppercase tracking-widest">All States</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {sortedStates.map(state => (
                            <StateCard key={state.code} state={state} />
                        ))}
                    </div>
                </div>

                <p className="mt-12 text-sm text-granite-500">
                    Select your state to get started.
                </p>
            </div>
        </main>
    );
}
