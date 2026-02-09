'use server';

import { legiscan } from '@/lib/legiscan';

export async function checkSavedBills(billIds: number[], stateCode: string) {
    if (!billIds || billIds.length === 0) return [];

    try {
        const statuses = await legiscan.getBillStatusBatch(billIds, stateCode);
        // Return minimal data needed for "New Update" check
        return statuses.map(s => ({
            bill_id: s.bill_id as number,
            last_action_date: s.last_action_date as string,
            last_action: s.last_action as string,
            number: s.number as string
        }));
    } catch (error) {
        console.error("Failed to check saved bills:", error);
        return [];
    }
}
