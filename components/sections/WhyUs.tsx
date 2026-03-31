function ZapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

const features = [
  {
    icon: <ZapIcon />,
    title: "Websites in 2-3 Weeks",
    description:
      "No 6-month timelines. We move fast because your business can't wait.",
  },
  {
    icon: <UsersIcon />,
    title: "Founder-Led Service",
    description:
      "You work directly with the people building your site — no account managers in between.",
  },
  {
    icon: <ClockIcon />,
    title: "No Monthly Commitment",
    description:
      "One-time builds at honest prices. Monthly retainers only if you want ongoing marketing and web development updates.",
  },
  {
    icon: <GlobeIcon />,
    title: "Bilingual Campaigns",
    description:
      "English and Spanish content that connects with your community's diverse audience.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-light py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div>
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-accent">
              Why Rank Point Media
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark">
              Built Different. Built for Small Business.
            </h2>
            <p className="mt-5 text-gray leading-relaxed">
              Most agencies sell packages designed for national brands. We build
              strategies for the plumber in Helotes, the restaurant on the
              Riverwalk, and the law firm downtown. Your marketing should work as
              hard as you do — and it should actually make sense for SA.
            </p>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-accent">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray leading-relaxed">
                    {feature.description}
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
