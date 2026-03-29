"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

function PhoneIcon() {
  return (
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon() {
  return (
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const inputClasses =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-gray focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-body";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    setServerError("");
    const result = await submitContactForm(data);
    if (result.success) {
      setSubmitted(true);
    } else {
      setServerError(result.error || "Something went wrong. Please try again.");
    }
  }

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
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-icon-service-border bg-icon-service-bg p-12 text-center">
                <div>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-dark">
                    Message Sent
                  </h3>
                  <p className="mt-2 text-sm text-gray">
                    Thanks for reaching out. We will get back to you within one
                    business day.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-dark"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    className={inputClasses}
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-dark"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className={inputClasses}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-dark"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(210) 555-0000"
                      className={inputClasses}
                      {...register("phone")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-medium text-dark"
                  >
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className={inputClasses}
                    {...register("service")}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="web-design">Web Design and Development</option>
                    <option value="local-seo">Local SEO</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="ppc">PPC / Google Ads</option>
                    <option value="ai-search">AI Search Optimization</option>
                    <option value="reputation">Reputation Management</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-dark"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project or what you need help with"
                    className={`${inputClasses} resize-none`}
                    {...register("message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {serverError && (
                  <p className="text-sm text-red-500">{serverError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl py-3.5 text-center font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60"
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                    boxShadow: "0 4px 14px rgba(139,92,246,0.35)",
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
