import Link from "next/link";

/**
 * Services page table-of-contents (inverted / dark section) — three-color
 * port of the "Services TOC" in public/mocks/hero/services.html.
 * Server component. Shared .rpm3 classes (wrap / kicker / inverted /
 * u-link / appear) plus Services-specific .toc rules in globals.css.
 *
 * Per-service prices removed 2026-07 — pricing lives only on /pricing. The
 * toc-lede still points to the pricing page for the full breakdown.
 */
export default function ServicesToc() {
  return (
    <section className="toc inverted">
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">03</span>&nbsp;/&nbsp;Services
        </p>
        <h2 className="appear">Everything we do.</h2>
        <p className="toc-lede appear">
          8 services, one team. All plans include the website build and hosting; ongoing services
          scale with scope. See{" "}
          <Link className="u-link" href="/pricing">
            pricing
          </Link>{" "}
          for the full breakdown.
        </p>
        <ol className="toc-list appear">
          <li className="toc-item">
            <span className="toc-num">03.i</span>
            <div>
              <h3>Website Design</h3>
              <p className="tagline">Websites we hand-build, line by line. They load fast and they rank.</p>
              <div className="toc-meta">
                <Link className="u-link" href="/services/website-design">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="toc-item">
            <span className="toc-num">03.ii</span>
            <div>
              <h3>SEO</h3>
              <p className="tagline">
                Rank higher on Google Maps and local search results so local customers find you
                first, not your competitors.
              </p>
              <div className="toc-meta">
                <Link className="u-link" href="/services/local-seo">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="toc-item">
            <span className="toc-num">03.iii</span>
            <div>
              <h3>Social Media</h3>
              <p className="tagline">
                Strategic content and management across Instagram, Facebook, and LinkedIn that
                builds trust and drives engagement in your local market.
              </p>
              <div className="toc-meta">
                <Link className="u-link" href="/services/social-media">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="toc-item">
            <span className="toc-num">03.iv</span>
            <div>
              <h3>Ad Campaigns</h3>
              <p className="tagline">
                Targeted ad campaigns that put your business in front of customers actively
                searching for your services right now.
              </p>
              <div className="toc-meta">
                <Link className="u-link" href="/services/ppc-google-ads">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="toc-item">
            <span className="toc-num">03.v</span>
            <div>
              <h3>AI Search Optimization</h3>
              <p className="tagline">
                Get your business recommended by ChatGPT, Google AI Overviews, and voice
                assistants. The next frontier of local visibility.
              </p>
              <div className="toc-meta">
                <Link className="u-link" href="/services/ai-search-optimization">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="toc-item">
            <span className="toc-num">03.vi</span>
            <div>
              <h3>Brand Management</h3>
              <p className="tagline">
                Monitor, respond to, and grow your online reviews. Build the 5-star reputation
                your business has earned.
              </p>
              <div className="toc-meta">
                <Link className="u-link" href="/services/reputation-management">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="toc-item">
            <span className="toc-num">03.vii</span>
            <div>
              <h3>Email Marketing</h3>
              <p className="tagline">
                Turn one-time visitors into repeat local customers with email campaigns that
                actually get opened, read, and clicked.
              </p>
              <div className="toc-meta">
                <Link className="u-link" href="/services/email-marketing">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          </li>
          <li className="toc-item">
            <span className="toc-num">03.viii</span>
            <div>
              <h3>Custom AI Solutions</h3>
              <p className="tagline">
                Custom artificial intelligence tools built for your business, automated
                follow-ups, intelligent lead qualification, and workflow automation that gives
                you an unfair advantage.
              </p>
              <div className="toc-meta">
                <Link className="u-link" href="/services/custom-ai-solutions">
                  Read more &rarr;
                </Link>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
