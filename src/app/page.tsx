import { Container } from "@/components/layout/Container";

export default function Home() {
  return (
    <>
      {/* Hero section — test the type system */}
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

          {/* Visual divider */}
          <div className="mt-12 h-px w-24 bg-accent-primary" />

          {/* Type system verification block */}
          <div className="mt-16 rounded-lg border border-border-subtle bg-bg-base p-8">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
              Type System Check
            </h3>

            <div className="mt-6 space-y-6">
              {/* Display / Podkova */}
              <div>
                <span className="font-heading text-xs font-medium uppercase tracking-wider text-accent-primary">
                  Podkova &middot; Display
                </span>
                <p className="mt-2 font-display text-3xl leading-tight tracking-tight text-text-primary">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>

              {/* Heading / Space Grotesk */}
              <div>
                <span className="font-heading text-xs font-medium uppercase tracking-wider text-secondary-primary">
                  Space Grotesk &middot; Heading
                </span>
                <p className="mt-2 font-heading text-2xl font-semibold leading-snug text-text-primary">
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>

              {/* Body / Didact Gothic */}
              <div>
                <span className="font-heading text-xs font-medium uppercase tracking-wider text-text-muted">
                  Didact Gothic &middot; Body
                </span>
                <p className="mt-2 max-w-[65ch] font-body text-base leading-normal text-text-secondary">
                  The quick brown fox jumps over the lazy dog. This is the body
                  font at base size with normal line-height, set at a
                  comfortable reading width of roughly 65 characters. It should
                  feel clean, humanist, and easy on the eyes.
                </p>
              </div>
            </div>

            {/* Color palette preview */}
            <div className="mt-10">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
                Color Palette
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-md bg-bg-deep ring-1 ring-border-subtle" />
                  <span className="font-heading text-xs text-text-muted">deep</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-md bg-bg-base ring-1 ring-border-subtle" />
                  <span className="font-heading text-xs text-text-muted">base</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-md bg-bg-elevated ring-1 ring-border-subtle" />
                  <span className="font-heading text-xs text-text-muted">elevated</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-md bg-bg-subtle ring-1 ring-border-subtle" />
                  <span className="font-heading text-xs text-text-muted">subtle</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-md bg-accent-primary" />
                  <span className="font-heading text-xs text-text-muted">brass</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-12 w-12 rounded-md bg-secondary-primary" />
                  <span className="font-heading text-xs text-text-muted">teal</span>
                </div>
              </div>
            </div>

            {/* Shadow preview */}
            <div className="mt-10">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-muted">
                Shadows &amp; Glows
              </h3>
              <div className="mt-4 flex flex-wrap gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-bg-elevated shadow-md">
                  <span className="font-heading text-xs text-text-muted">md</span>
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-bg-elevated shadow-lg">
                  <span className="font-heading text-xs text-text-muted">lg</span>
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-bg-elevated shadow-glow-brass">
                  <span className="font-heading text-xs text-text-muted">brass</span>
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-bg-elevated shadow-glow-teal">
                  <span className="font-heading text-xs text-text-muted">teal</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
