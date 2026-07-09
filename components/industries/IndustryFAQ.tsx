"use client";

import { useState } from "react";
import type { IndustryData } from "@/lib/industries-data";

/**
 * Industry detail FAQ accordion — three-color port.
 * UI only: NO FAQPage JSON-LD emitted here (the detail page.tsx already
 * has it inline; emitting a second one would duplicate the schema).
 */
export default function IndustryFAQ({ industry }: { industry: IndustryData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section id="industry-faq" className="faq">
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">04</span>&nbsp;/&nbsp;Questions
        </p>
        <h2 className="appear">Common questions from {industry.title}.</h2>
        <div className="faq-list appear">
          {industry.faqs.map((faq, i) => {
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
