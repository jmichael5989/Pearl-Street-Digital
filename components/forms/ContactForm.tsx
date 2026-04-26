"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

/**
 * Contact form. Editorial register matching the locked sitewide
 * pattern.
 *
 * Replaces the prior pre-pivot form (rounded-xl bg-white inputs with
 * an `input-glow` utility on focus, font-bold text-dark labels,
 * off-palette text-red-500 required-field markers, retired bg-primary
 * submit button, and a "Get My Free Strategy Session" submit copy
 * that's anti-reference register per .impeccable.md).
 *
 * Now: hairline-border bg-light inputs with a navy focus ring (no
 * colored glow), text-text labels in sans medium, hardcoded muted
 * dark red #8B2A2A for required-field markers (no defined error
 * token in globals.css yet — flagged for follow-up), navy-fill submit
 * button per CLAUDE.md CTA-on-light spec, "Send message" copy.
 *
 * Pricing-transparency compliance: form has no budget field, no
 * timeline-as-qualifier, no "expected investment" select. The
 * Service Interest dropdown is a routing field, not a qualifying
 * gate. Per .impeccable.md Pricing Transparency principle.
 */

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const inputClasses =
  "w-full border border-border bg-light px-4 py-3 text-base text-text placeholder:text-gray transition-colors focus:outline-none focus:border-text font-body";

const labelClasses =
  "mb-2 block font-body text-sm font-medium text-text";

// Hardcoded muted dark red. No defined --color-error token yet;
// when one is added, swap this hex for the token.
const requiredColor = { color: "#8B2A2A" };

function SpinnerIcon() {
  return (
    <svg
      className="-ml-1 mr-2 inline-block h-5 w-5 animate-spin text-light"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export default function ContactForm() {
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

  if (submitted) {
    return (
      <div className="flex h-full items-center justify-center border border-border bg-light-surface p-12 text-center">
        <div>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-border">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3
            className="font-heading text-text"
            style={{
              fontSize: "1.25rem",
              fontWeight: 400,
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Thank you.
          </h3>
          <p
            className="mt-2 font-body"
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              color: "var(--color-brand-text)",
            }}
          >
            We&rsquo;ll be in touch within one business day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name <span style={requiredColor}>*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your full name"
          className={inputClasses}
          autoComplete="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p
            className="mt-1 font-body text-sm"
            style={requiredColor}
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email <span style={requiredColor}>*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className={inputClasses}
            autoComplete="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 font-body text-sm" style={requiredColor}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(210) 555-0000"
            className={inputClasses}
            autoComplete="tel"
            {...register("phone")}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>
          Service interest
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
          <option value="web-design">Website design and development</option>
          <option value="local-seo">Local SEO</option>
          <option value="social-media">Social media marketing</option>
          <option value="ppc">Google Ads</option>
          <option value="ai-search">AI search optimization</option>
          <option value="reputation">Brand management</option>
          <option value="other">Other / not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span style={requiredColor}>*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project or what you need help with."
          className={`${inputClasses} resize-none`}
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="mt-1 font-body text-sm" style={requiredColor}>
            {errors.message.message}
          </p>
        )}
      </div>

      {serverError && (
        <p className="font-body text-sm" style={requiredColor}>
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="block w-full border border-text bg-text py-3.5 text-center font-body text-sm font-medium tracking-[0.01em] text-light transition-[background-color,border-color] duration-[var(--motion-duration-quick)] ease-[var(--motion-ease-out)] hover:bg-primary-dark hover:border-primary-dark disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <SpinnerIcon />
            Sending&hellip;
          </>
        ) : (
          "Send message"
        )}
      </button>

      <p
        className="text-center font-body"
        style={{
          fontSize: "0.75rem",
          color: "var(--color-gray)",
          marginTop: "0.75rem",
        }}
      >
        We reply within one business day.
      </p>
    </form>
  );
}
