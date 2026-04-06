function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
    </svg>
  );
}

const testimonials = [
  {
    quote:
      "Rank Point Media completely transformed our online presence. We went from zero leads to getting 3-4 calls a week from Google alone. Best investment we made all year.",
    name: "Maria Gonzalez",
    business: "Gonzalez Plumbing, San Antonio",
  },
  {
    quote:
      "They built our website in two weeks and it actually looks like us -- not some cookie-cutter template. Our regulars keep telling us how professional it looks.",
    name: "James Chen",
    business: "Golden Wok Kitchen, Stone Oak",
  },
  {
    quote:
      "What sold me was the honesty. No pushy upsells, no confusing jargon. Just a clean website that works and a team that answers the phone when I call.",
    name: "Carlos Rivera",
    business: "Rivera Family Dental, Helotes",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-bg py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            What Our Clients Say
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            Real feedback from business owners who chose Rank Point Media.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="group rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)]"
            >
              <div className="flex gap-0.5 mb-4">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <p className="italic text-base text-gray leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6">
                <p className="font-heading font-bold text-dark">{t.name}</p>
                <p className="text-sm text-[#9CA3AF] mt-0.5">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
