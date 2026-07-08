import Link from "next/link";
import type { ServiceData } from "@/lib/services-data";

/**
 * Service detail Related section — three-color port (phase A).
 * Mirrors ServicesToc.tsx toc-item markup but LIGHT (no .inverted).
 * toc-num uses 06.{i} pattern matching ServicesToc roman numerals.
 * Section 06 in the detail-page rhythm.
 */

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

export default function ServiceRelated({
  services,
}: {
  services: ServiceData[];
}) {
  if (services.length === 0) return null;

  return (
    <section className="toc">
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">06</span>&nbsp;/&nbsp;Related
        </p>
        <h2 className="appear">More of what we do.</h2>
        <ol className="toc-list appear">
          {services.map((svc, idx) => (
            <li className="toc-item" key={svc.slug}>
              <span className="toc-num">06.{ROMAN[idx] ?? idx + 1}</span>
              <div>
                <h3>{svc.title}</h3>
                <p className="tagline">{svc.tagline}</p>
                <div className="toc-meta">
                  <span className="toc-price">{svc.startingAt}</span>
                  <span className="toc-div" />
                  <Link className="u-link" href={`/services/${svc.slug}`}>
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
