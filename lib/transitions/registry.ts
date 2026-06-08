import type { EffectModule, Namespace } from "./types";

// Maps a destination namespace to a code-split effect loader. Phase 1 ships a
// single default (coverWipe) for every route; later phases add per-section
// signature effects by filling in REGISTRY.

type EffectLoader = () => Promise<EffectModule>;

const DEFAULT_EFFECT: EffectLoader = () =>
  import("./effects/coverWipe").then((m) => m.default);

const REGISTRY: Partial<Record<Namespace, EffectLoader>> = {
  // Phase 2+ (per-section signatures):
  // about:       () => import("./effects/webglDissolve").then((m) => m.default),
  // services:    () => import("./effects/svgMorph").then((m) => m.default),
  // industries:  () => import("./effects/spiralDraw").then((m) => m.default),
  // areas:       () => import("./effects/spiralDraw").then((m) => m.default),
  // caseStudies: () => import("./effects/overlaySplitText").then((m) => m.default),
  // blog:        () => import("./effects/overlaySplitText").then((m) => m.default),
  // contact:     () => import("./effects/curtainLift").then((m) => m.default),
};

export function resolveEffect(to: Namespace): EffectLoader {
  return REGISTRY[to] ?? DEFAULT_EFFECT;
}

// Friendly destination labels for effects that show the target name during the
// cover (e.g. overlaySplitText). Empty string = no label.
export const DESTINATION_TITLES: Record<Namespace, string> = {
  home: "Home",
  about: "About",
  services: "Services",
  caseStudies: "Case Studies",
  blog: "the Journal",
  industries: "Industries",
  areas: "Service Areas",
  pricing: "Pricing",
  contact: "Contact",
  legal: "",
  local: "",
  default: "",
};
