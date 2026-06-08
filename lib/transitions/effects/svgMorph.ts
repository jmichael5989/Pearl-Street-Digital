import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import type { EffectModule } from "../types";

// Services signature: a navy shape morphs from the bottom edge up through a wave
// to full cover (leave), then off the top through a wave to reveal (enter).
// viewBox is 0..100 with preserveAspectRatio:none, so the path stretches to the
// viewport. Uses GSAP's MorphSVGPlugin (free in gsap 3.13+).

const FLAT_BOTTOM = "M0,100 L100,100 L100,100 L0,100 Z";
const WAVE_UP = "M0,100 L100,100 L100,55 Q50,12 0,55 Z";
const FULL = "M0,100 L100,100 L100,0 L0,0 Z";
const WAVE_TOP = "M0,0 L100,0 L100,45 Q50,88 0,45 Z";
const FLAT_TOP = "M0,0 L100,0 L100,0 L0,0 Z";

let registered = false;

function path() {
  return document.getElementById("tx-morph-path") as unknown as SVGPathElement;
}

const svgMorph: EffectModule = {
  async leave({ gsap }) {
    if (!registered) {
      gsap.registerPlugin(MorphSVGPlugin);
      registered = true;
    }
    const stage = document.getElementById("tx-stage") as HTMLElement;
    const svg = document.getElementById("tx-svg-morph") as HTMLElement;
    gsap.set(stage, { visibility: "visible", pointerEvents: "auto" });
    gsap.set(svg, { visibility: "visible" });
    gsap.set(path(), { attr: { d: FLAT_BOTTOM } });
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.to(path(), { morphSVG: WAVE_UP, duration: 0.48 }).to(path(), {
      morphSVG: FULL,
      duration: 0.42,
    });
    await tl;
  },

  async enter({ gsap }) {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
    tl.to(path(), { morphSVG: WAVE_TOP, duration: 0.42 }).to(path(), {
      morphSVG: FLAT_TOP,
      duration: 0.48,
    });
    await tl;
  },

  teardown({ gsap }) {
    const stage = document.getElementById("tx-stage") as HTMLElement;
    const svg = document.getElementById("tx-svg-morph") as HTMLElement;
    const p = path();
    if (p) gsap.set(p, { attr: { d: FLAT_BOTTOM } });
    gsap.set(svg, { visibility: "hidden" });
    gsap.set(stage, { visibility: "hidden", pointerEvents: "none" });
  },
};

export default svgMorph;
