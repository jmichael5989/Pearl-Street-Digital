"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/local-matrix/types";

/**
 * Matrix-page FAQ accordion. Mirrors components/sections/FAQ.tsx
 * pattern (hairline-divided rows, typographic +/− glyph in brass,
 * opens one at a time, no wrapper accordion). FAQPage JSON-LD is
 * injected so Google can render rich snippets for the FAQ block.
 */

type LocalFAQProps = {
  eyebrow: string;
  heading: string;
  faqs: FAQ[];
};

export default function LocalFAQ({ eyebrow, heading, faqs }: LocalFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [num, ...labelParts] = eyebrow.split(" / ");
  const label = labelParts.join(" / ");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
      className="bg-light border-t border-border"
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
        <header className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal mr-1">
              {num}
            </span>
            &nbsp;/&nbsp; {label}
          </div>
        </header>
        <h2
          className="font-heading text-text text-balance"
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            fontWeight: 400,
            maxWidth: "24ch",
            margin: 0,
          }}
        >
          {heading}
        </h2>

        <div
          className="mt-12 max-w-3xl border-t border-border"
          style={{ marginTop: "clamp(48px, 6vh, 64px)" }}
        >
          {faqs.map((faq, i) => {
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
