import type { MetadataRoute } from "next";
import { services } from "@/lib/services-data";
import { industries } from "@/lib/industries-data";
import { caseStudies } from "@/lib/case-studies-data";
import { blogPosts } from "@/lib/blog-data";

/**
 * Dynamic sitemap. Reads from the data files so new services,
 * industries, case studies, and blog posts auto-appear at build time
 * — no manual sitemap edit required.
 *
 * /areas/* routes are intentionally excluded; per
 * project_city_expansion.md they are noindex placeholders until each
 * city has real content. When a city page is launched, also add it
 * here with the appropriate priority.
 */

const baseUrl = "https://rankpointmedia.com";

// Bump on meaningful content updates to static routes. Crawlers learn
// to ignore lastModified when every URL is "today" at every build, so
// keep this explicit. Per-item dates win where available — case studies
// and blog posts already use their own publishedAt.
const SITE_CONTENT_VERSION = new Date("2026-04-26");

export default function sitemap(): MetadataRoute.Sitemap {
  const v = SITE_CONTENT_VERSION;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: v, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: v, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: v, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/case-studies`, lastModified: v, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: v, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/pricing`, lastModified: v, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: v, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: v, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/privacy`, lastModified: v, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: v, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: v,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${baseUrl}/industries/${i.slug}`,
    lastModified: v,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${baseUrl}/case-studies/${c.slug}`,
    lastModified: new Date(c.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ];
}
