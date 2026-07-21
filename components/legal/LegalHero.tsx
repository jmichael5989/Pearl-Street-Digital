import Link from "next/link";

/**
 * Inverted (black) hero for the legal pages (/privacy, /terms) in the
 * three-color system. Reuses the shared `.ind-hero.inverted` treatment
 * (same as /contact and /industries) so no new hero CSS is needed, and
 * `.ind-hero .appear` is already force-painted in the LCP cluster
 * (app/globals.css) so the H1 is never gated behind ScrollReveal.
 */

interface Cta {
  label: string;
  href: string;
}

interface Props {
  kicker: string;
  headline: string;
  lede: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}

export default function LegalHero({
  kicker,
  headline,
  lede,
  primaryCta,
  secondaryCta,
}: Props) {
  return (
    <section className="ind-hero inverted">
      <div className="wrap">
        <p className="kicker appear">{kicker}</p>
        <h1 className="appear">{headline}</h1>
        <p className="lede appear">{lede}</p>
        <div className="hero-ctas appear">
          <Link className="btn" href={primaryCta.href}>
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link className="btn btn-ghost" href={secondaryCta.href}>
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
