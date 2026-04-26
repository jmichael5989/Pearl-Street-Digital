"use client";

import { useState } from "react";
import type { IndustryData } from "@/lib/industries-data";

/**
 * Industry detail page FAQ section. Mirrors the locked
 * sections/FAQ.tsx and services/ServiceFAQ.tsx editorial accordion
 * pattern, parameterized for industry.faqs.
 *
 * Replaces the prior pre-pivot section (bg-white shell, max-w-7xl
 * container, retired text-primary eyebrow with font-bold, font-bold
 * serif H2, ChevronIcon SVG component, rounded-2xl shadow-sm
 * accordion items — same shape that sections/FAQ.tsx had before its
 * rebuild).
 *
 * Surface: parchment to alternate against the warm-white
 * IndustrySolutions above and the navy footer below.
 */
export default function IndustryFAQ({ industry }: { industry: IndustryData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="industry-faq"
      aria-labelledby="industry-faq-heading"
      className="bg-light-surface border-t border-border"
      style={{
        paddingTop: "clamp(72px, 12vh, 144px)",
        paddingBottom: "clamp(72px, 12vh, 144px)",
      }}
    >
      <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
        {/* Eyebrow */}
        <header className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal italic mr-1">
              04
            </span>
            &nbsp;/&nbsp; Questions
          </div>
        </header>

        {/* H2 */}
        <h2
          id="industry-faq-heading"
          className="font-heading text-text text-balance"
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            fontWeight: 400,
            maxWidth: "28ch",
            margin: 0,
          }}
        >
          Common questions from {industry.title}.
        </h2>

        {/* Q&A list — hairline-divided, individual accordion per row */}
        <div
          className="max-w-3xl border-t border-border"
          style={{ marginTop: "clamp(48px, 6vh, 64px)" }}
        >
          {industry.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-baseline justify-between gap-6 py-5 text-left transition-colors duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:text-accent"
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-heading text-text"
                    style={{
                      fontSize: "1.125rem",
                      lineHeight: 1.35,
                      letterSpacing: "-0.005em",
                      fontWeight: 400,
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-body text-xl text-accent"
                    style={{ lineHeight: 1, paddingTop: "0.15rem" }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="pb-5 font-body"
                      style={{
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        color: "var(--color-brand-text)",
                        maxWidth: "65ch",
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
