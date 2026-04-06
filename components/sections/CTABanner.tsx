export default function CTABanner() {
  return (
    <section className="bg-dark py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            Get Started
          </span>
          <h2 className="mt-3 font-heading font-bold text-white" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            Ready to Grow Your Business?
          </h2>
          <p className="mt-4 text-[#94A3B8] max-w-lg mx-auto">
            Get a professional website built in two to three weeks -- no
            contracts, no surprises, no lock-in. Your first consultation is
            free.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-block rounded-xl px-8 py-4 text-center font-semibold text-white transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
              boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
            }}
          >
            Get Your Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
