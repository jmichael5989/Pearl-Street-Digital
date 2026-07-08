"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal for the three-color body sections. Adds the `in` class to each
 * `.rpm3 .appear` element as it enters the viewport, then unobserves it. Renders
 * nothing.
 *
 * Mount this at the PAGE level (not in a persistent layout). Route-segment pages
 * remount on client-side navigation, so this effect re-runs and re-observes the
 * new page's `.appear` elements. A layout that persists across navigations would
 * NOT remount it, leaving the newly-navigated page's elements unobserved and
 * stuck at opacity:0 (a blank white page) — which is why every three-color page
 * renders its own <ScrollReveal/>.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    document
      .querySelectorAll<HTMLElement>(".rpm3 .appear")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
