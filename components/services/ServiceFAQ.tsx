"use client";

import { useState } from "react";
import type { ServiceData } from "@/lib/services-data";

/**
 * Service detail FAQ section. Mirrors the locked sections/FAQ.tsx
 * editorial accordion pattern, parameterized for service.faqs.
 *
 * Replaces the prior pre-pivot section (bg-white shell, max-w-7xl
 * container, retired text-primary eyebrow with font-bold, font-bold
 * serif H2, ChevronIcon SVG component instead of typographic +/− glyph
 * — the same shape that sections/FAQ.tsx had before its rebuild).
 *
 * Section number 05 in the detail-page rhythm. Parchment surface to
 * alternate against the warm-white Process above and the warm-white
 * Related below.
 */
export default function ServiceFAQ({ service }: { service: ServiceData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="service-faq-heading"
      className="bg-light-surface border-t border-border"
      style={{
        paddingTop: "clamp(72px, 12vh, 144px)",
        paddingBottom: "clamp(72px, 12vh, 144px)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
        {/* Eyebrow */}
        <header className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal italic mr-1">
              05
            </span>
            &nbsp;/&nbsp; Questions
          </div>
        </header>

        {/* H2 */}
        <h2
          id="service-faq-heading"
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
          Common questions about {service.title}.
        </h2>

        {/* Q&A list — hairline-divided, individual accordion per row */}
        <div
          className="mt-12 max-w-3xl border-t border-border"
          style={{ marginTop: "clamp(48px, 6vh, 64px)" }}
        >
          {service.faqs.map((faq, i) => {
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
