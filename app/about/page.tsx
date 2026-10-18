import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Heart, Mic2, Compass } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EditorialPageHero } from "@/components/ui/EditorialPageHero";

export const metadata: Metadata = {
  title: "About | Diani Beach Podcast",
  description:
    "Discover the purpose behind Diani Beach Podcast and its focus on stories from Kenya's South Coast.",
};

export default function AboutPage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Our story"
        title="A place has a thousand stories. Let's hear more of them."
        description="Diani is more than a destination. It is a community of people, ideas, cultures, businesses and experiences worth discovering."
        tone="emerald"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
                Why we're here
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-ocean sm:text-4xl">
                Stories that bring the coast closer.
              </h2>
            </div>
            <div className="space-y-5 leading-8 text-muted">
              <p>
                Diani Beach Podcast is a platform for discovering the people,
                places, conversations and experiences connected to Diani and
                Kenya's South Coast.
              </p>
              <p>
                The vision for this website is to bring podcast content, local
                discovery and community information together in one accessible,
                visually rich experience.
              </p>
              <p>
                This prototype uses sample content to demonstrate that
                direction. The final story, editorial voice and publishing
                details should be confirmed with the podcast owner.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Mic2,
                title: "Listen",
                description:
                  "Make conversations and episodes easier to find and enjoy.",
              },
              {
                icon: Compass,
                title: "Discover",
                description:
                  "Help people find local businesses, places and experiences.",
              },
              {
                icon: Heart,
                title: "Connect",
                description:
                  "Celebrate the community and the stories that bring it together.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-2xl bg-shell p-7">
                  <Icon className="text-coral" size={25} />
                  <h3 className="mt-5 text-xl font-semibold text-ocean">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          <Link
            href="/podcast"
            className="mt-10 inline-flex items-center gap-2 font-semibold text-teal hover:text-ocean"
          >
            Explore the podcast <ArrowUpRight size={17} />
          </Link>
        </Container>
      </section>
    </>
  );
}
