"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const inputClasses =
  "input-glow w-full rounded-xl border border-border bg-white px-4 py-3.5 text-base text-text placeholder:text-gray focus:outline-none transition-colors font-body";

function SpinnerIcon() {
  return (
    <svg
      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block"
      viewBox="0 0 24 24"
      fill="none"
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
            Thank You!
          </h3>
          <p className="mt-2 text-sm text-gray">
            We&apos;ll be in touch within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
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
          autoComplete="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
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
            <p className="mt-1 text-sm text-red-500">
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
            autoComplete="tel"
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
          rows={4}
          placeholder="Tell us about your project or what you need help with"
          className={`${inputClasses} resize-none`}
          {...register("message", {
            required: "Message is required",
          })}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">
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
        className="btn-primary w-full rounded-xl py-4 text-center font-semibold text-white disabled:opacity-60"
        style={{
          background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
          boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
        }}
      >
        {isSubmitting ? (
          <>
            <SpinnerIcon />
            Sending...
          </>
        ) : (
          "Get My Free Strategy Session"
        )}
      </button>

      <p className="text-xs text-gray text-center">
        No spam, no obligation. Just a conversation about your business.
      </p>
    </form>
  );
}
