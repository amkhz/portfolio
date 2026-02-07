import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "About — Justin Hernandez",
  description:
    "Lead product designer specializing in AI-powered enterprise product design.",
};

export default function AboutPage() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        {/* Page title — Podkova display font */}
        <h1 className="font-display text-3xl leading-tight tracking-tight text-text-primary sm:text-4xl">
          About
        </h1>

        {/* Placeholder bio — Didact Gothic body font */}
        <p className="mt-8 max-w-[65ch] font-body text-lg leading-normal text-text-secondary">
          I&apos;m Justin Hernandez, a lead product designer who specializes in
          AI-powered enterprise experiences. I help teams navigate the messy
          intersection of machine learning and human-centered design — turning
          complex systems into tools people actually want to use.
        </p>

        <p className="mt-6 max-w-[65ch] font-body text-lg leading-normal text-text-secondary">
          More details coming soon. This page will include a photo, full bio,
          contact information, and links to connect.
        </p>

        {/* Divider */}
        <div className="mt-12 h-px w-16 bg-accent-primary" />

        {/* Contact placeholder */}
        <div className="mt-8">
          <h2 className="font-heading text-xl font-medium tracking-wide text-text-primary">
            Get in touch
          </h2>
          <p className="mt-3 font-body text-base leading-normal text-text-muted">
            hello@justinhernandez.design
          </p>
        </div>
      </Container>
    </section>
  );
}
