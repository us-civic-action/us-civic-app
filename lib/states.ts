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
}

export const SUPPORTED_STATES: Record<string, StateConfig> = {
    // New England
    NH: { code: 'NH', name: 'New Hampshire', hasWizard: true, wizardType: 'pdf_generator', submissionMethod: 'centralized', flagEmoji: '🌲', findLegislatorLink: 'https://gencourt.state.nh.us/house/members/wheredoilive.aspx', step3Instructions: "Submit testimony via the General Court portal." },
    MA: { code: 'MA', name: 'Massachusetts', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🐋', externalLink: 'https://malegislature.gov/' },
    ME: { code: 'ME', name: 'Maine', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🦞', externalLink: 'https://legislature.maine.gov/' },
    VT: { code: 'VT', name: 'Vermont', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🍁', externalLink: 'https://legislature.vermont.gov/' },
    RI: { code: 'RI', name: 'Rhode Island', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '⚓', externalLink: 'https://www.rilegislature.gov/' },
    CT: { code: 'CT', name: 'Connecticut', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🍇', externalLink: 'https://www.cga.ct.gov/' },

    // Mid-Atlantic
    NY: { code: 'NY', name: 'New York', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🗽', externalLink: 'https://www.nysenate.gov/' },
    NJ: { code: 'NJ', name: 'New Jersey', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🍅', externalLink: 'https://www.njleg.state.nj.us/' },
    PA: { code: 'PA', name: 'Pennsylvania', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🔔', externalLink: 'https://www.legis.state.pa.us/' },
    DE: { code: 'DE', name: 'Delaware', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🐔', externalLink: 'https://legis.delaware.gov/' },
    MD: { code: 'MD', name: 'Maryland', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🦀', externalLink: 'https://mgaleg.maryland.gov/' },

    // South
    VA: { code: 'VA', name: 'Virginia', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '👑', externalLink: 'https://virginiageneralassembly.gov/' },
    WV: { code: 'WV', name: 'West Virginia', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '⛰️', externalLink: 'https://www.wvlegislature.gov/' },
    NC: { code: 'NC', name: 'North Carolina', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '✈️', externalLink: 'https://www.ncleg.gov/' },
    SC: { code: 'SC', name: 'South Carolina', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌴', externalLink: 'https://www.scstatehouse.gov/' },
    GA: { code: 'GA', name: 'Georgia', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🍑', externalLink: 'https://www.legis.ga.gov/' },
    FL: { code: 'FL', name: 'Florida', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🍊', externalLink: 'https://www.leg.state.fl.us/' },
    AL: { code: 'AL', name: 'Alabama', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🚀', externalLink: 'https://alison.legislature.state.al.us/' },
    MS: { code: 'MS', name: 'Mississippi', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🎸', externalLink: 'https://legislature.ms.gov/' },
    TN: { code: 'TN', name: 'Tennessee', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🎶', externalLink: 'https://www.capitol.tn.gov/' },
    KY: { code: 'KY', name: 'Kentucky', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🐎', externalLink: 'https://legislature.ky.gov/' },
    AR: { code: 'AR', name: 'Arkansas', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '💎', externalLink: 'https://www.arkleg.state.ar.us/' },
    LA: { code: 'LA', name: 'Louisiana', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '⚜️', externalLink: 'https://www.legis.la.gov/' },

    // Midwest
    OH: { code: 'OH', name: 'Ohio', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌰', externalLink: 'https://www.legislature.ohio.gov/' },
    MI: { code: 'MI', name: 'Michigan', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🧤', externalLink: 'https://www.legislature.mi.gov/' },
    IN: { code: 'IN', name: 'Indiana', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🏎️', externalLink: 'https://iga.in.gov/' },
    IL: { code: 'IL', name: 'Illinois', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌽', externalLink: 'https://www.ilga.gov/' },
    WI: { code: 'WI', name: 'Wisconsin', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🧀', externalLink: 'https://legis.wisconsin.gov/' },
    MN: { code: 'MN', name: 'Minnesota', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🛶', externalLink: 'https://www.house.leg.state.mn.us/' },
    IA: { code: 'IA', name: 'Iowa', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🚜', externalLink: 'https://www.legis.iowa.gov/' },
    MO: { code: 'MO', name: 'Missouri', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🏛️', externalLink: 'https://www.senate.mo.gov/' },
    ND: { code: 'ND', name: 'North Dakota', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌻', externalLink: 'https://www.ndlegis.gov/' },
    SD: { code: 'SD', name: 'South Dakota', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🗿', externalLink: 'https://sdlegislature.gov/' },
    NE: { code: 'NE', name: 'Nebraska', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🥩', externalLink: 'https://nebraskalegislature.gov/' },
    KS: { code: 'KS', name: 'Kansas', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌻', externalLink: 'https://www.kslegislature.org/' },

    // Southwest
    TX: { code: 'TX', name: 'Texas', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🤠', externalLink: 'https://capitol.texas.gov/' },
    OK: { code: 'OK', name: 'Oklahoma', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌪️', externalLink: 'https://www.oklegislature.gov/' },
    NM: { code: 'NM', name: 'New Mexico', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌶️', externalLink: 'https://www.nmlegis.gov/' },
    AZ: { code: 'AZ', name: 'Arizona', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌵', externalLink: 'https://www.azleg.gov/' },

    // West
    CO: { code: 'CO', name: 'Colorado', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🏔️', externalLink: 'https://leg.colorado.gov/' },
    WY: { code: 'WY', name: 'Wyoming', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🤠', externalLink: 'https://wyoleg.gov/' },
    MT: { code: 'MT', name: 'Montana', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🐻', externalLink: 'https://leg.mt.gov/' },
    ID: { code: 'ID', name: 'Idaho', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🥔', externalLink: 'https://legislature.idaho.gov/' },
    UT: { code: 'UT', name: 'Utah', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🐝', externalLink: 'https://le.utah.gov/' },
    NV: { code: 'NV', name: 'Nevada', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🎰', externalLink: 'https://www.leg.state.nv.us/' },
    CA: { code: 'CA', name: 'California', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🐻', externalLink: 'https://www.legislature.ca.gov/' },
    OR: { code: 'OR', name: 'Oregon', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌲', externalLink: 'https://www.oregonlegislature.gov/' },
    WA: { code: 'WA', name: 'Washington', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🍎', externalLink: 'https://leg.wa.gov/' },
    AK: { code: 'AK', name: 'Alaska', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🏔️', externalLink: 'https://w3.akleg.gov/' },
    HI: { code: 'HI', name: 'Hawaii', hasWizard: true, wizardType: 'direct_contact', flagEmoji: '🌺', externalLink: 'https://www.capitol.hawaii.gov/' },
};

export const isValidState = (code: string) => !!SUPPORTED_STATES[code.toUpperCase()];

export const getStateConfig = (code: string) => SUPPORTED_STATES[code.toUpperCase()] || SUPPORTED_STATES['NH'];
