"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Sparkles,
  Star,
  TrendingUp,
  MapPin,
  MessageSquare,
  Heart,
  Play,
  MousePointerClick,
  Code2,
} from "lucide-react";

export type MockupVariant =
  | "website"
  | "seo"
  | "ppc"
  | "social"
  | "ai"
  | "reputation"
  | "generic";

const cardBase =
  "absolute rounded-2xl bg-white/5 backdrop-blur-md border border-white/10";

const cardShadow = "0 25px 50px -12px rgba(20,184,166,0.25)";

function CardWrap({
  children,
  delay,
  className,
  rotate,
}: {
  children: React.ReactNode;
  delay: number;
  className: string;
  rotate: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className={`${cardBase} ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, boxShadow: cardShadow }}
    >
      {children}
    </motion.div>
  );
}

function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[11px] uppercase tracking-widest text-white/60 font-mono">
      {children}
    </span>
  );
}

function LighthouseRing({ value, label }: { value: number; label: string }) {
  const c = 2 * Math.PI * 20;
  const offset = c - (value / 100) * c;
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-14 h-14">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" stroke="rgba(255,255,255,0.1)" strokeWidth="3" fill="none" />
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="#14B8A6"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm">
          {value}
        </span>
      </div>
      <span className="mt-2 text-[10px] uppercase tracking-widest text-white/60 font-mono">
        {label}
      </span>
    </div>
  );
}

function WebsiteMockups() {
  return (
    <>
      {/* Lighthouse card (bottom-left, -8°) */}
      <CardWrap delay={0.2} rotate={-8} className="bottom-20 -left-8 w-72 p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-brand-teal" />
          <MonoLabel>Lighthouse</MonoLabel>
        </div>
        <div className="flex items-center justify-around pt-2">
          <LighthouseRing value={98} label="Perf" />
          <LighthouseRing value={100} label="SEO" />
          <LighthouseRing value={97} label="A11y" />
        </div>
      </CardWrap>

      {/* Browser screenshot (top-right, +4°) */}
      <CardWrap
        delay={0.4}
        rotate={4}
        className="top-0 right-0 w-96 overflow-hidden"
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <div className="ml-3 flex-1 bg-white/5 rounded-md px-3 py-1 text-[11px] text-white/60 font-mono">
            moderndaypestcontrolsa.com
          </div>
        </div>
        <div className="relative h-48 bg-white">
          <Image
            src="/images/mockups/moderndaypestcontrol.webp"
            alt="Modern Day Pest Control San Antonio — website designed by Rank Point Media"
            fill
            sizes="384px"
            className="object-cover object-top"
            priority
          />
        </div>
      </CardWrap>

      {/* Form submitted toast (bottom-right, +6°) */}
      <CardWrap delay={0.6} rotate={6} className="bottom-2 right-4 w-64 p-4">
        <div className="flex items-start gap-3">
          <div className="shrink-0 w-9 h-9 rounded-full bg-brand-teal/20 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-brand-teal" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">Form submitted</p>
            <p className="text-white/60 text-xs mt-0.5">New lead from contact form</p>
          </div>
        </div>
      </CardWrap>
    </>
  );
}

function SeoMockups() {
  return (
    <>
      {/* Google SERP card (top-right, +3°) */}
      <CardWrap delay={0.2} rotate={3} className="top-0 right-0 w-96 p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-brand-teal" />
          <MonoLabel>Google SERP</MonoLabel>
        </div>
        <div className="space-y-2">
          <p className="text-[11px] text-brand-teal/80 font-mono">
            moderndaypestcontrolsa.com
          </p>
          <p className="text-white text-sm font-semibold leading-snug">
            Pest Control San Antonio | Modern Day Pest Control
          </p>
          <p className="text-white/60 text-xs leading-relaxed">
            Trusted San Antonio pest control with same-day service. 4.9 stars,
            500+ reviews. Family-owned since 2018.
          </p>
        </div>
      </CardWrap>

      {/* Map pack card (bottom-left, -7°) */}
      <CardWrap delay={0.4} rotate={-7} className="bottom-16 -left-6 w-72 p-5">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="w-3.5 h-3.5 text-brand-teal" />
          <MonoLabel>Map pack</MonoLabel>
        </div>
        <div className="space-y-2.5">
          {[
            { name: "Modern Day Pest Control", rating: "4.9" },
            { name: "Alamo Pest Solutions", rating: "4.7" },
            { name: "Hill Country Exterminators", rating: "4.6" },
          ].map((biz, i) => (
            <div key={biz.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[11px] font-mono text-brand-teal w-3">
                  {i + 1}
                </span>
                <span className="text-white text-xs font-medium truncate">
                  {biz.name}
                </span>
              </div>
              <span className="text-white/60 text-xs">{biz.rating}★</span>
            </div>
          ))}
        </div>
      </CardWrap>

      {/* Traffic stat (bottom-right, +5°) */}
      <CardWrap delay={0.6} rotate={5} className="bottom-0 right-2 w-56 p-4">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-3.5 h-3.5 text-brand-teal" />
          <MonoLabel>Organic traffic</MonoLabel>
        </div>
        <p className="text-white text-2xl font-heading font-semibold">
          +127%
        </p>
        <p className="text-white/60 text-xs mt-1">past 6 months</p>
      </CardWrap>
    </>
  );
}

function PpcMockups() {
  return (
    <>
      {/* Ad preview card (top-right, +4°) */}
      <CardWrap delay={0.2} rotate={4} className="top-0 right-0 w-96 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 border border-brand-teal/30 rounded px-1.5 py-0.5">
            Ad
          </span>
          <MonoLabel>Google Ads</MonoLabel>
        </div>
        <p className="text-[11px] text-brand-teal/80 font-mono mb-1">
          rankpointmedia.com/web-design
        </p>
        <p className="text-white text-sm font-semibold leading-snug">
          San Antonio Web Design | $99/mo + Free SEO Audit
        </p>
        <p className="text-white/60 text-xs leading-relaxed mt-1.5">
          Custom-built sites in 2-3 weeks. Hosting, security, updates included.
        </p>
      </CardWrap>

      {/* CPC stat (bottom-left, -8°) */}
      <CardWrap delay={0.4} rotate={-8} className="bottom-16 -left-4 w-56 p-5">
        <div className="flex items-center gap-2 mb-2">
          <MousePointerClick className="w-3.5 h-3.5 text-brand-teal" />
          <MonoLabel>Avg CPC</MonoLabel>
        </div>
        <p className="text-white text-3xl font-heading font-semibold">
          $1.42
        </p>
        <p className="text-white/60 text-xs mt-1">vs $4.10 industry avg</p>
      </CardWrap>

      {/* Funnel card (bottom-right, +6°) */}
      <CardWrap delay={0.6} rotate={6} className="bottom-0 right-2 w-64 p-4">
        <div className="flex items-center gap-2 mb-3">
          <MonoLabel>Conversion funnel</MonoLabel>
        </div>
        <div className="space-y-2">
          {[
            { label: "Impressions", value: "12,400", w: "100%" },
            { label: "Clicks", value: "892", w: "60%" },
            { label: "Leads", value: "47", w: "20%" },
          ].map((row) => (
            <div key={row.label}>
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-white/70">{row.label}</span>
                <span className="text-white font-mono">{row.value}</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-teal rounded-full"
                  style={{ width: row.w }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardWrap>
    </>
  );
}

function SocialMockups() {
  return (
    <>
      {/* Instagram post (top-right, +3°) */}
      <CardWrap delay={0.2} rotate={3} className="top-0 right-0 w-72 overflow-hidden">
        <div className="px-4 py-3 border-b border-white/10 flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-teal to-brand-violet" />
          <div className="flex flex-col">
            <span className="text-white text-xs font-semibold">@your_business</span>
            <span className="text-white/50 text-[10px]">San Antonio, TX</span>
          </div>
        </div>
        <div className="h-44 bg-gradient-to-br from-brand-teal/30 via-brand-dark to-brand-violet/30" />
        <div className="px-4 py-3 flex items-center gap-3">
          <Heart className="w-4 h-4 text-white/80" />
          <MessageSquare className="w-4 h-4 text-white/80" />
          <span className="ml-auto text-[11px] text-white/60 font-mono">
            1,247 likes
          </span>
        </div>
      </CardWrap>

      {/* Engagement metric (bottom-left, -7°) */}
      <CardWrap delay={0.4} rotate={-7} className="bottom-16 -left-4 w-60 p-5">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-3.5 h-3.5 text-brand-teal" />
          <MonoLabel>Reach</MonoLabel>
        </div>
        <p className="text-white text-3xl font-heading font-semibold">
          +3.4K
        </p>
        <p className="text-white/60 text-xs mt-1">12% engagement rate</p>
      </CardWrap>

      {/* Reel thumbnail (bottom-right, +6°) */}
      <CardWrap delay={0.6} rotate={6} className="bottom-0 right-4 w-40 h-56 overflow-hidden">
        <div className="relative w-full h-full bg-gradient-to-br from-brand-violet/40 via-brand-dark to-brand-teal/40">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
          </div>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[10px] text-white font-semibold">REEL</span>
            <span className="text-[10px] text-white/70 font-mono">0:18</span>
          </div>
        </div>
      </CardWrap>
    </>
  );
}

function AiMockups() {
  return (
    <>
      {/* ChatGPT-style answer (top-right, +3°) */}
      <CardWrap delay={0.2} rotate={3} className="top-0 right-0 w-96 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
          <MonoLabel>AI Answer</MonoLabel>
        </div>
        <p className="text-white text-xs leading-relaxed">
          For affordable web design in San Antonio, <span className="text-brand-teal font-semibold">Rank Point Media</span> offers
          custom Next.js sites starting at $99/month with hosting and SEO included.
        </p>
        <div className="flex gap-1.5 mt-3">
          <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70 font-mono">
            [1] rankpointmedia.com
          </span>
        </div>
      </CardWrap>

      {/* Perplexity citation (bottom-left, -7°) */}
      <CardWrap delay={0.4} rotate={-7} className="bottom-16 -left-4 w-72 p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 border border-brand-teal/30 rounded px-1.5 py-0.5">
            Perplexity
          </span>
        </div>
        <p className="text-white text-xs leading-relaxed">
          Top-cited source for &ldquo;San Antonio digital marketing agencies&rdquo;
        </p>
        <div className="mt-3 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-teal" />
          <span className="text-[11px] font-mono text-white/70">
            rankpointmedia.com
          </span>
        </div>
      </CardWrap>

      {/* Schema markup (bottom-right, +6°) */}
      <CardWrap delay={0.6} rotate={6} className="bottom-0 right-2 w-64 p-4 overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <Code2 className="w-3.5 h-3.5 text-brand-teal" />
          <MonoLabel>Schema.org</MonoLabel>
        </div>
        <pre className="text-[10px] font-mono text-white/70 leading-relaxed">
{`{
  "@type": "Service",
  "name": "Web Design",
  "areaServed": "SA"
}`}
        </pre>
      </CardWrap>
    </>
  );
}

function ReputationMockups() {
  return (
    <>
      {/* 5-star review (top-right, +3°) */}
      <CardWrap delay={0.2} rotate={3} className="top-0 right-0 w-96 p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-teal to-brand-violet" />
            <div className="flex flex-col">
              <span className="text-white text-xs font-semibold">Sarah M.</span>
              <span className="text-white/50 text-[10px]">3 days ago</span>
            </div>
          </div>
          <div className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-3 h-3 fill-brand-teal text-brand-teal" />
            ))}
          </div>
        </div>
        <p className="text-white text-xs leading-relaxed">
          &ldquo;Best in San Antonio. Showed up on time, fair price, fixed it
          right the first time. Will use again.&rdquo;
        </p>
      </CardWrap>

      {/* AI-drafted response (bottom-left, -7°) */}
      <CardWrap delay={0.4} rotate={-7} className="bottom-16 -left-4 w-72 p-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
          <MonoLabel>Suggested reply</MonoLabel>
        </div>
        <p className="text-white text-xs leading-relaxed">
          &ldquo;Thank you Sarah! We&apos;re thrilled to hear it. Reviews like
          yours are why we love serving SA.&rdquo;
        </p>
      </CardWrap>

      {/* Reputation score (bottom-right, +6°) */}
      <CardWrap delay={0.6} rotate={6} className="bottom-0 right-2 w-52 p-5">
        <div className="flex items-center gap-2 mb-2">
          <Star className="w-3.5 h-3.5 text-brand-teal" />
          <MonoLabel>Avg rating</MonoLabel>
        </div>
        <p className="text-white text-4xl font-heading font-semibold">
          4.9
        </p>
        <p className="text-white/60 text-xs mt-1">across 312 reviews</p>
      </CardWrap>
    </>
  );
}

function GenericMockups() {
  return (
    <>
      <CardWrap delay={0.2} rotate={-8} className="bottom-20 -left-6 w-64 h-44">
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-brand-teal/40 via-transparent to-brand-violet/30" />
      </CardWrap>
      <CardWrap delay={0.4} rotate={4} className="top-0 right-0 w-80 h-56">
        <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-brand-violet/30 via-transparent to-brand-teal/40" />
      </CardWrap>
      <CardWrap delay={0.6} rotate={6} className="bottom-0 right-4 w-52 h-40">
        <div className="w-full h-full rounded-2xl bg-gradient-to-bl from-brand-teal/30 via-transparent to-brand-violet/40" />
      </CardWrap>
    </>
  );
}

export default function HeroMockups({
  variant = "generic",
}: {
  variant?: MockupVariant;
}) {
  return (
    <div className="relative h-[520px] w-full">
      {variant === "website" && <WebsiteMockups />}
      {variant === "seo" && <SeoMockups />}
      {variant === "ppc" && <PpcMockups />}
      {variant === "social" && <SocialMockups />}
      {variant === "ai" && <AiMockups />}
      {variant === "reputation" && <ReputationMockups />}
      {variant === "generic" && <GenericMockups />}
    </div>
  );
}
