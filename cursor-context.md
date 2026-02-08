# Project Context: Justin Hernandez Portfolio

> **Last updated:** Sunday, February 8, 2026
> **Current phase:** End of implementation iteration, entering launch-polish iteration

## Overview
Personal portfolio for Justin Hernandez (AI-focused product design leader).  
This repo is both the portfolio and a proof-of-concept for AI-assisted design-system-to-code workflow.

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

## What Is Already Done
- Core shell and routing
  - `src/app/layout.tsx`
  - `src/components/layout/Container.tsx`
  - `src/components/layout/Header.tsx`
  - `src/components/layout/Footer.tsx`
- Main pages complete
  - Home: `src/app/page.tsx`
  - Work index: `src/app/work/page.tsx`
  - Dynamic case study route: `src/app/work/[slug]/page.tsx`
  - About: `src/app/about/page.tsx`
  - Resume: `src/app/resume/page.tsx`
- Content/component system complete
  - Hero/Project/About: `Hero`, `ProjectCard`, `AboutSnippet`
  - Case study template + blocks: `CaseStudyPage`, `TextBlock`, `ImageBlock`, `MetricCard`, `MetricGrid`, `ComparisonBlock`, `QuoteBlock`
  - Interactive/effects: `Button`, `Tag`, `GlowEffect`, `GrainOverlay`, `RevealOnScroll`
- Data/content organization established
  - Metadata + token + type layer: `src/lib/tokens-ts.ts`
  - Case study section content: `src/lib/case-study-content.ts`
  - Resume markdown model: `src/lib/resume-content.ts`
- Real case-study images have been added in `public/images/` and referenced in content.

## Active In-Progress Files (Current Working Tree)
- `public/1pageresume.md`
- `src/lib/tokens-ts.ts`
- `src/lib/case-study-content.ts`
- `src/components/content/ImageBlock.tsx`
- `src/components/content/ProjectCard.tsx`
- `public/images/*` (new assets)

## Remaining Work To Finish This Iteration
1. Final image/content QA
   - Validate crop/fit behavior across mobile, tablet, desktop
   - Validate alt text and caption quality on all case-study images
2. Accessibility and quality pass after media updates
   - Re-run Lighthouse + keyboard pass on primary routes
   - Confirm contrast remains compliant after final image choices
3. Launch polish
   - Strengthen metadata (OG/Twitter/canonical) from current basic metadata setup
   - Verify production domain and deployment readiness
4. Meta case study completion
   - `building-this-portfolio` still uses "coming soon" narrative and placeholder-oriented hero path
   - Decide: complete now or explicitly scope to next iteration

## Planned Next Iteration (Strong Start)
1. Theme expansion
   - Add light-mode tokens + header theme toggle + persisted preference
2. Meta case study expansion
   - Full narrative of token decisions, AI prompt/output workflow, corrections, and outcomes
3. Optional model cleanup
   - Revisit duplication between metadata in `tokens-ts.ts` and sections in `case-study-content.ts`
4. Workflow/system improvements
   - Token-to-Figma variable sync path (Token Studio / Variables Visualizer)
   - Codify repeatable skill-assisted workflow for future portfolio updates

## Non-Negotiables
- Keep visual direction: warm, atmospheric dark mode (Danish mid-century x sci-fi)
- Preserve accessibility bar (focus rings, keyboard flow, semantic heading hierarchy, contrast)
- Keep implementation lean: no UI library sprawl, no unnecessary dependencies
- Keep token-driven styling and component consistency
