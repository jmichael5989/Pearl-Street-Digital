import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/icons/ContactIcons";
import ContactForm from "@/components/forms/ContactForm";

const contactItems = [
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "(210) 555-1234",
    href: "tel:+12105551234",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: "hello@rankpointmedia.com",
    href: "mailto:hello@rankpointmedia.com",
  },
  {
    icon: MapPinIcon,
    label: "Location",
    value: "San Antonio, TX (Leon Springs area)",
    href: null,
  },
];

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
  { day: "Saturday", hours: "By appointment" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactContent() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="font-heading font-bold text-dark mb-4" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
              Get in Touch
            </h2>
            <p className="text-gray mb-8">
              Whether you need a new website, want to improve your search
              rankings, or are ready to grow your business with AI-powered
              marketing, we&apos;re here to help. Reach out and let&apos;s start
              a conversation.
            </p>

            <div className="space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-icon-service-bg border border-icon-service-border">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray">
                        {item.label}
                      </p>
                      <p className="text-text font-medium">{item.value}</p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className="flex items-center gap-4">
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Business Hours */}
            <h3 className="font-heading text-lg font-semibold text-dark mt-10 mb-4">
              Business Hours
            </h3>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-icon-service-bg border border-icon-service-border">
                <ClockIcon />
              </div>
              <dl className="space-y-1">
                {businessHours.map((entry) => (
                  <div key={entry.day} className="flex gap-2 text-sm">
                    <dt className="font-medium text-text w-36">{entry.day}</dt>
                    <dd className="text-gray">{entry.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8 rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111254.46454384806!2d-98.67059229453716!3d29.571236443498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c58af04d00eaf%3A0x856e13b10a016bc!2sSan%20Antonio%2C%20TX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rank Point Media office location in San Antonio, TX"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
