'use client';

import { mockLoan, mockNotice } from '@/lib/data';

export default function LoanDetail() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-text-primary mb-8">
        Loan Detail
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Left Column - Loan Data Cards */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-text-muted text-sm mb-2">Principal balance</p>
            <p className="text-2xl font-bold text-text-primary">
              ${mockLoan.principalBalance.toLocaleString()}
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-text-muted text-sm mb-2">Interest rate</p>
            <p className="text-2xl font-bold text-text-primary">
              {mockLoan.interestRate}% Fixed
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-text-muted text-sm mb-2">Current payment</p>
            <p className="text-2xl font-bold text-text-primary">
              ${mockLoan.currentPayment.toLocaleString()}
            </p>
            <p className="text-text-muted text-sm mt-2">
              Effective {mockLoan.effectiveDate}
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-text-muted text-sm mb-2">Next due date</p>
            <p className="text-2xl font-bold text-text-primary">
              {mockLoan.nextDueDate}
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-text-muted text-sm mb-2">Previous payment</p>
            <p className="text-2xl font-bold text-text-primary">
              ${mockLoan.previousPayment.toLocaleString()}
            </p>
          </div>

          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-text-muted text-sm mb-2">Escrow balance</p>
            <p className="text-2xl font-bold text-text-primary">
              ${mockLoan.escrowBalance.toLocaleString()}
            </p>
            <p className="text-warning text-sm mt-2">
              Shortage: ${mockLoan.escrowShortage.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Right Column - Change Breakdown */}
        <div className="md:col-span-1">
          <div className="bg-surface border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Change breakdown
            </h3>
            <div className="space-y-3">
              {mockNotice.changeItems.map((item, idx) => (
                <div key={idx} className="border-b border-border pb-3">
                  <p className="text-sm text-text-muted mb-1">{item.label}</p>
                  <p className="text-lg font-semibold text-text-primary">
                    +${item.monthlyImpact}/mo
                  </p>
                  <p className="text-xs text-text-muted">{item.source}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
