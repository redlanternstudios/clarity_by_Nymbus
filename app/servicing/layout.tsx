'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function ServicingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { href: '/servicing', label: 'Home', section: 'Servicing' },
    { href: '/servicing/cases', label: 'Cases', section: 'Servicing' },
    { href: '/servicing/trends', label: 'Trends', section: 'Servicing' },
    { href: '/servicing/notice-insights', label: 'Notice Insights', section: 'Servicing' },
    { href: '/servicing/routing-rules', label: 'Routing Rules', section: 'Servicing' },
    { href: '/servicing/copilot', label: 'Copilot', section: 'Servicing' },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed md:static w-64 bg-shell-sidebar border-r border-border flex flex-col z-40 transition-transform md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="p-6 border-b border-border block">
          <h1 className="text-xl font-serif font-bold text-text-primary">
            Clarity
          </h1>
          <p className="text-sm text-text-muted">DEMO ROLE • Servicing</p>
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
          <p className="mb-2">Maya Thompson</p>
          <p className="text-xs">Internal Operations</p>
        </div>
      </aside>

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed md:hidden bottom-4 left-4 z-50 bg-accent text-background p-3 rounded-full shadow-lg"
      >
        ☰
      </button>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed md:hidden inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
