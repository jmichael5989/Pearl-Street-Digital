import type { EffectModule, Namespace } from "./types";

// Consolidated to the white split-curtain for the three-color routes and the
// vertical slats for the still-navy fallback. (The old card→detail image morph,
// sectionMorph, plus cover-wipe, WebGL dissolve, SVG morph, spiral, and overlay
// are no longer referenced and tree-shake out of the build.)

type EffectLoader = () => Promise<EffectModule>;

const slats: EffectLoader = () => import("./effects/slats").then((m) => m.default);
const curtain: EffectLoader = () =>
  import("./effects/curtainLift").then((m) => m.default);
// White variant for the three-color redesign routes (home, about, ...) so the
// cover matches the light pages instead of flashing navy.
const whiteCurtain: EffectLoader = () =>
  import("./effects/whiteCurtainLift").then((m) => m.default);

const DEFAULT_EFFECT: EffectLoader = slats;

const REGISTRY: Partial<Record<Namespace, EffectLoader>> = {
  home: whiteCurtain,
  about: whiteCurtain,
  services: whiteCurtain,
  industries: whiteCurtain,
  contact: whiteCurtain,
  caseStudies: whiteCurtain,
  blog: whiteCurtain,
  areas: slats,
  pricing: whiteCurtain,
  legal: whiteCurtain,
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
