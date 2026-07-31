import Link from 'next/link';

const noticeRows = [
  {
    title: 'Original notice',
    body: 'Your payment will change starting August 1 because of your annual escrow analysis.',
    tone: 'Direct but dense',
  },
  {
    title: 'Rewritten insight',
    body: 'Your payment is changing on August 1 because escrow costs went up. The new amount and next steps are shown below.',
    tone: 'Clear and borrower-friendly',
  },
];

export default function NoticeInsightsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
          Notice Insights
        </h1>
        <p className="text-text-muted">
          Compare the original notice with the language Clarity suggests for borrowers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {noticeRows.map((row) => (
          <div key={row.title} className="bg-surface border border-border rounded-lg p-6">
            <p className="text-text-muted text-xs uppercase tracking-wide mb-2">{row.title}</p>
            <p className="text-text-primary font-semibold mb-3">{row.tone}</p>
            <p className="text-text-muted text-sm leading-relaxed">{row.body}</p>
          </div>
        ))}
      </div>

      <div className="bg-info/10 border border-info rounded-lg p-6">
        <p className="text-text-muted text-sm leading-relaxed">
          The insight view is read-only. A human can review the rewrite before anything is sent to a borrower.
        </p>
      </div>

      <Link href="/servicing" className="text-accent text-sm inline-block">
        ← Back to Servicing Home
      </Link>
    </div>
  );
}
