
import { SUPPORTED_STATES, StateConfig } from '../lib/states';

const ALL_US_STATES = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const verifyStates = () => {
    console.log("🇺🇸 Starting US State Configuration Verification...\n");

    let passCount = 0;
    let failCount = 0;
    let missingCount = 0;

    const missingStates: string[] = [];

    ALL_US_STATES.forEach(code => {
        const config = SUPPORTED_STATES[code];

        if (!config) {
            console.log(`❌ [MISSING] ${code}`);
            missingStates.push(code);
            missingCount++;
            return;
        }

        const errors: string[] = [];

        // Rule 1: Config Code Match
        if (config.code !== code) {
            errors.push(`Config code mismatch: Expected ${code}, got ${config.code}`);
        }

        // Rule 2: PDF Generator Requirements
        if (config.wizardType === 'pdf_generator') {
            if (!config.submissionPortalUrl) {
                errors.push("Missing 'submissionPortalUrl' for 'pdf_generator' type");
            }
        }

        // Rule 3: Valid Wizard Type
        const validWizardTypes = ['pdf_generator', 'direct_contact'];
        if (config.wizardType && !validWizardTypes.includes(config.wizardType)) {
            errors.push(`Invalid wizardType: ${config.wizardType}`);
        }

        if (errors.length > 0) {
            console.log(`⚠️ [FAIL] ${code} (${config.name})`);
            errors.forEach(e => console.log(`   - ${e}`));
            failCount++;
        } else {
            // console.log(`✅ [PASS] ${code}`); // Optional: Comment out to reduce noise
            passCount++;
        }
    });

    console.log("\n-------------------------------------------");
    console.log(`SUMMARY:`);
    console.log(`✅ Passed: ${passCount}`);
    console.log(`⚠️ Failed: ${failCount}`);
    console.log(`❌ Missing: ${missingCount}`);

    if (missingStates.length > 0) {
        console.log(`\nMissing configuration for: ${missingStates.join(", ")}`);
    }

    if (failCount > 0 || missingCount > 0) {
        console.log("\n🔴 Verification FAILED. Please fix the issues above.");
        process.exit(1);
    } else {
        console.log("\n🟢 Verification SUCCESS. All states configured correctly.");
    }
};

verifyStates();
