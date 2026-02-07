import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { caseStudies } from "@/lib/tokens-ts";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="py-24 sm:py-32">
        <Container>
          {/* Podkova display — hero headline */}
          <h1 className="font-display text-4xl leading-tight tracking-tight text-text-primary sm:text-5xl">
            Designing the future,
            <br />
            <span className="text-accent-primary">one pixel at a time.</span>
          </h1>

          {/* Space Grotesk — section subheading */}
          <h2 className="mt-6 font-heading text-xl font-medium tracking-wide text-text-secondary sm:text-2xl">
            Lead Product Designer &middot; AI-Powered Enterprise Experiences
          </h2>

          {/* Didact Gothic — body paragraph */}
          <p className="mt-8 max-w-[65ch] font-body text-lg leading-normal text-text-secondary">
            I help teams ship products that feel human, even when they&apos;re
            powered by machine learning. From organizational AI strategy to
            hands-on prototyping, I bridge the gap between what&apos;s
            technically possible and what&apos;s genuinely useful.
          </p>
        </Container>
      </section>

      {/* Featured work section */}
      <section className="border-t border-border-subtle py-20 sm:py-24">
        <Container>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
            Featured Work
          </h2>

          <div className="mt-10 space-y-6">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group block rounded-lg border border-border-subtle bg-bg-base p-6 transition-all duration-200 hover:border-border-strong hover:bg-bg-elevated hover:shadow-md sm:p-8"
              >
                {/* Title row — Podkova */}
                <h3 className="font-display text-2xl leading-snug tracking-tight text-text-primary transition-colors duration-200 group-hover:text-accent-primary">
                  {study.title}
                </h3>

                {/* Subtitle — Didact Gothic */}
                <p className="mt-2 max-w-[65ch] font-body text-base leading-normal text-text-secondary">
                  {study.subtitle}
                </p>

                {/* Tags — Space Grotesk */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border-subtle bg-bg-elevated px-3 py-1 font-heading text-xs font-medium uppercase tracking-wider text-text-muted transition-colors duration-200 group-hover:border-border-strong"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hero metric preview */}
                {study.heroMetric && (
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-xl leading-tight tracking-tight text-accent-primary">
                      {study.heroMetric.value}
                    </span>
                    <span className="font-heading text-xs font-medium tracking-wide text-text-muted">
                      {study.heroMetric.label}
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
