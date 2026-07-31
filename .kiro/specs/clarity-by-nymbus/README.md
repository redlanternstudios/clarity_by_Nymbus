# Clarity by Nymbus - Kiro Spec Pack

This folder is the Kiro-ready spec set for the Clarity by Nymbus POC.

## Contents

- `requirements.md` - EARS-style requirements and acceptance criteria
- `design.md` - system boundaries, data model, screen map, and guardrails
- `tasks.md` - implementation order and traceability back to requirements

## Source of Truth

This Kiro pack mirrors the lean SDLC package in `03-sdlc-release-package/clarity/`.
If anything ever disagrees, the SDLC package wins and this folder should be updated to match it.

## Build Boundary

- POC only
- mock data only
- frontend prototype only
- read-only guidance layer, never a system of record replacement
- no dead pages, no hidden automation, no unconfirmed routing

