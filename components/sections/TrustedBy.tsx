const companies = [
  "Gonzalez Plumbing",
  "Golden Wok Kitchen",
  "Rivera Family Dental",
  "SA Auto Experts",
  "Leon Springs Realty",
];

export default function TrustedBy() {
  return (
    <section className="bg-[#F8FAFC] py-10 overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.12em] text-gray mb-6">
          Trusted by local businesses
        </p>

        {/* Desktop: static row */}
        <div className="hidden sm:flex items-center justify-center gap-12">
          {companies.map((name) => (
            <span
              key={name}
              className="font-heading text-sm font-semibold text-gray select-none"
            >
              {name}
            </span>
          ))}
        </div>

        {/* Mobile: scrolling marquee */}
        <div className="sm:hidden relative">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...companies, ...companies].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-heading text-sm font-semibold text-gray select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
