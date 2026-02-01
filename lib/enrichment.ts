import { Legislator, Pill, MajorDonor } from '@/types';
import { MOCK_LEGISLATORS } from './legislators';

// Helper to sanitize/lookup names with multiple strategies
export const enrichment = {
    getPersonDetails: (name: string): Partial<Legislator> => {
        // Normalize: remove titles and extra whitespace
        const normalized = name
            .replace(/^(Rep\.|Sen\.|Representative|Senator)\s+/i, '')
            .trim();

        // Try multiple matching strategies in order of precision
        const strategies = [
            // 1. Exact match
            (k: string) => k === name,

            // 2. Normalized match (without title)
            (k: string) => k === normalized,

            // 3. Case-insensitive partial match
            (k: string) => k.toLowerCase().includes(normalized.toLowerCase()),

            // 4. Last name only match
            (k: string) => {
                const lastName = normalized.split(' ').pop();
                return lastName && k.toLowerCase().includes(lastName.toLowerCase());
            }
        ];

        for (const strategy of strategies) {
            const foundKey = Object.keys(MOCK_LEGISLATORS).find(strategy);
            if (foundKey) return MOCK_LEGISLATORS[foundKey];
        }

        // Safe fallback with clear unknown status
        return {
            major_donors: [],
            next_election: "2026",
            id: undefined,
            party: 'I' as const // Unknown = Independent
        } as unknown as Partial<Legislator>;
    },

    generateSmartPills: (text: string): Pill[] => {
        const t = text.toLowerCase();
        return [
            // Housing & Zoning
            ...(t.match(/zoning|housing|rent|landlord|tenant|accessory dwelling/) ? [{ label: 'Housing', category: 'impact', icon: '🏠' }] : []),

            // Taxes & Economy
            ...(t.match(/tax|revenue|budget|funds|appropriation/) ? [{ label: 'Taxpayers', category: 'impact', icon: '💰' }] : []),

            // Education
            ...(t.match(/school|education|teacher|student|curriculum|university/) ? [{ label: 'Education', category: 'impact', icon: '🎓' }] : []),

            // Environment
            ...(t.match(/environment|water|energy|solar|carbon|forest|waste/) ? [{ label: 'Environment', category: 'impact', icon: '🌲' }] : []),

            // Healthcare
            ...(t.match(/health|hospital|insurance|mental|medical|prescription/) ? [{ label: 'Healthcare', category: 'impact', icon: '🏥' }] : []),

            // Rights & Civil Liberties
            ...(t.match(/rights|privacy|speech|arms|gun|weapon|discrimination/) ? [{ label: 'Civil Rights', category: 'urgency', icon: '⚖️' }] : []),

            // Labor
            ...(t.match(/labor|wage|worker|employment|union/) ? [{ label: 'Labor', category: 'people', icon: '👷' }] : []),

            // Local Control
            ...(t.match(/municipal|town|city|county|selectmen/) ? [{ label: 'Local Control', category: 'impact', icon: '🏛️' }] : []),

            // NEW: Immigration
            ...(t.match(/immigr|visa|citizen|asylum|border|refugee/) ? [{ label: 'Immigration', category: 'urgency', icon: '🗽' }] : []),

            // NEW: Criminal Justice
            ...(t.match(/criminal|prison|police|bail|sentence|parole|felon/) ? [{ label: 'Criminal Justice', category: 'urgency', icon: '👮' }] : []),

            // NEW: Business & Commerce
            ...(t.match(/business|commerce|trade|regulation|license|permit/) ? [{ label: 'Business', category: 'impact', icon: '💼' }] : []),

            // NEW: Technology & Privacy
            ...(t.match(/data|privacy|surveillance|internet|tech|digital|cyber/) ? [{ label: 'Tech & Privacy', category: 'urgency', icon: '🔒' }] : []),

            // NEW: Transportation
            ...(t.match(/transport|road|highway|transit|vehicle|traffic/) ? [{ label: 'Transportation', category: 'impact', icon: '🚗' }] : []),

            // NEW: Agriculture
            ...(t.match(/farm|agriculture|crop|livestock|rural|food/) ? [{ label: 'Agriculture', category: 'impact', icon: '🌾' }] : []),

            // NEW: Veterans & Military
            ...(t.match(/veteran|military|service member|armed forces|va\b/) ? [{ label: 'Veterans', category: 'people', icon: '🎖️' }] : []),
        ] as Pill[];
    },

    calculateBipartisanship: (parties: string[]): boolean => {
        const uniqueParties = new Set(parties.map(p => p.toUpperCase()));
        return uniqueParties.has('R') && uniqueParties.has('D');
    },

    calculateStalledStatus: (lastActionDate: string, status: string | number): boolean => {
        if (!lastActionDate) return false;

        // Handle Numeric Codes (LegiScan: 4=Passed, 5=Vetoed, 6=Failed)
        if (typeof status === 'number') {
            if (status >= 4) return false; // Final status
        } else {
            // Handle String Status
            const finalStatuses = ['Passed', 'Vetoed', 'Failed', 'Dead', 'Chaptered', 'Enacted'];
            if (finalStatuses.some(s => status.includes(s))) return false;
        }

        const date = new Date(lastActionDate);
        if (isNaN(date.getTime())) return false;

        const diffTime = Math.abs(new Date().getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 30;
    }
};
