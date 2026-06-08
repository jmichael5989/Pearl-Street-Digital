import type { Namespace } from "./types";

// Map a pathname to its section "namespace" (first-segment based). The engine
// selects a transition by the DESTINATION namespace, mirroring Barba's
// `to: { namespace }`.
export function getNamespace(pathname: string): Namespace {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/case-studies")) return "caseStudies";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/industries")) return "industries";
  if (pathname.startsWith("/areas")) return "areas";
  if (pathname.startsWith("/pricing")) return "pricing";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/privacy") || pathname.startsWith("/terms")) return "legal";
  if (pathname.startsWith("/local")) return "local";
  return "default";
}

// Decide whether a click should be intercepted for an animated transition.
// Returns the in-app destination ("/path?query#hash") or null to let the
// browser/Next handle it natively (modifier-click, new tab, external, tel:,
// download, in-page hash, etc.).
export function getInternalHref(e: MouseEvent): string | null {
  if (e.defaultPrevented) return null;
  if (e.button !== 0) return null;
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return null;

  const target = e.target as Element | null;
  const anchor = target?.closest?.("a");
  if (!anchor) return null;

  const targetAttr = anchor.getAttribute("target");
  if (targetAttr && targetAttr !== "_self") return null;
  if (anchor.hasAttribute("download")) return null;
  const rel = anchor.getAttribute("rel");
  if (rel && rel.split(/\s+/).includes("external")) return null;
  if (!anchor.getAttribute("href")) return null;

  let url: URL;
  try {
    url = new URL(anchor.href, window.location.href);
  } catch {
    return null;
  }
  if (url.origin !== window.location.origin) return null;
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;

  // Same page (hash-only / identical) → let the browser handle it; no transition.
  if (
    url.pathname === window.location.pathname &&
    url.search === window.location.search
  ) {
    return null;
  }

  return url.pathname + url.search + url.hash;
}

// After an enter completes, move keyboard/SR focus to the top of the new page's
// main content (accessibility: SPA navigations otherwise leave focus stranded).
export function focusMain() {
  const main = document.querySelector("main");
  if (!(main instanceof HTMLElement)) return;
  const hadTabIndex = main.hasAttribute("tabindex");
  if (!hadTabIndex) main.setAttribute("tabindex", "-1");
  main.focus({ preventScroll: true });
  if (!hadTabIndex) {
    main.addEventListener("blur", () => main.removeAttribute("tabindex"), {
      once: true,
    });
  }
}
