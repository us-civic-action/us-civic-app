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
    let targetId = process.argv[2];

    if (!targetId) {
        // 2. Search for David Walker to get ID if no arg
        const searchData = await fetchOp('getSearch', '&state=NH&query=David%20Walker');

        try {
            const keys = Object.keys(searchData.searchresult);
            for (const k of keys) {
                if (!isNaN(parseInt(k))) {
                    targetId = searchData.searchresult[k].people_id;
                    break;
                }
            }
        } catch (e) {
            console.log("Error parsing search result");
        }
    }

    if (!targetId) {
        console.log("TARGET_ID:NULL");
        return;
    }

    console.log("TARGET_ID:" + targetId);

    // 2. Get Person Details (Committees)
    const personStr = await fetchOp('getPerson', `&id=${targetId}`);
    console.log("\n--- COMMITTEE LIST STRUCTURE ---");
    if (personStr.person && personStr.person.committee_list) {
        console.log("Type:", Array.isArray(personStr.person.committee_list) ? "ARRAY" : typeof personStr.person.committee_list);

        let committees = personStr.person.committee_list;
        // Normalize if object
        if (!Array.isArray(committees)) {
            committees = Object.keys(committees).filter(k => !isNaN(k)).map(k => committees[k]);
        }
        console.log(JSON.stringify(committees, null, 2));
    } else {
        console.log("No committee_list found.");
    }

    // 3. Get Sponsored List
    const sponsored = await fetchOp('getSponsoredList', `&id=${targetId}`);
    console.log("\n--- SPONSORED BILLS STRUCTURE ---");
    if (sponsored.sponsoredbills) {
        console.log("Type:", Array.isArray(sponsored.sponsoredbills) ? "ARRAY" : typeof sponsored.sponsoredbills);
        // Show first 2 items to verify keys
        let list = sponsored.sponsoredbills;
        if (!Array.isArray(list)) {
            list = Object.keys(list).filter(k => !isNaN(k)).map(k => list[k]);
        }
        console.log(`Found ${list.length} bills.`);
        console.log(JSON.stringify(list.slice(0, 2), null, 2));
    } else {
        console.log("No sponsoredbills found (or error).");
        console.log(JSON.stringify(sponsored, null, 2));
    }
    // 4. Get Sessions
    const sessions = await fetchOp('getSessionList', '&state=NH');
    console.log("\n--- SESSIONS ---");
    if (sessions.sessions) {
        // Sort by year desc
        const sorted = sessions.sessions.sort((a, b) => b.year_start - a.year_start);
        console.log(JSON.stringify(sorted.slice(0, 3), null, 2));

        // CHECK TOP 3 SESSIONS
        for (const session of sorted.slice(0, 3)) {
            console.log(`\n🔎 Checking Session ID: ${session.session_id} (${session.session_name})...`);
            const sponsoredSession = await fetchOp('getSponsoredList', `&id=${targetId}&session_id=${session.session_id}`);

            let list2 = sponsoredSession.sponsoredbills;
            if (list2) {
                if (!Array.isArray(list2)) {
                    list2 = Object.keys(list2).filter(k => !isNaN(k)).map(k => list2[k]);
                }
                console.log(`TYPE: ${typeof sponsoredSession.sponsoredbills}`);
                console.log(`✅ Found ${list2.length} bills in ${session.year_start}.`);
                if (list2.length > 0) {
                    console.log(JSON.stringify(list2.slice(0, 2), null, 2));
                }
            } else {
                console.log("❌ No bills found in this session.");
            }
        }
    }
}

run();
