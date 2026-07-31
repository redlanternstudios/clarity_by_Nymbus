'use client';

import Link from 'next/link';

export default function GlobalShell() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-serif font-bold text-text-primary mb-4">
          Clarity by Nymbus
        </h1>
        <p className="text-lg text-text-muted">
          Demonstration environment • fictional data
        </p>
      </div>

      {/* Role Selector */}
      <div className="w-full max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-serif text-text-primary">
            Select your role
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Borrower Card */}
          <Link href="/borrower">
            <div className="bg-surface border border-border rounded-lg p-8 hover:border-accent transition-colors cursor-pointer h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-2xl font-serif text-text-primary mb-3">
                  Borrower
                </h3>
                <p className="text-text-muted mb-4">
                  View your loan details, notices, and ask questions about your account.
                </p>
              </div>
              <button className="bg-accent hover:bg-accent-dark text-background font-semibold py-2 px-6 rounded transition-colors">
                Enter as Borrower
              </button>
            </div>
          </Link>

          {/* Servicing Agent Card */}
          <Link href="/servicing">
            <div className="bg-surface border border-border rounded-lg p-8 hover:border-accent transition-colors cursor-pointer h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-accent-cyan/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">🎧</span>
                </div>
                <h3 className="text-2xl font-serif text-text-primary mb-3">
                  Servicing Agent
                </h3>
                <p className="text-text-muted mb-4">
                  Review loan information, manage borrower inquiries, track resolution, and follow guided actions.
                </p>
              </div>
              <button className="bg-accent hover:bg-accent-dark text-background font-semibold py-2 px-6 rounded transition-colors">
                Enter as Servicing Agent
              </button>
            </div>
          </Link>

          {/* Floor Support Card */}
          <Link href="/floor-support">
            <div className="bg-surface border border-border rounded-lg p-8 hover:border-accent transition-colors cursor-pointer h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-2xl font-serif text-text-primary mb-3">
                  Floor Support
                </h3>
                <p className="text-text-muted mb-4">
                  Access real-time guidance, escalations, and routing insights to support borrowers and agents.
                </p>
              </div>
              <button className="bg-accent hover:bg-accent-dark text-background font-semibold py-2 px-6 rounded transition-colors">
                Enter as Floor Support
              </button>
            </div>
          </Link>

          {/* Leadership Card */}
          <Link href="/leadership">
            <div className="bg-surface border border-border rounded-lg p-8 hover:border-accent transition-colors cursor-pointer h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-info/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-serif text-text-primary mb-3">
                  Leadership
                </h3>
                <p className="text-text-muted mb-4">
                  Explore performance insights, trends, and operational intelligence across the organization.
                </p>
              </div>
              <button className="bg-accent hover:bg-accent-dark text-background font-semibold py-2 px-6 rounded transition-colors">
                Enter as Leadership
              </button>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-text-muted text-sm border-t border-border pt-8">
        <p>ENVIRONMENT • Mock data only • No production connections</p>
      </div>
    </div>
  );
}
