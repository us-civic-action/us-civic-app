const https = require('https');
const fs = require('fs');

// 1. Read API Key
let API_KEY = '';
try {
    const envFile = fs.readFileSync('.env.local', 'utf8');
    const match = envFile.match(/LEGISCAN_API_KEY=(.+)/);
    if (match) API_KEY = match[1].trim();
} catch (e) {
    console.error("Could not read .env.local");
    process.exit(1);
}

const BASE_URL = 'https://api.legiscan.com/';

// List of states (Manual for simplicity)
const STATES = [
    'NH', 'MA', 'ME', 'VT', 'RI', 'CT',
    'NY', 'NJ', 'PA', 'DE', 'MD',
    'VA', 'WV', 'NC', 'SC', 'GA', 'FL', 'AL', 'MS', 'TN', 'KY', 'AR', 'LA',
    'OH', 'MI', 'IN', 'IL', 'WI', 'MN', 'IA', 'MO', 'ND', 'SD', 'NE', 'KS',
    'TX', 'OK', 'NM', 'AZ',
    'CO', 'WY', 'MT', 'ID', 'UT', 'NV', 'CA', 'OR', 'WA', 'AK', 'HI'
];

const fetchOp = (op, params = '') => {
    return new Promise((resolve) => {
        const url = `${BASE_URL}?key=${API_KEY}&op=${op}${params}`;
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    resolve({ status: 'ERROR', alert: { message: 'JSON Parse Error' } });
                }
            });
        }).on('error', (e) => resolve({ status: 'ERROR', alert: { message: e.message } }));
    });
};

const checkStateLogic = async (state) => {
    try {
        // 1. Get Sessions & Logic
        const sessionData = await fetchOp('getSessionList', `&state=${state}`);
        if (!sessionData.sessions) return { state, status: 'API_FAIL', reason: 'No sessions' };

        const currentYear = new Date().getFullYear();
        let relevantSessions = sessionData.sessions.filter(s => s.year_start >= currentYear - 1);
        relevantSessions.sort((a, b) => b.year_start - a.year_start);

        let activeSession = relevantSessions.find(s => s.dataset_hash);
        if (!activeSession && relevantSessions.length > 0) activeSession = relevantSessions[0];

        if (!activeSession) return { state, status: 'NO_SESSION', reason: 'No active session' };

        const isHistorical = activeSession.year_start < currentYear;

        // 2. Fetch Master List (Proxy for "Dashboard Fetch")
        const masterData = await fetchOp('getMasterList', `&id=${activeSession.session_id}`);
        const bills = Object.values(masterData.masterlist || {});

        if (bills.length === 0) return { state, status: 'EMPTY_SESSION', reason: `0 bills in session ${activeSession.year_start}` };

        // 3. Sort & Simulate "Top 40"
        bills.sort((a, b) => new Date(b.last_action_date).getTime() - new Date(a.last_action_date).getTime());
        const topBills = bills.slice(0, 40);

        // 4. Simulate Filters per Bill
        // We'll just fetch details for Top 5 to approximate "Signal"
        let hearingsCount = 0;
        let recentAmendmentsCount = 0;
        let fallbackApplicable = false;

        // Optimized: Just check Top 5. If we find *any* hearings/amendments, we classify as "Standard".
        // If we find NONE, we classify as "Fallback" (assuming Top 5 acts as proxy for "Active")
        const results = await Promise.all(topBills.slice(0, 5).map(async (bMeta) => {
            const detail = await fetchOp('getBill', `&id=${bMeta.bill_id}`);
            const bill = detail.bill;
            if (!bill) return { h: 0, a: 0 };

            const today = new Date();
            today.setHours(0, 0, 0, 0);
            let hCount = 0;
            let aCount = 0;

            // Hearings
            if (bill.calendar) {
                bill.calendar.forEach(e => {
                    const d = new Date(e.date);
                    if (d >= today || isHistorical) hCount++;
                });
            }

            // Amendments
            if (bill.history) {
                const hasRecent = bill.history.some(e => {
                    const d = new Date(e.date);
                    const isRecent = (today - d) / (1000 * 3600 * 24) < 90;
                    const text = (e.action || '').toLowerCase();
                    const isAmend = text.includes('amend') || text.includes('report') || text.includes('adopted') || text.includes('concur');
                    return (isRecent || isHistorical) && isAmend;
                });
                if (hasRecent) aCount++;
            }

            return { h: hCount, a: aCount };
        }));

        hearingsCount = results.reduce((sum, r) => sum + r.h, 0);
        recentAmendmentsCount = results.reduce((sum, r) => sum + r.a, 0);

        // Logic check
        if (hearingsCount > 0 || recentAmendmentsCount > 0) {
            return {
                state,
                status: 'STANDARD',
                details: `${hearingsCount} Hearings, ${recentAmendmentsCount} Amendments`,
                session: activeSession.year_start
            };
        } else {
            return {
                state,
                status: 'FALLBACK',
                details: `Using Ghost Town Protocol`,
                session: activeSession.year_start
            };
        }

    } catch (e) {
        return { state, status: 'ERROR', reason: e.message };
    }
}

async function run() {
    console.log(`Analyzing Logic for ${STATES.length} states...`);

    const CHUNK_SIZE = 5;
    const allResults = [];

    for (let i = 0; i < STATES.length; i += CHUNK_SIZE) {
        const chunk = STATES.slice(i, i + CHUNK_SIZE);
        const promises = chunk.map(s => checkStateLogic(s));
        const chunkResults = await Promise.all(promises);
        allResults.push(...chunkResults);
        process.stdout.write('.');
    }

    console.log('\n\n--- LOGIC REPORT ---');
    const standard = allResults.filter(r => r.status === 'STANDARD');
    const fallback = allResults.filter(r => r.status === 'FALLBACK');
    const errors = allResults.filter(r => r.status !== 'STANDARD' && r.status !== 'FALLBACK');

    console.log(`STANDARD VIEW: ${standard.length}`);
    console.log(`FALLBACK VIEW: ${fallback.length}`);
    console.log(`ERRORS/EMPTY: ${errors.length}`);

    console.log('\n--- FALLBACK STATES (Verified as Ghost Towns) ---');
    fallback.forEach(r => {
        console.log(`[${r.state}] Session ${r.session}: ${r.details}`);
    });

    if (errors.length > 0) {
        console.log('\n--- ERRORS ---');
        errors.forEach(r => console.log(`[${r.state}] ${r.status}: ${r.reason}`));
    }
}

run();
