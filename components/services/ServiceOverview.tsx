import type { ServiceData } from "@/lib/services-data";

/**
 * Service detail Overview section — three-color port (phase A).
 * Mirrors ServicesIntro.tsx: .intro section with kicker 02 / Overview,
 * h2 from service.overview.heading, paragraphs in .intro-body.
 * Section 02 in the detail-page rhythm.
 */
export default function ServiceOverview({ service }: { service: ServiceData }) {
  const { overview } = service;

  return (
    <section className="intro">
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">02</span>&nbsp;/&nbsp;Overview
        </p>
        <h2 className="appear">{overview.heading}</h2>
        <div className="intro-body appear">
          {overview.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
