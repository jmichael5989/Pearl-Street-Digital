import ScrollReveal from "@/components/ui/ScrollReveal";

const commitments = [
  {
    title: "You Own Everything",
    description:
      "Every line of code, every design file, every credential. Full handover on launch day. No hostage domains, no proprietary lock-in.",
  },
  {
    title: "No Long-Term Contracts",
    description:
      "Month-to-month if you want ongoing support. One-time builds with no strings attached. Walk away whenever you want.",
  },
  {
    title: "Transparent Pricing",
    description:
      "What you see on our pricing page is what you pay. No hidden fees, no surprise invoices, no scope-creep charges.",
  },
];

/* ── MODE B — Reusable testimonial card for future use ─── */
export interface TestimonialData {
  quote: string;
  name: string;
  business: string;
  photo?: string;
  rating?: number;
  websiteUrl?: string;
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
    </svg>
  );
}

export function TestimonialCard({ testimonial }: { testimonial: TestimonialData }) {
  return (
    <div className="rounded-2xl border border-border-dark bg-dark-surface p-8 shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(37,99,235,0.15)]">
      {testimonial.rating && (
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: testimonial.rating }, (_, i) => (
            <StarIcon key={i} />
          ))}
        </div>
      )}
      <p className="italic text-base text-text-on-dark-muted leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        {testimonial.photo && (
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="h-12 w-12 rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-heading font-bold text-text-on-dark">{testimonial.name}</p>
          <p className="text-sm text-text-on-dark-muted mt-0.5">{testimonial.business}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Main section — MODE A (What We Stand For) ─────────── */
export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-dark py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
              Our Commitments
            </span>
            <h2 className="mt-3 font-heading font-bold text-text-on-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
              What We Stand For
            </h2>
            <p className="mt-4 text-text-on-dark-muted max-w-2xl mx-auto">
              We built this agency on promises we actually keep. Here is what
              every client can expect.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border-dark bg-dark-surface p-8 shadow-sm border-l-4 border-l-primary"
              >
                <h3 className="font-heading text-lg font-semibold text-text-on-dark">
                  {c.title}
                </h3>
                <p className="mt-3 text-base text-text-on-dark-muted leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
