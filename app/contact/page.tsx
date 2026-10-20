import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EditorialPageHero } from "@/components/ui/EditorialPageHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Diani Beach Podcast",
  description:
    "Contact Diani Beach Podcast about stories, advertising, business listings, events and partnerships along Kenya's South Coast.",
};

export default function ContactPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Let's connect"
        title="Good conversations start here."
        description="Have a story to share, a business to promote or an idea for working together? Get in touch with the Diani Beach Podcast team."
        tone="teal"
      />

      <section className="py-14 sm:py-20">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <aside className="space-y-7">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
                  Reach out
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-ocean">
                  Let's talk about it.
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  We welcome local stories, guest suggestions, advertising
                  enquiries, event information and ideas that celebrate life
                  along the Kenyan coast.
                </p>
              </div>

              <div className="flex gap-4 rounded-2xl border border-border bg-white p-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <Mail size={21} />
                </div>
                <div>
                  <h3 className="font-semibold text-ocean">Send an enquiry</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    Use the form to tell us what you have in mind. We'll respond
                    using the email address you provide.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-border bg-white p-5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald/10 text-emerald">
                  <MessageCircle size={21} />
                </div>
                <div>
                  <h3 className="font-semibold text-ocean">Prefer WhatsApp?</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    You can switch to WhatsApp from the form and send a
                    prefilled message directly.
                  </p>
                </div>
              </div>
            </aside>

            <Suspense
              fallback={
                <div className="rounded-2xl border border-border bg-white p-8 text-sm text-muted">
                  Loading contact form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}
