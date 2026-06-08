import type { Gsap } from "./types";

// Lazy singleton loader for GSAP. Dynamically imported so gsap stays off the
// initial/LCP bundle and only loads on the first page transition. Registers the
// "hop" CustomEase used by several effects (matches the Codrops demo). Bonus
// plugins (MorphSVG/DrawSVG/SplitText/Flip) are loaded per-effect where needed.

let gsapPromise: Promise<Gsap> | null = null;

export function loadGsap(): Promise<Gsap> {
  if (!gsapPromise) {
    gsapPromise = (async () => {
      const [{ gsap }, { CustomEase }] = await Promise.all([
        import("gsap"),
        import("gsap/CustomEase"),
      ]);
      gsap.registerPlugin(CustomEase);
      try {
        CustomEase.create("hop", "0.56, 0, 0.35, 0.98");
      } catch {
        // already registered (loader called more than once before memoization)
      }
      return gsap;
    })();
  }
  return gsapPromise;
}
