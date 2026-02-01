import fs from 'fs';
import path from 'path';

async function scrapeLocalFile(filePath, role) {
    console.log(`Processing ${filePath}...`);
    try {
        const html = fs.readFileSync(filePath, 'utf-8');

        // Split by table rows to process each legislator
        const rows = html.split('<tr');

        const people = [];

        for (const row of rows) {
            // Check if this row has an email link (indicator of a valid member row)
            if (!row.includes('mailto:')) continue;

            // 1. Extract Email
            // <a href="mailto:Mike.Barrett@masenate.gov">
            const emailMatch = row.match(/mailto:([\w\.\-]+@[\w\.\-]+)/i);
            const email = emailMatch ? emailMatch[1] : null;

            // 2. Extract First Name (first cell with a link)
            // <td><a href="...">Michael</a></td>
            // We can look for the link text after the photo column
            const nameMatches = [...row.matchAll(/<td[^>]*>.*?<a[^>]*>(.*?)<\/a>.*?<\/td>/gs)];

            // Usually [0] is photo (or star), [1] is First, [2] is Last
            // Let's refine. The photo column has <img ... alt="Last , First"> which is reliable too!
            // <img src="..." alt="Michael , Barrett">

            let fullName = 'Unknown';
            const imgAltMatch = row.match(/alt="([^"]+)"/);
            if (imgAltMatch) {
                // "Michael , Barrett" -> "Michael Barrett"
                const parts = imgAltMatch[1].split(',').map(s => s.trim());
                if (parts.length >= 2) {
                    fullName = `${parts[0]} ${parts[1]}`;
                }
            } else {
                // Fallback to cell parsing if img tag fails
                // This is trickier with regex global.
                // Let's rely on the Email usually containing the name if img fails? 
                // No, standard is best.
                // <a href="/Legislators/Profile/MJB0">Michael</a>
                // Matches: Michael, Barrett
            }

            // 3. Extract Phone
            // (617) 722-1572
            const phoneMatch = row.match(/\(\d{3}\)\s\d{3}-\d{4}/);
            const phone = phoneMatch ? phoneMatch[0] : '(617) 722-2000';

            if (fullName !== 'Unknown' && email) {
                console.log(`Found: ${fullName} <${email}>`);
                people.push({
                    name: fullName,
                    email,
                    phone,
                    role
                });
            }
        }

        console.log(`--> Extracted ${people.length} ${role}s`);
        return people;

    } catch (e) {
        console.error(`Failed to scrape ${filePath}:`, e);
        return [];
    }
}

async function main() {
    // Process local files
    // Note: Assuming running from project root where files were saved
    const senate = await scrapeLocalFile('senate.html', 'Senator');
    const house = await scrapeLocalFile('house.html', 'Representative');

    const all = [...senate, ...house];

    // Create Dictionary
    const lookup = {};
    all.forEach(p => {
        // Direct Map
        lookup[p.name] = {
            email: p.email,
            phone: p.phone,
            role: p.role
        };

        // Alias Handling (Mike vs Michael)
        // If email is "Mike.Barrett" but name is "Michael Barrett",
        // we essentially have "Michael Barrett" -> "Mike.Barrett@...".
        // This solves the user's issue: The input (Sponsor Name) will likely vary.
        // If the Sponsor Name comes from LegiScan, it's usually formal "Michael Barrett".
        // If the user types "Mike Barrett", we might miss it.
        // We should add aliases for Common Nicknames if possible, OR just rely on "Last Name" matching if secure?
        // No, "Smith" is too common.
        // For now, mapping the Formal Name (from Image Alt) to the Actual Email (Mike.Barrett) is the 90% solution.
        // We can also add "First.Last" variations to the lookup keys if valuable.
    });

    fs.writeFileSync('ma_legislators_data.json', JSON.stringify(lookup, null, 2));
    console.log(`Saved ${Object.keys(lookup).length} legislators to ma_legislators_data.json`);
}

main();
