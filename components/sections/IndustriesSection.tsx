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
    description:
      "HVAC, plumbing, roofing, landscaping — we help SA trade businesses show up when homeowners search for help.",
    href: "/industries",
  },
  {
    icon: <UtensilsIcon />,
    title: "Restaurants & Hospitality",
    description:
      "From Riverwalk spots to neighborhood taquerias, we drive foot traffic and online orders for SA's food scene.",
    href: "/industries/restaurants",
  },
  {
    icon: <BriefcaseIcon />,
    title: "Professional Services",
    description:
      "Law firms, accountants, consultants — build authority and generate qualified leads in the San Antonio market.",
    href: "/industries",
  },
  {
    icon: <HeartIcon />,
    title: "Healthcare & Wellness",
    description:
      "Dentists, chiropractors, med spas — HIPAA-aware marketing that brings new patients through your door.",
    href: "/industries",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-accent">
            Industries We Serve
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark">
            Marketing That Understands Your Industry
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            Every industry has different customers, different search patterns,
            and different conversion triggers. We build strategies that match.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(139,92,246,0.1)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-icon-industry-bg border border-icon-industry-border text-accent">
                {industry.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-dark mb-2">
                {industry.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray mb-4">
                {industry.description}
              </p>
              <a
                href={industry.href}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
              >
                Learn more
                <ArrowRightIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
