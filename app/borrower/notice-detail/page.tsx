'use client';

import { mockNotice } from '@/lib/data';
import Link from 'next/link';

export default function NoticeDetail() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-text-primary mb-8">
        Notice Detail
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Notice Content */}
        <div className="md:col-span-2">
          <div className="bg-surface border border-border rounded-lg p-6">
            <h3 className="text-sm font-semibold text-accent uppercase mb-4">
              Original notice
            </h3>
            <p className="text-text-primary leading-relaxed">
              {mockNotice.originalContent}
            </p>
          </div>
        </div>

        {/* Right Column - What Changed */}
        <div className="md:col-span-1">
          <div className="bg-surface border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              What changed
            </h3>

            <div className="space-y-4 mb-6 pb-6 border-b border-border">
              <div>
                <p className="text-text-muted text-sm mb-1">Monthly payment</p>
                <p className="text-2xl font-bold text-text-primary">
                  ${mockNotice.monthlyPayment.toLocaleString()}
                </p>
                <p className="text-warning text-sm mt-1">
                  Increase: ${mockNotice.paymentIncrease}
                </p>
              </div>

              <div>
                <p className="text-text-muted text-sm mb-1">Effective date</p>
                <p className="text-lg font-semibold text-text-primary">
                  {mockNotice.effectiveDate}
                </p>
              </div>

              <div>
                <p className="text-text-muted text-sm mb-1">Escrow shortage</p>
                <p className="text-lg font-semibold text-text-primary">
                  ${mockNotice.changeItems.reduce((sum, item) => sum + item.monthlyImpact, 0) - mockNotice.paymentIncrease > 0 ? 264 : 0}
                </p>
              </div>
            </div>

            {/* Detail Cards */}
            <div className="space-y-3 mb-6">
              {mockNotice.changeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-elevated border border-border rounded p-3"
                >
                  <p className="text-sm text-text-muted mb-1">{item.label}</p>
                  <p className="font-semibold text-text-primary">
                    +${item.monthlyImpact}/mo
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <Link href="/borrower/ask-clarity">
                <button className="w-full bg-accent hover:bg-accent-dark text-background font-semibold py-2 px-4 rounded transition-colors">
                  Ask Clarity
                </button>
              </Link>
              <Link href="/borrower/escalation">
                <button className="w-full bg-elevated hover:bg-surface border border-border text-text-primary font-semibold py-2 px-4 rounded transition-colors">
                  Request help
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
