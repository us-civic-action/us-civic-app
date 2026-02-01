"use client";

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'civic_saved_bills';

export function useSavedBills() {
    const [savedIds, setSavedIds] = useState<number[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setSavedIds(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse saved bills', e);
            }
        }
        setMounted(true);
    }, []);

    const toggleSave = (billId: number) => {
        const newIds = savedIds.includes(billId)
            ? savedIds.filter(id => id !== billId)
            : [...savedIds, billId];

        setSavedIds(newIds);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newIds));
    };

    const isSaved = (billId: number) => savedIds.includes(billId);

    return { savedIds, toggleSave, isSaved, mounted };
}
