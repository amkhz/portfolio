import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Tag } from "@/components/interactive/Tag";
import { caseStudies, metaCaseStudy } from "@/lib/tokens-ts";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in AI-powered enterprise product design.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Justin Hernandez",
    description: "Case studies in AI-powered enterprise product design.",
    url: "/work",
    images: ["/images/meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/meta.png"],
  },
};

const allProjects = [...caseStudies, metaCaseStudy];

export default function WorkPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        {/* Page heading */}
        <h1 className="font-display text-3xl leading-tight tracking-tight text-text-primary sm:text-4xl">
          Work
        </h1>
        <p className="mt-4 max-w-[65ch] font-body text-lg leading-normal text-text-secondary">
          A selection of case studies spanning AI strategy, enterprise UX, and
          design systems.
        </p>

        {/* Divider */}
        <div className="mt-10 h-px w-16 bg-accent-primary" />

        {/* Project grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {allProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              aria-label={`View case study: ${project.title}`}
              className="group flex flex-col rounded-lg border border-border-subtle bg-bg-base p-6 transition-all duration-200 hover:border-border-strong hover:bg-bg-elevated hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg-deep"
            >
              {/* Title -- Space Grotesk heading font */}
              <h2 className="font-heading text-xl font-semibold leading-snug text-text-primary transition-colors duration-200 group-hover:text-accent-primary">
                {project.title}
              </h2>

              {/* Subtitle -- Didact Gothic body font */}
              <p className="mt-2 font-body text-sm leading-normal text-text-secondary">
                {project.subtitle}
              </p>

              {/* Tags -- Space Grotesk, uppercase pill style */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag
                    key={tag}
                    className="transition-colors duration-200 group-hover:border-border-strong"
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

