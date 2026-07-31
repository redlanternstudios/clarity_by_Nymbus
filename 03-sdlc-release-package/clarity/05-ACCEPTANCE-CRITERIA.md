# Acceptance Criteria

## Borrower Status and Notice Stories

### Borrower status clarity
- When the borrower lands on home, status, payment change, recent notice, and next step are visible immediately
- Read-only data is clearly labeled as read only
- Ask Clarity and Get Help are visible as the two clear next actions
- Empty or partial data states are explicit, not blank

### Notice interpretation
- The original notice text and plain-language explanation appear together
- Highlighted callouts explain the payment change drivers
- Borrower-facing copy stays grounded in the notice content
- No invented amounts, dates, or outcomes appear

### Ask Clarity
- Suggested prompts and free-text input are visible
- The answer panel shows a grounded response and source references
- If data is insufficient, the system shows a fallback instead of fabricating an answer
- The borrower can move to notice detail, history, or escalation from the same flow

### Escalation and history
- The reason picker and note field are available before submit
- Submit returns a reference number and a visible next step
- The request appears in the borrower history timeline
- The confirmed state and any fallback state are both explicit

## Servicing and Support Stories

### Case queue triage
- Filters, owner, confidence, and SLA risk are visible in the queue
- Each row opens a case with a visible destination or state change
- No row action is a dead end
- Empty or no-results states are shown explicitly

### Case detail and notes
- Case detail shows the borrower question, loan context, notice excerpt, source records, owner, and note history
- Adding a note updates the visible case state and note history
- Reassign, request info, escalate, and resolve each require a visible confirmation step
- Partial data states are shown with explicit messaging

### Floor support routing
- The routing surface only exposes the four human-confirmed destinations
- A suggestion can be overridden by a human
- Ambiguous or high-severity items escalate instead of auto-closing
- Corrections are visible in the trail or case state

### Leadership visibility
- Trends show volume, queue, routed, escalated, and launch health signals
- Notice insights show original copy, flagged copy, and suggested rewrite
- The summaries are plain language and readable at a glance
- No fake precision or jargon-only dashboards appear

### Release package traceability
- Requirements, stories, criteria, DoD, points, page tree, and prompt do not contradict each other
- The Kiro mirror matches the source package
- The UI prompt matches the tokens and page tree
- Any unresolved difference is called out rather than hidden
