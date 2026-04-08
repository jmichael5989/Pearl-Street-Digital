import { CheckCircleIcon } from "@/components/icons/ServiceIcons";
import type { ServiceData } from "@/lib/services-data";

export default function ServiceFeatures({ service }: { service: ServiceData }) {
  return (
    <section className="bg-dark py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            What&apos;s Included
          </span>
          <h2 className="mt-3 font-heading font-bold text-text-on-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            Everything You Get with {service.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(37,99,235,0.15)]"
            >
              <CheckCircleIcon className="h-5 w-5 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
