"use client";

import { useState } from "react";

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
      "We build with Next.js and modern web standards -- fast, secure, and fully customizable. If you need a traditional CMS like WordPress for easy self-editing, we can accommodate that too. We recommend the best tool for your situation.",
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
  const [sectionOpen, setSectionOpen] = useState(true);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-12 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Single accordion trigger */}
        <button
          type="button"
          onClick={() => {
            setSectionOpen(!sectionOpen);
            if (sectionOpen) setOpenIndex(null);
          }}
          className="flex w-full items-center justify-between py-4 text-left"
          aria-expanded={sectionOpen}
        >
          <div>
            <span className="text-base font-bold uppercase tracking-[0.12em] text-primary block">
              FAQ
            </span>
            <span className="mt-1 font-heading text-xl md:text-2xl font-bold text-dark block">
              Common Questions, Straight Answers
            </span>
          </div>
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white text-2xl font-semibold shadow-[0_4px_12px_rgba(37,99,235,0.35)] transition-transform duration-200 hover:scale-105">
            {sectionOpen ? "\u2212" : "+"}
          </span>
        </button>

        {/* Collapsible Q&A list */}
        <div
          className="grid transition-[grid-template-rows] duration-500 ease-in-out"
          style={{ gridTemplateRows: sectionOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="divide-y divide-border pt-4">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-heading text-sm md:text-base font-semibold text-dark">
                        {faq.question}
                      </span>
                      <span className="shrink-0 text-gray text-lg font-light">
                        {isOpen ? "\u2212" : "+"}
                      </span>
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-4 text-sm text-gray leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
