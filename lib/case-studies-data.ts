export interface CaseStudyResult {
  label: string;
  value: string;
  description?: string;
}

export interface CaseStudyData {
  slug: string;
  clientName: string;
  industry: string;
  industryColor: "teal" | "violet";
  serviceSlugs: string[];
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  challenge: {
    heading: string;
    paragraphs: string[];
  };
  solution: {
    heading: string;
    paragraphs: string[];
    tactics: string[];
  };
  results: CaseStudyResult[];
  testimonial?: {
    quote: string;
    name: string;
    title: string;
  };
  techStack?: string[];
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: "pearl-street-digital",
    clientName: "Pearl Street Digital",
    industry: "Digital Marketing",
    industryColor: "teal",
    serviceSlugs: ["website-design", "local-seo"],
    metaTitle:
      "Pearl Street Digital Case Study | Agency Website Built in 5 Days | Pearl Street Digital",
    metaDescription:
      "How Pearl Street Digital built a high-performance agency website in 5 days with Lighthouse 98+ scores, saving 85% compared to traditional agency builds.",
    heroTagline:
      "A high-performance agency website built in days, not months -- at a fraction of the traditional cost.",
    challenge: {
      heading: "The Challenge",
      paragraphs: [
        "A new digital marketing agency in San Antonio needed a website that could compete with established firms charging $5,500 to $11,000 for custom sites. The site had to load fast, rank well in search, and demonstrate the exact quality of work the agency would deliver to its own clients.",
        "Traditional agency timelines of 8 to 12 weeks were not an option. The site needed to be live within days, not months, while still hitting Lighthouse 95+ scores across all categories and meeting WCAG 2.1 AA accessibility standards.",
      ],
    },
    solution: {
      heading: "The Solution",
      paragraphs: [
        "Pearl Street Digital built its own agency website using Next.js, Tailwind CSS, and an AI-augmented development workflow. Every page was designed mobile-first, tested at five breakpoints, and optimized for Core Web Vitals from the start.",
        "The site was deployed on Vercel with automatic builds, preview deployments, and edge caching. Structured data was implemented on every page -- LocalBusiness schema, Service schema, and FAQ schema -- giving search engines rich context from day one.",
      ],
      tactics: [
        "Next.js App Router with static generation for sub-second page loads",
        "Tailwind CSS design system with brand tokens for consistent styling",
        "Mobile-first responsive design tested at 320px through 1440px",
        "LocalBusiness and Service JSON-LD schema on every page",
        "WebP images with lazy loading and proper alt text throughout",
        "AI-augmented development workflow for faster iteration cycles",
      ],
    },
    results: [
      { label: "Lighthouse Performance", value: "98", description: "Google Lighthouse score" },
      { label: "Lighthouse SEO", value: "100", description: "Perfect SEO score" },
      { label: "Build Time", value: "5 Days", description: "From concept to deploy" },
      { label: "Page Load", value: "1.2s", description: "Time to interactive" },
      { label: "Cost Savings", value: "85%", description: "vs. traditional agency" },
      { label: "Pages Built", value: "19+", description: "Fully optimized pages" },
    ],
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "React", "TypeScript"],
  },
];

export function getCaseStudy(slug: string): CaseStudyData {
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) throw new Error(`Case study not found: ${slug}`);
  return study;
}

export function getAllCaseStudies(): CaseStudyData[] {
  return caseStudies;
}
