export default function AboutHero() {
  return (
    <section className="bg-dark py-16 pt-32 lg:py-24 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            About Us
          </p>
          <h1 className="mt-3 font-heading font-bold text-white" style={{ fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Meet the Team Behind Rank Point Media
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-text-on-dark-muted">
            We&apos;re Jon and Stacie -- a husband-and-wife team helping San
            Antonio small businesses grow with websites that actually work and
            marketing that drives real results. When you work with us, you work
            directly with the people who built this agency.
          </p>
        </div>
      </div>
    </section>
  );
}
