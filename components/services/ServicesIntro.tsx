/**
 * Services page intro slab — three-color port of the "The work" section in
 * public/mocks/hero/services.html. Server component. Shared .rpm3 classes
 * (wrap / kicker / appear) plus Services-specific .intro rules in globals.css.
 */
export default function ServicesIntro() {
  return (
    <section className="intro">
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">02</span>&nbsp;/&nbsp;The work
        </p>
        <h2 className="appear">The presence businesses actually need.</h2>
        <div className="intro-body appear">
          <p>
            Every engagement starts with a custom-coded website built for speed, clarity, and
            conversion, no templates, no shortcuts, no recycled layouts. From there we layer in the
            marketing that fits your market: local SEO, AI search optimization, paid ads that
            generate real phone calls, and monthly content.
          </p>
          <p>
            No contracts. No account managers shuffling you between specialists. One team, the same
            team that built your site, running every campaign and owning every result.
          </p>
        </div>
      </div>
    </section>
  );
}
