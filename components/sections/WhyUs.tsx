import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

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

function CalendarCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  );
}

const features = [
  {
    icon: <GlobeIcon />,
    title: "Bilingual Campaigns",
    description:
      "English and Spanish content that connects with San Antonio's diverse community -- something most agencies can't offer.",
  },
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
      "You work directly with the people building your site -- no account managers in between.",
  },
  {
    icon: <CalendarCheckIcon />,
    title: "Flexible, No-Contract Plans",
    description:
      "One-time builds at honest prices. Monthly retainers only if you want ongoing marketing and development.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-light py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <ScrollReveal>
            <div className="flex flex-col justify-center h-full">
              <div className="border-l-[3px] border-[#14B8A6] pl-6">
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
                  Why Rank Point Media
                </span>
                <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
                  Agency Results. Small Business Prices.
                </h2>
                <p className="mt-4 text-gray leading-relaxed">
                  Most agencies price out the businesses that need them most. We
                  build strategies for the plumber in Helotes, the restaurant on the
                  Riverwalk, and the law firm downtown -- at prices that actually
                  make sense.
                </p>
              </div>

              {/* Founder Profiles */}
              <div className="mt-10 border-t border-[#14B8A6]/20 pt-8 pl-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6] mb-4 block">
                  Meet Your Team
                </span>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#0F172A]/10 overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/team/jon.png"
                        alt="Jon, Founder and Web Developer"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-[#1F2937]">Jon</p>
                      <p className="text-sm text-[#6B7280]">Founder and Web Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#0F172A]/10 overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/team/stacie.jpg"
                        alt="Stacie, Marketing Lead"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-[#1F2937]">Stacie</p>
                      <p className="text-sm text-[#6B7280]">Marketing Lead</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Features */}
          <ScrollReveal delay={200}>
            <div className="space-y-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-lg bg-white/60 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0FDFA] text-[#14B8A6]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-dark">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-base text-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
              <p className="mt-4 text-sm text-[#6B7280] pl-1">
                Every site we build scores 95+ on Google Lighthouse and loads in
                under 2 seconds.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
