(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/save-act/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCEPTABLE_DPOC",
    ()=>ACCEPTABLE_DPOC,
    "BRIDGING_DOCUMENTS",
    ()=>BRIDGING_DOCUMENTS,
    "QUESTIONS",
    ()=>QUESTIONS,
    "RESIDENCY_EXAMPLES",
    ()=>RESIDENCY_EXAMPLES,
    "SAVE_ACT_BILL_URL",
    ()=>SAVE_ACT_BILL_URL,
    "STATES",
    ()=>STATES
]);
const SAVE_ACT_BILL_URL = "https://www.congress.gov/bill/118th-congress/house-bill/8281/text";
const STATES = [
    {
        code: 'AL',
        name: 'Alabama',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict physical proof required.'
    },
    {
        code: 'AK',
        name: 'Alaska',
        strictDPOC: false,
        residencyDays: 30,
        notes: 'Affidavits allowed.'
    },
    {
        code: 'AZ',
        name: 'Arizona',
        strictDPOC: true,
        residencyDays: 29,
        notes: 'Pioneer of DPOC laws; strict enforcement.'
    },
    {
        code: 'AR',
        name: 'Arkansas',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Mandatory proof for new registrations.'
    },
    {
        code: 'CA',
        name: 'California',
        strictDPOC: false,
        residencyDays: 15,
        notes: 'Automatic verification via DMV.'
    },
    {
        code: 'CO',
        name: 'Colorado',
        strictDPOC: false,
        residencyDays: 22,
        notes: 'Streamlined mail-in system.'
    },
    {
        code: 'CT',
        name: 'Connecticut',
        strictDPOC: false,
        notes: 'Integrated DMV verification.',
        residencyDays: 0
    },
    {
        code: 'DE',
        name: 'Delaware',
        strictDPOC: false,
        residencyDays: 0,
        notes: 'Streamlined process.'
    },
    {
        code: 'DC',
        name: 'District of Columbia',
        strictDPOC: false,
        residencyDays: 30,
        notes: 'Affidavit and residency focused.'
    },
    {
        code: 'FL',
        name: 'Florida',
        strictDPOC: true,
        residencyDays: 29,
        notes: 'High strictness for new residents.'
    },
    {
        code: 'GA',
        name: 'Georgia',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict verification mandatory.'
    },
    {
        code: 'HI',
        name: 'Hawaii',
        strictDPOC: false,
        residencyDays: 30,
        notes: 'Streamlined system.'
    },
    {
        code: 'ID',
        name: 'Idaho',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Recent strict ID legislation.'
    },
    {
        code: 'IL',
        name: 'Illinois',
        strictDPOC: false,
        residencyDays: 30,
        notes: 'Automatic voter registration.'
    },
    {
        code: 'IN',
        name: 'Indiana',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict voter ID state.'
    },
    {
        code: 'IA',
        name: 'Iowa',
        strictDPOC: true,
        residencyDays: 0,
        notes: 'Strict compliance measures.'
    },
    {
        code: 'KS',
        name: 'Kansas',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Historical strict DPOC state.'
    },
    {
        code: 'KY',
        name: 'Kentucky',
        strictDPOC: true,
        residencyDays: 28,
        notes: 'Strict ID and residency verification.'
    },
    {
        code: 'LA',
        name: 'Louisiana',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Mandatory documentation.'
    },
    {
        code: 'ME',
        name: 'Maine',
        strictDPOC: false,
        residencyDays: 0,
        notes: 'Residency-focused verification.'
    },
    {
        code: 'MD',
        name: 'Maryland',
        strictDPOC: false,
        residencyDays: 21,
        notes: 'Streamlined DMV process.'
    },
    {
        code: 'MA',
        name: 'Massachusetts',
        strictDPOC: false,
        residencyDays: 20,
        notes: 'Streamlined process.'
    },
    {
        code: 'MI',
        name: 'Michigan',
        strictDPOC: false,
        residencyDays: 30,
        notes: 'DMV integration.'
    },
    {
        code: 'MN',
        name: 'Minnesota',
        strictDPOC: false,
        residencyDays: 20,
        notes: 'Affidavit/Same-day verification.'
    },
    {
        code: 'MS',
        name: 'Mississippi',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict enforcement.'
    },
    {
        code: 'MO',
        name: 'Missouri',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict photo ID and DPOC rules.'
    },
    {
        code: 'MT',
        name: 'Montana',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict ID requirements.'
    },
    {
        code: 'NE',
        name: 'Nebraska',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'New strict ID laws.'
    },
    {
        code: 'NV',
        name: 'Nevada',
        strictDPOC: false,
        residencyDays: 30,
        notes: 'Streamlined mail-in verification.'
    },
    {
        code: 'NH',
        name: 'New Hampshire',
        strictDPOC: true,
        residencyDays: 0,
        notes: 'Strict residency and proof laws.'
    },
    {
        code: 'NJ',
        name: 'New Jersey',
        strictDPOC: false,
        residencyDays: 30,
        notes: 'Automatic registration.'
    },
    {
        code: 'NM',
        name: 'New Mexico',
        strictDPOC: false,
        residencyDays: 30,
        notes: 'Affidavit friendly.'
    },
    {
        code: 'NY',
        name: 'New York',
        strictDPOC: false,
        residencyDays: 30,
        notes: 'Streamlined DMV system.'
    },
    {
        code: 'NC',
        name: 'North Carolina',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict ID enforcement.'
    },
    {
        code: 'ND',
        name: 'North Dakota',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict ID/residency rules.'
    },
    {
        code: 'OH',
        name: 'Ohio',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict compliance.'
    },
    {
        code: 'OK',
        name: 'Oklahoma',
        strictDPOC: true,
        residencyDays: 25,
        notes: 'High strictness.'
    },
    {
        code: 'OR',
        name: 'Oregon',
        strictDPOC: false,
        residencyDays: 20,
        notes: 'Automatic DMV registration.'
    },
    {
        code: 'PA',
        name: 'Pennsylvania',
        strictDPOC: false,
        residencyDays: 30,
        notes: 'Hybrid verification system.'
    },
    {
        code: 'RI',
        name: 'Rhode Island',
        strictDPOC: false,
        residencyDays: 30,
        notes: 'Streamlined system.'
    },
    {
        code: 'SC',
        name: 'South Carolina',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict ID enforcement.'
    },
    {
        code: 'SD',
        name: 'South Dakota',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict compliance.'
    },
    {
        code: 'TN',
        name: 'Tennessee',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Mandatory proof requirements.'
    },
    {
        code: 'TX',
        name: 'Texas',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Very strict enforcement.'
    },
    {
        code: 'UT',
        name: 'Utah',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict verification state.'
    },
    {
        code: 'VT',
        name: 'Vermont',
        strictDPOC: false,
        residencyDays: 0,
        notes: 'Streamlined registration.'
    },
    {
        code: 'VA',
        name: 'Virginia',
        strictDPOC: false,
        residencyDays: 0,
        notes: 'Hybrid system.'
    },
    {
        code: 'WA',
        name: 'Washington',
        strictDPOC: false,
        residencyDays: 30,
        notes: 'Automatic registration.'
    },
    {
        code: 'WV',
        name: 'West Virginia',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict ID laws.'
    },
    {
        code: 'WI',
        name: 'Wisconsin',
        strictDPOC: true,
        residencyDays: 28,
        notes: 'Strict residency verification.'
    },
    {
        code: 'WY',
        name: 'Wyoming',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'Strict ID and proof laws.'
    },
    {
        code: 'OTHER',
        name: 'Other Territory',
        strictDPOC: true,
        residencyDays: 30,
        notes: 'General SAVE Act baseline.'
    }
];
const ACCEPTABLE_DPOC = [
    "U.S. Passport (valid or expired)",
    "Certified U.S. Birth Certificate",
    "Consular Report of Birth Abroad",
    "Naturalization Certificate",
    "Certificate of Citizenship",
    "Bureau of Indian Affairs Card / Tribal Treaty Card"
];
const BRIDGING_DOCUMENTS = [
    "Certified Marriage Certificate(s)",
    "Final Divorce Decree(s) (showing name restoration)",
    "Certified Court Order for Legal Name Change",
    "Adoption Decree"
];
const RESIDENCY_EXAMPLES = [
    "Current Utility Bill (Electric, Water, Gas, etc.)",
    "Bank or Credit Union Statement",
    "Residential Lease or Mortgage Statement",
    "Pay Stubs issued by employer (dated within 60 days)",
    "Property Tax Bill or Official Receipt",
    "Voter Registration Card from your previous jurisdiction",
    "Homeowner’s or Renter’s Insurance Policy/Statement",
    "Government Check or Official Correspondence",
    "W-2 or 1099 Tax Form (Current Tax Year)",
    "Valid Motor Vehicle Registration or Title",
    "Transcript or Enrollment Verification from a School/University",
    "Valid State-issued ID with your current address"
];
const QUESTIONS = [
    {
        id: 'citizenship',
        category: 'citizenship',
        text: 'Are you a citizen of the United States?',
        plainEnglish: 'The 2026 SAVE Act strictly prohibits non-citizens from registering or voting in federal elections. Only those born in the U.S. or naturalized are eligible.',
        options: [
            {
                id: 'c1',
                label: 'Yes',
                value: true
            },
            {
                id: 'c2',
                label: 'No',
                value: false
            }
        ]
    },
    {
        id: 'age',
        category: 'age',
        text: 'Will you be 18 or older by Election Day 2026?',
        plainEnglish: 'You must reach adulthood (18 years old) by the date of the election to be eligible to vote. You can often pre-register at 16 or 17 depending on the state.',
        options: [
            {
                id: 'a1',
                label: 'Yes',
                value: true
            },
            {
                id: 'a2',
                label: 'No',
                value: false
            }
        ]
    },
    {
        id: 'residency',
        category: 'residency',
        text: 'Do you live at your current address as your permanent home?',
        plainEnglish: 'You must have a "fixed habitation" in the state where you intend to vote. Most states require at least 30 days of residency prior to the election.',
        options: [
            {
                id: 'r1',
                label: 'Yes',
                value: true
            },
            {
                id: 'r2',
                label: 'No',
                value: false
            }
        ]
    },
    {
        id: 'residencyProof',
        category: 'residency',
        text: 'Do you have a physical document proving your address?',
        plainEnglish: 'To register, you usually need a paper or digital document that shows both your name and your current residency address.',
        options: [
            {
                id: 'rp1',
                label: 'Yes, I have proof',
                value: true
            },
            {
                id: 'rp2',
                label: 'No, I need to get this',
                value: false
            }
        ]
    },
    {
        id: 'dpoc',
        category: 'dpoc',
        text: 'Do you have Documentary Proof of Citizenship (DPOC)?',
        plainEnglish: 'This is the core of the SAVE Act. You must show an official document (like a birth certificate) that proves you were a citizen at birth or naturalized.',
        options: [
            {
                id: 'd1',
                label: 'Yes, I have it ready',
                value: 'ready'
            },
            {
                id: 'd2',
                label: 'I have it, but not with me',
                value: 'available'
            },
            {
                id: 'd3',
                label: 'No, I don\'t have these documents',
                value: 'none'
            }
        ]
    },
    {
        id: 'nameMatch',
        category: 'name_match',
        text: 'Does your ID match your citizenship document exactly?',
        plainEnglish: 'If your current ID says a different name than your birth certificate (due to marriage, divorce, etc.), you need legal "bridging" documents to link them.',
        options: [
            {
                id: 'n1',
                label: 'Yes, they match',
                value: true
            },
            {
                id: 'n2',
                label: 'No, they are different',
                value: false
            }
        ]
    },
    {
        id: 'residencyDuration',
        category: 'residency',
        text: 'Have you lived in {STATE_NAME} for at least {DAYS} days?',
        plainEnglish: 'Most states require you to establish residency for a specific period (usually 30 days) before you can vote in their elections.',
        options: [
            {
                id: 'rd1',
                label: 'Yes',
                value: true
            },
            {
                id: 'rd2',
                label: 'No',
                value: false
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/ui/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$Header$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/Header.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/Footer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$AccessibilityMenu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/AccessibilityMenu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$AccessibilityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/AccessibilityProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ThemeToggle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/ThemeToggle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$ThemeProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/ThemeProvider.js [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/save-act/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gavel.js [app-client] (ecmascript) <export default as Gavel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fingerprint-pattern.js [app-client] (ecmascript) <export default as Fingerprint>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/save-act/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/ui/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$AccessibilityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/ui/dist/components/AccessibilityProvider.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// We need to bring the logo over. For now, we'll assume it's in public/civic_logo.png
// or use the one from the UI package if available. 
// The UI package has civicBadge, but the app uses civic_logo.png which might be different.
// Let's use a placeholder string or import if we copy the asset.
// For this migration, I'll assume we copy the asset to public/assets/civic_logo.png
const civicLogo = "/hero-logo.png";
function Home() {
    _s();
    // Use shared accessibility context instead of local state for these
    const { isDarkMode, isHighContrast, isLargeText } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$AccessibilityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccessibility"])();
    // Local state for the app logic
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        currentStep: -1,
        answers: {},
        selectedState: null,
        view: 'checker',
        accessibility: {
            isDarkMode,
            isHighContrast,
            isLargeText
        } // Sync initial
    });
    const [stateSearch, setStateSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Sync shared accessibility changes to local state if needed, or just use hooks directly.
    // The original app passed `state.accessibility` around.
    // To minimize refactoring, we'll update local state when shared context changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            setState({
                "Home.useEffect": (prev)=>({
                        ...prev,
                        accessibility: {
                            isDarkMode,
                            isHighContrast,
                            isLargeText
                        }
                    })
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], [
        isDarkMode,
        isHighContrast,
        isLargeText
    ]);
    const selectedStateData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[selectedStateData]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATES"].find({
                "Home.useMemo[selectedStateData]": (s)=>s.code === state.selectedState
            }["Home.useMemo[selectedStateData]"])
    }["Home.useMemo[selectedStateData]"], [
        state.selectedState
    ]);
    const filteredStates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[filteredStates]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATES"].filter({
                "Home.useMemo[filteredStates]": (s)=>s.name.toLowerCase().includes(stateSearch.toLowerCase()) || s.code.toLowerCase().includes(stateSearch.toLowerCase())
            }["Home.useMemo[filteredStates]"])
    }["Home.useMemo[filteredStates]"], [
        stateSearch
    ]);
    const activeQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[activeQuestions]": ()=>{
            const baseQs = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTIONS"].filter({
                "Home.useMemo[activeQuestions].baseQs": (q)=>q.id !== 'residencyDuration'
            }["Home.useMemo[activeQuestions].baseQs"]);
            const finalQs = [
                ...baseQs
            ];
            if (selectedStateData && selectedStateData.residencyDays > 0) {
                const residencyIndex = finalQs.findIndex({
                    "Home.useMemo[activeQuestions].residencyIndex": (q)=>q.id === 'residency'
                }["Home.useMemo[activeQuestions].residencyIndex"]);
                const templateQ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QUESTIONS"].find({
                    "Home.useMemo[activeQuestions].templateQ": (q)=>q.id === 'residencyDuration'
                }["Home.useMemo[activeQuestions].templateQ"]);
                if (templateQ && residencyIndex !== -1) {
                    const customQ = {
                        ...templateQ,
                        text: templateQ.text.replace('{STATE_NAME}', selectedStateData.name).replace('{DAYS}', selectedStateData.residencyDays.toString())
                    };
                    finalQs.splice(residencyIndex + 1, 0, customQ);
                }
            }
            return finalQs;
        }
    }["Home.useMemo[activeQuestions]"], [
        selectedStateData
    ]);
    const handleStateSelect = (code)=>{
        setState((prev)=>({
                ...prev,
                selectedState: code,
                currentStep: 0
            }));
    };
    const handleAnswer = (questionId, value)=>{
        if (questionId === 'citizenship' && value === false || questionId === 'age' && value === false) {
            setState((prev)=>({
                    ...prev,
                    answers: {
                        ...prev.answers,
                        [questionId]: value
                    },
                    currentStep: activeQuestions.length
                }));
            return;
        }
        setState((prev)=>({
                ...prev,
                answers: {
                    ...prev.answers,
                    [questionId]: value
                },
                currentStep: prev.currentStep + 1
            }));
    };
    const reset = ()=>{
        setState((prev)=>({
                ...prev,
                currentStep: -1,
                answers: {},
                selectedState: null,
                view: 'checker'
            }));
        setStateSearch('');
    };
    const goBack = ()=>{
        setState((prev)=>({
                ...prev,
                currentStep: prev.currentStep - 1
            }));
    };
    const setView = (view)=>{
        setState((prev)=>({
                ...prev,
                view
            }));
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    // Helper to get text size based on shared settings
    const getTextSize = (normal, large)=>isLargeText ? large : normal;
    const calculateResults = ()=>{
        const { answers } = state;
        const isCitizen = answers['citizenship'] === true;
        const isOfAge = answers['age'] === true;
        const isResident = answers['residency'] === true;
        const hasResidencyProof = answers['residencyProof'] === true;
        const dpocStatus = answers['dpoc'];
        const namesMatch = answers['nameMatch'] === true;
        const checklist = [];
        const actionItems = [];
        if (!isCitizen) {
            return {
                status: 'Ineligible',
                checklist: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `font-bold text-red-600 dark:text-red-400 ${getTextSize('text-base', 'text-xl')}`,
                        children: "Federal Law (2026 SAVE Act) restricts voter registration to U.S. Citizens only. Non-citizens are not eligible to register."
                    }, "cit", false, {
                        fileName: "[project]/apps/save-act/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 21
                    }, this)
                ],
                actionItems: []
            };
        }
        if (!isOfAge) {
            return {
                status: 'Ineligible',
                checklist: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: getTextSize('text-base', 'text-xl'),
                        children: [
                            "You must be at least 18 years old on or before Election Day. You may be able to pre-register depending on local ",
                            selectedStateData?.name,
                            " laws."
                        ]
                    }, "age", true, {
                        fileName: "[project]/apps/save-act/app/page.tsx",
                        lineNumber: 144,
                        columnNumber: 21
                    }, this)
                ],
                actionItems: []
            };
        }
        // ... [Logic kept same as original, just adapted syntax where needed] ...
        if (!isResident || !hasResidencyProof) {
            const item = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col gap-3 p-5 rounded-[2rem] border-2 shadow-sm ${isHighContrast ? 'bg-white border-black dark:bg-black dark:border-white' : 'bg-blue-50/50 border-blue-100 dark:bg-blue-900/10 dark:border-blue-900/30'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 text-blue-900 dark:text-blue-300 font-black uppercase tracking-[0.15em] ${getTextSize('text-[10px]', 'text-sm')}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/save-act/app/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            "Establish Residency Proof"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/save-act/app/page.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-blue-900 dark:text-blue-100 font-bold leading-relaxed ${getTextSize('text-sm', 'text-lg')}`,
                        children: [
                            "Registering in ",
                            selectedStateData?.name,
                            " requires documentation linking your identity to your local address."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/save-act/app/page.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 rounded-xl border ${isHighContrast ? 'border-black dark:border-white' : 'bg-white/80 dark:bg-slate-800/80 border-blue-200/50'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-1.5",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESIDENCY_EXAMPLES"].slice(0, 5).map((ex, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: `text-blue-700 dark:text-blue-400 flex items-center gap-2 font-medium ${getTextSize('text-xs', 'text-base')}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-3 h-3 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this),
                                        ex
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/save-act/app/page.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                ]
            }, "res", true, {
                fileName: "[project]/apps/save-act/app/page.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this);
            checklist.push(item);
            actionItems.push({
                title: 'Establish Residency',
                description: 'You need a utility bill, bank statement, or government mailer with your name and address.',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/apps/save-act/app/page.tsx",
                    lineNumber: 177,
                    columnNumber: 15
                }, this)
            });
        }
        let residencyDurationMet = false;
        if (selectedStateData && selectedStateData.residencyDays > 0) {
            const hasDuration = answers['residencyDuration'];
            if (hasDuration === false) {
                checklist.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col gap-3 p-5 rounded-[2rem] border-2 shadow-sm ${isHighContrast ? 'bg-white border-black dark:bg-black dark:border-white' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center gap-2 text-slate-900 dark:text-slate-200 font-black uppercase tracking-[0.15em] ${getTextSize('text-[10px]', 'text-sm')}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-4 h-4 text-blue-600 dark:text-blue-400"
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this),
                                "Residency Duration Requirement"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 187,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-slate-900 dark:text-slate-100 font-bold block ${getTextSize('text-sm', 'text-lg')}`,
                                children: [
                                    "You must wait until you have lived in ",
                                    selectedStateData.name,
                                    " for at least ",
                                    selectedStateData.residencyDays,
                                    " days before registering."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/save-act/app/page.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, this)
                    ]
                }, "dur", true, {
                    fileName: "[project]/apps/save-act/app/page.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, this));
                actionItems.push({
                    title: 'Wait for Residency Period',
                    description: `You must live in ${selectedStateData.name} for ${selectedStateData.residencyDays} days.`,
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/apps/save-act/app/page.tsx",
                        lineNumber: 201,
                        columnNumber: 17
                    }, this)
                });
            } else if (hasDuration === true) {
                residencyDurationMet = true;
            }
        }
        if (namesMatch === false) {
            const item = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col gap-4 p-5 rounded-[2rem] border-2 shadow-sm ${isHighContrast ? 'bg-white border-black dark:bg-black dark:border-white' : 'bg-amber-50 border-amber-100 dark:bg-amber-900/10 dark:border-amber-900/30'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 text-amber-900 dark:text-amber-300 font-black uppercase tracking-[0.15em] ${getTextSize('text-[10px]', 'text-sm')}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/apps/save-act/app/page.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            "Critical: Identity Linkage Required"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/save-act/app/page.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `text-amber-900 dark:text-amber-100 leading-relaxed font-bold block ${getTextSize('text-sm', 'text-lg')}`,
                                children: 'Since your current name (on ID) differs from your citizenship proof, a "paper trail" is mandatory.'
                            }, void 0, false, {
                                fileName: "[project]/apps/save-act/app/page.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 rounded-xl border ${isHighContrast ? 'border-black dark:border-white' : 'bg-white/60 dark:bg-slate-800/60 border-amber-200/50'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BRIDGING_DOCUMENTS"].map((doc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: `text-amber-700 dark:text-amber-400 flex items-start gap-2 ${getTextSize('text-xs', 'text-base')}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 bg-amber-400 rounded-full mt-1 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 223,
                                                    columnNumber: 21
                                                }, this),
                                                doc
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/save-act/app/page.tsx",
                                lineNumber: 219,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/save-act/app/page.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this)
                ]
            }, "name", true, {
                fileName: "[project]/apps/save-act/app/page.tsx",
                lineNumber: 210,
                columnNumber: 9
            }, this);
            checklist.push(item);
            actionItems.push({
                title: 'Bridge Name Change',
                description: 'Provide a Marriage Certificate, Divorce Decree, or Court Order linking your names.',
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fingerprint$2d$pattern$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fingerprint$3e$__["Fingerprint"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/apps/save-act/app/page.tsx",
                    lineNumber: 236,
                    columnNumber: 15
                }, this)
            });
        }
        if (dpocStatus === 'none' || dpocStatus === 'available') {
            const isStrict = selectedStateData?.strictDPOC;
            if (isStrict) {
                const item = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col gap-5 p-6 rounded-[2.5rem] border-2 shadow-sm ${isHighContrast ? 'bg-white border-black dark:bg-black dark:border-white' : 'bg-red-50/50 border-red-100 dark:bg-red-900/10 dark:border-red-900/30'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center gap-2 text-red-700 dark:text-red-400 font-black uppercase tracking-widest ${getTextSize('text-[10px]', 'text-sm')}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this),
                                "Strict Enforcement: DPOC Required"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-red-900 dark:text-red-100 font-bold leading-relaxed block ${getTextSize('text-sm', 'text-lg')}`,
                                    children: [
                                        selectedStateData?.name,
                                        " mandates physical proof of citizenship at the time of registration."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 251,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-5 rounded-2xl shadow-sm border ${isHighContrast ? 'bg-white border-black dark:bg-black dark:border-white' : 'bg-white dark:bg-slate-800 border-red-100 dark:border-red-900/40'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCEPTABLE_DPOC"].slice(0, 4).map((doc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: `font-bold text-slate-800 dark:text-slate-200 flex items-start gap-3 ${getTextSize('text-xs', 'text-base')}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 23
                                                    }, this),
                                                    doc
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                lineNumber: 257,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                        lineNumber: 255,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 250,
                            columnNumber: 13
                        }, this)
                    ]
                }, "dpoc", true, {
                    fileName: "[project]/apps/save-act/app/page.tsx",
                    lineNumber: 245,
                    columnNumber: 11
                }, this);
                checklist.push(item);
                actionItems.push({
                    title: 'Provide Citizenship Proof',
                    description: 'You MUST have a Passport, Birth Certificate, or Naturalization Certificate.',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/apps/save-act/app/page.tsx",
                        lineNumber: 271,
                        columnNumber: 17
                    }, this)
                });
            } else {
                checklist.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col gap-3 p-5 rounded-[2rem] border-2 shadow-sm ${isHighContrast ? 'bg-white border-black dark:bg-black dark:border-white' : 'bg-emerald-50/30 border-emerald-100 dark:bg-emerald-900/10 dark:border-emerald-900/30'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `font-black text-emerald-800 dark:text-emerald-400 uppercase tracking-widest ${getTextSize('text-xs', 'text-base')}`,
                            children: "Streamlined Verification"
                        }, void 0, false, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `text-emerald-900 dark:text-emerald-200 leading-relaxed ${getTextSize('text-xs', 'text-base')}`,
                            children: [
                                selectedStateData?.name,
                                " uses automated DMV checks. Re-submission may not be required if previously verified."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 277,
                            columnNumber: 13
                        }, this)
                    ]
                }, "dpoc_stream", true, {
                    fileName: "[project]/apps/save-act/app/page.tsx",
                    lineNumber: 275,
                    columnNumber: 11
                }, this));
            }
        }
        if (checklist.length === 0) {
            const successItems = [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col gap-1 p-5 rounded-[2rem] border-2 shadow-sm ${isHighContrast ? 'bg-white border-black dark:bg-black dark:border-white' : 'bg-emerald-50/50 border-emerald-100 dark:bg-emerald-900/10 dark:border-emerald-900/30'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-black uppercase tracking-[0.15em] ${getTextSize('text-[10px]', 'text-sm')}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                "Confirmed: Identity Verified"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `font-bold text-emerald-900 dark:text-emerald-200 block mt-1 ${getTextSize('text-sm', 'text-lg')}`,
                            children: [
                                "You meet the standard identity documentation rules for ",
                                selectedStateData?.name,
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this)
                    ]
                }, "base", true, {
                    fileName: "[project]/apps/save-act/app/page.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this)
            ];
            if (residencyDurationMet) {
                successItems.unshift(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col gap-1 p-5 mb-4 rounded-[2rem] border-2 shadow-sm ${isHighContrast ? 'bg-white border-black dark:bg-black dark:border-white' : 'bg-emerald-50/50 border-emerald-100 dark:bg-emerald-900/10 dark:border-emerald-900/30'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-black uppercase tracking-[0.15em] ${getTextSize('text-[10px]', 'text-sm')}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this),
                                "Confirmed: Residency Duration"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-emerald-900 dark:text-emerald-200 font-bold block mt-1 ${getTextSize('text-sm', 'text-lg')}`,
                            children: [
                                "You have lived in ",
                                selectedStateData?.name,
                                " for at least ",
                                selectedStateData?.residencyDays,
                                " days."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this)
                    ]
                }, "duration", true, {
                    fileName: "[project]/apps/save-act/app/page.tsx",
                    lineNumber: 300,
                    columnNumber: 11
                }, this));
            } else {
                successItems.unshift(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex flex-col gap-1 p-5 mb-4 rounded-[2rem] border-2 shadow-sm ${isHighContrast ? 'bg-white border-black dark:bg-black dark:border-white' : 'bg-emerald-50/50 border-emerald-100 dark:bg-emerald-900/10 dark:border-emerald-900/30'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-black uppercase tracking-[0.15em] ${getTextSize('text-[10px]', 'text-sm')}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 15
                                }, this),
                                "Confirmed: Residency Established"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-emerald-900 dark:text-emerald-200 font-bold block mt-1 ${getTextSize('text-sm', 'text-lg')}`,
                            children: [
                                "You have a fixed habitation in ",
                                selectedStateData?.name,
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 317,
                            columnNumber: 13
                        }, this)
                    ]
                }, "residency_general", true, {
                    fileName: "[project]/apps/save-act/app/page.tsx",
                    lineNumber: 312,
                    columnNumber: 11
                }, this));
            }
            return {
                status: 'Likely Eligible',
                checklist: successItems,
                actionItems: []
            };
        }
        return {
            status: 'Action Required',
            checklist,
            actionItems
        };
    };
    const renderProgress = ()=>{
        if (state.currentStep < 0 || state.currentStep >= activeQuestions.length) return null;
        const progress = (state.currentStep + 1) / activeQuestions.length * 100;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `w-full h-2 mb-8 rounded-full overflow-hidden shadow-inner ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-900 dark:bg-blue-500 h-full transition-all duration-700 ease-out",
                style: {
                    width: `${progress}%`
                }
            }, void 0, false, {
                fileName: "[project]/apps/save-act/app/page.tsx",
                lineNumber: 339,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/save-act/app/page.tsx",
            lineNumber: 338,
            columnNumber: 7
        }, this);
    };
    const renderView = ()=>{
        switch(state.view){
            case 'privacy':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 md:p-16 animate-in fade-in slide-in-from-bottom-4 duration-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-900 dark:bg-blue-600 p-3 rounded-2xl shadow-xl text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                        lineNumber: 351,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `font-black tracking-tighter uppercase ${getTextSize('text-3xl', 'text-4xl')}`,
                                    style: {
                                        color: isDarkMode ? '#ffffff' : '#000000'
                                    },
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 353,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 349,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose dark:prose-invert prose-slate max-w-none space-y-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-6 md:p-8 rounded-[2.5rem] border shadow-inner ${isHighContrast ? 'bg-white dark:bg-black border-black dark:border-white' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-700'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-black text-black dark:text-white uppercase tracking-widest mb-4",
                                        children: "No Data Collection"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                        lineNumber: 362,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `leading-relaxed ${getTextSize('text-sm', 'text-lg')}`,
                                        style: {
                                            color: isDarkMode ? '#e2e8f0' : '#0f172a'
                                        },
                                        children: [
                                            "We believe civic tools should be private by design. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "This application does not collect, store, or transmit any information you enter."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 71
                                            }, this),
                                            " All eligibility calculations are performed locally in your browser."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/save-act/app/page.tsx",
                                lineNumber: 361,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 360,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setView('checker'),
                            className: `mt-12 flex items-center gap-3 bg-slate-900 dark:bg-blue-600 text-white font-black uppercase tracking-[0.2em] px-8 py-5 rounded-[2rem] hover:bg-slate-800 transition-all shadow-xl active:scale-95 ${getTextSize('text-[10px]', 'text-sm')}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 15
                                }, this),
                                " Return to Checker"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 371,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/save-act/app/page.tsx",
                    lineNumber: 348,
                    columnNumber: 11
                }, this);
            case 'statutes':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 md:p-16 animate-in fade-in slide-in-from-bottom-4 duration-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-900 dark:bg-blue-600 p-3 rounded-2xl shadow-xl text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gavel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gavel$3e$__["Gavel"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                        lineNumber: 382,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 381,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `font-black tracking-tighter uppercase ${getTextSize('text-3xl', 'text-4xl')}`,
                                    children: "Transparency & Legal"
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 380,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: getTextSize('text-sm', 'text-lg'),
                                    children: "The logic within this tool is derived from H.R.8281 - Safeguard American Voter Eligibility Act (SAVE Act)."
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAVE_ACT_BILL_URL"],
                                    target: "_blank",
                                    className: `inline-flex items-center gap-2 text-blue-600 font-bold uppercase ${getTextSize('text-xs', 'text-sm')}`,
                                    children: [
                                        "View Bill ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 185
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 388,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 386,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setView('checker'),
                            className: `mt-12 flex items-center gap-3 bg-slate-900 dark:bg-blue-600 text-white font-black uppercase tracking-[0.2em] px-8 py-5 rounded-[2rem] hover:bg-slate-800 transition-all shadow-xl active:scale-95 ${getTextSize('text-[10px]', 'text-sm')}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 391,
                                    columnNumber: 15
                                }, this),
                                " Return to Checker"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 390,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/save-act/app/page.tsx",
                    lineNumber: 378,
                    columnNumber: 11
                }, this);
            case 'contact':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 md:p-16 animate-in fade-in slide-in-from-bottom-4 duration-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: `font-black uppercase mb-8 ${getTextSize('text-3xl', 'text-4xl')}`,
                            children: "Get Support"
                        }, void 0, false, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 398,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://vote.gov",
                            target: "_blank",
                            className: "block p-8 bg-slate-100 dark:bg-slate-800 rounded-3xl font-bold text-center hover:bg-slate-200 transition-colors",
                            children: "Visit Vote.gov"
                        }, void 0, false, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 399,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setView('checker'),
                            className: `mt-12 flex items-center gap-3 bg-slate-900 dark:bg-blue-600 text-white font-black uppercase tracking-[0.2em] px-8 py-5 rounded-[2rem] hover:bg-slate-800 transition-all shadow-xl active:scale-95 ${getTextSize('text-[10px]', 'text-sm')}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, this),
                                " Return to Checker"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 400,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/save-act/app/page.tsx",
                    lineNumber: 397,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        state.currentStep === -1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 md:p-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center justify-center text-center mb-12 animate-in fade-in zoom-in duration-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-32 h-32 md:w-40 md:h-40 mb-6 relative hover:scale-105 transition-transform duration-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: civicLogo,
                                                alt: "US Civic Action Logo",
                                                className: "w-full h-full object-contain drop-shadow-2xl"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                lineNumber: 414,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: `font-black uppercase tracking-tighter mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'} ${getTextSize('text-5xl md:text-7xl', 'text-6xl md:text-8xl')}`,
                                            style: {
                                                fontFamily: "'Inter', sans-serif"
                                            },
                                            children: "Save Act Verifier"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `font-medium max-w-lg mx-auto leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} ${getTextSize('text-sm md:text-base', 'text-base md:text-lg')}`,
                                            children: [
                                                "This tool summarizes documentation requirements proposed under the SAVE Act. ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                    className: "hidden md:block"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 427,
                                                    columnNumber: 98
                                                }, this),
                                                "It does not collect or store any personal data. It is an informational reference tool only."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 426,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-6 md:p-8 mb-12 rounded-[2.5rem] border shadow-xl ${isDarkMode ? 'bg-blue-900/30 border-blue-800' : 'bg-blue-50 border-blue-100'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-900 text-white'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                    className: "w-6 h-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                lineNumber: 434,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-sm font-black uppercase tracking-wide mb-2 ${isDarkMode ? 'text-white' : 'text-blue-900'}`,
                                                        children: "Why This Matters"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `leading-relaxed ${isDarkMode ? 'text-blue-100' : 'text-blue-900/80'} ${getTextSize('text-xs', 'text-base')}`,
                                                        children: [
                                                            "The ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "SAVE Act (H.R.8281)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                                lineNumber: 440,
                                                                columnNumber: 29
                                                            }, this),
                                                            " has passed the House and is currently in the Senate. This tool reflects the requirements as they are written in the proposed law, helping you verify if you have the correct documents ready for 2026."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                lineNumber: 437,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                        lineNumber: 433,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 432,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `mt-4 font-medium ${getTextSize('text-lg', 'text-xl')}`,
                                        style: {
                                            color: isDarkMode ? '#e2e8f0' : '#1e293b'
                                        },
                                        children: "Requirements vary by state. Select yours to begin checking your eligibility."
                                    }, void 0, false, {
                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "h-5 w-5 text-slate-300 group-focus-within:text-blue-600 transition-colors"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 457,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search for your state...",
                                                    value: stateSearch,
                                                    onChange: (e)=>setStateSearch(e.target.value),
                                                    className: `block w-full pl-11 pr-4 py-5 border-2 rounded-2xl focus:ring-4 transition-all outline-none font-bold placeholder-slate-500 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white focus:border-blue-500 focus:ring-blue-500/10' : 'bg-slate-50/50 border-slate-50 focus:bg-white focus:border-blue-900 focus:ring-blue-900/5 text-black'} ${getTextSize('text-base', 'text-xl')}`
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 460,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 456,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-3 max-h-[18rem] overflow-y-auto pr-2 custom-scrollbar p-1",
                                            children: filteredStates.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleStateSelect(s.code),
                                                    className: `flex items-center justify-between px-6 py-5 border-2 rounded-[1.2rem] hover:shadow-lg transition-all text-left group active:scale-[0.97] ${isDarkMode ? 'bg-slate-800 border-slate-700 hover:border-blue-500' : 'bg-white border-slate-50 hover:border-blue-900 hover:bg-blue-50/30'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `font-black uppercase tracking-tight group-hover:text-blue-900 dark:group-hover:text-blue-400 ${isDarkMode ? 'text-white' : 'text-black'} ${getTextSize('text-xs', 'text-base')}`,
                                                            children: s.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                            className: "w-4 h-4 text-slate-400 group-hover:text-blue-900 transition-transform group-hover:translate-x-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, s.code, true, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 469,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 455,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 409,
                            columnNumber: 15
                        }, this),
                        state.currentStep >= 0 && state.currentStep < activeQuestions.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 md:p-16",
                            children: [
                                renderProgress(),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: goBack,
                                            className: "text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] mb-12 transition-colors group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    className: "w-4 h-4 transition-transform group-hover:-translate-x-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 21
                                                }, this),
                                                "Step Back"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 490,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `font-black mb-6 leading-snug tracking-tighter uppercase ${getTextSize('text-3xl', 'text-4xl')}`,
                                            style: {
                                                color: isDarkMode ? '#ffffff' : '#000000'
                                            },
                                            children: activeQuestions[state.currentStep].text
                                        }, void 0, false, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 494,
                                            columnNumber: 19
                                        }, this),
                                        activeQuestions[state.currentStep].id === 'dpoc' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-6 md:p-6 mb-8 rounded-[2rem] border ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-blue-50/50 border-blue-100'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: `font-black uppercase tracking-widest mb-4 flex items-center gap-2 ${getTextSize('text-xs', 'text-base')}`,
                                                    style: {
                                                        color: isDarkMode ? '#ffffff' : '#1e293b'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            className: "w-4 h-4 text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Valid Documents Include:"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 503,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACCEPTABLE_DPOC"].map((doc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "flex items-start gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    className: `w-4 h-4 mt-0.5 shrink-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                                    lineNumber: 513,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `font-bold leading-tight ${isDarkMode ? 'text-slate-200' : 'text-slate-700'} ${getTextSize('text-sm', 'text-lg')}`,
                                                                    children: doc
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                                    lineNumber: 514,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 510,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 502,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 489,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: activeQuestions[state.currentStep].options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleAnswer(activeQuestions[state.currentStep].id, opt.value),
                                            className: `w-full text-left p-6 md:p-8 border-2 rounded-[1.8rem] transition-all group relative overflow-hidden active:scale-[0.98] ${isDarkMode ? 'bg-slate-800 border-slate-700 hover:border-blue-500 hover:bg-slate-700/50' : 'bg-white border-slate-50 hover:border-blue-900 hover:bg-blue-50/20'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-black uppercase tracking-wider leading-none ${isDarkMode ? 'text-white' : 'text-black'} ${getTextSize('text-base', 'text-xl')}`,
                                                        children: opt.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-12 h-12 rounded-2xl border-2 flex items-center justify-center transition-all bg-white dark:bg-slate-900 shadow-sm ${isDarkMode ? 'border-slate-700 group-hover:border-blue-500' : 'border-slate-100 group-hover:border-blue-900'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-5 h-5 bg-blue-900 dark:bg-blue-500 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 535,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                lineNumber: 532,
                                                columnNumber: 23
                                            }, this)
                                        }, opt.id, false, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 527,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 525,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 487,
                            columnNumber: 15
                        }, this),
                        state.currentStep === activeQuestions.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 md:p-16 animate-in fade-in slide-in-from-bottom-8 duration-1000",
                            children: (()=>{
                                const { status, checklist, actionItems } = calculateResults();
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-14",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-flex items-center justify-center mb-10",
                                                    children: [
                                                        status === 'Likely Eligible' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-8 rounded-full shadow-2xl ring-4 ${isDarkMode ? 'bg-emerald-900/20 ring-emerald-900/50 shadow-emerald-900/30' : 'bg-emerald-50 ring-emerald-100 shadow-emerald-500/20'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                className: "w-32 h-32 text-emerald-600 dark:text-emerald-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                                lineNumber: 552,
                                                                columnNumber: 249
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 552,
                                                            columnNumber: 60
                                                        }, this),
                                                        status === 'Action Required' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-6 md:p-8 rounded-[2.5rem] shadow-2xl ring-1 ${isDarkMode ? 'bg-amber-900/20 ring-amber-900/50 shadow-amber-900/30' : 'bg-amber-50 ring-amber-100 shadow-amber-500/10'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                className: "w-24 h-24 text-amber-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                                lineNumber: 553,
                                                                columnNumber: 248
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 553,
                                                            columnNumber: 60
                                                        }, this),
                                                        status === 'Ineligible' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-6 md:p-8 rounded-[2.5rem] shadow-2xl ring-1 ${isDarkMode ? 'bg-red-900/20 ring-red-900/50 shadow-red-900/30' : 'bg-red-50 ring-red-100 shadow-red-500/10'}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                className: "w-24 h-24 text-red-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 231
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 55
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: `font-black uppercase tracking-tighter leading-none mb-4 ${status === 'Likely Eligible' ? 'text-emerald-700 dark:text-emerald-400' : status === 'Action Required' ? 'text-amber-600' : 'text-red-600'} ${getTextSize('text-5xl md:text-6xl', 'text-6xl md:text-7xl')}`,
                                                    children: status
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 556,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `inline-block px-6 py-2 bg-slate-900 dark:bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.2em] shadow-lg ${getTextSize('text-xs', 'text-base')}`,
                                                    children: [
                                                        "Jurisdiction: ",
                                                        selectedStateData?.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 550,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-[3rem] p-8 mb-10 border shadow-inner ring-1 ${isDarkMode ? 'bg-slate-800/40 border-slate-700 ring-slate-900/50' : 'bg-slate-50 border-slate-100 ring-slate-900/5'}`,
                                            children: status === 'Likely Eligible' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: checklist.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: item
                                                    }, i, false, {
                                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 31
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                lineNumber: 562,
                                                columnNumber: 27
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-12",
                                                children: checklist.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-8 items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-10 h-10 rounded-2xl border flex items-center justify-center shadow-xl font-black ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'} ${getTextSize('text-sm', 'text-lg')}`,
                                                                    children: i + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                                    lineNumber: 571,
                                                                    columnNumber: 59
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                                lineNumber: 571,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `leading-relaxed pt-1 flex-grow ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`,
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/apps/save-act/app/page.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 31
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/save-act/app/page.tsx",
                                                lineNumber: 568,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 560,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4",
                                            children: [
                                                status !== 'Likely Eligible' && actionItems.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-6 rounded-[2.5rem] border ${isDarkMode ? 'bg-amber-950/30 border-amber-900/30' : 'bg-amber-50 border-amber-100'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: `text-center font-black uppercase tracking-widest mb-6 ${isDarkMode ? 'text-amber-400' : 'text-amber-700'} ${getTextSize('text-xs', 'text-base')}`,
                                                            children: "Steps to resolve your status:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 582,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-4 mb-8",
                                                            children: actionItems.map((action, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: `w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isDarkMode ? 'bg-amber-900/50 text-amber-400' : 'bg-amber-100 text-amber-700'}`,
                                                                            children: action.icon
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                                            lineNumber: 588,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `font-black uppercase ${isDarkMode ? 'text-white' : 'text-slate-900'} ${getTextSize('text-xs', 'text-base')}`,
                                                                                    children: action.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                                                    lineNumber: 592,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: `leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'} ${getTextSize('text-xs', 'text-base')}`,
                                                                                    children: action.description
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                                                    lineNumber: 593,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                                            lineNumber: 591,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                                    lineNumber: 587,
                                                                    columnNumber: 33
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                const selectedStateData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATES"].find((s)=>s.code === state.selectedState);
                                                                const targetUrl = selectedStateData ? `https://vote.gov/register/${selectedStateData.name.toLowerCase().replace(/\s+/g, '-')}` : 'https://vote.gov';
                                                                window.open(targetUrl, '_blank');
                                                            },
                                                            className: `w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-[0.2em] py-6 rounded-[2rem] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95 ${getTextSize('text-xs', 'text-base')}`,
                                                            children: [
                                                                "Register to Vote (Vote.gov) ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                    className: "w-4 h-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                                    lineNumber: 608,
                                                                    columnNumber: 59
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 598,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 581,
                                                    columnNumber: 27
                                                }, this) : // Default / Eligible
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        const selectedStateData = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATES"].find((s)=>s.code === state.selectedState);
                                                        const targetUrl = selectedStateData ? `https://vote.gov/register/${selectedStateData.name.toLowerCase().replace(/\s+/g, '-')}` : 'https://vote.gov';
                                                        window.open(targetUrl, '_blank');
                                                    },
                                                    className: `w-full flex items-center justify-center gap-3 text-white font-black uppercase tracking-[0.2em] py-6 rounded-[2rem] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 active:scale-95 text-xs ${status === 'Likely Eligible' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-700 hover:bg-slate-800'}`,
                                                    children: [
                                                        status === 'Likely Eligible' ? 'Register to Vote' : 'Check State Requirements',
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 110
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 613,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: reset,
                                                    className: `w-full flex items-center justify-center gap-3 bg-transparent text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.2em] py-5 rounded-[2rem] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all border-2 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 active:scale-95 ${getTextSize('text-[10px]', 'text-sm')}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                                            lineNumber: 628,
                                                            columnNumber: 27
                                                        }, this),
                                                        " Check Another Person"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/save-act/app/page.tsx",
                                            lineNumber: 579,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/save-act/app/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 21
                                }, this);
                            })()
                        }, void 0, false, {
                            fileName: "[project]/apps/save-act/app/page.tsx",
                            lineNumber: 545,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-950' : 'bg-slate-50'}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$save$2d$act$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: renderView()
        }, void 0, false, {
            fileName: "[project]/apps/save-act/app/page.tsx",
            lineNumber: 645,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/save-act/app/page.tsx",
        lineNumber: 644,
        columnNumber: 5
    }, this);
}
_s(Home, "3CzCD3fSC72mcvunifnROHj1XUo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$ui$2f$dist$2f$components$2f$AccessibilityProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccessibility"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_6da131fe._.js.map