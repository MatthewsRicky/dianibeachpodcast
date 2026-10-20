"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { submitContact } from "@/app/contact/actions";
import { initialContactState } from "@/lib/validations/contact";
import { getContactWhatsAppMessage, getWhatsAppUrl } from "@/lib/whatsapp";

const enquiryOptions = [
  { value: "general", label: "General conversation" },
  { value: "advertising", label: "Advertising opportunities" },
  { value: "business-directory", label: "Business directory" },
  { value: "podcast", label: "Podcast / guest enquiry" },
  { value: "events", label: "Events" },
  { value: "partnership", label: "Partnerships" },
  { value: "other", label: "Something else" },
];

const fieldClass =
  "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-teal focus:ring-2 focus:ring-teal/15";

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors?.length) return null;

  return (
    <p className="mt-1.5 text-sm text-red-600" role="alert">
      {errors[0]}
    </p>
  );
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const requestedType = searchParams.get("type");

  const initialType = enquiryOptions.some(
    (option) => option.value === requestedType,
  )
    ? requestedType!
    : "general";

  const [state, formAction, pending] = useActionState(
    submitContact,
    initialContactState,
  );

  const whatsappUrl = getWhatsAppUrl(getContactWhatsAppMessage(initialType));

  if (state.success) {
    return (
      <div
        className="rounded-2xl border border-teal/20 bg-white p-8 text-center sm:p-12"
        role="status"
      >
        <CheckCircle2 className="mx-auto text-teal" size={44} />
        <h2 className="mt-5 text-2xl font-semibold text-ocean">
          Message received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
          {state.message}
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
          Get in touch
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-ocean sm:text-3xl">
          Tell us what you have in mind.
        </h2>
        <p className="mt-3 text-sm leading-6 text-muted">
          Whether you have a question, a story idea or a business opportunity,
          we would love to hear from you.
        </p>
      </div>

      <form action={formAction} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-ocean">
              Your name *
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              className={fieldClass}
              placeholder="Your full name"
              aria-invalid={!!state.errors?.name}
              aria-describedby={state.errors?.name ? "name-error" : undefined}
            />
            <div id="name-error">
              <FieldError errors={state.errors?.name} />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-ocean">
              Email address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={254}
              className={fieldClass}
              placeholder="you@example.com"
              aria-invalid={!!state.errors?.email}
            />
            <FieldError errors={state.errors?.email} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-ocean">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={30}
              className={fieldClass}
              placeholder="Optional"
              aria-invalid={!!state.errors?.phone}
            />
            <FieldError errors={state.errors?.phone} />
          </div>

          <div>
            <label
              htmlFor="enquiryType"
              className="text-sm font-medium text-ocean"
            >
              What is this about? *
            </label>
            <select
              key={initialType}
              id="enquiryType"
              name="enquiryType"
              defaultValue={initialType}
              required
              className={fieldClass}
              aria-invalid={!!state.errors?.enquiryType}
            >
              {enquiryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FieldError errors={state.errors?.enquiryType} />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="text-sm font-medium text-ocean">
            Subject *
          </label>
          <input
            id="subject"
            name="subject"
            required
            minLength={3}
            maxLength={150}
            className={fieldClass}
            placeholder="A short description of your enquiry"
            aria-invalid={!!state.errors?.subject}
          />
          <FieldError errors={state.errors?.subject} />
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-ocean">
            Your message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={5000}
            rows={6}
            className={`${fieldClass} resize-y`}
            placeholder="Tell us a little more..."
            aria-invalid={!!state.errors?.message}
          />
          <FieldError errors={state.errors?.message} />
          <p className="mt-2 text-xs text-muted">
            Please do not include sensitive or confidential information.
          </p>
        </div>

        {state.message && !state.success && (
          <p
            className="rounded-xl bg-red-50 p-4 text-sm text-red-700"
            role="alert"
          >
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ocean px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Sending message..." : "Send your message"}
          {!pending && <ArrowRight size={17} />}
        </button>

        <p className="text-xs leading-5 text-muted">
          Fields marked * are required. Your message will be sent to the Diani
          Beach Podcast team.
        </p>
      </form>

      {whatsappUrl && (
        <div className="mt-7 border-t border-border pt-6">
          <p className="text-sm text-muted">Prefer messaging us directly?</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-teal px-5 py-3 text-sm font-semibold text-teal transition hover:bg-teal hover:text-white"
          >
            <MessageCircle size={18} />
            Continue on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
