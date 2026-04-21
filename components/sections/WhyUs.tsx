import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyUs() {
  return (
    <section className="py-10 lg:py-14 bg-[#EFF6FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2
              className="font-heading font-bold text-primary"
              style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}
            >
              Why Rank Point Media
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
          </div>
          <div className="mx-auto mt-6 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-start">
            <div className="space-y-5 text-left text-lg leading-relaxed text-dark">
              <p>
                <span className="font-heading text-4xl font-bold text-primary leading-none align-[-0.15em] mr-0.5">R</span>
                ank Point Media is a full-service digital marketing agency
                delivering solutions that match the caliber of the clients we
                serve. Founder-led and AI-powered, we provide agency-quality
                websites, local SEO, and digital marketing strategies at a
                fraction of traditional agency rates &mdash; complete with
                bilingual capability and the flexibility of month-to-month
                partnerships.
              </p>
              <p>
                We go beyond what traditional agencies offer. Our team builds
                custom artificial intelligence solutions tailored to your
                specific business needs &mdash; from automated customer
                follow-ups to intelligent lead qualification &mdash; giving you
                the tools to compete smarter and scale faster.
              </p>
              <p className="font-semibold text-dark">
                When you partner with Rank Point Media, you&rsquo;re not another
                account in a crowded portfolio. You&rsquo;re our priority.
              </p>
            </div>
            <aside className="relative rounded-2xl border border-[#E5E7EB] bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,184,166,0.18)] hover:border-primary lg:sticky lg:top-24">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="absolute -top-4 left-1/2 h-10 w-10 -translate-x-1/2 text-primary"
                fill="currentColor"
              >
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6v-6H5.5a1.67 1.67 0 0 1 1.67-1.67V6zm10 0A5.17 5.17 0 0 0 12 11.17V18h6v-6h-2.5a1.67 1.67 0 0 1 1.67-1.67V6z" />
              </svg>
              <div className="mt-2 flex justify-center">
                <Image
                  src="/images/team/jon.png"
                  alt="Jon, Owner and Designer at Rank Point Media"
                  width={112}
                  height={112}
                  className="h-28 w-28 rounded-full object-cover ring-4 ring-primary/30"
                />
              </div>
              <p className="mt-6 font-heading text-xl italic leading-snug text-dark">
                &ldquo;Great brands don&rsquo;t grow by accident. They grow with
                the right team behind them.&rdquo;
              </p>
              <div className="mt-6 border-t border-[#E5E7EB] pt-4">
                <p className="font-heading text-base font-semibold text-dark">Jon</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-gray-500">
                  Owner / Designer
                </p>
              </div>
            </aside>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
