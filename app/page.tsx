'use client';

import Link from 'next/link';
import { useState } from 'react';
import TopBar from '@/components/TopBar';
import { User, Headphones, Compass, BarChart3, Home as HomeIcon, FileText, Info } from 'lucide-react';

const NAV_GROUPS = [
  {
    label: 'Borrower',
    items: [{ href: '/', label: 'Home', icon: HomeIcon, active: true }],
  },
  {
    label: 'Servicing',
    items: [{ href: '/servicing', label: 'Servicing Home', icon: Compass, active: false }],
  },
  {
    label: 'Documentation',
    items: [{ href: '/docs', label: 'Documents', icon: FileText, active: false }],
  },
];

const ROLE_CARDS = [
  {
    icon: User,
    iconBg: 'bg-blue-600',
    name: 'Borrower',
    description: 'View your loan overview, payment activity, notices, and recommended next steps.',
    href: '/borrower',
    cta: 'Enter as Borrower',
    ctaClass: 'bg-blue-600 hover:bg-blue-500',
  },
  {
    icon: Headphones,
    iconBg: 'bg-teal-600',
    name: 'Servicing Agent',
    description: 'Review loan information, manage borrower inquiries, track resolution, and follow guided actions.',
    href: '/servicing',
    cta: 'Enter as Servicing Agent',
    ctaClass: 'bg-blue-600 hover:bg-blue-500',
  },
  {
    icon: Compass,
    iconBg: 'bg-purple-600',
    name: 'Floor Support',
    description: 'Access real-time guidance, escalations, and routing insights to support borrowers and agents.',
    href: '/floor-support',
    cta: 'Enter as Floor Support',
    ctaClass: 'bg-blue-600 hover:bg-blue-500',
  },
  {
    icon: BarChart3,
    iconBg: 'bg-blue-700',
    name: 'Leadership',
    description: 'Explore performance insights, trends, and operational intelligence across the organization.',
    href: '/leadership',
    cta: 'Enter as Leadership',
    ctaClass: 'bg-blue-600 hover:bg-blue-500',
  },
];

export default function GlobalShell() {
  const [role, setRole] = useState('Borrower');

  return (
    <div className="flex h-screen bg-background">
      {/* Grouped left sidebar */}
      <aside className="w-64 bg-elevated border-r border-border flex flex-col p-4 gap-6 shrink-0 overflow-y-auto">
        {NAV_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="px-2 mb-1 text-xs font-semibold uppercase tracking-wide text-text-muted">
              {group.label}
            </p>
            <div className="flex flex-col gap-1">
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 rounded px-2.5 py-2 text-sm transition-colors ${
                    item.active
                      ? 'bg-accent text-background font-medium'
                      : 'text-text-primary hover:bg-surface'
                  }`}
                >
                  <item.icon size={16} />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </aside>

      {/* Main column */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar variant="tabs" role={role} onRoleChange={setRole} />

        <div className="flex-1 overflow-auto flex flex-col items-center px-6 py-16">
          <h1 className="text-4xl font-bold text-text-primary mb-3 text-center">
            Welcome to <span className="bg-gradient-to-r from-accent to-accent-cyan bg-clip-text text-transparent">Clarity</span> by Nymbus
          </h1>
          <p className="text-text-muted mb-10 text-center max-w-2xl">
            Clarity is a read-only guidance and routing intelligence layer that helps you understand,
            navigate, and take action with confidence.
          </p>

          <div className="w-full max-w-5xl">
            <h2 className="text-xl font-semibold text-text-primary mb-4">Select your role to continue</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {ROLE_CARDS.map((r) => (
                <Link key={r.name} href={r.href} className="h-full">
                  <div className="bg-surface border border-border rounded-lg p-6 h-full flex flex-col hover:border-accent transition-colors">
                    <div className={`w-11 h-11 rounded-full ${r.iconBg} flex items-center justify-center mb-4 text-white`}>
                      <r.icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">{r.name}</h3>
                    <p className="text-sm text-text-muted mb-6 flex-1">{r.description}</p>
                    <span
                      className={`inline-flex items-center justify-center rounded px-4 py-2 text-sm font-semibold text-white transition-colors ${r.ctaClass}`}
                    >
                      {r.cta}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 max-w-5xl w-full">
            <div className="flex items-start gap-3 bg-surface border border-border rounded-lg p-4">
              <Info size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-text-primary">Prototype Only</p>
                <p className="text-xs text-text-muted mt-0.5">
                  Clarity by Nymbus is a prototype for evaluation purposes only. The data displayed is
                  mock data and does not represent real customers or real loan information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
