'use client';

import { mockLoan } from '@/lib/data';
import { useState } from 'react';
import Link from 'next/link';

export default function Escalation() {
  const [submitted, setSubmitted] = useState(false);
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
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-serif font-bold text-text-primary mb-8">
          Escalation Confirmation
        </h1>

        <div className="bg-surface border border-border rounded-lg p-12 text-center">
          <div className="text-5xl mb-6">✓</div>
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            Request submitted
          </h2>
          <p className="text-text-muted mb-8">
            Your request was sent to customer support.
          </p>

          <div className="space-y-4 mb-8 text-left">
            <div className="flex justify-between py-3 border-b border-border">
              <p className="text-text-muted">Reference</p>
              <p className="font-semibold text-text-primary">CL-1047</p>
            </div>
            <div className="flex justify-between py-3 border-b border-border">
              <p className="text-text-muted">Loan</p>
              <p className="font-semibold text-text-primary">{mockLoan.id}</p>
            </div>
            <div className="py-3">
              <p className="text-text-muted mb-2">Next step</p>
              <p className="text-text-primary">
                A support specialist will review the request.
              </p>
            </div>
          </div>

          <Link href="/borrower">
            <button className="bg-accent hover:bg-accent-dark text-background font-semibold py-2 px-6 rounded transition-colors">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-text-primary mb-8">
        Request human support
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Reason */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <label htmlFor="reason" className="block text-sm font-semibold text-text-primary mb-3">
            Reason
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full bg-elevated border border-border rounded px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          >
            <option value="">Select a reason...</option>
            <option value="I am confused about the payment-change notice">
              I am confused about the payment-change notice
            </option>
            <option value="I need help with payment options">
              I need help with payment options
            </option>
            <option value="I want to discuss the escrow shortage">
              I want to discuss the escrow shortage
            </option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Additional Note */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <label htmlFor="note" className="block text-sm font-semibold text-text-primary mb-3">
            Additional note (optional)
          </label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Please provide any additional context..."
            rows={5}
            className="w-full bg-elevated border border-border rounded px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent resize-none"
          />
        </div>

        {/* Destination */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <label htmlFor="destination" className="block text-sm font-semibold text-text-primary mb-3">
            Destination
          </label>
          <select
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full bg-elevated border border-border rounded px-4 py-3 text-text-primary focus:outline-none focus:border-accent"
          >
            <option value="Loan customer support">Loan customer support</option>
            <option value="Escrow specialist">Escrow specialist</option>
            <option value="General inquiry">General inquiry</option>
          </select>
          <p className="text-xs text-text-muted mt-2">Reference: {mockLoan.id}</p>
        </div>

        {/* Submit */}
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-accent hover:bg-accent-dark text-background font-semibold py-3 px-6 rounded transition-colors"
          >
            Confirm request
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
