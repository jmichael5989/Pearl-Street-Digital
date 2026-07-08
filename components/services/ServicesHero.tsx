import Link from "next/link";

/**
 * Services page hero — three-color port of the approved mock at
 * public/mocks/hero/services.html. Server component. Shared .rpm3 classes
 * (wrap / kicker / btn / appear) plus Services-specific rules in globals.css.
 * OWNER CORRECTION: h1 updated to "Eight ways..." and first metric to 8 / Core Services.
 */
export default function ServicesHero() {
  return (
    <section className="svc-hero">
      <div className="wrap">
        <p className="kicker appear">Our services</p>
        <h1 className="appear">Eight ways to grow your business online.</h1>
        <p className="lede appear">
          From custom websites to AI search optimization, the digital marketing toolkit of a much
          larger agency, run by two people.
        </p>
        <div className="svc-cta-row appear">
          <Link className="btn" href="/contact#talk-to-us">
            Book a consultation
          </Link>
          <Link className="btn-ghost" href="/pricing">
            See Pricing
          </Link>
        </div>
        <div className="metrics appear">
          <div>
            <div className="metric-val">8</div>
            <div className="metric-label">Core Services</div>
          </div>
          <div>
            <div className="metric-val">100%</div>
            <div className="metric-label">Built In-House</div>
          </div>
          <div>
            <div className="metric-val">2</div>
            <div className="metric-label">People on Every Project</div>
          </div>
          <div>
            <div className="metric-val">$99</div>
            <div className="metric-label">Starting Monthly</div>
          </div>
        </div>
      </div>
    </section>
  );
}
