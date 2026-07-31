# Clarity by Nymbus - Locked V0 Design Prompt

## Use This Exactly

Use this prompt for the v0 UI image pack and the frontend prototype.
Build only what is in the locked page tree and tokens. Do not add extra screens, hidden flows, or visual flourishes that are not already in the spec.

## Design Goal

Make Clarity feel premium, calm, and trustworthy.
It should feel like a Nymbus product with a Clarity layer on top. Clean. Direct. Not loud. Not flashy.

## Non Negotiables

- Use the exact palette from `01-design-system-tokens/clarity.tokens.css`
- Use the exact route map from `02-mvp-page-tree/clarity.mvp.page-tree.md`
- Use mock data only
- Keep every system of record field read only
- Do not invent screens, actions, routes, or states
- Do not use emoji icons
- Do not use decorative gradients that overpower the content
- Do not use playful fintech styling
- Do not make the layout feel empty or oversized

## Exact Visual System

### Colors

- Base background: `#1C2027`
- Surfaces: `#1E2636`, `#1B1F35`, `#22263B`
- Accent blue: `#7090E8`
- Accent cyan: `#90D0E8`
- Text: `#F3F6F7`
- Muted text: `#A6AEBE`
- Borders: `#3C4653`

### Typography

- Display: `Iowan Old Style`, `Baskerville`, `Times New Roman`, serif
- Body: `Inter`, `Segoe UI`, `Helvetica Neue`, Arial, sans-serif

### Shape and depth

- Use rounded cards, but keep them restrained
- Use subtle shadows only
- Use border contrast for separation, not heavy decoration
- Keep the surface stack quiet and readable

## Layout Rules

- Build a stable shell with a left rail, a clean top utility bar, and a content canvas
- Keep the main content centered and content sized
- Do not let the page stretch into a loose, empty admin layout
- Keep spacing disciplined and consistent
- Use one clear primary action per screen
- Keep secondary actions visually quieter than the main task

## Borrower Home Fix

The borrower home screen should feel like a real product page, not a draft dashboard.

- Put the payment change summary at the top
- Keep the loan summary immediately visible
- Keep the recent notice visible without forcing extra clicks
- Make `Ask Clarity` the clearest call to action
- Keep the next step simple and direct
- Use separate sections with clear labels instead of one giant flat block
- Keep read only data clearly read only

## Role Behavior

### Borrower

- Calm
- Clear
- Trustworthy
- Simple next step

### Servicing Agent

- Efficient
- Context rich
- Actionable
- No clutter

### Floor Support

- Routing focused
- Triage focused
- Fast to scan

### Leadership

- Trend focused
- Clean signal
- No noise

## Required Pages

Build exactly the page tree in `02-mvp-page-tree/clarity.mvp.page-tree.md`:

- Borrower Home
- Loan Detail
- Notice Detail
- Ask Clarity
- Escalation Flow
- Loan History
- Servicing Home
- Case Queue
- Case Detail
- Trends
- Notice Insights
- Routing Rules
- Clarity Copilot
- Docs pages

## Required States

Show the real state system from the page tree and spec:

- Default
- Loading
- Empty
- No results
- Partial data
- Error
- Routed
- Escalated
- Read only locked

## Prompt For v0

Build the Clarity by Nymbus UI with these rules:

- Use the exact Clarity dark palette from the token file
- Keep the look premium, restrained, and readable
- Make the borrower experience feel calm and direct
- Make the servicing experience feel efficient and clear
- Make the floor support and leadership views feel functional, not decorative
- Include the chatbot routing concept as a guided support layer
- Keep every path aligned to the locked page tree
- Do not add extra pages, widgets, or fake features
- Do not drift into generic SaaS styling
- Do not overbuild the layout just to make it look busy

## What This Should Fix

This prompt is meant to fix the exact problem where the screen feels like a first draft.
The answer is not more stuff. The answer is better structure, better spacing, cleaner hierarchy, and a quieter premium shell.
