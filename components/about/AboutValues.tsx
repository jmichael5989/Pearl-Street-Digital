/**
 * About-page Approach section (inverted / dark) — three-color port of
 * the approved mock at public/mocks/hero/about.html. Server component;
 * shared .rpm3 classes (wrap / kicker / spine / inverted) plus the
 * About-specific .ap / .ap-row rules in globals.css. Keeps id="approach"
 * so the hero "How we work" link anchors here. The `appear` class is
 * animated in by the ScrollReveal client component.
 */
export default function AboutValues() {
  return (
    <section className="ap inverted" id="approach">
      <div className="wrap">
        <p className="kicker appear">03 / Our approach</p>
        <h2 className="appear">How we work.</h2>
        <p className="ap-lede appear">
          Six commitments that shape every project. None of them are unusual on
          their own, the package is the rare part.
        </p>

        <div className="ap-row appear">
          <span className="spine">01</span>
          <div>
            <h3>Transparency first.</h3>
          </div>
          <p>
            No hidden fees. Clear dashboards showing where every dollar goes and
            what it&rsquo;s earning.
          </p>
        </div>
        <div className="ap-row appear">
          <span className="spine">02</span>
          <div>
            <h3>You own everything.</h3>
          </div>
          <p>
            Your site, your content, your ad accounts, your analytics. If you
            ever leave, the handoff is a Git repository and a coffee.
          </p>
        </div>
        <div className="ap-row appear">
          <span className="spine">03</span>
          <div>
            <h3>Direct to the builder.</h3>
          </div>
          <p>
            Every call is Jon or Stacie. No account managers, no project
            coordinators. The people who write the code answer the email.
          </p>
        </div>
        <div className="ap-row appear">
          <span className="spine">04</span>
          <div>
            <h3>Speed to launch.</h3>
          </div>
          <p>
            Most agencies take months. We launch starter sites in under two
            weeks and full builds in four.
          </p>
        </div>
        <div className="ap-row appear">
          <span className="spine">05</span>
          <div>
            <h3>Direct access.</h3>
          </div>
          <p>
            Jon answers the phone. Stacie answers the email. No tickets, no
            intake queues, no escalation paths.
          </p>
        </div>
        <div className="ap-row appear">
          <span className="spine">06</span>
          <div>
            <h3>Flexible plans.</h3>
          </div>
          <p>
            Pick a one-time build and own the code outright, or monthly hosting
            with updates and security included. No long-term contracts either
            way, clients stay because the work earns it.
          </p>
        </div>
      </div>
    </section>
  );
}
