export interface StateConfig {
    code: string;
    name: string;
    hasWizard: boolean;
    wizardType?: 'pdf_generator' | 'direct_contact'; // 'pdf_generator' (NH) or 'direct_contact' (MA)
    submissionMethod?: 'centralized' | 'committee'; // Legacy? Keeping for now.
    flagEmoji: string;
    externalLink?: string;
    findLegislatorLink?: string;
    submissionTip?: string;
    // Dynamic Text for Step 3
    step3Instructions?: string;
    // Branding
    legislatureName?: string; // e.g. "NH General Court"
    capitolCity?: string; // e.g. "State House, Concord"
    submissionPortalUrl?: string; // Direct link to the testimony submission form
    theme?: {
        primary: string;   // Gradient Start (Hex)
        secondary: string; // Gradient End (Hex)
    }
}

export const SUPPORTED_STATES: Record<string, StateConfig> = {
    // New England
    NH: {
        code: 'NH', name: 'New Hampshire', hasWizard: true, wizardType: 'pdf_generator', submissionMethod: 'centralized', flagEmoji: '🌲',
        findLegislatorLink: 'https://gencourt.state.nh.us/house/members/wheredoilive.aspx',
        step3Instructions: "Submit testimony via the General Court portal.",
        legislatureName: "NH General Court", capitolCity: "State House, Concord", submissionPortalUrl: "https://gc.nh.gov/house/committees/remotetestimony/default.aspx",
        theme: { primary: '#14532d', secondary: '#111827' } // NH Green -> Granite
    },
    MA: { code: 'MA', name: 'Massachusetts', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🐋', externalLink: 'https://malegislature.gov/', legislatureName: "General Court of Massachusetts", capitolCity: "State House, Boston", theme: { primary: '#1e3a8a', secondary: '#1e293b' } }, // Blue/Slate
    ME: { code: 'ME', name: 'Maine', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🦞', externalLink: 'https://legislature.maine.gov/', legislatureName: "Maine Legislature", capitolCity: "State House, Augusta", theme: { primary: '#0f4c3a', secondary: '#0f172a' } }, // Pine Green
    VT: { code: 'VT', name: 'Vermont', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🍁', externalLink: 'https://legislature.vermont.gov/', legislatureName: "Vermont General Assembly", capitolCity: "State House, Montpelier", theme: { primary: '#3f6212', secondary: '#14532d' } }, // Green Mountain
    RI: { code: 'RI', name: 'Rhode Island', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '⚓', externalLink: 'https://www.rilegislature.gov/', legislatureName: "Rhode Island General Assembly", capitolCity: "State House, Providence", theme: { primary: '#eab308', secondary: '#1e40af' } }, // Gold/Blue (Anchor)
    CT: { code: 'CT', name: 'Connecticut', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🍇', externalLink: 'https://www.cga.ct.gov/', legislatureName: "Connecticut General Assembly", capitolCity: "State Capitol, Hartford", theme: { primary: '#1e3a8a', secondary: '#4338ca' } }, // Generic Blue

    // Mid-Atlantic
    NY: { code: 'NY', name: 'New York', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🗽', externalLink: 'https://www.nysenate.gov/', legislatureName: "New York State Legislature", capitolCity: "State Capitol, Albany", theme: { primary: '#1e40af', secondary: '#d97706' } }, // Blue/Gold
    NJ: { code: 'NJ', name: 'New Jersey', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🍅', externalLink: 'https://www.njleg.state.nj.us/', legislatureName: "New Jersey Legislature", capitolCity: "State House, Trenton", theme: { primary: '#f59e0b', secondary: '#78350f' } }, // Buff/Blue (Jersey Colors)
    PA: { code: 'PA', name: 'Pennsylvania', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🔔', externalLink: 'https://www.legis.state.pa.us/', legislatureName: "Pennsylvania General Assembly", capitolCity: "State Capitol, Harrisburg", theme: { primary: '#1e3a8a', secondary: '#fbbf24' } }, // Blue/Gold
    DE: { code: 'DE', name: 'Delaware', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🐔', externalLink: 'https://legis.delaware.gov/', legislatureName: "Delaware General Assembly", capitolCity: "Legislative Hall, Dover", theme: { primary: '#60a5fa', secondary: '#d97706' } }, // Colonial Blue/Buff
    MD: { code: 'MD', name: 'Maryland', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🦀', externalLink: 'https://mgaleg.maryland.gov/', legislatureName: "Maryland General Assembly", capitolCity: "State House, Annapolis", theme: { primary: '#b91c1c', secondary: '#000000' } }, // Red/Black (Flag)

    // South
    VA: { code: 'VA', name: 'Virginia', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '👑', externalLink: 'https://virginiageneralassembly.gov/', legislatureName: "Virginia General Assembly", capitolCity: "State Capitol, Richmond", theme: { primary: '#1e40af', secondary: '#4b5563' } },
    WV: { code: 'WV', name: 'West Virginia', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '⛰️', externalLink: 'https://www.wvlegislature.gov/', legislatureName: "West Virginia Legislature", capitolCity: "State Capitol, Charleston", theme: { primary: '#1e3a8a', secondary: '#ca8a04' } }, // Blue/Old Gold
    NC: { code: 'NC', name: 'North Carolina', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '✈️', externalLink: 'https://www.ncleg.gov/', legislatureName: "North Carolina General Assembly", capitolCity: "Legislative Building, Raleigh", theme: { primary: '#b91c1c', secondary: '#1e3a8a' } }, // Red/Blue
    SC: { code: 'SC', name: 'South Carolina', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌴', externalLink: 'https://www.scstatehouse.gov/', legislatureName: "South Carolina General Assembly", capitolCity: "State House, Columbia", theme: { primary: '#172554', secondary: '#1e40af' } }, // Indigo (Palmetto)
    GA: { code: 'GA', name: 'Georgia', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🍑', externalLink: 'https://www.legis.ga.gov/', legislatureName: "Georgia General Assembly", capitolCity: "State Capitol, Atlanta", theme: { primary: '#b91c1c', secondary: '#000000' } },
    FL: { code: 'FL', name: 'Florida', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🍊', externalLink: 'https://www.leg.state.fl.us/', legislatureName: "Florida Legislature", capitolCity: "The Capitol, Tallahassee", theme: { primary: '#b91c1c', secondary: '#ea580c' } }, // Red/Orange
    AL: { code: 'AL', name: 'Alabama', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🚀', externalLink: 'https://alison.legislature.state.al.us/', legislatureName: "Alabama Legislature", capitolCity: "State House, Montgomery", theme: { primary: '#991b1b', secondary: '#b91c1c' } }, // Crimson
    MS: { code: 'MS', name: 'Mississippi', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🎸', externalLink: 'https://legislature.ms.gov/', legislatureName: "Mississippi Legislature", capitolCity: "State Capitol, Jackson", theme: { primary: '#dc2626', secondary: '#1d4ed8' } },
    TN: { code: 'TN', name: 'Tennessee', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🎶', externalLink: 'https://www.capitol.tn.gov/', legislatureName: "Tennessee General Assembly", capitolCity: "State Capitol, Nashville", theme: { primary: '#b91c1c', secondary: '#1e3a8a' } },
    KY: { code: 'KY', name: 'Kentucky', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🐎', externalLink: 'https://legislature.ky.gov/', legislatureName: "Kentucky General Assembly", capitolCity: "State Capitol, Frankfort", theme: { primary: '#1e3a8a', secondary: '#ca8a04' } }, // Blue/Gold
    AR: { code: 'AR', name: 'Arkansas', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '💎', externalLink: 'https://www.arkleg.state.ar.us/', legislatureName: "Arkansas General Assembly", capitolCity: "State Capitol, Little Rock", theme: { primary: '#b91c1c', secondary: '#1e3a8a' } },
    LA: { code: 'LA', name: 'Louisiana', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '⚜️', externalLink: 'https://www.legis.la.gov/', legislatureName: "Louisiana State Legislature", capitolCity: "State Capitol, Baton Rouge", theme: { primary: '#1e3a8a', secondary: '#ca8a04' } }, // Pelican Blue/Gold

    // Midwest
    OH: { code: 'OH', name: 'Ohio', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌰', externalLink: 'https://www.legislature.ohio.gov/', legislatureName: "Ohio General Assembly", capitolCity: "Statehouse, Columbus", theme: { primary: '#b91c1c', secondary: '#1e3a8a' } },
    MI: { code: 'MI', name: 'Michigan', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🧤', externalLink: 'https://www.legislature.mi.gov/', legislatureName: "Michigan Legislature", capitolCity: "State Capitol, Lansing", theme: { primary: '#1e3a8a', secondary: '#1e40af' } }, // Maize/Blue? Or pure Blue
    IN: { code: 'IN', name: 'Indiana', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🏎️', externalLink: 'https://iga.in.gov/', legislatureName: "Indiana General Assembly", capitolCity: "State House, Indianapolis", theme: { primary: '#1e3a8a', secondary: '#facc15' } },
    IL: { code: 'IL', name: 'Illinois', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🎩', externalLink: 'https://www.ilga.gov/', legislatureName: "Illinois General Assembly", capitolCity: "State Capitol, Springfield", theme: { primary: '#1e3a8a', secondary: '#ea580c' } }, // Land of Lincoln
    WI: { code: 'WI', name: 'Wisconsin', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🧀', externalLink: 'https://legis.wisconsin.gov/', legislatureName: "Wisconsin Legislature", capitolCity: "State Capitol, Madison", theme: { primary: '#1e3a8a', secondary: '#ca8a04' } },
    MN: { code: 'MN', name: 'Minnesota', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🛶', externalLink: 'https://www.house.leg.state.mn.us/', legislatureName: "Minnesota Legislature", capitolCity: "State Capitol, St. Paul", theme: { primary: '#1e3a8a', secondary: '#06b6d4' } }, // North Star Blue
    IA: { code: 'IA', name: 'Iowa', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🚜', externalLink: 'https://www.legis.iowa.gov/', legislatureName: "Iowa General Assembly", capitolCity: "State Capitol, Des Moines", theme: { primary: '#1e293b', secondary: '#ca8a04' } },
    MO: { code: 'MO', name: 'Missouri', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🏛️', externalLink: 'https://www.senate.mo.gov/', legislatureName: "Missouri General Assembly", capitolCity: "State Capitol, Jefferson City", theme: { primary: '#b91c1c', secondary: '#1e3a8a' } },
    ND: { code: 'ND', name: 'North Dakota', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌾', externalLink: 'https://www.ndlegis.gov/', legislatureName: "North Dakota Legislative Assembly", capitolCity: "State Capitol, Bismarck", theme: { primary: '#1e3a8a', secondary: '#1e40af' } }, // Farming/Wheat
    SD: { code: 'SD', name: 'South Dakota', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🗿', externalLink: 'https://sdlegislature.gov/', legislatureName: "South Dakota Legislature", capitolCity: "State Capitol, Pierre", theme: { primary: '#0ea5e9', secondary: '#fcd34d' } }, // Sky Blue/Gold
    NE: { code: 'NE', name: 'Nebraska', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌽', externalLink: 'https://nebraskalegislature.gov/', legislatureName: "Nebraska Legislature", capitolCity: "State Capitol, Lincoln", theme: { primary: '#1e3a8a', secondary: '#faa916' } }, // Cornhusker
    KS: { code: 'KS', name: 'Kansas', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌻', externalLink: 'https://www.kslegislature.org/', legislatureName: "Kansas Legislature", capitolCity: "State Capitol, Topeka", theme: { primary: '#1e3a8a', secondary: '#facc15' } },

    // Southwest
    TX: { code: 'TX', name: 'Texas', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🤠', externalLink: 'https://capitol.texas.gov/', legislatureName: "Texas Legislature", capitolCity: "State Capitol, Austin", theme: { primary: '#bf0a30', secondary: '#002868' } }, // Lone Star Red/Blue
    OK: { code: 'OK', name: 'Oklahoma', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌪️', externalLink: 'https://www.oklegislature.gov/', legislatureName: "Oklahoma Legislature", capitolCity: "State Capitol, Oklahoma City", theme: { primary: '#0ea5e9', secondary: '#78350f' } }, // Sky Blue / Clay
    NM: { code: 'NM', name: 'New Mexico', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌶️', externalLink: 'https://www.nmlegis.gov/', legislatureName: "New Mexico Legislature", capitolCity: "State Capitol, Santa Fe", theme: { primary: '#facc15', secondary: '#ef4444' } }, // Zia Sun Yellow/Red
    AZ: { code: 'AZ', name: 'Arizona', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌵', externalLink: 'https://www.azleg.gov/', legislatureName: "Arizona State Legislature", capitolCity: "State Capitol, Phoenix", theme: { primary: '#b91c1c', secondary: '#ea580c' } }, // Sunset Red/Orange

    // West
    CO: { code: 'CO', name: 'Colorado', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🏔️', externalLink: 'https://leg.colorado.gov/', legislatureName: "Colorado General Assembly", capitolCity: "State Capitol, Denver", theme: { primary: '#1e3a8a', secondary: '#be123c' } },
    WY: { code: 'WY', name: 'Wyoming', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🦬', externalLink: 'https://wyoleg.gov/', legislatureName: "Wyoming Legislature", capitolCity: "State Capitol, Cheyenne", theme: { primary: '#1e3a8a', secondary: '#ffffff' } }, // Navy/White (Bison)
    MT: { code: 'MT', name: 'Montana', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '⛏️', externalLink: 'https://leg.mt.gov/', legislatureName: "Montana Legislature", capitolCity: "State Capitol, Helena", theme: { primary: '#1e3a8a', secondary: '#ca8a04' } }, // Treasure State
    ID: { code: 'ID', name: 'Idaho', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🥔', externalLink: 'https://legislature.idaho.gov/', legislatureName: "Idaho Legislature", capitolCity: "State Capitol, Boise", theme: { primary: '#1e3a8a', secondary: '#166534' } },
    UT: { code: 'UT', name: 'Utah', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🐝', externalLink: 'https://le.utah.gov/', legislatureName: "Utah State Legislature", capitolCity: "State Capitol, Salt Lake City", theme: { primary: '#1e3a8a', secondary: '#ea580c' } },
    NV: { code: 'NV', name: 'Nevada', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🎰', externalLink: 'https://www.leg.state.nv.us/', legislatureName: "Nevada Legislature", capitolCity: "Legislative Building, Carson City", theme: { primary: '#172554', secondary: '#475569' } },
    CA: { code: 'CA', name: 'California', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🐻', externalLink: 'https://www.legislature.ca.gov/', legislatureName: "California State Legislature", capitolCity: "State Capitol, Sacramento", theme: { primary: '#78350f', secondary: '#b45309' } }, // Bear Brown/Gold
    OR: { code: 'OR', name: 'Oregon', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🦫', externalLink: 'https://www.oregonlegislature.gov/', legislatureName: "Oregon Legislative Assembly", capitolCity: "State Capitol, Salem", theme: { primary: '#1e3a8a', secondary: '#fbbf24' } }, // Navy/Gold (Beaver)
    WA: { code: 'WA', name: 'Washington', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🍎', externalLink: 'https://leg.wa.gov/', legislatureName: "Washington State Legislature", capitolCity: "Legislative Building, Olympia", theme: { primary: '#064e3b', secondary: '#3f6212' } }, // Evergreen
    AK: { code: 'AK', name: 'Alaska', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🦅', externalLink: 'https://w3.akleg.gov/', legislatureName: "Alaska State Legislature", capitolCity: "State Capitol, Juneau", theme: { primary: '#172554', secondary: '#fbbf24' } }, // Dark Blue/Gold stars
    HI: {
        code: 'HI',
        name: 'Hawaii',
        hasWizard: true,
        wizardType: 'direct_contact',
        flagEmoji: '🌺',
        externalLink: 'https://www.capitol.hawaii.gov/',
        legislatureName: "Hawaii State Legislature",
        capitolCity: "State Capitol, Honolulu",
        theme: { primary: '#b91c1c', secondary: '#1e3a8a' } // Royal Standard (Red/Blue/White)
    },
};

export const isValidState = (code: string) => !!SUPPORTED_STATES[code.toUpperCase()];

export const getStateConfig = (code: string) => SUPPORTED_STATES[code.toUpperCase()] || SUPPORTED_STATES['NH'];
