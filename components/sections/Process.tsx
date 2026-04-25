"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Free Website Audit",
    description:
      "We review your current site (or lack of one), your competitors, and your local market. You get a clear picture of where you stand and what to fix first.",
  },
  {
    number: "02",
    title: "Custom Strategy",
    description:
      "Based on the audit, we build a plan tailored to your business -- not a generic template. We pick the right pages, keywords, and tools for your goals.",
  },
  {
    number: "03",
    title: "Build and Launch",
    description:
      "We design and develop your site, usually in 2-3 weeks. You review, we revise, and we launch when you are happy with every detail.",
  },
  {
    number: "04",
    title: "Handoff and Support",
    description:
      "You own everything. We hand over all files, credentials, and documentation. Post-launch support is included so you are never left hanging.",
  },
];

export default function Process() {
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
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="bg-light-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-bold uppercase tracking-[0.12em] text-primary">
            Our Process
          </span>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            From Audit to Launch in Four Steps
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            No mystery. No runaround. Here is exactly how we work with every
            client.
          </p>
        </div>

        <div ref={ref} className="relative max-w-2xl mx-auto">
          {/* Timeline line with draw-in effect */}
          <div
            className="absolute left-7 top-7 bottom-7 w-0.5 hidden sm:block origin-top"
            style={{
              background: "rgba(183,143,62,0.2)",
              transform: visible ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 1.2s cubic-bezier(.22,1,.36,1) 200ms",
            }}
          />

          <div className="space-y-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative flex gap-6"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 600ms ease-out ${i * 150}ms, transform 600ms ease-out ${i * 150}ms`,
                }}
              >
                <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-border bg-white">
                  <span className="font-heading text-xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="font-heading text-lg font-semibold text-dark">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
