import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

function GlobeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

const services = [
  {
    icon: <GlobeIcon />,
    title: "Website Design",
    slug: "website-design",
    image: "/images/services/website-design.jpg",
    description:
      "High-performance websites built for speed, SEO, and conversions. Designed to represent your business the way it deserves.",
  },
  {
    icon: <SearchIcon />,
    title: "SEO",
    slug: "local-seo",
    image: "/images/services/local-seo.jpg",
    description:
      "Rank higher on Google Maps and local search results. We optimize your presence so customers find you first.",
  },
  {
    icon: <ShareIcon />,
    title: "Social Media",
    slug: "social-media",
    image: "/images/services/social-media.jpg",
    description:
      "Strategic content and management across Instagram, Facebook, and LinkedIn that builds trust and drives engagement.",
  },
  {
    icon: <ShieldIcon />,
    title: "Brand Management",
    slug: "reputation-management",
    image: "/images/services/reputation.jpg",
    description:
      "Monitor, respond to, and grow your online reviews. Build the 5-star reputation your business has earned.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
              What We Do
            </span>
            <h2 className="mt-3 font-heading font-bold text-text" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
              Everything Your Business Needs to Win Online
            </h2>
            <p className="mt-4 text-gray max-w-2xl lg:max-w-none mx-auto">
              From design to ads to AI-powered search, we handle the digital marketing so you can focus on running your business.
            </p>
          </div>
        </ScrollReveal>

        {/* 2x2 grid on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative block aspect-square overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              >
                {/* Full background image */}
                <Image
                  src={service.image}
                  alt={`${service.title} for San Antonio businesses`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                  loading="lazy"
                />
                {/* Dark gradient overlay from bottom */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)",
                  }}
                />
                {/* Text at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-heading text-sm md:text-base font-semibold text-white leading-tight">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
