import Link from 'next/link';

const trendRows = [
  { label: 'Why did my payment increase?', volume: 18, share: '31%' },
  { label: 'What is an escrow shortage?', volume: 11, share: '19%' },
  { label: 'When does the new payment begin?', volume: 9, share: '15%' },
  { label: 'Can I pay the shortage at once?', volume: 7, share: '12%' },
  { label: 'What are escrow taxes?', volume: 5, share: '9%' },
];

export default function TrendsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
          Trends
        </h1>
        <p className="text-text-muted">
          Repeated borrower questions and the pressure they create for servicing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-text-primary font-semibold mb-4">Top questions</h2>
          <div className="space-y-4">
            {trendRows.map((row) => (
              <div key={row.label}>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-text-primary text-sm">{row.label}</span>
                  <span className="text-text-muted text-xs">{row.volume} cases</span>
                </div>
                <div className="h-2 bg-elevated rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: `${row.share}` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-info/10 border border-info rounded-lg p-6">
          <h2 className="text-text-primary font-semibold mb-4">What leadership sees</h2>
          <ul className="space-y-2 text-text-muted text-sm">
            <li>• Question volume by topic</li>
            <li>• Self-service opportunities</li>
            <li>• Escalation pressure by notice type</li>
            <li>• Launch health and bottleneck indicators</li>
          </ul>
        </div>
      </div>

      <Link href="/servicing" className="text-accent text-sm inline-block">
        ← Back to Servicing Home
      </Link>
    </div>
  );
}
