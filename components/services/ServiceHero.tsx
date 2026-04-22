import type { ServiceData } from "@/lib/services-data";

export default function ServiceHero({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading font-bold text-text" style={{ fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {service.title} for Local Businesses
          </h1>
          <p className="mt-5 text-lg text-gray leading-relaxed">
            {service.tagline}
          </p>
          <a
            href="/contact"
            className="btn-primary mt-8 inline-flex items-center justify-center rounded-xl px-8 py-3.5 font-heading font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
              boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
            }}
          >
            Contact Us
          </a>
          <div className="mt-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
