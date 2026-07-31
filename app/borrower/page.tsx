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
      <div className="grid grid-cols-3 gap-6">
        {/* Loan Summary */}
        <Link href="/borrower/loan/LN-20481" className="block">
          <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer h-full flex flex-col justify-between">
            <div>
              <h3 className="text-text-primary font-semibold text-lg mb-6">Loan Summary</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wide mb-2">Loan ID</p>
                  <p className="font-mono text-base text-text-primary font-medium">LN-20481</p>
                </div>
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wide mb-2">Property</p>
                  <p className="text-text-primary text-sm font-medium">1842 Harbor Ridge Drive</p>
                </div>
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wide mb-2">Loan Type</p>
                  <p className="text-text-primary text-sm font-medium">30-Year Fixed Mortgage</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wide mb-2">Loan Status</p>
              <div className="inline-block bg-success/20 text-success px-3 py-1 rounded-md text-xs font-semibold">
                Current
              </div>
            </div>
          </div>
        </Link>

        {/* Payment Change */}
        <Link href="/borrower/notice/NT-7821" className="block">
          <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer h-full flex flex-col justify-between">
            <div>
              <h3 className="text-text-primary font-semibold text-lg mb-6">Payment Change</h3>
              <p className="text-text-muted text-xs uppercase tracking-wide mb-3">Your new monthly payment</p>
              <p className="text-4xl font-bold text-text-primary mb-6">
                ${mockLoan.currentPayment.toLocaleString()}
              </p>
            </div>
            <div className="space-y-3 text-sm border-t border-border pt-4">
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Previous:</span>
                <span className="text-text-primary font-medium">${mockLoan.previousPayment.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Increase:</span>
                <span className="text-warning font-semibold">+${paymentIncrease.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted">Effective Date</span>
                <span className="text-text-primary font-medium">{mockLoan.effectiveDate}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Recent Notice */}
        <Link href="/borrower/notice/NT-7821" className="block">
          <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer h-full flex flex-col justify-between">
            <div>
              <h3 className="text-text-primary font-semibold text-lg mb-6">Recent Notice</h3>
              <p className="text-text-primary font-semibold text-base mb-4">{mockNotice.title}</p>
            </div>
            <div>
              <p className="text-text-muted text-xs uppercase tracking-wide mb-2">Notice ID</p>
              <p className="text-text-primary font-mono text-sm mb-4">NT-7821</p>
              <p className="text-text-muted text-xs uppercase tracking-wide mb-2">Issued</p>
              <p className="text-text-primary text-sm font-medium mb-6">July 18, 2026</p>
              <div className="inline-block bg-warning/20 text-warning px-3 py-1 rounded-md text-xs font-semibold">
                Action recommended
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* What would you like to do? */}
      <div className="mt-8 pt-8 border-t border-border">
        <h2 className="text-2xl font-serif font-bold text-text-primary mb-6">
          What would you like to do?
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <Link href="/borrower/ask">
            <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer flex items-start gap-4 h-full">
              <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 text-2xl">
                💬
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary text-lg mb-2">Ask Clarity</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Get answers about your loan and recent notice.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/borrower/escalate">
            <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer flex items-start gap-4 h-full">
              <div className="w-14 h-14 rounded-full bg-warning/15 flex items-center justify-center flex-shrink-0 text-2xl">
                🆘
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-primary text-lg mb-2">Get Help</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  Need more help? Start a request and we&apos;ll get you to the right team.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Next Step */}
      <Link href="/borrower/notice/NT-7821">
        <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-all cursor-pointer flex items-start gap-4">
          <div className="w-14 h-14 rounded-full bg-info/15 flex items-center justify-center flex-shrink-0 text-2xl">
            🚀
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-text-primary text-lg mb-2">Next Step</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              Review your notice and consider asking a question or requesting help.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
