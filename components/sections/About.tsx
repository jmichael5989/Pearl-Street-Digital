import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: "2026", label: "Founded" },
  { value: "San Antonio, TX", label: "Based In" },
  { value: "Small Business", label: "Our Focus" },
  { value: "You Own Everything", label: "Our Model" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
        <div className="max-w-[800px] mx-auto text-center">
          <span className="text-base font-bold uppercase tracking-[0.12em] text-primary">
            About Us
          </span>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            Texas Roots. Modern Tools. Honest Work.
          </h2>
          <p className="mt-6 text-gray leading-relaxed">
            Rank Point Media is a digital marketing agency founded in San
            Antonio with one goal: give local small businesses
            access to the same caliber of digital marketing that big companies
            take for granted. We use AI-powered tools and modern web technology
            to deliver faster, leaner, and more effective results -- without the
            agency markup.
          </p>
          <p className="mt-4 text-gray leading-relaxed">
            Every project is founder-led. You work directly with the person
            building your site, not a rotating cast of account managers. We
            believe in transparent pricing, honest timelines, and handing over
            everything we build. No lock-in, no hostage domains, no surprise
            invoices. Just good work for good people.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading font-bold text-dark text-lg">
                  {stat.value}
                </div>
                <div className="text-[0.78rem] text-gray uppercase tracking-[0.08em] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
