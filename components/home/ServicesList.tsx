import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      className="u-link-arrow"
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M17 7H9M17 7v8" />
    </svg>
  );
}

export default function ServicesList() {
  return (
    <section className="svc" id="services">
      <div className="wrap">
        <p className="kicker appear">Services</p>
        <h2 className="appear">Code meets design.</h2>
        <p className="svc-lede appear">
          We are an independent digital studio crafting premium visual
          identities through strategy, design, and technology.
        </p>

        <div className="svc-row appear">
          <span className="spine spine-outline">01</span>
          <div className="svc-copy">
            <h3>Design & build</h3>
          </div>
          <div>
            <p className="desc">
              Custom-coded sites written for your business, plus the automation
              behind them: lead qualification, follow-ups, and workflow tools.
            </p>
            <div className="svc-links">
              <Link className="u-link" href="/services/website-design">
                Website design
                <ArrowIcon />
              </Link>
              <Link className="u-link" href="/services/custom-ai-solutions">
                Custom AI solutions
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="svc-row appear">
          <span className="spine spine-outline">02</span>
          <div className="svc-copy">
            <h3>Search</h3>
          </div>
          <div>
            <p className="desc">
              Rank on Google Maps, local search, and the AI assistants your
              customers ask next. One discipline, two frontiers.
            </p>
            <div className="svc-links">
              <Link className="u-link" href="/services/local-seo">
                Local SEO
                <ArrowIcon />
              </Link>
              <Link className="u-link" href="/services/ai-search-optimization">
                AI search optimization
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="svc-row appear">
          <span className="spine spine-outline">03</span>
          <div className="svc-copy">
            <h3>Demand</h3>
          </div>
          <div>
            <p className="desc">
              Targeted campaigns in front of customers searching right now, and
              email flows that turn one-time buyers into repeat ones.
            </p>
            <div className="svc-links">
              <Link className="u-link" href="/services/ppc-google-ads">
                Google Ads
                <ArrowIcon />
              </Link>
              <Link className="u-link" href="/services/email-marketing">
                Email marketing
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="svc-row appear">
          <span className="spine spine-outline">04</span>
          <div className="svc-copy">
            <h3>Reputation</h3>
          </div>
          <div>
            <p className="desc">
              Strategic content across the channels that matter, and review
              management that builds the five-star record you earned.
            </p>
            <div className="svc-links">
              <Link className="u-link" href="/services/social-media">
                Social media
                <ArrowIcon />
              </Link>
              <Link className="u-link" href="/services/reputation-management">
                Brand management
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
