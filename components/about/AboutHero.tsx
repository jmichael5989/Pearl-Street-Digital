import Image from "next/image";
import Link from "next/link";

function ArrowDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about/team-bg.jpg"
          alt=""
          fill
          className="object-cover object-bottom"
          priority
          quality={70}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.8) 50%, rgba(15,23,42,0.85) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24 w-full">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg font-bold uppercase tracking-[0.12em] text-primary">
            About Us
          </p>
          <h1
            className="mt-3 font-heading font-bold text-white"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Meet the Team Behind Rank Point Media
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[rgba(255,255,255,0.7)] max-w-2xl mx-auto">
            We&apos;re Jon and Stacie -- a husband-and-wife team helping small
            businesses grow with websites that actually work and marketing that
            drives real results. When you work with us, you work directly with
            the people who built this agency.
          </p>

          {/* Navigation links */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="#approach"
              className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-all duration-300 hover:text-white"
            >
              View Our Approach
              <ArrowDownIcon />
            </a>
            <span className="h-5 w-px bg-[rgba(255,255,255,0.3)]" />
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base font-semibold text-primary transition-all duration-300 hover:text-white"
            >
              <ArrowLeftIcon />
              Back to Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
