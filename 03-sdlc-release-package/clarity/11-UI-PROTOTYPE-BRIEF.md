# UI Prototype Brief

## Purpose

This brief is the bridge from requirements to the v0 frontend prototype. It should produce a portal-style Clarity experience with a visible role selector inside the shell, not a detached role-card landing page.

## Required Screens

- Portal shell / role selector entry
- Borrower home view
- Loan detail view
- Notice detail view
- Ask Clarity view
- Escalation flow and confirmation
- Loan history view
- Servicing home view
- Case queue view
- Case detail view
- Trends view
- Notice insights view
- Routing rules view
- Clarity Copilot view
- Docs pages

## Required Components

- Stable top utility bar
- Left rail navigation
- Status summary card
- Read-only detail panel
- Note composer
- Queue table with owner and SLA columns
- Source reference panel
- Routing selector limited to the four confirmed destinations
- Support queue indicator
- Severity or priority label
- Human confirmation control for routed actions

## Required States

- Default
- Loading
- Empty
- No results
- Partial data
- Error
- Routed
- Escalated
- Read-only locked

## Route Rules

- No dead pages
- Every screen should lead somewhere useful
- Every action should have a visible next step
- Borrower should feel like the primary product path
- Support views should feel like an operations console, not a marketing page

## v0 Prompt Notes

- Use the design tokens already captured in `01-design-system-tokens/clarity.tokens.css`
- Keep the visual language close to the Nymbus palette
- Use mock data only
- Match the page tree in `02-mvp-page-tree/clarity.mvp.page-tree.md`
- Do not add a detached role-card landing page that removes the portal shell
- Do not add extra screens that are not in the page tree
