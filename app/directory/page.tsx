import type { Metadata } from "next";
import { businesses } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { EditorialPageHero } from "@/components/ui/EditorialPageHero";
import { BusinessCard } from "@/components/directory/BusinessCard";

export const metadata: Metadata = {
  title: "Local Directory | Diani Beach Podcast",
  description:
    "Discover local businesses, places to stay, food, services and experiences on Kenya's South Coast.",
};

export default function DirectoryPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Know your neighbourhood"
        title="Meet the people and businesses behind Diani."
        description="A growing guide to places to eat, stay, explore and connect across the South Coast."
        tone="emerald"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-teal">
              Local discoveries
            </p>
            <h2 className="text-3xl font-semibold text-ocean sm:text-4xl">
              Explore the directory
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              The businesses shown in this prototype are illustrative entries.
              Verified listings and contact details will be added with the
              owner's approval.
            </p>
          </div>

          {businesses.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {businesses.map((business) => (
                <BusinessCard key={business.id} business={business} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border bg-shell p-8 text-muted">
              Local listings will appear here soon.
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
