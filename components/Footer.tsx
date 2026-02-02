"use client";

import Link from "next/link";
import AccessibilityMenu from "./AccessibilityMenu";

export default function Footer() {
    return (
        <footer className="bg-granite-50 dark:bg-slate-900 border-t border-granite-200 dark:border-slate-800 mt-auto">
            <div className="max-w-4xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="font-bold text-granite-900 dark:text-white block mb-1">US Civic Action</span>
                        <p className="text-sm text-granite-600 dark:text-slate-400 mb-2">
                            Independent. Non-partisan.
                        </p>
                        <p className="text-xs text-granite-500 dark:text-slate-500 max-w-xs">
                            We are 100% ad-free and tracking-free. Running our servers relies entirely on user support.
                        </p>
                    </div>

                    <nav className="flex items-center gap-6 text-sm font-bold text-granite-800 dark:text-slate-300">
                        <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
                        <Link href="/transparency" className="hover:text-black dark:hover:text-white transition-colors">Transparency</Link>
                        <AccessibilityMenu />
                        <a
                            href="https://buy.stripe.com/cNi9ATgtb3vv9f6g1Sawo02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                        >
                            <span>☕</span> Buy us a coffee
                        </a>
                    </nav>
                </div>
                <div className="flex flex-col items-center mt-8 space-y-2">
                    <div className="text-center text-xs text-granite-500 dark:text-slate-600 font-medium">
                        &copy; {new Date().getFullYear()} US Civic Action. Not affiliated with any state or federal government.
                    </div>
                    <a
                        href="https://github.com/us-civic-action/us-civic-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-granite-100 dark:bg-slate-800 border border-granite-200 dark:border-slate-700 text-xs font-bold text-granite-600 dark:text-slate-400 hover:bg-granite-200 dark:hover:bg-slate-700 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                        Open Source Project
                    </a>
                </div>
            </div>
        </footer>
    );
}
