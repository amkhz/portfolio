import { Container } from "@/components/layout/Container";
import { Button } from "@/components/interactive/Button";

export function AboutSnippet() {
  return (
    <section className="border-t border-border-subtle py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[280px_1fr] md:gap-16">
          {/* Photo placeholder */}
          <div
            role="img"
            aria-label="Portrait photo of Justin Hernandez"
            className="aspect-square w-full max-w-[280px] rounded-lg border border-border-subtle bg-bg-elevated flex items-center justify-center"
          >
            <span className="px-4 text-center font-body text-sm leading-normal text-text-muted">
              Justin A. Hernandez
            </span>
          </div>

          {/* About copy */}
          <div>
            <h2 className="font-display text-2xl leading-snug tracking-tight text-text-primary">
              Designer, technologist, builder
            </h2>

            <p className="mt-6 max-w-[65ch] font-body text-lg leading-normal text-text-secondary">
              I design AI-powered tools for lending and financial services,
              focusing on the intersection of automation and human oversight. My
              work turns complex operational workflows into transparent,
              auditable experiences that scale. Currently exploring how design
              systems and AI-driven development can accelerate product velocity.
            </p>

            <div className="mt-8">
              <Button variant="ghost" href="/about" aria-label="Learn more about Justin Hernandez">
                More about me
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
