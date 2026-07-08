import Link from "next/link";

/**
 * Service detail page hero — three-color port for /services/<slug> pages.
 * Mirrors ServicesHero.tsx structure with per-page kicker/headline/lede/CTAs/metrics.
 * Server component. Light background (.svc-hero pattern). Metrics use
 * .svc-hero-metrics (flex-wrap) rather than the 4-col .metrics grid.
 */

interface MetricItem {
  value: string;
  label: string;
}

interface CtaItem {
  label: string;
  href: string;
}

interface ServiceDetailHeroProps {
  kicker: string;
  headline: string;
  lede: string;
  primaryCta: CtaItem;
  secondaryCta?: CtaItem;
  metrics?: MetricItem[];
}

export default function ServiceDetailHero({
  kicker,
  headline,
  lede,
  primaryCta,
  secondaryCta,
  metrics,
}: ServiceDetailHeroProps) {
  return (
    <section className="svc-hero">
      <div className="wrap">
        <p className="kicker appear">{kicker}</p>
        <h1 className="appear">{headline}</h1>
        <p className="lede appear">{lede}</p>
        <div className="svc-cta-row appear">
          <Link className="btn" href={primaryCta.href}>
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link className="btn btn-ghost" href={secondaryCta.href}>
              {secondaryCta.label}
            </Link>
          )}
        </div>
        {metrics && metrics.length > 0 && (
          <div className="svc-hero-metrics appear">
            {metrics.map(({ value, label }) => (
              <div key={label}>
                <div className="metric-val">{value}</div>
                <div className="metric-label">{label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
