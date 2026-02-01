import { Suspense } from 'react';
import WizardForm from './WizardForm';
import { getStateConfig, isValidState } from '@/lib/states';
import { notFound } from 'next/navigation';

export default async function WizardPage(props: { params: Promise<{ state: string }> }) {
    const params = await props.params;
    const stateCode = params.state;

    if (!isValidState(stateCode)) {
        return notFound();
    }

    const config = getStateConfig(stateCode);

    // Dynamic Wizard enabled for all supported states now (with fallback instructions)
    // if (!config.hasWizard) { ... }

    return (
        <div className="min-h-screen bg-granite-50 p-4 md:p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-granite-900 mb-6 text-center">Testimony Wizard</h1>
                <Suspense fallback={<div className="text-center p-8">Loading...</div>}>
                    <WizardForm />
                </Suspense>
            </div>
        </div>
    );
}
