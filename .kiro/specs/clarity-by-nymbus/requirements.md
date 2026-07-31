# Requirements — Clarity by Nymbus

## Introduction

Clarity is a read-only guidance layer that sits on top of existing Nymbus loan servicing workflows. It is not a system of record and does not replace servicing systems. It exists to reduce servicing friction by helping borrowers understand status, helping servicing agents move faster, helping floor support route issues correctly, and helping leadership see operating health.

This is a POC. Scope is intentionally bounded: mock data only, no production integrations, no autonomous resolution, no hidden workflow branches, no dead pages.

## Source of Truth

This spec is derived from and must remain consistent with:
- `03-sdlc-release-package/clarity/01-REQUIREMENTS.md`
- `03-sdlc-release-package/clarity/03-ARCHITECTURE.md`
- `03-sdlc-release-package/clarity/04-USER-STORIES.md`
- `03-sdlc-release-package/clarity/05-ACCEPTANCE-CRITERIA.md`
- `02-mvp-page-tree/clarity.mvp.page-tree.md`

If this file and the source package ever disagree, the source package wins. Update this file to match, not the other way around.

## Goals

- Show servicing friction clearly to the people affected by it
- Help borrowers, agents, and leadership understand status without digging through internal terms
- Reduce manual back-and-forth between borrowers and servicing
- Support escalation and routing without replacing the underlying workflow

## Out of Scope

- Full servicing system replacement
- Autonomous resolution of borrower issues
- Deep backend automation
- Production data integrations
- Any workflow branch not represented in the page tree

## Requirements

### Requirement 1 — Borrower Status Clarity

**User Story:** As a borrower, I want to see clear status and next steps, so that I do not have to call support for basic updates.

**Acceptance Criteria**
1. WHEN a borrower lands on their home view THEN the system SHALL display current loan status, next step, and any recent notice without requiring navigation.
2. WHEN a borrower views a notice THEN the system SHALL present the original notice text alongside a plain-language explanation of what changed.
3. WHEN a borrower views any read-only field THEN the system SHALL make clear the field is not editable.
4. IF a borrower cannot resolve their question through self-service THEN the system SHALL provide a visible path to escalate to human help.
5. WHEN a borrower's status has no data available THEN the system SHALL show an explicit empty state, not a blank or broken view.

### Requirement 2 — Servicing Agent Velocity

**User Story:** As a servicing agent, I want to add notes and see case context, so that I can move faster and avoid repeated triage.

**Acceptance Criteria**
1. WHEN an agent opens a case THEN the system SHALL display borrower question, loan context, notice paragraph, and prior notes in one view.
2. WHEN an agent adds a note THEN the system SHALL save it to the case's note history without navigating away from the case.
3. WHEN an agent routes or escalates a case THEN the system SHALL confirm the routing destination before completing the action.
4. IF a case has no recommended action available THEN the system SHALL show a fallback state rather than an empty panel.
5. WHEN an agent takes any action on a case THEN the system SHALL reflect the resulting state (routed, escalated, resolved) visibly in the case view.

### Requirement 3 — Floor Support Routing

**User Story:** As floor support, I want tickets categorized correctly, so that I can respond quickly and send the issue to the right owner.

**Acceptance Criteria**
1. WHEN a ticket arrives THEN the chatbot SHALL suggest a category and destination queue.
2. WHEN the chatbot suggests a route THEN the system SHALL require human confirmation before the route is finalized.
3. WHEN a ticket is ambiguous or high severity THEN the system SHALL flag it for escalation rather than auto-closing it.
4. WHEN a human overrides the chatbot's suggestion THEN the system SHALL accept the override and record the correction.
5. WHEN routing a ticket THEN the system SHALL only offer the defined destinations: floor support, customer support, product review, technical escalation.

### Requirement 4 — Leadership Visibility

**User Story:** As a stakeholder, I want to see the operating picture, so that I can understand friction, volume, and launch health.

**Acceptance Criteria**
1. WHEN leadership opens the trends view THEN the system SHALL display volume trend, queue trend, open count, routed count, escalated count, and launch health indicator.
2. WHEN a metric has no data for the selected period THEN the system SHALL show an explicit no-data state.
3. WHEN leadership reviews notice insights THEN the system SHALL show which notices generate the most borrower questions and a suggested rewrite.
4. WHEN leadership views any summary THEN the system SHALL use plain, non-technical language.

### Requirement 5 — Assistive AI Boundary (Ask Clarity, Notice Insights, Clarity Copilot)

**User Story:** As a product owner, I want the AI-assistive features to stay within a governed boundary, so that Clarity is never mistaken for an autonomous decision-maker.

**Acceptance Criteria**
1. WHEN Ask Clarity answers a borrower question THEN the system SHALL show source references grounding the answer.
2. IF Ask Clarity has insufficient data to answer THEN the system SHALL show a fallback message rather than a fabricated answer.
3. WHEN Clarity Copilot suggests a category, destination, or next step THEN the system SHALL display a confidence level and require human confirmation before the action is taken.
4. WHEN Notice Insights identifies confusing language THEN the system SHALL show the original copy, the flagged section, and a suggested rewrite — not an auto-applied change.
5. The system SHALL NOT auto-resolve, auto-close, or auto-route any case without a human confirmation step.

### Requirement 6 — No Dead Pages

**User Story:** As product delivery, I want every screen and action to lead somewhere real, so that the POC is coherent and defensible under review.

**Acceptance Criteria**
1. WHEN any nav item is selected THEN the system SHALL resolve to a real page, drawer, or modal.
2. WHEN any primary button is used THEN the system SHALL produce a visible outcome.
3. WHEN any secondary action is used THEN the system SHALL open a drawer, confirm a state change, route to a detail page, or show a fallback state.
4. The system SHALL NOT contain a page, route, or action outside the page tree defined in `02-mvp-page-tree/clarity.mvp.page-tree.md`.

## Constraints

- POC only — mock data, no production integrations
- Frontend prototype only — no backend build in this phase
- Dark theme per `01-design-system-tokens/clarity.tokens.css`
- Every role (borrower, servicing agent, floor support, leadership) must have a distinct, complete path through the product
