"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { caseStudies } from "@/lib/case-studies-data";

/**
 * Homepage hero — "Orbit" entrance.
 *
 * Image cards slide in from the screen edges, resolve into a circular ring,
 * then spin perpetually with occasional card flips. A faithful production port
 * of Codrops "Entrance Animation for Images" **variation 2** (index2.js),
 * github.com/d3adrabbit/EntranceAnimationForImages (MIT, Codrops 2024), adapted
 * to the Rank Point Media brand from the owner's mock at
 * public/mocks/hero/orbit.html. Replaces the prior two-column editorial hero
 * (components/sections/Hero.tsx) per owner decision 2026-06-07.
 *
 * Three deliberate departures from the verbatim demo:
 *   1. LCP safety. The demo reveals the centered headline via a GSAP
 *      `from({opacity:0, filter:"blur(60px)"})` step — which would gate the H1
 *      (the LCP element) behind GSAP load + image preload. We OMIT that step:
 *      the headline is server-rendered and fully visible on first paint. Only
 *      the cards animate. Protects the Lighthouse 95+ performance mandate.
 *   2. GSAP is dynamically imported inside the effect, so it stays out of the
 *      server bundle and off the initial/LCP path; it runs post-hydration.
 *   3. Accessibility + battery. `prefers-reduced-motion: reduce` skips the
 *      entrance and the perpetual loops and drops the cards straight into the
 *      static final ring. An IntersectionObserver pauses the perpetual motion
 *      whenever the hero scrolls out of view (protects INP/battery/TBT).
 *
 * Card images are the real case-study screenshots from lib/case-studies-data.ts
 * (which .impeccable.md explicitly endorses: "Photographs of actual screens of
 * actual client sites"). The orbit is built for 8 cards; there are 4 real
 * projects, so each contributes its thumbnail + hero screenshot. Three of the
 * four currently ship thumb≈hero (see the data file); capturing four more
 * distinct screenshots is the follow-up to make all eight unique.
 */

// Thumbs first, then heroes — so a project's two (currently near-identical)
// crops land on opposite sides of the ring (index i and i+4 sit 180° apart at
// count 8), never adjacent. The orbit is decorative (the scene is aria-hidden),
// so the images carry empty alt text; the real case studies live on
// /case-studies.
const ORBIT_CARDS: string[] = [
  ...caseStudies.map((cs) => cs.thumbnailUrl),
  ...caseStudies.map((cs) => cs.heroImageUrl),
];

const BTN_PRIMARY =
  "font-body inline-flex items-center gap-2.5 border border-text bg-text px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-light transition-[background-color,border-color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-primary-dark hover:border-primary-dark";
const BTN_SECONDARY =
  "font-body inline-flex items-center gap-2.5 border border-text bg-transparent px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-text transition-[background-color,color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-text hover:text-light";

export default function HeroOrbit() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let cancelled = false;
    let mm: { revert: () => void } | undefined;
    let observer: IntersectionObserver | undefined;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled || !rootRef.current) return;
      const el = rootRef.current;

      const scene = el.querySelector<HTMLElement>(".orbit-scene");
      const group = el.querySelector<HTMLElement>(".orbit-group");
      const cards = gsap.utils.toArray<HTMLElement>(el.querySelectorAll(".orbit-card"));
      const image = el.querySelector<HTMLElement>(".orbit-card__img");
      if (!scene || !group || !image || cards.length === 0) return;

      // Decode card images before animating so the entrance never runs against
      // blank cards. Cheap (small thumbnails); failures are non-fatal.
      await Promise.all(
        cards
          .map((card) => card.querySelector<HTMLImageElement>(".orbit-card__img"))
          .filter((img): img is HTMLImageElement => img !== null)
          .map((img) =>
            img.complete ? Promise.resolve() : img.decode().catch(() => undefined),
          ),
      );
      if (cancelled || !rootRef.current) return;

      gsap.set(group, { transformStyle: "preserve-3d" });

      const count = cards.length;

      const matchMedia = gsap.matchMedia();
      mm = matchMedia;
      matchMedia.add(
        { isDesktop: "(min-width: 53em)", isMobile: "(max-width: 53em)" },
        (context) => {
          const conditions = context.conditions as {
            isDesktop: boolean;
            isMobile: boolean;
          };
          const imgW = image.clientWidth;
          const imgH = image.clientHeight;
          // Ring radius — distance from center to each card. Aim for a wide
          // orbit, but cap it so the ring fits the viewport AND clears the
          // fixed navy header at the top, so the top card never slips behind
          // it. The ring stays centered on the viewport, so the same clearance
          // is left at the bottom. Card size is independent (set on
          // .orbit-card__img below); raise `desiredRadius` for a bigger orbit
          // on tall screens.
          const desiredRadius = conditions.isDesktop ? 360 : 210;
          const topClearance = 92; // header height (~80px) + a small gap
          const heightCap = window.innerHeight / 2 - imgH / 2 - topClearance;
          const radius = Math.max(150, Math.min(desiredRadius, heightCap));

          // Final ring arrangement, shared by both paths: every card sits at
          // y = -radius with a pivot (radius + imgH/2) below its center, then
          // rotates by its slice angle to distribute evenly around the circle.
          // The bottom half is point-reflected (scale -1) with a reversed
          // rotation order so the ring reads symmetrically (verbatim from the
          // demo's ring math).
          const ringRotation = (i: number) =>
            i > count / 2 - 1 ? ((count - i - 1) * 360) / count : (i * 360) / count;

          if (prefersReduced) {
            gsap.set(cards, {
              scale: (i: number) => (i > count / 2 - 1 ? -1 : 1),
              transformOrigin: `center ${radius + imgH / 2}px`,
              y: -radius,
              rotation: ringRotation,
              opacity: 0.8,
            });
            gsap.set(scene, { autoAlpha: 1 });
            return () => {};
          }

          const tl = gsap
            .timeline()
            // Entrance — cards fly in from the left/right edges, rotating ±90°,
            // scaling down from 5×, staggered in pairs. (variation 2)
            .from(cards, {
              x: (i: number) =>
                i % 2
                  ? -window.innerWidth / 2 - imgW * 4
                  : window.innerWidth / 2 + imgW * 4,
              rotation: (i: number) => (i % 2 ? -90 : 90),
              delay: (i: number) => Math.floor(i / 2) * 0.1,
              duration: 1,
              opacity: 0.8,
              scale: 5,
              ease: "power4.out",
            })
            .set(cards, { scale: (i: number) => (i > count / 2 - 1 ? -1 : 1) })
            // Lift into a vertical column, then jump all cards to y = -radius
            // and set the orbital pivot.
            .to(cards, {
              y: (i: number) => (i >= Math.floor(count / 2) ? 1 : -1) * radius,
              duration: 0.5,
              ease: "power2.out",
            })
            .set(cards, {
              transformOrigin: `center ${radius + imgH / 2}px`,
              y: -radius,
            })
            // Rotate around the pivot to distribute evenly around the ring.
            .to(cards, {
              rotation: ringRotation,
              opacity: 0.8,
              duration: 1,
              ease: "power2.out",
            })
            // (Demo's blurred-headline reveal intentionally omitted — see header.)
            // Perpetual: flip a random card every 2s.
            .to(cards, {
              repeat: -1,
              duration: 2,
              onRepeat: () => {
                gsap.to(cards[Math.floor(Math.random() * count)], {
                  rotateY: "+=180",
                });
              },
            })
            // Perpetual: rotate the whole ring once every 20s, forever.
            .to(
              group,
              { rotation: 360, duration: 20, repeat: -1, ease: "none" },
              "<-=1.5",
            );

          gsap.set(scene, { autoAlpha: 1 });

          // Pause the perpetual motion while the hero is off-screen.
          observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) tl.play();
              else tl.pause();
            },
            { threshold: 0 },
          );
          observer.observe(el);

          return () => {
            observer?.disconnect();
            observer = undefined;
            tl.kill();
          };
        },
      );
    })();

    return () => {
      cancelled = true;
      observer?.disconnect();
      mm?.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      aria-label="Introducing Rank Point Media"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, var(--color-light) 0%, var(--color-light-surface) 100%)",
      }}
    >
      <style>{`
        .orbit-scene {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1000px;
          visibility: hidden;
        }
        .orbit-group { position: relative; }
        .orbit-card {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .orbit-card__img {
          display: block;
          /* Override Tailwind preflight's img{max-width:100%}: with an
             auto-width absolutely-positioned .orbit-card parent it creates a
             circular size constraint that collapses the image to ~0. */
          max-width: none;
          width: 5em;
          aspect-ratio: 2 / 3;
          object-fit: cover;
          border-radius: 4px;
          border: 1px solid var(--color-border);
          box-shadow: 0 1px 0 rgba(20, 33, 61, 0.08);
        }
        @media screen and (min-width: 53em) {
          .orbit-card__img { width: 6em; }
        }
      `}</style>

      {/* Orbit stage — decorative; hidden from assistive tech. GSAP places and
          animates the cards. Revealed (autoAlpha) only once positioned. */}
      <div className="orbit-scene" aria-hidden="true">
        <div className="orbit-group">
          {ORBIT_CARDS.map((src, i) => (
            <div className="orbit-card" key={`${src}-${i}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="orbit-card__img" src={src} alt="" draggable={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Center scrim — keeps the headline legible over the orbiting cards. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "min(46rem, 92vw)",
          height: "min(36rem, 80vh)",
          background:
            "radial-gradient(ellipse at center, rgba(250,250,246,0.94) 0%, rgba(250,250,246,0.82) 38%, rgba(250,250,246,0) 72%)",
        }}
      />

      {/* Headline — server-rendered, fully visible on first paint (LCP). */}
      <div className="relative z-10 mx-auto max-w-[46rem] px-6 text-center">
        <h1
          className="font-heading text-text text-balance"
          style={{
            fontSize: "clamp(2.6rem, 7vw, 5.4rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            fontWeight: 400,
            margin: 0,
          }}
        >
          Rank Point Media
        </h1>
        <p className="font-body mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          Websites, SEO, Digital Marketing
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link href="/contact#talk-to-us" className={BTN_PRIMARY}>
            Book a consultation
          </Link>
          <Link href="/about" className={BTN_SECONDARY}>
            See how we work
          </Link>
        </div>
      </div>
    </section>
  );
}
