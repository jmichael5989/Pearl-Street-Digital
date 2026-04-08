import Link from "next/link";
import { serviceIconMap, ArrowRightIcon } from "@/components/icons/ServiceIcons";
import type { ServiceData } from "@/lib/services-data";

export default function ServiceRelated({
  services,
}: {
  services: ServiceData[];
}) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            Related Services
          </span>
          <h2 className="mt-3 font-heading font-bold text-text" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            Explore More Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = serviceIconMap[service.iconName];
            const firstSentence =
              service.tagline.split(/(?<=[.!?])\s/)[0] || service.tagline;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(139,92,246,0.15)]"
              >
                {Icon && (
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-icon-service-bg border border-icon-service-border text-[#7C3AED]">
                    <Icon className="h-6 w-6" />
                  </div>
                )}
                <h3 className="font-heading text-lg font-semibold text-text mb-2">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray mb-4">
                  {firstSentence}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-primary">
                  Learn more
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
