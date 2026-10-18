import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, Utensils, Waves, Leaf } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EditorialPageHero } from "@/components/ui/EditorialPageHero";

export const metadata: Metadata = {
  title: "Explore Diani | Diani Beach Podcast",
  description:
    "Discover food, culture, coastal experiences and local life in Diani and Kenya's South Coast.",
};

const categories = [
  {
    title: "Food & drink",
    description:
      "Find places to eat, local flavours, coffee spots and the people behind the menus.",
    href: "/directory?category=food",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    icon: Utensils,
    tone: "bg-sunset-gold text-ocean",
  },
  {
    title: "Ocean & adventure",
    description:
      "Get inspired by the water, outdoor adventures and ways to experience the coastline.",
    href: "/directory?category=experiences",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85",
    icon: Waves,
    tone: "bg-teal text-white",
  },
  {
    title: "Coastal living",
    description:
      "Explore stays, wellness, creative spaces and the rhythms of life by the ocean.",
    href: "/directory?category=accommodation",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=85",
    icon: Leaf,
    tone: "bg-emerald text-white",
  },
];

export default function ExplorePage() {
  return (
    <>
      <EditorialPageHero
        eyebrow="Find your own coast"
        title="There's more than one way to experience Diani."
        description="From memorable meals to ocean adventures, discover the places, people and experiences that make the South Coast special."
        tone="teal"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-8 flex items-center gap-3">
            <Compass className="text-coral" size={24} />
            <h2 className="text-2xl font-semibold text-ocean sm:text-3xl">
              Start exploring
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <Link
                  href={category.href}
                  key={category.title}
                  className="group overflow-hidden rounded-2xl border border-border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className="aspect-[4/3] bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url("${category.image}")` }}
                  />
                  <div className="p-6 sm:p-7">
                    <span
                      className={`inline-flex rounded-xl p-3 ${category.tone}`}
                    >
                      <Icon size={21} />
                    </span>
                    <h3 className="mt-5 text-2xl font-semibold text-ocean">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {category.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                      Explore category <ArrowUpRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
