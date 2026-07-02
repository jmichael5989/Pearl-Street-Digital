import ContactForm from "@/components/forms/ContactForm";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <p className="kicker appear">Get in touch</p>
          <h2 className="appear">Two ways to reach us.</h2>
          <p className="contact-lede appear">
            Tell us about your business in the message, or reach Jon directly.
            You hear back within one business day.
          </p>
          <div className="appear">
            <div className="next-step">
              <span className="next-num">i.</span>
              <p>We review your message within one business day.</p>
            </div>
            <div className="next-step">
              <span className="next-num">ii.</span>
              <p>Jon calls or emails back with a tailored read on what we would do.</p>
            </div>
            <div className="next-step">
              <span className="next-num">iii.</span>
              <p>You decide whether we fit. No pressure either way.</p>
            </div>
          </div>
          <div className="contact-direct appear">
            <span>
              <a href="tel:+12103057372">(210) 305-7372</a>
            </span>
            <span>
              <a href="mailto:info@rankpointmedia.com">info@rankpointmedia.com</a>
            </span>
          </div>
        </div>
        <ContactForm theme="threeColor" />
      </div>
    </section>
  );
}
