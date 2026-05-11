/**
 * Local Matrix data layer. Hydrates the 24 programmatic SEO pages
 * (4 services × 3 verticals × 2 neighborhoods) from the six JSON
 * source files in content/local-matrix/. All AI-drafted prose
 * (intro lines, closing lines, FAQ answers, CTA copy) is generated
 * here in deterministic, brand-voiced templates so the content stays
 * uniform across the matrix without lexical duplication.
 *
 * Voice rules enforced in every generated string:
 *   - No em-dashes (U+2014) or en-dashes (U+2013)
 *   - No banned words: leverage, solutions, cutting-edge, best-in-class,
 *     world-class, comprehensive, passionate
 *   - Plain, opinionated, second-person, contractions
 */

import type {
  Service,
  ServiceSlug,
  Vertical,
  VerticalSlug,
  Neighborhood,
  NeighborhoodSlug,
  Tuple,
  FAQ,
  PageData,
  RelatedLink,
} from "./types";
import servicesData from "@/content/local-matrix/services.json";
import verticalsData from "@/content/local-matrix/verticals.json";
import neighborhoodsData from "@/content/local-matrix/neighborhoods.json";
import neighborhoodParagraphs from "@/content/local-matrix/paragraphs/neighborhoods.json";
import verticalParagraphs from "@/content/local-matrix/paragraphs/verticals.json";
import serviceVerticalParagraphs from "@/content/local-matrix/paragraphs/service-vertical.json";

const services = servicesData as Record<ServiceSlug, Service>;
const verticals = verticalsData as Record<VerticalSlug, Vertical>;
const neighborhoods = neighborhoodsData as Record<NeighborhoodSlug, Neighborhood>;

const SERVICE_SLUGS: ServiceSlug[] = ["local-seo", "website-design", "ppc-google-ads", "social-media"];
const VERTICAL_SLUGS: VerticalSlug[] = ["dentists", "hvac", "restaurants"];
const NEIGHBORHOOD_SLUGS: NeighborhoodSlug[] = ["stone-oak", "alamo-heights"];

/** All 24 valid tuples, in deterministic iteration order. */
export function getAllCombinations(): Tuple[] {
  const out: Tuple[] = [];
  for (const service of SERVICE_SLUGS) {
    for (const vertical of VERTICAL_SLUGS) {
      for (const neighborhood of NEIGHBORHOOD_SLUGS) {
        out.push({ service, vertical, neighborhood });
      }
    }
  }
  return out;
}

/** Pipe-delimited key for the service-vertical paragraph lookup. */
export function getServiceVerticalKey(
  service: ServiceSlug,
  vertical: VerticalSlug,
): string {
  return `${service}|${vertical}`;
}

/** Lowercased plural noun. HVAC is special-cased so the acronym stays uppercase. */
const PLURAL_LOWER: Record<VerticalSlug, string> = {
  dentists: "dental practices",
  hvac: "HVAC companies",
  restaurants: "restaurants",
};

export function getPluralLower(vertical: VerticalSlug): string {
  return PLURAL_LOWER[vertical];
}

// ────────────────────────────────────────────────────────────────────────────
// Intro lines (Section 02, render ABOVE the neighborhood paragraph).
// All 24 unique. Each connects service + vertical + neighborhood per the
// owner-approved Sample A pattern. Service angles per service:
//   - Local SEO: what the neighborhood actually moves on
//   - Website Design: what the customer-on-this-page actually needs to do
//   - Google Ads: what kind of search behavior the vertical exhibits here
//   - Social Media: whether the channel even matters for this vertical here
// ────────────────────────────────────────────────────────────────────────────
const INTRO_LINES: Record<string, string> = {
  // Local SEO × Stone Oak
  "local-seo|dentists|stone-oak":
    "Local SEO for a dental practice is about whose name fills the Map Pack first. In Stone Oak, the answer is shaped by when the searches actually happen.",
  "local-seo|hvac|stone-oak":
    "Local SEO for HVAC is built around who gets the call when the AC quits. In Stone Oak, that decision lives in the late-afternoon commute.",
  "local-seo|restaurants|stone-oak":
    "Local SEO for a restaurant has to win two different searches. In Stone Oak, the higher-value one is the parent making a weekday call about dinner.",
  // Local SEO × Alamo Heights
  "local-seo|dentists|alamo-heights":
    "Local SEO for a dental practice is a competition for trust marks at the top of the Map Pack. In Alamo Heights, the rules of that competition look different from the rest of the city.",
  "local-seo|hvac|alamo-heights":
    "Local SEO for HVAC is about being the first name when the system fails. In Alamo Heights, that name is usually one a neighbor has already used.",
  "local-seo|restaurants|alamo-heights":
    "Local SEO for a restaurant has to win both proximity searches and reputation searches. In Alamo Heights, the reputation side carries more weight than most owners realize.",
  // Website Design × Stone Oak
  "website-design|dentists|stone-oak":
    "A dental practice site has one job. In Stone Oak, that job has to land inside a narrow window when the parent is actually on the phone.",
  "website-design|hvac|stone-oak":
    "An HVAC site has to serve two customers at once. In Stone Oak, both of them are deciding fast and on the move.",
  "website-design|restaurants|stone-oak":
    "A restaurant site exists to answer three questions in two seconds. In Stone Oak, the customer is usually checking those answers from a parking lot.",
  // Website Design × Alamo Heights
  "website-design|dentists|alamo-heights":
    "A dental practice site is a conversion tool, not a brochure. In Alamo Heights, the conversion turns on signals of permanence.",
  "website-design|hvac|alamo-heights":
    "An HVAC site has two customers and most sites only serve one. In Alamo Heights, both customers are paying attention to the same details.",
  "website-design|restaurants|alamo-heights":
    "A restaurant site has about two seconds to answer the questions that matter. In Alamo Heights, the customer is checking those answers from a phone they share with whoever's deciding with them.",
  // Google Ads × Stone Oak
  "ppc-google-ads|dentists|stone-oak":
    "Google Ads for a dental practice is downstream of how parents in the area actually search. In Stone Oak, that search behavior is shaped by the commute.",
  "ppc-google-ads|hvac|stone-oak":
    "Google Ads for HVAC is built for the panic search. In Stone Oak, that search has a specific time signature.",
  "ppc-google-ads|restaurants|stone-oak":
    "Google Ads for restaurants has to clear a high bar to even make sense. In Stone Oak, the math works for some restaurant categories and falls apart for others.",
  // Google Ads × Alamo Heights
  "ppc-google-ads|dentists|alamo-heights":
    "Google Ads for a dental practice has to match the search behavior of the patients in the neighborhood. In Alamo Heights, that behavior leans toward branded and known-name searches.",
  "ppc-google-ads|hvac|alamo-heights":
    "Google Ads for HVAC works on the panic search. In Alamo Heights, that search is competing with referral relationships that ads can't always overcome.",
  "ppc-google-ads|restaurants|alamo-heights":
    "Google Ads for a restaurant only makes sense in narrow situations. In Alamo Heights, the situations that matter are catering and brand-search defense.",
  // Social Media × Stone Oak
  "social-media|dentists|stone-oak":
    "Social media for a dental practice in Stone Oak is mostly a familiarity play, not a volume play. The right channel depends on whose attention you're trying to earn.",
  "social-media|hvac|stone-oak":
    "Most HVAC companies should think twice about social media. In Stone Oak, the case for it is narrower than people assume.",
  "social-media|restaurants|stone-oak":
    "For a restaurant, social media isn't optional. In Stone Oak, the question is whose feed you need to land in to capture the dinner decision.",
  // Social Media × Alamo Heights
  "social-media|dentists|alamo-heights":
    "Social media for a dental practice in Alamo Heights is about being recognizable to the network the patient already trusts. The channel choice matters more than the post count.",
  "social-media|hvac|alamo-heights":
    "Social media for HVAC is mostly the wrong channel. In Alamo Heights, the one place it does generate leads is in neighborhood Facebook groups.",
  "social-media|restaurants|alamo-heights":
    "For a restaurant in Alamo Heights, social media is the deciding factor in the next two hours of dinner traffic. The channel choice depends on the segment of customer.",
};

// ────────────────────────────────────────────────────────────────────────────
// Closing lines (Section 03, render BELOW the vertical paragraph).
// All 24 unique. Each bridges the vertical market reality into the
// specific service question for this tuple. No two start with the same
// opening clause.
// ────────────────────────────────────────────────────────────────────────────
const CLOSING_LINES: Record<string, string> = {
  "local-seo|dentists|stone-oak":
    "Local SEO is what decides who in that reputation competition gets shown to the Stone Oak parent doing the search.",
  "local-seo|hvac|stone-oak":
    "Local SEO is the lever that puts a Stone Oak HVAC company in the three-pack at the moment the call is being made, not before.",
  "local-seo|restaurants|stone-oak":
    "Local SEO for a Stone Oak restaurant is the work that decides which neighborhood spot the weekday lunch search lands on.",
  "local-seo|dentists|alamo-heights":
    "Local SEO for an Alamo Heights dental practice is the ranking work that carries the practice through the referral economy this neighborhood runs on.",
  "local-seo|hvac|alamo-heights":
    "For an Alamo Heights HVAC company, Local SEO is the discoverability layer underneath the referral network that already drives most of the business.",
  "local-seo|restaurants|alamo-heights":
    "An Alamo Heights restaurant wins both the proximity search and the reputation search through the same Local SEO work.",
  "website-design|dentists|stone-oak":
    "Website Design is what decides whether the Stone Oak parent who clicks through actually ends up filling out the form.",
  "website-design|hvac|stone-oak":
    "Website Design for a Stone Oak HVAC company is the structure that lets you serve the panic call and the planned replacement on the same domain.",
  "website-design|restaurants|stone-oak":
    "Website Design for a Stone Oak restaurant is mostly about getting hours, location, and phone in the parent's hand without making them tap twice.",
  "website-design|dentists|alamo-heights":
    "Website Design for an Alamo Heights dental practice is the surface that signals permanence to a patient base that doesn't sort by price.",
  "website-design|hvac|alamo-heights":
    "An Alamo Heights HVAC site has to read as established, because that's what closes the planned replacement.",
  "website-design|restaurants|alamo-heights":
    "Website Design for an Alamo Heights restaurant has to load fast, read clean, and survive being shared between two people deciding together.",
  "ppc-google-ads|dentists|stone-oak":
    "Google Ads is the budget question for a Stone Oak dental practice that wants to land in front of the search before the Map Pack does its sorting.",
  "ppc-google-ads|hvac|stone-oak":
    "For a Stone Oak HVAC company, Google Ads is what puts you at the top of the panic search when the Map Pack hasn't ranked you yet.",
  "ppc-google-ads|restaurants|stone-oak":
    "Google Ads for a Stone Oak restaurant only earns its keep on the catering booking and the brand-search defense.",
  "ppc-google-ads|dentists|alamo-heights":
    "For an Alamo Heights dental practice, Google Ads is mostly defensive, protecting brand-search and capturing patients shopping for cosmetic work.",
  "ppc-google-ads|hvac|alamo-heights":
    "An Alamo Heights HVAC company running Google Ads is competing with referral relationships that often skip the search entirely.",
  "ppc-google-ads|restaurants|alamo-heights":
    "For an Alamo Heights restaurant, Google Ads is the catering booking and the brand defense; everything else is a tax.",
  "social-media|dentists|stone-oak":
    "Social Media Management for a Stone Oak dental practice is the slow build of familiarity with the parents who will eventually need a dentist.",
  "social-media|hvac|stone-oak":
    "Social Media Management for a Stone Oak HVAC company is mostly a recruiting and trust-building tool, not a lead generator.",
  "social-media|restaurants|stone-oak":
    "Social Media Management for a Stone Oak restaurant is the work of being the photo on the feed when a parent decides where to take the family.",
  "social-media|dentists|alamo-heights":
    "Social Media Management for an Alamo Heights dental practice is the channel work that gets the practice mentioned in the right networks.",
  "social-media|hvac|alamo-heights":
    "For an Alamo Heights HVAC company, Social Media Management lives almost entirely in the neighborhood Facebook groups where referrals get made.",
  "social-media|restaurants|alamo-heights":
    "Social Media Management for an Alamo Heights restaurant is the photo and the cadence that decides whether the regular brings a friend tonight.",
};

// ────────────────────────────────────────────────────────────────────────────
// FAQ generators. Q1 + Q2 templated by service. Q3 by vertical with a
// neighborhood-specific scope reference. Q4 essentially identical with
// vertical/neighborhood/service substitution at the end.
// ────────────────────────────────────────────────────────────────────────────

const Q1_PRICING_DETAIL: Record<ServiceSlug, (v: Vertical, n: Neighborhood) => string> = {
  "local-seo": (v, n) => {
    const examples: Record<VerticalSlug, string> = {
      dentists: `'Pediatric dentist ${n.zipCodes[0]}' is a calmer fight than 'cosmetic dentist ${n.zipCodes[0]}.'`,
      hvac: `'AC repair ${n.displayName}' is a tighter fight than 'AC repair San Antonio.'`,
      restaurants: `'Lunch ${n.displayName}' is a calmer fight than 'best tacos San Antonio.'`,
    };
    return `The number moves with how competitive the Map Pack is for your specific terms. ${examples[v.slug as VerticalSlug]}`;
  },
  "website-design": (v) => {
    const factors: Record<VerticalSlug, string> = {
      dentists: "an insurance-accepted page or a before-and-after gallery on the site",
      hvac: "a service-area map and financing-options content",
      restaurants: "reservations integration or online ordering integration",
    };
    return `Build-only options also exist if you'd rather host elsewhere. Scope drives the rest of the number, mainly how many pages and whether the site needs ${factors[v.slug as VerticalSlug]}.`;
  },
  "ppc-google-ads": (v) => {
    const ranges: Record<VerticalSlug, string> = {
      dentists: "$1,500 and $5,000",
      hvac: "$2,000 and $10,000",
      restaurants: "$500 and $2,500",
    };
    return `That's management. Ad spend is on top, and most ${PLURAL_LOWER[v.slug as VerticalSlug]} run between ${ranges[v.slug as VerticalSlug]} a month in spend depending on how aggressive you want to be.`;
  },
  "social-media": () => {
    return "The number moves with channel mix and whether you need photo or short-form video production on top of management.";
  },
};

function generateQ1(service: Service, vertical: Vertical, neighborhood: Neighborhood): string {
  const detail = Q1_PRICING_DETAIL[service.slug](vertical, neighborhood);
  const pricePrefix =
    service.slug === "ppc-google-ads"
      ? `Our Google Ads engagements start at $${service.startingPrice} a month for management`
      : `Our ${service.displayName} engagements start at $${service.startingPrice} a month`;
  return `${pricePrefix}, and most ${neighborhood.displayName} ${PLURAL_LOWER[vertical.slug as VerticalSlug]} land in that band. ${detail} Full pricing lives on our pricing page; nothing's hidden behind a "contact us."`;
}

function generateQ2(service: Service): string {
  const answers: Record<ServiceSlug, string> = {
    "local-seo":
      "Faster than full organic SEO, slower than ads. Map Pack movement usually starts in 4 to 8 weeks once we've cleaned up your Google Business Profile and your citation set. Reaching the top three for a competitive search is more of a 3 to 6 month project. Anyone promising faster than that is either paying for clicks or selling you a story.",
    "website-design":
      "Most builds launch in 2 to 3 weeks once we have your content and brand inputs. Starter scopes can land in 7 to 10 days. SEO benefit from a faster, better-structured site shows up in 4 to 8 weeks; rankings on competitive local terms still take 3 to 6 months on top of that.",
    "ppc-google-ads":
      "Ads start running within 48 hours of campaign approval. The first signal of what's working shows up in the first 2 weeks. Real optimization (bid adjustments, negative keyword sweeps, ad copy iteration) takes 4 to 12 weeks to settle a campaign into its efficient zone.",
    "social-media":
      "Posting cadence starts within 2 weeks of onboarding. Meaningful engagement growth takes 3 to 6 months because the algorithm needs time to learn who your content lands with. Anyone offering 'viral in 30 days' is selling lottery tickets.",
  };
  return answers[service.slug];
}

function generateQ3(vertical: Vertical, neighborhood: Neighborhood): string {
  const answers: Record<VerticalSlug, string> = {
    dentists: `Yes, and we'll tell you who if you ask. We can't always sign two general dentists in the same five-block radius without a conversation about it first, but specialty practices don't conflict the same way. If you're worried about overlap with another ${neighborhood.displayName} practice, that's the first thing we'd cover in a consultation.`,
    hvac: `Yes, and we're upfront about it. Two HVAC companies serving the same ${neighborhood.displayName} ZIP codes for the same emergency searches is a real conflict, so we'd have a conversation first. If a slot's not open in your service area, we'll say so before you sign anything.`,
    restaurants: `Yes. Two restaurants in different categories or different price tiers in ${neighborhood.displayName} aren't really competing for the same searches, so overlap is rarely an issue. If we ever hit a real conflict, you'll hear it from us before you sign.`,
  };
  return answers[vertical.slug as VerticalSlug];
}

function generateQ4(service: Service, vertical: Vertical, neighborhood: Neighborhood): string {
  const surfaces: Record<ServiceSlug, string> = {
    "local-seo": "rankings",
    "website-design": "site",
    "ppc-google-ads": "ad campaigns",
    "social-media": "social presence",
  };
  return `Two people, both client-facing, both doing the work. There are no account managers, no offshored teams, no junior staff routing your campaign through three handoffs. When you call about your ${neighborhood.displayName} ${vertical.singularNoun}'s ${surfaces[service.slug]}, you're talking to the person who set them up. That's not a marketing line. It's just our staffing.`;
}

function generateFAQs(service: Service, vertical: Vertical, neighborhood: Neighborhood): FAQ[] {
  return [
    {
      question: `How much does ${service.displayName} cost for ${vertical.displayNamePlural} in ${neighborhood.displayName}?`,
      answer: generateQ1(service, vertical, neighborhood),
    },
    {
      question: `How long until I see results from ${service.displayName}?`,
      answer: generateQ2(service),
    },
    {
      question: `Do you work with other ${vertical.displayNamePlural} in ${neighborhood.displayName}?`,
      answer: generateQ3(vertical, neighborhood),
    },
    {
      question: "What makes Rank Point Media different from other agencies?",
      answer: generateQ4(service, vertical, neighborhood),
    },
  ];
}

// ────────────────────────────────────────────────────────────────────────────
// CTA copy. Single template per Sample C, substituted with displayName +
// singularNoun. All 24 produced renders read cleanly.
// ────────────────────────────────────────────────────────────────────────────
function generateCTA(service: Service, vertical: Vertical, neighborhood: Neighborhood): string {
  return `No slides, no script. Just the conversation about ${service.displayName} for your ${neighborhood.displayName} ${vertical.singularNoun}.`;
}

// ────────────────────────────────────────────────────────────────────────────
// Related links. 3 contextual links per spec:
//   1. Canonical service page
//   2. Sibling: same service + vertical, other neighborhood
//   3. Sibling: same service + neighborhood, first other vertical
// Anchor text uses the full {service} for {vertical} in {neighborhood} pattern
// for SEO clarity.
// ────────────────────────────────────────────────────────────────────────────
function generateRelated(service: Service, vertical: Vertical, neighborhood: Neighborhood): RelatedLink[] {
  const otherNeighborhoodSlug = NEIGHBORHOOD_SLUGS.find((s) => s !== neighborhood.slug);
  const otherVerticalSlug = VERTICAL_SLUGS.find((s) => s !== vertical.slug);
  if (!otherNeighborhoodSlug || !otherVerticalSlug) {
    throw new Error("Matrix sibling lookup failed");
  }
  const otherNeighborhood = neighborhoods[otherNeighborhoodSlug];
  const otherVertical = verticals[otherVerticalSlug];

  return [
    {
      href: service.canonicalPath,
      text: `${service.displayName} services overview`,
    },
    {
      href: `/local/${service.slug}/${vertical.slug}/${otherNeighborhood.slug}`,
      text: `${service.displayName} for ${vertical.displayNamePlural} in ${otherNeighborhood.displayName}`,
    },
    {
      href: `/local/${service.slug}/${otherVertical.slug}/${neighborhood.slug}`,
      text: `${service.displayName} for ${otherVertical.displayNamePlural} in ${neighborhood.displayName}`,
    },
  ];
}

/** Hydrate full page data for a single tuple. */
export function getPageData(
  service: ServiceSlug,
  vertical: VerticalSlug,
  neighborhood: NeighborhoodSlug,
): PageData | null {
  const s = services[service];
  const v = verticals[vertical];
  const n = neighborhoods[neighborhood];
  if (!s || !v || !n) return null;

  const key = `${service}|${vertical}|${neighborhood}`;
  const introLine = INTRO_LINES[key];
  const closingLine = CLOSING_LINES[key];
  if (!introLine || !closingLine) return null;

  const svKey = getServiceVerticalKey(service, vertical);
  const svParagraph = (serviceVerticalParagraphs as Record<string, string>)[svKey];
  if (!svParagraph) return null;

  return {
    service: s,
    vertical: v,
    neighborhood: n,
    neighborhoodParagraph: (neighborhoodParagraphs as Record<string, string>)[neighborhood],
    verticalParagraph: (verticalParagraphs as Record<string, string>)[vertical],
    serviceVerticalParagraph: svParagraph,
    introLine,
    closingLine,
    faqs: generateFAQs(s, v, n),
    ctaCopy: generateCTA(s, v, n),
    related: generateRelated(s, v, n),
  };
}

// ────────────────────────────────────────────────────────────────────────────
// Lucide icon allowlist. Only icons referenced by the JSON catalogs are
// imported, so the bundle stays tight. Add an entry here if a new
// service/vertical/neighborhood adds an icon string.
// ────────────────────────────────────────────────────────────────────────────
import {
  MapPin,
  Code,
  Target,
  MessageCircle,
  Stethoscope,
  Wind,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export const LUCIDE_ICONS: Record<string, LucideIcon> = {
  MapPin,
  Code,
  Target,
  MessageCircle,
  Stethoscope,
  Wind,
  UtensilsCrossed,
};

/** Read paragraph counts for the DraftStatusBanner. */
export function getParagraphStats(): { total: number; drafts: number } {
  const all = [
    ...Object.values(neighborhoodParagraphs as Record<string, string>),
    ...Object.values(verticalParagraphs as Record<string, string>),
    ...Object.values(serviceVerticalParagraphs as Record<string, string>),
  ];
  return {
    total: all.length,
    drafts: all.filter((p) => typeof p === "string" && p.includes("[DRAFT")).length,
  };
}
