import type { ReactNode } from "react";

/**
 * Light body section shared by the legal pages (/privacy, /terms) in the
 * three-color system: a numbered kicker, an optional H2, a "last updated"
 * caption, and a hairline-divided list of sections (heading + prose). Styled
 * by the scoped `.legal-*` block in app/globals.css. Server component.
 */

export interface LegalSection {
  title: string;
  body: ReactNode;
}

interface Props {
  number: string;
  label: string;
  heading?: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export default function LegalBody({
  number,
  label,
  heading,
  lastUpdated,
  sections,
}: Props) {
  return (
    <section
      aria-labelledby={heading ? "legal-heading" : undefined}
      aria-label={heading ? undefined : label}
    >
      <div className="wrap">
        <p className="kicker appear">
          {number}&nbsp;&nbsp;/&nbsp;&nbsp;{label}
        </p>

        {heading && (
          <h2 id="legal-heading" className="legal-h2 appear">
            {heading}
          </h2>
        )}

        <p className="legal-updated appear">Last updated: {lastUpdated}</p>

        <div className="legal-list appear">
          {sections.map((section) => (
            <article key={section.title} className="legal-section">
              <h3>{section.title}</h3>
              <div className="legal-prose">{section.body}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
