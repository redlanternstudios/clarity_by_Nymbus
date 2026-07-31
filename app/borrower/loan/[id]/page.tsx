'use client';

import Link from 'next/link';
import { mockLoan } from '@/lib/data';

export default function LoanDetail() {
  const paymentIncrease = mockLoan.currentPayment - mockLoan.previousPayment;

  return (
    <div className="space-y-6">
      {/* Header with back link */}
      <Link href="/borrower" className="text-accent text-sm mb-4 inline-block">
        ← Back to Home
      </Link>

      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
            Loan Details
          </h1>
          <p className="text-text-muted">{mockLoan.borrowerName}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-text-muted mb-1">Reference #</p>
          <p className="font-mono text-text-primary">RQ-3782-7791</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Loan Information Card */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-text-primary font-semibold mb-6">Loan Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-text-muted text-sm mb-1">Loan ID</p>
              <p className="text-text-primary font-mono">{mockLoan.id}</p>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Property</p>
              <p className="text-text-primary">
                {mockLoan.address}
                <br />
                {mockLoan.city}, {mockLoan.state} {mockLoan.zip}
              </p>
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
          </div>
        </div>

        {/* Payment Details Card */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-text-primary font-semibold mb-6">Payment Details</h2>
          <div className="space-y-4">
            <div>
              <p className="text-text-muted text-sm mb-1">Previous Monthly Payment</p>
              <p className="text-2xl font-bold text-text-primary">${mockLoan.previousPayment.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Current Monthly Payment</p>
              <p className="text-2xl font-bold text-text-primary">${mockLoan.currentPayment.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Monthly Increase</p>
              <p className="text-xl font-bold text-warning">+${paymentIncrease.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Next Due Date</p>
              <p className="text-text-primary">{mockLoan.nextDueDate}</p>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Payment-Change Effective Date</p>
              <p className="text-text-primary">{mockLoan.effectiveDate}</p>
            </div>
          </div>
        </div>

        {/* Escrow Details Card */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-text-primary font-semibold mb-6">Escrow Details</h2>
          <div className="space-y-4">
            <div>
              <p className="text-text-muted text-sm mb-1">Escrow Balance</p>
              <p className="text-2xl font-bold text-text-primary">$2,460</p>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Escrow Shortage</p>
              <p className="text-lg font-bold text-warning">$264</p>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Principal Balance</p>
              <p className="text-text-primary font-semibold">${mockLoan.principalBalance.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-text-muted text-sm mb-1">Interest Rate</p>
              <p className="text-text-primary font-semibold">{mockLoan.interestRate}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Change Breakdown */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <h2 className="text-text-primary font-semibold mb-6">Payment Change Breakdown</h2>
        <p className="text-text-muted text-sm mb-6">
          Details of what changed and how your new payment was calculated.
        </p>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-elevated rounded-lg p-4 border-l-4 border-success">
            <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center mb-3">
              <span className="text-lg">🏠</span>
            </div>
            <p className="text-text-muted text-sm mb-1">Property Tax Adjustment</p>
            <p className="text-2xl font-bold text-success">+$42</p>
            <p className="text-text-muted text-xs mt-2">Annual property taxes have increased.</p>
          </div>

          <div className="bg-elevated rounded-lg p-4 border-l-4 border-info">
            <div className="w-10 h-10 rounded-full bg-info/20 flex items-center justify-center mb-3">
              <span className="text-lg">🛡️</span>
            </div>
            <p className="text-text-muted text-sm mb-1">Homeowners Insurance Adjustment</p>
            <p className="text-2xl font-bold text-info">+$23</p>
            <p className="text-text-muted text-xs mt-2">Annual homeowners insurance premium has increased.</p>
          </div>

          <div className="bg-elevated rounded-lg p-4 border-l-4 border-warning">
            <div className="w-10 h-10 rounded-full bg-warning/20 flex items-center justify-center mb-3">
              <span className="text-lg">💰</span>
            </div>
            <p className="text-text-muted text-sm mb-1">Escrow Shortage Repayment</p>
            <p className="text-2xl font-bold text-warning">+$22</p>
            <p className="text-text-muted text-xs mt-2">Repayment of escrow shortage.</p>
          </div>

          <div className="bg-elevated rounded-lg p-4 border-l-4 border-accent">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-3">
              <span className="text-lg">📈</span>
            </div>
            <p className="text-text-muted text-sm mb-1">Total Monthly Increase</p>
            <p className="text-2xl font-bold text-accent">+$87</p>
            <p className="text-text-muted text-xs mt-2">Your new payment starting {mockLoan.effectiveDate}.</p>
          </div>
        </div>

        {/* Calculation breakdown */}
        <div className="bg-elevated rounded-lg p-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-text-muted">Previous total monthly payment</span>
              <span className="text-text-primary font-mono">${mockLoan.previousPayment.toLocaleString()}</span>
            </div>
            <div className="border-t border-border pt-3 mt-3">
              <div className="flex justify-between mb-2">
                <span className="text-text-muted">Property tax adjustment</span>
                <span className="text-text-primary">+$42</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-text-muted">Insurance adjustment</span>
                <span className="text-text-primary">+$23</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-text-muted">Escrow shortage repayment</span>
                <span className="text-text-primary">+$22</span>
              </div>
            </div>
            <div className="border-t border-border pt-3 mt-3 flex justify-between">
              <span className="text-text-primary font-semibold">New total monthly payment</span>
              <span className="text-2xl font-bold text-text-primary">${mockLoan.currentPayment.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center text-text-muted text-xs border-t border-border pt-6">
        <p>This information is for informational purposes only and is not a payoff quote.</p>
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <Link href="/borrower/notice/NT-7821" className="text-accent text-sm">
          View Notice →
        </Link>
        <Link href="/borrower/ask" className="text-accent text-sm">
          Ask a Question →
        </Link>
      </div>
    </div>
  );
}
