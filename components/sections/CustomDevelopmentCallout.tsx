/**
 * Homepage CustomDevelopmentCallout. Manifesto-register section: a single
 * statement of intent ("everything we build is custom-coded") plus three
 * brief specifics (schema, performance, fit).
 *
 * Composition:
 *   - Warm-white background, edge top hairline. Sits in the alternation
 *     pattern: WhyUs (warm-white) → ServicesSection (parchment, when the
 *     owner's in-flight services edits land) → this (warm-white) → Footer
 *     (navy). If ServicesSection ships on warm-white instead, this becomes
 *     two warm-whites in a row and should be re-flagged.
 *   - Centered layout — a deliberate break from the left-aligned editorial
 *     pattern of Hero / Consultation / WhyUs. Manifesto sections benefit
 *     from a centered visual change-up that signals "single statement,
 *     not comparison."
 *   - Eyebrow "05 / How it's built" with italic-serif section number in
 *     brass per the homepage numbering motif.
 *   - H2 is the statement itself: "Every site we ship is custom-coded.
 *     No WordPress, no page builders, no shortcuts." Italic emphasis on
 *     "custom-coded" carries the differentiator without color.
 *   - Three small features below in a 1×3 grid. Lighter visual weight
 *     than the WhyUs cards: hairline top-border separators only, no card
 *     borders, no hover state — these are footnotes to the manifesto,
 *     not standalone claims.
 *
 * Replaces the prior centered italic-bold lead + 3 paragraph blocks. Same
 * structural intent; on-brief typography (weight 400 not bold) and
 * tighter copy.
 */

const features = [
  {
    title: "Custom schema markup",
    body: "Hand-coded structured data tells Google exactly what your business does, where you are, and what you offer — for the rich-result coverage generic sites never get.",
  },
  {
    title: "Performance-first code",
    body: "No bloated plugins, no unused CSS. Every site we ship loads in under two seconds and clears Lighthouse 95+ because we wrote it that way.",
  },
  {
    title: "Built for your business",
    body: "Your site is designed around your specific customers, market, and offer — not squeezed into a template a thousand other businesses already share.",
  },
];

export default function CustomDevelopmentCallout({
  numeral = "05",
}: {
  numeral?: string;
} = {}) {
  return (
    <section
      aria-labelledby="custom-build-heading"
      className="bg-light-surface border-t border-border"
      style={{
        paddingTop: "clamp(72px, 12vh, 144px)",
        paddingBottom: "clamp(72px, 12vh, 144px)",
      }}
    >
      <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
        {/* Eyebrow — centered for the manifesto register */}
        <header className="mb-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal italic mr-1">
              {numeral}
            </span>
            &nbsp;/&nbsp; How it&rsquo;s built
          </div>
        </header>

        {/* H2 manifesto */}
        <h2
          id="custom-build-heading"
          className="mx-auto font-heading text-text text-balance text-center"
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: 1.15,
            letterSpacing: "-0.015em",
            fontWeight: 400,
            maxWidth: "32ch",
            margin: 0,
          }}
        >
          Every site we ship is{" "}
          <em className="font-normal italic">custom-coded</em>. No WordPress,
          no page builders, no shortcuts.
        </h2>

        {/* 3-feature row — hairline-separated footnotes, not cards */}
        <div
          className="mx-auto grid max-w-5xl gap-x-6 gap-y-8 sm:grid-cols-3"
          style={{ marginTop: "clamp(48px, 6vh, 80px)" }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-2 text-center"
              style={{
                paddingTop: "20px",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              <h3
                className="font-heading text-text"
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 500,
                  letterSpacing: "-0.005em",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {f.title}
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: "0.875rem",
                  lineHeight: 1.55,
                  color: "var(--color-brand-text)",
                  margin: 0,
                }}
              >
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
