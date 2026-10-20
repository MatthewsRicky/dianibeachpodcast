"use server";

import { Resend } from "resend";
import {
  contactSchema,
  type ContactActionState,
} from "@/lib/validations/contact";

const enquiryLabels: Record<string, string> = {
  general: "General conversation",
  advertising: "Advertising",
  "business-directory": "Business directory",
  podcast: "Podcast",
  events: "Events",
  partnership: "Partnership",
  other: "Other",
};

export async function submitContact(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    enquiryType: formData.get("enquiryType"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Please check the fields below and try again.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Contact form configuration is incomplete.");

    return {
      success: false,
      message:
        "The contact service is not configured yet. Please try WhatsApp instead.",
    };
  }

  const resend = new Resend(apiKey);
  const data = parsed.data;
  const enquiryLabel = enquiryLabels[data.enquiryType] ?? "General enquiry";

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `[Diani Beach Podcast] ${data.subject}`,
      text: [
        "New enquiry from the Diani Beach Podcast website",
        "",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not provided"}`,
        `Enquiry type: ${enquiryLabel}`,
        `Subject: ${data.subject}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend contact submission failed:", error);

      return {
        success: false,
        message:
          "We couldn't send your message just now. Please try again or contact us on WhatsApp.",
      };
    }

    return {
      success: true,
      message:
        "Thank you for getting in touch. Your message has been sent successfully.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      success: false,
      message:
        "Something went wrong while sending your message. Please try again or use WhatsApp.",
    };
  }
}
