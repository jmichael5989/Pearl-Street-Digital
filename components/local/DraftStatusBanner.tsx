/**
 * Build-time draft status banner. Renders only in development or on
 * Vercel preview deployments — never on production. Counts paragraph
 * keys across the three content/local-matrix/paragraphs/*.json files
 * and reports how many contain the substring "[DRAFT". Currently
 * expects 0 of 17 since all paragraphs are written content; the banner
 * exists for future content reviews where someone marks a paragraph
 * "[DRAFT —" pending revision.
 *
 * Server component. No client JS, no hydration cost.
 */

import { getParagraphStats } from "@/lib/local-matrix/matrix";

export default function DraftStatusBanner() {
  const isProduction =
    process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview";
  if (isProduction) return null;

  const { total, drafts } = getParagraphStats();
  const allClean = drafts === 0;

  return (
    <div
      aria-hidden="true"
      className="fixed bottom-4 right-4 z-50 select-none pointer-events-none"
    >
      <div
        className="font-body text-xs"
        style={{
          background: "var(--color-light-surface)",
          color: "var(--color-text)",
          border: "1px solid var(--color-border)",
          padding: "8px 12px",
          letterSpacing: "0.04em",
          boxShadow: "0 1px 0 rgba(20,33,61,0.08)",
        }}
      >
        <span
          aria-hidden="true"
          className="inline-block align-middle mr-1.5"
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: allClean ? "var(--color-accent)" : "var(--color-accent-dark)",
            verticalAlign: "middle",
          }}
        />
        Matrix: {drafts} of {total} paragraphs in draft
      </div>
    </div>
  );
}
