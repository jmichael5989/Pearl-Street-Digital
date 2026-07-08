# Lessons

Running log of mistakes + the rule that prevents each recurrence.

## Route-segment layouts render shared chrome — check them when porting a page

**Mistake (phase-3 /services port, 2026-07-07):** rewrote `app/services/page.tsx`
to render the three-color `ThreeColorFooter`, but `app/services/layout.tsx` still
rendered the navy `<Footer />` for every `/services` route. Result: the overview
double-stacked two footers (three-color + navy), and the 8 `/services/[slug]`
detail pages showed only the navy footer. The user caught it, not my verification.

**Why it slipped:** my phase-3 verification only checked that the three-color
footer badge was *present* — it didn't check that the navy footer was *absent*.
A "present" check passes even when a second wrong footer is stacked below.

**Rules:**
- Before porting a page's footer/header/chrome, `Glob app/<segment>/**/layout.tsx`
  (and the root `app/layout.tsx`) and read any layout in that route segment —
  App Router layouts render shared chrome around every child page.
- When verifying a swap (A -> B), assert BOTH: B is present AND A is absent.
  Count the old component's unique marker and require 0 (e.g. the navy CTA's
  em-dash copy "no script — just" vs the three-color comma "no script, just").
- Centralize shared chrome in the segment layout, not per-page, so a port
  touches one file and can't half-apply.

## grep -F silently fails on Next's single-line HTML; use grep -E

The server-rendered HTML is one 80KB+ line with no terminator. In this Git-Bash
environment `grep -F` (fixed-string) returns 0 matches on it even when the string
is present, and `grep -c` counts *lines* (always 1). Use `grep -oE '<regex>' | wc -l`
for reliable counts when curling live/prod HTML. Also remember the RSC flight
payload duplicates rendered text, so DOM counts roughly double.

## `.appear` scroll-reveal: mount ScrollReveal where it REMOUNTS on navigation

**Mistake (phase-A service detail pages, 2026-07-07):** the ported detail pages
used `.appear` (opacity:0 until `ScrollReveal` adds `.in`), and `ScrollReveal` was
mounted in `app/services/layout.tsx`. That layout PERSISTS across client-side
navigation within `/services`, so `ScrollReveal` scanned once on mount and never
re-observed a newly-navigated page's `.appear` elements. Clicking "Read more"
(overview→detail, detail→detail) landed on a page whose content stayed at
opacity:0 — a **blank white page**. Direct URL loads worked (fresh mount), which
is exactly why curl + fresh-load checks passed and I shipped it. The user caught it.

**Fix:** `components/home/ScrollRevealOnRoute.tsx` renders `<ScrollReveal key={pathname}>`
so a route change forces a remount → the effect re-runs → re-observes. Use that
(not bare `<ScrollReveal/>`) in any PERSISTENT layout. Page-level `<ScrollReveal/>`
is fine because route-segment pages already remount on nav.

**Rules:**
- Any `.appear`/IntersectionObserver reveal must be re-triggered on SPA nav. If
  it lives in a persistent layout, key it by `usePathname()`; otherwise mount it
  in the page. (A one-shot `useEffect(...,[])` in a persistent layout is the trap.
  Note: adding `usePathname()` but forgetting to put `pathname` in the dep array
  is a silent no-op — I did exactly that first.)
- **Client-reveal bugs are invisible to curl.** Server HTML ships `.appear` at
  opacity:0 by design, so `curl | grep 'svc-hero'` says "present" while the live
  page renders blank. Verify reveals in a browser, exercising the ACTUAL nav path
  (click "Read more"), not just a direct load.
- **Headless preview gotchas when testing reveals:** `window.innerHeight` can read
  0 (no layout) → resize with explicit `preview_resize {width,height}`; and the
  IntersectionObserver does NOT fire its initial callback without a paint —
  trigger it with `window.scrollTo(0,400); scrollTo(0,0)` before asserting `.in`.
