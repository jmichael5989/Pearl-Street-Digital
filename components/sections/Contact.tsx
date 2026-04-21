import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons/ContactIcons";
import HomeContactForm from "@/components/forms/HomeContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column -- contact info */}
          <div>
            <span className="text-base font-bold uppercase tracking-[0.12em] text-primary">
              Contact Us
            </span>
            <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
              Let&apos;s Talk About Your Project
            </h2>
            <p className="mt-4 text-gray max-w-md">
              Fill out the form or reach out directly. We respond to every
              inquiry within one business day.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="tel:+12105551234"
                className="flex items-center gap-4 text-text hover:text-primary transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-icon-service-bg border border-icon-service-border">
                  <PhoneIcon />
                </div>
                <span className="text-sm font-medium">(210) 555-1234</span>
              </a>

              <a
                href="mailto:hello@rankpointmedia.com"
                className="flex items-center gap-4 text-text hover:text-primary transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-icon-service-bg border border-icon-service-border">
                  <MailIcon />
                </div>
                <span className="text-sm font-medium">
                  hello@rankpointmedia.com
                </span>
              </a>

              <div className="flex items-center gap-4 text-text">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-icon-service-bg border border-icon-service-border">
                  <MapPinIcon />
                </div>
                <span className="text-sm font-medium">
                  San Antonio, TX (Leon Springs area)
                </span>
              </div>
            </div>
          </div>

          {/* Right column -- form */}
          <div>
            <HomeContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
