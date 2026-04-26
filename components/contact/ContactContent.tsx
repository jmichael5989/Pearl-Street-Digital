import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/icons/ContactIcons";
import ContactForm from "@/components/forms/ContactForm";

const steps = [
  {
    number: "1",
    text: "We review your goals within 24 hours",
  },
  {
    number: "2",
    text: "A strategist calls with tailored recommendations",
  },
  {
    number: "3",
    text: "You only move forward if it's the right fit",
  },
];

export default function ContactContent() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column — What Happens Next (45%) */}
          <div className="lg:col-span-5">
            <h2
              className="font-heading font-bold text-dark"
              style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}
            >
              What Happens Next
            </h2>
            <div className="mt-8 space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-light-surface border border-icon-service-border">
                    <span className="font-heading text-lg font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <p className="pt-2 text-text leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-10 space-y-4">
              <a
                href="tel:+12105551234"
                className="flex items-center gap-4 text-text hover:text-primary transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-light-surface border border-border">
                  <PhoneIcon />
                </div>
                <span className="text-sm font-medium">(210) 555-1234</span>
              </a>
              <a
                href="mailto:info@rankpointmedia.com"
                className="flex items-center gap-4 text-text hover:text-primary transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-light-surface border border-border">
                  <MailIcon />
                </div>
                <span className="text-sm font-medium">
                  info@rankpointmedia.com
                </span>
              </a>
              <div className="flex items-center gap-4 text-text">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-light-surface border border-border">
                  <MapPinIcon />
                </div>
                <span className="text-sm font-medium">
                  San Antonio, TX (Leon Springs area)
                </span>
              </div>
            </div>

            {/* Trust element */}
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-light-surface px-5 py-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-primary"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <p className="text-sm text-gray">
                We respond to every inquiry within one business day.
              </p>
            </div>
          </div>

          {/* Right Column — Form (55%) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(20,33,61,0.08)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
