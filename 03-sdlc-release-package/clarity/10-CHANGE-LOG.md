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

## v0.6

- Expanded the story set, acceptance criteria, DoD, points, team impacts, and support plan to match the richer portal scope
- Reframed the product around a portal shell with role selection instead of a detached role-card landing page
- Aligned the UI brief and locked prompt with the portal shell + role-selector layout and the remaining servicing screens
- Tightened the risk log to call out repo/Kiro/Drive drift and dead-end case actions

## v0.7 — Build Process Notes: Working Through Environment Constraints

The build environment introduced real ambiguity and tooling constraints along the way: inconsistent repository access, a Kiro workflow that hit a paid-tier ceiling, and a deployment pipeline that didn't behave predictably. Those were treated as delivery risks, not blockers — each one was documented as it came up, a workable alternative was chosen, and the product intent and audit trail were preserved throughout. The goal was never a perfectly clean build path; it was a coherent, reviewable product with nothing hidden.

Concretely: the product direction around loan servicing was clarified and constrained to a reviewable MVP, assumptions were documented as they were made, and work kept moving when repository access, Kiro availability, and deployment workflows were inconsistent. The committed repository was treated as the source of truth throughout, the spec-driven structure was preserved even when Kiro's own tooling couldn't be used end-to-end, and the priority stayed on delivering something coherent and reviewable rather than papering over unresolved gaps.

Below is the specific record — what happened, what's independently verified versus reported by the builder, and the alternative route taken in each case. Verified items are things directly observed and reproduced during the build. Reported items are stated as fact by the builder but not independently re-verified inside this record — labeled as such per this repo's own truth-labeling standard.

**Repo access / credentials**
- VERIFIED: the AI execution environment used for review and correction passes had no git push credentials at any point (`git push` consistently failed with `could not read Username for 'https://github.com'`). Every commit and push in this repo's history was authored locally and run from the builder's own terminal, one command at a time, with output verified before the next command.
- REPORTED: cloning the repo Nymbus/Kiro pointed to directly was blocked by credential issues on the builder's side, independent of the above. Alternative route: work continued against the builder's own GitHub remote (`redlanternstudios/clarity_by_Nymbus`) rather than blocking on that access.

**Kiro**
- REPORTED: Kiro's full spec-driven CLI workflow required a paid account to build past the spec stage. Alternative route: the Kiro spec files (`requirements.md`, `design.md`, `tasks.md`) in `.kiro/specs/clarity-by-nymbus/` were written directly, by hand, in Kiro's expected format, rather than generated through Kiro's own phased CLI flow. This is already noted in v0.3 above and is repeated here for visibility.
- VERIFIED: a separate Kiro session hit broken local git authentication and could not run local build or lint checks against this repo. Alternative route: that session fell back to the GitHub public API to re-verify repo contents (file listing, file contents) instead of a local clone, and flagged the local-tooling limitation explicitly rather than reporting false results.
- REPORTED: Kiro's automatic session/collaboration-history capture (the "Kiro hook" referenced in the assessment brief) has not been independently confirmed as active for this repo. This is called out as an open item, not claimed as done.

**Frontend / deployment**
- VERIFIED: a fully built, correctly styled version of the portal shell existed only inside a v0.app preview sandbox and was never pushed to the real repo or deployed branch — meaning the "live" deployment and the v0 preview drifted apart from each other. Root cause: v0.app's Create PR / merge flow did not reliably land changes on `main`, and GitHub's "automatically delete head branches on merge" setting compounded the confusion by removing the feature branches v0 needed to keep resolving previews against.
- VERIFIED: the deployed Vercel project also had a platform-level `404 NOT_FOUND` on `clarity-by-nymbus`'s deployments despite clean build logs, plus SSO/Authentication protection blocking public access on one project — both independent of the frontend code itself.
- Alternative route taken: rather than continuing to fight v0's merge flow, the correct UI was rebuilt directly in the local repo files (`app/page.tsx`, `components/TopBar.tsx`) to match the confirmed design reference, committed and pushed via terminal, and the deployment was pointed at the Vercel project confirmed to serve real `200` responses (`clarity`, live at `https://clarity-sage-eight.vercel.app/`). This produced a working, publicly reachable live URL for MVP review even though the original v0-driven merge path did not resolve cleanly.

**Overall build path (as reported by the builder)**
Code was written in Kiro (spec-first), cleaned up in Codex and Claude (structural fixes, correction passes, truth audits), and the frontend was refined in v0 (visual polish, component generation) before being reconciled back into the canonical repo. Where AI tools disagreed with each other or with the repo's actual state, the repo's committed code was treated as the source of truth — see `13-AI-USAGE.md` for the fuller AI-usage record.

## Notes

- Any future changes should preserve the lean package shape
- Do not add dead pages or unsupported branches
- Label accuracy check on architecture diagrams: "Data Ingestion," "Intelligence Layer," and "Outcomes & Actions" are synthesized labels, not literal component names from `03-ARCHITECTURE.md` — treat diagrams as conceptual, not a literal build inventory
- v0.7's "REPORTED" items reflect the builder's own account of tooling limitations (Kiro paywall, repo credential blocks) and are not independently reproducible from inside this repo — they are recorded for transparency, not claimed as verified fact
