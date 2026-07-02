export default function SpecTable() {
  return (
    <section className="spec">
      <div className="wrap">
        <p className="kicker appear">Build standard</p>
        <h2 className="appear">Every site ships against the same spec.</h2>
        <div className="spec-table appear">
          <div className="spec-row">
            <span className="spec-key">Performance</span>
            <span className="spec-val">
              <b>Lighthouse 95 or higher</b> and load under two seconds, verified
              before launch.
            </span>
          </div>
          <div className="spec-row">
            <span className="spec-key">Code</span>
            <span className="spec-val">
              <b>Hand-written.</b> No WordPress, no page builders, no bloated
              plugins, no unused CSS.
            </span>
          </div>
          <div className="spec-row">
            <span className="spec-key">Search</span>
            <span className="spec-val">
              <b>Custom schema markup</b> tells Google what you do and what you
              offer.
            </span>
          </div>
          <div className="spec-row">
            <span className="spec-key">Ownership</span>
            <span className="spec-val">
              <b>Yours.</b> Domain, hosting, analytics, and a Git repository on
              handoff.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
