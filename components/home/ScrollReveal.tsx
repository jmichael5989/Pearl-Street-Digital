"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal for the three-color body sections. Replicates the mock's
 * IntersectionObserver: adds the `in` class to each `.rpm3 .appear` element as
 * it enters the viewport, then unobserves it. Renders nothing.
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
