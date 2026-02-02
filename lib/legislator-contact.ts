import { getMALegislatorContact } from './ma-legislators';
import { enrichment } from './enrichment';
import REGISTRY from './data/legislator-registry.json';

export interface LegislatorContact {
    name: string;
    id?: string;
    email: string;
    phone: string;
    role: 'Senator' | 'Representative' | 'Committee';
    district?: string;
    party?: string;
}

/**
 * Returns contact info for a legislator based on state and name.
 * Uses specific scrapers/helpers where available (MA), otherwise generic fallbacks.
 */
export const getLegislatorContact = (state: string, name: string, roleInput: string = 'Representative'): LegislatorContact => {
    const stateCode = state.toUpperCase();

    // 1. STATE-SPECIFIC STRATEGIES (The "Unique Ways")
    // Massachusetts (Scraped Data Strategy)
    if (stateCode === 'MA') {
        const maContact = getMALegislatorContact(name, roleInput);
        // Try to enrich ID even for MA
        const enriched = enrichment.getPersonDetails(name);
        return { ...maContact, id: enriched.id };
    }

    // 2. UNIVERSAL FALLBACK STRATEGY (The "Redundancy Layer")

    // Source A: Local Enrichment (Mock Database) - Primary
    const enriched = enrichment.getPersonDetails(name);

    // Source B: Static Registry (JSON File) - Secondary Redundancy
    // Now scoped by state to avoid collisions (e.g. REGISTRY['NH']['Smith'])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stateRegistry = (REGISTRY as Record<string, any>)[stateCode];
    const registryData = stateRegistry ? stateRegistry[name] : undefined;

    // Merge Logic: Prefer Primary, Fallback to Secondary
    const email = enriched.email || registryData?.email || "";
    const phone = enriched.phone || registryData?.phone || "";

    // ID Logic: Use enriched ID if available, else generate slug from registry match
    const finalId = enriched.id || (registryData ? name.toLowerCase().replace(/\s+/g, '-') : undefined);

    return {
        name: name,
        id: finalId,
        email: email,
        phone: phone,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        role: (roleInput || registryData?.role) as any,
        district: enriched.district || registryData?.district,
        party: enriched.party || registryData?.party
    };
};
