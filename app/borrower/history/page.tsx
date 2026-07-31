'use client';

import Link from 'next/link';

export default function LoanHistory() {
  const sampleHistory = [
    { date: 'August 1, 2026', type: 'notice', title: 'Payment Adjustment Notice', description: 'Received annual escrow analysis and payment change notice.', reference: 'NT-7821' },
    { date: 'July 15, 2026', type: 'question', title: 'Asked: What is escrow?', description: 'Clarity answered: "Escrow is money held in trust to cover taxes and insurance..."', reference: 'Q-2847' },
    { date: 'June 20, 2026', type: 'escalation', title: 'Requested Human Support', description: 'Submitted request for help regarding previous payment inquiry.', reference: 'RQ-2615' },
    { date: 'May 1, 2026', type: 'notice', title: 'Annual Escrow Analysis', description: 'Received annual escrow analysis with no changes required.', reference: 'NT-7610' },
  ];

  return (
    <div className="space-y-6">
      <Link href="/borrower" className="text-accent text-sm mb-4 inline-block">
        ← Back to Home
      </Link>

      <div>
        <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
          Loan History
        </h1>
        <p className="text-text-muted">
          View prior notices, questions, and requests.
        </p>
      </div>

      <div className="bg-surface border border-border rounded-lg p-8">
        <div className="space-y-6">
          {sampleHistory.map((event, idx) => (
            <div key={idx} className="flex gap-6">
              {/* Timeline Marker */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-lg mb-3">
                  {event.type === 'notice' && '📄'}
                  {event.type === 'question' && '❓'}
                  {event.type === 'escalation' && '🆘'}
                </div>
                {idx < sampleHistory.length - 1 && (
                  <div className="w-0.5 h-12 bg-border" />
                )}
              </div>

              {/* Event Content */}
              <div className="flex-1 pb-6 border-b border-border last:border-0">
                <p className="text-text-muted text-sm mb-2">{event.date}</p>
                <div className="bg-elevated rounded-lg p-4">
                  <h3 className="text-text-primary font-semibold mb-1">{event.title}</h3>
                  <p className="text-text-muted text-sm mb-3">{event.description}</p>
                  {event.reference && (
                    <Link
                      href={
                        event.type === 'notice'
                          ? '/borrower/notice/NT-7821'
                          : event.type === 'question'
                            ? '/borrower/ask'
                            : '/borrower/escalate'
                      }
                    >
                      <p className="text-accent text-sm font-medium hover:underline cursor-pointer">
                        {event.reference} →
                      </p>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* No older history message */}
      <div className="bg-info/10 border border-info rounded-lg p-4 text-center">
        <p className="text-text-muted text-sm">
          This is your loan history for the past 12 months. Older records are archived.
        </p>
      </div>
    </div>
  );
}
