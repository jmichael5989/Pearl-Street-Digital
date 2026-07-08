import Link from "next/link";

// Case studies hero — three-color redesign (phase 4). Mirrors ServicesHero.
export default function CaseStudiesHero() {
  return (
    <section className="cs-hero">
      <div className="wrap">
        <p className="kicker appear">Case Studies</p>
        <h1 className="appear">Real work, real results.</h1>
        <p className="lede appear">
          Each entry is a single project: the problem the owner brought us, what
          we built, and what shipped.
        </p>
        <div className="cs-cta appear">
          <Link className="btn" href="/contact#talk-to-us">
            Book a consultation
          </Link>
          <Link className="btn btn-ghost" href="/services">
            See Services
          </Link>
        </div>
      </div>
    </section>
  );
}
