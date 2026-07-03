import Link from "next/link";

/**
 * About-page hero — three-color (#000 / #9C9C9C / #FFF) port of the
 * approved mock at public/mocks/hero/about.html. Server component; the
 * shared .rpm3 design system supplies wrap / kicker / u-link, and the
 * About-specific rules (.about-hero, .hero-links) live in globals.css.
 * The `appear` class is animated in by the ScrollReveal client component.
 */
export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="wrap">
        <p className="kicker appear">01 / About</p>
        <h1 className="appear">Code meets Design.</h1>
        <p className="lede appear">
          Two people. Zero middlemen. Stacie architects the design and marketing
          strategy, and Jon brings it to life with flawless code. You get a
          custom-built website without agency markup.
        </p>
        <div className="hero-links appear">
          <a className="u-link" href="#approach">
            How we work
          </a>
          <span className="div" aria-hidden="true" />
          <Link className="u-link" href="/case-studies">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
