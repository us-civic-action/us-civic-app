const https = require('https');
const fs = require('fs');
const { JSDOM } = require("jsdom");

const BASE_URL = 'https://www.gencourt.state.nh.us/house/committees/standingcommittees.aspx';
const HOST = 'https://www.gencourt.state.nh.us';

// Helper to fetch HTML (follows redirects)
const fetchHtml = (url) => {
    return new Promise((resolve, reject) => {
        const get = (u) => {
            https.get(u, (res) => {
                // Handle Redirects
                if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                    console.log(`Redirecting to ${res.headers.location}...`);
                    get(res.headers.location.startsWith('http') ? res.headers.location : HOST + res.headers.location);
                    return;
                }

                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => resolve(data));
            }).on('error', reject);
        };
        get(url);
    });
};

async function run() {
    console.log("Fetching Main Committee List...");
    const mainHtml = await fetchHtml(BASE_URL);
    const mainDom = new JSDOM(mainHtml);
    const doc = mainDom.window.document;

    // Debug: Log the first 500 chars of HTML to see if we got content
    console.log(mainHtml.substring(0, 1000));

    // Find all links to committee details (committeedetails.aspx?id=...)
    // Note: The href might be relative like "committeedetails.aspx?id=1" or "./committeedetails.aspx..."
    const links = Array.from(doc.querySelectorAll('a'))
        .filter(a => a.href && a.href.toLowerCase().includes('committeedetails.aspx'))
        .map(a => ({
            name: a.textContent.trim(),
            // Join properly if it's relative
            url: a.href.startsWith('http') ? a.href : HOST + '/house/committees/' + a.href
        }));

    console.log(`Found ${links.length} committees. Scraping members...`);

    const committeeMap = {}; // "Legislator Name" -> ["Committee 1", "Committee 2"]

    for (const link of links) {
        // Skip sub-divisions if they are just links to the same page with anchors, 
        // but looking at the URL pattern, regular committees have unique IDs.
        // We might want to filter out 'Select Committee' if they aren't standing?
        // Let's just scrape everything found.

        console.log(`Scraping ${link.name}...`);
        try {
            const commHtml = await fetchHtml(link.url);
            const commDom = new JSDOM(commHtml);
            const cDoc = commDom.window.document;

            // 1. Find the "Committee Members:" header
            // The structure is: <div class="card-header">Committee Members:</div>
            // We need to find the card that contains this header.
            const headers = Array.from(cDoc.querySelectorAll('.card-header'));
            const memberHeader = headers.find(h => h.textContent.includes('Committee Members:'));

            const uniqueMembers = new Set();

            if (memberHeader) {
                // The members are in the next sibling .card-body, or parent's .card-body
                // Structure: div.card > div.card-header + div.card-body
                const cardBody = memberHeader.parentElement.querySelector('.card-body');

                if (cardBody) {
                    const memberLinks = Array.from(cardBody.querySelectorAll('a'));
                    memberLinks.forEach(ml => {
                        const rawName = ml.textContent.trim();
                        // Clean name: "Rep. John Smith" -> "John Smith"
                        // Also remove (R) / (D) suffix if present in text (though usually outside <a>)
                        const cleanName = rawName
                            .replace(/^(Rep\.|Sen\.|Representative|Senator)\s+/i, '')
                            .replace(/\s+\((R|D|I)\)$/i, '') // Remove party suffix if inside link
                            .trim();

                        if (cleanName) uniqueMembers.add(cleanName);
                    });
                }
            } else {
                console.log('   -> Warning: "Committee Members:" header not found.');
            }

            // Also try to find Chairman / Vice Chairman / Clerk in the top section
            // They are labeled with strong text or just text nodes.
            // "Chairman: <a...>"
            // Let's iterate all links and see if they look like members (link to member.aspx)
            // primarily to catch the Chair/Vice Chair who might be listed separate from the main list.
            const allMemberLinks = Array.from(cDoc.querySelectorAll('a[href*="member.aspx"]'));
            allMemberLinks.forEach(ml => {
                const rawName = ml.textContent.trim();
                const cleanName = rawName.replace(/^(Rep\.|Sen\.|Representative|Senator)\s+/i, '').trim();
                if (cleanName) uniqueMembers.add(cleanName);
            });

            console.log(`   -> Found ${uniqueMembers.size} members.`);

            for (const member of uniqueMembers) {
                if (!committeeMap[member]) committeeMap[member] = [];
                committeeMap[member].push(link.name);
            }

        } catch (e) {
            console.error(`Error scraping ${link.name}:`, e.message);
        }

        // Polite delay
        await new Promise(r => setTimeout(r, 500));
    }

    // Output Mapping
    console.log("Saving data...");
    fs.writeFileSync('lib/data/committee_assignments.json', JSON.stringify(committeeMap, null, 2));
    console.log("Done.");
}

run();
