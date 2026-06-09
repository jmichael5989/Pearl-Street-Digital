import type { EffectModule } from "../types";

// Contact signature: two navy panels close from top and bottom to cover the
// screen, then part (top lifts, bottom drops) to reveal the new page — a
// theatre-curtain / split. Transform-only (yPercent), no plugins.

const D = 0.78;
const EASE = "power3.inOut";

function els() {
  return {
    stage: document.getElementById("tx-stage") as HTMLElement,
    top: document.getElementById("tx-curtain-top") as HTMLElement,
    bottom: document.getElementById("tx-curtain-bottom") as HTMLElement,
  };
}

const curtainLift: EffectModule = {
  async leave({ gsap }) {
    const { stage, top, bottom } = els();
    gsap.set(stage, { visibility: "visible", pointerEvents: "auto" });
    // Re-assert the navy fill on every leave: teardown only clears the
    // transform (not the background), and GSAP owning the color avoids a
    // React-vs-imperative-DOM conflict that could leave the panels transparent.
    gsap.set([top, bottom], { visibility: "visible", backgroundColor: "#14213D" });
    gsap.set(top, { yPercent: -100 });
    gsap.set(bottom, { yPercent: 100 });
    await gsap.to([top, bottom], { yPercent: 0, duration: D, ease: EASE });
  },

  async enter({ gsap }) {
    const { top, bottom } = els();
    await gsap.to([top, bottom], {
      yPercent: (i: number) => (i === 0 ? -100 : 100),
      duration: D,
      ease: EASE,
    });
  },

  teardown({ gsap }) {
    const { stage, top, bottom } = els();
    // Clear only the transform (NOT the background) so the navy fill survives.
    gsap.set([top, bottom], { clearProps: "transform", visibility: "hidden" });
    gsap.set(stage, { visibility: "hidden", pointerEvents: "none" });
  },
};

export default curtainLift;
