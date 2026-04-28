/**
 * About-page Story section. Editorial register matching the homepage
 * Hero/WhyUs/Consultation pattern locked at .impeccable.md Resolved
 * Decisions §4 (palette pivot).
 *
 * Replaces the prior pre-pivot block (bg-white shell, max-w-7xl
 * container, centered-decorative eyebrow in retired text-primary,
 * font-bold serif H2, four marketing-speak paragraphs ending with
 * "modern AI tools with proven local marketing strategies"). Now uses
 * the canonical numbered editorial pattern (eyebrow "02 / Our story",
 * left-aligned serif H2 weight 400, graphite paragraphs at 65ch
 * measure) and adds the early-stage disclosure paragraph that
 * .impeccable.md commits the About page to carrying.
 *
 * Surface alternates with AboutHero (dark) → bg-light (warm-white).
 */
export default function AboutStory() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
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
              02
            </span>
            &nbsp;/&nbsp; Our story
          </div>
        </header>

        {/* H2 */}
        <h2
          id="story-heading"
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
          Why we started Rank Point Media.
        </h2>

        {/* Body — graphite paragraphs at 65ch measure */}
        <div
          className="mt-8 flex flex-col gap-5 font-body"
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--color-brand-text)",
            maxWidth: "65ch",
          }}
        >
          <p>
            Too many small businesses have been burned &mdash; long
            contracts, recycled strategies, account managers who can&rsquo;t
            answer a question without escalating it. We started Rank Point
            Media because that&rsquo;s not how the work should feel.
          </p>
          <p>
            We&rsquo;re Jon and Stacie, a husband-and-wife team. Jon writes
            the code and runs technical SEO. Stacie runs design, marketing,
            and social. When the site launches, you talk to the person who
            wrote the CSS. When a campaign misfires, you talk to the person
            who set it up.
          </p>
          <p>
            Our reputation is personal. Every site we build, every campaign
            we run, every dollar of ad spend we manage is tied to our name
            &mdash; not to an account manager who&rsquo;ll be reassigned to
            someone else&rsquo;s account next quarter.
          </p>
        </div>

        {/* Phase-disclosure paragraph — per .impeccable.md Early-stage Disclosure Posture */}
        <div
          className="mt-12 max-w-2xl"
          style={{ paddingTop: "20px", borderTop: "1px solid var(--color-border)" }}
        >
          <p
            className="font-body italic"
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
            }}
          >
            We use AI agents to help build and scale our solutions, so we
            don&rsquo;t need the big staff a traditional agency requires
            &mdash; and we don&rsquo;t pass the cost onto you.
          </p>
        </div>
      </div>
    </section>
  );
}
