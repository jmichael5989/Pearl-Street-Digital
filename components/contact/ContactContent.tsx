import ContactForm from "@/components/forms/ContactForm";

export default function ContactContent({
  numeral: _numeral = "03",
}: {
  numeral?: string;
} = {}) {
  return (
    <section className="touch">
      <div className="wrap">
        <p className="kicker appear">
          <span className="kicker-num">03</span> Get in touch
        </p>
        <h2 className="appear">Two ways to reach us.</h2>
        <p className="touch-lede appear">
          Tell us about your business in the message below, or reach Jon
          directly by{" "}
          <a className="u-link" href="tel:+12103057372">
            phone
          </a>{" "}
          or{" "}
          <a className="u-link" href="mailto:info@rankpointmedia.com">
            email
          </a>
          . You&rsquo;ll hear back within one business day.
        </p>
        <div className="contact-grid">
          {/* LEFT */}
          <div>
            <h3 className="next-head appear">What happens next.</h3>
            <div className="appear">
              <div className="next-step">
                <span className="next-num">i.</span>
                <p>We read your message within one business day.</p>
              </div>
              <div className="next-step">
                <span className="next-num">ii.</span>
                <p>
                  Jon calls or emails with what the work would involve and what
                  it would cost.
                </p>
              </div>
              <div className="next-step">
                <span className="next-num">iii.</span>
                <p>You decide from there.</p>
              </div>
            </div>
            <div className="contact-direct appear">
              <span>
                <a href="tel:+12103057372">(210) 305-7372</a>
              </span>
              <span>
                <a href="mailto:info@rankpointmedia.com">
                  info@rankpointmedia.com
                </a>
              </span>
            </div>
            <div className="trust appear">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p>We respond to every message within one business day.</p>
            </div>
          </div>
          {/* RIGHT */}
          <div className="appear">
            <ContactForm theme="threeColor" />
          </div>
        </div>
      </div>
    </section>
  );
}
