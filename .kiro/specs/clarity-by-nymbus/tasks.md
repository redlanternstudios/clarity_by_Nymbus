# Implementation Plan — Clarity by Nymbus

Source: `requirements.md`, `design.md`, `02-mvp-page-tree/clarity.mvp.page-tree.md` (minimum build order), `03-sdlc-release-package/clarity/07-STORY-POINTS.md`.

Build target: v0 frontend prototype, mock data only. Backend/production integration is out of scope for this phase.

Routing taxonomy note: keep route destinations to the four human-confirmed destinations only. If additional labels appear in mock data, treat them as intake categories or tags, not route endpoints.

Portal shell note: the target is a portal shell with role selection visible in the entry experience. If the current build still uses a detached role-card landing page, treat that as drift to be replaced, not the intended finish state.

- [x] 1. Global shell
  - Build top nav, left rail, role toggle, search, notification bell, user menu
  - Wire destinations: `/borrower`, `/servicing`, `/docs/*`
  - Apply dark theme from `clarity.tokens.css`
  - _Requirements: 6.1, 6.4_
  - _Verified: shell exists with nav rail, role switcher, and search; current landing treatment still uses role cards and needs replacement with the portal shell + visible role selector entry — 2026-07-31_

- [x] 2. Borrower home (`/borrower`)
  - Identity card, loan summary card, payment change card, notice preview, Ask Clarity entry, escalation entry
  - Wire all destinations: loan detail, notice detail, ask, escalate, history
  - Default/loading/empty states
  - _Requirements: 1.1, 1.5, 6.2_
  - _Verified: built with mock borrower "Maya," loan summary, payment change, recent notice, Ask Clarity + Get Help entries, next-step banner — 2026-07-31_

- [x] 3. Notice detail (`/borrower/notice/[id]`)
  - Original notice text with highlighted sections
  - Payment change, escrow shortage, tax adjustment, insurance adjustment callouts
  - Action guidance block
  - _Requirements: 1.2_
  - _Verified: built — original excerpt with highlighted clauses, 4-callout "What This Means" panel, action guidance, download notice action — 2026-07-31_

- [x] 4. Ask Clarity (`/borrower/ask`)
  - Suggested prompts, free-text input, answer panel, source references
  - Fallback message state for insufficient data
  - _Requirements: 5.1, 5.2_
  - _Verified: built — suggested questions, free-text box, answer panel with "Verified" source tag. Fallback/insufficient-data state not confirmed in screenshots — needs explicit check — 2026-07-31_

- [x] 5. Escalation flow (`/borrower/escalate`)
  - Reason picker, note field, confirm button
  - Success state routes to `/borrower/escalate/confirmed`
  - _Requirements: 1.4, 6.3_
  - _Verified: built — reason radio list, additional-details field, confirmation screen with reference number and link to history — 2026-07-31_

- [x] 6. Loan detail + loan history (`/borrower/loan/[id]`, `/borrower/history`)
  - Loan detail: principal, payment, rate, dates, escrow, status, change breakdown
  - History: timeline of prior notices, questions, outcomes
  - _Requirements: 1.1, 1.3_
  - _Verified: built — full loan detail plus a partial-data state (explicit "some information is currently unavailable" banner, dashed fields), and history timeline with notice/question/request entries — 2026-07-31_

- [x] 7. Servicing home (`/servicing`)
  - KPI cards, question trends, case queue preview, low-confidence alerts, routing summary
  - _Requirements: 4.1_
  - _Verified: built — open/routed/escalated counts, launch health badge, question trends table, case queue preview, low-confidence alert, routing summary — 2026-07-31_

- [x] 8. Case queue (`/servicing/cases`)
  - Filters, sortable table, status/owner/confidence/SLA columns
  - Actions: open, assign, change status, escalate, close
  - _Requirements: 2.1, 2.5, 6.3_
  - _Verified: built — status/category/priority/owner filters, table with priority/queue/confidence/SLA risk/owner/status columns, pagination. Row-level actions (assign, change status, escalate, close) show a "..." menu — contents not yet confirmed — 2026-07-31_

- [ ] 9. Case detail (`/servicing/cases/[id]`)
  - Borrower question, loan context, notice paragraph, explanation, confidence, timeline, recommended action, source records
  - Note composer wired to note history and owner
  - Actions: add note, reassign, request info, escalate, resolve — each with visible resulting state
  - _Requirements: 2.1, 2.2, 2.3, 2.5_

- [ ] 10. Trends (`/servicing/trends`)
  - Top questions, counts, trend direction, notice type, self-service success rate, escalation rate
  - _Requirements: 4.1, 4.2_

- [ ] 11. Notice insights (`/servicing/notice-insights`)
  - Original copy, confusing paragraph highlight, suggested rewrite, question frequency, estimated operational impact
  - No auto-apply of rewrite — display only
  - _Requirements: 4.3, 5.4_

- [ ] 12. Clarity Copilot (`/servicing/copilot`)
  - Prompt box, answer panel, source records, timestamps, owner, dependencies, risk level, confidence level, next step
  - Confirm-action state gates any routing/resolution suggestion
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 5.3_

- [ ] 13. Routing rules reference (`/servicing/routing`)
  - Static reference of the four supported destinations: floor support, customer support, product review, technical escalation
  - _Requirements: 3.5_

- [ ] 14. Docs pages (`/docs/product-brief`, `/docs/prd`, `/docs/technical-design`, `/docs/release-plan`, `/docs/user-stories`, `/docs/risk-log`, `/docs/ai-usage`)
  - Render existing SDLC package content (01-REQUIREMENTS, 03-ARCHITECTURE, 04-USER-STORIES, 02-RISK-REGISTER, 12-UI-PROTOTYPE-V0-PACK) into readable in-app pages
  - _Requirements: 6.1_

- [ ] 15. Full no-dead-page pass
  - Verify every nav item, primary button, and secondary action across all 20 routes resolves per Requirement 6
  - Verify all 9 required states (default, loading, empty, no results, partial data, error, routed, escalated, read-only locked) are represented somewhere in the build
  - _Requirements: 6.1, 6.2, 6.3, 6.4_

## Open Questions (must be resolved before or during build — not yet answered in source package)

1. Are Ask Clarity / Notice Insights / Clarity Copilot responses simulated (scripted against mock data) or backed by a real LLM call for this POC? Design assumes simulated unless decided otherwise.
2. Is the deliverable format Figma mockups, a running Next.js/v0 prototype, or both? This task list assumes a running v0 prototype per `12-UI-PROTOTYPE-V0-PACK.md`.
3. Do concrete mock data examples exist for each entity (borrower, case, leadership summary)? None are locked in the source package yet — needed before tasks 2–13 can be built with realistic content.

## Traceability Corrections Applied

- Requirement 3.5 now matches the routing destinations used in design and tasks.
- Servicing case data now includes the fields needed for note history, ownership, and source records.
- Floor support and leadership paths are explicitly mapped in `design.md`.
- EARS wording is normalized to use the system as the actor.
