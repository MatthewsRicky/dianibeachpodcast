import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Tag } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EditorialPageHero } from "@/components/ui/EditorialPageHero";

export const metadata: Metadata = {
  title: "Community Classifieds | Diani Beach Podcast",
  description:
    "A community noticeboard for local offers, opportunities and useful finds on the South Coast.",
};

export default function ClassifiedsPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="The community noticeboard"
        title="Good things find their way around."
        description="A place for local offers, items, services and opportunities shared by the South Coast community."
        tone="teal"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-white p-8 text-center sm:p-12">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-seafoam-light text-teal">
              <Tag size={25} />
            </span>
            <h2 className="mt-6 text-2xl font-semibold text-ocean sm:text-3xl">
              The noticeboard is taking shape.
            </h2>
            <p className="mt-4 leading-7 text-muted">
              Community listings will appear here once submissions, moderation
              and contact details are connected. For now, this is a preview of
              the planned section—not a live classified service.
            </p>
            <Link
              href="/advertise"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white hover:bg-teal"
            >
              Ask about a listing <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
