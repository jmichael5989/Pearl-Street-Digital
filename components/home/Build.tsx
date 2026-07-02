// The homepage "Build" section: three numbered reasons, sitting between the
// Design quote and the Services list.
export default function Build() {
  return (
    <section className="why" id="build">
      <div className="wrap">
        <p className="kicker appear">Build</p>
        {/* Visually-hidden section heading so the document outline has no
            skipped level (the H3 row titles below sit under an H2 here). */}
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
          Build
        </h2>

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
