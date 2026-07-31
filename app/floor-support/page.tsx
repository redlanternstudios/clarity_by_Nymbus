import Link from 'next/link';

const metrics = [
  { label: 'Active guidance sessions', value: '12', tone: 'primary' },
  { label: 'Escalations pending', value: '3', tone: 'warning' },
  { label: 'Routing reviews today', value: '18', tone: 'info' },
  { label: 'Resolution rate', value: '94%', tone: 'success' },
];

const queue = [
  {
    id: 'FS-2081',
    title: 'Payment change explanation',
    owner: 'Jordan Lee',
    route: 'Floor Support',
    status: 'Needs review',
    confidence: '91%',
  },
  {
    id: 'FS-2082',
    title: 'Escrow shortage follow-up',
    owner: 'Sarah Rivera',
    route: 'Floor Support',
    status: 'Pending confirmation',
    confidence: '86%',
  },
  {
    id: 'FS-2083',
    title: 'Notice wording clarification',
    owner: 'Devon Parker',
    route: 'Customer Support',
    status: 'Routed correctly',
    confidence: '94%',
  },
  {
    id: 'FS-2084',
    title: 'Dispute escalation',
    owner: 'Alyssa Morgan',
    route: 'Product Review',
    status: 'Escalate',
    confidence: '78%',
  },
];

const actions = [
  'Confirm suggested route',
  'Add guidance note',
  'Escalate to specialist',
  'Close as resolved',
];

export default function FloorSupportHome() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-text-muted">
            Floor Support
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
            Welcome back, Maya
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-text-muted">
            Review routed cases, confirm guidance, and move borrowers and servicing
            agents to the right next step faster.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface px-4 py-3 text-right">
          <p className="text-xs uppercase tracking-wide text-text-muted">
            Launch health
          </p>
          <p className="mt-1 text-lg font-semibold text-success">Stable</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl border border-border bg-surface p-5">
            <p className="text-xs text-text-muted">{metric.label}</p>
            <p
              className={`mt-3 text-3xl font-semibold ${
                metric.tone === 'success'
                  ? 'text-success'
                  : metric.tone === 'warning'
                    ? 'text-warning'
                    : metric.tone === 'info'
                      ? 'text-info'
                      : 'text-text-primary'
              }`}
            >
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-xl border border-border bg-surface p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold text-text-primary">
                Escalation queue
              </h2>
              <p className="mt-1 text-xs text-text-muted">
                Current cases needing routing review or confirmation.
              </p>
            </div>
            <Link
              href="/servicing/cases"
              className="text-sm font-medium text-accent hover:text-accent-hover"
            >
              View full queue
            </Link>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-elevated text-xs uppercase tracking-wide text-text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Case</th>
                  <th className="px-4 py-3 font-medium">Owner</th>
                  <th className="px-4 py-3 font-medium">Suggested route</th>
                  <th className="px-4 py-3 font-medium">Confidence</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {queue.map((item) => (
                  <tr key={item.id} className="border-t border-border">
                    <td className="px-4 py-3">
                      <p className="font-mono text-xs text-accent">{item.id}</p>
                      <p className="mt-1 text-text-primary">{item.title}</p>
                    </td>
                    <td className="px-4 py-3 text-text-muted">{item.owner}</td>
                    <td className="px-4 py-3 text-text-primary">{item.route}</td>
                    <td className="px-4 py-3 text-success">{item.confidence}</td>
                    <td className="px-4 py-3 text-text-muted">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-surface p-5">
            <h2 className="text-sm font-semibold text-text-primary">Actions</h2>
            <div className="mt-4 space-y-2">
              {actions.map((action) => (
                <div
                  key={action}
                  className="rounded-lg border border-border bg-elevated px-3 py-2.5 text-sm text-text-primary"
                >
                  {action}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <h2 className="text-sm font-semibold text-text-primary">
              Support guidance
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li>Confirm route before closing a review.</li>
              <li>Leave a clear note when ownership changes.</li>
              <li>Escalate if confidence drops below the threshold.</li>
              <li>Keep the borrower informed with the simplest next step.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-info/40 bg-info/10 p-5">
            <p className="text-sm font-medium text-text-primary">Quick note</p>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Floor support is the human confirmation layer. It should feel fast,
              clear, and confident, never like a dead end.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Link
          href="/servicing/routing"
          className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
        >
          <p className="text-xs uppercase tracking-wide text-text-muted">
            Routing summary
          </p>
          <p className="mt-2 text-lg font-semibold text-text-primary">
            Review queue suggestions
          </p>
          <p className="mt-2 text-sm text-text-muted">
            See which destinations are most often recommended.
          </p>
        </Link>

        <Link
          href="/borrower/escalate"
          className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
        >
          <p className="text-xs uppercase tracking-wide text-text-muted">
            Borrower escalation
          </p>
          <p className="mt-2 text-lg font-semibold text-text-primary">
            Check the submitted request flow
          </p>
          <p className="mt-2 text-sm text-text-muted">
            Verify the request path and supported next step.
          </p>
        </Link>

        <Link
          href="/borrower/history"
          className="rounded-xl border border-border bg-surface p-5 transition-colors hover:border-accent"
        >
          <p className="text-xs uppercase tracking-wide text-text-muted">
            History
          </p>
          <p className="mt-2 text-lg font-semibold text-text-primary">
            Review prior resolutions
          </p>
          <p className="mt-2 text-sm text-text-muted">
            Keep the support history visible for faster decisions.
          </p>
        </Link>
      </div>
    </div>
  );
}
