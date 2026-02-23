# Case Study Section Types

Reference for the `CaseStudySection` union type in `src/lib/case-study-content.ts`.

## TextSection

```typescript
{ type: 'text'; heading?: string; body: string }
```

- `body` supports `**bold**` and `[link](url)` inline markdown
- Paragraphs separated by `\n\n`
- If `heading` is provided, first heading gets `<h2>`, subsequent get `<h3>`

**Example:**
```typescript
{
  type: 'text',
  heading: 'The Challenge',
  body: 'The team needed a way to generate SOWs in minutes instead of days.\n\nExisting workflows required **manual assembly** from templates, with each document taking 20+ minutes of senior time.'
}
```

## ImageSection

```typescript
{
  type: 'image';
  src: string;        // path in /public/images/
  alt: string;        // descriptive alt text (a11y required)
  placeholder: string; // fallback identifier if image missing
  caption?: string;    // optional caption below image
  aspect?: '16:9' | '4:3' | 'auto'
}
```

- Images live in `public/images/`
- Use descriptive alt text (not "screenshot" or "image of")
- Placeholder format: `placeholder-[slug]-[descriptor]`

**Example:**
```typescript
{
  type: 'image',
  src: '/images/sow-flow-diagram.png',
  alt: 'Flow diagram showing the three-step SOW generation process from intake form to final document',
  placeholder: 'placeholder-sow-flow',
  caption: 'The SOW generation pipeline reduces a multi-day process to minutes',
  aspect: '16:9'
}
```

## MetricsSection

```typescript
{
  type: 'metrics';
  heading?: string;
  items: Array<{
    value: string;   // display value (e.g., "90%", "2 min", "48hrs")
    label: string;   // what the metric measures
    accent?: 'brass' | 'magenta'  // defaults to brass
  }>
}
```

- 1-4 items render in a responsive grid
- Use brass accent for primary/positive metrics, magenta for secondary/contrast metrics

**Example:**
```typescript
{
  type: 'metrics',
  heading: 'Results',
  items: [
    { value: '90%', label: 'Time reduction in SOW creation', accent: 'brass' },
    { value: '2 min', label: 'Average generation time', accent: 'brass' },
    { value: '50+', label: 'SOWs generated per month', accent: 'magenta' },
    { value: '0', label: 'Compliance issues post-launch', accent: 'brass' }
  ]
}
```

## ComparisonSection

```typescript
{
  type: 'comparison';
  heading?: string;
  before: { src: string; alt: string; placeholder: string; label?: string };
  after: { src: string; alt: string; placeholder: string; label?: string };
}
```

- Renders as side-by-side using ComparisonBlock
- Both before and after use ImageBlock internally

**Example:**
```typescript
{
  type: 'comparison',
  heading: 'Before & After',
  before: {
    src: '/images/sow-before.png',
    alt: 'Original manual SOW template with tracked changes and revision marks',
    placeholder: 'placeholder-sow-before',
    label: 'Manual process'
  },
  after: {
    src: '/images/sow-after.png',
    alt: 'Clean generated SOW with consistent formatting and complete sections',
    placeholder: 'placeholder-sow-after',
    label: 'AI-generated'
  }
}
```

## QuoteSection

```typescript
{ type: 'quote'; text: string; attribution: string; role?: string }
```

- Renders with brass left border, Podkova italic text
- Attribution shown below quote

**Example:**
```typescript
{
  type: 'quote',
  text: '20 minutes down to 2. And the output is more consistent than what we were producing manually.',
  attribution: 'Operations Lead',
  role: 'Enterprise Services'
}
```

## CalloutSection

```typescript
{ type: 'callout'; label?: string; body: string }
```

- Renders with magenta left border and `bg-elevated` background
- `label` shown as uppercase header (e.g. "Example Prompt")
- `body` supports `**bold**` and `[link](url)` inline markdown (same parsing as TextBlock)
- Paragraphs separated by `\n\n`
- Good for displaying prompts, code excerpts, or highlighted notes

**Example:**
```typescript
{
  type: 'callout',
  label: 'Example Prompt',
  body: 'Read CURSOR_CONTEXT.md and src/lib/tokens.ts. Build a ProjectCard component.\n\nProps: accepts a single case study object. Structure: wrapped in a Next.js Link to /work/[slug]. Add a focus-visible ring in accent color for a11y.'
}
```
