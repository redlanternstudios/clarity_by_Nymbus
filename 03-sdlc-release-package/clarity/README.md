# Clarity by Nymbus

## How I Approached This

This is the plan I used for the Clarity by Nymbus POC.
I kept it tight because the goal was not to make something huge. The goal was to make something clear, usable, and easy to hand to someone else without extra explanation.

## What I Am Building

This is a POC.
It is a mock data frontend prototype.
It sits on top of servicing workflows as a read only guidance layer.
It tells the story for borrowers, servicing agents, floor support, and leadership.
It should feel like a portal shell with role selection inside it, not a detached role-card landing page.

## What I Am Not Building

I am not replacing the servicing system.
I am not building a backend integration project.
I am not hiding automation in the UI.
I am not creating an autonomous routing engine.
I am not trying to turn this into a broad fintech platform.

## What I Kept Locked

I started by keeping the product shape consistent across the whole package.
The requirements, design, tasks, page tree, and visual tokens all point at the same thing.
If a route, screen, or action was not in the spec, I left it out.

I kept the build order narrow.
Portal shell first.
Borrower next.
Servicing next.
Docs and verification at the end.

I kept the UI calm.
One glance should make the screen make sense.

I kept the mock state honest.
Notes, routing confirmations, assignments, escalations, and resolves are local UI state only.
Loan, payment, and notice data stay read only.

## Source of Truth

- `01-REQUIREMENTS.md`
- `03-ARCHITECTURE.md`
- `04-USER-STORIES.md`
- `05-ACCEPTANCE-CRITERIA.md`
- `06-DEFINITION-OF-DONE.md`
- `07-STORY-POINTS.md`
- `08-TEAMS-IMPACTED.md`
- `09-POST-RELEASE-SUPPORT.md`
- `10-CHANGE-LOG.md`
- `11-UI-PROTOTYPE-BRIEF.md`
- `12-UI-PROTOTYPE-V0-PACK.md`
- `15-V0-DESIGN-PROMPT.md`

## Next Steps

1. Finalize the UI image pack from the locked prompt.
2. Turn the approved mockups into the v0 frontend prototype.
3. Keep the build aligned with the page tree and route map.
4. Keep the read only boundary intact for system of record data.
5. Make sure every required state shows up somewhere in the prototype.
6. Package the repo link with a short note on what I built and why.

## Handoff Standard

I want this repo to make sense to somebody outside the build.
The docs should be short, direct, and easy to scan.
The prototype should follow the spec instead of trying to be clever.
