import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Tell crawlers not to index any *.vercel.app host. Covers the default
// pearl-street-digital.vercel.app and every per-branch preview URL
// (pearl-street-digital-git-*.vercel.app), which can't be redirected at
// the platform level. Without this, Bing/Google can index preview content
// and compete with rankpointmedia.com in SERPs.
export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const response = NextResponse.next();

  if (host.endsWith(".vercel.app")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
