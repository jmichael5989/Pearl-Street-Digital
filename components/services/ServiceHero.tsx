import { serviceIconMap } from "@/components/icons/ServiceIcons";
import type { ServiceData } from "@/lib/services-data";

export default function ServiceHero({ service }: { service: ServiceData }) {
  const Icon = serviceIconMap[service.iconName];

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {Icon && (
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-icon-service-bg border border-icon-service-border text-[#0D9488]">
              <Icon className="h-8 w-8" />
            </div>
          )}
          <h1 className="font-heading font-bold text-dark" style={{ fontSize: "var(--text-h1)", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {service.title} for Local Businesses
          </h1>
          <p className="mt-5 text-lg text-gray leading-relaxed">
            {service.tagline}
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-xl px-8 py-3.5 font-heading font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "#14B8A6",
              boxShadow: "0 4px 14px rgba(20,184,166,0.35)",
            }}
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
