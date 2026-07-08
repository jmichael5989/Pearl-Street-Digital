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
