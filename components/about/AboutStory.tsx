export default function AboutStory() {
  return (
    <section id="approach" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
              Our Story
            </p>
            <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
              Why We Started Rank Point Media
            </h2>
            <p className="mt-4 leading-relaxed text-gray">
              We saw too many San Antonio small businesses getting burned by big
              agencies that overpromised and underdelivered -- or worse, locked
              into long-term contracts with nothing to show for it. We started
              Rank Point Media because we believe local businesses deserve
              better.
            </p>
            <p className="mt-4 leading-relaxed text-gray">
              As a husband-and-wife team, our reputation is literally our family
              name. Every website we build, every campaign we run, every result
              we report -- it all comes back to us personally. That
              accountability is what makes working with a boutique agency
              different.
            </p>
            <p className="mt-4 leading-relaxed text-gray">
              No account managers, no runaround. Just two people who care about
              your business almost as much as you do. Based in San Antonio and
              operating as a DBA of JSL Innovations LLC, we combine modern AI
              tools with proven marketing strategies to help local businesses
              compete and win online.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-icon-service-border bg-light-surface p-8">
              <div className="text-6xl font-heading leading-none text-primary/20">
                {"\u201C"}
              </div>
              <p className="mt-2 font-heading text-lg font-medium leading-relaxed text-dark">
                We treat every client&apos;s budget like it&apos;s our own money.
                If a tactic won&apos;t move the needle, we won&apos;t sell it.
              </p>
              <p className="mt-4 text-sm text-gray">-- Rank Point Media</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
