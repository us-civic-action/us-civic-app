"use client";

import Link from "next/link";

export default function TransparencyPage() {
    return (
        <div className="bg-granite-50 dark:bg-slate-900 min-h-screen">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-extrabold text-granite-900 dark:text-white mb-6">About & Transparency</h1>
                <p className="text-xl text-granite-900 dark:text-slate-200 mb-12 leading-relaxed font-medium">
                    US Civic Action is built on a simple premise: <strong className="text-black dark:text-white">Democracy shouldn&apos;t be difficult.</strong> This tool helps you cut through the noise and make your voice heard.
                </p>

                <div className="space-y-12">
                    {/* Mission Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-granite-900 dark:text-white mb-4 flex items-center gap-2">
                            <span>🛡️</span> Independent & Non-Partisan
                        </h2>
                        <p className="text-granite-900 dark:text-slate-300 leading-relaxed font-medium">
                            This project is run by an independent developer, not a political organization.
                            The goal is infrastructure, not advocacy. I do not endorse candidates,
                            push specific bills, or accept sponsorship from political action committees (PACs).
                        </p>
                    </section>

                    {/* Funding Section */}
                    <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-granite-200 dark:border-slate-700 shadow-sm">
                        <h2 className="text-2xl font-bold text-granite-900 dark:text-white mb-4 flex items-center gap-2">
                            <span>💰</span> Where Donations Go
                        </h2>
                        <p className="text-granite-900 dark:text-slate-300 mb-4 font-medium">
                            This tool is free to use. Donations are strictly optional and help keep the lights on.
                            Funds are used for:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-granite-900 dark:text-slate-300 ml-2 font-medium">
                            <li><strong>Server Hosting & Database Costs</strong> (Keeping the site fast/online)</li>
                            <li><strong>Data Access APIs</strong> (Fetching real-time legislative data)</li>
                            <li><strong>Development Time</strong> (Fixing bugs and adding features)</li>
                        </ul>
                    </section>

                    {/* Privacy Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-granite-900 dark:text-white mb-4 flex items-center gap-2">
                            <span>🔒</span> Privacy & Data Integrity
                        </h2>
                        <ul className="space-y-3 text-granite-900 dark:text-slate-300 font-medium">
                            <li className="flex gap-3">
                                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                                <span>I do <strong>not</strong> sell your data to anyone.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                                <span>I do <strong>not</strong> share donor lists with political parties.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                                <span>Your testimony is generated locally in your browser.</span>
                            </li>
                        </ul>
                    </section>

                    <hr className="border-granite-200 dark:border-slate-700" />

                    {/* Support CTA */}
                    <section className="text-center py-8">
                        <h2 className="text-2xl font-bold text-granite-900 dark:text-white mb-3">Support the Project</h2>
                        <p className="text-granite-900 dark:text-slate-300 mb-6 max-w-lg mx-auto font-medium">
                            If this tool saved you time or helped you speak up, consider buying me a coffee.
                            Recurring support helps me plan for the future.
                        </p>
                        <a
                            href="https://buy.stripe.com/9B6fZha4N8PP9f64jaawo01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            <span>☕</span> Support US Civic Action
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}
