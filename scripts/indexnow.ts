import { services } from "../lib/services-data";
import { industries } from "../lib/industries-data";
import { caseStudies } from "../lib/case-studies-data";
import { blogPosts } from "../lib/blog-data";

const KEY = process.env.INDEXNOW_KEY;
const HOST = "rankpointmedia.com";
const ORIGIN = `https://${HOST}`;

if (!KEY) {
  console.log("[indexnow] INDEXNOW_KEY not set, skipping ping.");
  process.exit(0);
}

const staticPaths = [
  "/",
  "/services",
  "/industries",
  "/case-studies",
  "/blog",
  "/pricing",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

const urlList = [
  ...staticPaths.map((p) => `${ORIGIN}${p === "/" ? "" : p}`),
  ...services.map((s) => `${ORIGIN}/services/${s.slug}`),
  ...industries.map((i) => `${ORIGIN}/industries/${i.slug}`),
  ...caseStudies.map((c) => `${ORIGIN}/case-studies/${c.slug}`),
  ...blogPosts.map((p) => `${ORIGIN}/blog/${p.slug}`),
];

async function main() {
  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `${ORIGIN}/${KEY}.txt`,
        urlList,
      }),
    });
    console.log(
      `[indexnow] HTTP ${res.status} — pinged ${urlList.length} URLs`,
    );
  } catch (err) {
    console.warn("[indexnow] ping failed (non-fatal):", err);
  }
}

main();
