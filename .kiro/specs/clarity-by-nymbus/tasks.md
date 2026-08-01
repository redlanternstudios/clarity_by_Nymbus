# Implementation Plan — Clarity by Nymbus

Source: `requirements.md`, `design.md`, `02-mvp-page-tree/clarity.mvp.page-tree.md` (minimum build order), `03-sdlc-release-package/clarity/07-STORY-POINTS.md`.

Build target: v0 frontend prototype, mock data only. Backend/production integration is out of scope for this phase.

Routing taxonomy note: keep route destinations to the four human-confirmed destinations only (Floor Support, Customer Support, Product Review, Technical Escalation — these are the values actually used in `/servicing/cases` mock data). If additional labels appear elsewhere, treat them as intake categories or tags, not route endpoints.

RESOLVED 2026-08-01 — routing taxonomy mismatch: `/servicing/routing` previously rendered an 8-item destination list that didn't match the four destinations used by `/servicing/cases`. Fixed in `app/servicing/routing/page.tsx` — the page now lists the four canonical destinations (Floor Support, Customer Support, Product Review, Technical Escalation), matching Req 3.5 and the case-queue mock data. `02-mvp-page-tree/clarity.mvp.page-tree.md` was also corrected (it still had the old 8-item list and the stale `/servicing/routing-rules` path). Verified via `npm run build` — all 20 routes still compile after the change.

- [x] 1. Global shell
  - Build top nav, left rail, role toggle, search, notification bell, user menu
  - Wire destinations: `/borrower`, `/servicing`, `/docs/*`
  - Apply dark theme from `clarity.tokens.css`
  - _Requirements: 6.1, 6.4_
  - _Verified: portal shell rebuilt 2026-07-31 — grouped left sidebar (Borrower/Servicing/Documentation), role-selector tabs in top bar, gradient "Clarity" headline, four role-entry cards linking to real routes. Confirmed on `main` via `app/page.tsx` + `components/TopBar.tsx`. Prior "still uses role cards, needs replacement" note is resolved — the role cards now sit inside the shell (nav rail + top bar), not as a detached landing page._

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
  - _Verified: built — suggested questions, free-text box, answer panel with "Verified" source tag. Fallback/insufficient-data state CONFIRMED in code — `app/api/ask-clarity/route.ts` defines `FALLBACK_MESSAGE` and wires it into both the prompt-injection hard-block path and system-prompt rule #2 — 2026-07-31_

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
  - _Verified: built — status/category/priority/owner filters, table with priority/queue/confidence/SLA risk/owner/status columns, pagination — 2026-07-31_
  - _RESOLVED 2026-08-01: the "⋯" Actions button previously had no `onClick`. Wired a real row-action menu — Assign next owner, Change status, Escalate, Close as resolved — each mutating client-side case state (`useState`) and surfacing a dismissible confirmation banner ("CL-1047 reassigned to Sarah Rivera", etc.) per Requirement 2.5's "reflect the resulting state visibly." Case rows now also show a live `Status` column. Data is still mock/local-state only — no persistence across reload, which is correct for this POC's stated constraints. Verified via `npm run build`._

- [~] 9. Case detail (`/servicing/cases/[id]`) — PARTIAL
  - Borrower question, loan context, notice paragraph, explanation, confidence, timeline, recommended action, source records
  - Note composer wired to note history and owner
  - Actions: add note, reassign, request info, escalate, resolve — each with visible resulting state
  - _Requirements: 2.1, 2.2, 2.3, 2.5_
  - _Verified 2026-07-31: route exists and builds — case context card, timeline, recommended-action panel, and Add Note/Route/Escalate/Resolve buttons are all real UI. GAP: buttons have no `onClick` handlers — no note composer input, no note history, no state transition on click. Requirement "each with visible resulting state" is NOT met. Route renders; actions are decorative._

- [~] 10. Trends (`/servicing/trends`) — PARTIAL
  - Top questions, counts, trend direction, notice type, self-service success rate, escalation rate
  - _Requirements: 4.1, 4.2_
  - _Verified 2026-07-31: route exists and builds — top-questions bar list with volume + share, "what leadership sees" panel. GAP: no trend direction indicator, no notice-type breakdown, no self-service/escalation rate metrics called for in the requirement. Simpler than spec, not absent._

- [~] 11. Notice insights (`/servicing/notice-insights`) — PARTIAL
  - Original copy, confusing paragraph highlight, suggested rewrite, question frequency, estimated operational impact
  - No auto-apply of rewrite — display only
  - _Requirements: 4.3, 5.4_
  - _Verified 2026-07-31: route exists and builds — single before/after comparison card, correctly read-only (no auto-apply, satisfies that requirement). GAP: no question-frequency data, no estimated operational impact figure, only one example pair instead of a set._

- [~] 12. Clarity Copilot (`/servicing/copilot`) — PARTIAL
  - Prompt box, answer panel, source records, timestamps, owner, dependencies, risk level, confidence level, next step
  - Confirm-action state gates any routing/resolution suggestion
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 5.3_
  - _Verified 2026-07-31: route exists and builds — one hardcoded prompt/answer pair and a "Confirm action" button correctly gating the suggestion (satisfies the confirm-gate requirement conceptually). GAP: prompt is static text, not an actual input; no source records, timestamps, owner, dependencies, risk level, or confidence level shown; Confirm action button has no `onClick` — clicking it does nothing._

- [x] 13. Routing rules reference (`/servicing/routing`)
  - Static reference of the four supported destinations: floor support, customer support, product review, technical escalation
  - _Requirements: 3.5_
  - _Verified 2026-07-31: route exists and builds, but content was WRONG — 8 destinations that didn't match the app's canonical four._
  - _RESOLVED 2026-08-01: replaced the 8-item list with the four canonical destinations (Floor Support, Customer Support, Product Review, Technical Escalation), now consistent with `requirements.md` Req 3.5 and `/servicing/cases`. Verified via `npm run build`._

- [x] 14. Docs pages (`/docs/product-brief`, `/docs/prd`, `/docs/technical-design`, `/docs/release-plan`, `/docs/user-stories`, `/docs/risk-log`, `/docs/ai-usage`)
  - Render existing SDLC package content (01-REQUIREMENTS, 03-ARCHITECTURE, 04-USER-STORIES, 02-RISK-REGISTER, 12-UI-PROTOTYPE-V0-PACK) into readable in-app pages
  - _Requirements: 6.1_
  - _Verified 2026-07-31: all 7 slugs confirmed real in `app/docs/[slug]/page.tsx` — title, image, and summary content mapped for each. This item was undercounted by the review; it is genuinely done._

- [ ] 15. Full no-dead-page pass
  - Verify every nav item, primary button, and secondary action across all 22 routes resolves per Requirement 6
  - Verify all 9 required states (default, loading, empty, no results, partial data, error, routed, escalated, read-only locked) are represented somewhere in the build
  - _Requirements: 6.1, 6.2, 6.3, 6.4_
  - _Still open. Remaining known decorative elements not addressed in this pass: Case Detail (`/servicing/cases/[id]`) note composer and action buttons (task 9), Clarity Copilot's Confirm action button and static-only prompt (task 12), and Trends/Notice Insights' simpler-than-spec data (tasks 10, 11)._

- [x] 16. Reconcile Floor Support / Leadership routes against the locked page tree
  - _Requirements: 6.4_
  - _RESOLVED 2026-08-01: `/floor-support` and `/leadership` were built as real, functioning top-level routes and linked from the role selector on `/`, but the source-of-truth `02-mvp-page-tree/clarity.mvp.page-tree.md` never defined them — it assumed both roles entered through `/servicing`. This was a genuine Req 6.4 violation (a route existed outside the locked page tree), not just a `tasks.md` omission. Rather than delete two working, well-built pages, the page tree and `design.md` were amended to document these as deliberate additions (each role needed a distinct home per the Constraints section), and the route count was corrected from 20 to 22 throughout. See amendment notes dated 2026-08-01 in both `design.md` and the page-tree doc for the full reasoning._

## Open Questions (must be resolved before or during build — not yet answered in source package)

1. Are Ask Clarity / Notice Insights / Clarity Copilot responses simulated (scripted against mock data) or backed by a real LLM call for this POC? Design assumes simulated unless decided otherwise.
2. Is the deliverable format Figma mockups, a running Next.js/v0 prototype, or both? This task list assumes a running v0 prototype per `12-UI-PROTOTYPE-V0-PACK.md`.
3. Do concrete mock data examples exist for each entity (borrower, case, leadership summary)? None are locked in the source package yet — needed before tasks 2–13 can be built with realistic content.

## Traceability Corrections Applied

- Requirement 3.5 now matches the routing destinations used in design and tasks.
- Servicing case data now includes the fields needed for note history, ownership, and source records.
- Floor support and leadership paths are explicitly mapped in `design.md`.
- EARS wording is normalized to use the system as the actor.
