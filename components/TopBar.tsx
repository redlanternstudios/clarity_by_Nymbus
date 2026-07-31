'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Search, Bell, HelpCircle, ChevronDown } from 'lucide-react';

const ROLES = ['Borrower', 'Servicing Agent', 'Floor Support', 'Leadership'];

export function ClarityMark({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="clarityMarkGradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5a8dee" />
          <stop offset="100%" stopColor="#7fd6d0" />
        </linearGradient>
      </defs>
      <path
        d="M22 6a11 11 0 1 0 0 20 11 11 0 0 1 0-20Z"
        fill="url(#clarityMarkGradient)"
      />
      <circle cx="24" cy="8" r="1.4" fill="#ffffff" />
    </svg>
  );
}

export function ClarityWordmark({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const titleSize = size === 'lg' ? 'text-4xl' : size === 'sm' ? 'text-lg' : 'text-2xl';
  const markSize = size === 'lg' ? 40 : size === 'sm' ? 24 : 32;
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <ClarityMark size={markSize} />
      <div className="leading-tight">
        <div className={`font-bold text-text-primary ${titleSize}`}>Clarity</div>
        <div className="text-xs font-medium text-accent-cyan -mt-1">by Nymbus</div>
      </div>
    </Link>
  );
}

type TopBarProps = {
  role?: string;
  variant?: 'dropdown' | 'tabs';
  onRoleChange?: (role: string) => void;
};

export default function TopBar({ role = 'Borrower', variant = 'dropdown', onRoleChange }: TopBarProps) {
  const [roleOpen, setRoleOpen] = useState(false);

  return (
    <header className="flex items-center justify-between gap-4 bg-surface border-b border-border px-6 py-3 relative z-20">
      <ClarityWordmark size="sm" />

      {variant === 'tabs' ? (
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs text-text-muted">Role (Prototype)</span>
          <div className="flex items-center gap-1 bg-elevated border border-border rounded-lg p-1">
            {ROLES.map((r) => (
              <button
                key={r}
                onClick={() => onRoleChange?.(r)}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  r === role
                    ? 'bg-accent text-background font-medium'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative shrink-0">
          <button
            onClick={() => setRoleOpen((v) => !v)}
            className="flex items-center gap-2 text-sm text-text-muted bg-elevated border border-border rounded px-3 py-1.5 hover:border-accent transition-colors"
          >
            <span className="text-xs">Role (Demo)</span>
            <span className="text-text-primary font-medium">{role}</span>
            <ChevronDown size={14} />
          </button>
          {roleOpen && (
            <div className="absolute top-full mt-1 left-0 bg-elevated border border-border rounded shadow-lg min-w-[160px] py-1">
              {ROLES.map((r) => (
                <div
                  key={r}
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-surface ${
                    r === role ? 'text-accent' : 'text-text-primary'
                  }`}
                >
                  {r}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex-1 max-w-md relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
        <input
          type="text"
          placeholder="Search Clarity..."
          className="w-full pl-9 pr-4 py-1.5 bg-background border border-border rounded text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent"
        />
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <button
          aria-label="Notifications"
          className="relative w-9 h-9 rounded-full bg-elevated border border-border flex items-center justify-center text-text-muted hover:border-accent transition-colors"
        >
          <Bell size={16} />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-danger text-[10px] text-text-primary flex items-center justify-center">
            3
          </span>
        </button>
        <button
          aria-label="Help"
          className="w-9 h-9 rounded-full bg-elevated border border-border flex items-center justify-center text-text-muted hover:border-accent transition-colors"
        >
          <HelpCircle size={16} />
        </button>
        <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-background font-bold text-sm relative">
          MT
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-success border-2 border-surface" />
        </div>
      </div>
    </header>
  );
}
