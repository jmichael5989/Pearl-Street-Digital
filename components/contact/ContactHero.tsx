export default function ContactHero() {
  return (
    <section className="bg-dark pt-36 md:pt-44 pb-16 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary text-base font-bold uppercase tracking-[0.12em] mb-4">
          Free Consultation
        </p>
        <h1
          className="font-heading font-bold text-white mb-6"
          style={{
            fontSize: "var(--text-h1)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Let&apos;s Grow Your Business
        </h1>
        <p className="text-lg text-text-on-dark-muted max-w-2xl mx-auto">
          Tell us about your project and we&apos;ll show you exactly how we can
          help.
        </p>
      </div>
    </section>
  );
}
