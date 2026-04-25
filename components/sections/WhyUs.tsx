/**
 * Homepage WhyUs section. Editorial card-grid pattern matching the
 * option-b.html mock locked at .impeccable.md Resolved Decisions §4.
 *
 * Composition:
 *   - Warm-white section (alternates after Consultation's parchment).
 *   - Edge hairline at the top to mark the section transition.
 *   - Numbered eyebrow with italic-serif "03" in brass + sans label.
 *   - Serif H2 in navy, weight 400, max-width 24ch, text-balance.
 *   - Graphite lede paragraph, max-width 58ch.
 *   - Three-card grid (stacks on mobile, 3-up at sm and above).
 *   - Cards: 1px edge border, no shadow. Hover: border → navy +
 *     subtle translate lift; no glow shadow per the new palette spec.
 *   - Card numbers in italic-serif brass with an edge underline that
 *     separates the number from the card title.
 *
 * Copy: H2, lede, and three card title/body pairs taken verbatim from
 * the option-b.html mock. The owner wrote them when locking the palette;
 * they are on-brief — plainspoken, dry, names the competition by
 * behavior not by name ("template shops", "agencies that bill $450 a
 * month for a four-hour intake call"), claims are concrete and
 * defensible (i. names the people on calls, ii. names the page-load
 * target, iii. names the handoff).
 *
 * Replaces the prior WhyUs (centered title with primary underline,
 * drop-cap "R", marketing-speak two-paragraph copy: AI-powered /
 * agency-quality / "match the caliber of the clients we serve" / "compete
 * smarter and scale faster", a stock-y "Great brands don't grow by
 * accident" pull-quote, Jon's portrait photo, and a pre-pivot light-blue
 * #EFF6FF section background). All retired in favor of the editorial
 * pattern. The portrait photo can return in a dedicated about/team
 * context once real photography exists per the Pre-Launch Checklist.
 */

const whyCards = [
  {
    num: "i.",
    title: "You speak to the builder.",
    body: "No account managers. No project coordinators. Every call is Jon or Stacie — the people whose hands are on the code and the camera.",
  },
  {
    num: "ii.",
    title: "Custom-coded, not templated.",
    body: "Your site is written for your business. The page loads under two seconds and the Lighthouse score is 95+ because we built it that way on purpose.",
  },
  {
    num: "iii.",
    title: "You keep the keys.",
    body: "Your domain, your hosting, your analytics. If you decide in year three to take it somewhere else, the handoff is a Git repository and a coffee.",
  },
];

export default function WhyUs() {
  return (
    <section
      aria-labelledby="why-heading"
      className="bg-light border-t border-border"
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
              03
            </span>
            &nbsp;/&nbsp; Why us
          </div>
        </header>

        {/* H2 */}
        <h2
          id="why-heading"
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
          Small enough to be accountable. Serious enough to do real work.
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
          The San Antonio small-business agency market is saturated with
          template shops on the cheap end and large agencies that bill $450
          a month for a four-hour intake call. We built Rank Point Media to
          fit the gap a specific kind of owner keeps describing to us.
        </p>

        {/* 3-card grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {whyCards.map((card) => (
            <article
              key={card.num}
              className="flex flex-col gap-3.5 border border-border bg-light p-8 transition-[border-color,transform] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:border-text hover:-translate-y-1"
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
                {card.num}
              </div>
              <h3
                className="font-heading text-text"
                style={{
                  fontSize: "1.375rem",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                {card.title}
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
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
