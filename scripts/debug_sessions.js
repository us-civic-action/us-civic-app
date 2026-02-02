const https = require('https');
const fs = require('fs');

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
    return new Promise((resolve, reject) => {
        const url = `${BASE_URL}?key=${API_KEY}&op=${op}${params}`;
        console.log(`Fetching: ${op}...`);
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
    const targetId = process.argv[2] || '25622';

    // 1. Get Person
    const person = await fetchOp('getPerson', `&id=${targetId}`);
    if (person && person.person) {
        console.log(`Person: ${person.person.name} (${person.person.role})`);
    }

    // 2. Get Sessions
    const sessionList = await fetchOp('getSessionList', '&state=NH');
    if (!sessionList.sessions) { console.log("No sessions"); return; }

    // Sort recent first
    const sessions = sessionList.sessions.sort((a, b) => b.year_start - a.year_start);

    for (const s of sessions) {
        console.log(`Checking Session ${s.session_id} (${s.year_start})...`);
        const sp = await fetchOp('getSponsoredList', `&id=${targetId}&session_id=${s.session_id}`);
        const list = sp.sponsoredbills;

        let count = 0;
        if (list) {
            if (Array.isArray(list)) count = list.length;
            else count = Object.keys(list).filter(k => !isNaN(parseInt(k))).length;
        }

        if (count > 0) {
            console.log(`FOUND ${count} bills in session ${s.session_id}!`);
            // Show one
            const bills = Array.isArray(list) ? list : Object.values(list).filter(b => b.bill_id);
            console.log(JSON.stringify(bills[0], null, 2));
            break;
        } else {
            console.log(`  > 0 bills.`);
        }
    }
}

run();
