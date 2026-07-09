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
 * Contact page Cal.com embed section. Moved off the homepage 2026-05-17:
 * the homepage Hero CTA now jumps to /contact#talk-to-us, and this
 * section sits beneath ContactContent as the contact page's "one live,
 * embedded, real artifact" per .impeccable.md ("taste the soup"). The
 * widget is the actual booking UI a prospect would see if they clicked
 * a CTA — they can book directly without leaving the page.
 *
 * Composition follows the three-color redesign (rpm3):
 *   - White section background, kicker + serif H2 + body lede + caption
 *     stacked as a single editorial header at the top of the section.
 *   - Cal.com widget renders FULL WIDTH below the header. With horizontal
 *     room, Cal.com's month_view lays calendar + time slots side-by-side
 *     instead of stacking them vertically — reads as a real booking page,
 *     not a sidebar widget.
 *   - No card border around the widget — it brings its own light surface
 *     and renders as a natural visual block on the white section.
 *   - Cal widget brand accent is black (#000) per the three-color palette.
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
  // visitors get a real black button to book directly on cal.com so a
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
      // script + first iframe paint are typically done. Safe on the
      // contact page too: ContactHero sits above the widget,
      // so the observer has plenty of runway before the section enters
      // view.
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
        // Three-color accent is black — matches the rpm3 palette.
        light: { "cal-brand": "#000" },
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
    // primary black button so visitors never give up on the booking flow.
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
      className="consult"
    >
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">02</span> Talk to us
        </p>
        <h2 className="appear">An hour with Jon. Pick a time.</h2>
        <p className="consult-lede appear">
          No slides, no discovery-call script, just the conversation. If
          we&rsquo;re not the right fit for what you&rsquo;re building,
          we&rsquo;ll tell you that too.
        </p>
        <p className="consult-note appear">
          The widget below shows Jon&rsquo;s live calendar. Pick any open slot.
          You&rsquo;ll get a Google Calendar invite with a Google Meet link, no
          separate scheduling email.
        </p>

        <div className="consult-cal appear">
          {!calLoaded && (
            <div
              aria-hidden={showSlowFallback ? undefined : "true"}
              className="absolute inset-0 flex items-center justify-center px-6"
            >
              {showSlowFallback ? (
                <div className="max-w-md text-center">
                  <p
                    style={{
                      fontFamily: "var(--display)",
                      fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)",
                      lineHeight: 1.25,
                      letterSpacing: "-0.01em",
                      fontWeight: 500,
                      margin: "0 0 8px 0",
                      color: "var(--text)",
                    }}
                  >
                    Cal.com is taking a moment.
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--grey)",
                      margin: "0 0 24px 0",
                    }}
                  >
                    Book the same 60-minute consultation directly on cal.com
                    &mdash; opens in a new tab.
                  </p>
                  <a
                    href="https://cal.com/rankpointmedia/consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Book on cal.com
                  </a>
                </div>
              ) : (
                <div className="max-w-md text-center">
                  <p style={{ fontSize: "15px", color: "var(--grey)", marginBottom: "12px" }}>
                    Loading the calendar&hellip;
                  </p>
                  <a
                    href="https://cal.com/rankpointmedia/consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-link"
                  >
                    Trouble loading? Book directly on cal.com &rarr;
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
