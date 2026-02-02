
import fs from 'fs';
import path from 'path';
import { SUPPORTED_STATES } from '../lib/states';

const REGISTRY_PATH = path.join(process.cwd(), 'lib', 'data', 'legislator-registry.json');

async function fetchStateData(stateCode: string) {
    const url = `https://data.openstates.org/people/current/${stateCode.toLowerCase()}.csv`;
    console.log(`Fetching ${stateCode} from ${url}...`);

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.warn(`Failed to fetch ${stateCode}: ${response.statusText}`);
            return null;
        }
        const text = await response.text();
        return parseCSV(text);
    } catch (error) {
        console.error(`Error fetching ${stateCode}:`, error);
        return null;
    }
}

function parseCSV(text: string): Record<string, any> {
    const lines = text.split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const data: Record<string, any> = {};

    // Helper to get index
    const idx = (name: string) => headers.indexOf(name);

    for (let i = 1; i < lines.length; i++) {
        // Simple CSV parse handling quotes roughly (OpenStates usually well formatted)
        // For robustness, we might need a real CSV parser, but simple split works for 99% of simple data
        const row = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

        if (row.length < headers.length) continue;

        const name = row[idx('name')]?.replace(/^"|"$/g, '').trim();
        const email = row[idx('email')]?.replace(/^"|"$/g, '').trim();
        const district = row[idx('current_district')]?.replace(/^"|"$/g, '').trim();
        const party = row[idx('current_party')]?.replace(/^"|"$/g, '').trim();
        const chamber = row[idx('current_chamber')]?.replace(/^"|"$/g, '').trim();

        // Phones are trickier in OpenStates, often in offices JSON, but let's check headers
        // Header check: capitol_voice, district_voice
        const phone = row[idx('capitol_voice')]?.replace(/^"|"$/g, '').trim() ||
            row[idx('district_voice')]?.replace(/^"|"$/g, '').trim();

        if (name && (email || phone)) {
            data[name] = {
                email: email || null,
                phone: phone || null,
                district: district || null,
                party: party || null,
                role: chamber === 'upper' ? 'Senator' : 'Representative',
                notes: `${stateCode} ${chamber === 'upper' ? 'Sen' : 'Rep'} Dist ${district} (${party})`
            };
        }
    }
    return data;
}

// Main Execution
const stateCode = process.argv[2]?.toUpperCase();
const targetStates = stateCode ? [stateCode] : Object.keys(SUPPORTED_STATES);

(async () => {
    let registry: Record<string, Record<string, any>> = {};
    if (fs.existsSync(REGISTRY_PATH)) {
        registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf-8'));
    }

    for (const state of targetStates) {
        if (!SUPPORTED_STATES[state]) continue;

        const stateData = await fetchStateData(state);
        if (stateData) {
            // MERGE: Don't overwrite existing validated manual entries if we want to be safe, 
            // but usually we want fresh data. 
            // Strategy: Update empty fields, keep existing ones? 
            // For now: Overwrite is better for "getting ahead" unless marked Verified.

            if (!registry[state]) registry[state] = {};

            // Merge logic
            Object.keys(stateData).forEach(name => {
                const existing = registry[state][name];
                // If we have an existing verified note, maybe keep it?
                // Let's just bulk add new ones and update missing emails.
                if (!existing || (!existing.email && stateData[name].email)) {
                    registry[state][name] = {
                        ...existing,
                        ...stateData[name]
                    };
                }
            });
            console.log(`Updated ${Object.keys(stateData).length} records for ${state}`);
        }
    }

    fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 4));
    console.log(`Registry saved to ${REGISTRY_PATH}`);
})();
