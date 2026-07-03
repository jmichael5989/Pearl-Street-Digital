import Link from "next/link";

/**
 * Pre-footer CTA band — three-color port of the approved mock's
 * <section class="cta-band"> at public/mocks/hero/about.html. Server
 * component; the shared .rpm3 classes (wrap / kicker / cta-band / btn /
 * u-link / hero-links) supply all styling. The `appear` class is
 * animated in by the ScrollReveal client component.
 */
export default function PreFooterCta() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <p className="kicker appear">Talk to us</p>
        <h2 className="appear">When you&rsquo;re ready, we&rsquo;re here.</h2>
        <p
          className="lede appear"
          style={{ maxWidth: "46em", margin: "0 auto 36px" }}
        >
          An hour with Jon. No slides, no script, just the conversation. Pick any
          open time on Jon&rsquo;s live calendar.
        </p>
        <div className="hero-links appear" style={{ justifyContent: "center" }}>
          <Link className="btn" href="/contact#talk-to-us">
            Book an hour
          </Link>
          <a className="u-link" href="tel:+12103057372">
            (210) 305-7372
          </a>
        </div>
      </div>
    </section>
  );
}
