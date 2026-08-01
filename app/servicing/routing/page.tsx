import Link from 'next/link';

// Canonical destinations per requirements.md (Req 3.5) and design.md's
// "Routing Model" — these are the only four the app ever actually routes to.
// Any other label seen elsewhere (e.g. case categories/tags) is intake
// metadata, not a route destination.
const destinations = [
  { name: 'Floor Support', note: 'Real-time guidance, escalation review, and routing confirmation' },
  { name: 'Customer Support', note: 'Standard servicing ownership and borrower-facing follow-up' },
  { name: 'Product Review', note: 'Disputes and cases that need formal product-level review' },
  { name: 'Technical Escalation', note: 'Login, access, or platform issues that need technical handling' },
];

export default function RoutingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
          Routing Rules
        </h1>
        <p className="text-text-muted">
          Review destinations and confirm where Clarity should send each case.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {destinations.map((item) => (
          <div key={item.name} className="bg-surface border border-border rounded-lg p-5">
            <p className="text-text-primary font-semibold mb-1">{item.name}</p>
            <p className="text-text-muted text-sm">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="bg-info/10 border border-info rounded-lg p-6">
        <p className="text-text-muted text-sm leading-relaxed">
          Routing is assistive only. A human still confirms the final destination for anything ambiguous.
        </p>
      </div>

      <Link href="/servicing" className="text-accent text-sm inline-block">
        ← Back to Servicing Home
      </Link>
    </div>
  );
}
