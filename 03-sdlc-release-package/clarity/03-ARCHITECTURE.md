# Architecture

## Experience Model

Clarity is an overlay on top of current servicing behavior, not another system of record. The build should feel like a premium portal with a stable shell, a visible role selector, and role-specific work surfaces for servicing, floor support, and leadership.

## Functional Boundaries

- Read-only guidance surface over existing servicing data
- Notes where needed, but no loan or payment writes
- Issue visibility, routing support, and human confirmation
- Internal chatbot for ticket classification and suggestion, not autonomous closure

## Experience Flow

1. User lands in the portal shell and chooses a role-based view
2. User reviews status, context, and notes
3. User adds a note or initiates a route
4. Assistive surfaces show a suggestion, confidence, and source grounding
5. Human support confirms or corrects before any state change is finalized

## Design Artifacts

- v0 frontend prototype for the portal experience
- UI image pack for the key screens
- Page tree for route coverage and no-dead-page checks
- Mock data only
- No dead-end states

## Architecture Guardrails

- No full workflow replacement
- No hidden automation branches
- No unsupported page paths
- No detached role-card landing page that replaces the portal shell
- Keep the surface simple enough to explain quickly
- Keep borrower, servicing, floor support, and leadership paths explicit
