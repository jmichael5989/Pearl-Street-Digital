import type { ServiceData } from "@/lib/services-data";

export default function ServiceProcess({ service }: { service: ServiceData }) {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            How It Works
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark">
            Our {service.title} Process
          </h2>
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
            {service.process.map((step) => (
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
