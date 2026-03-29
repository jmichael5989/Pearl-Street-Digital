const steps = [
  {
    number: "01",
    title: "Free Website Audit",
    description:
      "We review your current site (or lack of one), your competitors, and your local market. You get a clear picture of where you stand and what to fix first.",
  },
  {
    number: "02",
    title: "Custom Strategy",
    description:
      "Based on the audit, we build a plan tailored to your business -- not a generic template. We pick the right pages, keywords, and tools for your goals.",
  },
  {
    number: "03",
    title: "Build and Launch",
    description:
      "We design and develop your site, usually in 2-3 weeks. You review, we revise, and we launch when you are happy with every detail.",
  },
  {
    number: "04",
    title: "Handoff and Support",
    description:
      "You own everything. We hand over all files, credentials, and documentation. Post-launch support is included so you are never left hanging.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-light py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-accent">
            Our Process
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark">
            From Audit to Launch in Four Steps
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            No mystery. No runaround. Here is exactly how we work with every
            client.
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Gradient timeline line */}
          <div
            className="absolute left-7 top-7 bottom-7 w-0.5 hidden sm:block"
            style={{
              background:
                "linear-gradient(to bottom, rgba(20,184,166,0.2), rgba(139,92,246,0.2))",
            }}
          />

          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-6">
                <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#CCFBF1] bg-white">
                  <span className="font-heading text-xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-lg font-semibold text-dark">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
