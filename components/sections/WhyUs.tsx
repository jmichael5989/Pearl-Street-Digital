import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WhyUs() {
  return (
    <section className="py-10 lg:py-12 bg-[#F0FDFA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <h2
                className="font-heading font-bold text-dark"
                style={{ fontSize: "var(--text-h2)", lineHeight: 1.15 }}
              >
                Why Rank Point Media
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
            </div>
            <div className="lg:col-span-8 space-y-4 text-base leading-relaxed text-dark">
              <p>
                Rank Point Media is a full-service digital marketing agency
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
