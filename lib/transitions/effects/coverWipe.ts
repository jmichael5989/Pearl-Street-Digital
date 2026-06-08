import type { EffectModule } from "../types";

// Default transition: a solid navy panel wipes up to cover the screen (leave),
// the route swaps underneath it, then the panel continues up and off to reveal
// the new page (enter). Transform-only (scaleY), so it's GPU-cheap and works in
// every browser. On-brand: navy on warm-white. GSAP tweens are awaitable.

const DURATION = 0.6;
const EASE = "power3.inOut";

const coverWipe: EffectModule = {
  async leave({ gsap, stage }) {
    gsap.set(stage.root, { visibility: "visible", pointerEvents: "auto" });
    gsap.set(stage.overlay, {
      visibility: "visible",
      backgroundColor: "var(--color-primary)",
      transformOrigin: "bottom center",
      scaleY: 0,
    });
    await gsap.to(stage.overlay, { scaleY: 1, duration: DURATION, ease: EASE });
  },

  async enter({ gsap, stage }) {
    // Origin flips to top so the panel keeps travelling upward as it uncovers.
    gsap.set(stage.overlay, { transformOrigin: "top center" });
    await gsap.to(stage.overlay, { scaleY: 0, duration: DURATION, ease: EASE });
  },

  teardown({ gsap, stage }) {
    gsap.set(stage.overlay, { clearProps: "all", visibility: "hidden" });
    gsap.set(stage.root, { visibility: "hidden", pointerEvents: "none" });
  },
};

export default coverWipe;
