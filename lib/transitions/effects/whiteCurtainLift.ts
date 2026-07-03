import type { EffectModule } from "../types";

// White curtain — the three-color redesign's transition (home <-> about, and
// future ported pages). Identical motion to curtainLift, but the two panels are
// WHITE instead of navy so the cover matches the light three-color pages rather
// than flashing dark. Because a white panel over a white page would be
// invisible, each panel carries a faint dark hairline on its LEADING edge so the
// motion still registers — the same legibility trick the navy dark-on-dark
// covers use (brass leading edge).

const D = 0.78;
const EASE = "power3.inOut";
const FILL = "#FFFFFF";
const EDGE = "rgba(0,0,0,0.28)";

function els() {
  return {
    stage: document.getElementById("tx-stage") as HTMLElement,
    top: document.getElementById("tx-curtain-top") as HTMLElement,
    bottom: document.getElementById("tx-curtain-bottom") as HTMLElement,
  };
}

const whiteCurtainLift: EffectModule = {
  async leave({ gsap }) {
    const { stage, top, bottom } = els();
    gsap.set(stage, { visibility: "visible", pointerEvents: "auto" });
    gsap.set([top, bottom], { visibility: "visible", backgroundColor: FILL });
    // Leading edge = the edge that moves into the page. Top panel drops, so its
    // bottom edge leads; bottom panel rises, so its top edge leads.
    gsap.set(top, { yPercent: -100, boxShadow: `0 1px 0 0 ${EDGE}` });
    gsap.set(bottom, { yPercent: 100, boxShadow: `0 -1px 0 0 ${EDGE}` });
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
    // Clear the transform AND the boxShadow (so a following navy curtain, which
    // never sets a shadow, doesn't inherit this one). Background is left for the
    // next effect's leave() to re-assert.
    gsap.set([top, bottom], {
      clearProps: "transform,boxShadow",
      visibility: "hidden",
    });
    gsap.set(stage, { visibility: "hidden", pointerEvents: "none" });
  },
};

export default whiteCurtainLift;
