# Meta Case Study Brief: Building This Portfolio

## Overview

The portfolio itself is a case study: "Building This Portfolio" demonstrates design system to deployed site in 48 hours using AI-powered workflows. This is the most strategically important piece because it:

- Proves the AI-powered design system workflow end-to-end
- Serves as the pitch artifact for Justin's team at work
- Differentiates from portfolios that only show finished work

## Current State

- Slug: `building-this-portfolio`
- Entry exists in `case-study-content.ts` with placeholder sections
- Metadata exists in `tokens-ts.ts` as `metaCaseStudy`
- Page renders at `/work/building-this-portfolio`
- Needs real content

## Suggested Section Structure

### Section 1: The Setup
- 48-hour constraint and Webflow renewal forcing function
- Design token decisions: color audit with a11y contrast ratios, teal to dusty magenta pivot, Space Grotesk replacing Comfortaa, text.muted bump for WCAG compliance
- Architecture: tokens.ts as source of truth, content separated from design system, component inventory

### Section 2: The Build
- AI prompt/output pairs: what was given to Cursor, what it produced, what needed editing
- The CURSOR_CONTEXT.md approach: giving AI agents a project brief as guardrail
- Component-by-component build sequence and timing
- What worked first try vs. what took iteration

### Section 3: The Friction
- Where AI fell short: wrong defaults, Tailwind color leaks, over-building when scaffolding was needed
- Manual overrides and design judgment calls
- The a11y pass: what AI got right by default, what had to be explicitly enforced

### Section 4: The Results
- Lighthouse scores: 96 desktop / 100 mobile accessibility
- Full site shipped in 48 hours: 4 pages, 3 case studies, custom token system, a11y compliant
- Token to code to deploy pipeline validated
- Lessons learned and what this means for the team workflow proposal

## Images Needed
- `meta-token-system`: Screenshot of tokens.ts or Tailwind config
- `meta-ai-prompt-output`: 2-3 prompt/output comparisons
- `meta-before-after`: A component before/after design judgment applied
- `meta-lighthouse`: The 96/100 Lighthouse scores
- `meta-deployed`: Final site screenshot

## Pitch-Worthy Elements
Flag these when writing for the Director:
- Token constraint model validated (Christopher's concern)
- Works without mature existing design system (Clinton's concern)
- A11y as standard, not afterthought
- Full pipeline documented and repeatable
