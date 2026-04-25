export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyOutcome {
  title: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  industrySlug: string;
  services: string[];
  outcomeHeadline: string;
  summary: string;
  heroMetrics: CaseStudyMetric[];
  cardMetrics: CaseStudyMetric[];
  pullQuote?: {
    text: string;
    author: string;
    title: string;
  };
  thumbnailUrl: string;
  thumbnailAlt: string;
  heroImageUrl: string;
  heroImageAlt: string;
  featured: boolean;
  publishedAt: string;
  challenge: string;
  approach: string;
  outcomes: CaseStudyOutcome[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "modern-day-pest-control",
    slug: "modern-day-pest-control",
    client: "Modern Day Pest Control",
    industry: "Home Services",
    industrySlug: "home-services",
    services: ["Website Design", "Local SEO"],
    outcomeHeadline:
      "Pest Control Website Built in 5 Days, Scoring 95+ on Lighthouse",
    summary:
      "A fast, mobile-first pest control website built to convert homeowners searching for help right now. Delivered in 5 business days with a Lighthouse performance score of 95+ and full local SEO foundation on day one.",
    heroMetrics: [
      { value: "95+", label: "Lighthouse Performance" },
      { value: "5 Days", label: "Build Time" },
      { value: "<2s", label: "Page Load" },
    ],
    cardMetrics: [
      { value: "95+", label: "Lighthouse" },
      { value: "5 Days", label: "Build Time" },
    ],
    thumbnailUrl:
      "/images/case-studies/modern-day-pest-control-thumb.webp",
    thumbnailAlt:
      "Modern Day Pest Control website on a laptop screen",
    heroImageUrl:
      "/images/case-studies/modern-day-pest-control-hero.webp",
    heroImageAlt:
      "Modern Day Pest Control website homepage preview",
    featured: true,
    publishedAt: "2026-03-15",
    challenge:
      "Modern Day Pest Control is a San Antonio pest control business competing in a crowded market dominated by national brands like Orkin and Terminix. When a homeowner spots a roach or a wasp nest, they grab their phone and search -- whoever shows up first gets the call. The business needed a professional online presence that could compete with the national chains, load instantly on mobile, and make it trivial for new customers to request service without waiting on hold.",
    approach:
      "We built Modern Day Pest Control a custom mobile-first website designed around the way homeowners actually shop for pest control -- quick access to service offerings, clear pricing expectations, and a prominent call-to-action on every screen. The site was built on Next.js and Tailwind CSS with performance as the top priority. Every service page was optimized for local San Antonio searches, and LocalBusiness + Service JSON-LD schema was implemented on day one so Google understood exactly what the business does and where it serves.",
    outcomes: [
      {
        title: "Lighthouse 95+ performance score",
        description:
          "Fast sites convert better and rank better. A 95+ score means ads spend less per conversion and organic SEO lifts faster.",
      },
      {
        title: "Site launched in 5 business days",
        description:
          "A lean, hand-coded build compressed a typical 6-to-10 week agency timeline into a single business week.",
      },
      {
        title: "Schema markup + Google Business Profile optimized on day one",
        description:
          "LocalBusiness and Service schema gave Google rich context immediately, shortening the runway to first page for local searches.",
      },
      {
        title: "Mobile-first design for 70%+ mobile traffic",
        description:
          "Click-to-call and quote-request forms were prioritized above the fold so homeowners in a hurry never had to scroll to ask for help.",
      },
    ],
  },
];

export function getFeaturedCaseStudy(): CaseStudy | null {
  const featured = caseStudies.filter((cs) => cs.featured);
  if (featured.length === 0) {
    const sorted = [...caseStudies].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
    return sorted[0] ?? null;
  }
  const sortedFeatured = [...featured].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return sortedFeatured[0];
}

export function getGridCaseStudies(): CaseStudy[] {
  const featured = getFeaturedCaseStudy();
  if (!featured) return [];
  return caseStudies
    .filter((cs) => cs.id !== featured.id)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
