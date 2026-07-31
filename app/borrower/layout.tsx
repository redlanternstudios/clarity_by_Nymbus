'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mockLoan } from '@/lib/data';
import { useState } from 'react';
import { ClarityLogo } from '@/components/clarity-logo';

export default function BorrowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { href: '/borrower', label: 'Home' },
    { href: '/borrower/loan/LN-20481', label: 'Loan Detail' },
    { href: '/borrower/notice/NT-7821', label: 'Notice Detail' },
    { href: '/borrower/ask', label: 'Ask Clarity' },
    { href: '/borrower/escalate', label: 'Request Help' },
    { href: '/borrower/history', label: 'Loan History' },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed md:static w-64 bg-surface border-r border-border flex flex-col z-40 transition-transform md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="p-6 border-b border-border block">
          <ClarityLogo width={150} priority />
          <p className="text-sm text-text-muted mt-2">DEMO ROLE • Borrower</p>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`block px-4 py-3 rounded transition-colors text-sm ${
                  isActive
                    ? 'bg-accent text-background font-medium'
                    : 'text-text-primary hover:bg-elevated'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border text-xs text-text-muted">
          <p className="mb-2">
            {mockLoan.borrowerName}
            <br />
            {mockLoan.id}
          </p>
          <p className="text-xs">
            {mockLoan.address}
            <br />
            {mockLoan.city}, {mockLoan.state} {mockLoan.zip}
          </p>
        </div>
      </aside>

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed md:hidden bottom-4 left-4 z-50 bg-accent text-background p-3 rounded-full shadow-lg"
      >
        ☰
      </button>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed md:hidden inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-surface border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="hidden md:block">
            <ClarityLogo width={120} />
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-background border border-border rounded text-text-primary placeholder-text-muted focus:outline-none focus:border-accent"
            />
            <div className="w-10 h-10 rounded bg-accent flex items-center justify-center text-background font-bold">
              MT
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto bg-background p-6">{children}</div>
      </main>
    </div>
  );
}
