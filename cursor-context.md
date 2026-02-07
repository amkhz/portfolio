# Project Context: Justin Hernandez Portfolio

> **Last updated:** Day 2 of 48-hour sprint (Saturday build day)
> **Current deploy:** https://portfolio-34zne4g41-300mhz-projects.vercel.app/

## Overview
Personal portfolio site for Justin Hernandez, lead product designer specializing in AI-powered enterprise product design. Built with a custom design token system as a proof-of-concept for an AI-powered design system workflow. The process of building this site is itself a case study.

## What's Done (Foundation Complete)

**Friday evening (Day 1) — 100% complete:**
- ✅ Next.js scaffolded (App Router, TypeScript, Tailwind)
- ✅ Deployed to Vercel, pipeline working
- ✅ `src/lib/tokens.ts` — full token system with colors, typography, spacing, motion, shadows, case study data types and placeholder data
- ✅ `tailwind.config.ts` — extended with all token values
- ✅ Google Fonts loaded: Podkova (display), Space Grotesk (headings), Didact Gothic (body)
- ✅ `cn()` utility helper (clsx + tailwind-merge)
- ✅ Layout shell: Container, Header (sticky + blur), Footer, wired into root layout
- ✅ Dynamic routing: `/work/[slug]`, `/about`, homepage with case study links
- ✅ `generateStaticParams` for case study routes
- ✅ Basic pages rendering titles, subtitles, tags from data

**Saturday (Day 2) — homepage components built:**
- ✅ Hero component with Podkova display + ambient brass glow effect
- ✅ Button component (3 variants: primary brass, secondary magenta, ghost)
- ✅ ProjectCard component (image placeholder, title, tags, subtitle, metric, hover glow)
- ✅ Homepage wired: Hero + ProjectCard grid (responsive 1→2→3 col)
- ✅ Work listing page with full project grid

## What To Build Next

**Homepage is in good shape. Case study pages are the main gap.**

1. **Case study content components** (HIGH PRIORITY — unblocks content work)
   - CaseStudyHero, MetricCard, TextBlock, ImageBlock, ComparisonBlock
2. **AboutSnippet** for homepage (one remaining homepage gap)
3. **Effects components** (GrainOverlay, RevealOnScroll)
4. **A11y audit** (focus rings, keyboard nav, heading hierarchy, contrast verification)

## Stack
- **Framework:** Next.js 14+ (App Router, TypeScript)
- **Styling:** Tailwind CSS extended with custom design tokens
- **Fonts:** Podkova (display/serif), Space Grotesk (headings/sans), Didact Gothic (body/sans)
- **Deployment:** Vercel
- **Token source of truth:** `src/lib/tokens.ts`

## Reference Sources
- **Current portfolio (for copy/bio reference):** https://www.dtls.us/
  - Has existing bio copy, resume, and project descriptions that can be adapted
  - Tone is professional but personable — maintain that voice
- **PM metrics site:** (will be provided for case study content)

## Visual Direction
**Concept:** "Blade Runner meets Finn Juhl" — Danish mid-century modern warmth fused with sci-fi atmosphere.
**Reference:** Duck and Cover bar, Copenhagen.

### Design principles:
- Dark mode is the ONLY mode for V1
- Warm, never cold — backgrounds are warm blacks (#0A0A0B, #121214), not pure black
- Text is warm parchment (#F0EDE8), never pure white
- Dual accent: aged brass (#C8956A) for primary/warm, dusty magenta (#C278A0) for tech/sci-fi
- Texture and depth: subtle grain overlays, ambient glows, layered shadows
- Typography carries personality; layout stays restrained and confident
- Spacing is generous and intentional — Scandinavian restraint
- Motion is subtle and purposeful — gentle reveals, no flashy animations

### What this site should NOT look like:
- A default Tailwind/shadcn template
- Cold, clinical, or corporate
- Flat and textureless
- Neon or cyberpunk (sci-fi is atmospheric and warm, not garish)
- Overly decorated — restraint is key

## Color Tokens (a11y verified)
```
Backgrounds (warm blacks):
  deep:      #0A0A0B    page-level
  base:      #121214    primary surface
  elevated:  #1A1A1E    cards, elevated
  subtle:    #222228    hover, distinction

Text (warm whites):
  primary:   #F0EDE8    headings, body         (~17:1 vs deep ✅)
  secondary: #B8B2A8    supporting             (~9.8:1 vs deep ✅)
  muted:     #807A72    large text/UI only     (~4.7:1 vs deep ✅ large only)
  inverse:   #0A0A0B    on light surfaces

Accent — brass (material, warm):
  primary:   #C8956A    actions, links         (~6.3:1 vs deep ✅)
  hover:     #D4A87A    hover state
  muted:     #C8956A33  subtle bg (20%)
  glow:      #C8956A1A  ambient (10%)

Secondary — dusty magenta (atmosphere, sci-fi):
  primary:   #C278A0    interactive, tech      (~5.8:1 vs deep ✅)
  hover:     #D08BB2    hover state
  muted:     #C278A033  subtle bg (20%)
  glow:      #C278A01A  ambient (10%)

Borders:
  subtle:    #2A2A30    dividers
  strong:    #3A3A42    emphasized

Semantic:
  success:   #7AB87A
  warning:   #D4A84A
  error:     #C87A6A
```

## Typography System
- **Podkova** (serif, variable): Hero text, display statements, case study titles. Letter-spacing: -0.02em. Line-height: 1.1. This is the personality font.
- **Space Grotesk** (sans, variable): Section headings, nav, buttons, labels. Geometric precision bridging mid-century and sci-fi. Medium/semibold weights.
- **Didact Gothic** (sans, 400 only): Body text, descriptions, prose. Line-height: 1.65 for comfortable reading.

### Type scale (rem):
xs:0.75 sm:0.875 base:1 lg:1.125 xl:1.375 2xl:1.75 3xl:2.5 4xl:3.5 5xl:5

## Accessibility (WCAG 2.1 AA — non-negotiable)
- All body text: 4.5:1 contrast minimum against background
- Large text (24px+ / 18.66px+ bold): 3:1 minimum
- Interactive elements: 3:1 for boundary/fill
- Focus indicators: visible 2px ring in accent color with offset on ALL interactive elements
- All images: descriptive alt text
- Semantic HTML: proper heading hierarchy (h1 → h2 → h3, no skipping)
- Keyboard accessible: tab order, enter/space activation on all interactive elements
- aria-labels on icon-only buttons
- Descriptive link text — no "click here" or "read more"
- Minimum tap target: 44x44px
- text.muted (#807A72): ONLY for large text (24px+), decorative labels, or placeholder text

## Site Structure
1. **Home** (`/`) — name, tagline, hero, 3 featured project cards, about snippet
2. **Work** (`/work`) — gallery of all projects (optional, can be section on home)
3. **Project** (`/work/[slug]`) — individual case study pages (dynamic, data-driven)
4. **About** (`/about`) — bio, photo placeholder, contact info

## Components to Build Today

### Homepage
- **Hero** — Podkova display heading + Didact Gothic subtitle + CTA button + ambient brass glow effect behind text. Should feel atmospheric and confident, not generic.
- **ProjectCard** — card with: styled image placeholder (16:9, bg.elevated, descriptive text centered in muted), title (Space Grotesk), tags (Tag pills), one-liner (Didact Gothic). Hover: subtle lift + brass glow + border transition. Links to `/work/[slug]`.
- **AboutSnippet** — brief intro section with photo placeholder and short bio. Can reference copy from https://www.dtls.us/ for tone.

### Case Study Template
- **CaseStudyHero** — project title (Podkova h1), subtitle, MetricCard, hero image placeholder
- **MetricCard** — large stat number (Podkova 4xl/5xl in accent color) + label (Space Grotesk). Subtle accent border or glow.
- **ImageBlock** — responsive container, styled placeholder: bg.elevated, border.subtle, descriptive alt text centered, camera icon. 16:9 for heroes, flexible for inline.
- **TextBlock** — prose wrapper, Didact Gothic, max-width ~65ch, comfortable reading rhythm
- **ComparisonBlock** — side-by-side or stacked before/after layout with labels

### Interactive
- **Button** — three variants:
  - Primary: brass fill (#C8956A), inverse text, hover to #D4A87A
  - Secondary: magenta border (#C278A0), transparent bg, hover fill
  - Ghost: text only, hover underline or subtle bg
  - All: 44px min height, focus ring, keyboard accessible
- **Tag** — small pill, uppercase, wide letter-spacing (0.1em), Space Grotesk, bg.subtle bg, text.secondary text, border.subtle border

### Effects
- **GrainOverlay** — CSS/SVG film grain texture at very low opacity (~0.03-0.05) over the page for analog warmth. Should be barely perceptible.
- **GlowEffect** — ambient accent-colored radial gradient behind hero text or key elements. Brass glow for hero, magenta glow available for secondary elements.
- **RevealOnScroll** — IntersectionObserver wrapper component. Fade up with slight translateY (20px → 0) over 600ms with ease-out. Trigger once.

## Image Placeholders
No final images yet. When an image is needed, render a styled placeholder:
- Correct aspect ratio (16:9 heroes, 4:3 or flexible inline)
- bg.elevated (#1A1A1E) background
- border.subtle (#2A2A30) 1px border
- Descriptive text centered in text.muted
- Small image icon above the text
- Should look intentional and designed, not broken
- Alt text from the case study data should be applied

## Case Study Data
Defined in `src/lib/tokens.ts`. Three main + one meta:
1. **AI Leadership** (slug: ai-leadership) — AI strategy, org change, tooling evangelism
2. **Instant SOW** (slug: instant-sow) — GenAI workflow automation, document extraction
3. **Instant Doc Review** (slug: instant-doc-review) — HITL transparency, auditability
4. **Building This Portfolio** (slug: building-this-portfolio) — meta case study (in progress)

Each has: slug, title, subtitle, tags[], heroMetric?, heroImage (with placeholder descriptions), sections[].

## Code Style
- TypeScript strictly — no `any`
- Named exports for components
- Tailwind utilities primary, custom classes only when needed
- Components in `src/components/` organized: layout/, content/, interactive/, effects/
- `cn()` for conditional classes
- Server components default, `'use client'` only for interactivity
- One component per file
- No shadcn/ui or component libraries — built from tokens
- No pure black (#000) or pure white (#FFF) anywhere
- No default Tailwind colors — everything from token palette
- No unnecessary dependencies — keep it lean