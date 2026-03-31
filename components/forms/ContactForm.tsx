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
  smsConsent: boolean;
}

const inputClasses =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-gray focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-body";

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
            Message Sent
          </h3>
          <p className="mt-2 text-sm text-gray">
            Thanks for reaching out. We will get back to you within one
            business day.
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

      <div className="flex items-start gap-3">
        <input
          id="smsConsent"
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 rounded border-border text-primary accent-primary focus:ring-2 focus:ring-primary/20"
          {...register("smsConsent")}
        />
        <label
          htmlFor="smsConsent"
          className="text-xs text-gray leading-relaxed"
        >
          I agree to receive occasional text messages from Pearl
          Street Digital at the phone number provided. Message and
          data rates may apply. Reply STOP to opt out at any time.
          Consent is not a condition of purchase. See our Privacy
          Policy for details.
        </label>
      </div>

      {serverError && (
        <p className="text-sm text-red-500">{serverError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-xl py-3.5 text-center font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60"
        style={{
          background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
          boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
        }}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
