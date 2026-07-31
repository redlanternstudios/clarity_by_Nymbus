import Link from 'next/link';
import { notFound } from 'next/navigation';

const caseMap: Record<string, { title: string; queue: string; state: 'default' | 'routed' | 'escalated'; owner: string; confidence: string }> = {
  'CL-1047': { title: 'Payment Change Explanation', queue: 'Customer Support', state: 'default', owner: 'Jordan Lee', confidence: '91%' },
  'CL-1048': { title: 'Payment Not Posting', queue: 'Floor Support', state: 'routed', owner: 'Sarah Rivera', confidence: '86%' },
  'CL-1049': { title: 'Account Update Request', queue: 'Customer Support', state: 'escalated', owner: 'Devon Parker', confidence: '94%' },
  'CL-1050': { title: 'Dispute Inquiry', queue: 'Product Review', state: 'default', owner: 'Alyssa Morgan', confidence: '78%' },
  'CL-1051': { title: 'Login Issue', queue: 'Technical Escalation', state: 'default', owner: 'Justin Wong', confidence: '72%' },
};

export default function CaseDetailPage({ params }: { params: { id: string } }) {
  const currentCase = caseMap[params.id];

  if (!currentCase) {
    notFound();
  }

  const stateLabel =
    currentCase.state === 'routed'
      ? 'Routed'
      : currentCase.state === 'escalated'
        ? 'Escalated'
        : 'Default';

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <Link href="/servicing/cases" className="text-accent text-sm mb-3 inline-block">
            ← Back to Cases
          </Link>
          <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
            {params.id}
          </h1>
          <p className="text-text-muted">{currentCase.title}</p>
        </div>
        <span className="bg-success/20 text-success px-3 py-1 rounded text-xs font-medium">
          {stateLabel}
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface border border-border rounded-lg p-6">
            <h2 className="text-text-primary font-semibold mb-4">Case context</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-text-muted mb-1">Owner</p>
                <p className="text-text-primary">{currentCase.owner}</p>
              </div>
              <div>
                <p className="text-text-muted mb-1">Queue</p>
                <p className="text-text-primary">{currentCase.queue}</p>
              </div>
              <div>
                <p className="text-text-muted mb-1">Confidence</p>
                <p className="text-text-primary">{currentCase.confidence}</p>
              </div>
              <div>
                <p className="text-text-muted mb-1">Status</p>
                <p className="text-text-primary capitalize">{currentCase.state}</p>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6">
            <h2 className="text-text-primary font-semibold mb-4">Timeline</h2>
            <div className="space-y-3 text-sm">
              <p className="text-text-primary">Borrower question received</p>
              <p className="text-text-muted">Notice reviewed and explanation drafted</p>
              <p className="text-text-muted">Queue suggestion prepared for human confirmation</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-info/10 border border-info rounded-lg p-6">
            <h2 className="text-text-primary font-semibold mb-4">Recommended action</h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Confirm the route, add a note if needed, and escalate only if the case is ambiguous.
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6 space-y-3">
            <button className="w-full bg-accent hover:bg-accent-dark text-background font-semibold py-2 px-4 rounded">
              Add note
            </button>
            <button className="w-full bg-elevated hover:bg-surface border border-border text-text-primary font-semibold py-2 px-4 rounded">
              Route
            </button>
            <button className="w-full bg-elevated hover:bg-surface border border-border text-text-primary font-semibold py-2 px-4 rounded">
              Escalate
            </button>
            <button className="w-full bg-elevated hover:bg-surface border border-border text-text-primary font-semibold py-2 px-4 rounded">
              Resolve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
