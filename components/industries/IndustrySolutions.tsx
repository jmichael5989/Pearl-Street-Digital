import Link from "next/link";
import type { IndustryData } from "@/lib/industries-data";

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

export default function IndustrySolutions({
  industry,
}: {
  industry: IndustryData;
}) {
  return (
    <section className="toc">
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">03</span>&nbsp;/&nbsp;How we help
        </p>
        <h2 className="appear">What we build for {industry.title}.</h2>
        <ol className="toc-list appear">
          {industry.solutions.map((solution, i) => (
            <li className="toc-item" key={solution.title}>
              <span className="toc-num">03.{ROMAN[i] ?? i + 1}</span>
              <div>
                <h3>{solution.title}</h3>
                <p className="tagline">{solution.description}</p>
                <div className="toc-meta">
                  <Link
                    className="u-link"
                    href={`/services/${solution.serviceSlug}`}
                  >
                    See our services &rarr;
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
