
// This file will grow as we learn more committee emails/URLs.
// Ideally, this would be backed by a scraper or API in the future.

export interface CommitteeContact {
    email?: string;
    phone?: string;
    url?: string;
    notes?: string;
}

// Map State -> Committee Name (lowercase) -> Contact Info
const COMMITTEE_DATABASE: Record<string, Record<string, CommitteeContact>> = {
    // Examples (we can crowdsource these)
    'MA': {
        'education': {
            email: 'JointCommittee.Education@malegislature.gov', // Example pattern
            url: 'https://malegislature.gov/Committees/Detail/JED00'
        },
        'judiciary': {
            email: 'JointCommittee.Judiciary@malegislature.gov',
            url: 'https://malegislature.gov/Committees/Detail/JJD00'
        }
    },
    'NH': {
        'education': {
            email: 'HouseEducation@leg.state.nh.us',
            url: 'https://gencourt.state.nh.us/house/committees/committee_details.aspx?id=3'
        }
    }
};

export function getCommitteeContact(state: string, committeeName: string): CommitteeContact | null {
    const stateData = COMMITTEE_DATABASE[state.toUpperCase()];
    if (!stateData) return null;

    // Simple fuzzy match: check if key words exist in the committee name
    // e.g., "Joint Committee on Education" matches "education"
    const input = committeeName.toLowerCase();

    // Check exact matches or inclusion
    for (const key in stateData) {
        if (input.includes(key)) {
            return stateData[key];
        }
    }

    return null;
}
