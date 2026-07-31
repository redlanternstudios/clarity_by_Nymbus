# Change Log

## v0.1

- Initial lean SDLC package created
- Added requirements, risks, architecture, stories, acceptance criteria, DoD, points, teams impacted, support plan, and UI prototype brief
- Kept scope POC-only and read-friendly

## v0.2

- Added `04-brand-assets/` with finished logo and two branded architecture diagrams (dark + light)
- Architecture diagrams show system-of-record inputs, Clarity intelligence layer, and role outcomes, consistent with `03-ARCHITECTURE.md` guardrails (read-only, no automation, no dead pages, human-confirmed routing)
- Assets sourced externally (ChatGPT image generation), not produced from the Figma MCP — Figma file creation was not pursued this session

## v0.3

- Added `.kiro/specs/clarity-by-nymbus/requirements.md`, `design.md`, `tasks.md` — written directly (not via Kiro CLI phased flow, which is not available in this environment)
- Kiro spec content is derived line-for-line from the existing SDLC package; if they ever diverge, the SDLC package under `03-sdlc-release-package/` is the source of truth
- Three open questions carried into `tasks.md` remain unresolved: AI feature implementation (simulated vs. real), deliverable format (Figma vs. running prototype vs. both), and mock data schema

## v0.4

- Reconciled the routing model to one four-destination human-confirmed path across requirements, design, and tasks
- Expanded the servicing case data model to include note history, ownership, SLA state, and source records needed by the UI
- Added explicit role-to-route coverage for borrower, servicing agent, floor support, and leadership
- Normalized EARS actor wording and added a Kiro spec README for easier review

## v0.5

- Added an enterprise-ready package README with approach and next steps
- Added an explicit AI usage record describing what AI did, what it did not do, and where human review remained required
- Updated the package index so the new docs are easy to find

## Notes

- Any future changes should preserve the lean package shape
- Do not add dead pages or unsupported branches
- Label accuracy check on architecture diagrams: "Data Ingestion," "Intelligence Layer," and "Outcomes & Actions" are synthesized labels, not literal component names from `03-ARCHITECTURE.md` — treat diagrams as conceptual, not a literal build inventory
