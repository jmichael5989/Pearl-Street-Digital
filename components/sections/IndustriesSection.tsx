import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

function WrenchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function UtensilsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const industries = [
  {
    icon: <WrenchIcon />,
    title: "Home Services",
    image: "/images/industries/home-services.jpg",
    description:
      "HVAC, plumbing, roofing, landscaping — we help SA trade businesses show up when homeowners search for help.",
    href: "/industries",
  },
  {
    icon: <UtensilsIcon />,
    title: "Restaurants & Hospitality",
    image: "/images/industries/restaurants.jpg",
    description:
      "From Riverwalk spots to neighborhood taquerias, we drive foot traffic and online orders for SA's food scene.",
    href: "/industries/restaurants",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Professional Services",
    image: "/images/industries/professional.jpg",
    description:
      "Law firms, accountants, consultants — build authority and generate qualified leads in your local market.",
    href: "/industries",
  },
  {
    icon: <HeartIcon />,
    title: "Healthcare & Wellness",
    image: "/images/industries/healthcare.jpg",
    description:
      "Dentists, chiropractors, med spas — HIPAA-aware marketing that brings new patients through your door.",
    href: "/industries",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
              Industries We Serve
            </span>
            <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
              Marketing That Understands Your Industry
            </h2>
            <p className="mt-4 text-gray max-w-2xl mx-auto">
              Every industry has different customers, different search patterns,
              and different conversion triggers. We build strategies that match.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <ScrollReveal delay={200}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)]"
            >
              {/* Image strip */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(15,23,42,0.3) 0%, rgba(255,255,255,0.4) 60%, #ffffff 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-8 pt-5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-icon-industry-bg border border-icon-industry-border text-primary -mt-12 relative z-10 shadow-sm">
                  {industry.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                  {industry.title}
                </h3>
                <p className="text-base leading-relaxed text-gray mb-4">
                  {industry.description}
                </p>
                <a
                  href={industry.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
                >
                  <span className="sr-only">about {industry.title}</span>
                  Learn more
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
