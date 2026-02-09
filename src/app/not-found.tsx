import { Container } from "@/components/layout/Container";
import { Button } from "@/components/interactive/Button";
import { GlowEffect } from "@/components/effects/GlowEffect";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-20">
      <GlowEffect color="brass" size="md" className="left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" />

      <Container className="relative z-10 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-text-primary sm:text-[6rem]">
          404
        </h1>

        <p className="mx-auto mt-4 max-w-md font-body text-lg text-text-secondary leading-normal">
          This page drifted into the void. Whatever you were looking for isn&apos;t here — but the rest of the site is.
        </p>

        <div className="mt-10">
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
