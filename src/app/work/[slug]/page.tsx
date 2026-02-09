import type { Metadata } from "next";
import { caseStudies, metaCaseStudy } from "@/lib/tokens-ts";
import { CaseStudyPageTemplate } from "@/components/content/CaseStudyPage";

const allProjects = [...caseStudies, metaCaseStudy];

export function generateStaticParams() {
  return allProjects.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const study = allProjects.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: "Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: study.title,
    description: study.subtitle,
    alternates: {
      canonical: `/work/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} | Justin Hernandez`,
      description: study.subtitle,
      url: `/work/${study.slug}`,
      type: "article",
      images: [study.heroImage.src || "/images/meta.png"],
    },
    twitter: {
      card: "summary_large_image",
      images: [study.heroImage.src || "/images/meta.png"],
    },
  };
}

export default async function CaseStudyPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  return <CaseStudyPageTemplate slug={slug} />;
}
