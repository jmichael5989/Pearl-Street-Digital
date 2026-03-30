const stats = [
  { value: "2026", label: "Founded" },
  { value: "San Antonio", label: "Based In" },
  { value: "Small Business", label: "Our Focus" },
  { value: "You Own It", label: "Our Model" },
];

export default function AboutStats() {
  return (
    <section className="bg-dark py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            By the Numbers
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl">
            Pearl Street Digital at a Glance
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-[#94A3B8]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
