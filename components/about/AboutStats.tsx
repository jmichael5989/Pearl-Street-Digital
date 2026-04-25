const stats = [
  { value: "2026", label: "Founded" },
  { value: "San Antonio", label: "Based In" },
  { value: "Small Business", label: "Our Focus" },
  { value: "You Own It", label: "Our Model" },
];

export default function AboutStats() {
  return (
    <section className="bg-light-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-bold uppercase tracking-[0.12em] text-primary">
            By the Numbers
          </p>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            Rank Point Media at a Glance
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
