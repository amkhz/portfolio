# Project Context: Justin Hernandez Portfolio

## Overview
This is a personal portfolio site for Justin Hernandez, a lead product designer specializing in AI-powered enterprise product design. The site is built with a custom design token system as a proof-of-concept for an AI-powered design system workflow. The process of building this site is itself a case study.

## Stack
- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS, extended with custom design tokens
- **Fonts:** Google Fonts — Podkova (display), Space Grotesk (headings), Didact Gothic (body)
- **Deployment:** Vercel
- **Token source of truth:** `src/lib/tokens.ts`

## Visual Direction
**Concept:** "Blade Runner meets Finn Juhl" — Danish mid-century modern warmth fused with sci-fi atmosphere.
**Reference:** Duck and Cover bar in Copenhagen.

### Key design principles:
- Dark mode is the DEFAULT and primary experience
- Warm, never cold or sterile — backgrounds are warm blacks (#0A0A0B, #121214), not pure black
- Text is warm parchment (#F0EDE8), never pure white
- Dual accent system: aged brass (#C8956A) for primary/warm elements, teal (#5BA8A0) for tech/interactive elements
- Texture and depth over flatness — use subtle grain overlays, ambient glows, layered shadows
- Typography carries personality; layout stays restrained and confident
- Spacing should feel intentional and generous — Scandinavian restraint, not cramped
- Motion is subtle and purposeful — no flashy animations, gentle reveals and transitions

### What this site should NOT look like:
- A default Tailwind/shadcn template
- Cold, clinical, or corporate
- Flat and textureless
- Neon or cyberpunk (the sci-fi is atmospheric and warm, not garish)
- Overly decorated or busy — restraint is key

## Typography System
- **Podkova** (serif, variable): Hero text, big display statements, case study titles. Use with tight letter-spacing (-0.02em) and tight line-height (1.1). This is the personality font.
- **Space Grotesk** (sans-serif, variable): Section headings, nav links, buttons, labels. Geometric precision that bridges mid-century and sci-fi. Use at medium/semibold weights.
- **Didact Gothic** (sans-serif, 400 only): Body text, descriptions, prose. Clean and humanist. Use at normal line-height (1.65) for comfortable reading.

### Type scale:
- xs: 0.75rem (12px) — fine print
- sm: 0.875rem (14px) — captions, metadata
- base: 1rem (16px) — body
- lg: 1.125rem (18px) — lead text
- xl: 1.375rem (22px) — section subheads
- 2xl: 1.75rem (28px) — section titles
- 3xl: 2.5rem (40px) — page titles
- 4xl: 3.5rem (56px) — hero display
- 5xl: 5rem (80px) — bold statements (sparingly)

## Color Tokens
See `src/lib/tokens.ts` for full values. Key rules:
- Background deep: #0A0A0B (page), base: #121214 (surfaces), elevated: #1A1A1E (cards)
- Text primary: #F0EDE8, secondary: #B8B2A8, muted: #6B665E
- Brass accent: #C8956A (primary actions, links, highlights)
- Teal secondary: #5BA8A0 (interactive states, code elements, tech indicators)
- Borders are warm grays: #2A2A30 (subtle), #3A3A42 (strong)
- Shadows are warm-tinted with rgba(10, 10, 11, ...) — never cool gray shadows
- Glow effects use accent colors at 10-15% opacity

## Site Structure (4 pages)
1. **Home** (`/`) — name, tagline, 3 featured project cards
2. **Work** (`/work`) — gallery of all projects (can be combined with home for V1)
3. **Project** (`/work/[slug]`) — individual case study pages
4. **About** (`/about`) — bio, photo placeholder, contact info

## Components to Build
### Layout
- `Container` — max-width wrapper (~1200px) with responsive horizontal padding
- `Section` — full-width block with consistent vertical padding (space-16 to space-24)
- `Header` — sticky nav with backdrop blur, name/logo left, links right
- `Footer` — minimal, warm, links + copyright

### Homepage
- `Hero` — Podkova display text + Didact Gothic subtitle + ambient brass glow effect
- `ProjectCard` — image thumbnail (placeholder OK), title, tags, one-liner, hover state with warm overlay
- About snippet section

### Case Study
- `CaseStudyHero` — title (Podkova), subtitle, hero metric, hero image placeholder
- `MetricCard` — large stat number + label, with subtle accent border or glow
- `ImageBlock` — responsive image container with optional caption. For now, render as a styled placeholder div with descriptive text
- `TextBlock` — prose section, max-width for reading comfort (~65ch)
- `ComparisonBlock` — side-by-side before/after layout

### Interactive
- `Button` — primary (brass fill), secondary (teal border), ghost (text only)
- `Tag` — small pill for skills/tools, uppercase, wide letter-spacing, Space Grotesk
- `GrainOverlay` — CSS/SVG noise texture overlay at very low opacity for analog warmth
- `RevealOnScroll` — IntersectionObserver wrapper, subtle fade-up on enter

## Image Placeholders
We don't have final images yet. When an image is needed, render a styled placeholder div that:
- Has the correct aspect ratio (16:9 for heroes, flexible for inline)
- Uses bg.elevated (#1A1A1E) background with a subtle border
- Shows the alt text / description centered in text.muted color
- Includes a small camera or image icon (can use an SVG or emoji)
This should look intentional, not broken — like a design-system-aware placeholder.

## Case Study Data
Case study content is defined in `src/lib/tokens.ts` as typed data. There are 3 main case studies + 1 meta case study:
1. **AI Leadership & Organizational Velocity** — AI strategy, tooling evangelism, org change
2. **Instant SOW / Rehab Co-Pilot** — GenAI workflow for scope-of-work automation
3. **Instant Document Review** — HITL transparency for AI-driven loan operations
4. **Building This Portfolio** (meta) — documenting the process of building this site

## Code Style Preferences
- Use TypeScript strictly — no `any` types
- Prefer named exports for components
- Use Tailwind utilities primarily, with custom classes only when Tailwind can't express the token
- Keep components in `src/components/` organized by concern (layout/, content/, interactive/)
- Use `cn()` helper (clsx + tailwind-merge) for conditional class composition
- Prefer server components by default, add 'use client' only when needed for interactivity
- Keep files focused — one component per file

## What NOT to do
- Don't use shadcn/ui or any component library — we're building from tokens
- Don't use pure black (#000) or pure white (#FFF) anywhere
- Don't use default Tailwind colors — everything should come from our token palette
- Don't add dependencies without asking — keep it lean
- Don't create light mode styles (dark mode is the only mode for V1)
- Don't over-engineer — this is a 48-hour sprint, ship over perfection