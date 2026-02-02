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
                    resolve({});
                }
            });
        }).on('error', reject);
    });
};

async function run() {
    // 1. Get Session ID
    const sessions = await fetchOp('getSessionList', '&state=NH');
    const recent = sessions.sessions[0]; // 2026
    const prev = sessions.sessions[1]; // 2025

    console.log(`Scanning Session: ${recent.year_start} (ID: ${recent.session_id})`);

    // 2. Get Master List
    const master = await fetchOp('getMasterList', `&id=${recent.session_id}`);
    if (!master.masterlist) {
        console.error("No masterlist found");
        return;
    }

    const bills = Object.values(master.masterlist).filter(b => b.bill_id);
    console.log(`Scanning ${bills.length} bills...`);

    let foundCount = 0;

    // We can't see sponsors in MasterList, we have to fetch details...
    // WAIT! Masterlist does NOT have sponsors.
    // retrieving 1000 bills is too expensive.

    // Alternative: Use `getSearch` for "David Walker" in 'sponsors' mode?
    // LegiScan `getSearch` has `query` but verification of fields is tricky.

    // Let's try searching for the NAME directly via getSearch which searches text content including sponsors.
    console.log("Searching for 'David Walker' in bill text/sponsors...");
    const searchRes = await fetchOp('getSearch', `&state=NH&query=David%20Walker`);

    if (searchRes.searchresult) {
        const results = Object.values(searchRes.searchresult).filter(r => r.bill_id);
        console.log(`Found ${results.length} search matches.`);

        for (const res of results.slice(0, 5)) {
            console.log(`\nChecking Bill: ${res.bill_number} - ${res.title}`);
            const detail = await fetchOp('getBill', `&id=${res.bill_id}`);
            if (detail.bill && detail.bill.sponsors) {
                const sponsors = detail.bill.sponsors;
                const walker = sponsors.find(s => s.name.includes('Walker'));
                if (walker) {
                    console.log(`✅ FOUND HIM! Name: ${walker.name}, ID: ${walker.people_id}`);
                    foundCount++;
                } else {
                    console.log("❌ Not in sponsor list (maybe just mentioned in text).");
                }
            }
        }
    }

    if (foundCount === 0) {
        console.log("\nTrying 2025 Session search...");
        const searchRes2 = await fetchOp('getSearch', `&state=NH&year=2&query=David%20Walker`); // Year=2 is usually 'recent' or specific year id? No, `year` param is YYYY or 1=current, 2=recent, 3=prior? 
        // API docs say `year` is YYYY.

        // Let's try specific year query not supported by standard search, usually just state/query.
        // Actually, let's just use the query.
    }

}

run();
