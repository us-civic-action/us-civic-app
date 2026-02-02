import { legiscan } from '@/lib/legiscan';
import { getStateConfig, isValidState } from '@/lib/states';
import Dashboard from '@/components/Dashboard';
import { notFound } from 'next/navigation';


export default async function StateDashboard(props: { params: Promise<{ state: string }>, searchParams: Promise<{ session?: string }> }) {
  const params = await props.params;
  // const searchParams = await props.searchParams;
  const { state } = params;
  const stateCode = state.toUpperCase();

  // Validate State
  if (!isValidState(stateCode)) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-2xl font-bold text-red-600">Invalid State: {stateCode}</h1>
        <p className="mt-2 text-gray-600">Please choose a valid US state code (e.g., /nh/dashboard).</p>
      </div>
    );
  }

  const config = getStateConfig(stateCode);

  if (!config) {
    return notFound();
  }

  // Fetch Data
  const { hearings, amendments } = await legiscan.getDashboardData(stateCode);

  // Smart Default: If no hearings but we have recent activity, show activity first.
  const defaultView = hearings.length === 0 && amendments.length > 0 ? 'amendments' : 'hearings';

  // Check for mock data to display a warning
  const isMockData = hearings.length === 1 && (hearings[0].hearing_id === 1 || hearings[0].hearing_id === 2);

  return (
    <main className="min-h-screen bg-granite-50 dark:bg-gray-950 pb-20">
      {/* Hero Section */}
      <section className="text-white pt-24 pb-12 px-6 shadow-md" style={{ background: `linear-gradient(to right, ${config.theme.primary}, ${config.theme.secondary})` }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl drop-shadow-md">{config.flagEmoji}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight drop-shadow-sm">
                {config.name}
              </h1>
              <p className="text-white/90 font-medium text-lg mt-1 flex items-center gap-2">
                <span className="bg-white/20 px-2 py-0.5 rounded text-sm uppercase tracking-wider backdrop-blur-sm">
                  Legislative Dashboard
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mock Data Warning */}
      {isMockData && (
        <div className="bg-amber-100 border-l-4 border-amber-500 text-amber-700 p-4 shadow-sm" role="alert">
          <div className="max-w-4xl mx-auto flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-bold">Using Mock Data</p>
              <p className="text-sm">Real legislative data is currently unavailable for {config.name}. Showing sample data for demonstration.</p>
            </div>
          </div>
        </div>
      )}

      {/* Client Dashboard (Calendar + List) */}
      <Dashboard hearings={hearings} amendments={amendments} initialViewMode={defaultView} stateCode={stateCode} />
    </main>
  );
}
