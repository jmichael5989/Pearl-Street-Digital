"use client";

import { useState } from "react";
import type { ServiceData } from "@/lib/services-data";

/**
 * Service detail FAQ section — three-color port (phase A).
 * Mirrors ServicesFaq.tsx accordion markup with service-specific FAQs.
 * Retains FAQPage JSON-LD schema script and id="faq" anchor.
 * Section 05 in the detail-page rhythm.
 */
export default function ServiceFAQ({ service }: { service: ServiceData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

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
    <section id="faq" className="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">05</span>&nbsp;/&nbsp;Questions
        </p>
        <h2 className="appear">Common questions about {service.title}.</h2>
        <div className="faq-list appear">
          {service.faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`faq-item${isOpen ? " open" : ""}`}>
                <button
                  className="faq-q"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  {faq.question}
                  <span className="faq-sign" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    <p>{faq.answer}</p>
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
