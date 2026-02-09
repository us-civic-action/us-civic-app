
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import { getActiveSessionId } from './lib/legiscan';

const BASE_URL = 'https://api.legiscan.com/';

async function testPA() {
    console.log("Testing PA Direct Fetch...");
    const API_KEY = process.env.LEGISCAN_API_KEY;
    if (!API_KEY) {
        console.error("No API Key found");
        return;
    }

    try {
        const session = await getActiveSessionId('PA');
        console.log("Session Result:", session);

        if (session) {
            const url = `${BASE_URL}?key=${API_KEY}&op=getMasterList&id=${session.id}`;
            console.log("Fetching Master List:", url.replace(API_KEY, 'HIDDEN_KEY'));

            const res = await fetch(url);
            const data = await res.json();

            if (data.status === 'ERROR') {
                console.error("API Error:", data.alert);
                return;
            }

            const allBills = (Object.values(data.masterlist || {}) as { bill_id: number; number: string; last_action_date: string }[])
                .filter(b => b && b.number)
                .sort((a, b) => new Date(b.last_action_date).getTime() - new Date(a.last_action_date).getTime());

            console.log(`Total Bills Found: ${allBills.length}`);

            if (allBills.length > 0) {
                console.log("Sample Bill Numbers:", allBills.slice(0, 10).map(b => b.number).join(', '));

                const senateBills = allBills.filter(b => b.number.startsWith('S'));
                const houseBills = allBills.filter(b => b.number.startsWith('H'));

                console.log(`Senate Bills (starting with 'S'): ${senateBills.length}`);
                console.log(`House Bills (starting with 'H'): ${houseBills.length}`);

                if (senateBills.length === 0 && houseBills.length === 0) {
                    console.warn("⚠️ No bills match 'S' or 'H' prefix! Checking actual prefixes...");
                    const prefixes = new Set(allBills.map(b => b.number.replace(/[0-9].*/, '')));
                    console.log("Found Prefixes:", Array.from(prefixes).slice(0, 20));
                }
            }
        }
    } catch (e) {
        console.error("Test Failed:", e);
    }
}

testPA();
