import type { EffectModule } from "../types";

// Default transition: a solid navy panel slides up to cover the screen (leave),
// the route swaps underneath it, then it continues up and off to reveal the new
// page (enter). A brass-soft hairline rides the leading/trailing edge (via
// box-shadow) so the motion still registers when navigating between two dark
// pages. Transform-only (translateY), GPU-cheap, works in every browser.

const DURATION = 0.85;
const EASE = "power3.inOut";
// Brass hairline 2px above the top edge and 2px below the bottom edge — whichever
// edge is leading reads as brass against a same-navy page behind it. Hex (not the
// CSS var) so the value survives being set on box-shadow via GSAP.
const BRASS_EDGE = "0 -2px 0 0 #B78F3E, 0 2px 0 0 #B78F3E";

const coverWipe: EffectModule = {
  async leave({ gsap, stage }) {
    gsap.set(stage.root, { visibility: "visible", pointerEvents: "auto" });
    gsap.set(stage.overlay, {
      visibility: "visible",
      backgroundColor: "var(--color-primary)",
      boxShadow: BRASS_EDGE,
      scaleX: 1,
      scaleY: 1,
      yPercent: 100,
    });
    await gsap.to(stage.overlay, { yPercent: 0, duration: DURATION, ease: EASE });
  },

  async enter({ gsap, stage }) {
    // The panel keeps travelling upward and off the top; the bottom edge (with
    // its brass hairline) leads the reveal.
    await gsap.to(stage.overlay, { yPercent: -100, duration: DURATION, ease: EASE });
  },

  teardown({ gsap, stage }) {
    gsap.set(stage.overlay, { clearProps: "all", visibility: "hidden" });
    gsap.set(stage.root, { visibility: "hidden", pointerEvents: "none" });
  },
};

export default coverWipe;
