import Link from "next/link";

export default function ThreeColorFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Link className="wordmark" href="/" style={{ color: "#fff" }}>
              Rank <span style={{ color: "var(--grey)" }}>Point</span> Media
            </Link>
            <p className="foot-blurb">
              Custom-coded websites and digital marketing for businesses across
              the US. A two-person agency run by Jon and Stacie.
            </p>
          </div>
          <div>
            <h3>Services</h3>
            <ul>
              <li>
                <Link href="/services/website-design">Web design</Link>
              </li>
              <li>
                <Link href="/services/local-seo">SEO</Link>
              </li>
              <li>
                <Link href="/services/ppc-google-ads">Google Ads</Link>
              </li>
              <li>
                <Link href="/services/social-media">Social media</Link>
              </li>
              <li>
                <Link href="/services/ai-search-optimization">AI search</Link>
              </li>
              <li>
                <Link href="/services/reputation-management">Brand management</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/case-studies">Case studies</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <div className="foot-contact">
              <span>
                <a href="tel:+12103057372">(210) 305-7372</a>
              </span>
              <span>
                <a href="mailto:info@rankpointmedia.com">info@rankpointmedia.com</a>
              </span>
              <span>Mon to Fri, 9am to 5pm</span>
            </div>
          </div>
        </div>
        <div className="foot-legal">
          <span>
            2026 Rank Point Media, a DBA of JSL Innovations LLC. All rights
            reserved.
          </span>
          <span>
            <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> ·{" "}
            <a href="/sitemap.xml">Sitemap</a>
          </span>
        </div>
        <p className="foot-badge">
          <span>Design by:</span> <span>Rank Point Media</span>
        </p>
      </div>
    </footer>
  );
}
