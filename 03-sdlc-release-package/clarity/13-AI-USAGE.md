# AI Usage - Clarity by Nymbus

## Purpose

This document records how AI was used in the Clarity by Nymbus POC so the submission is auditable and clear.

## AI Was Used For

| Area | Tooling | Result |
|---|---|---|
| Requirements shaping | ChatGPT / Codex | Converted the project brief into locked, EARS-style requirements with explicit constraints and traceability |
| Design normalization | ChatGPT / Codex | Reconciled the page tree, data model, routing boundaries, and read-only guardrails |
| Task planning | ChatGPT / Codex | Turned the design into a build order with requirement traceability |
| Docs structure | ChatGPT / Codex | Drafted the repo README, package README, and AI usage notes in a reviewable format |
| Kiro spec packaging | ChatGPT / Codex | Mirrored the SDLC package into `.kiro/specs/clarity-by-nymbus/` |
| Quality control | CTP / Buildteam | Checked for contradictions, missing fields, route mismatches, and role-path gaps |
| UI prompt tightening | ChatGPT / Codex | Produced the image-pack prompt with strict anti-hallucination rules and canonical mock data |

## AI Was Not Used For

- Writing production code for the prototype
- Accessing live Nymbus systems
- Pulling external business facts that were not supplied or verified in this repo
- Making product decisions without human review
- Replacing the need for traceability, review, or scope control

## Human Review Boundary

All AI-assisted output was reviewed against the locked repo materials and the interview prompt before being committed.
If a file could not be verified against the repo source, it was kept explicitly labeled as a draft or a working assumption rather than being presented as fact.

## Constraints Applied

- POC only
- mock data only
- frontend prototype only
- no dead pages
- no hidden automation
- no unconfirmed routing
- no invented routes or role paths

## Notes on Kiro

Kiro was used as the target spec format.
The final Kiro-ready files were written into the repo directly so the package could stay source-controlled and reviewable.

## What Changed Because of AI Review

- Routing destinations were normalized to one four-destination human-confirmed model
- The servicing case data model was expanded to include note history, owner, SLA state, and source records
- Floor support and leadership paths were explicitly mapped
- EARS wording was normalized to keep the system as the actor

## Sign-Off Standard

Before submission, the build should satisfy all of the following:

- The repo contains the locked SDLC package and Kiro spec pack
- The UI prompt matches the page tree and visual tokens
- The README explains approach and next steps without ambiguity
- The AI usage note accurately reflects what AI did and did not do

