const stats = [
  { value: "2026", label: "Founded" },
  { value: "San Antonio, TX", label: "Based In" },
  { value: "Small Business", label: "Our Focus" },
  { value: "You Own It", label: "Our Model" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            About Us
          </span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark">
            San Antonio Roots. Modern Tools. Honest Work.
          </h2>
          <p className="mt-6 text-gray leading-relaxed">
            Pearl Street Digital is the marketing arm of JSL Innovations LLC,
            founded in San Antonio with one goal: give local small businesses
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
                <div className="text-xs text-gray uppercase tracking-[0.08em] mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
