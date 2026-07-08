import type { MetadataRoute } from "next";
import { services } from "@/lib/services-data";
import { industries } from "@/lib/industries-data";
// import { blogPosts } from "@/lib/blog-data"; // restore when Journal returns (see blogRoutes below)

/**
 * Dynamic sitemap. Reads from the data files so new services,
 * industries, case studies, and blog posts auto-appear at build time
 * — no manual sitemap edit required.
 *
 * The /areas/* city-expansion pages and the /local/* programmatic SEO
 * matrix were removed 2026-06-08 in the nationwide pivot — they were
 * built around San Antonio neighborhoods and Texas cities and no
 * longer fit the brand. No /areas/* or /local/* entries belong here.
 */

const baseUrl = "https://rankpointmedia.com";

// Bump on meaningful content updates to static routes. Crawlers learn
// to ignore lastModified when every URL is "today" at every build, so
// keep this explicit. Per-item dates win where available — case studies
// and blog posts already use their own publishedAt.
const SITE_CONTENT_VERSION = new Date("2026-06-08");

export default function sitemap(): MetadataRoute.Sitemap {
  const v = SITE_CONTENT_VERSION;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: v, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: v, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: v, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/case-studies`, lastModified: v, changeFrequency: "monthly", priority: 0.7 },
    // /blog and /blog/[slug] excluded 2026-06-08 pending content refresh.
    // Pages are also robots:noindex while hidden. Re-add here when nav links return.
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

  // Blog posts excluded from sitemap 2026-06-08 alongside the /blog index.
  // Restore by uncommenting the block below when the Journal section returns.
  const blogRoutes: MetadataRoute.Sitemap = [];
  // const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((p) => ({
  //   url: `${baseUrl}/blog/${p.slug}`,
  //   lastModified: new Date(p.publishedAt),
  //   changeFrequency: "yearly",
  //   priority: 0.5,
  // }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...blogRoutes,
  ];
}
