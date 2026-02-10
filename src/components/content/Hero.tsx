import { Container } from "@/components/layout/Container";
import { Button } from "@/components/interactive/Button";
import { GlowEffect } from "@/components/effects/GlowEffect";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16">
      {/* Ambient brass glow — warm light emanating from behind the heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-start justify-center"
      >
        <GlowEffect color="brass" size="lg" className="top-[15%]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center text-center">
        {/* Display heading — Podkova, the personality font */}
        <h1 className="max-w-[18ch] font-display text-4xl leading-tight tracking-tight text-text-primary sm:text-5xl">
          Designing intelligent systems that earn trust
        </h1>

        {/* Subtitle — Didact Gothic, comfortable reading */}
        <p className="mt-6 max-w-[56ch] font-body text-lg leading-normal text-text-secondary">
          Design leader specializing in AI-augmented enterprise products
          , where complex workflows meet human judgment.
        </p>

        {/* CTA — brass primary button */}
        <div className="mt-10">
          <Button variant="primary" href="#work">
            View My Work
          </Button>
        </div>
      </Container>
    </section>
  );
}
