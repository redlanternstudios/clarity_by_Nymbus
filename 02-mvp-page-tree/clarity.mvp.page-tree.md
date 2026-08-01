# Clarity MVP Page Tree

## Visual system
- Base background: `#1C2027`
- Surfaces: `#1E2636`, `#1B1F35`, `#22263B`
- Accent blue: `#7090E8`
- Accent cyan: `#90D0E8`
- Text: `#F3F6F7`
- Muted text: `#A6AEBE`
- Borders: `#3C4653`
- Fonts:
  - Display: `Iowan Old Style`, `Baskerville`, `Times New Roman`, serif
  - Body: `Inter`, `Segoe UI`, `Helvetica Neue`, Arial, sans-serif

## Shell

### 0. Portal Shell / Role Selector Entry
- Route: `/`
- Purpose: stable portal shell and role selector entry
- Contains:
  - top nav
  - left rail
  - role toggle
  - search
  - notification bell
  - user menu
- Behavior:
  - keep the shell visibly branded and portal-like
  - keep role selection visible in the shell
  - do not use a detached role-card landing page that removes the portal framing
  - keep the active role visible in the header or rail
- Destinations:
  - `/borrower`
  - `/servicing`
  - `/docs/product-brief`
  - `/docs/prd`
  - `/docs/technical-design`
  - `/docs/release-plan`

## Borrower experience

### 1. Borrower Home
- Route: `/borrower`
- Purpose: summarize the loan and current servicing change
- Components:
  - borrower identity card
  - loan summary card
  - payment change card
  - notice preview
  - Ask Clarity entry
  - escalation entry
- Actions:
  - view notice detail
  - ask a question
  - open loan detail
  - escalate to human help
- Destinations:
  - `/borrower/loan/[id]`
  - `/borrower/notice/[id]`
  - `/borrower/ask`
  - `/borrower/escalate`
  - `/borrower/history`

### 2. Loan Detail
- Route: `/borrower/loan/[id]`
- Purpose: full loan context
- Components:
  - principal balance
  - current payment
  - previous payment
  - interest rate
  - next due date
  - effective date
  - escrow balance
  - loan status
  - change breakdown

### 3. Notice Detail
- Route: `/borrower/notice/[id]`
- Purpose: visually explain the servicing notice
- Components:
  - original notice text
  - highlighted sections
  - payment change callout
  - escrow shortage callout
  - tax adjustment callout
  - insurance adjustment callout
  - action guidance

### 4. Ask Clarity
- Route: `/borrower/ask`
- Purpose: grounded Q&A
- Components:
  - suggested prompts
  - free-text input
  - answer panel
  - source references
  - fallback message for insufficient data

### 5. Escalation Flow
- Route: `/borrower/escalate`
- Purpose: request human help
- Components:
  - reason picker
  - note field
  - confirm button
  - success state
- Success route:
  - `/borrower/escalate/confirmed`

### 6. Loan History
- Route: `/borrower/history`
- Purpose: show prior notices and questions
- Components:
  - timeline
  - previous notices
  - prior questions
  - prior outcomes

## Servicing experience

### 7. Servicing Home
- Route: `/servicing`
- Purpose: internal operations dashboard
- Components:
  - KPI cards
  - question trends
  - case queue preview
  - low-confidence alerts
  - routing summary

### 8. Case Queue
- Route: `/servicing/cases`
- Purpose: searchable working queue
- Components:
  - filters
  - sortable table
  - status badges
  - owner column
  - confidence column
  - SLA risk column
- Actions:
  - open case
  - assign owner
  - change status
  - escalate
  - close

### 9. Case Detail
- Route: `/servicing/cases/[id]`
- Purpose: full case context
- Components:
  - borrower question
  - loan context
  - notice paragraph
  - explanation
  - confidence level
  - timeline
  - recommended action
  - source records
- Actions:
  - add note
  - reassign
  - request info
  - escalate
  - resolve

### 10. Trends
- Route: `/servicing/trends`
- Purpose: repeated borrower questions and patterns
- Components:
  - top questions
  - counts
  - trend direction
  - notice type
  - self-service success rate
  - escalation rate

### 11. Notice Insights
- Route: `/servicing/notice-insights`
- Purpose: identify confusing language and suggest rewrites
- Components:
  - original copy
  - confusing paragraph highlight
  - suggested rewrite
  - question frequency
  - estimated operational impact

### 12. Routing Rules
- Route: `/servicing/routing`
- Purpose: define escalation destinations
- Routes (canonical — must match `requirements.md` Req 3.5 and case data in `/servicing/cases`):
  - floor support
  - customer support
  - product review
  - technical escalation
- Amendment (2026-08-01): route path corrected from `/servicing/routing-rules` to `/servicing/routing` to match the built app; destination list corrected from an earlier 8-item specialist taxonomy (self-service, general servicing, escrow specialist, insurance specialist, tax specialist, hardship assistance, compliance review, dispute review) to the four canonical destinations actually used elsewhere in the product. The 8-item list was a stale draft that never matched `requirements.md` Req 3.5 or the case-queue mock data, and had leaked into the built page before this correction.

### 13. Clarity Copilot
- Route: `/servicing/copilot`
- Purpose: governed conversational assistant
- Components:
  - prompt box
  - answer panel
  - source records
  - timestamps
  - owner
  - dependencies
  - risk level
  - confidence level
  - next step
  - confirm action state

## Role home routes (amendment, 2026-08-01)

The original tree below assumed Floor Support and Leadership both entered through `/servicing`. During build, each was given its own dedicated home route so all four roles have a distinct entry point, per the requirement that "every role must have a distinct, complete path through the product":

### 12a. Floor Support Home
- Route: `/floor-support`
- Purpose: Floor Support's own landing view — escalation queue, launch-health metrics, quick actions, quick links into `/servicing/routing`, `/borrower/escalate`, `/borrower/history`

### 12b. Leadership Home
- Route: `/leadership`
- Purpose: Leadership's own landing view — KPI cards (borrowers, active cases, system health, resolution time), trend bars, launch-health summary

## Docs pages

### 14. Product Brief
- Route: `/docs/product-brief`

### 15. PRD
- Route: `/docs/prd`

### 16. Technical Design
- Route: `/docs/technical-design`

### 17. Release Plan
- Route: `/docs/release-plan`

### 18. User Stories
- Route: `/docs/user-stories`

### 19. Risk Log
- Route: `/docs/risk-log`

### 20. AI Usage Notes
- Route: `/docs/ai-usage`

## Route count

22 routes total (20 original + `/floor-support` + `/leadership`, added 2026-08-01 — see amendment above). No further additions permitted without an equivalent documented amendment.

## No-dead-page rule
- Every nav item must resolve to a real page, drawer, or modal.
- Every primary button must have a visible outcome.
- Every secondary action must either:
  - open a drawer
  - confirm a state change
  - route to a detail page
  - or show a fallback state

## Minimum build order
1. Global shell
2. Borrower home
3. Notice detail
4. Ask Clarity
5. Escalation flow
6. Servicing home
7. Case queue
8. Case detail
9. Trends
10. Notice insights
11. Copilot
12. Docs pages
