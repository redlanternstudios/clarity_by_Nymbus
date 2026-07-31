# AI Usage - Clarity by Nymbus

## What This Is

This is my record of how I used AI on the Clarity by Nymbus POC.
I wanted the work to be easy to audit and easy to trust. I also wanted it to be obvious where AI helped and where I made the judgment calls myself.

## Where AI Helped

- ChatGPT and Codex helped me turn the project brief into locked requirements with clear constraints and traceability.
- ChatGPT and Codex helped me line up the page tree, data model, routing rules, and read only guardrails.
- ChatGPT and Codex helped me turn the design into a build order that maps back to the requirements.
- ChatGPT and Codex helped me expand the story set, acceptance criteria, DoD, story points, team impacts, and support plan so the package matched the broader portal scope.
- ChatGPT and Codex helped me draft the repo README, the package README, and this note.
- ChatGPT and Codex helped me mirror the SDLC package into `.kiro/specs/clarity-by-nymbus/`.
- CTP and Buildteam helped me catch contradictions, missing fields, route mismatches, shell drift, and role path gaps.
- ChatGPT and Codex helped me tighten the UI image pack prompt so it stayed inside the actual scope and away from the old role-card landing pattern.

## What AI Did Not Do

AI did not write production code for the prototype.
AI did not access live Nymbus systems.
AI did not pull in outside business facts that were not supplied or verified in this repo.
AI did not make product decisions without me reviewing them.
AI did not replace traceability, review, or scope control.

## How I Kept It Honest

I checked every AI assisted output against the locked repo materials and the interview prompt before I kept it.
If something could not be verified from the repo or the prompt, I kept it labeled as a draft or a working assumption instead of treating it like fact.

## Constraints I Kept On

POC only.
Mock data only.
Frontend prototype only.
No dead pages.
No hidden automation.
No unconfirmed routing.
No invented routes or role paths.

## Why I Used Kiro

Kiro was the spec format I was aiming for, so I wrote the final spec files in a Kiro ready structure and kept them in source control.
That keeps the work reviewable instead of buried in a chat thread.

## What Changed Because of AI Review

- Routing destinations were normalized to one human confirmed four destination model.
- The servicing case data model was expanded to include note history, owner, SLA state, and source records.
- Floor support and leadership paths were made explicit.
- The portal shell was reframed as a visible role-selector shell instead of a detached role-card landing page.
- The story set, acceptance criteria, DoD, points, teams, support plan, and UI brief were widened to match the more robust portal.
- The EARS wording was cleaned up so the system stays the actor.

## What I Would Want a Reviewer to See

- The repo contains the locked SDLC package and Kiro spec pack.
- The UI prompt matches the page tree and visual tokens.
- The README explains the approach and next steps without fluff.
- The AI usage note says exactly what AI did and did not do.
