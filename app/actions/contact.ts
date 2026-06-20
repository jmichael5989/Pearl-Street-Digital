"use server";

import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  // Honeypot: a hidden field humans never fill. If it arrives populated, the
  // submission is a bot and we silently drop it.
  company?: string;
}

// Map the form's service <option> values to readable labels for the email.
const SERVICE_LABELS: Record<string, string> = {
  "web-design": "Website design and development",
  "local-seo": "Local SEO",
  "social-media": "Social media marketing",
  ppc: "Google Ads",
  "ai-search": "AI search optimization",
  reputation: "Brand management",
  other: "Other / not sure",
};

// Where the lead lands, and who it's from. Overridable via env so the
// addresses can change without a code edit. The `from` domain must be
// verified in Resend (see .env.example) or the send will fail.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@rankpointmedia.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Rank Point Media <forms@rankpointmedia.com>";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function submitContactForm(data: ContactFormData) {
  // 1. Bot trap — pretend success so bots don't retry, but send nothing.
  if (data.company && data.company.trim() !== "") {
    return { success: true };
  }

  // 2. Server-side validation (the client validates too, but never trust it).
  if (!data.name || !data.name.trim()) {
    return { success: false, error: "Please provide your name." };
  }
  if (!data.email || !EMAIL_RE.test(data.email)) {
    return { success: false, error: "Please provide a valid email address." };
  }
  if (!data.message || !data.message.trim()) {
    return { success: false, error: "Please include a short message." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Misconfiguration, not the visitor's fault — log loudly, fail gracefully.
    console.error(
      "[contact] RESEND_API_KEY is not set; submission was not emailed.",
    );
    return {
      success: false,
      error: "Something went wrong on our end. Please email us directly.",
    };
  }

  const name = data.name.trim();
  const email = data.email.trim();
  const phone = data.phone?.trim() || "Not provided";
  const serviceLabel = SERVICE_LABELS[data.service] || "Not specified";
  const message = data.message.trim();

  const subject = `New inquiry — ${name} (${serviceLabel})`;

  const text = [
    "New contact form submission from rankpointmedia.com",
    "",
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone}`,
    `Service: ${serviceLabel}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #1B1A17; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; font-size: 18px;">New contact form submission</h2>
      <table style="border-collapse: collapse; font-size: 14px;">
        <tr><td style="padding: 4px 16px 4px 0; color: #6B6660;">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #6B6660;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #6B6660;">Phone</td><td>${escapeHtml(phone)}</td></tr>
        <tr><td style="padding: 4px 16px 4px 0; color: #6B6660;">Service</td><td>${escapeHtml(serviceLabel)}</td></tr>
      </table>
      <p style="margin: 16px 0 4px; color: #6B6660; font-size: 14px;">Message</p>
      <p style="margin: 0; white-space: pre-wrap; font-size: 14px;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email, // hitting Reply goes straight to the prospect
      subject,
      text,
      html,
    });

    if (error) {
      console.error("[contact] Resend send error:", error);
      return {
        success: false,
        error: "Your message couldn't be sent. Please try again or email us directly.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("[contact] Unexpected error sending email:", err);
    return {
      success: false,
      error: "Your message couldn't be sent. Please try again or email us directly.",
    };
  }
}
