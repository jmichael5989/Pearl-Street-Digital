import Link from "next/link";
import { getAllIndustries } from "@/lib/industries-data";

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

export default function IndustriesList() {
  const industries = getAllIndustries();
  return (
    <section className="toc">
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">02</span>&nbsp;/&nbsp;Industries we serve
        </p>
        <h2 className="appear">Where we&rsquo;ve done the work.</h2>
        <ol className="toc-list appear">
          {industries.map((ind, i) => (
            <li className="toc-item" key={ind.slug}>
              <span className="toc-num">02.{ROMAN[i] ?? i + 1}</span>
              <div>
                <h3>{ind.title}</h3>
                <p className="tagline">{ind.heroSubtitle}</p>
                <div className="toc-meta">
                  <Link className="u-link" href={`/industries/${ind.slug}`}>
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
