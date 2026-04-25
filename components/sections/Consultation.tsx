"use client";

import { useEffect } from "react";

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
 *   - Warm-white section background, navy heading, brass eyebrow with serif
 *     italic section number (option-b.html mock pattern).
 *   - Two-column on desktop (editorial framing left, widget right);
 *     stacks on mobile.
 *   - Hard-edged 1px-border container around the widget — no rounded
 *     corners per the new palette's editorial register.
 *   - Cal widget brand accent is brass (#A07B33) via cssVarsPerTheme so
 *     the booking UI matches the site brand.
 *
 * If the Cal.com event slug changes, update calLink below. Current slug
 * is `/consultation` (the 30-minute event type owner set up 2026-04-23).
 */
export default function Consultation() {
  useEffect(() => {
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
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal!("init", "consultation", { origin: "https://cal.com" });
    window.Cal!.ns.consultation("inline", {
      elementOrSelector: "#cal-consultation-embed",
      calLink: "rankpointmedia/consultation",
      config: { layout: "month_view" },
    });
    window.Cal!.ns.consultation("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
      cssVarsPerTheme: {
        // Brass per Resolved Decisions §4 small-mark-accent rule.
        // Tuned 2026-04-25 from #A07B33 to clear WCAG AA on the widget's
        // light surface — kept in sync with --color-accent in globals.css.
        light: { "cal-brand": "#836021" },
      },
    });
  }, []);

  return (
    <section
      id="talk-to-us"
      aria-label="Book a 30-minute consultation"
      className="bg-light-surface border-t border-border"
    >
      <div
        className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24"
        style={{ paddingBlock: "clamp(72px, 12vh, 144px)" }}
      >
        {/* Editorial section header — italic serif section-num + brass label */}
        <header className="mb-12 lg:mb-16">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal italic mr-1">02</span>
            &nbsp;/&nbsp; Talk to us
          </div>
        </header>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)] lg:gap-16">
          {/* Editorial framing column */}
          <div className="flex flex-col gap-6">
            <h2
              className="font-heading text-text text-balance"
              style={{
                fontSize: "var(--text-h2)",
                lineHeight: 1.1,
                letterSpacing: "-0.015em",
                fontWeight: 400,
              }}
            >
              Thirty minutes with Jon. Pick a time.
            </h2>
            <p
              className="font-body max-w-md leading-[1.58]"
              style={{
                fontSize: "var(--text-body)",
                color: "var(--color-brand-text)",
              }}
            >
              No slides, no discovery-call script &mdash; just the
              conversation. If we&rsquo;re not the right fit for what
              you&rsquo;re building, we&rsquo;ll tell you that too.
            </p>
            <p
              className="font-body max-w-md text-sm italic leading-[1.55] text-gray"
              style={{
                paddingTop: "16px",
                borderTop: "1px solid var(--color-border)",
              }}
            >
              The widget shows Jon Michael&rsquo;s live calendar. Pick any
              open slot. You&rsquo;ll get a Google Calendar invite with a
              Google Meet link &mdash; no separate scheduling email.
            </p>
          </div>

          {/* Live Cal.com inline embed */}
          <div className="min-h-[44rem] border border-border bg-light">
            <div
              id="cal-consultation-embed"
              className="h-full min-h-[44rem] w-full"
              aria-label="Cal.com booking widget"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
