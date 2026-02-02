import { Legislator } from '@/types';

// Mock Database
export const MOCK_LEGISLATORS: Record<string, Legislator> = {
    "Rep. Joe Smith": {
        id: "rep-joe-smith",
        name: "Rep. Joe Smith",
        role: "Representative",
        district: "Rockingham 13",
        party: "R",
        next_election: "2026",
        attendance_rate: 85,
        badges: ["🏘️ Landlord Caucus"],
        major_donors: [
            { name: "AIPAC", amount: 5000, category: 'PAC' },
            { name: "NH Association of Realtors", amount: 500, category: 'Industry' },
            { name: "Apartment Assoc. of NH", amount: 250, category: 'Industry' }
        ],
        votes: [
            {
                bill_number: "HB 1291",
                description: "Accessory Dwelling Units",
                date: "2025-01-15",
                action: "Motion to Pass with Amendment",
                legislator_vote: "Yea",
                outcome: "Passed"
            },
            {
                bill_number: "SB 34",
                description: "Cannabis Legalization",
                date: "2025-01-10",
                action: "Motion to Table",
                legislator_vote: "Nay",
                outcome: "Failed"
            }
        ]
    },
    "Sen. Jane Doe": {
        id: "sen-jane-doe",
        name: "Sen. Jane Doe",
        role: "Senator",
        district: "District 21",
        party: "D",
        next_election: "2026",
        attendance_rate: 98,
        badges: ["🏘️ Pro-Housing", "🛡️ Civil Liberties"],
        major_donors: [
            { name: "Planned Parenthood NH", amount: 1000, category: 'PAC' },
            { name: "NH Sierra Club", amount: 500, category: 'PAC' }
        ],
        votes: [
            {
                bill_number: "HB 1291",
                description: "Accessory Dwelling Units",
                date: "2025-01-15",
                action: "Motion to Pass",
                legislator_vote: "Yea",
                outcome: "Passed"
            },
            {
                bill_number: "SB 34",
                description: "Cannabis Legalization",
                date: "2025-01-10",
                action: "Motion to Pass",
                legislator_vote: "Yea",
                outcome: "Passed"
            }
        ]
    },
    // NJ Senator
    "Sen. Kristin M. Corrado": {
        id: "senator-corrado",
        name: "Sen. Kristin M. Corrado",
        role: "Senator",
        district: "District 40",
        party: "R",
        email: "SenCorrado@njleg.org",
        phone: "(973) 237-1360",
        next_election: "2027",
        attendance_rate: 92,
        badges: ["👮 Law & Order", "💼 Small Business"],
        major_donors: [
            { name: "NJ PBA", amount: 2000, category: 'PAC' },
            { name: "Chamber of Commerce", amount: 1000, category: 'Industry' }
        ],
        votes: [
            {
                bill_number: "S123",
                description: "Veterans Property Tax Relief",
                date: "2025-02-01",
                action: "Final Passage",
                legislator_vote: "Yea",
                outcome: "Passed"
            },
            {
                bill_number: "S456",
                description: "Offshore Wind Funding",
                date: "2025-01-20",
                action: "Motion to Table",
                legislator_vote: "Nay",
                outcome: "Passed"
            }
        ]
    },
    // Alaska/Demo Senator (requested by user context)
    "Sen. Elvi Gray-Jackson": {
        id: "sen-elvi-gray-jackson",
        name: "Sen. Elvi Gray-Jackson",
        role: "Senator",
        district: "District I",
        party: "D",
        email: "Sen.Elvi.Gray-Jackson@akleg.gov",
        phone: "(907) 465-4930",
        next_election: "2026",
        attendance_rate: 95,
        badges: ["🏥 Public Health", "🛡️ Civil Rights"],
        major_donors: [
            { name: "Public Employees Local 71", amount: 1000, category: 'PAC' },
            { name: "NEA Alaska", amount: 500, category: 'PAC' }
        ],
        votes: [
            {
                bill_number: "SB 12",
                description: "Education Funding",
                date: "2025-01-15",
                action: "Final Passage",
                legislator_vote: "Yea",
                outcome: "Passed"
            }
        ]
    },
    // Live Demo: David Walker
    "David Walker": {
        id: "24750",
        name: "David Walker",
        role: "Representative",
        district: "Strafford 19",
        party: "R",
        email: "David.Walker@leg.state.nh.us",
        phone: "603-271-3524",
        next_election: "2026",
        attendance_rate: 96,
        badges: ["🇺🇸 Veteran", "🏛️ Local Control", "🔋 Energy Policy"],
        major_donors: [],
        votes: []
    }
};
