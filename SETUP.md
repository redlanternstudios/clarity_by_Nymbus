# Setup Guide - Clarity by Nymbus Prototype

## Quick Start (2 minutes)

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Set Up API Key (Optional - for AI features)

The prototype works without an API key, but Ask Clarity requires one to get real LLM responses.

**Get your OpenAI API key:**
1. Go to https://platform.openai.com/account/api-keys
2. Create a new secret key
3. Copy it

**Add to `.env.local`:**
```env
OPENAI_API_KEY=sk_test_xxxxxxxxxxxx
```

### 3. Start Dev Server
```bash
pnpm dev
```

The app opens at `http://localhost:3000`

### 4. Explore the Prototype

**Global Shell Screen** (Entry point):
- Click the **"Open Borrower"** card to enter the Borrower flow

**Borrower Home**:
- View dashboard with key metrics
- See loan summary cards
- Access navigation from sidebar

**Key Screens to Try**:
- **Loan Detail** - Full loan data with payment breakdown
- **Notice Detail** - Read the Annual Escrow Analysis  
- **Ask Clarity** - Try asking questions (requires API key)
- **Request Help** - Fill out escalation form
- **Loan History** - See activity timeline

---

## API Key Setup Details

### Without API Key
- Ask Clarity page loads but **Send button is disabled**
- Mock questions are still available to browse
- All other features work normally

### With API Key
- **Ask Clarity works fully** with streaming responses
- Real GPT-4 or Claude responses to loan questions
- Loan context automatically injected into prompts

### Set Environment Variable (Vercel)
When deploying to Vercel:
1. Go to Project Settings → Environment Variables
2. Add `OPENAI_API_KEY` with your secret key
3. Redeploy

---

## File Structure Reference

| File | Purpose |
|------|---------|
| `app/page.tsx` | Global shell with role selector |
| `app/borrower/layout.tsx` | Borrower sidebar layout |
| `app/borrower/page.tsx` | Home dashboard |
| `app/borrower/loan-detail/` | Loan Detail page |
| `app/borrower/notice-detail/` | Notice Detail page |
| `app/borrower/ask-clarity/` | Ask Clarity with AI integration |
| `app/borrower/escalation/` | Escalation form page |
| `app/borrower/history/` | Loan History timeline |
| `app/api/ask-clarity/route.ts` | LLM streaming endpoint |
| `lib/data.ts` | Mock data (loans, notices) |
| `lib/types.ts` | TypeScript types |
| `app/globals.css` | Design tokens and base styles |

---

## Troubleshooting

**"Ask Clarity button is disabled"**
- Set `OPENAI_API_KEY` in `.env.local`
- Restart dev server: `pnpm dev`

**"Ask Clarity shows an error"**
- Check API key is valid at https://platform.openai.com
- Ensure quota/credits available in OpenAI account

**"Page styles look wrong"**
- Clear browser cache: `Ctrl+Shift+Del` (or `Cmd+Shift+Del`)
- Restart dev server: `pnpm dev`

**"Navigation doesn't work"**
- Try hard refresh: `Ctrl+F5` (or `Cmd+Shift+R`)
- Check console for errors: `F12` → Console tab

---

## Deployment to Vercel

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy (will prompt for project setup)
vercel deploy

# Set environment variable
vercel env add OPENAI_API_KEY
# (enter your API key when prompted)

# Redeploy with env vars
vercel deploy --prod
```

---

## Design Reference

All 33 mockup images are in `public/mockups/`:
- `01-global-shell.png` - Role selector
- `02-borrower-home.png` - Home dashboard
- `03-loan-detail.png` - Loan data
- `05-notice-detail.png` - Notice display
- `07-ask-clarity-default.png` - AI Q&A screen
- `10-escalation-flow.png` - Support form
- And 27 more...

---

## Next Steps

**To extend the prototype:**

1. **Add more screens**: Create new pages in `app/borrower/`
2. **Customize mock data**: Edit `lib/data.ts`
3. **Modify styling**: Update `app/globals.css` (design tokens)
4. **Add backend**: Integrate Neon/Supabase database
5. **Add auth**: Use Better Auth or Supabase Auth

See `PROTOTYPE.md` for full documentation.
