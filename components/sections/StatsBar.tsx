const stats = [
  { value: "2026", label: "Founded" },
  { value: "100%", label: "You Own Everything" },
  { value: "0", label: "Long-Term Contracts" },
  { value: "2-3 Weeks", label: "Average Launch" },
];

export default function StatsBar() {
  return (
    <section className="border-b border-border-dark bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl font-bold text-text-on-dark leading-none">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.06em] text-text-on-dark-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
