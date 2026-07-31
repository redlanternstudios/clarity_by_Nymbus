# Clarity by Nymbus - UI Prototype Input Pack

## What This Is

This is the exact input pack for the v0 frontend prototype.

Use this after the requirements, stories, acceptance criteria, and page tree are locked.

## Source Artifacts

- `01-REQUIREMENTS.md`
- `03-ARCHITECTURE.md`
- `04-USER-STORIES.md`
- `05-ACCEPTANCE-CRITERIA.md`
- `08-TEAMS-IMPACTED.md`
- `09-POST-RELEASE-SUPPORT.md`
- `01-design-system-tokens/clarity.tokens.css`
- `02-mvp-page-tree/clarity.mvp.page-tree.md`

## Product Goal

Clarity is a read-only guidance layer that sits on top of existing servicing workflows.

The UI must feel like it belongs inside the Nymbus ecosystem, but it should not pretend to replace the servicing system.

## Exact Design Rules

- Use the Nymbus-inspired dark theme captured in the token file
- Keep the surfaces calm, professional, and high trust
- Use mock data only
- Keep labels plain and direct
- Make the hierarchy obvious at a glance
- No dead pages
- No hidden workflows
- No invented functionality

## Required Page Set

1. Borrower home
2. Loan detail
3. Notice detail
4. Ask Clarity
5. Escalation flow
6. Loan history
7. Servicing home
8. Case queue
9. Case detail
10. Trends
11. Notice insights
12. Routing rules
13. Clarity Copilot
14. Docs pages

## Core UI Intent By Role

### Borrower
- See status, next step, and relevant notes
- Understand what is happening without jargon
- Ask for help or surface a concern

### Servicing Agent
- Review case context quickly
- Add notes
- Route or escalate without leaving the flow

### Floor Support
- See clean ticket categories
- Confirm chatbot routing suggestions
- Escalate edge cases

### Leadership
- See trend-level visibility
- Spot friction and bottlenecks
- Understand launch health

## Required Layout Behaviors

- Sidebar or rail navigation should be stable
- Primary content should always show the current role and task
- Supporting detail should be visually secondary
- Actions should be limited to the current role
- Read-only areas must look read-only
- Notes must look like notes, not editing chaos

## Required Data Fields

### Borrower View
- Borrower name
- Loan or case ID
- Current status
- Next step
- Note history
- Recent notice
- Escalation state

### Servicing View
- Case ID
- Category
- Priority
- Assigned queue
- Latest note
- Routing suggestion
- Triage outcome

### Leadership View
- Volume trend
- Queue trend
- Open issue count
- Routed count
- Escalated count
- Launch health indicator

## Required States

- Default
- Loading
- Empty
- No results
- Partial data
- Error
- Routed
- Escalated
- Read-only locked

## Important Content Rules

- Use plain English
- Avoid jargon unless it is clearly internal
- Use concise labels
- Keep copy direct and white-gloved
- Make every status understandable in one glance

## Acceptance Standard For The UI

- Every screen in the page tree is represented
- Every role has a visible path
- Every path has a next step
- Every action has a visible outcome
- No page feels orphaned
- The design reads like a Nymbus product

## v0 Prompt Notes

Tell v0 to:

- Build the prototype using the Clarity dark palette from the token file
- Match the page tree exactly
- Use mock data only
- Keep the design premium and restrained
- Show the borrower, servicing agent, floor support, and leadership experiences distinctly
- Include the chatbot routing concept as an assistive layer
- Do not add extra screens that are not in the page tree

