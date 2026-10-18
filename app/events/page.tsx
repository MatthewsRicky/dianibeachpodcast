import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EditorialPageHero } from "@/components/ui/EditorialPageHero";

export const metadata: Metadata = {
  title: "What's On | Diani Beach Podcast",
  description:
    "Discover events, gatherings and happenings around Diani and Kenya's South Coast.",
};

export default function EventsPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="What's happening"
        title="Make room for something memorable."
        description="A place to discover local gatherings, music, cultural events, workshops and things happening around the coast."
        tone="sunset"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-shell p-8 text-center sm:p-12">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-coral">
              <CalendarDays size={25} />
            </span>
            <h2 className="mt-6 text-2xl font-semibold text-ocean sm:text-3xl">
              Your next coastal plan starts here.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              The event calendar will be populated with verified dates, venues
              and event details. No dates or events are being advertised as
              confirmed in this prototype.
            </p>
            <Link
              href="/advertise"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white hover:bg-teal"
            >
              Promote an event <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
