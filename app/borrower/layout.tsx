'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mockLoan } from '@/lib/data';
import { useState } from 'react';
import TopBar from '@/components/TopBar';

export default function BorrowerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { href: '/borrower', label: 'Home' },
    { href: '/borrower/loan/LN-20481', label: 'Loan Details' },
    { href: '/borrower/notice/NT-7821', label: 'Notices' },
    { href: '/borrower/ask', label: 'Ask Clarity' },
    { href: '/borrower/escalate', label: 'Get Help' },
    { href: '/borrower/history', label: 'History' },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed md:static w-64 bg-elevated border-r border-border flex flex-col z-40 transition-transform md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-border">
          <p className="text-xs uppercase tracking-wide text-text-muted">Borrower</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`block px-3 py-2.5 rounded transition-colors text-sm border-l-2 ${
                  isActive
                    ? 'bg-accent/15 text-text-primary font-medium border-accent'
                    : 'text-text-primary hover:bg-surface border-transparent'
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
        <TopBar role="Borrower" />
        <div className="flex-1 overflow-auto bg-background p-6">{children}</div>
      </main>
    </div>
  );
}
