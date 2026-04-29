"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Cal?: CalEmbedAPI;
  }
}

interface CalEmbedAPI {
  (command: string, ...args: unknown[]): void;
  loaded?: boolean;
  ns: Record<string, CalEmbedAPI>;
  q?: unknown[];
}

/**
 * Homepage Cal.com embed section. Replaces the prior StatsBar — the
 * .impeccable.md brief commits the homepage to "one live, embedded, real
 * artifact" (Cal.com reference: "taste the soup"). A 4-tile stats band
 * does not satisfy that. The widget here is the actual booking UI a
 * prospect would see if they clicked a CTA — they can book directly
 * without leaving the page.
 *
 * Composition follows Resolved Decisions §4 (palette) and §1 (typography):
 *   - Parchment section background, eyebrow + serif H2 + body lede + caption
 *     stacked as a single editorial header at the top of the section.
 *   - Cal.com widget renders FULL WIDTH below the header. With horizontal
 *     room, Cal.com's month_view lays calendar + time slots side-by-side
 *     instead of stacking them vertically — reads as a real booking page,
 *     not a sidebar widget. The prior two-column layout (editorial framing
 *     left, widget right ~50% width) constrained Cal.com into its narrow-
 *     container vertical fallback, which read as a kiosk strip.
 *   - No card border around the widget — it brings its own light surface
 *     and renders as a natural visual block on the parchment section.
 *   - Cal widget brand accent is brass (#836021) via cssVarsPerTheme,
 *     darkened from #A07B33 to clear WCAG AA against the widget's light
 *     internal surface.
 *
 * If the Cal.com event slug changes, update calLink below. Current slug
 * is `/consultation` (now a 60-minute event; bumped from the original
 * 30-minute setup 2026-04-26 because 30-min slots were surfacing too
 * many availabilities and undersignaling the time commitment).
 */
const CAL_EMBED_SRC = "https://app.cal.com/embed/embed.js";

export default function Consultation() {
  // Track whether Cal injected its iframe (loaded) and whether we should
  // surface the prominent cal.com fallback CTA (slow). The slow flag
  // flips after 3 seconds if the iframe hasn't appeared — at that point
  // visitors get a real navy button to book directly on cal.com so a
  // sluggish embed never costs a booking. Once the iframe is in the DOM
  // the slow fallback is cleared in favor of the live widget.
  //
  // shouldLoadCal gates the bootstrap behind an IntersectionObserver so
  // the embed script only loads when the section is near the viewport
  // (or the page is opened to #talk-to-us). Cuts wasted requests for
  // visitors who never scroll past the hero, frees the page LCP from
  // competing with embed.js, and reduces the perceived "loading" window
  // by deferring the slow-fallback timer until the section is actually
  // in view.
  const [calLoaded, setCalLoaded] = useState(false);
  const [showSlowFallback, setShowSlowFallback] = useState(false);
  const [shouldLoadCal, setShouldLoadCal] = useState(false);
  const calLoadedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // If Cal already booted in a prior mount (e.g. SPA back-navigation
    // with the script cached on window), skip the observer and let the
    // bootstrap effect run immediately.
    if (window.Cal?.loaded) {
      setShouldLoadCal(true);
      return;
    }
    const target = document.getElementById("cal-consultation-embed");
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoadCal(true);
          observer.disconnect();
        }
      },
      // 600px lead time — by the time the user scrolls into view the
      // script + first iframe paint are typically done. Tuned for the
      // homepage flow where the hero alone is ~1 viewport tall.
      { rootMargin: "600px 0px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadCal) return;
    if (typeof window === "undefined") return;
    if (window.Cal?.loaded) return;

    // Cal.com inline-embed bootstrap. Vendor-supplied IIFE; do not hand-edit.
    (function (C, A, L) {
      const p = function (a: CalEmbedAPI, ar: IArguments) {
        a.q = a.q ?? [];
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        (function () {
          const cal = C.Cal as CalEmbedAPI;
          // eslint-disable-next-line prefer-rest-params
          const ar = arguments as unknown as IArguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q ?? [];
            d.head
              .appendChild(d.createElement("script"))
              .setAttribute("src", A);
            cal.loaded = true;
          }
          if ((ar as unknown as unknown[])[0] === L) {
            const api = function () {
              // eslint-disable-next-line prefer-rest-params
              p(api as unknown as CalEmbedAPI, arguments);
            } as unknown as CalEmbedAPI;
            const namespace = (ar as unknown as unknown[])[1];
            api.q = [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, [
                "initNamespace",
                namespace,
              ] as unknown as IArguments);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        } as unknown as CalEmbedAPI);
    })(window, CAL_EMBED_SRC, "init");

    // Surface the fallback the moment embed.js fails — 404, ad-blocker
    // (uBlock/AdGuard list cal.com), CSP block, DNS failure, etc. The
    // 3s slow-timer below catches "merely slow"; this listener catches
    // "definitively broken" without making the visitor wait.
    const scriptEl = document.querySelector<HTMLScriptElement>(
      `script[src="${CAL_EMBED_SRC}"]`
    );
    const handleScriptError = () => {
      if (!calLoadedRef.current) setShowSlowFallback(true);
    };
    if (scriptEl && !scriptEl.dataset.errorBound) {
      scriptEl.dataset.errorBound = "true";
      scriptEl.addEventListener("error", handleScriptError);
    }

    window.Cal!("init", "consultation", { origin: "https://cal.com" });
    window.Cal!.ns.consultation("inline", {
      elementOrSelector: "#cal-consultation-embed",
      calLink: "rankpointmedia/consultation",
      config: { layout: "month_view" },
    });
    window.Cal!.ns.consultation("ui", {
      // Show Cal's event-details panel (avatar, "60-minute consultation"
      // title, description, duration, Google Meet, timezone). The owner
      // chose to keep this panel even though it pushes the calendar
      // further right than the editorial paragraph above — the description
      // and call metadata add value beyond what the editorial framing
      // covers.
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: {
        // Brass per Resolved Decisions §4 small-mark-accent rule.
        // Tuned 2026-04-25 from #A07B33 to clear WCAG AA on the widget's
        // light surface — kept in sync with --color-accent in globals.css.
        light: { "cal-brand": "#836021" },
      },
    });

    // Detect when Cal injects its iframe so we can clear the loading
    // fallback. MutationObserver beats polling and fires the moment the
    // node appears.
    const target = document.getElementById("cal-consultation-embed");
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (node.nodeName === "IFRAME") {
            calLoadedRef.current = true;
            setCalLoaded(true);
            setShowSlowFallback(false);
            observer.disconnect();
            return;
          }
        }
      }
    });
    if (target) observer.observe(target, { childList: true, subtree: true });

    // Conversion safety net. If the iframe still isn't in the DOM after
    // 3s — slow network, ad-blocker, CSP block, or Cal.com outage —
    // promote the cal.com booking link from a quiet underline to a
    // primary navy button so visitors never give up on the booking flow.
    const slowTimer = window.setTimeout(() => {
      if (!calLoadedRef.current) setShowSlowFallback(true);
    }, 3000);

    return () => {
      observer.disconnect();
      window.clearTimeout(slowTimer);
      scriptEl?.removeEventListener("error", handleScriptError);
    };
  }, [shouldLoadCal]);

  return (
    <section
      id="talk-to-us"
      aria-label="Book a 60-minute consultation"
      className="bg-light border-t border-border"
    >
      <div
        className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24"
        style={{ paddingBlock: "clamp(72px, 12vh, 144px)" }}
      >
        {/* Editorial section header — italic serif section-num + brass label */}
        <header className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal italic mr-1">05</span>
            &nbsp;/&nbsp; Talk to us
          </div>
        </header>

        {/* Editorial framing — full-width header above the widget */}
        <div className="mb-12 flex max-w-3xl flex-col gap-6 lg:mb-16">
          <h2
            className="font-heading text-text text-balance"
            style={{
              fontSize: "var(--text-h2)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              fontWeight: 400,
            }}
          >
            An hour with Jon. Pick a time.
          </h2>
          <p
            className="font-body leading-[1.58]"
            style={{
              fontSize: "var(--text-body)",
              color: "var(--color-brand-text)",
              maxWidth: "58ch",
            }}
          >
            No slides, no discovery-call script &mdash; just the conversation.
            If we&rsquo;re not the right fit for what you&rsquo;re building,
            we&rsquo;ll tell you that too.
          </p>
          <p
            className="font-body text-sm italic leading-[1.55] text-gray"
            style={{
              paddingTop: "16px",
              borderTop: "1px solid var(--color-border)",
              maxWidth: "58ch",
            }}
          >
            The widget below shows Jon&rsquo;s live calendar. Pick any
            open slot. You&rsquo;ll get a Google Calendar invite with a Google
            Meet link &mdash; no separate scheduling email.
          </p>
        </div>

        {/* Live Cal.com inline embed — full section width so calendar and
            time slots lay out side-by-side instead of stacking vertically.
            The fallback below sits behind the embed div; once Cal injects
            its iframe, the iframe's opaque background covers the fallback.
            If the embed script never loads (ad-blocker, network failure,
            CSP block, Cal.com outage), the fallback stays visible and the
            visitor still has a working direct booking link. After 3s
            without an iframe, the fallback escalates from quiet loading
            text to a prominent navy CTA so a sluggish embed doesn't cost
            a booking. */}
        <div className="relative min-h-[40rem] w-full">
          {!calLoaded && (
            <div
              aria-hidden={showSlowFallback ? undefined : "true"}
              className="absolute inset-0 flex items-center justify-center px-6"
            >
              {showSlowFallback ? (
                <div className="max-w-md text-center">
                  <p
                    className="font-heading text-text"
                    style={{
                      fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)",
                      lineHeight: 1.25,
                      letterSpacing: "-0.01em",
                      fontWeight: 400,
                      margin: "0 0 8px 0",
                    }}
                  >
                    Cal.com is taking a moment.
                  </p>
                  <p
                    className="font-body text-sm text-gray"
                    style={{ margin: "0 0 24px 0" }}
                  >
                    Book the same 60-minute consultation directly on cal.com
                    &mdash; opens in a new tab.
                  </p>
                  <a
                    href="https://cal.com/rankpointmedia/consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body inline-flex items-center gap-2.5 border border-text bg-text px-6 py-3.5 text-[0.9375rem] font-medium tracking-[0.01em] text-light transition-[background-color,border-color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-primary-dark hover:border-primary-dark"
                  >
                    Book on cal.com
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              ) : (
                <div className="max-w-md text-center">
                  <p
                    className="font-body text-sm italic text-gray"
                    style={{ marginBottom: "12px" }}
                  >
                    Loading the calendar&hellip;
                  </p>
                  <a
                    href="https://cal.com/rankpointmedia/consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-medium text-accent underline underline-offset-4 hover:text-text"
                  >
                    Trouble loading? Book directly on cal.com{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              )}
            </div>
          )}
          <div
            id="cal-consultation-embed"
            className="relative h-full min-h-[40rem] w-full"
            aria-label="Cal.com booking widget"
          />
        </div>
      </div>
    </section>
  );
}
