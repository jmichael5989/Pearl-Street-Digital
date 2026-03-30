export default function AboutStory() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-accent">
              Our Story
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-dark sm:text-4xl">
              Built for Businesses Like Yours
            </h2>
            <p className="mt-4 leading-relaxed text-gray">
              Pearl Street Digital started with a simple observation: San Antonio
              small businesses deserve the same caliber of digital marketing that
              big brands get, without the big-brand price tag. We saw too many
              local shops paying for cookie-cutter websites and SEO packages that
              never moved the needle.
            </p>
            <p className="mt-4 leading-relaxed text-gray">
              As a DBA of JSL Innovations LLC, Pearl Street Digital was founded
              in 2026 with a clear mission -- use modern AI tools and proven
              marketing strategies to help local businesses compete and win
              online. Every website we build, every SEO campaign we run, and
              every ad dollar we manage is backed by data and built for results.
            </p>
            <p className="mt-4 leading-relaxed text-gray">
              We are based in the Leon Springs area of San Antonio and work
              exclusively with Texas small businesses. When you work with us, you
              work directly with the founder. No account managers. No runaround.
              Just honest, transparent work from someone who knows your market.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-icon-service-border bg-light p-8">
              <div className="text-6xl font-heading leading-none text-primary/20">
                {"\u201C"}
              </div>
              <p className="mt-2 font-heading text-lg font-medium leading-relaxed text-dark">
                We treat every client&apos;s budget like it&apos;s our own money.
                If a tactic won&apos;t move the needle, we won&apos;t sell it.
              </p>
              <p className="mt-4 text-sm text-gray">-- Pearl Street Digital</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
