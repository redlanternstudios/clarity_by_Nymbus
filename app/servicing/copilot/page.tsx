import Link from 'next/link';

export default function CopilotPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
          Clarity Copilot
        </h1>
        <p className="text-text-muted">
          Governed assistant for routing suggestions and case guidance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-text-primary font-semibold mb-4">Prompt</h2>
          <div className="bg-elevated border border-border rounded-lg p-4 text-text-primary text-sm leading-relaxed">
            What should I do with a borrower who says their payment changed and wants to know why?
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-text-primary font-semibold mb-4">Guided answer</h2>
          <p className="text-text-muted text-sm leading-relaxed mb-4">
            Explain the payment change, cite the notice, and suggest routing to self-service unless the borrower asks for help.
          </p>
          <button className="bg-accent hover:bg-accent-dark text-background font-semibold py-2 px-4 rounded">
            Confirm action
          </button>
        </div>
      </div>

      <div className="bg-info/10 border border-info rounded-lg p-6">
        <p className="text-text-muted text-sm">
          Copilot stays read-only until a human confirms the suggested action.
        </p>
      </div>

      <Link href="/servicing" className="text-accent text-sm inline-block">
        ← Back to Servicing Home
      </Link>
    </div>
  );
}
