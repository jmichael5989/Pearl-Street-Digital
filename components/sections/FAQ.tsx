"use client";

import { useState } from "react";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 text-gray transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

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
    question: "Do you offer bilingual marketing?",
    answer:
      "Yes. We offer bilingual website content, ad copy, and social media in both English and Spanish so you can reach a broader local audience.",
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
    <section id="faq" className="bg-gray-bg py-24 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            FAQ
          </span>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            Common Questions, Straight Answers
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            No jargon, no runaround. Here is what business owners ask us
            most.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-dark">
                    {faq.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-base text-gray leading-relaxed">
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
