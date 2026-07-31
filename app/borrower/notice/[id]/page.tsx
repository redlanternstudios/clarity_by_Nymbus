'use client';

import Link from 'next/link';
import { mockNotice, mockLoan } from '@/lib/data';

export default function NoticeDetail() {
  return (
    <div className="space-y-6">
      {/* Back link */}
      <Link href="/borrower" className="text-accent text-sm mb-4 inline-block">
        ← Back to Notices
      </Link>

      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
            {mockNotice.title}
          </h1>
          <p className="text-text-muted">
            Notice ID: {mockNotice.id} • Issued: July 18, 2026
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-text-muted mb-1">Reference #</p>
          <p className="font-mono text-text-primary">RQ-3782-7791</p>
        </div>
      </div>

      {/* Notice Details Card */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-text-muted text-sm mb-1">Property</p>
              <p className="text-text-primary">{mockLoan.address}</p>
              <p className="text-text-primary text-sm">{mockLoan.city}, {mockLoan.state} {mockLoan.zip}</p>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Loan Type</p>
              <p className="text-text-primary">{mockLoan.type}</p>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Loan Status</p>
              <div className="inline-block bg-success/20 text-success px-3 py-1 rounded text-sm font-medium">
                {mockLoan.status}
              </div>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Analysis Effective Date</p>
              <p className="text-text-primary">September 1, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Breakdown Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Payment Change */}
        <div className="bg-surface border-l-4 border-accent rounded-lg p-6">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
            <span className="text-2xl">💵</span>
          </div>
          <h2 className="text-text-primary font-semibold mb-2">Payment Change</h2>
          <p className="text-4xl font-bold text-text-primary mb-2">+$87</p>
          <p className="text-text-muted text-sm mb-4">per month</p>
          <p className="text-text-muted text-sm">
            Your new total monthly payment is <strong className="text-text-primary">${mockLoan.currentPayment.toLocaleString()}</strong> starting <strong className="text-text-primary">{mockLoan.effectiveDate}</strong>.
          </p>
        </div>

        {/* Escrow Shortage Repayment */}
        <div className="bg-surface border-l-4 border-warning rounded-lg p-6">
          <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center mb-4">
            <span className="text-2xl">💰</span>
          </div>
          <h2 className="text-text-primary font-semibold mb-2">Escrow Shortage Repayment</h2>
          <p className="text-4xl font-bold text-warning mb-2">+$22</p>
          <p className="text-text-muted text-sm mb-4">per month</p>
          <p className="text-text-muted text-sm">
            You have a shortage in your escrow account. We&apos;ll add <strong className="text-text-primary">$22</strong> per month to repay it.
          </p>
        </div>

        {/* Tax Adjustment */}
        <div className="bg-surface border-l-4 border-success rounded-lg p-6">
          <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center mb-4">
            <span className="text-2xl">🏠</span>
          </div>
          <h2 className="text-text-primary font-semibold mb-2">Tax Adjustment</h2>
          <p className="text-4xl font-bold text-success mb-2">+$42</p>
          <p className="text-text-muted text-sm mb-4">per month</p>
          <p className="text-text-muted text-sm">
            Annual property taxes have increased. We adjusted your monthly escrow payment accordingly.
          </p>
        </div>

        {/* Insurance Adjustment */}
        <div className="bg-surface border-l-4 border-info rounded-lg p-6">
          <div className="w-12 h-12 rounded-full bg-info/20 flex items-center justify-center mb-4">
            <span className="text-2xl">🛡️</span>
          </div>
          <h2 className="text-text-primary font-semibold mb-2">Insurance Adjustment</h2>
          <p className="text-4xl font-bold text-info mb-2">+$23</p>
          <p className="text-text-muted text-sm mb-4">per month</p>
          <p className="text-text-muted text-sm">
            Annual homeowners insurance premium has increased. We adjusted your monthly escrow payment accordingly.
          </p>
        </div>
      </div>

      {/* What This Means For You */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <h2 className="text-text-primary font-semibold mb-4">What this means for you</h2>
        <div className="space-y-4">
          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-info/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-info">
              1
            </div>
            <div>
              <p className="text-text-primary font-medium">Starting {mockLoan.effectiveDate}, your new total monthly payment will be <strong>${mockLoan.currentPayment.toLocaleString()}</strong></p>
              <p className="text-text-muted text-sm mt-1">The extra $87 per month is for the changes outlined above.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-info/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-info">
              2
            </div>
            <div>
              <p className="text-text-primary font-medium">The extra $22 per month will repay the escrow shortage</p>
              <p className="text-text-muted text-sm mt-1">We&apos;ll continue to review your escrow account each year to keep it on track.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-8 h-8 rounded-full bg-info/20 flex items-center justify-center flex-shrink-0 text-sm font-bold text-info">
              3
            </div>
            <div>
              <p className="text-text-primary font-medium">Your property taxes and insurance increased</p>
              <p className="text-text-muted text-sm mt-1">These changes are beyond our control but we pass them to you directly through your escrow payment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Questions Section */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <h2 className="text-text-primary font-semibold mb-4">Questions?</h2>
        <p className="text-text-muted text-sm mb-4">
          If you have any questions about this notice or your payment change, you can ask Clarity or request help.
        </p>
        <div className="flex gap-4">
          <Link href="/borrower/ask" className="bg-accent hover:bg-accent-dark text-background font-medium py-2 px-4 rounded transition-colors">
            Ask Clarity
          </Link>
          <Link href="/borrower/escalate" className="bg-accent/10 hover:bg-accent/20 text-accent font-medium py-2 px-4 rounded transition-colors">
            Request Help
          </Link>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center text-text-muted text-xs border-t border-border pt-6">
        <p>This is a read-only notice. No action is required from you.</p>
      </div>
    </div>
  );
}
