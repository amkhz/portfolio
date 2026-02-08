import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, metaCaseStudy } from "@/lib/tokens-ts";
import { caseStudyContent, type CaseStudySection } from "@/lib/case-study-content";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "./SectionHeading";
import { TextBlock } from "./TextBlock";
import { ImageBlock } from "./ImageBlock";
import { MetricCard } from "./MetricCard";
import { MetricGrid } from "./MetricGrid";
import { ComparisonBlock } from "./ComparisonBlock";
import { QuoteBlock } from "./QuoteBlock";
import { Tag } from "@/components/interactive/Tag";
import { GlowEffect } from "@/components/effects/GlowEffect";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";

const allProjects = [...caseStudies, metaCaseStudy];

interface CaseStudyPageProps {
  slug: string;
}

/** Renders one content section based on its type, wrapped in RevealOnScroll */
function renderSection(
  section: CaseStudySection,
  index: number,
  headingAs?: "h2" | "h3"
) {
  switch (section.type) {
    case "text":
      return (
        <RevealOnScroll key={index}>
          <div>
            {section.heading && headingAs && (
              <SectionHeading as={headingAs}>{section.heading}</SectionHeading>
            )}
            <TextBlock>{section.body}</TextBlock>
          </div>
        </RevealOnScroll>
      );

    case "image":
      return (
        <RevealOnScroll key={index}>
          <ImageBlock
            src={section.src}
            alt={section.alt}
            placeholder={section.placeholder}
            caption={section.caption}
            aspect={section.aspect}
          />
        </RevealOnScroll>
      );

    case "metrics":
      return (
        <RevealOnScroll key={index}>
          <div>
            {section.heading && headingAs && (
              <SectionHeading as={headingAs}>{section.heading}</SectionHeading>
            )}
            <MetricGrid>
              {section.items.map((item, i) => (
                <RevealOnScroll key={i} delay={i * 100}>
                  <MetricCard
                    value={item.value}
                    label={item.label}
                    accent={item.accent}
                  />
                </RevealOnScroll>
              ))}
            </MetricGrid>
          </div>
        </RevealOnScroll>
      );

    case "comparison":
      return (
        <RevealOnScroll key={index}>
          <div>
            {section.heading && headingAs && (
              <SectionHeading as={headingAs}>{section.heading}</SectionHeading>
            )}
            <ComparisonBlock before={section.before} after={section.after} />
          </div>
        </RevealOnScroll>
      );

    case "quote":
      return (
        <RevealOnScroll key={index}>
          <QuoteBlock
            text={section.text}
            attribution={section.attribution}
            role={section.role}
          />
        </RevealOnScroll>
      );

    default:
      return null;
  }
}

export function CaseStudyPageTemplate({ slug }: CaseStudyPageProps) {
  const study = allProjects.find((s) => s.slug === slug);
  if (!study) notFound();

  const sections = caseStudyContent[slug] ?? [];
  const firstHeadingIndex = sections.findIndex(
    (section) =>
      "heading" in section &&
      typeof section.heading === "string" &&
      section.heading.length > 0
  );

  const sectionNodes = sections.map((section, index) => {
    const hasHeading =
      "heading" in section &&
      typeof section.heading === "string" &&
      section.heading.length > 0;

    const headingAs = hasHeading
      ? index === firstHeadingIndex
        ? "h2"
        : "h3"
      : undefined;

    return renderSection(section, index, headingAs);
  });

  return (
    <article>
      {/* Hero section */}
      <section className="border-b border-border-subtle pb-12 pt-24 sm:pb-16 sm:pt-32">
        <Container>
          {/* Breadcrumb nav — gives keyboard users a focusable landmark in the content */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 font-heading text-sm font-medium text-text-secondary transition-colors duration-normal hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep"
            >
              <span aria-hidden="true">&larr;</span>
              All Work
            </Link>
          </nav>

          {/* Tags */}
          <div className="mb-6 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <Tag key={tag}>
                {tag}
              </Tag>
            ))}
          </div>

          {/* Title */}
          <h1 className="max-w-[20ch] font-display text-3xl leading-tight tracking-tight text-text-primary sm:text-4xl">
            {study.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-[65ch] font-body text-lg leading-normal text-text-secondary">
            {study.subtitle}
          </p>

          {/* Hero metric */}
          {study.heroMetric && (
            <div className="relative mt-8 flex items-baseline gap-3">
              <GlowEffect color="magenta" size="sm" className="-left-8 -top-8" />
              <span className="relative font-display text-4xl leading-tight tracking-tight text-accent-primary">
                {study.heroMetric.value}
              </span>
              <span className="relative font-heading text-sm font-medium uppercase tracking-wide text-text-secondary">
                {study.heroMetric.label}
              </span>
            </div>
          )}

          {/* Hero image placeholder */}
          <ImageBlock
            src={study.heroImage.src}
            alt={study.heroImage.alt}
            placeholder={study.heroImage.placeholder}
            aspect="16:9"
          />
        </Container>
      </section>

      {/* Content sections */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-12">
            {sectionNodes}
          </div>

          {/* Bottom navigation — back to work listing */}
          <div className="mt-16 border-t border-border-subtle pt-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 font-heading text-sm font-medium text-text-secondary transition-colors duration-normal hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep"
            >
              <span aria-hidden="true">&larr;</span>
              Back to all work
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
