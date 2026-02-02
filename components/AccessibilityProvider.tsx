"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type FontSize = "normal" | "large" | "xl";

interface AccessibilityContextType {
    fontSize: FontSize;
    setFontSize: (size: FontSize) => void;
    dyslexiaFont: boolean;
    setDyslexiaFont: (enabled: boolean) => void;
    reduceMotion: boolean;
    setReduceMotion: (enabled: boolean) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
    const [fontSize, setFontSize] = useState<FontSize>("normal");
    const [dyslexiaFont, setDyslexiaFont] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Load prefs
    useEffect(() => {
        const storedSize = localStorage.getItem("a11y-font-size") as FontSize;
        const storedDyslexia = localStorage.getItem("a11y-dyslexia") === "true";
        const storedMotion = localStorage.getItem("a11y-motion") === "true";

        // eslint-disable-next-line
        if (storedSize) setFontSize(storedSize);
        if (storedDyslexia) setDyslexiaFont(storedDyslexia);
        if (storedMotion) setReduceMotion(storedMotion);
        setMounted(true);
    }, []);

    // Persist & Apply
    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem("a11y-font-size", fontSize);

        // Apply to HTML root for global cascade
        const root = document.documentElement;
        root.classList.remove("text-normal", "text-large", "text-xl");
        if (fontSize !== "normal") root.classList.add(`text-${fontSize}`);
    }, [fontSize, mounted]);

    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem("a11y-dyslexia", String(dyslexiaFont));

        const root = document.documentElement;
        if (dyslexiaFont) root.classList.add("font-dyslexic");
        else root.classList.remove("font-dyslexic");
    }, [dyslexiaFont, mounted]);

    useEffect(() => {
        if (!mounted) return;
        localStorage.setItem("a11y-motion", String(reduceMotion));

        const root = document.documentElement;
        if (reduceMotion) root.classList.add("motion-reduce-forced");
        else root.classList.remove("motion-reduce-forced");
    }, [reduceMotion, mounted]);

    return (
        <AccessibilityContext.Provider
            value={{
                fontSize,
                setFontSize,
                dyslexiaFont,
                setDyslexiaFont,
                reduceMotion,
                setReduceMotion,
            }}
        >
            {children}
        </AccessibilityContext.Provider>
    );
}

export function useAccessibility() {
    const context = useContext(AccessibilityContext);
    if (context === undefined) {
        throw new Error("useAccessibility must be used within an AccessibilityProvider");
    }
    return context;
}
