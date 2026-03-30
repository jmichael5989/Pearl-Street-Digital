import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons/ContactIcons";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column -- contact info */}
          <div>
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
              Contact Us
            </span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold text-dark">
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
                href="mailto:hello@pearlstreetdigital.com"
                className="flex items-center gap-4 text-text hover:text-primary transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-icon-service-bg border border-icon-service-border">
                  <MailIcon />
                </div>
                <span className="text-sm font-medium">
                  hello@pearlstreetdigital.com
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
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
