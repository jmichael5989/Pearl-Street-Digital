"use client";

import { useState } from "react";
import type { IndustryData } from "@/lib/industries-data";

function ChevronIcon({ open, className }: { open: boolean; className?: string }) {
  return (
    <svg
      className={`${className} transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function IndustryFAQ({ industry }: { industry: IndustryData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-base font-bold uppercase tracking-[0.12em] text-primary">
            FAQ
          </span>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            Questions from {industry.title}
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-3">
          {industry.faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-base font-semibold text-dark pr-4">
                  {faq.question}
                </span>
                <ChevronIcon
                  open={openIndex === index}
                  className="shrink-0 text-gray"
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-base leading-relaxed text-gray">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
