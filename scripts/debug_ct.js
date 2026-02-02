const fs = require('fs');
const https = require('https');

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

if (!API_KEY) {
    console.error("No API KEY found");
    process.exit(1);
}

const BASE_URL = 'https://api.legiscan.com/';

// Helper to fetch
const fetchOp = (op, params = '') => {
    return new Promise((resolve, reject) => {
        const url = `${BASE_URL}?key=${API_KEY}&op=${op}${params}`;
        console.log(`Fetching: ${op}${params}...`);
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    console.error("Parse error", data);
                    resolve({});
                }
            });
        }).on('error', reject);
    });
};

async function run() {
    console.log("Debugging CT Data...");

    // 1. Get Sessions
    const sessions = await fetchOp('getSessionList', '&state=CT');
    console.log("\n--- CT SESSIONS ---");
    if (sessions.sessions) {
        // Sort by year desc
        const sorted = sessions.sessions.sort((a, b) => b.year_start - a.year_start);
        console.log(JSON.stringify(sorted.slice(0, 5), null, 2));

        // Get Master List for Top Session
        const topSession = sorted[0];
        if (topSession) {
            console.log(`\nChecking Master List for Session ${topSession.session_id} (${topSession.year_start})...`);
            const master = await fetchOp('getMasterList', `&id=${topSession.session_id}`);
            if (master.masterlist) {
                const bills = Object.keys(master.masterlist).length;
                console.log(`✅ Found ${bills} bills in master list.`);
            } else {
                console.log(`❌ No master list found (or error). Status: ${master.status}`);
                console.log(JSON.stringify(master, null, 2));
            }
        }
    } else {
        console.log("❌ No sessions found for CT.");
    }
}

run();
