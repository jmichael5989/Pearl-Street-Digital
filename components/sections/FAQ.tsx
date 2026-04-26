"use client";

import { useState } from "react";

/**
 * FAQ section. Editorial accordion list matching the locked editorial
 * register; only used on /services so the rebuild is contained.
 *
 * Replaces the prior pre-pivot section (bg-white shell, max-w-3xl
 * container outside the canonical site shell, retired text-primary
 * eyebrow with font-bold, font-bold serif H2 with text-dark, navy-
 * filled rounded-full circular +/− toggle drawing attention to the
 * affordance instead of the answers, and a wrapper accordion that
 * hid the entire FAQ behind a meta-toggle — counter to the read-and-
 * decide use case for a /services-page FAQ).
 *
 * Now: parchment-alternate surface (sits after CustomDevelopmentCallout
 * which is on warm-white), canonical site shell (max-w-[82rem]),
 * numbered editorial eyebrow "05 / Questions", left-aligned serif H2
 * weight 400, hairline-divided question rows with typographic +/−
 * glyph at body weight (no fill, no circle), and no wrapper accordion
 * — the questions are visible by default, individual rows accordion
 * on click.
 */

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects launch in two to three weeks. Starter sites with fewer pages can go live even sooner. We give you a clear timeline before we start so there are no surprises.",
  },
  {
    question: "What is included in the one-time price?",
    answer:
      "Everything you need to go live: custom design, responsive development, basic on-page SEO, contact form setup, and post-launch support. No hidden fees, no recurring charges unless you opt into our hosting add-on.",
  },
  {
    question: "Do I own the website after it is built?",
    answer:
      "Yes, 100 percent. You own all code, content, images, and domain credentials. We hand everything over at launch. No lock-in, no hostage domains, no surprise invoices.",
  },
  {
    question: "Where are you based, and do you work with businesses outside your area?",
    answer:
      "We are based in San Antonio, TX but we work with small businesses across Texas and beyond. If you are looking for a team that understands local marketing, we are a good fit regardless of location.",
  },
  {
    question: "What platform or CMS do you build on?",
    answer:
      "We build with Next.js and modern web standards — fast, secure, and fully customizable. If you need a traditional CMS like WordPress for easy self-editing, we can accommodate that too. We recommend the best tool for your situation.",
  },
  {
    question: "How long before I see SEO results?",
    answer:
      "On-page SEO improvements can start showing traction in four to eight weeks. Competitive keywords in your local market may take three to six months to rank well. We set realistic expectations and focus on steady, measurable gains.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Every plan includes post-launch support (30, 60, or 90 days depending on your tier). During that window we handle edits, fixes, and adjustments at no extra charge. After that, we offer affordable maintenance or you can manage the site yourself.",
  },
];

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
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
          id="faq-heading"
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
          Common questions, straight answers.
        </h2>

        {/* Q&A list — hairline-divided, individual accordion per row */}
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
