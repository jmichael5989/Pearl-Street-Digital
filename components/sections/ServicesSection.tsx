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

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  );
}

function CpuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
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
    title: "Ad Campaigns",
    slug: "ppc-google-ads",
    image: "/images/services/ppc-google-ads.jpg",
    description:
      "Targeted ad campaigns that put your business in front of customers actively searching for your services.",
  },
  {
    icon: <ShieldIcon />,
    title: "AI Search Optimization",
    slug: "ai-search-optimization",
    image: "/images/services/ai-search.jpg",
    description:
      "Get your business recommended by AI assistants and voice search. The next frontier of local visibility.",
  },
  {
    icon: <ShieldIcon />,
    title: "Brand Management",
    slug: "reputation-management",
    image: "/images/services/reputation.jpg",
    description:
      "Monitor, respond to, and grow your online reviews. Build the 5-star reputation your business has earned.",
  },
  {
    icon: <MailIcon />,
    title: "Email Marketing",
    slug: "email-marketing",
    image: "/images/services/email-marketing.jpg",
    description:
      "Email campaigns and automated flows that turn one-time customers into repeat buyers. The highest ROI channel in marketing.",
  },
  {
    icon: <CpuIcon />,
    title: "Custom AI Solutions",
    slug: "custom-ai-solutions",
    image: "/images/services/custom-ai.jpg",
    description:
      "Automated follow-ups, lead qualification, chatbots, and workflow automation. Custom AI built for your specific business.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-base font-bold uppercase tracking-[0.12em] text-primary">
              What We Do
            </span>
            <h2 className="mt-3 font-heading font-bold text-text" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
              Everything Your Business Needs to Win Online
            </h2>
            <p className="mt-4 text-gray max-w-2xl lg:max-w-none mx-auto">
              Running a business is a full-time job -- so is growing one online. We handle the design, ads, and AI-powered search, so you never have to choose between the two.
            </p>
          </div>
        </ScrollReveal>

        {/* Service cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <div className="group aspect-square [perspective:1000px]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front face */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src={service.image}
                      alt={`${service.title} for San Antonio businesses`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)",
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-heading text-sm md:text-base font-semibold text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Back face */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-dark flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[rgba(255,255,255,0.7)] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
