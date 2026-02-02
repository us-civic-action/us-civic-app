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

const fetchOp = (op, params = '') => {
    return new Promise((resolve) => {
        const url = `${BASE_URL}?key=${API_KEY}&op=${op}${params}`;
        console.log(`Fetching: ${op}${params}`);
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

async function run() {
    console.log("Debugging STATE: LA");

    // 1. Get Sessions
    const sessionData = await fetchOp('getSessionList', `&state=LA`);
    const currentYear = new Date().getFullYear();
    let relevantSessions = sessionData.sessions.filter(s => s.year_start >= currentYear - 1);
    relevantSessions.sort((a, b) => b.year_start - a.year_start);

    // Replicate Logic
    let activeSession = relevantSessions.find(s => s.dataset_hash);
    if (!activeSession && relevantSessions.length > 0) activeSession = relevantSessions[0];

    if (!activeSession) {
        console.log("CRITICAL: No active session found for LA.");
        return;
    }

    console.log(`\nSELECTED SESSION: ${activeSession.year_start} (ID: ${activeSession.session_id})`);
    console.log(`HASH: ${activeSession.dataset_hash}`);

    // 2. Master List
    const masterData = await fetchOp('getMasterList', `&id=${activeSession.session_id}`);
    const bills = Object.values(masterData.masterlist || {});
    console.log(`\nTOTAL BILLS: ${bills.length}`);

    if (bills.length === 0) return;

    // 3. Last Action Dates
    // Sort by last action
    bills.sort((a, b) => new Date(b.last_action_date).getTime() - new Date(a.last_action_date).getTime());

    console.log("\n--- TOP 5 MOST RECENT BILLS ---");
    bills.slice(0, 5).forEach(b => {
        console.log(`[${b.number}] ${b.last_action_date}: ${b.title.substring(0, 50)}...`);
    });

    // 4. Check for Hearings/Amendments on top bill
    const topBill = bills[0];
    if (topBill) {
        console.log(`\n--- INSPECTING TOP BILL: ${topBill.number} (${topBill.bill_id}) ---`);
        const detail = await fetchOp('getBill', `&id=${topBill.bill_id}`);
        const b = detail.bill;

        if (b) {
            console.log(`Calendar Events: ${b.calendar ? b.calendar.length : 0}`);
            if (b.calendar) console.log(JSON.stringify(b.calendar, null, 2));

            console.log(`History Events: ${b.history ? b.history.length : 0}`);
            if (b.history) {
                // Check recent
                const today = new Date();
                const recentify = b.history.filter(h => {
                    const d = new Date(h.date);
                    return (today - d) / (1000 * 3600 * 24) < 90;
                });
                console.log(`Events in last 90 days: ${recentify.length}`);
                console.log("Last 3 Events:");
                console.log(JSON.stringify(b.history.slice(0, 3), null, 2));
            }
        }
    }
}

run();
