import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { caseStudies, metaCaseStudy } from "@/lib/tokens-ts";

const allProjects = [...caseStudies, metaCaseStudy];

// Tell Next.js which slugs exist so it can pre-build each page at build time
export function generateStaticParams() {
  return allProjects.map((study) => ({
    slug: study.slug,
  }));
}

// Generate a unique page title for each case study
export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = allProjects.find((s) => s.slug === params.slug);
  if (!study) return { title: "Not Found" };

  return {
    title: `${study.title} — Justin Hernandez`,
    description: study.subtitle,
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = allProjects.find((s) => s.slug === params.slug);

  // If someone visits a slug that doesn't exist, show the 404 page
  if (!study) notFound();

  return (
    <section className="py-24 sm:py-32">
      <Container>
        {/* Case study title — Podkova display font */}
        <h1 className="font-display text-3xl leading-tight tracking-tight text-text-primary sm:text-4xl">
          {study.title}
        </h1>

        {/* Subtitle — Didact Gothic body font */}
        <p className="mt-4 max-w-[65ch] font-body text-lg leading-normal text-text-secondary">
          {study.subtitle}
        </p>

        {/* Hero metric (if present) */}
        {study.heroMetric && (
          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-display text-4xl leading-tight tracking-tight text-accent-primary">
              {study.heroMetric.value}
            </span>
            <span className="font-heading text-sm font-medium tracking-wide text-text-muted">
              {study.heroMetric.label}
            </span>
          </div>
        )}

        {/* Divider */}
        <div className="mt-8 h-px w-16 bg-accent-primary" />

        {/* Tags — Space Grotesk, pill style */}
        <div className="mt-8 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border-subtle bg-bg-elevated px-3 py-1 font-heading text-xs font-medium uppercase tracking-wider text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Placeholder for future case study sections */}
        <div className="mt-16 rounded-lg border border-border-subtle bg-bg-base p-8">
          <p className="font-body text-base leading-normal text-text-muted">
            Case study content sections will be built here. This page will
            include the hero image, metrics, text blocks, image blocks, and
            comparison layouts.
          </p>
        </div>
      </Container>
    </section>
  );
}
