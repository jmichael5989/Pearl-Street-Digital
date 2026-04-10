import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  {
    title: "Bilingual Campaigns",
    description:
      "English and Spanish content that connects with San Antonio's diverse community -- something most agencies can't offer.",
  },
  {
    title: "Websites in 2-3 Weeks",
    description:
      "No 6-month timelines. We move fast because your business can't wait.",
  },
  {
    title: "Founder-Led Service",
    description:
      "You work directly with the people building your site -- no account managers in between.",
  },
  {
    title: "Flexible, No-Contract Plans",
    description:
      "One-time builds at honest prices. Monthly retainers only if you want ongoing marketing and development.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#F8FAFC] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <ScrollReveal>
            <div className="flex flex-col justify-center h-full">
              <div className="border-l-[3px] border-primary pl-6">
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
              <div className="mt-10 border-t border-border pt-8 pl-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">
                  Meet Your Team
                </span>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/team/jon.png"
                        alt="Jon, Founder and Web Developer"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-dark">Jon</p>
                      <p className="text-sm text-gray">Founder and Web Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white overflow-hidden flex-shrink-0">
                      <Image
                        src="/images/team/stacie.jpg"
                        alt="Stacie, Marketing Lead"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-dark">Stacie</p>
                      <p className="text-sm text-gray">Marketing Lead</p>
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
                  className="rounded-lg bg-white border border-border p-4 shadow-sm"
                >
                  <h3 className="font-heading text-lg font-semibold text-dark">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-base text-gray leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
              <p className="mt-4 text-sm text-gray pl-1">
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
