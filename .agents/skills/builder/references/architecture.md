# Portfolio Architecture Reference

## Stack
- Next.js 15 (App Router, React Server Components by default)
- Tailwind CSS v4 (inline theme via `@theme` in globals.css)
- TypeScript (strict mode)
- No component library (custom components only)
- Deployed on Vercel

## File Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── globals.css             # Tailwind v4 @theme inline (CSS custom properties)
│   ├── layout.tsx              # Root layout: fonts, Header, Footer, GrainOverlay
│   ├── page.tsx                # Home
│   ├── not-found.tsx           # Custom 404
│   ├── icon.tsx                # Dynamic favicon (32x32, ImageResponse)
│   ├── apple-icon.tsx          # Apple touch icon (180x180, ImageResponse)
│   ├── opengraph-image.tsx     # OG image (1200x630, ImageResponse)
│   ├── twitter-image.tsx       # Twitter card (1200x630, ImageResponse)
│   ├── robots.ts / sitemap.ts  # SEO
│   ├── about/page.tsx
│   ├── resume/page.tsx
│   ├── work/page.tsx           # Work index
│   └── work/[slug]/page.tsx    # Case study detail (generateStaticParams)
├── components/
│   ├── layout/                 # Container, Header, Footer
│   ├── content/                # Hero, ProjectCard, CaseStudyPage, TextBlock, ImageBlock,
│   │                           # MetricCard, MetricGrid, ComparisonBlock, QuoteBlock,
│   │                           # SectionHeading, AboutSnippet, resume/*
│   ├── effects/                # GlowEffect, GrainOverlay, RevealOnScroll
│   └── interactive/            # Button, Tag
└── lib/
    ├── tokens-ts.ts            # Design tokens + case study metadata (source of truth)
    ├── case-study-content.ts   # Case study section content (keyed by slug)
    ├── resume-content.ts       # Resume data model (parses markdown)
    ├── site-metadata.ts        # URL resolution for metadata
    └── utils.ts                # cn() utility (clsx + tailwind-merge)
```

## Token Propagation

```
tokens-ts.ts (TypeScript constants)
    ↓ (manual mirror)
globals.css (@theme inline CSS custom properties)
    ↓ (Tailwind v4)
Utility classes in JSX (e.g., text-text-primary, bg-bg-elevated)
```

The TypeScript file is the source of truth. The CSS file mirrors it for Tailwind consumption.

## Key Color Tokens

| Token | Value | Usage |
|-------|-------|-------|
| bg-deep | #0A0A0B | Page background |
| bg-base | #121214 | Card backgrounds |
| bg-elevated | #1A1A1E | Elevated surfaces |
| bg-subtle | #222228 | Subtle backgrounds |
| text-primary | #F0EDE8 | Main text |
| text-secondary | #B8B2A8 | Supporting text |
| text-muted | #807A72 | De-emphasized text |
| accent-primary | #C8956A | Brass (primary accent) |
| secondary-primary | #C278A0 | Dusty magenta (secondary accent) |
| border-subtle | #2A2A30 | Default borders |
| border-strong | #3A3A42 | Emphasized borders |

## Component Conventions

- **Container**: `max-w-[1200px]` wrapper, accepts `as` prop for semantic HTML
- **Button**: primary (brass bg) / secondary (magenta border) / ghost. Renders as `<a>` when `href` provided. Min height 44px.
- **CaseStudyPage**: Dispatches on `section.type`, wraps each in `RevealOnScroll`. First heading gets `<h2>`, subsequent get `<h3>`.
- **TextBlock**: Parses `**bold**` and `[link](url)` inline markdown. Splits on `\n\n` for paragraphs.
- **ImageBlock**: Checks `!src.includes("placeholder-")` for real vs. fallback SVG.
- **GlowEffect**: Radial gradient blob, brass or magenta, `aria-hidden="true"`.

## Case Study Data Model

Two-file model:
1. **Metadata** (`tokens-ts.ts`): slug, title, subtitle, tags, heroMetric, heroImage
2. **Content** (`case-study-content.ts`): sections array keyed by slug

`CaseStudyPage.tsx` merges both at render time.

## Dependencies (runtime only)
- next, react, react-dom
- clsx, tailwind-merge
- @vercel/analytics, @vercel/speed-insights
