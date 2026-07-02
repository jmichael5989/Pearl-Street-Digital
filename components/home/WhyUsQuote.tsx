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
      </div>
    </section>
  );
}
