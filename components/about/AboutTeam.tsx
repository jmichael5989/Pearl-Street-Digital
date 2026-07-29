import Image from "next/image";

/**
 * About-page Team section — three-color port of the approved mock at
 * public/mocks/hero/about.html. Server component; shared .rpm3 classes
 * (wrap / kicker / spine) plus the About-specific .team / .people-row
 * rules in globals.css. The `appear` class is animated in by the
 * ScrollReveal client component.
 *
 * The first grid column carries a grayscale profile photo (.person-photo)
 * sized to the same box the .spine numeral used, so swapping numeral -> photo
 * doesn't shift the row/column layout.
 */
export default function AboutTeam() {
  return (
    <section className="team">
      <div className="wrap">
        <p className="kicker appear">02 / The team</p>
        <h2 className="appear">Meet the Design Team.</h2>

        <div className="people-row appear">
          <Image
            className="person-photo"
            src="/images/team/jon.png"
            alt="Jon"
            width={300}
            height={300}
            style={{ objectPosition: "center top" }}
          />
          <div>
            <p className="person-role">Web development &amp; technical SEO</p>
            <div className="person-name">Jon</div>
          </div>
          <p>
            Jon writes the code, runs technical SEO, and tunes performance. He
            spent 15+ years as a product manager at Fortune 150 companies before
            founding RPM, and holds an Economics degree and a Master of Science
            from the University of Texas at San Antonio.
          </p>
        </div>
        <div className="people-row appear">
          <Image
            className="person-photo"
            src="/images/team/stacie.jpg"
            alt="Stacie"
            width={300}
            height={300}
            style={{ objectPosition: "center top" }}
          />
          <div>
            <p className="person-role">Design, marketing &amp; social</p>
            <div className="person-name">Stacie</div>
          </div>
          <p>
            Stacie leads design, marketing, and social. She holds a graphic
            design degree from the University of Texas at San Antonio and built
            her career across web and interior design firms, a dual background
            that shapes how every site here handles visual identity.
          </p>
        </div>
      </div>
    </section>
  );
}
