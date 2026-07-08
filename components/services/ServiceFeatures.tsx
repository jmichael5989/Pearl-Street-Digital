import type { ServiceData } from "@/lib/services-data";

/**
 * Service detail Features section — three-color port (phase A).
 * Mirrors ServicesBuild.tsx: .build section with kicker 03 / What's included,
 * h2, and .build-grid mapping service.features to .build-feature cards.
 * Section 03 in the detail-page rhythm.
 */
export default function ServiceFeatures({ service }: { service: ServiceData }) {
  return (
    <section className="build">
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">03</span>&nbsp;/&nbsp;What&apos;s included
        </p>
        <h2 className="appear">Everything you get with {service.title}.</h2>
        <div className="build-grid">
          {service.features.map((f) => (
            <div className="build-feature appear" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
