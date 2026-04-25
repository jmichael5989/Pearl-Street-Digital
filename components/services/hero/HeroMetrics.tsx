export interface HeroMetric {
  value: string;
  label: string;
}

export default function HeroMetrics({ metrics }: { metrics: HeroMetric[] }) {
  return (
    <div className="flex items-end flex-wrap">
      {metrics.map((m, i) => (
        <div
          key={m.label}
          className={`flex flex-col ${i === 0 ? "pr-6" : "px-6"} ${i > 0 ? "border-l border-white/10" : ""}`}
        >
          <span className="font-heading text-4xl text-white">{m.value}</span>
          <span className="mt-1 font-mono text-xs uppercase tracking-widest text-accent-dark">
            {m.label}
          </span>
        </div>
      ))}
    </div>
  );
}
