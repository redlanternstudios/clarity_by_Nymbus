'use client';

import { mockLoan, mockNotice } from '@/lib/data';
import Link from 'next/link';

export default function BorrowerHome() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-text-primary mb-8">
        Borrower Home
      </h1>

      <div className="space-y-6">
        {/* Payment Change Card */}
        <Link href="/borrower/notice/NT-7821" className="block">
          <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors cursor-pointer">
            <div className="mb-2">
              <p className="text-sm font-semibold text-accent uppercase">
                Payment change
              </p>
            </div>
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-4xl font-bold text-text-primary">
                  ${mockLoan.currentPayment.toLocaleString()}
                </p>
                <p className="text-text-muted text-sm">
                  Current payment, effective {mockLoan.effectiveDate}
                </p>
              </div>
              <p className="text-xl text-warning">
                +${(mockLoan.currentPayment - mockLoan.previousPayment).toLocaleString()}
              </p>
            </div>
          </div>
        </Link>

        {/* Loan Summary Card */}
        <Link href="/borrower/loan/LN-20481" className="block">
          <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors cursor-pointer">
            <p className="text-sm font-semibold text-accent uppercase mb-4">
              Loan summary
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-text-muted text-sm mb-1">Principal</p>
                <p className="text-lg font-semibold text-text-primary">
                  ${mockLoan.principalBalance.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">Rate</p>
                <p className="text-lg font-semibold text-text-primary">
                  {mockLoan.interestRate}%
                </p>
              </div>
              <div>
                <p className="text-text-muted text-sm mb-1">Next due</p>
                <p className="text-lg font-semibold text-text-primary">
                  {mockLoan.nextDueDate.split(' ')[0]}
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* Recent Notice Card */}
        <Link href="/borrower/notice/NT-7821" className="block">
          <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors cursor-pointer">
            <p className="text-sm font-semibold text-accent uppercase mb-4">
              Recent notice
            </p>
            <p className="text-text-primary font-medium">{mockNotice.title}</p>
            <p className="text-text-muted text-sm mt-2">{mockNotice.id}</p>
          </div>
        </Link>

        {/* Next Step Card */}
        <Link href="/borrower/ask" className="block">
          <div className="bg-surface border border-border rounded-lg p-6 hover:border-accent transition-colors cursor-pointer">
            <p className="text-sm font-semibold text-accent uppercase mb-4">
              Next step
            </p>
            <p className="text-text-primary mb-4">
              Have questions? Get clarity on your loan changes.
            </p>
            <button className="inline-block bg-accent hover:bg-accent-dark text-background font-semibold py-2 px-4 rounded transition-colors">
              Ask Clarity →
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
