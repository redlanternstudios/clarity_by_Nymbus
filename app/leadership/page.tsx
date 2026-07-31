'use client';

export default function LeadershipDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-serif font-bold text-text-primary mb-2">
          Leadership Dashboard
        </h1>
        <p className="text-text-muted">
          Explore performance insights, trends, and launch health.
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

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-text-primary font-semibold mb-4">Trends</h2>
          <div className="space-y-4">
            <div>
              <p className="text-text-muted text-sm mb-1">Payment change questions</p>
              <div className="h-2 bg-elevated rounded-full overflow-hidden">
                <div className="h-full bg-accent" style={{ width: '78%' }} />
              </div>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Escrow questions</p>
              <div className="h-2 bg-elevated rounded-full overflow-hidden">
                <div className="h-full bg-accent-cyan" style={{ width: '62%' }} />
              </div>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Routing confidence</p>
              <div className="h-2 bg-elevated rounded-full overflow-hidden">
                <div className="h-full bg-success" style={{ width: '91%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-info/10 border border-info rounded-lg p-6">
          <h2 className="text-text-primary font-semibold mb-4">Launch health</h2>
          <p className="text-text-muted mb-3">
            Clarity is reducing friction where borrowers need payment and notice guidance.
          </p>
          <ul className="space-y-2 text-text-muted text-sm">
            <li>• Open cases remain within target</li>
            <li>• Escalation rate stays controlled</li>
            <li>• No blocked workflows or dead pages</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
