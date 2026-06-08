import type { EffectModule } from "../types";

// Contact signature: two navy panels close from top and bottom to cover the
// screen, then part (top lifts, bottom drops) to reveal the new page — a
// theatre-curtain / split. Transform-only (yPercent), no plugins.

const D = 0.55;
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
    gsap.set([top, bottom], { visibility: "visible" });
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
    gsap.set([top, bottom], { clearProps: "all", visibility: "hidden" });
    gsap.set(stage, { visibility: "hidden", pointerEvents: "none" });
  },
};

export default curtainLift;
