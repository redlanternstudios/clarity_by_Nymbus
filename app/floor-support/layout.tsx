'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ClarityLogo } from '@/components/clarity-logo';

const navItems = [
  { href: '/floor-support', label: 'Home' },
  { href: '/servicing/cases', label: 'Review Queue' },
  { href: '/servicing/routing', label: 'Routing Summary' },
  { href: '/borrower/escalate', label: 'Borrower Escalations' },
  { href: '/borrower/history', label: 'History' },
];

export default function FloorSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border bg-shell-sidebar transition-transform md:static md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link href="/" className="block border-b border-border p-6">
          <ClarityLogo width={150} priority />
          <p className="mt-2 text-sm text-text-muted">DEMO ROLE • Floor Support</p>
        </Link>

        <nav className="flex-1 p-4">
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-text-muted">
            Floor Support
          </p>
          <div className="space-y-1">
            {navItems.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== '/floor-support' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    active
                      ? 'bg-accent text-background font-medium'
                      : 'text-text-primary hover:bg-elevated'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-border p-4 text-xs text-text-muted">
          <p className="mb-1">Maya Thompson</p>
          <p>Floor Support Operations</p>
        </div>
      </aside>

      <button
        type="button"
        onClick={() => setSidebarOpen((open) => !open)}
        className="fixed bottom-4 left-4 z-50 rounded-full bg-accent p-3 text-background shadow-lg md:hidden"
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation overlay"
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
