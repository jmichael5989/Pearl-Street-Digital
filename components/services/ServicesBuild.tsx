/**
 * Services page "How it's built" callout — three-color port of the .build
 * section in public/mocks/hero/services.html. Server component. Shared .rpm3
 * classes (wrap / kicker / appear) plus Services-specific .build rules in
 * globals.css.
 */
export default function ServicesBuild() {
  return (
    <section className="build">
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">04</span>&nbsp;/&nbsp;How it&apos;s built
        </p>
        <h2 className="appear">
          Every site we ship is custom-coded. No WordPress, no page builders, no shortcuts.
        </h2>
        <div className="build-grid">
          <div className="build-feature appear">
            <h3>Custom schema markup</h3>
            <p>
              Hand-coded structured data tells Google exactly what your business does, where you
              are, and what you offer, for the rich-result coverage generic sites never get.
            </p>
          </div>
          <div className="build-feature appear">
            <h3>Performance-first code</h3>
            <p>
              No bloated plugins, no unused CSS. Every site we ship loads in under two seconds and
              clears Lighthouse 95+ because we wrote it that way.
            </p>
          </div>
          <div className="build-feature appear">
            <h3>Built for your business</h3>
            <p>
              Your site is designed around your specific customers, market, and offer, not squeezed
              into a template a thousand other businesses already share.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
