import Link from 'next/link';

const destinations = [
  { name: 'Self-service', note: 'Borrower-facing guidance and answers' },
  { name: 'General servicing', note: 'Standard servicing ownership' },
  { name: 'Escrow specialist', note: 'Taxes, insurance, and escrow balance' },
  { name: 'Insurance specialist', note: 'Coverage and premium adjustments' },
  { name: 'Tax specialist', note: 'Tax changes and related notices' },
  { name: 'Hardship assistance', note: 'Relief and special handling' },
  { name: 'Compliance review', note: 'Policy or regulatory review' },
  { name: 'Dispute review', note: 'Cases that need formal review' },
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
