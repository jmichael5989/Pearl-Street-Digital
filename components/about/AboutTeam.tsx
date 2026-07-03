/**
 * About-page Team section — three-color port of the approved mock at
 * public/mocks/hero/about.html. Server component; shared .rpm3 classes
 * (wrap / kicker / spine) plus the About-specific .team / .people-row
 * rules in globals.css. The `appear` class is animated in by the
 * ScrollReveal client component.
 */
export default function AboutTeam() {
  return (
    <section className="team">
      <div className="wrap">
        <p className="kicker appear">03 / The team</p>
        <h2 className="appear">Who you actually talk to.</h2>
        <p className="team-lede appear">
          Two people, plus a dog. Every email, every call, every line of code,
          one of us. No layers in between.
        </p>

        <div className="people-row appear">
          <span className="spine">01</span>
          <div>
            <p className="person-role">Web development &amp; technical SEO</p>
            <div className="person-name">Jon</div>
          </div>
          <p>
            Jon writes the code, runs technical SEO, and tunes performance at
            Rank Point Media. He holds an undergraduate degree in Economics and a
            Master of Science from the University of Texas at San Antonio, and
            spent 15+ years as a product manager at Fortune 150 companies before
            founding RPM. The work here is custom-built, not configured from a
            template.
          </p>
        </div>
        <div className="people-row appear">
          <span className="spine">02</span>
          <div>
            <p className="person-role">Design, marketing &amp; social</p>
            <div className="person-name">Stacie</div>
          </div>
          <p>
            Stacie leads design, marketing, and social media at Rank Point
            Media. She holds a graphic design degree from the University of Texas
            at San Antonio and has built her career across web and interior
            design firms, a dual background that shapes how RPM approaches visual
            identity for local businesses.
          </p>
        </div>
        <div className="people-row appear">
          <span className="spine">03</span>
          <div>
            <p className="person-role">Chief Bark Officer</p>
            <div className="person-name">George</div>
          </div>
          <p>George supervises from her corner of the office.</p>
        </div>
      </div>
    </section>
  );
}
