"use client";

import { useState } from "react";
import { SERVICE_FAQS } from "@/lib/service-faqs";

/**
 * Services page FAQ accordion — three-color port of the .faq section in
 * public/mocks/hero/services.html. Client component (accordion state).
 * Shared .rpm3 classes (wrap / kicker / appear) plus Services-specific
 * .faq rules in globals.css.
 */
export default function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className="faq">
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">05</span>&nbsp;/&nbsp;Questions
        </p>
        <h2 className="appear">Common questions, straight answers.</h2>
        <div className="faq-list appear">
          {SERVICE_FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`faq-item${isOpen ? " open" : ""}`}>
                <button
                  className="faq-q"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  {faq.q}
                  <span className="faq-sign" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    <p>{faq.a}</p>
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
