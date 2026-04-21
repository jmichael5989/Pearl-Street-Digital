import type { ServiceData } from "@/lib/services-data";

export default function ServiceProcess({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-bold uppercase tracking-[0.12em] text-primary">
            How It Works
          </span>
          <h2 className="mt-3 font-heading font-bold text-text" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            Our {service.title} Process
          </h2>
        </div>

        <div className="relative max-w-2xl mx-auto">
          {/* Gradient timeline line */}
          <div
            className="absolute left-7 top-7 bottom-7 w-0.5 hidden sm:block"
            style={{
              background:
                "linear-gradient(to bottom, rgba(37,99,235,0.2), rgba(37,99,235,0.2))",
            }}
          />

          <div className="space-y-10">
            {service.process.map((step) => (
              <div key={step.number} className="relative flex gap-6">
                <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#E2E8F0] bg-white">
                  <span className="font-heading text-xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-lg font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray leading-relaxed">
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
