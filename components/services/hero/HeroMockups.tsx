"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
      <span className="mt-2 text-[10px] uppercase tracking-widest text-white/60 font-mono-services">
        {label}
      </span>
    </div>
  );
}

export default function HeroMockups() {
  return (
    <div className="relative h-[520px] w-full">
      {/* Card 1 — Lighthouse (bottom-left, -8deg) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-20 -left-8 w-72 p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
        style={{
          transform: "rotate(-8deg)",
          boxShadow: "0 25px 50px -12px rgba(20,184,166,0.25)",
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-brand-teal" />
          <span className="text-[11px] uppercase tracking-widest text-white/60 font-mono-services">
            Lighthouse
          </span>
        </div>
        <div className="flex items-center justify-around pt-2">
          <LighthouseRing value={98} label="Perf" />
          <LighthouseRing value={100} label="SEO" />
          <LighthouseRing value={97} label="A11y" />
        </div>
      </motion.div>

      {/* Card 2 — Browser (middle, +4deg, up-right) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
        className="absolute top-0 right-0 w-96 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
        style={{ transform: "rotate(4deg)" }}
      >
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <div className="ml-3 flex-1 bg-white/5 rounded-md px-3 py-1 text-[11px] text-white/60 font-mono-services">
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
      </motion.div>

      {/* Card 3 — Toast (front, -3deg, bottom-right) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        className="absolute bottom-0 right-4 bg-white rounded-2xl shadow-2xl p-4 pr-5 flex items-center gap-3"
        style={{ transform: "rotate(-3deg)" }}
      >
        <div className="w-9 h-9 rounded-full bg-brand-teal/15 flex items-center justify-center">
          <Check className="w-5 h-5 text-brand-teal" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-sm font-semibold text-brand-text">Form submitted</p>
          <p className="text-xs text-brand-gray">
            We&apos;ll be in touch within 24 hours.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
