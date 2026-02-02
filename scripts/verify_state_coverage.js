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

// List of states from lib/states.ts (Manually extracted for script simplicity)
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

const checkState = async (state) => {
    try {
        // 1. Get Sessions
        const sessionData = await fetchOp('getSessionList', `&state=${state}`);
        if (sessionData.status === 'ERROR' || !sessionData.sessions) {
            return { state, status: 'FAIL', reason: 'Session List Error: ' + (sessionData.alert?.message || 'Unknown') };
        }

        // Logic from legiscan.ts
        const currentYear = new Date().getFullYear();
        let relevantSessions = sessionData.sessions.filter(s => s.year_start >= currentYear - 1);
        relevantSessions.sort((a, b) => b.year_start - a.year_start);

        let activeSession = relevantSessions.find(s => s.dataset_hash); // The "Smart" Fix
        let method = 'Smart Hash';

        if (!activeSession) {
            if (relevantSessions.length > 0) {
                activeSession = relevantSessions[0];
                method = 'Fallback Newest';
            } else {
                activeSession = sessionData.sessions[0];
                method = 'Fallback Default';
            }
        }

        if (!activeSession) {
            return { state, status: 'FAIL', reason: 'No Sessions Found' };
        }

        // 2. data Check
        // We use getMasterList heavily, usually filtering for recent items. 
        // Here we just want to know if *any* data exists.
        const masterData = await fetchOp('getMasterList', `&id=${activeSession.session_id}`);

        if (masterData.status === 'ERROR') {
            return {
                state,
                status: 'FAIL',
                reason: `MasterList Error (${activeSession.year_start}): ${masterData.alert?.message}`,
                session: activeSession
            };
        }

        const billCount = Object.keys(masterData.masterlist || {}).length;

        if (billCount === 0) {
            return {
                state,
                status: 'WARN',
                reason: `Zero Bills in Session ${activeSession.year_start} (${method})`,
                session: activeSession,
                count: 0
            };
        }

        return {
            state,
            status: 'PASS',
            count: billCount,
            year: activeSession.year_start,
            method
        };

    } catch (e) {
        return { state, status: 'FAIL', reason: 'Exception: ' + e.message };
    }
};

async function run() {
    console.log(`Checking ${STATES.length} states...`);

    // Batching to avoid rate limits? LegiScan is pretty generous, but let's do chunks of 5.
    const CHUNK_SIZE = 5;
    const results = [];

    for (let i = 0; i < STATES.length; i += CHUNK_SIZE) {
        const chunk = STATES.slice(i, i + CHUNK_SIZE);
        const promises = chunk.map(s => checkState(s));
        const chunkResults = await Promise.all(promises);
        results.push(...chunkResults);
        process.stdout.write('.'); // Progress dot
    }

    console.log('\n\n--- RESULTS ---');

    const passed = results.filter(r => r.status === 'PASS');
    const failed = results.filter(r => r.status !== 'PASS');

    console.log(`PASS: ${passed.length}`);
    console.log(`FAIL/WARN: ${failed.length}`);

    if (failed.length > 0) {
        console.log('\n--- ISSUES ---');
        failed.forEach(r => {
            console.log(`[${r.state}] ${r.status}: ${r.reason} (Session: ${r.session?.year_start || 'N/A'})`);
        });
    } else {
        console.log('✅ ALL STATES GREEN');
    }
}

run();
