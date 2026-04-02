"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "$1.5M+", label: "Ad Spend Managed" },
  { value: "100%", label: "You Own Everything We Build" },
  { value: "0", label: "Long-Term Contracts" },
  { value: "2-3 Weeks", label: "Average Launch Time" },
];

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
    <section ref={ref} className="border-b border-[#F3F4F6] bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center transition-all duration-700"
              style={{
                transitionTimingFunction: "cubic-bezier(.22,1,.36,1)",
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible
                  ? "translateY(0)"
                  : "translateY(24px)",
              }}
            >
              <div className="font-heading text-[2.5rem] font-extrabold text-[#0D9488] leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-[0.8rem] font-medium uppercase tracking-[0.04em] text-gray">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
