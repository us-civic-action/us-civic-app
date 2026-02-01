import { legiscan } from '@/lib/legiscan';
import { getStateConfig, isValidState } from '@/lib/states';
import Dashboard from '@/components/Dashboard';
import { notFound } from 'next/navigation';

export default async function Home(props: { params: Promise<{ state: string }> }) {
  // Await params to fix Next.js 15+ async params warning
  const params = await props.params;
  const stateCode = params.state;

  if (!isValidState(stateCode)) {
    return notFound();
  }

  const { hearings, amendments } = await legiscan.getDashboardData(stateCode);
  const config = getStateConfig(stateCode);

  // Smart Default: If no hearings but we have recent activity, show activity first.
  const defaultView = hearings.length === 0 && amendments.length > 0 ? 'amendments' : 'hearings';

  return (
    <main className="min-h-screen bg-granite-50 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nh-green-900 to-granite-900 text-white py-12 px-6 shadow-md">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight flex items-center gap-3">
            <span>{config.flagEmoji}</span> {config.name} Civic Action
          </h1>
          <p className="text-lg text-nh-green-50/90 font-medium">
            Track bills. Find hearings. Make your voice heard.
          </p>
        </div>
      </section>

      {/* Mock Data Warning */}
      {hearings.length === 1 && (hearings[0].hearing_id === 1 || hearings[0].hearing_id === 2) && (
        <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-700 p-4 shadow-sm" role="alert">
          <div className="max-w-4xl mx-auto flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-bold">System Update in Progress</p>
              <p className="text-sm">
                Real-time data feeds are currently paused for maintenance and will resume on <strong>February 1st</strong>.
                The data below is simulated for demonstration purposes.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Client Dashboard (Calendar + List) */}
      <Dashboard hearings={hearings} amendments={amendments} initialViewMode={defaultView} />
    </main>
  );
}
