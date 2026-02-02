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
    // Session 2236 is 2026
    const master = await fetchOp('getMasterList', '&state=NH&id=2236');
    if (master.masterlist) {
        // Get first bill
        const bills = Object.values(master.masterlist).filter(b => b.bill_id);
        console.log(`Found ${bills.length} bills in Master List.`);

        if (bills.length > 0) {
            const firstBill = bills[0];
            console.log(`Checking Bill ${firstBill.bill_number} (ID: ${firstBill.bill_id})`);

            // Get Bill Details to find sponsor
            const billDetails = await fetchOp('getBill', `&id=${firstBill.bill_id}`);
            if (billDetails.bill && billDetails.bill.sponsors && billDetails.bill.sponsors.length > 0) {
                const sponsor = billDetails.bill.sponsors[0];
                console.log(`Sponsor: ${sponsor.name} (ID: ${sponsor.people_id})`);

                // NOW CHECK SPONSORED LIST FOR THIS PERSON
                console.log(`\n--- Verification Check: fetching sponsored list for ${sponsor.people_id} ---`);
                const sp = await fetchOp('getSponsoredList', `&id=${sponsor.people_id}&session_id=2236`);
                const list = sp.sponsoredbills;
                if (list && (Array.isArray(list) || Object.keys(list).length > 0)) {
                    const count = Array.isArray(list) ? list.length : Object.keys(list).length;
                    console.log(`SUCCESS: Found ${count} bills for ${sponsor.name}`);
                } else {
                    console.log(`FAILURE: Found 0 bills for ${sponsor.name} (who definitely sponsored ${firstBill.bill_number})`);
                }
            } else {
                console.log("First bill has no sponsors?");
            }
        }
    }
}

run();
