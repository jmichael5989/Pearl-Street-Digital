import slats from "./slats";
import type { EffectModule } from "../types";

// Case-studies / blog signature with a shared-element image morph.
//
// When navigating from an index card to a detail page — i.e. a [data-flip-id]
// thumbnail for the destination slug exists on the CURRENT page — the clicked
// thumbnail morphs into the detail hero image. Otherwise (index navigation,
// deep link, or no matching thumbnail) it falls back to the section's base
// transition (the vertical slats).
//
// No GSAP Flip plugin needed: the clone is a fixed-position box whose
// top/left/width/height animate while an object-fit:cover <img> re-covers, so
// the image never distorts across the 2:1 → 16:9 aspect change. The clone lives
// on the persistent #tx-stage, so it survives the route swap between leave and
// enter.

let mode: "flip" | "fallback" = "fallback";
let clone: HTMLDivElement | null = null;

function detailSlug(path: string): string | null {
  const m = path.match(/^\/(?:case-studies|blog)\/([^/?#]+)/);
  return m && m[1] ? m[1] : null;
}

function rectOf(el: Element) {
  const r = el.getBoundingClientRect();
  return { top: r.top, left: r.left, width: r.width, height: r.height };
}

const sectionMorph: EffectModule = {
  async leave(ctx) {
    const { gsap, targetPath } = ctx;
    const slug = detailSlug(targetPath);
    const sourceWrap = slug
      ? document.querySelector(`[data-flip-id="${slug}"]`)
      : null;
    const sourceImg = sourceWrap?.querySelector("img") as HTMLImageElement | null;

    if (!slug || !sourceImg) {
      mode = "fallback";
      await slats.leave(ctx);
      return;
    }

    mode = "flip";
    const stage = document.getElementById("tx-stage") as HTMLElement;
    gsap.set(stage, { visibility: "visible", pointerEvents: "auto" });
    const r = rectOf(sourceImg);
    clone = document.createElement("div");
    clone.style.cssText =
      `position:fixed;top:${r.top}px;left:${r.left}px;width:${r.width}px;height:${r.height}px;` +
      `overflow:hidden;z-index:1001;border-radius:4px;visibility:visible;` +
      `box-shadow:0 1px 0 rgba(20,33,61,0.08);will-change:top,left,width,height;`;
    const img = document.createElement("img");
    img.src = sourceImg.currentSrc || sourceImg.src;
    img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;";
    clone.appendChild(img);
    stage.appendChild(clone);
    // Let the clone paint over the thumbnail before the route swaps in.
    await new Promise((res) => requestAnimationFrame(() => res(null)));
  },

  async enter(ctx) {
    if (mode === "fallback") {
      await slats.enter(ctx);
      return;
    }
    const { gsap, targetPath } = ctx;
    const slug = detailSlug(targetPath);
    const destWrap = slug
      ? document.querySelector(`[data-flip-id="${slug}"]`)
      : null;
    const destImg = (destWrap?.querySelector("img") as HTMLElement | null) ?? destWrap;
    if (!clone || !destImg) {
      clone?.remove();
      clone = null;
      return;
    }
    const r = rectOf(destImg);
    await gsap.to(clone, {
      top: r.top,
      left: r.left,
      width: r.width,
      height: r.height,
      duration: 0.95,
      ease: "power3.inOut",
    });
    await gsap.to(clone, { autoAlpha: 0, duration: 0.3, ease: "power1.out" });
    clone.remove();
    clone = null;
  },

  teardown(ctx) {
    if (mode === "fallback") {
      slats.teardown(ctx);
    } else {
      clone?.remove();
      clone = null;
      const stage = document.getElementById("tx-stage") as HTMLElement;
      ctx.gsap.set(stage, { visibility: "hidden", pointerEvents: "none" });
    }
    mode = "fallback";
  },
};

export default sectionMorph;
