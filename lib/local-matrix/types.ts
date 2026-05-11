/**
 * Type definitions for the Local Matrix programmatic SEO system.
 * Source of truth for the shape of all six JSON content files in
 * content/local-matrix/. If a JSON file's shape diverges from these
 * types, TypeScript will catch it at build time.
 */

export type ServiceSlug =
  | "local-seo"
  | "website-design"
  | "ppc-google-ads"
  | "social-media";

export type VerticalSlug = "dentists" | "hvac" | "restaurants";

export type NeighborhoodSlug = "stone-oak" | "alamo-heights";

export interface Service {
  slug: ServiceSlug;
  displayName: string;
  shortDesc: string;
  canonicalPath: string;
  deliverables: string[];
  icon: string;
}

export interface Vertical {
  slug: VerticalSlug;
  displayName: string;
  displayNamePlural: string;
  singularNoun: string;
  avgTicket: string;
  icon: string;
}

export interface Neighborhood {
  slug: NeighborhoodSlug;
  displayName: string;
  zipCodes: string[];
  adjacentAreas: string[];
  majorCorridors: string[];
  icon: string;
}

export interface Tuple {
  service: ServiceSlug;
  vertical: VerticalSlug;
  neighborhood: NeighborhoodSlug;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedLink {
  href: string;
  text: string;
}

export interface PageData {
  service: Service;
  vertical: Vertical;
  neighborhood: Neighborhood;
  neighborhoodParagraph: string;
  verticalParagraph: string;
  serviceVerticalParagraph: string;
  introLine: string;
  closingLine: string;
  faqs: FAQ[];
  ctaCopy: string;
  related: RelatedLink[];
}
