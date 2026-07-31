'use client';

export default function LeadershipDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-serif font-bold text-text-primary mb-2">
          Leadership Dashboard
        </h1>
        <p className="text-text-muted">
          Explore performance insights, trends, and operational intelligence.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="text-text-muted text-sm mb-2">Total Borrowers</h3>
          <p className="text-3xl font-bold text-text-primary">12,847</p>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="text-text-muted text-sm mb-2">Active Cases</h3>
          <p className="text-3xl font-bold text-text-primary">1,243</p>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="text-text-muted text-sm mb-2">System Health</h3>
          <p className="text-3xl font-bold text-success">99.8%</p>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="text-text-muted text-sm mb-2">Avg Resolution Time</h3>
          <p className="text-3xl font-bold text-text-primary">2.4h</p>
        </div>
      </div>

      <div className="bg-info/10 border border-info rounded-lg p-6">
        <p className="text-info font-medium">
          Leadership role functionality coming soon. This is an MVP placeholder.
        </p>
      </div>
    </div>
  );
}
