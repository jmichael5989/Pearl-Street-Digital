"use client";

import { usePathname } from "next/navigation";
import ScrollReveal from "./ScrollReveal";

/**
 * ScrollReveal for use inside a PERSISTENT layout (e.g. app/services/layout.tsx).
 *
 * The plain <ScrollReveal/> scans `.rpm3 .appear` once on mount. A layout does
 * NOT remount on client-side navigation within its segment (overview -> detail,
 * detail -> detail via "Read more"), so a layout-mounted ScrollReveal would never
 * re-observe the newly-navigated page's elements — they'd stay at opacity:0 (a
 * blank white page). Keying ScrollReveal by pathname forces a fresh remount on
 * every route change, so its effect re-runs and re-observes the new page's
 * `.appear` elements. (Pages that mount ScrollReveal themselves don't need this —
 * they already remount on navigation.)
 */
export default function ScrollRevealOnRoute() {
  const pathname = usePathname();
  return <ScrollReveal key={pathname} />;
}
