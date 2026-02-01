export interface MajorDonor {
    name: string;
    amount?: number;
    category: 'PAC' | 'Industry' | 'Individual' | 'Other';
}

export interface Bill {
    bill_id: number;
    number: string;
    change_hash: string;
    url: string;
    status_date: string;
    status: number;
    last_action_date: string;
    last_action: string;
    title: string;
    description: string;
}

export interface Hearing {
    hearing_id?: number;
    date: string;
    time: string;
    location: string;
    description: string;
    committee: string;
    bill_number?: string; // Often hearings are linked to bills
    bill_id?: number;
    bill_url?: string; // Link to full text
    type: 'House' | 'Senate' | 'Joint';
    ai_summary?: string;
    sponsor_info?: {
        name: string;
        id?: string; // Link to profile
        party: 'R' | 'D' | 'I';
        next_election: string;
        major_donors?: MajorDonor[];
    };
    smart_pills?: Pill[];
    bill_status?: 'Introduced' | 'In Committee' | 'Floor Vote' | 'Passed' | 'Vetoed';
    days_since_introduced?: number;
    is_bipartisan?: boolean;
}

export interface Pill {
    label: string;
    category: 'urgency' | 'process' | 'impact' | 'people' | 'politics';
    icon?: string;
    description?: string;
}

export interface AmendedBill {
    bill_id: number;
    bill_number: string;
    description: string;
    amendment_date: string;
    amendment_action: string; // e.g. "Amendment #2026-123h Adopted"
    sponsor_info?: {
        name: string;
        id?: string;
        party: 'R' | 'D' | 'I';
        next_election: string;
        major_donors?: MajorDonor[];
    };
    link: string; // URL to official text
    smart_pills?: Pill[];
    bill_status?: 'Introduced' | 'In Committee' | 'Floor Vote' | 'Passed' | 'Vetoed';
    is_bipartisan?: boolean;
}

export interface TestimonyPacket {
    billNumber: string;
    committee: string;
    hearingDate: string;
    hearingTime: string;
    position: 'support' | 'oppose' | 'neutral';
    testimonyContent?: string;
    testimonyFile?: string; // Path or base64
}

export interface Legislator {
    id: string; // "rep-joe-smith" or unique ID
    name: string;
    role: 'Representative' | 'Senator';
    district: string;
    party: 'R' | 'D' | 'I';
    email?: string;
    phone?: string;
    photoUrl?: string;

    // Accountability Data
    next_election: string;
    years_in_office?: number;
    attendance_rate?: number; // 0-100

    // External Links
    legiscan_id?: number;
    openstates_id?: string;

    // Badges/Tags
    badges: string[]; // ["❌ Landlord Caucus", "✅ Pro-Housing"]
    major_donors?: MajorDonor[];

    // Financials
    top_donors?: { name: string; amount: number; industry?: string }[];

    // Committees
    committees?: string[]; // ["Education", "Ways and Means"]

    // Voting History
    votes?: VotingRecord[];
}

export interface VotingRecord {
    bill_number: string;
    description: string;
    date: string;
    action: string; // "Passed with Amendment"
    legislator_vote: 'Yea' | 'Nay' | 'Not Voting' | 'Excused';
    outcome: 'Passed' | 'Failed';
}
