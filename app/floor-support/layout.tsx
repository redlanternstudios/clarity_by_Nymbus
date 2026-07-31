'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ClarityLogo } from '@/components/clarity-logo';

export default function FloorSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed md:static w-64 bg-shell-sidebar border-r border-border flex flex-col z-40 transition-transform md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link href="/" className="p-6 border-b border-border block">
          <ClarityLogo width={150} priority />
          <p className="text-sm text-text-muted mt-2">DEMO ROLE • Floor Support</p>
        </Link>

        <div className="flex-1 p-4 space-y-2">
          <Link
            href="/floor-support"
            className="block px-4 py-3 rounded bg-accent text-background font-medium text-sm"
          >
            Home
          </Link>
        </div>

        <div className="p-4 border-t border-border text-xs text-text-muted">
          <p className="mb-2">Maya Thompson</p>
          <p className="text-xs">Floor Support Operations</p>
        </div>
      </aside>

      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed md:hidden bottom-4 left-4 z-50 bg-accent text-background p-3 rounded-full shadow-lg"
      >
        ☰
      </button>

      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main>

      {sidebarOpen && (
        <div
          className="fixed md:hidden inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
