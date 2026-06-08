import { SplitText } from "gsap/SplitText";
import type { EffectModule } from "../types";

// Case-studies / blog signature: a navy overlay scales up from the centre to
// cover while the destination name (serif, upright — no italic per brand rule)
// staggers up into view (leave); the words stagger out and the overlay scales
// away (enter). Uses GSAP's SplitText (free in 3.13+) and the "hop" CustomEase
// registered in lib/transitions/gsap.ts.

let registered = false;
let split: SplitText | null = null;

function refs() {
  return {
    stage: document.getElementById("tx-stage") as HTMLElement,
    overlay: document.getElementById("tx-overlay") as HTMLElement,
    title: document.getElementById("tx-title") as HTMLElement,
  };
}

const overlaySplitText: EffectModule = {
  async leave({ gsap, destinationTitle }) {
    if (!registered) {
      gsap.registerPlugin(SplitText);
      registered = true;
    }
    const { stage, overlay, title } = refs();
    gsap.set(stage, { visibility: "visible", pointerEvents: "auto" });
    gsap.set(overlay, {
      visibility: "visible",
      backgroundColor: "var(--color-primary)",
      transformOrigin: "center",
      scaleY: 0,
    });
    title.textContent = destinationTitle || "";
    gsap.set(title, { visibility: "visible" });
    split?.revert();
    split = new SplitText(title, { type: "words" });
    const tl = gsap.timeline();
    tl.to(overlay, { scaleY: 1, duration: 0.7, ease: "power3.inOut" }).from(
      split.words,
      { yPercent: 115, opacity: 0, duration: 0.62, stagger: 0.09, ease: "hop" },
      "-=0.2",
    );
    await tl;
  },

  async enter({ gsap }) {
    const { overlay } = refs();
    const tl = gsap.timeline();
    if (split) {
      tl.to(split.words, {
        yPercent: -115,
        opacity: 0,
        duration: 0.5,
        stagger: 0.07,
        ease: "power2.in",
      });
    }
    tl.to(
      overlay,
      { scaleY: 0, transformOrigin: "center", duration: 0.7, ease: "power3.inOut" },
      split ? "-=0.12" : 0,
    );
    await tl;
  },

  teardown({ gsap }) {
    const { stage, overlay, title } = refs();
    split?.revert();
    split = null;
    gsap.set(overlay, { clearProps: "all", visibility: "hidden" });
    gsap.set(title, { clearProps: "transform,opacity", visibility: "hidden" });
    title.textContent = "";
    gsap.set(stage, { visibility: "hidden", pointerEvents: "none" });
  },
};

export default overlaySplitText;
