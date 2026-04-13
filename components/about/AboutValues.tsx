"use client";

import { useEffect, useRef } from "react";

const values = [
  {
    title: "Transparency First",
    image: "/images/values/transparency.jpg",
    description:
      "No hidden fees, no confusing reports. You get a clear dashboard showing exactly where your money goes and what results it's driving.",
  },
  {
    title: "You Own Everything",
    image: "/images/values/ownership.jpg",
    description:
      "Your website, your content, your accounts. If you ever leave, everything goes with you. No hostage situations.",
  },
  {
    title: "AI-Powered Tools",
    image: "/images/values/ai-tools.jpg",
    description:
      "We use artificial intelligence to write smarter ad copy, analyze competitors faster, and optimize campaigns in real time -- saving you money and getting better results.",
  },
  {
    title: "Speed to Launch",
    image: "/images/values/speed.jpg",
    description:
      "Most agencies take months. We launch starter websites in under two weeks and full builds in four. Your business cannot afford to wait.",
  },
  {
    title: "Local Focus",
    image: "/images/values/local-focus.jpg",
    description:
      "We know local markets inside and out -- the neighborhoods, the competition, and what customers actually search for. That context makes our strategies sharper.",
  },
  {
    title: "No Long-Term Contracts",
    image: "/images/values/no-contracts.jpg",
    description:
      "We earn your business every month. Our clients stay because the results speak for themselves, not because they are locked into a contract.",
  },
];

export default function AboutValues() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTime = () => {
      if (video.duration && video.currentTime >= video.duration - 0.15) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };
    const onEnd = () => { video.currentTime = 0; video.play().catch(() => {}); };
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("ended", onEnd);
    return () => { video.removeEventListener("timeupdate", onTime); video.removeEventListener("ended", onEnd); };
  }, []);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background video with poster fallback */}
      <div
        className="absolute inset-0 z-0 bg-[#0F172A] bg-cover bg-center"
        style={{ backgroundImage: "url(/videos/whyus-bg-poster.jpg)" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          ref={videoRef}
          poster="/videos/whyus-bg-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/videos/whyus-bg.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#93C5FD]">
            Our Approach
          </p>
          <h2 className="mt-3 font-heading font-bold text-white" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            What Sets Us Apart
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">
            We built Rank Point Media around the principles we wish every
            agency followed. Here is what you can expect when you work with us.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl bg-[#0F172A]/60 backdrop-blur-md border border-white/15 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0F172A]/70 hover:shadow-[0_12px_32px_rgba(37,99,235,0.2)]"
            >
              <div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
