"use client";

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'civic_saved_bills';

export interface SavedBill {
    id: number;
    state: string;
}

export function useSavedBills() {
    const [savedBills, setSavedBills] = useState<SavedBill[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Schema Migration: If it's an array of numbers (old schema), wipe it effectively (or migrate if we could guess, but we can't).
                // Safest for MVP is to check if the first item is a number.
                if (Array.isArray(parsed) && parsed.length > 0 && typeof parsed[0] === 'number') {
                    console.warn('Detected old schema (IDs only). Resetting storage to support State Metadata.');
                    // eslint-disable-next-line
                    setSavedBills([]);
                    localStorage.removeItem(STORAGE_KEY);
                } else {
                    setSavedBills(parsed);
                }
            } catch (e) {
                console.error('Failed to parse saved bills', e);
            }
        }
        setMounted(true);
    }, []);

    const toggleSave = (billId: number, stateCode: string) => {
        const exists = savedBills.some(b => b.id === billId);
        let newBills;

        if (exists) {
            newBills = savedBills.filter(b => b.id !== billId);
        } else {
            newBills = [...savedBills, { id: billId, state: stateCode }];
        }

        setSavedBills(newBills);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newBills));
    };

    const isSaved = (billId: number) => savedBills.some(b => b.id === billId);

    // Helper to get raw IDs for legacy compatibility / filtering
    const savedIds = savedBills.map(b => b.id);

    return { savedBills, savedIds, toggleSave, isSaved, mounted };
}
