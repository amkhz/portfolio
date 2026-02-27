# Justin Hernandez — Portfolio

A personal portfolio site showcasing product design work and case studies. Built with Next.js and a custom design system.

**Live site:** [justinh.design](https://justinh.design/)  
**Design direction:** Blade Runner + William Gibson meets Finn Juhl — Danish mid-century warmth with sci-fi atmosphere. Dark and light themes, OKLCH color system, WCAG 2.2 AA compliant.

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** — design tokens and theme in `globals.css`, sourced from `src/lib/tokens-ts.ts`
- **Vercel** — hosting, analytics, and Speed Insights

## What’s in the project

- **Pages:** Home, About, Resume, Work index, and individual case study pages
- **Design system:** OKLCH-based colors, light/dark theme toggle, shared components
- **Case studies:** Content and metadata for multiple projects (see `src/lib/case-study-content.ts`)
- **SEO:** Sitemap, robots, per-page metadata, dynamic OG/Twitter images
- **Custom 404,** dynamic favicon, and shared layout (header, footer, grain overlay)

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start dev server         |
| `npm run build` | Build for production   |
| `npm run start` | Run production build   |
| `npm run lint` | Run ESLint              |

## Deploy

The site is deployed on [Vercel](https://vercel.com). See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
