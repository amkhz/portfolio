# Project Context: Justin Hernandez Portfolio

> **Last updated:** Saturday, February 22, 2026
> **Current phase:** Post-launch. Part 1 polish complete and deployed. Part 2 (meta case study) pending. Part 3 (next iteration features) planned.

## Overview
Personal portfolio for Justin Hernandez (product design leader with deep AI and enterprise experience).  
This repo is both the portfolio and a proof-of-concept for AI-assisted design-system-to-code workflow.

**Live site:** https://justinh.design/  
**Repo:** https://github.com/amkhz/portfolio  
**Design direction:** "Blade Runner + William Gibson meets Finn Juhl" — Danish mid-century warmth + sci-fi atmosphere. Dark mode, warm blacks, dual accent (brass #C8956A + dusty magenta #C278A0), WCAG 2.2 AA compliant throughout.

## Stack
- **Framework:** Next.js 16.1.6 (App Router) with React 19.2.3
- **Styling:** Tailwind v4 (inline theme in `globals.css`, sourced from `tokens-ts.ts`)
- **Language:** TypeScript (strict mode, `@/*` → `./src/*`)
- **Deployment:** Vercel (production on custom domain)
- **Build tools:** React Compiler + Turbopack enabled in `next.config.ts`
- **AI skills:** Custom project skills in `.claude/skills/` + globally installed skills (see Skills section below)

## Current Build Status
- `npm run lint` passes
- `npm run build` passes
- Static routes generated for:
  - `/`
  - `/about`
  - `/resume`
  - `/work`
  - `/work/ai-leadership`
  - `/work/instant-sow`
  - `/work/instant-doc-review`
  - `/work/building-this-portfolio`

## Site Architecture
```
src/app/
├── globals.css              # Tailwind v4 theme (token source)
├── layout.tsx               # Root layout (fonts, Header, Footer, GrainOverlay)
├── page.tsx                 # Home
├── not-found.tsx            # Custom 404 (Podkova heading, GlowEffect, Button)
├── icon.tsx                 # Dynamic favicon (32x32 JH monogram)
├── apple-icon.tsx           # Apple touch icon (180x180 JH monogram)
├── opengraph-image.tsx      # OG image (1200x630, brass glow, name + tagline)
├── twitter-image.tsx        # Twitter card image (1200x630)
├── robots.ts                # SEO robots
├── sitemap.ts               # SEO sitemap
├── about/page.tsx           # About page
├── resume/page.tsx          # Resume page
├── work/page.tsx            # Work index
└── work/[slug]/page.tsx     # Case study detail
```

## Component Inventory (23 components)

**Layout (3)**
- `Container.tsx` — max-width wrapper
- `Header.tsx` — site nav
- `Footer.tsx` — site footer (email: justin@justinh.design)

**Content (15)**
- `Hero.tsx` — page hero with tagline
- `ProjectCard.tsx` — work index cards
- `AboutSnippet.tsx` — home page about teaser
- `CaseStudyPage.tsx` — case study template
- `TextBlock.tsx` — rich text section
- `ImageBlock.tsx` — captioned image section
- `MetricCard.tsx` — single metric display
- `MetricGrid.tsx` — metrics row
- `ComparisonBlock.tsx` — before/after comparison
- `QuoteBlock.tsx` — pull quote
- `SectionHeading.tsx` — section header
- `ResumeHeader.tsx` — resume page header
- `ResumeSection.tsx` — resume section wrapper
- `ResumeExperienceItem.tsx` — resume job entry
- `ResumeSkillGroup.tsx` — resume skills cluster

**Effects (3)**
- `GlowEffect.tsx` — ambient brass glow
- `GrainOverlay.tsx` — film grain texture
- `RevealOnScroll.tsx` — scroll-triggered fade-in

**Interactive (2)**
- `Button.tsx` — primary/secondary button with href support
- `Tag.tsx` — label/tag chip

## Data & Content Layer
- `src/lib/tokens-ts.ts` — design tokens + project metadata
- `src/lib/case-study-content.ts` — case study section content (CaseStudySection union type: text, image, metrics, comparison, quote)
- `src/lib/resume-content.ts` — resume data model
- `src/lib/site-metadata.ts` — helper for resolving site URL across environments (local, Vercel preview, production)
- `src/lib/utils.ts` — shared utilities
- `public/1pageresume.md` — downloadable 1-page resume
- `public/2pageresume.md` — downloadable 2-page resume

## What Has Shipped (Part 1 — Complete)
- **5 pages live:** Home, About, Resume, Work index, Work detail (3 case studies + meta placeholder)
- **Custom 404 page** with Podkova heading, warm copy, brass GlowEffect, Button back to home
- **Dynamic favicon system** — `icon.tsx` (32x32) and `apple-icon.tsx` (180x180), programmatic JH monogram
- **Dynamic OG/social images** — `opengraph-image.tsx` and `twitter-image.tsx` (1200x630, brass glow)
- **SEO:** robots.ts, sitemap.ts, per-page metadata with canonical URLs
- **Content pass:** Em-dash reduction site-wide, case study image captions added, body text tightened
- **Quick fixes:** Resume Marketo wording corrected, Footer email updated to justin@justinh.design
- **3 complete case studies:** AI Leadership, Instant SOW, Instant Doc Review
- **Real case-study images** in `public/images/` (20 assets)

## What's Next

### Part 2 — Meta Case Study (Priority)
- `building-this-portfolio` entry exists with placeholder content
- Awaiting Justin's friction log and sprint notes
- Will follow the same section model as other case studies
- Structure planned: The Setup → The Build → The Friction → The Results

### Part 3 — Next Iteration Features
1. **Light/dark theme toggle** — light mode token set, ThemeProvider, ThemeToggle in Header, cookie-persisted preference
2. **React Bits integration** — micro-interactions, text reveals, page transitions (must respect prefers-reduced-motion)
3. **Token sync to Figma** — Token Studio / Variable Visualizer as first path, Figma Console MCP as stretch
4. **Data model cleanup** — consider unifying tokens-ts.ts and case-study-content.ts, or moving to MDX
5. **Automated design system documentation** — `/system` or `/tokens` page rendering all token values and component variants
6. **Home server migration** — Docker + Caddy + Cloudflare Tunnel (low priority, Vercel works fine)

## Skills & Agent Workflow

Four custom project skills live in `.claude/skills/` and coordinate work across the portfolio:

- **Writer** (`.claude/skills/writer/`) — Creates and refines case study content. Directly edits `case-study-content.ts` and `tokens-ts.ts` metadata. Maintains Justin's voice. Has references for section types and the meta case study brief.
- **Director** (`.claude/skills/director/`) — Maintains project direction and status. Evolves `plans/post-launch-plan.md` as the living status doc. Tracks pitch-worthy items for the team presentation. Coordinates work across the other skills.
- **Dreamer** (`.claude/skills/dreamer/`) — Refines ideas into actionable plans. Does lightweight-to-deep research depending on scope. Produces plan files in `plans/` for the Builder to execute.
- **Builder** (`.claude/skills/builder/`) — Implements features, fixes bugs, writes code. Executes Dreamer plans. Enforces quality gates (lint, build, a11y, token compliance). Has an architecture reference.

**Skill coordination flow:** Idea → Dreamer (refine + plan) → Builder (implement) or Writer (content) → Director (track, prioritize, flag pitch items)

Three globally installed skills provide supplementary domain knowledge:
- **nextjs-app-router-patterns** — Next.js 14+ App Router architecture patterns
- **accessibility** — WCAG compliance, automated testing (Lighthouse, axe-core), manual checklists
- **tailwind-design-system** — Tailwind v4 `@theme` blocks, dark mode with CSS variables, CVA patterns

Utility skills: `find-skills` (discover/install from skills.sh), `skill-creator` (create new skills).

**Bookmarked for future install** (Figma sync work, Part 3.3):
- `figma/mcp-server-guide@create-design-system-rules`
- `figma/mcp-server-guide@implement-design`

## Non-Negotiables
- Keep visual direction: warm, atmospheric dark mode (Danish mid-century x sci-fi)
- Preserve accessibility bar (focus rings, keyboard flow, semantic heading hierarchy, contrast)
- Keep implementation lean: no UI library sprawl, no unnecessary dependencies
- Keep token-driven styling and component consistency
- Use token colors exclusively — no default Tailwind colors, no pure black (#000) or white (#FFF)
- Didact Gothic only has weight 400 — don't use other weights
- One h1 per page, h2 → h3 in order, never skip heading levels
- Run `npm run lint` and `npm run build` before considering any task complete
- Maintain Justin's voice — professional but personable, never corporate, avoid em-dashes
