// The AI Search Optimization page's proof-point quote band, relocated from
// the homepage 2026-07-29; the blockquote holds only the cited fact, our
// positioning line sits outside it.
export default function AiSearchQuote() {
  return (
    <section className="why">
      <div className="wrap">
        <p className="kicker appear">The problem</p>
        {/* Visually-hidden section heading so the document outline has no
            skipped level (hero H1 -> H2 here -> the WhyUs H2 / H3 rows below).
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
          The problem
        </h2>
        {/* The blockquote holds only the cited fact; our own positioning
            line lives outside it so the quotation semantics stay honest. */}
        <figure className="why-quote appear">
          <blockquote>
            <p>
              When Google answers above the results, the top-ranked page
              loses 58% of its clicks.
            </p>
          </blockquote>
          <figcaption>
            <cite>
              <a
                href="https://ahrefs.com/blog/ai-overviews-reduce-clicks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ahrefs, 300,000-keyword study, 2026
              </a>
            </cite>
          </figcaption>
        </figure>
        <p className="why-tagline appear">
          We build for the answer, not just the position.
        </p>
      </div>
    </section>
  );
}
