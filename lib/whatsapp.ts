export function getWhatsAppUrl(message: string): string | null {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!number) {
    return null;
  }

  const cleanNumber = number.replace(/\D/g, "");

  if (!cleanNumber) {
    return null;
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function getContactWhatsAppMessage(enquiryType = "general"): string {
  const labels: Record<string, string> = {
    general: "a general conversation",
    advertising: "an advertising enquiry",
    "business-directory": "a business directory enquiry",
    podcast: "a podcast enquiry",
    events: "an events enquiry",
    partnership: "a partnership enquiry",
    other: "an enquiry",
  };

  return `Hello Diani Beach Podcast, I'd like to discuss ${labels[enquiryType] ?? "an enquiry"}.`;
}
