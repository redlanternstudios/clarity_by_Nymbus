# Clarity by Nymbus - Interactive Prototype

A high-fidelity interactive prototype of **Clarity by Nymbus**, a loan servicing intelligence platform. This prototype demonstrates the core borrower user experience with real LLM integration for AI-powered question answering.

## Stack

- **Framework**: Next.js 16 (App Router)
- **UI Styling**: Minimal dark theme with custom CSS (design tokens: #1C2027 bg, #7090E8 accent, #F3F6F7 text)
- **AI Integration**: Vercel AI SDK with OpenAI GPT-4/Claude
- **State Management**: React client-side state hooks
- **Data**: Mock data only (no database persistence)

## Features

### Borrower Flow (8 Screens)

1. **Global Shell** - Role selector entry point
2. **Borrower Home** - Dashboard with key loan metrics
3. **Loan Detail** - Full loan breakdown with principal, interest, payment info
4. **Notice Detail** - Annual Escrow Analysis notice display
5. **Ask Clarity** - AI-powered Q&A about loan and notices
6. **Request Help** - Escalation form for human support
7. **Loan History** - Timeline of notices, questions, and outcomes
8. **Sidebar Navigation** - Always-available navigation with role info

### AI-Powered Features

- **Ask Clarity endpoint** (`/api/ask-clarity`): Streams real LLM responses
- **Suggested questions** with tags for context-based filtering
- **Loan context injection** into AI prompts for accurate answers
- **Real-time streaming** of AI responses via Server-Sent Events

### Mock Data

- **Borrower**: Maya Thompson
- **Loan**: LN-20481
  - Principal: $286,420
  - Rate: 4.25% Fixed
  - Current Payment: $1,982
  - Next Due: September 1, 2026

- **Notice**: Annual Escrow Analysis (NT-7821)
- **Escalation History**: Support case CL-1047

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)
- OpenAI API key (for Ask Clarity feature)

### Installation

```bash
pnpm install
```

### Environment Setup

Create `.env.local`:

```env
OPENAI_API_KEY=your_key_here
```

### Run

```bash
pnpm dev
```

Navigate to `http://localhost:3000`

1. Click **"Open Borrower"** on the role selector
2. Explore the navigation sidebar
3. Click **"Ask Clarity"** to test the AI feature

## Architecture

### File Structure

```
app/
├── page.tsx                    # Global shell with role selector
├── borrower/
│   ├── layout.tsx             # Borrower layout with sidebar
│   ├── page.tsx               # Home dashboard
│   ├── loan-detail/
│   ├── notice-detail/
│   ├── ask-clarity/
│   ├── escalation/
│   └── history/
├── api/
│   └── ask-clarity/           # LLM streaming endpoint
└── globals.css                # Design tokens and base styles

lib/
├── types.ts                   # TypeScript interfaces
└── data.ts                    # Mock data (loans, notices, etc.)
```

### Design System

**Colors:**
- Background: `#1C2027`
- Elevated: `#1B1F35`
- Surface: `#1E2636`
- Border: `#3C4653`
- Text Primary: `#F3F6F7`
- Text Muted: `#A6AEBE`
- Accent: `#7090E8`

**Typography:**
- Sans serif: System font stack
- Serif: Georgia/serif fallback for headings
- Line height: 1.6 (readable)

**Components:**
- Cards with borders and subtle shadows
- Form inputs with accent focus state
- Buttons with hover state transitions
- Sidebar navigation with emoji icons

## Deployment

The app is ready to deploy to Vercel. Ensure `OPENAI_API_KEY` is set in environment variables.

```bash
vercel deploy
```

## Known Limitations

- **No backend persistence** - All data is mock/client-side only
- **No authentication** - Role selector is the only access control
- **No Servicing Agent features** - Only Borrower flow is implemented
- **Mock AI responses** - Requires valid OpenAI API key to use real LLM

## Future Enhancements

- Add Servicing Agent dashboard and case queue
- Implement Floor Support and Leadership roles
- Add backend database (Neon + Supabase)
- User authentication and sessions
- Production-grade error handling
- Analytics and monitoring

## Screenshots

All 33 UI mockup images are in `public/mockups/` for design reference.

---

Built with v0 for Nymbus. Dark theme, minimal design, Apple-clean aesthetic.
