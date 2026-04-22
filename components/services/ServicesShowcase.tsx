"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Search,
  Share2,
  Target,
  Sparkles,
  Star,
  Mail,
  Bot,
  Check,
  ChevronRight,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

interface Service {
  id: string;
  name: string;
  teaser: string;
  headline: string;
  description: string;
  benefits: string[];
  startingAt: string;
  icon: LucideIcon;
  href: string;
}

const services: Service[] = [
  {
    id: "website-design",
    name: "Website Design",
    teaser: "Custom-coded sites that load fast and convert",
    headline: "Websites built to convert, not just look good",
    description:
      "High-performance custom sites engineered for speed, SEO, and the one metric that matters -- turning visitors into customers.",
    benefits: [
      "Lighthouse 95+ performance score guaranteed",
      "Mobile-first, fully responsive design",
      "Custom-coded -- no templates, no bloat",
      "Built for Google rankings from day one",
    ],
    startingAt: "$500 one-time",
    icon: Globe,
    href: "/services/website-design",
  },
  {
    id: "local-seo",
    name: "Local SEO",
    teaser: "Rank higher on Google Maps and local search",
    headline: "Get found by customers searching in San Antonio",
    description:
      "Dominate the local pack, Google Maps, and \u201cnear me\u201d searches where your next customer is actively looking for what you offer.",
    benefits: [
      "Google Business Profile optimization",
      "Local citation building and cleanup",
      "On-page SEO with schema markup",
      "Monthly ranking reports and strategy calls",
    ],
    startingAt: "$497 / month",
    icon: Search,
    href: "/services/local-seo",
  },
  {
    id: "social-media",
    name: "Social Media",
    teaser: "Content that builds trust and drives engagement",
    headline: "Social content that actually brings in business",
    description:
      "Strategic content across Instagram, Facebook, and LinkedIn that keeps your brand top-of-mind and turns followers into customers.",
    benefits: [
      "Managed across Instagram, Facebook, and LinkedIn",
      "Custom branded graphics and video",
      "Community management and engagement",
      "Monthly content calendar with your input",
    ],
    startingAt: "$500 / month",
    icon: Share2,
    href: "/services/social-media",
  },
  {
    id: "ppc-google-ads",
    name: "Ad Campaigns",
    teaser: "Targeted ads that generate real phone calls",
    headline: "Paid ads that deliver qualified leads, not vanity clicks",
    description:
      "Google Ads, Meta Ads, and retargeting campaigns built around one objective -- driving phone calls and form fills, not impressions.",
    benefits: [
      "Google Ads and Meta Ads management",
      "Conversion tracking and call attribution",
      "Weekly optimization and budget pacing",
      "Transparent reporting on every dollar",
    ],
    startingAt: "$500 / month + ad spend",
    icon: Target,
    href: "/services/ppc-google-ads",
  },
  {
    id: "reputation-management",
    name: "Brand Management",
    teaser: "Grow your 5-star online reputation",
    headline: "Turn happy customers into your best marketing channel",
    description:
      "Automated review requests, response management, and reputation monitoring across Google, Yelp, and Facebook.",
    benefits: [
      "Automated review request flows",
      "Response drafting for every review",
      "Reputation monitoring across platforms",
      "Monthly review growth reports",
    ],
    startingAt: "$297 / month",
    icon: Star,
    href: "/services/reputation-management",
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    teaser: "The highest ROI channel in marketing",
    headline: "Email campaigns that turn one-time buyers into regulars",
    description:
      "Automated flows, newsletters, and promotional campaigns engineered to drive repeat business at a fraction of ad costs.",
    benefits: [
      "Welcome, nurture, and re-engagement flows",
      "Branded templates and copywriting",
      "List segmentation and targeting",
      "Open, click, and revenue reporting",
    ],
    startingAt: "$397 / month",
    icon: Mail,
    href: "/services/email-marketing",
  },
  {
    id: "ai-search-optimization",
    name: "AI Search Optimization",
    teaser: "Get recommended by ChatGPT and Perplexity",
    headline: "The next frontier of local search visibility",
    description:
      "Position your business to be recommended when customers ask ChatGPT, Perplexity, Gemini, and Google AI Overviews for local services.",
    benefits: [
      "AI-readable content structure and schema",
      "Citation building for AI training sources",
      "Monitoring across ChatGPT, Perplexity, and Gemini",
      "First-mover advantage in your market",
    ],
    startingAt: "$497 / month",
    icon: Sparkles,
    href: "/services/ai-search-optimization",
  },
  {
    id: "custom-ai-solutions",
    name: "Custom AI Solutions",
    teaser: "Automated follow-ups, chatbots, and workflows",
    headline: "Custom AI built around your business",
    description:
      "Automated lead qualification, intelligent follow-up sequences, AI chatbots, and workflow automation purpose-built for your operation.",
    benefits: [
      "Automated lead qualification and routing",
      "AI chatbots trained on your business",
      "Workflow automation across your tools",
      "Ongoing optimization and expansion",
    ],
    startingAt: "$2,000 project minimum",
    icon: Bot,
    href: "/services/custom-ai-solutions",
  },
];

export default function ServicesShowcase() {
  const [activeId, setActiveId] = useState<string>("website-design");
  const active = services.find((s) => s.id === activeId) ?? services[0];
  const ActiveIcon = active.icon;

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <span className="text-sm font-semibold tracking-widest uppercase mb-4 block text-teal-500">
            What We Do
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-slate-900 mb-6">
            Everything Your Business Needs to Win Online
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16">
            One team. One monthly partnership. Every channel covered.
          </p>
        </div>

        {/* Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8">
          {/* Tab list */}
          <div
            role="tablist"
            aria-label="Services"
            className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0"
          >
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  id={`tab-${service.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls="services-showcase-panel"
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                  onPointerEnter={() => setActiveId(service.id)}
                  onFocus={() => setActiveId(service.id)}
                  className={`group flex-shrink-0 lg:flex-shrink lg:w-full flex items-center gap-3 text-left p-4 rounded-lg border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-gradient-to-r from-teal-500 to-violet-500 text-white border-transparent shadow-lg"
                      : "bg-white text-slate-700 border-slate-200 hover:border-teal-400 hover:bg-teal-50/30"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 flex-shrink-0 ${
                      isActive ? "text-white" : "text-teal-500"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-base leading-tight">
                      {service.name}
                    </div>
                    <div
                      className={`hidden lg:block text-sm mt-1 ${
                        isActive ? "text-teal-50" : "text-slate-500"
                      }`}
                    >
                      {service.teaser}
                    </div>
                  </div>
                  <ChevronRight
                    className={`hidden lg:block w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      isActive ? "rotate-90 text-white" : "text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Showcase panel */}
          <div
            id="services-showcase-panel"
            key={active.id}
            role="tabpanel"
            aria-labelledby={`tab-${active.id}`}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-10 lg:p-12 min-h-[480px] lg:min-h-[560px]"
          >
            {/* Decorative blobs */}
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-teal-500 opacity-20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-violet-500 opacity-20 blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-500 to-violet-500 flex items-center justify-center mb-8">
                <ActiveIcon className="w-8 h-8 text-white" />
              </div>

              <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4">
                {active.headline}
              </h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {active.description}
              </p>

              <ul className="space-y-3 mb-auto">
                {active.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-slate-700 mt-8 pt-8 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">
                    Starting at
                  </div>
                  <div className="text-2xl font-bold text-white mt-1">
                    {active.startingAt}
                  </div>
                </div>
              </div>

              <Link
                href={active.href}
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors mt-6 self-start focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
