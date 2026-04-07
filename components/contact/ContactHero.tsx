export default function ContactHero() {
  return (
    <section className="bg-dark pt-32 pb-16 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary text-[0.78rem] font-semibold uppercase tracking-[0.12em] mb-4">
          Contact Us
        </p>
        <h1 className="font-heading font-bold text-white mb-6" style={{ fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Let&apos;s Build Something Great Together
        </h1>
        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
          Free consultations for small businesses. We respond to every inquiry
          within one business day.
        </p>
      </div>
    </section>
  );
}
