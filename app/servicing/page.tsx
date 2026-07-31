'use client';

import Link from 'next/link';

export default function ServicingHome() {
  const kpis = [
    { label: 'Open cases', value: '47', icon: '📁' },
    { label: 'Routed cases', value: '31', icon: '📤' },
    { label: 'Escalated', value: '6', icon: '⚠️' },
    { label: 'Launch health', value: 'Stable', icon: '✓' },
  ];

  const trends = [
    { question: 'Why did my payment increase?', volume: 18 },
    { question: 'What is an escrow shortage?', volume: 11 },
    { question: 'When does the new payment begin?', volume: 9 },
    { question: 'Can I pay the shortage at once?', volume: 7 },
    { question: 'What are escrow taxes?', volume: 5 },
  ];

  const recentCases = [
    { id: 'CL-1047', category: 'Payment Change Explanation', owner: 'Jordan Lee', confidence: '91%', status: 'Routing review' },
    { id: 'CL-1048', category: 'Payment Not Posting', owner: 'Sarah Rivera', confidence: '86%', status: 'Routing review' },
    { id: 'CL-1049', category: 'Account Update Request', owner: 'Devon Parker', confidence: '94%', status: 'Routing review' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div>
        <h1 className="text-4xl font-serif font-bold text-text-primary mb-2">
          Welcome back, Maya 👋
        </h1>
        <p className="text-text-muted">
          Here&apos;s what&apos;s happening with servicing.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-surface border border-border rounded-lg p-6">
            <div className="mb-4">
              <p className="text-text-muted text-sm">{kpi.label}</p>
            </div>
            <p className="text-3xl font-bold text-text-primary">{kpi.value}</p>
          </div>
        ))}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Question Trends */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📊</span>
            <h2 className="text-text-primary font-semibold">Question trends</h2>
          </div>
          <p className="text-text-muted text-sm mb-4">Top question categories by volume</p>
          <div className="space-y-2">
            {trends.map((trend, idx) => (
              <div key={idx} className="flex justify-between items-start">
                <span className="text-text-primary text-sm flex-1">{trend.question}</span>
                <div className="w-32 h-1 bg-elevated rounded-full overflow-hidden ml-4">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${(trend.volume / 18) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Link href="/servicing/trends" className="text-accent text-sm mt-4 inline-block">
            View all trends →
          </Link>
        </div>

        {/* Case Queue Preview */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">📋</span>
            <h2 className="text-text-primary font-semibold">Case queue preview</h2>
          </div>
          <p className="text-text-muted text-sm mb-4">Recent cases in your queue</p>
          <div className="space-y-3">
            {recentCases.map((caseItem) => (
              <Link href={`/servicing/cases/${caseItem.id}`} key={caseItem.id}>
                <div className="bg-elevated rounded p-3 hover:border-l-2 hover:border-accent cursor-pointer">
                  <p className="font-mono text-accent text-sm">{caseItem.id}</p>
                  <p className="text-text-primary text-sm font-medium mb-1">{caseItem.category}</p>
                  <div className="flex justify-between items-center text-xs text-text-muted">
                    <span>Owner: {caseItem.owner}</span>
                    <span className="text-success">{caseItem.confidence}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/servicing/cases" className="text-accent text-sm mt-4 inline-block">
            View all cases →
          </Link>
        </div>

        {/* Low-confidence Alerts */}
        <div className="bg-surface border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">⚠️</span>
            <h2 className="text-text-primary font-semibold">Low-confidence alerts</h2>
          </div>
          <p className="text-text-muted text-sm mb-4">Cases needing review</p>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="text-2xl mb-2">✓</p>
            <p className="text-text-primary font-medium">No low-confidence alerts</p>
            <p className="text-text-muted text-sm mt-2">
              Great job! All cases are within confidence thresholds.
            </p>
          </div>
          <Link href="/servicing" className="text-accent text-sm mt-4 inline-block">
            View all alerts →
          </Link>
        </div>
      </div>

      {/* Routing Summary */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xl">🔄</span>
          <h2 className="text-text-primary font-semibold">Routing summary</h2>
          <p className="text-text-muted text-sm ml-auto">Queue recommendations for current workloads</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="border-l-2 border-accent pl-4">
            <p className="text-text-muted text-sm mb-1">Top current queue</p>
            <p className="text-text-primary font-semibold">customer support</p>
          </div>
          <div className="border-l-2 border-accent-cyan pl-4">
            <p className="text-text-muted text-sm mb-1">Top suggested queue</p>
            <p className="text-text-primary font-semibold">floor support</p>
          </div>
          <div className="border-l-2 border-success pl-4">
            <p className="text-text-muted text-sm mb-1">Routing confidence</p>
            <p className="text-success font-semibold">91%</p>
          </div>
          <div className="border-l-2 border-info pl-4">
            <p className="text-text-muted text-sm mb-1">SLA risk</p>
            <div className="inline-block bg-success/20 text-success px-2 py-1 rounded text-xs font-medium">
              Low
            </div>
          </div>
        </div>
        <Link href="/servicing/routing-rules" className="text-accent text-sm mt-4 inline-block">
          View routing rules →
        </Link>
      </div>
    </div>
  );
}
