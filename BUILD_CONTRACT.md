# Clarity Build Contract

This document locks the minimum information needed to build the clickable POC and its image pack without drift.

## Contract

### 1) Canonical mock data
One shared dataset must drive every screen, modal, drawer, table, and status state.

It must cover:
- borrower identity and loan summary
- notice identity and explanation text
- case identity, queue, routing, escalation, and timeline
- leadership summary metrics and launch health
- source references used by Ask Clarity, Notice Insights, and Copilot

Rules:
- one source of truth
- no screen-specific invented values
- no contradictory counts, labels, or statuses
- mock responses must stay deterministic

### 2) Screen-by-screen spec
Every route must define exactly what appears on the page.

Each screen spec must include:
- page title
- subtitle or helper copy
- role or audience
- primary panel
- secondary panel
- visible controls
- disabled controls
- navigation state
- mobile behavior
- which screenshot state it represents

### 3) Click and action outcomes
Every control must declare what it opens or changes and what the user sees after.

Each action definition must include:
- control label
- control type
- current screen
- destination or state change
- final visible outcome
- whether it is confirm-only, mock-only, or read-only

### 4) Role-to-route mapping
Each audience must have an explicit route path and permission model.

Required roles:
- Borrower
- Servicing Agent
- Floor Support
- Leadership

Rules:
- no hidden routes
- no dead pages
- no role ambiguity
- leadership and floor support must be intentionally mapped, not implied
- the portal shell may include role selector cards, but it must not become a detached role-card landing page that replaces the shell

### 5) State-by-screen matrix
Every required screen needs a declared state set.

Required states include:
- default
- loading
- empty
- no results
- partial data
- error
- routed
- escalated
- read-only locked

The portal shell, servicing console, and docs pages all need a visible state story.

Each screenshot or mockup must say which state it shows.

## Build Rules

- dark Nymbus-style interface only unless a light variant is explicitly requested
- no autonomous resolution behavior
- no invented branches
- no placeholder copy that conflicts with the canonical dataset
- no screen is complete until its controls, outcomes, and state are declared

## Why this matters
This is the lock that keeps the clickable POC, slide deck references, and visual pack aligned.

Without it, screenshots drift, routes conflict, and reviewers miss the intended flow.
