export default function WhyUsQuote() {
  return (
    <section className="why" id="approach">
      <div className="wrap">
        <p className="kicker appear">Why us</p>
        {/* Visually-hidden section heading so the document outline has no
            skipped level (hero H1 -> H2 here -> the H3 row titles below).
            Inline sr-only styles keep it bulletproof regardless of utility
            generation. */}
        <h2
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          Why us
        </h2>
        <blockquote className="why-quote appear">
          <p>
            “When Google shows an AI answer above the results, the top-ranked
            page gets 58% fewer clicks. Ranking first no longer means getting
            found. We build for the answer, not just the position.”
          </p>
          <cite>Source: Ahrefs, 300,000-keyword study, December 2025</cite>
        </blockquote>

        <div className="why-row appear">
          <span className="spine">01</span>
          <div className="why-copy">
            <p className="why-eyebrow">Access</p>
            <h3>You speak to the builder.</h3>
          </div>
          <p>
            Every call is Jon or Stacie, the people whose hands are on the code
            and the camera. Nothing gets lost between an account manager and the
            work.
          </p>
        </div>
        <div className="why-row appear">
          <span className="spine">02</span>
          <div className="why-copy">
            <p className="why-eyebrow">Craft</p>
            <h3>Custom-coded for your business.</h3>
          </div>
          <p>
            Your site is written for your business. The page loads under two
            seconds and the Lighthouse score is 95 or higher because we built it
            that way on purpose.
          </p>
        </div>
        <div className="why-row appear">
          <span className="spine">03</span>
          <div className="why-copy">
            <p className="why-eyebrow">Ownership</p>
            <h3>You keep the keys.</h3>
          </div>
          <p>
            Your domain, your hosting, your analytics. If you decide in year
            three to take it somewhere else, the handoff is a Git repository and
            a coffee.
          </p>
        </div>
      </div>
    </section>
  );
}
