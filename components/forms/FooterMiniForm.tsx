"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

function SpinnerIcon() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-primary inline-block"
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

export default function FooterMiniForm() {
  const [email, setEmail] = useState("");
  const [challenge, setChallenge] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSending(true);
    const result = await submitContactForm({
      name: "",
      email,
      phone: "",
      service: "",
      message: challenge || "(Footer mini-form submission)",
    });
    setSending(false);
    if (result.success) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-white">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="font-medium">Thanks! We&apos;ll be in touch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="flex-1 rounded-lg border-2 border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] px-4 py-3 text-base text-white placeholder:text-[rgba(255,255,255,0.5)] focus:outline-none focus:border-white transition-colors"
          autoComplete="email"
        />
        <input
          type="text"
          value={challenge}
          onChange={(e) => setChallenge(e.target.value)}
          placeholder="Biggest marketing challenge?"
          className="flex-1 rounded-lg border-2 border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] px-4 py-3 text-base text-white placeholder:text-[rgba(255,255,255,0.5)] focus:outline-none focus:border-white transition-colors"
        />
        <button
          type="submit"
          disabled={sending}
          className="btn-primary shrink-0 rounded-lg px-6 py-3 font-semibold text-white transition-all duration-200 disabled:opacity-60"
          style={{ background: "linear-gradient(135deg, #8B5CF6, #7C3AED)" }}
        >
          {sending ? <SpinnerIcon /> : "Send"}
        </button>
      </div>
    </form>
  );
}
