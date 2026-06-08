import type { EffectModule, Namespace } from "./types";

// Maps a destination namespace to a code-split effect loader (selection is by
// the DESTINATION section, mirroring Barba's `to: { namespace }`). Each loader
// dynamic-imports its effect module so plugins (MorphSVG/DrawSVG/SplitText) and
// three.js land in per-effect chunks, off the initial bundle. Unmapped routes
// (home, pricing, legal, local) fall back to the default cover-wipe.

type EffectLoader = () => Promise<EffectModule>;

const DEFAULT_EFFECT: EffectLoader = () =>
  import("./effects/coverWipe").then((m) => m.default);

const REGISTRY: Partial<Record<Namespace, EffectLoader>> = {
  about: () => import("./effects/webglDissolve").then((m) => m.default),
  pricing: () => import("./effects/webglDissolve").then((m) => m.default),
  services: () => import("./effects/svgMorph").then((m) => m.default),
  contact: () => import("./effects/curtainLift").then((m) => m.default),
  caseStudies: () => import("./effects/sectionMorph").then((m) => m.default),
  blog: () => import("./effects/sectionMorph").then((m) => m.default),
  industries: () => import("./effects/spiralDraw").then((m) => m.default),
  areas: () => import("./effects/spiralDraw").then((m) => m.default),
};

export function resolveEffect(to: Namespace): EffectLoader {
  return REGISTRY[to] ?? DEFAULT_EFFECT;
}

// Destination labels for overlaySplitText (the name shown during the cover).
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
