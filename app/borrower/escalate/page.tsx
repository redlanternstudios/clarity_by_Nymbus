'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Escalation() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    reason: '',
    note: '',
    destination: 'Loan customer support',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/borrower/escalate/confirmed');
  };

  return (
    <div className="space-y-6">
      <Link href="/borrower" className="text-accent text-sm mb-4 inline-block">
        ← Back to Home
      </Link>

      <div>
        <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
          Request Help
        </h1>
        <p className="text-text-muted">
          Tell us what you need help with and add any details. We&apos;ll route your request to the right team.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Reason Section */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4">1. What can we help you with?</h2>
          <select
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full bg-elevated border border-border rounded px-4 py-3 text-text-primary focus:outline-none focus:border-accent mb-4"
          >
            <option value="">Select a reason</option>
            <option value="Payment Change Question">Payment Change Question</option>
            <option value="Escrow Question">Escrow Question</option>
            <option value="Notice Issue">Notice Issue</option>
            <option value="General Assistance">General Assistance</option>
          </select>

          <div className="space-y-2 max-h-48 overflow-y-auto">
            <div className="bg-elevated rounded p-3 border border-border">
              <div className="flex items-start gap-2">
                <span className="text-lg flex-shrink-0">💵</span>
                <div>
                  <p className="text-text-primary font-medium">Payment Change Question</p>
                  <p className="text-text-muted text-xs">Questions about your new payment or payment change details.</p>
                </div>
              </div>
            </div>
            <div className="bg-elevated rounded p-3 border border-border">
              <div className="flex items-start gap-2">
                <span className="text-lg flex-shrink-0">💰</span>
                <div>
                  <p className="text-text-primary font-medium">Escrow Question</p>
                  <p className="text-text-muted text-xs">Questions about your escrow analysis, taxes, or insurance.</p>
                </div>
              </div>
            </div>
            <div className="bg-elevated rounded p-3 border border-border">
              <div className="flex items-start gap-2">
                <span className="text-lg flex-shrink-0">📄</span>
                <div>
                  <p className="text-text-primary font-medium">Notice Issue</p>
                  <p className="text-text-muted text-xs">Questions about a recent notice or communication you received.</p>
                </div>
              </div>
            </div>
            <div className="bg-elevated rounded p-3 border border-border">
              <div className="flex items-start gap-2">
                <span className="text-lg flex-shrink-0">🆘</span>
                <div>
                  <p className="text-text-primary font-medium">General Assistance</p>
                  <p className="text-text-muted text-xs">Something else or general help with your loan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Details Section */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold text-text-primary mb-4">2. Add any details (optional)</h2>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Share any additional information that can help us assist you."
            rows={5}
            className="w-full bg-elevated border border-border rounded px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent resize-none"
          />
          <p className="text-text-muted text-xs mt-2">0/1000</p>
        </div>

        {/* Info Box */}
        <div className="bg-info/10 border border-info rounded-lg p-6">
          <div className="flex gap-3">
            <span className="text-lg flex-shrink-0">ℹ️</span>
            <div>
              <p className="text-info font-medium mb-1">Your request will be securely sent to our system of record and routed to the appropriate team.</p>
              <p className="text-text-muted text-sm">You&apos;ll receive a response as soon as possible.</p>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4">
          <button
            type="submit"
            disabled={!formData.reason}
            className="flex-1 bg-accent hover:bg-accent-dark disabled:opacity-50 disabled:cursor-not-allowed text-background font-semibold py-3 px-6 rounded transition-colors"
          >
            Submit Request
          </button>
          <Link href="/borrower" className="flex-1">
            <button
              type="button"
              className="w-full bg-elevated hover:bg-surface border border-border text-text-primary font-semibold py-3 px-6 rounded transition-colors"
            >
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
