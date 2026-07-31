# Design — Clarity by Nymbus

## Source of Truth

Derived from and must remain consistent with:
- `03-sdlc-release-package/clarity/03-ARCHITECTURE.md`
- `01-design-system-tokens/clarity.tokens.css`
- `02-mvp-page-tree/clarity.mvp.page-tree.md`
- `03-sdlc-release-package/clarity/11-UI-PROTOTYPE-BRIEF.md`
- `03-sdlc-release-package/clarity/12-UI-PROTOTYPE-V0-PACK.md`

## Overview

Clarity is an overlay experience, not a system of record. It reads from existing servicing context (loan data, servicing cases, notices, historical questions) and presents role-specific guidance. It writes only notes and routing decisions — it never modifies loan, payment, or notice data directly. The build should feel like a portal with a visible role selector inside the shell, not a detached role-card landing page.

## Architecture

### Experience Model

```
Systems of Record (read-only inputs)
  Loan System, Servicing Data, Notices & Documents, Historical Data
        |
        v
Clarity Intelligence Layer (this build)
  Data Ingestion -> role-specific guidance -> Ask Clarity / Notice Insights / Clarity Copilot
        |
        v
Outcomes (human-confirmed)
  Routing Decision, Borrower Clarity, Agent Velocity, Ops Visibility
```

### Functional Boundaries

- Read-only guidance surface over existing servicing behavior
- Notes are the only borrower/agent-facing write action
- Issue visibility and routing support, always human-confirmed
- Internal chatbot classifies and suggests — it does not resolve

### Role Coverage

Each role has a direct, complete path through the product:

- Portal shell -> `/`
- Borrower -> `/borrower` -> `/borrower/notice/[id]` -> `/borrower/ask` -> `/borrower/escalate` -> `/borrower/history`
- Servicing agent -> `/servicing` -> `/servicing/cases` -> `/servicing/cases/[id]`
- Floor support -> `/servicing/cases` -> `/servicing/copilot` -> `/servicing/routing`
- Leadership -> `/servicing` -> `/servicing/trends` -> `/servicing/notice-insights`

### Experience Flow

1. User lands in the portal shell and chooses a role-based view (borrower or servicing; no cross-role bleed)
2. User reviews status, context, and prior notes
3. User adds a note or initiates a route
4. If AI-assisted (Ask Clarity, Copilot, Notice Insights), the system shows a suggestion with confidence and source grounding
5. Human confirms or corrects before any state change is finalized

### Guardrails (non-negotiable)

- No full workflow replacement
- No hidden automation branches
- No unsupported page paths outside the locked page tree
- No auto-resolution, auto-close, or auto-route without human confirmation
- Surface must be simple enough to explain to someone outside the build in one pass

## Visual System

Dark theme per `clarity.tokens.css`:

| Token | Value | Use |
|---|---|---|
| `--clr-bg` | `#1c2027` | Base background |
| `--clr-surface` / `--clr-surface-2` | `#1e2636` / `#22263b` | Cards, panels |
| `--clr-bg-elevated` | `#1b1f35` | Sidebar, elevated shell |
| `--clr-accent` | `#7090e8` | Primary accent, links, active state |
| `--clr-accent-cyan` | `#90d0e8` | Secondary accent |
| `--clr-text` / `--clr-text-muted` | `#f3f6f7` / `#a6aebe` | Primary / secondary text |
| `--clr-success` / `--clr-warning` / `--clr-danger` | green / amber / red | Status states |

Fonts: display = Iowan Old Style/Baskerville serif (headers only), body = Inter (everything else).

## Components (from UI Prototype Brief)

- Status summary card — read-only, always labeled as such
- Read-only detail panel — loan/case context, visually secondary to primary action
- Note composer — looks like a note, not an edit form
- Routing selector — limited to the four defined destinations (floor support, customer support, product review, technical escalation)
- Support queue indicator — badge/chip showing queue + SLA risk
- Severity/priority label — color-coded per status tokens

## Screens (page tree — 20 routes, no additions permitted)

### Shell
- `/` — portal shell: top nav, left rail, role toggle, search, notifications, user menu, role selection entry state

### Borrower (6)
- `/borrower` — home: identity, loan summary, payment change, notice preview, Ask Clarity entry, escalation entry
- `/borrower/loan/[id]` — loan detail
- `/borrower/notice/[id]` — notice detail with highlighted callouts
- `/borrower/ask` — Ask Clarity (grounded Q&A)
- `/borrower/escalate` — escalation flow -> `/borrower/escalate/confirmed`
- `/borrower/history` — timeline of prior notices/questions/outcomes

### Servicing (7)
- `/servicing` — home: KPIs, question trends, queue preview, low-confidence alerts
- `/servicing/cases` — case queue: filters, sortable table, status/owner/confidence/SLA columns
- `/servicing/cases/[id]` — case detail: context, notes, recommended action, source records
- `/servicing/trends` — repeated questions, self-service success rate, escalation rate
- `/servicing/notice-insights` — confusing language detection + rewrite suggestions
- `/servicing/routing` — routing rule reference (four supported destinations only)
- `/servicing/copilot` — governed conversational assistant with source records, risk level, confidence, next step, confirm-action state

### Docs (7)
- `/docs/product-brief`, `/docs/prd`, `/docs/technical-design`, `/docs/release-plan`, `/docs/user-stories`, `/docs/risk-log`, `/docs/ai-usage`

## Required States (every relevant screen)

Default, Loading, Empty, No results, Partial data, Error, Routed, Escalated, Read-only locked

## Data Model (mock only — no production schema)

### Borrower record
`name, loan_id, status, next_step, note_history[], recent_notice, escalation_state`

### Servicing case
`case_id, borrower_name, borrower_question, category, priority, queue, owner, status, note_history[], latest_note, routing_suggestion, confidence, triage_outcome, sla_status, source_records[]`

### Leadership summary
`volume_trend, queue_trend, open_count, routed_count, escalated_count, launch_health`

## AI Feature Design (governed boundary — see Requirement 5)

| Feature | Behavior | Guardrail |
|---|---|---|
| Ask Clarity | Answers borrower questions grounded in loan/notice context | Shows source references; fallback message if data insufficient; never fabricates |
| Notice Insights | Flags confusing notice language, suggests rewrite | Shows original + flagged section + suggestion; never auto-applies |
| Clarity Copilot | Suggests ticket category/destination/next step | Shows confidence level + source records; requires human confirm before action commits |

For this POC, AI responses may be simulated/scripted against mock data rather than a live model call — this is a build decision to be locked before implementation starts (see open question in tasks.md), not yet decided in the source SDLC package.

### Routing Model

The only supported route destinations in the build are:

- floor support
- customer support
- product review
- technical escalation

Any other labels used in mock data should be treated as intake categories or case tags, not final destinations.

### Risks Carried Into Design (from `02-RISK-REGISTER.md`)

- Clarity mistaken for a replacement system -> mitigate with persistent "read-only" labeling in UI
- Chatbot overpromises -> mitigate by limiting Copilot UI to classify/suggest, never "resolve"
- Scope grows beyond POC -> mitigate by refusing any screen/route outside this page tree
