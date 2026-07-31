'use client';

export default function FloorSupportHome() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-serif font-bold text-text-primary mb-2">
          Welcome back, Maya 👋
        </h1>
        <p className="text-text-muted">
          Real-time guidance and escalations for borrowers and servicing agents.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="text-text-primary font-semibold mb-4">Active Guidance Sessions</h3>
          <p className="text-3xl font-bold text-text-primary">12</p>
          <p className="text-text-muted text-sm mt-2">Currently in progress</p>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="text-text-primary font-semibold mb-4">Escalations Pending</h3>
          <p className="text-3xl font-bold text-text-primary">3</p>
          <p className="text-text-muted text-sm mt-2">Awaiting review</p>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <h3 className="text-text-primary font-semibold mb-4">Resolution Rate</h3>
          <p className="text-3xl font-bold text-success">94%</p>
          <p className="text-text-muted text-sm mt-2">This month</p>
        </div>
      </div>

      <div className="bg-info/10 border border-info rounded-lg p-6">
        <p className="text-info font-medium">
          Floor Support role functionality coming soon. This is an MVP placeholder.
        </p>
      </div>
    </div>
  );
}
