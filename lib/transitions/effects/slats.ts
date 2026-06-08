import type { EffectModule } from "../types";

// Pricing signature: a row of navy panels (slats) sweeps down from above to
// cover the screen in a left-to-right stagger, then sweeps up and off to reveal
// the new page. Transform-only (yPercent), no plugins — architectural/editorial
// and distinct from the single-panel cover-wipe.

const D = 0.62;
const STAGGER = 0.07;
const EASE = "power3.inOut";

function slats() {
  return Array.from(
    document.querySelectorAll<HTMLElement>("#tx-slats .tx-slat"),
  );
}

const slatsWipe: EffectModule = {
  async leave({ gsap }) {
    const stage = document.getElementById("tx-stage") as HTMLElement;
    const container = document.getElementById("tx-slats") as HTMLElement;
    const bars = slats();
    gsap.set(stage, { visibility: "visible", pointerEvents: "auto" });
    gsap.set(container, { visibility: "visible" });
    gsap.set(bars, { yPercent: -100 });
    await gsap.to(bars, { yPercent: 0, duration: D, ease: EASE, stagger: STAGGER });
  },

  async enter({ gsap }) {
    await gsap.to(slats(), {
      yPercent: -100,
      duration: D,
      ease: EASE,
      stagger: STAGGER,
    });
  },

  teardown({ gsap }) {
    const stage = document.getElementById("tx-stage") as HTMLElement;
    const container = document.getElementById("tx-slats") as HTMLElement;
    gsap.set(slats(), { clearProps: "transform" });
    gsap.set(container, { visibility: "hidden" });
    gsap.set(stage, { visibility: "hidden", pointerEvents: "none" });
  },
};

export default slatsWipe;
