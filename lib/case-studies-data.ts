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
  {
    // Real owner-provided assets (2026-04-26). Both are PNGs (Windows
    // saved as .png; do not re-extension to .webp without an actual
    // re-encode). Thumbnail is currently a full-resolution copy of the
    // hero — fine functionally, but worth re-cropping/downsizing later
    // for grid performance since the case-studies index loads it small.
    id: "appeal-pro-ai",
    slug: "appeal-pro-ai",
    client: "Appeal Pro AI",
    industry: "PropTech",
    industrySlug: "proptech",
    services: ["Website Design", "Custom AI Solutions"],
    outcomeHeadline:
      "AI-Powered Property Tax Appeal Tool, Built From the Ground Up",
    summary:
      "A custom-coded web app that lets Texas homeowners generate a professional property tax appeal letter in ten minutes for a flat $9.99 fee. AI handles the legal citations and comparable-property analysis; the homeowner just fills in the basics.",
    heroMetrics: [
      { value: "10 min", label: "User Workflow" },
      { value: "$9.99", label: "Flat Fee Per Appeal" },
      { value: "AI", label: "Letter Generation Engine" },
    ],
    cardMetrics: [
      { value: "AI-Powered", label: "Custom Build" },
      { value: "10 min", label: "User Workflow" },
    ],
    thumbnailUrl: "/images/case-studies/appeal-pro-ai-thumb.png",
    thumbnailAlt:
      "Appeal Pro AI homepage on a laptop screen",
    heroImageUrl: "/images/case-studies/appeal-pro-ai-hero.png",
    heroImageAlt:
      "Appeal Pro AI property tax appeal generator on desktop",
    featured: false,
    publishedAt: "2026-04-15",
    challenge:
      "Texas property assessments routinely come in too high, but the appeal process is intimidating: most homeowners don't know what evidence to file, what tone to use, or what state-specific citations to include. Hiring a tax consultant or attorney costs hundreds to thousands of dollars — often more than the appeal might save them. The founder of Appeal Pro AI saw a gap: a software product that could automate the legal scaffolding of an appeal letter at a price homeowners would actually pay. They came to Rank Point Media needing a custom-coded site that wasn't a marketing brochure — it was the product itself.",
    approach:
      "We built Appeal Pro AI as a full custom web application from scratch — no template, no SaaS plugin. The site captures property details, assessed values, comparable sales, and condition photos through a streamlined multi-step form, then runs the inputs through an AI engine that generates a properly formatted appeal letter with state-specific legal citations and comparable-property analysis. The homeowner pays a one-time $9.99 fee through a secure checkout, downloads the PDF, and files it themselves. No accounts, no subscriptions, no upsells. We integrated county-specific property record lookup, real-time price-per-square-foot calculations, and three customizable tone options (Professional & Factual, Firm & Assertive, Respectful & Persuasive). The whole experience is designed to take ten minutes from start to filed appeal.",
    outcomes: [
      {
        title: "Custom AI integration shipped end-to-end",
        description:
          "The AI letter generator runs server-side on every submission with state-specific legal citations and comparable-property logic — built from scratch, not bolted on as a third-party plugin.",
      },
      {
        title: "Single-session transactional workflow",
        description:
          "Multi-step form, secure payment, AI generation, and PDF download integrated into one ten-minute path. No accounts, no email verification gates, no chance for the homeowner to bounce mid-funnel.",
      },
      {
        title: "Mobile-first design for an on-the-go audience",
        description:
          "Most users hit the site after opening their property assessment notice on their phone. The form is touch-optimized and the PDF download works on mobile end-to-end so a homeowner can complete the entire flow without ever moving to a desktop.",
      },
      {
        title: "$9.99 flat fee vs. $500–$2,000 in typical consultant savings",
        description:
          "Pricing is the product's killer feature — Appeal Pro saves the homeowner the consultant fee while still solving the same problem. We built the site to make that value proposition unmistakable above the fold.",
      },
    ],
  },
  {
    // PLACEHOLDER IMAGES — same pattern as appeal-pro-ai above. Swap to
    // real Lone Star Steak Critic screenshots before this case study is
    // shown to prospects. Suggested captures: the homepage with the
    // city/neighborhood browse, plus a steakhouse listing page showing
    // the 100-point rating treatment.
    id: "lone-star-steak-critic",
    slug: "lone-star-steak-critic",
    client: "Lone Star Steak Critic",
    industry: "Editorial / Directory",
    industrySlug: "editorial",
    services: ["Website Design", "Local SEO"],
    outcomeHeadline:
      "Texas-Wide Steakhouse Directory, 385+ Listings on Day One",
    summary:
      "A custom-coded review and directory platform covering 385+ steakhouses across 13 Texas cities, with neighborhood-level filtering, an interactive map, a 100-point rating system, and an editorial layer that reads like a magazine on top of structured restaurant data.",
    heroMetrics: [
      { value: "385+", label: "Steakhouses Indexed" },
      { value: "13", label: "Texas Cities Covered" },
      { value: "75+", label: "Browseable Neighborhoods" },
    ],
    cardMetrics: [
      { value: "385+", label: "Steakhouses" },
      { value: "13 Cities", label: "Texas-Wide" },
    ],
    thumbnailUrl:
      "/images/case-studies/modern-day-pest-control-thumb.webp",
    thumbnailAlt:
      "Lone Star Steak Critic homepage on a laptop screen",
    heroImageUrl:
      "/images/case-studies/modern-day-pest-control-hero.webp",
    heroImageAlt:
      "Lone Star Steak Critic city directory and review pages on desktop",
    featured: false,
    publishedAt: "2026-04-20",
    challenge:
      "Texas has hundreds of steakhouses and no definitive guide. Yelp and Google Maps are commodity directories — every restaurant looks the same in the listing, the reviews are noisy, and there's no curatorial voice telling diners which place is actually worth the drive across town. The Lone Star Steak Critic wanted a platform that combined the rigor of a directory (every steakhouse, every city, every neighborhood) with the authority of an editorial publication (a 100-point grading scale, neighborhood-level best-of lists, and informed commentary on the broader beef market). The challenge was building a site that could hold ~400 structured listings + editorial layers without devolving into a generic WordPress directory template.",
    approach:
      "We built Lone Star Steak Critic as a custom Next.js site from the ground up — no directory plugin, no WordPress theme. The data model handles 385+ steakhouses with rich metadata (price tier, dining style, neighborhood, 100-point rating), faceted city + neighborhood browsing across 13 cities and 75+ neighborhoods, an interactive map for spatial discovery, and an editorial CMS layer for the best-of lists and the beef-market data section. Restaurant + Review + AggregateRating JSON-LD ships on every listing so Google can render rich snippets in search, and the URL structure is engineered for the long-tail queries that actually drive discovery — \"best steakhouse in [neighborhood]\" pages, \"fine dining steakhouses in [city]\" pages, neighborhood guides, and so on. Affiliate-link infrastructure is built into the data layer so the revenue model is wired in cleanly rather than bolted on.",
    outcomes: [
      {
        title: "Custom directory + editorial platform, no template",
        description:
          "Built on Next.js with a structured listing data layer plus an editorial CMS for best-of lists and market commentary. The owner controls the schema, the rating rubric, and the visual register — none of which is possible on a Yelp-style platform or a directory plugin.",
      },
      {
        title: "SEO architecture for hundreds of long-tail queries",
        description:
          "City pages, neighborhood pages, and best-of-by-tier pages each target a real search pattern (\"best fine dining steakhouse in Austin downtown\", \"affordable steakhouses in Houston\"). Restaurant + Review + AggregateRating schema on every listing gives Google rich-snippet coverage from launch.",
      },
      {
        title: "Interactive map for spatial discovery",
        description:
          "Most diners think geographically, not alphabetically. The map lets users browse steakhouses by neighborhood, narrow by price tier, and tap through to a full review without leaving the spatial view they started in.",
      },
      {
        title: "Beef market data section as a category-defining angle",
        description:
          "No competitor combines steakhouse reviews with beef market commentary. Building the data section as part of the platform — rather than a blog afterthought — turns Lone Star Steak Critic into the publication of record for both diners and the industry itself.",
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
