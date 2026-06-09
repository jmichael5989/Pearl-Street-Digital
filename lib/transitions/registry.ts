import type { EffectModule, Namespace } from "./types";

// Consolidated to two signatures (owner pick 2026-06-08): the split-curtain and
// the vertical slats. Case-studies/blog keep the card→detail image morph
// (sectionMorph), which falls back to slats for index navigation. The other
// effect modules (cover-wipe, WebGL dissolve, SVG morph, spiral, overlay) are no
// longer referenced and tree-shake out of the build.

type EffectLoader = () => Promise<EffectModule>;

const slats: EffectLoader = () => import("./effects/slats").then((m) => m.default);
const curtain: EffectLoader = () =>
  import("./effects/curtainLift").then((m) => m.default);

const DEFAULT_EFFECT: EffectLoader = slats;

const REGISTRY: Partial<Record<Namespace, EffectLoader>> = {
  home: curtain,
  about: curtain,
  services: curtain,
  industries: curtain,
  contact: curtain,
  caseStudies: () => import("./effects/sectionMorph").then((m) => m.default),
  blog: () => import("./effects/sectionMorph").then((m) => m.default),
  areas: slats,
  pricing: slats,
  legal: slats,
  local: slats,
};

export function resolveEffect(to: Namespace): EffectLoader {
  return REGISTRY[to] ?? DEFAULT_EFFECT;
}

// Friendly destination labels (kept for the engine's ctx; the active effects no
// longer render them, but the provider still populates ctx.destinationTitle).
export const DESTINATION_TITLES: Record<Namespace, string> = {
  home: "Home",
  about: "About",
  services: "Services",
  caseStudies: "Case Studies",
  blog: "Journal",
  industries: "Industries",
  areas: "Service Areas",
  pricing: "Pricing",
  contact: "Contact",
  legal: "",
  local: "",
  default: "",
};
