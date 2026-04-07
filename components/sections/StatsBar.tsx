"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const stats = [
  { value: 2026, suffix: "", label: "Founded" },
  { value: 100, suffix: "%", label: "You Own Everything We Build" },
  { value: 0, suffix: "", label: "Long-Term Contracts" },
  { value: 0, suffix: "", label: "Average Launch Time", display: "2-3 Weeks" },
];

function useCountUp(target: number, trigger: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger || target === 0) {
      if (trigger) setCount(target);
      return;
    }

    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, target, duration]);

  return count;
}

function StatItem({
  stat,
  index,
  visible,
}: {
  stat: (typeof stats)[number];
  index: number;
  visible: boolean;
}) {
  const count = useCountUp(stat.value, visible);
  const displayValue = stat.display || `${count}${stat.suffix}`;

  return (
    <div
      className="text-center transition-all duration-700"
      style={{
        transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
        transitionDelay: `${index * 100}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
      }}
    >
      <div className="font-heading text-[3rem] font-extrabold text-primary leading-none">
        {displayValue}
      </div>
      <div className="mt-2 text-[0.78rem] font-medium uppercase tracking-[0.04em] text-gray">
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-gray-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
