import type { IndustryData } from "@/lib/industries-data";

/**
 * Industry detail page Common Challenges section. Numbered editorial
 * card grid mirroring components/services/ServiceFeatures.tsx with
 * Roman-numeral leaders prefixed by section index 02.
 *
 * Replaces the prior pre-pivot section (bg-white shell, max-w-7xl
 * container, retired text-primary eyebrow with font-bold, font-bold
 * serif H2, rounded-2xl + shadow-sm + bg-white + hover:border-primary
 * cards — same retired card aesthetic the service-detail rebuild
 * already retired).
 *
 * Surface: parchment to alternate against the navy DarkHero above
 * and the warm-white IndustrySolutions below.
 */

const romanNumerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"];

export default function IndustryPainPoints({
  industry,
}: {
  industry: IndustryData;
}) {
  return (
    <section
      aria-labelledby="industry-challenges-heading"
      className="bg-light-surface border-t border-border"
      style={{
        paddingTop: "clamp(72px, 12vh, 144px)",
        paddingBottom: "clamp(72px, 12vh, 144px)",
      }}
    >
      <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
        {/* Eyebrow */}
        <header className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal italic mr-1">
              02
            </span>
            &nbsp;/&nbsp; Common challenges
          </div>
        </header>

        {/* H2 */}
        <h2
          id="industry-challenges-heading"
          className="font-heading text-text text-balance"
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            fontWeight: 400,
            maxWidth: "24ch",
            margin: 0,
          }}
        >
          The patterns we hear most often.
        </h2>

        {/* Lede */}
        <p
          className="mt-5 font-body"
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--color-brand-text)",
            maxWidth: "58ch",
            marginBottom: "clamp(48px, 6vh, 64px)",
          }}
        >
          {industry.painPoints.length} problems that come up almost every
          conversation we have with {industry.title.toLowerCase()}.
        </p>

        {/* Numbered editorial card grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {industry.painPoints.map((point, idx) => (
            <article
              key={point.title}
              className="flex flex-col gap-3.5 border border-border bg-light p-8 transition-[border-color,transform] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:border-text hover:-translate-y-[3px]"
            >
              <div
                className="font-heading italic text-accent"
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 400,
                  paddingBottom: "14px",
                  marginBottom: "8px",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                02.{romanNumerals[idx]}
              </div>
              <h3
                className="font-heading text-text"
                style={{
                  fontSize: "1.25rem",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                {point.title}
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.58,
                  color: "var(--color-brand-text)",
                  margin: 0,
                }}
              >
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
