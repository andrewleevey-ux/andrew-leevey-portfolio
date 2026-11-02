<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Architecture & UI Guardrails

## Non-Negotiable UI & Visual Elements
- **Canvas:** Must always retain the Miro-style dot-grid background (`slate-50` with radial-gradient dot pattern). Never replace with plain backgrounds.
- **Typography:**
  - The 'Caveat' font (handwritten whiteboard marker) must always be preserved for 'Andrew Leevey' and primary section titles.
  - All other body and UI elements must use clean sans-serif ('Inter').
- **Navigation:** Bottom-centered floating pill toolbar with glassmorphic styling and Lucide icons. Do not revert to standard top navigation bars.
- **Interactive Cursors:**
  - Keep the animated wandering 'Andrew (Lead)' cursor in the hero section.
  - Keep the high-performance 'Visiting Guest' cursor. Mouse tracking must always use `useRef` or Framer Motion values—never update mouse coordinates via React state (`useState`).
- **Cards & Styling:**
  - 'Key Skills' must always remain tactile sticky notes with subtle rotation.
  - 'Case Studies' must remain uniform, modern cards.

## Development Rules
- **Additive Changes Only:** When adding new sections, pages, or routes, do not strip, rewrite, or simplify existing styling or components unless explicitly asked.
- **Performance:** Keep animation logic decoupled from full React re-render cycles.

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Ignore routine debugging and unverified changes. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Keep a qualifying candidate through the reporting pass even if you resolve or work around it. A successful fix changes the report outcome; it does not erase the friction that qualified it.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `node node_modules/next/dist/bin/next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->
