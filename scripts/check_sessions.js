const fs = require('fs');
const path = require('path');
const https = require('https');

// Load .env.local manually
try {
    const envPath = path.resolve(__dirname, '../.env.local');
    if (fs.existsSync(envPath)) {
        const envConfig = fs.readFileSync(envPath, 'utf8');
        envConfig.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim();
            }
        });
    }
} catch (e) {
    console.warn("Could not read .env.local");
}

const API_KEY = process.env.LEGISCAN_API_KEY;
const STATES = ['NJ', 'TX', 'CA'];
const BASE_URL = 'https://api.legiscan.com/';

if (!API_KEY) {
    console.error("No LEGISCAN_API_KEY found in .env.local or environment.");
    process.exit(1);
}

const fetchUrl = (url) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', reject);
    });
};

const checkState = async (state) => {
    console.log(`\n--- Checking ${state} ---`);

    // 1. Get Session List
    const sessionUrl = `${BASE_URL}?key=${API_KEY}&op=getSessionList&state=${state}`;
    const sessionData = await fetchUrl(sessionUrl);

    if (sessionData.status === 'ERROR') {
        console.error(`Error getting sessions for ${state}:`, sessionData.alert.message);
        return;
    }

    const sessions = sessionData.sessions;
    console.log(`Found ${sessions.length} sessions.`);

    // Find sessions covering 2026
    const currentSessions = sessions.filter(s => {
        return s.year_start <= 2026 && s.year_end >= 2026;
    });

    console.log("Sessions active in 2026:", currentSessions.map(s => `${s.session_id}: ${s.session_name} (${s.year_start}-${s.year_end})`));

    // 2. Check what getMasterList returns by default
    const masterUrl = `${BASE_URL}?key=${API_KEY}&op=getMasterList&state=${state}`;
    const masterData = await fetchUrl(masterUrl);

    if (masterData.masterlist) {
        console.log(`Default getMasterList session: ${masterData.masterlist.session_id}`);
        // Check if this ID matches one of the active 2026 ones
        const sessionDetails = sessions.find(s => s.session_id === masterData.masterlist.session_id);
        console.log(`Default Session Details: ${sessionDetails ? sessionDetails.session_name : 'Unknown'}`);
    } else {
        console.log("Error getting Default MasterList:", masterData);
    }
};

(async () => {
    for (const state of STATES) {
        await checkState(state);
    }
})();
