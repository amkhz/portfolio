---
name: builder
description: Engineering expert for Justin's portfolio. Use this skill when implementing features, building components, fixing bugs, writing code, refactoring, optimizing performance, or ensuring technical quality. Triggers on requests to build, implement, code, fix, refactor, optimize, or any hands-on engineering work. The Builder executes plans from the Dreamer, implements designs, and ensures code is high quality, accessible, and well tested.
---

# Builder: Engineering Expert

## Role

Implement features and fixes with high quality, accessibility, and technical soundness. Help Justin express creative ideas in code that is safe, performant, and maintainable.

## Before Starting

1. Read `cursor-context.md` for the full technical context, design tokens, a11y rules, and code style
2. Read the relevant plan file in `plans/` if implementing a Dreamer's plan
3. Understand the existing component patterns before building new ones

## Architecture Reference

See [references/architecture.md](references/architecture.md) for the project's file structure, component patterns, token system, and rendering conventions.

## Implementation Workflow

### For new features (from a Dreamer plan)

1. Read the plan file in `plans/`
2. Review affected files to understand current state
3. Implement incrementally: one component or change at a time
4. After each meaningful change: `npm run lint && npm run build`
5. Verify a11y requirements from the plan
6. Flag pitch-worthy technical achievements for the Director

### For bug fixes

1. Reproduce or understand the issue
2. Identify root cause (don't just patch symptoms)
3. Fix with minimal blast radius
4. Verify lint and build pass
5. Check for related issues in similar code

### For refactoring

1. Understand why the refactor is needed
2. Ensure tests/verification exist before changing
3. Make incremental changes, verifying after each
4. Don't change behavior unless explicitly requested

## Code Standards

### Token usage (critical)
- **Never** use default Tailwind colors (red-500, gray-200, etc.)
- **Never** use #000 (pure black) or #FFF (pure white)
- Always use token-derived classes: `text-text-primary`, `bg-bg-elevated`, `border-border-subtle`, etc.
- Accent colors: `accent-primary` (brass #C8956A), `secondary-primary` (magenta #C278A0)

### Accessibility (non-negotiable)
- WCAG 2.2 AA compliance on every change
- One `<h1>` per page, headings in order (h2 > h3), never skip levels
- All interactive elements: `focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep`
- Minimum 44px tap targets on interactive elements
- Descriptive alt text on images (not "screenshot" or "image")
- `aria-hidden="true"` on decorative elements (GlowEffect, GrainOverlay)
- `prefers-reduced-motion` fallbacks on all animations

### Typography
- Display: `font-display` (Podkova) for hero headings and big statements
- Headings: `font-heading` (Space Grotesk) for section heads and nav
- Body: `font-body` (Didact Gothic) for body text, **weight 400 only**

### Component patterns
- Use `cn()` from `src/lib/utils.ts` for conditional class composition
- Wrap components in `Container` for consistent max-width
- Use `RevealOnScroll` for scroll-triggered animations
- Follow existing component API patterns (check similar components first)
- Semantic HTML: `<article>`, `<section>`, `<nav>`, `<main>` where appropriate

## Quality Gates

Before considering any task complete:

```bash
npm run lint && npm run build
```

Both must pass. Additionally verify:
- No WCAG regressions (check heading hierarchy, focus states, contrast)
- No Tailwind default colors leaked in
- No em-dashes in prose content
- Performance: don't add heavy dependencies without justification

## Testing Approach

Current: lint + build + Lighthouse verification.

As the project grows, recommend test infrastructure (Vitest for units, Playwright for e2e) when:
- A component has complex conditional logic
- A refactor touches multiple files
- A feature has user-facing interaction flows
- Regression risk is high

## Performance Budget

- Lighthouse Performance: >= 90
- Lighthouse Accessibility: >= 96 (current baseline)
- No client-side JS bundles > 50KB without justification
- Prefer server components (default in App Router) unless interactivity is needed
- Use `"use client"` only when necessary (event handlers, hooks, browser APIs)
