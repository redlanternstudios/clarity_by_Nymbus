# Clarity by Nymbus — Collaboration Log

This file is appended to automatically by `.kiro/hooks/capture-collaboration-context.kiro.hook`.

- On every prompt submitted to Kiro (`UserPromptSubmit`), the raw prompt and a timestamp are appended below.
- After every agent turn (`Stop`), a short summary of the decision/change is appended under the matching entry.

Nothing in this file is written by hand — it is a live record, not an after-the-fact summary. If this file looks sparse, it means the hook has only recently been enabled; entries accumulate from this point forward in real Kiro sessions that touch this repo.

---

### 2026-08-01T00:00:00-00:00 (hook installed — retroactive marker, not a live capture)

**Prompt:**

N/A — this entry marks when `.kiro/hooks/capture-collaboration-context.kiro.hook` was added to the repo during a repo audit. Prior collaboration context for this project lives in `03-sdlc-release-package/clarity/13-AI-USAGE.md` and `03-sdlc-release-package/clarity/10-CHANGE-LOG.md` (v0.7), which were written by hand because this automatic hook did not exist yet.

**Response summary:**

- Added the hook so future sessions capture prompts and turn summaries automatically instead of relying on hand-written change logs.
- Left all prior hand-written AI-usage documentation in place as the historical record for work done before this hook existed.
