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
    // 2. Search for David Walker to get ID
    const searchData = await fetchOp('getSearch', '&state=NH&query=David%20Walker');

    // Simplified access
    let targetId = null;
    try {
        // Just take the first key that is not "summary" or standard metadata
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

    if (!targetId) {
        console.log("TARGET_ID:NULL");
        return;
    }

    console.log("TARGET_ID:" + targetId);
    return;

    console.log(`Found ID: ${targetId}`);

    // 2. Get Person Details (Committees)
    const personStr = await fetchOp('getPerson', `&id=${targetId}`);
    console.log("\n--- COMMITTEE LIST STRUCTURE ---");
    if (personStr.person && personStr.person.committee_list) {
        console.log("Type:", Array.isArray(personStr.person.committee_list) ? "ARRAY" : typeof personStr.person.committee_list);
        console.log(JSON.stringify(personStr.person.committee_list, null, 2));
    } else {
        console.log("No committee_list found.");
    }

    // 3. Get Sponsored List
    const sponsored = await fetchOp('getSponsoredList', `&id=${targetId}`);
    console.log("\n--- SPONSORED BILLS STRUCTURE ---");
    if (sponsored.sponsoredbills) {
        console.log("Type:", Array.isArray(sponsored.sponsoredbills) ? "ARRAY" : typeof sponsored.sponsoredbills);
        // Show first 2 items to check keys
        const list = Array.isArray(sponsored.sponsoredbills) ? sponsored.sponsoredbills : Object.values(sponsored.sponsoredbills);
        console.log(JSON.stringify(list.slice(0, 2), null, 2));
    } else {
        console.log("No sponsoredbills found (or error).");
        console.log(JSON.stringify(sponsored, null, 2));
    }
}

run();
