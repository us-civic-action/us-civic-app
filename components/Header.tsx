"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronDown, LayoutGrid, ShieldCheck } from "lucide-react";

import { ThemeToggle } from "./ThemeToggle";

export default function Header() {

    const params = useParams();
    const routeState = typeof params?.state === 'string' ? params.state : null;
    const titlePrefix = routeState ? routeState.toUpperCase() : "US";
    const basePath = routeState ? `/${routeState.toLowerCase()}` : '';

    return (
        <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-[100] transition-colors pt-[env(safe-area-inset-top)]">
            <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-14 w-auto aspect-[3/2] overflow-hidden transition-transform group-hover:scale-105">
                        <Image
                            src="/civic-badge.png"
                            alt="US Civic Action Logo"
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div>
                        <h1 className="text-lg font-black text-granite-900 dark:text-white tracking-tight leading-none group-hover:text-nh-green-800 dark:group-hover:text-nh-green-400 transition-colors hidden md:block uppercase">
                            {titlePrefix} CIVIC <span className="text-nh-green-700 dark:text-nh-green-500">ACTION</span>
                        </h1>
                        <p className="text-xs font-bold text-granite-500 dark:text-slate-400 tracking-wide uppercase hidden md:block">
                            The People&apos;s Voice
                        </p>
                    </div>
                </Link>

                <nav className="flex items-center gap-4">
                    <Link
                        href="/"
                        className="text-sm font-bold text-granite-900 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href={basePath + "/transparency"}
                        className="text-sm font-bold text-granite-900 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors"
                    >
                        Transparency
                    </Link>

                    <div className="relative group/menu py-4">
                        <button className="text-sm font-bold text-granite-900 dark:text-slate-200 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1">
                            Projects <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute top-full right-0 w-48 pt-2 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 z-50 transform translate-y-2 group-hover/menu:translate-y-0">
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden p-1">
                                <a
                                    href="https://us-civic-action.github.io/SAVE_ACT-Verifier/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white rounded-lg transition-colors"
                                >
                                    <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Save Act Verifier
                                </a>
                                <Link
                                    href="/"
                                    className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-black dark:hover:text-white rounded-lg transition-colors"
                                >
                                    <LayoutGrid className="w-4 h-4 text-blue-600 dark:text-blue-400" /> US Civic Action App
                                </Link>
                            </div>
                        </div>
                    </div>

                    <ThemeToggle />
                    <a
                        href="https://buy.stripe.com/cNi9ATgtb3vv9f6g1Sawo02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 py-2.5 px-4 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
                    >
                        ☕ Support
                    </a>
                </nav>
            </div>
        </header>
    );
}
