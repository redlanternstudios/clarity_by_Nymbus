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

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-text-primary font-semibold mb-4">Routing review</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="text-text-primary text-sm">Payment change inquiry</span>
              <span className="bg-warning/20 text-warning px-2 py-1 rounded text-xs font-medium">Confirm route</span>
            </div>
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="text-text-primary text-sm">Escrow adjustment</span>
              <span className="bg-success/20 text-success px-2 py-1 rounded text-xs font-medium">Approved</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-text-primary text-sm">Dispute inquiry</span>
              <span className="bg-info/20 text-info px-2 py-1 rounded text-xs font-medium">Needs review</span>
            </div>
          </div>
        </div>

        <div className="bg-info/10 border border-info rounded-lg p-6">
          <h2 className="text-text-primary font-semibold mb-4">Operator note</h2>
          <p className="text-text-muted text-sm leading-relaxed">
            Floor support confirms the chatbot suggestion, corrects edge cases, and escalates when confidence is low.
          </p>
        </div>
      </div>
    </div>
  );
}
