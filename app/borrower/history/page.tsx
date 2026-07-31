'use client';

import { mockHistory } from '@/lib/data';

export default function LoanHistory() {
  if (mockHistory.length === 0) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-text-primary mb-8">
          Loan history
        </h1>

        <div className="bg-surface border border-border rounded-lg p-12 text-center">
          <p className="text-text-muted text-lg">
            No previous notices, questions, or outcomes are available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-text-primary mb-8">
        Loan history
      </h1>

      <div className="bg-surface border border-border rounded-lg p-6">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

          {/* Timeline Events */}
          <div className="space-y-8">
            {mockHistory.map((event, idx) => (
              <div key={idx} className="relative pl-24">
                {/* Timeline Dot */}
                <div className="absolute left-1 top-2 w-14 h-14 bg-accent rounded-full flex items-center justify-center text-background font-bold text-xl">
                  {event.type === 'notice' && '📄'}
                  {event.type === 'question' && '❓'}
                  {event.type === 'outcome' && '✓'}
                  {event.type === 'escalation' && '🆘'}
                </div>

                {/* Event Content */}
                <div>
                  <p className="text-sm text-text-muted mb-1">{event.date}</p>
                  <p className="text-text-primary font-medium">
                    {event.description}
                  </p>
                  {event.reference && (
                    <p className="text-sm text-accent mt-1">{event.reference}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
