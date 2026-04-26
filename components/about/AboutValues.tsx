/**
 * About-page Approach section. Rebuilt as the locked numbered editorial
 * card grid pattern (matches WhyUs on the homepage), one entry per
 * commitment.
 *
 * Replaces the prior section that violated .impeccable.md anti-references
 * §2 (autoplay background video — "Auto-playing hero video of any kind,
 * full stop") plus the locked card spec (rounded-2xl glassmorphism cards
 * with backdrop-blur on a video bleed, text-shadows on light type, all
 * banned by the brief). The autoplay video element, the dark-bleed
 * surface, and the glass cards are all retired here in one move.
 *
 * Surface alternates with AboutStory (warm-white) → bg-light-surface
 * (parchment). Six commitments laid out as a 3-col grid at lg, 2-col at
 * sm, 1-col on mobile — each card uses italic-serif Roman numeral in
 * brass with a hairline divider, then serif title weight 400, then
 * graphite body.
 */

const values = [
  {
    num: "i.",
    title: "Transparency first.",
    body: "No hidden fees. Clear dashboards showing where every dollar goes and what it&rsquo;s earning.",
  },
  {
    num: "ii.",
    title: "You own everything.",
    body: "Your site, your content, your ad accounts, your analytics. If you ever leave, the handoff is a Git repository and a coffee.",
  },
  {
    num: "iii.",
    title: "Direct to the builder.",
    body: "Every call is Jon or Stacie. No account managers, no project coordinators. The people who write the code answer the email.",
  },
  {
    num: "iv.",
    title: "Speed to launch.",
    body: "Most agencies take months. We launch starter sites in under two weeks and full builds in four.",
  },
  {
    num: "v.",
    title: "Local focus.",
    body: "We know San Antonio &mdash; the neighborhoods, the competition, what customers actually search for. That context makes the work sharper.",
  },
  {
    num: "vi.",
    title: "No long-term contracts.",
    body: "We earn the work month to month. Our clients stay because the results show up, not because they&rsquo;re locked in.",
  },
];

export default function AboutValues() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-heading"
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
              03
            </span>
            &nbsp;/&nbsp; Our approach
          </div>
        </header>

        {/* H2 */}
        <h2
          id="approach-heading"
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
          How we work.
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
          Six commitments that shape every project. None of them are
          unusual on their own &mdash; the package is the rare part.
        </p>

        {/* 6-card grid — 1 col mobile, 2 sm, 3 lg */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.num}
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
                {value.num}
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
                {value.title}
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.58,
                  color: "var(--color-brand-text)",
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{ __html: value.body }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
