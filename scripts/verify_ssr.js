const http = require('http');

// Fetch from localhost:3000
const fetchLocal = (path) => {
    return new Promise((resolve, reject) => {
        http.get(`http://localhost:3000${path}`, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
};

async function verify() {
    try {
        // Get dashboard JSON data by accessing the API directly
        console.log("Fetching person page for ID 24750 (from earlier screenshots)...");

        const personHtml = await fetchLocal('/nh/person/24750');

        // Check for key sections
        const hasCommitteeSection = personHtml.includes("Committee Assignments");
        const hasSponsorshipSection = personHtml.includes("Recent Sponsorships");
        const hasEmptyCommittee = personHtml.includes("Not currently assigned to any major committees");
        const hasEmptySponsorship = personHtml.includes("No recent sponsored bills found");

        console.log("\n=== VERIFICATION RESULTS ===");
        console.log(`Committee Assignments Section: ${hasCommitteeSection ? "✓ PRESENT" : "✗ MISSING"}`);
        console.log(`Recent Sponsorships Section: ${hasSponsorshipSection ? "✓ PRESENT" : "✗ MISSING"}`);
        console.log(`Committee Empty State: ${hasEmptyCommittee ? "✓ SHOWN" : "✗ NOT SHOWN"}`);
        console.log(`Sponsorship Empty State: ${hasEmptySponsorship ? "✓ SHOWN" : "✗ NOT SHOWN"}`);

        // Look for actual data
        const committeeMatches = personHtml.match(/class="[^"]*">•<\/span> ([^<]+)</g);
        if (committeeMatches) {
            console.log(`\nFound ${committeeMatches.length} committee items:`);
            committeeMatches.slice(0, 3).forEach(m => {
                const name = m.match(/> ([^<]+)/)[1];
                console.log(`  - ${name}`);
            });
        }

        // Look for bill rows
        const billRows = personHtml.match(/<tr[^>]*>[\s\S]*?<\/tr>/g) || [];
        const dataBillRows = billRows.filter(row => row.includes('HB') || row.includes('SB'));
        if (dataBillRows.length > 0) {
            console.log(`\nFound ${dataBillRows.length} bill rows in sponsorship table`);
        }

        console.log("\n=== STATUS ===");
        if (hasCommitteeSection && hasSponsorshipSection) {
            if (!hasEmptyCommittee && committeeMatches && committeeMatches.length > 0) {
                console.log("✅ SUCCESS: Committees are populated!");
            } else if (hasEmptyCommittee) {
                console.log("⚠️  PARTIAL: Committees section exists but shows empty state");
            }

            if (!hasEmptySponsorship && dataBillRows.length > 0) {
                console.log("✅ SUCCESS: Sponsorships are populated!");
            } else if (hasEmptySponsorship) {
                console.log("⚠️  PARTIAL: Sponsorships section exists but shows empty state");
            }
        } else {
            console.log("❌ FAILED: Sections are missing from the page");
        }

    } catch (e) {
        console.error("Error:", e.message);
    }
}

verify();
