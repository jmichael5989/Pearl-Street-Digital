export default function CTABanner() {
  return (
    <section className="bg-dark py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            Get Started
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-white">
            Ready to Grow Your San Antonio Business?
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-lg mx-auto">
            Get a professional website built in two to three weeks -- no
            contracts, no surprises, no lock-in. Your first consultation is
            free.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block rounded-xl px-8 py-4 text-center font-semibold text-white transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
              boxShadow: "0 4px 14px rgba(139,92,246,0.35)",
            }}
          >
            Get Your Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
