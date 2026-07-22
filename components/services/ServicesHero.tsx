import Link from "next/link";

/**
 * Services page hero — three-color port of the approved mock at
 * public/mocks/hero/services.html. Server component. Shared .rpm3 classes
 * (wrap / kicker / btn / appear) plus Services-specific rules in globals.css.
 * 2026-07-22: metrics row removed and H1 de-counted when the advertised menu
 * was trimmed to 4 core services (owner request; supersedes the earlier owner
 * correction that set the H1 to "Eight ways..." and the first metric to 8 / Core Services).
 */
export default function ServicesHero() {
  return (
    <section className="svc-hero">
      <div className="wrap">
        <p className="kicker appear">Our services</p>
        <h1 className="appear">Every way to grow your business online.</h1>
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
      </div>
    </section>
  );
}
