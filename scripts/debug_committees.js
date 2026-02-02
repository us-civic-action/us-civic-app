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
    const targetId = process.argv[2] || '25622'; // Default to Walker

    // 1. Get Session ID
    const sessions = await fetchOp('getSessionList', '&state=NH');

    // CHECK TOP 3 SESSIONS for Committees
    for (const session of sessions.sessions.slice(0, 3)) {
        console.log(`\nScanning Committees for Session: ${session.year_start} (ID: ${session.session_id})...`);
        const commList = await fetchOp('getCommitteeList', `&state=NH&session_id=${session.session_id}`);

        if (!commList.committees) {
            console.log("No committees found.");
            continue;
        }

        let committees = [];
        if (Array.isArray(commList.committees)) {
            committees = commList.committees;
        } else {
            committees = Object.values(commList.committees).filter(c => c.committee_id);
        }

        console.log(`Found ${committees.length} committees. Checking membership...`);

        let found = false;
        // Check ALL committees
        for (const comm of committees) {
            const detail = await fetchOp('getCommittee', `&id=${comm.committee_id}`);

            if (detail.committee && detail.committee.members) {
                const members = detail.committee.members;
                const member = members.find(m => String(m.people_id) === String(targetId));
                if (member) {
                    console.log(`✅ FOUND in ${comm.name}! Role: ${member.role}`);
                    found = true;
                }
            }
        }

    }
}

run();
