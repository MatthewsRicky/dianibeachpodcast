import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Megaphone, Store, Handshake } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EditorialPageHero } from "@/components/ui/EditorialPageHero";
import ContactForm from "@/components/contact/ContactForm";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Advertise With Us | Diani Beach Podcast",
  description:
    "Explore advertising, sponsorship and local business visibility opportunities with Diani Beach Podcast.",
};

const opportunities = [
  {
    icon: Megaphone,
    title: "Episode sponsorship",
    description:
      "Align your brand with conversations, themes and stories that matter to the South Coast community.",
    tone: "bg-seafoam-light text-teal",
  },
  {
    icon: Store,
    title: "Directory visibility",
    description:
      "Give visitors a useful way to discover your business, its services and how to get in touch.",
    tone: "bg-palm text-emerald",
  },
  {
    icon: Handshake,
    title: "Community partnerships",
    description:
      "Explore collaborations around local events, creative projects and community initiatives.",
    tone: "bg-[#FBE5DB] text-coral",
  },
];

export default function AdvertisePage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Work with us"
        title="Your business belongs in the conversation."
        description="Connect your brand with the people, places and ideas shaping life on Kenya's South Coast."
        tone="ocean"
      >
        <Link
          href="/contact?type=general"
          className="inline-flex items-center gap-3 rounded-full bg-coral px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-sunset-pink"
        >
          Start a conversation <ArrowRight size={17} />
        </Link>
      </EditorialPageHero>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
              Ways to collaborate
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ocean sm:text-4xl">
              Be part of the South Coast story.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              We can shape a suitable opportunity around your goals, audience
              and budget. The options below are proposed formats, not a
              published rate card.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {opportunities.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-white p-7"
                >
                  <span className={`inline-flex rounded-xl p-3 ${item.tone}`}>
                    <Icon size={23} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-ocean">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl bg-seafoam-light p-7 sm:p-9">
            <h2 className="text-2xl font-semibold text-ocean">
              Tell us what you're trying to achieve.
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-muted">
              Whether you are launching something new, growing awareness or
              supporting a local initiative, start with a conversation. A proper
              enquiry form and campaign details can be connected later.
            </p>
            <Suspense>
              <ContactForm />
            </Suspense>

            <a
              href="/contact?type=advertising"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-emerald hover:text-teal"
            >
              Send an enquiry <ArrowRight size={16} />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
