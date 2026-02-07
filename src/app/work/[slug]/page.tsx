import { caseStudies, metaCaseStudy } from "@/lib/tokens-ts";
import { CaseStudyPageTemplate } from "@/components/content/CaseStudyPage";

const allProjects = [...caseStudies, metaCaseStudy];

// Tell Next.js which slugs exist so it can pre-build each page at build time
export function generateStaticParams() {
  return allProjects.map((study) => ({
    slug: study.slug,
  }));
}

// Generate a unique page title for each case study
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const study = allProjects.find((s) => s.slug === slug);
  if (!study) return { title: "Not Found" };

  return {
    title: `${study.title} — Justin Hernandez`,
    description: study.subtitle,
  };
}

export default async function CaseStudyPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  return <CaseStudyPageTemplate slug={slug} />;
}
