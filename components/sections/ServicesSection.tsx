import Link from "next/link";
import Image from "next/image";

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

function TargetIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
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
    title: "Local SEO",
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
    icon: <TargetIcon />,
    title: "PPC / Google Ads",
    slug: "ppc-google-ads",
    image: "/images/services/ppc-google-ads.jpg",
    description:
      "Targeted ad campaigns that put your business in front of customers actively searching for your services in your area.",
  },
  {
    icon: <SparkleIcon />,
    title: "AI Search Optimization",
    slug: "ai-search-optimization",
    image: "/images/services/ai-search.jpg",
    description:
      "Get your business recommended by AI assistants and voice search. The next frontier of local visibility is here.",
  },
  {
    icon: <ShieldIcon />,
    title: "Reputation Management",
    slug: "reputation-management",
    image: "/images/services/reputation.jpg",
    description:
      "Monitor, respond to, and grow your online reviews. Build the 5-star reputation your business has earned.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            What We Do
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark">
            Everything Your Business Needs to Win Online
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            From design to ads to AI-powered search, we handle the digital
            marketing so you can focus on running your business.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)]"
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className="object-cover opacity-[0.15] transition-opacity duration-300 group-hover:opacity-[0.25]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-icon-service-bg border border-icon-service-border text-[#0D9488]">
                  {service.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
