"use server";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  // Validate required fields server-side
  if (!data.email) {
    return { success: false, error: "Please provide an email address." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Please provide a valid email address." };
  }

  // TODO: Integrate email service (Resend, SendGrid, etc.)
  // For now, log the submission
  console.log("Contact form submission:", data);

  return { success: true };
}
