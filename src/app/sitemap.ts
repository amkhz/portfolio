import type { MetadataRoute } from "next";
import { caseStudies, metaCaseStudy } from "@/lib/tokens-ts";
import { getSiteUrl } from "@/lib/site-metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: now,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = [...caseStudies, metaCaseStudy].map(
    (study) => ({
      url: `${baseUrl}/work/${study.slug}`,
      lastModified: now,
    })
  );

  return [...staticRoutes, ...caseStudyRoutes];
}
