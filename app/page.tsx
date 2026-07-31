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
                <h3 className="text-2xl font-serif text-text-primary mb-3">
                  Borrower
                </h3>
                <p className="text-text-muted mb-4">
                  View your loan details, notices, and ask questions about your
                  account.
                </p>
              </div>
              <button className="bg-accent hover:bg-accent-dark text-background font-semibold py-2 px-6 rounded transition-colors">
                Open Borrower
              </button>
            </div>
          </Link>

          {/* Servicing Agent Card */}
          <div className="bg-surface border border-border rounded-lg p-8 opacity-50 cursor-not-allowed h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif text-text-primary mb-3">
                Servicing Agent
              </h3>
              <p className="text-text-muted mb-4">
                Manage cases, route escalations, and monitor system health.
              </p>
            </div>
            <button
              disabled
              className="bg-accent text-background font-semibold py-2 px-6 rounded opacity-50 cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>

          {/* Floor Support Card */}
          <div className="bg-surface border border-border rounded-lg p-8 opacity-50 cursor-not-allowed h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif text-text-primary mb-3">
                Floor Support
              </h3>
              <p className="text-text-muted mb-4">
                Review escalations and provide guidance on complex cases.
              </p>
            </div>
            <button
              disabled
              className="bg-accent text-background font-semibold py-2 px-6 rounded opacity-50 cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>

          {/* Leadership Card */}
          <div className="bg-surface border border-border rounded-lg p-8 opacity-50 cursor-not-allowed h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif text-text-primary mb-3">
                Leadership
              </h3>
              <p className="text-text-muted mb-4">
                Monitor KPIs, trends, and system performance across all roles.
              </p>
            </div>
            <button
              disabled
              className="bg-accent text-background font-semibold py-2 px-6 rounded opacity-50 cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-center text-text-muted text-sm border-t border-border pt-8">
        <p>ENVIRONMENT • Mock data only • No production connections</p>
      </div>
    </div>
  );
}
