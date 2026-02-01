"use client";

import { useAccessibility } from "@/components/AccessibilityProvider";
import { useState } from "react";

export default function AccessibilityMenu() {
    const {
        fontSize, setFontSize,
        dyslexiaFont, setDyslexiaFont,
        reduceMotion, setReduceMotion
    } = useAccessibility();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-granite-500 hover:text-granite-900 dark:text-slate-400 dark:hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
                title="Accessibility Settings"
                aria-label="Open accessibility menu"
                aria-expanded={isOpen}
            >
                <span className="text-base">♿</span> A11y
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40 bg-transparent"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute bottom-full right-0 mb-3 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-granite-200 dark:border-slate-700 p-4 z-50 text-left">
                        <h3 className="text-sm font-black text-granite-900 dark:text-slate-100 mb-3 border-b border-granite-100 dark:border-slate-700 pb-2">
                            Reference Tools
                        </h3>

                        <div className="space-y-4">
                            {/* Font Size Control */}
                            <div>
                                <label className="text-xs font-bold text-granite-500 dark:text-slate-400 block mb-2">Text Size</label>
                                <div className="flex bg-granite-100 dark:bg-slate-700 rounded-lg p-1">
                                    <button
                                        onClick={() => setFontSize("normal")}
                                        className={`flex-1 py-1 rounded-md text-sm font-bold transition-all ${fontSize === 'normal' ? 'bg-white dark:bg-slate-600 shadow-sm text-granite-900 dark:text-white' : 'text-granite-600 dark:text-slate-400'}`}
                                    >
                                        Aa
                                    </button>
                                    <button
                                        onClick={() => setFontSize("large")}
                                        className={`flex-1 py-1 rounded-md text-base font-bold transition-all ${fontSize === 'large' ? 'bg-white dark:bg-slate-600 shadow-sm text-granite-900 dark:text-white' : 'text-granite-600 dark:text-slate-400'}`}
                                    >
                                        Aa
                                    </button>
                                    <button
                                        onClick={() => setFontSize("xl")}
                                        className={`flex-1 py-1 rounded-md text-lg font-bold transition-all ${fontSize === 'xl' ? 'bg-white dark:bg-slate-600 shadow-sm text-granite-900 dark:text-white' : 'text-granite-600 dark:text-slate-400'}`}
                                    >
                                        Aa
                                    </button>
                                </div>
                            </div>

                            {/* Dyslexia Toggle */}
                            <div className="flex items-center justify-between">
                                <label htmlFor="dyslexia-toggle" className="text-sm font-medium text-granite-800 dark:text-slate-200">
                                    Dyslexia Font
                                    <span className="block text-xs text-granite-400 font-normal">Enhanced readability</span>
                                </label>
                                <button
                                    id="dyslexia-toggle"
                                    onClick={() => setDyslexiaFont(!dyslexiaFont)}
                                    className={`w-11 h-6 rounded-full transition-colors flex items-center px-0.5 ${dyslexiaFont ? 'bg-nh-green-500' : 'bg-granite-300 dark:bg-slate-600'}`}
                                    aria-pressed={dyslexiaFont}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${dyslexiaFont ? 'translate-x-5' : 'translate-x-0'}`} />
                                </button>
                            </div>

                            {/* Reduced Motion Toggle */}
                            <div className="flex items-center justify-between">
                                <label htmlFor="motion-toggle" className="text-sm font-medium text-granite-800 dark:text-slate-200">
                                    Reduce Motion
                                    <span className="block text-xs text-granite-400 font-normal">Stop animations</span>
                                </label>
                                <button
                                    id="motion-toggle"
                                    onClick={() => setReduceMotion(!reduceMotion)}
                                    className={`w-11 h-6 rounded-full transition-colors flex items-center px-0.5 ${reduceMotion ? 'bg-nh-green-500' : 'bg-granite-300 dark:bg-slate-600'}`}
                                    aria-pressed={reduceMotion}
                                >
                                    <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${reduceMotion ? 'translate-x-5' : 'translate-x-0'}`} />
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-granite-100 dark:border-slate-700 text-center">
                            <button
                                onClick={() => {
                                    setFontSize("normal");
                                    setDyslexiaFont(false);
                                    setReduceMotion(false);
                                }}
                                className="text-xs text-granite-400 hover:text-granite-600 dark:text-slate-500 dark:hover:text-slate-300 underline"
                            >
                                Reset Settings
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
