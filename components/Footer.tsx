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
                <div className="text-center mt-8 text-xs text-granite-500 dark:text-slate-600 font-medium">
                    &copy; {new Date().getFullYear()} US Civic Action. Not affiliated with any state or federal government.
                </div>
            </div>
        </footer>
    );
}
