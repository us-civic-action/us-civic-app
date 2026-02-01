import { getMALegislatorContact } from './ma-legislators';

import { enrichment } from './enrichment';

export interface LegislatorContact {
    name: string;
    id?: string;
    email: string;
    phone: string;
    role: 'Senator' | 'Representative';
}

/**
 * Returns contact info for a legislator based on state and name.
 * Uses specific scrapers/helpers where available (MA), otherwise generic fallbacks.
 */
export const getLegislatorContact = (state: string, name: string, roleInput: string = 'Representative'): LegislatorContact => {
    const stateCode = state.toUpperCase();

    // 1. Massachusetts (Scraped Data)
    if (stateCode === 'MA') {
        const maContact = getMALegislatorContact(name, roleInput);
        // Try to enrich ID even for MA
        const enriched = enrichment.getPersonDetails(name);
        return { ...maContact, id: enriched.id };
    }

    // 2. Generic/Mock Lookup (NH, NJ, etc)
    const enriched = enrichment.getPersonDetails(name);

    // 3. Default/Fallback
    return {
        name: name,
        id: enriched.id,
        email: enriched.email || "", // Enrichment might have email if extended, otherwise empty
        phone: enriched.phone || "",
        role: roleInput as any
    };
};
