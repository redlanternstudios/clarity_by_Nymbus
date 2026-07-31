# Requirements

## Problem Statement

Clarity by Nymbus is a read-only loan servicing intelligence portal. It overlays existing servicing workflows and helps borrowers, servicing agents, floor support, and leadership understand what is happening, what changed, who owns it, and what happens next. It is not a system of record and it does not auto-resolve cases. The current UI baseline is a portal shell with role selection visible in the entry experience.

## Goals

- Make loan and notice status legible in one glance
- Reduce borrower back-and-forth for routine questions
- Give servicing agents case context, notes, and routing guidance
- Give floor support a confirmed routing model and leadership a clean operating picture
- Keep the release package traceable across repo, Kiro, and Drive

## In Scope

- Borrower portal views for status, notice explanation, Ask Clarity, escalation, and history
- Servicing views for queue triage, case detail, note history, trends, notice insights, routing, and Clarity Copilot
- Leadership visibility for launch health and bottlenecks
- Internal chatbot for ticket categorization and human-confirmed routing
- UI image pack prompt, source docs, and release package artifacts
- Frontend prototype in v0 with mock data only

## Out of Scope

- Full servicing system replacement
- Autonomous resolution, auto-close, or auto-route behavior
- Production data integrations
- Extra routes or hidden workflows outside the locked page tree
- A detached role-selector landing page that replaces the portal shell

## Assumptions

- Existing servicing workflows already exist
- Clarity augments current process rather than replacing it
- Routing remains human-confirmed
- AI helpers are simulated or scripted unless a real model is later explicitly locked
- The canonical mock data is shared across the docs, Kiro, and the UI pack

## Constraints

- POC only
- Mock data only
- Frontend prototype only
- Dark Nymbus palette only
- No dead pages
- No unsupported branches
- No invented routes, counts, or states

## Success Criteria

- The portal can be explained in one pass without hand waving
- Every role has a distinct path and a clear next step
- Every screen and action has a visible outcome
- The docs, page tree, and v0 prompt stay aligned
- The build reads as an operational product, not a presentation deck
