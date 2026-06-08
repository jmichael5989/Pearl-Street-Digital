import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import type { EffectModule } from "../types";

// Industries / areas signature: a navy backing fades up to cover while a brass
// spiral stroke draws over it (leave); the spiral un-draws and the backing
// fades out (enter). industries draws clockwise, areas counter-clockwise, so
// the two sections read distinctly. Uses GSAP's DrawSVGPlugin (free in 3.13+).

let registered = false;

// Archimedean spiral as a polyline path, centred on the -200..200 viewBox.
function buildSpiral(turns: number, dir: 1 | -1): string {
  const points = 260;
  const max = turns * 2 * Math.PI;
  const maxR = 300;
  let d = "";
  for (let i = 0; i <= points; i++) {
    const t = (i / points) * max;
    const r = (t / max) * maxR;
    const x = Math.cos(dir * t) * r;
    const y = Math.sin(dir * t) * r;
    d += i === 0 ? `M ${x.toFixed(2)} ${y.toFixed(2)}` : ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  return d;
}

function refs() {
  return {
    stage: document.getElementById("tx-stage") as HTMLElement,
    overlay: document.getElementById("tx-overlay") as HTMLElement,
    svg: document.getElementById("tx-spiral") as HTMLElement,
    path: document.getElementById("tx-spiral-path") as unknown as SVGPathElement,
  };
}

const spiralDraw: EffectModule = {
  async leave({ gsap, toNamespace }) {
    if (!registered) {
      gsap.registerPlugin(DrawSVGPlugin);
      registered = true;
    }
    const { stage, overlay, svg, path } = refs();
    path.setAttribute("d", buildSpiral(5, toNamespace === "areas" ? -1 : 1));
    gsap.set(stage, { visibility: "visible", pointerEvents: "auto" });
    gsap.set(overlay, {
      visibility: "visible",
      backgroundColor: "var(--color-primary)",
      transformOrigin: "center",
      scaleX: 1,
      scaleY: 1,
      opacity: 0,
    });
    gsap.set(svg, { visibility: "visible" });
    gsap.set(path, { drawSVG: "50% 50%" });
    const tl = gsap.timeline();
    tl.to(overlay, { opacity: 1, duration: 0.6, ease: "power2.inOut" }, 0).to(
      path,
      { drawSVG: "0% 100%", duration: 0.75, ease: "sine.inOut" },
      0,
    );
    await tl;
  },

  async enter({ gsap }) {
    const { overlay, path } = refs();
    const tl = gsap.timeline();
    tl.to(path, { drawSVG: "100% 100%", duration: 0.6, ease: "sine.inOut" }, 0).to(
      overlay,
      { opacity: 0, duration: 0.55, ease: "power2.inOut" },
      0.1,
    );
    await tl;
  },

  teardown({ gsap }) {
    const { stage, overlay, svg } = refs();
    gsap.set(overlay, { clearProps: "all", visibility: "hidden" });
    gsap.set(svg, { visibility: "hidden" });
    gsap.set(stage, { visibility: "hidden", pointerEvents: "none" });
  },
};

export default spiralDraw;
