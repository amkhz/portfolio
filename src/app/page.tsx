import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/content/Hero";
import { ProjectCard } from "@/components/content/ProjectCard";
import { AboutSnippet } from "@/components/content/AboutSnippet";
import { RevealOnScroll } from "@/components/effects/RevealOnScroll";
import { caseStudies } from "@/lib/tokens-ts";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio of Justin Hernandez. Product design leader for complex, human-centered systems. Currently creating with AI.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Justin Hernandez | Product Designer",
    description:
      "Portfolio of Justin Hernandez. Product design leader for complex, human-centered systems. Currently creating with AI.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Selected Work section */}
      <section id="work" className="border-t border-border-subtle py-20 sm:py-24">
        <Container>
          <RevealOnScroll>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-text-primary">
              Selected Work
            </h2>
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <RevealOnScroll key={study.slug} delay={index * 100}>
                <ProjectCard study={study} />
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* About snippet */}
      <RevealOnScroll>
        <AboutSnippet />
      </RevealOnScroll>
    </>
  );
}
