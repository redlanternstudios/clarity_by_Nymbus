'use client';

import Link from 'next/link';
import { useState } from 'react';

const initialCases = [
  { id: 'CL-1047', opened: '2h ago', category: 'Payment Change Explanation', priority: 'Medium', currentQueue: 'Customer Support', suggestedQueue: 'Floor Support', owner: 'Jordan Lee', confidence: 91, slaRisk: 'Low', escalated: false, status: 'Routing review' },
  { id: 'CL-1048', opened: '3h ago', category: 'Payment Not Posting', priority: 'High', currentQueue: 'Customer Support', suggestedQueue: 'Floor Support', owner: 'Sarah Rivera', confidence: 86, slaRisk: 'Medium', escalated: false, status: 'Routing review' },
  { id: 'CL-1049', opened: '5h ago', category: 'Account Update Request', priority: 'Low', currentQueue: 'Customer Support', suggestedQueue: 'Customer Support', owner: 'Devon Parker', confidence: 94, slaRisk: 'Low', escalated: false, status: 'Routing review' },
  { id: 'CL-1050', opened: '6h ago', category: 'Dispute Inquiry', priority: 'High', currentQueue: 'Customer Support', suggestedQueue: 'Product Review', owner: 'Alyssa Morgan', confidence: 78, slaRisk: 'Medium', escalated: false, status: 'Routing review' },
  { id: 'CL-1051', opened: '7h ago', category: 'Login Issue', priority: 'Medium', currentQueue: 'Customer Support', suggestedQueue: 'Technical Escalation', owner: 'Justin Wong', confidence: 72, slaRisk: 'Medium', escalated: false, status: 'Routing review' },
  { id: 'CL-1052', opened: '8h ago', category: 'Statement Request', priority: 'Low', currentQueue: 'Customer Support', suggestedQueue: 'Customer Support', owner: 'Kelly Tran', confidence: 95, slaRisk: 'Low', escalated: false, status: 'Routing review' },
];

const AVAILABLE_OWNERS = ['Jordan Lee', 'Sarah Rivera', 'Devon Parker', 'Alyssa Morgan', 'Justin Wong', 'Kelly Tran'];
// Ordered lifecycle. Escalated and Closed are terminal — Change Status must not
// silently cycle past them back to the top (that was the reopening bug).
const STATUS_CYCLE = ['Routing review', 'In progress', 'Pending confirmation', 'Resolved'];
const TERMINAL_STATUSES = ['Escalated', 'Closed'];
const ROUTE_DESTINATIONS = ['Floor Support', 'Customer Support', 'Product Review', 'Technical Escalation'];
const STATUS_FILTER_OPTIONS = ['All', ...STATUS_CYCLE, ...TERMINAL_STATUSES];

export default function CaseQueue() {
  const [cases, setCases] = useState(initialCases);
  const [sortBy, setSortBy] = useState<'id' | 'priority' | 'confidence'>('id');
  const [filterQueue, setFilterQueue] = useState('Customer Support');
  const [filterStatus, setFilterStatus] = useState('All');
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [escalateTargetId, setEscalateTargetId] = useState<string | null>(null);
  const [escalateDestination, setEscalateDestination] = useState(ROUTE_DESTINATIONS[0]);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const updateCase = (id: string, changes: Partial<typeof initialCases[number]>) => {
    setCases((prev) => prev.map((c) => (c.id === id ? { ...c, ...changes } : c)));
  };

  const handleAssign = (id: string, currentOwner: string) => {
    const nextOwner = AVAILABLE_OWNERS[(AVAILABLE_OWNERS.indexOf(currentOwner) + 1) % AVAILABLE_OWNERS.length];
    updateCase(id, { owner: nextOwner });
    setLastAction(`${id} reassigned to ${nextOwner}`);
    setOpenMenuId(null);
  };

  const handleChangeStatus = (id: string, currentStatus: string) => {
    // Terminal states (Escalated, Closed) are not part of the cycle. Advancing
    // from a terminal state must not silently reopen the case — indexOf would
    // return -1 and land back on "Routing review" otherwise.
    if (TERMINAL_STATUSES.includes(currentStatus)) {
      setLastAction(`${id} is ${currentStatus.toLowerCase()} — reopen it explicitly before changing status`);
      setOpenMenuId(null);
      return;
    }
    const currentIndex = STATUS_CYCLE.indexOf(currentStatus);
    const nextStatus = STATUS_CYCLE[(currentIndex + 1) % STATUS_CYCLE.length];
    updateCase(id, { status: nextStatus });
    setLastAction(`${id} status changed to "${nextStatus}"`);
    setOpenMenuId(null);
  };

  // Escalate now requires confirming a destination before it commits (Req 2.3),
  // instead of finalizing immediately on click.
  const openEscalateConfirm = (id: string, suggestedQueue: string) => {
    setEscalateDestination(ROUTE_DESTINATIONS.includes(suggestedQueue) ? suggestedQueue : ROUTE_DESTINATIONS[0]);
    setEscalateTargetId(id);
    setOpenMenuId(null);
  };

  const confirmEscalate = () => {
    if (!escalateTargetId) return;
    updateCase(escalateTargetId, { escalated: true, status: 'Escalated', suggestedQueue: escalateDestination });
    setLastAction(`${escalateTargetId} escalated to ${escalateDestination}`);
    setEscalateTargetId(null);
  };

  const cancelEscalate = () => setEscalateTargetId(null);

  const handleClose = (id: string) => {
    updateCase(id, { status: 'Closed' });
    setLastAction(`${id} closed as resolved`);
    setOpenMenuId(null);
  };

  const filteredCases = cases.filter(
    (c) => c.currentQueue === filterQueue && (filterStatus === 'All' || c.status === filterStatus)
  );

  const sortedCases = [...filteredCases].sort((a, b) => {
    if (sortBy === 'confidence') return b.confidence - a.confidence;
    if (sortBy === 'priority') {
      const priorityOrder = { High: 0, Medium: 1, Low: 2 };
      return priorityOrder[a.priority as keyof typeof priorityOrder] - priorityOrder[b.priority as keyof typeof priorityOrder];
    }
    return a.id.localeCompare(b.id);
  });

  const getPriorityColor = (priority: string) => {
    if (priority === 'High') return 'bg-danger/20 text-danger';
    if (priority === 'Medium') return 'bg-warning/20 text-warning';
    return 'bg-success/20 text-success';
  };

  const getSLAColor = (risk: string) => {
    if (risk === 'High') return 'bg-danger/20 text-danger';
    if (risk === 'Medium') return 'bg-warning/20 text-warning';
    return 'bg-success/20 text-success';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-serif font-bold text-text-primary mb-2">
            Case Queue
          </h1>
          <p className="text-text-muted">
            Review and manage cases that need routing or action.
          </p>
        </div>
        <button className="bg-accent hover:bg-accent-hover text-background font-medium py-2 px-4 rounded transition-colors">
          🔄 Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="bg-surface border border-border rounded-lg p-4">
        <div className="grid grid-cols-5 gap-4">
          <div>
            <label className="text-text-muted text-sm block mb-2">Queue</label>
            <select
              value={filterQueue}
              onChange={(e) => setFilterQueue(e.target.value)}
              className="w-full bg-elevated border border-border rounded px-3 py-2 text-text-primary text-sm"
            >
              <option>Customer Support</option>
              <option>Floor Support</option>
              <option>Product Review</option>
            </select>
          </div>
          <div>
            <label className="text-text-muted text-sm block mb-2">Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full bg-elevated border border-border rounded px-3 py-2 text-text-primary text-sm"
            >
              {STATUS_FILTER_OPTIONS.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-text-muted text-sm block mb-2">Priority</label>
            <select className="w-full bg-elevated border border-border rounded px-3 py-2 text-text-primary text-sm">
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div>
            <label className="text-text-muted text-sm block mb-2">SLA Risk</label>
            <select className="w-full bg-elevated border border-border rounded px-3 py-2 text-text-primary text-sm">
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div>
            <label className="text-text-muted text-sm block mb-2">Search</label>
            <input
              type="text"
              placeholder="Search cases..."
              className="w-full bg-elevated border border-border rounded px-3 py-2 text-text-primary text-sm"
            />
          </div>
        </div>
      </div>

      {/* Last action confirmation (Requirement 2.5 / 6.3 — visible resulting state) */}
      {lastAction && (
        <div className="bg-success/10 border border-success rounded-lg px-4 py-3 flex items-center justify-between">
          <p className="text-sm text-text-primary">{lastAction}</p>
          <button
            onClick={() => setLastAction(null)}
            className="text-text-muted hover:text-text-primary text-sm"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Escalate confirmation (Requirement 2.3 — confirm destination before completing) */}
      {escalateTargetId && (
        <div className="bg-warning/10 border border-warning rounded-lg p-4 space-y-3">
          <p className="text-sm text-text-primary">
            Confirm escalation destination for <span className="font-mono">{escalateTargetId}</span>
          </p>
          <select
            value={escalateDestination}
            onChange={(e) => setEscalateDestination(e.target.value)}
            className="w-full max-w-xs bg-elevated border border-border rounded px-3 py-2 text-text-primary text-sm"
          >
            {ROUTE_DESTINATIONS.map((dest) => (
              <option key={dest}>{dest}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <button
              onClick={confirmEscalate}
              className="bg-warning hover:opacity-90 text-background font-medium py-1.5 px-3 rounded text-sm"
            >
              Confirm escalation
            </button>
            <button
              onClick={cancelEscalate}
              className="border border-border text-text-muted hover:text-text-primary py-1.5 px-3 rounded text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-elevated border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left"><input type="checkbox" className="rounded" /></th>
                <th className="px-4 py-3 text-left text-text-muted text-sm font-semibold cursor-pointer" onClick={() => setSortBy('id')}>
                  Case ID ↕
                </th>
                <th className="px-4 py-3 text-left text-text-muted text-sm font-semibold">Category</th>
                <th className="px-4 py-3 text-left text-text-muted text-sm font-semibold cursor-pointer" onClick={() => setSortBy('priority')}>
                  Priority ↕
                </th>
                <th className="px-4 py-3 text-left text-text-muted text-sm font-semibold">Current Queue</th>
                <th className="px-4 py-3 text-left text-text-muted text-sm font-semibold">Suggested Queue</th>
                <th className="px-4 py-3 text-left text-text-muted text-sm font-semibold">Owner</th>
                <th className="px-4 py-3 text-left text-text-muted text-sm font-semibold cursor-pointer" onClick={() => setSortBy('confidence')}>
                  Confidence ↕
                </th>
                <th className="px-4 py-3 text-left text-text-muted text-sm font-semibold">SLA Risk</th>
                <th className="px-4 py-3 text-left text-text-muted text-sm font-semibold">Status</th>
                <th className="px-4 py-3 text-left text-text-muted text-sm font-semibold">Escalation</th>
                <th className="px-4 py-3 text-center text-text-muted text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sortedCases.map((caseItem, idx) => (
                <tr key={caseItem.id} className={`border-b border-border hover:bg-elevated/50 ${idx % 2 === 0 ? 'bg-background' : ''}`}>
                  <td className="px-4 py-3"><input type="checkbox" className="rounded" /></td>
                  <td className="px-4 py-3">
                    <Link href={`/servicing/cases/${caseItem.id}`} className="font-mono text-accent hover:underline">
                      {caseItem.id}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-text-primary text-sm">{caseItem.category}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(caseItem.priority)}`}>
                      {caseItem.priority}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-primary text-sm">{caseItem.currentQueue}</td>
                  <td className="px-4 py-3 text-text-primary text-sm">{caseItem.suggestedQueue}</td>
                  <td className="px-4 py-3 text-text-primary text-sm">{caseItem.owner}</td>
                  <td className="px-4 py-3">
                    <span className="text-success font-semibold text-sm">{caseItem.confidence}%</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getSLAColor(caseItem.slaRisk)}`}>
                      {caseItem.slaRisk}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-primary text-sm">{caseItem.status}</td>
                  <td className="px-4 py-3 text-text-primary text-sm">
                    {caseItem.escalated ? 'Yes' : 'No'}
                  </td>
                  <td className="px-4 py-3 text-center relative">
                    <button
                      onClick={() => setOpenMenuId(openMenuId === caseItem.id ? null : caseItem.id)}
                      className="text-text-muted hover:text-accent text-lg px-2"
                      aria-label={`Actions for ${caseItem.id}`}
                    >
                      ⋯
                    </button>
                    {openMenuId === caseItem.id && (
                      <div className="absolute right-2 top-full z-10 mt-1 w-48 rounded-lg border border-border bg-elevated shadow-lg text-left">
                        <button
                          onClick={() => handleAssign(caseItem.id, caseItem.owner)}
                          className="block w-full px-3 py-2 text-sm text-text-primary hover:bg-surface text-left"
                        >
                          Assign next owner
                        </button>
                        <button
                          onClick={() => handleChangeStatus(caseItem.id, caseItem.status)}
                          className="block w-full px-3 py-2 text-sm text-text-primary hover:bg-surface text-left"
                        >
                          Change status
                        </button>
                        <button
                          onClick={() => openEscalateConfirm(caseItem.id, caseItem.suggestedQueue)}
                          className="block w-full px-3 py-2 text-sm text-warning hover:bg-surface text-left"
                        >
                          Escalate
                        </button>
                        <button
                          onClick={() => handleClose(caseItem.id)}
                          className="block w-full px-3 py-2 text-sm text-danger hover:bg-surface text-left border-t border-border"
                        >
                          Close as resolved
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center">
        <p className="text-text-muted text-sm">{sortedCases.length} cases</p>
        <div className="flex gap-2">
          <button className="px-3 py-2 rounded border border-border text-text-muted hover:text-text-primary transition-colors">← Previous</button>
          <button className="px-3 py-2 rounded bg-accent text-background font-medium">1</button>
          <button className="px-3 py-2 rounded border border-border text-text-muted hover:text-text-primary transition-colors">2</button>
          <button className="px-3 py-2 rounded border border-border text-text-muted hover:text-text-primary transition-colors">3</button>
          <button className="px-3 py-2 rounded border border-border text-text-muted hover:text-text-primary transition-colors">Next →</button>
        </div>
      </div>
    </div>
  );
}
