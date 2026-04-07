import Link from "next/link";

const serviceLinks = [
  { label: "Web Design", href: "/services/website-design" },
  { label: "Local SEO", href: "/services/local-seo" },
  { label: "Google Ads (PPC)", href: "/services/ppc-google-ads" },
  { label: "Social Media", href: "/services/social-media" },
  { label: "AI Search", href: "/services/ai-search-optimization" },
  { label: "Reputation", href: "/services/reputation-management" },
];

const industryLinks = [
  { label: "Restaurants", href: "/industries/restaurants" },
  { label: "Beauty & Barbers", href: "/industries/beauty" },
  { label: "Auto Repair", href: "/industries/auto" },
  { label: "Home Services", href: "/industries" },
  { label: "Healthcare", href: "/industries" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/contact" },
  { label: "Case Studies", href: "/case-studies" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-[rgba(148,163,184,0.8)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-md">
                <span className="font-heading text-lg font-bold text-white leading-none">
                  R
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-[15px] font-bold tracking-tight text-white">
                  Rank Point
                </span>
                <span className="font-heading text-[15px] font-bold tracking-tight text-primary">
                  Media
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-[280px]">
              AI-powered digital marketing for local small businesses.
              Websites, SEO, and ads that actually drive results.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white mb-4">
              Services
            </h3>
            <ul className="space-y-0">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sm transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white mb-4">
              Industries
            </h3>
            <ul className="space-y-0">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sm transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.12em] text-white mb-4">
              Company
            </h3>
            <ul className="space-y-0">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-2 text-sm transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(148,163,184,0.1)] pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[rgba(148,163,184,0.5)]">
              {currentYear} Rank Point Media. All rights reserved.
            </p>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="uppercase tracking-[0.18em] text-[#475569]">
                Design by:
              </span>
              <span
                className="uppercase tracking-[0.18em] font-semibold bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #94A3B8, #14B8A6)",
                }}
              >
                Rank Point Media
              </span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-[rgba(148,163,184,0.5)]">
            <Link
              href="/privacy"
              className="py-2 transition-colors duration-300 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="py-2 transition-colors duration-300 hover:text-primary"
            >
              Terms of Service
            </Link>
            <span>|</span>
            <Link
              href="/sitemap.xml"
              className="py-2 transition-colors duration-300 hover:text-primary"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
