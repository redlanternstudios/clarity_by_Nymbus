import Link from 'next/link';

export default function EscalationConfirmedPage() {
  return (
    <div className="space-y-6 max-w-3xl">
      <div className="text-center py-10">
        <div className="inline-flex w-20 h-20 rounded-full bg-success/20 items-center justify-center mb-5">
          <span className="text-4xl text-success">✓</span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
          Request submitted
        </h1>
        <p className="text-text-muted">
          Your help request has been routed to the right team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-lg p-6">
          <p className="text-text-muted text-sm mb-2">Reference number</p>
          <p className="text-2xl font-mono text-text-primary mb-4">RQ-3782-7791</p>
          <p className="text-text-muted text-sm">
            Save this number in case you need to follow up later.
          </p>
        </div>

        <div className="bg-info/10 border border-info rounded-lg p-6">
          <p className="text-text-primary font-semibold mb-2">What happens next</p>
          <ul className="space-y-2 text-text-muted text-sm">
            <li>• The request is reviewed by support</li>
            <li>• A team member can follow up if needed</li>
            <li>• You can return here from your history page</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-4">
        <Link href="/borrower" className="flex-1">
          <span className="block w-full text-center bg-accent hover:bg-accent-dark text-background font-semibold py-3 px-6 rounded transition-colors">
            Back to Home
          </span>
        </Link>
        <Link href="/borrower/history" className="flex-1">
          <span className="block w-full text-center bg-elevated hover:bg-surface border border-border text-text-primary font-semibold py-3 px-6 rounded transition-colors">
            View History
          </span>
        </Link>
      </div>
    </div>
  );
}
