'use client';

import { mockLoan, mockNotice } from '@/lib/data';
import Link from 'next/link';

export default function BorrowerHome() {
  const paymentIncrease = mockLoan.currentPayment - mockLoan.previousPayment;

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-serif font-bold text-text-primary mb-2">
            Welcome back, Maya 👋
          </h1>
          <p className="text-text-muted">
            Here&apos;s what&apos;s happening with your loan.
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-text-muted mb-1">Reference #</p>
          <p className="font-mono text-text-primary">RQ-3782-7791</p>
        </div>
      </div>

      {/* Top 3 Cards in a row */}
      <div className="grid grid-cols-3 gap-4">
        {/* Loan Summary */}
        <Link href="/borrower/loan/LN-20481" className="block">
          <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer">
            <h3 className="text-text-primary font-semibold mb-4">Loan Summary</h3>
            <div className="space-y-3">
              <div>
                <p className="text-text-muted text-sm mb-1">Loan ID</p>
                <p className="font-mono text-text-primary">LN-20481</p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">Property</p>
                <p className="text-text-primary text-sm">1842 Harbor Ridge Drive</p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">Loan Type</p>
                <p className="text-text-primary text-sm">30-Year Fixed Mortgage</p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">Loan Status</p>
                <div className="inline-block bg-success/20 text-success px-2 py-1 rounded text-xs font-medium">
                  Current
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Payment Change */}
        <Link href="/borrower/notice/NT-7821" className="block">
          <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer">
            <h3 className="text-text-primary font-semibold mb-4">Payment Change</h3>
            <p className="text-text-muted text-sm mb-3">Your new monthly payment</p>
            <p className="text-3xl font-bold text-text-primary mb-4">
              ${mockLoan.currentPayment.toLocaleString()}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-muted">Previous:</span>
                <span className="text-text-primary">${mockLoan.previousPayment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Increase:</span>
                <span className="text-warning">+${paymentIncrease.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Effective Date</span>
                <span className="text-text-primary">{mockLoan.effectiveDate}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Recent Notice */}
        <Link href="/borrower/notice/NT-7821" className="block">
          <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer">
            <h3 className="text-text-primary font-semibold mb-4">Recent Notice</h3>
            <p className="text-text-primary font-medium mb-3">{mockNotice.title}</p>
            <p className="text-text-muted text-sm mb-4">NT-7821</p>
            <p className="text-text-muted text-sm mb-4">
              Issued: July 18, 2026
            </p>
            <div className="inline-block bg-warning/20 text-warning px-2 py-1 rounded text-xs font-medium">
              Action recommended
            </div>
          </div>
        </Link>
      </div>

      {/* What would you like to do? */}
      <div>
        <h2 className="text-xl font-semibold text-text-primary mb-4">
          What would you like to do?
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/borrower/ask">
            <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">💬</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary mb-1">Ask Clarity</h3>
                <p className="text-text-muted text-sm">
                  Get answers about your loan and recent notice.
                </p>
                <p className="text-accent text-sm mt-2">→</p>
              </div>
            </div>
          </Link>

          <Link href="/borrower/escalate">
            <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🆘</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary mb-1">Get Help</h3>
                <p className="text-text-muted text-sm">
                  Need more help? Start a request and we&apos;ll get you to the right team.
                </p>
                <p className="text-accent text-sm mt-2">→</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Next Step */}
      <Link href="/borrower/notice/NT-7821">
        <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
            <span className="text-xl">🚀</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-text-primary mb-1">Next Step</h3>
            <p className="text-text-muted text-sm">
              Review your notice and consider asking a question or requesting help.
            </p>
            <p className="text-accent text-sm mt-2">→</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
