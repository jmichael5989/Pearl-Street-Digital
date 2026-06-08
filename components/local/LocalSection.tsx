/**
 * Reusable matrix-page section wrapper. Mirrors the eyebrow + serif H2
 * pattern from WhyUs.tsx and FAQ.tsx so the matrix pages render as
 * native to the rest of the site, not a separate scaled-content
 * footprint. Background alternates between warm-white (default) and
 * parchment (altBg) so the section stack reads with the same rhythm
 * as the homepage.
 */

import type { ReactNode } from "react";

type LocalSectionProps = {
  /** Eyebrow string in "NN / Label" format, e.g. "02 / The Stone Oak reality" */
  eyebrow: string;
  heading: string;
  altBg?: boolean;
  children: ReactNode;
  id?: string;
};

export default function LocalSection({
  eyebrow,
  heading,
  altBg = false,
  children,
  id,
}: LocalSectionProps) {
  const [num, ...labelParts] = eyebrow.split(" / ");
  const label = labelParts.join(" / ");

  return (
    <section
      id={id}
      className={`${
        altBg ? "bg-light-surface" : "bg-light"
      } border-t border-border`}
      style={{
        paddingTop: "clamp(72px, 12vh, 144px)",
        paddingBottom: "clamp(72px, 12vh, 144px)",
      }}
    >
      <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
        <header className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal mr-1">
              {num}
            </span>
            &nbsp;/&nbsp; {label}
          </div>
        </header>
        <h2
          className="font-heading text-text text-balance"
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            fontWeight: 400,
            maxWidth: "32ch",
            margin: 0,
          }}
        >
          {heading}
        </h2>
        <div
          className="mt-8 max-w-3xl"
          style={{ marginTop: "clamp(32px, 4vh, 48px)" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
