import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/interactive/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lead product designer specializing in AI-powered enterprise product design, design leadership, and human-centered automation.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Justin Hernandez",
    description:
      "Lead product designer specializing in AI-powered enterprise product design, design leadership, and human-centered automation.",
    url: "/about",
    images: ["/images/about.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/about.jpeg"],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* -- 1. Header section -- */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <Container>
          <span className="font-heading text-xs uppercase tracking-wider text-text-muted">
            About
          </span>
          <h1 className="mt-4 max-w-[20ch] font-display text-3xl leading-tight tracking-tight text-text-primary sm:text-4xl">
            Designing for the moment machines start making decisions
          </h1>
        </Container>
      </section>

      {/* -- 2. Photo + Professional Bio -- */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr] md:gap-16">
            {/* Portrait */}
            <div className="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-lg border border-border-subtle bg-bg-elevated">
              <Image
                src="/images/about.jpeg"
                alt="Portrait photo of Justin Hernandez, design leader"
                fill
                quality={92}
                sizes="(min-width: 768px) 320px, 100vw"
                className="object-cover"
              />
            </div>

            {/* Professional bio */}
            <div className="max-w-[65ch] space-y-6 font-body text-base leading-normal text-text-secondary sm:text-lg">
              <p>
                I&apos;m a product and service designer, researcher, force
                multiplier, and collaborator. I&apos;ve been designing for
                digital products since 2010, across healthcare, financial
                services, e-commerce, non-profit, marketing automation, and
                human capital management. Lots of enterprise, tons of complexity,
                always tons to learn.
              </p>
              <p>
                Today I lead a small team of designers at Kiavi, a hard money
                lender helping to revitalize thousands of aged homes across the
                United States. We make complex things efficient and satisfying to
                use, which is an interesting challenge in an equally challenging
                industry. My recent focus has been on AI-augmented lending
                tools, the kind of products where a bad interaction isn&apos;t
                just frustrating, it&apos;s a compliance risk or a delayed
                closing.
              </p>
              <p>
                I led the AI adoption initiative across our design and product
                organization, building the training, the prototyping workflow,
                and the strategic framework for how design operates when the
                interface starts thinking for itself. That work shaped the
                products I designed -- embedding principles like decision
                versioning, human-in-the-loop review, and auditable AI directly
                into our products. I love to observe and listen, to
                question and hypothesize, to learn, and to iterate.
              </p>
              <p>
                In the future I&apos;d like to see a world seamlessly
                integrating technology, privacy, and nature. But NOT Skynet. Far
                out, right? Maybe, but maybe not.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* -- 3. Personal section -- */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl leading-snug tracking-tight text-text-primary">
            Life these days
          </h2>

          <div className="mt-8 max-w-[65ch] space-y-6 font-body text-base leading-normal text-text-secondary sm:text-lg">
            <p>
              I live in Michigan in a 1950&apos;s ranch house with my wonderful
              wife. We&apos;re both fortunate to work from home, which makes it
              easier to keep finding new projects to work on together. Right now
              we&apos;re renovating the house and cultivating our back yard into
              a place we can grow food and flowers and watch our animals run
              around. Our rascally dog Carlos and our cats Pistachio and Larry
              complete the picture.
            </p>
            <p>
              I&apos;m a music and technology nerd, a living room DJ, a
              motorsports enthusiast, a knowledge curator, and a relentlessly
              curious human. I enjoy back country camping, feeling the warmth of
              the sun on the California coast, and searching for music I
              haven&apos;t heard yet. And of course, Porsches.
            </p>
          </div>

          <p className="mt-8 max-w-[65ch] font-body text-base leading-normal text-text-secondary sm:text-lg">
            Talk to me about product design, art, music, design, architecture, record
            collecting, photography, hiking, sustainable living, cooking and dining, all
            things Porsche, video games, cybersecurity, home networking, open
            source intelligence, aerospace -- or even cryptozoology. And probably
            a lot of other stuff too.
          </p>
        </Container>
      </section>

      {/* -- 4. What I Believe section -- */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="mb-10 font-display text-2xl leading-snug tracking-tight text-text-primary">
            What I believe
          </h2>
          <div className="max-w-[65ch] space-y-12">
            <div>
              <p className="font-body text-base leading-normal text-text-secondary sm:text-lg">
                <strong className="font-bold text-accent-primary">
                  Trust is designed, not declared.
                </strong>{" "}
                Users don&apos;t trust AI because you tell them to. They trust it
                because they can see what it did, why, and how to fix it when
                it&apos;s wrong.
              </p>
            </div>

            <div>
              <p className="font-body text-base leading-normal text-text-secondary sm:text-lg">
                <strong className="font-bold text-accent-primary">
                  Automation should augment judgment, not replace it.
                </strong>{" "}
                The best AI tools make experts faster. The worst ones make
                everyone equally mediocre.
              </p>
            </div>

            <div>
              <p className="font-body text-base leading-normal text-text-secondary sm:text-lg">
                <strong className="font-bold text-accent-primary">
                  Accessibility isn&apos;t a feature.
                </strong>{" "}
                It&apos;s the baseline. Every token, component, and interaction
                in my work meets WCAG 2.1 AA -- not because it&apos;s required,
                but because design that excludes people isn&apos;t design.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* -- 5. Contact / CTA section -- */}
      <section className="py-16 pb-24 sm:py-20 sm:pb-32">
        <Container>
          <h2 className="font-display text-2xl leading-snug tracking-tight text-text-primary">
            Let&apos;s talk
          </h2>

          <p className="mt-6 max-w-[65ch] font-body text-base leading-normal text-text-secondary sm:text-lg">
            I&apos;m open to conversations about design leadership, AI product
            strategy, and building the systems that make both possible.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" href="mailto:justin@justinh.design">
              Email me
            </Button>
            <Button
              variant="secondary"
              href="https://www.linkedin.com/in/justinah"
              aria-label="Connect on LinkedIn"
            >
              LinkedIn
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

