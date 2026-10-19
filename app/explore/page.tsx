import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, Utensils, Waves, Leaf } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { EditorialPageHero } from "@/components/ui/EditorialPageHero";
import { blogPosts } from "@/lib/data/blogPosts";
import ExploreStories from "@/components/explore/ExploreStories";

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
    href: "/explore?category=food-drink",
    image: "/images/blog/funkymonkey/fm1alternate.webp",
    icon: Utensils,
    tone: "bg-sunset-gold text-ocean",
  },
  {
    title: "Ocean & adventure",
    description:
      "Get inspired by the water, outdoor adventures and ways to experience the coastline.",
    href: "/explore?category=experiences",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85",
    icon: Waves,
    tone: "bg-teal text-white",
  },
  {
    title: "Coastal living",
    description:
      "Explore stays, wellness, creative spaces and the rhythms of life by the ocean.",
    href: "/explore?category=coastal-living",
    image: "/images/blog/places/allamanda.webp",
    icon: Leaf,
    tone: "bg-emerald text-white",
  },
];

const exploreFilters: Record<string, string[]> = {
  "food-drink": ["Food", "Bars & Nightlife"],
  "coastal-living": ["Lifestyle", "Culture", "Travel", "Wellness"],
  experiences: ["Things To Do", "Events", "Travel", "Culture", "Film"],
  events: ["Events"],
};

function getExplorePosts(category?: string) {
  const posts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  if (!category || !exploreFilters[category]) {
    return posts;
  }

  const matchingCategories = exploreFilters[category];

  return posts.filter((post) =>
    post.categories.some((item) => matchingCategories.includes(item)),
  );
}

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const posts = getExplorePosts(category); {
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

          <section className="py-16 sm:py-20">
            <Container>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                    Stories from the coast
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold text-ocean sm:text-4xl">
                    {category
                      ? category === "food-drink"
                        ? "Food, drink & good company"
                        : category === "coastal-living"
                          ? "Life along the coast"
                          : category === "events"
                            ? "What's happening"
                            : "Places & experiences"
                      : "Discover Diani through our stories"}
                  </h2>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                    From restaurant discoveries and cultural events to the
                    people and experiences that make the South Coast special.
                  </p>
                </div>

                <Link
                  href="/journal"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal"
                >
                  All journal stories <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="mb-7 flex flex-wrap gap-2">
                {[
                  { label: "All stories", value: "" },
                  { label: "Food & Drink", value: "food-drink" },
                  { label: "Coastal Living", value: "coastal-living" },
                  { label: "Places & Experiences", value: "experiences" },
                  { label: "Events", value: "events" },
                ].map((item) => (
                  <Link
                    key={item.value || "all"}
                    href={
                      item.value
                        ? `/explore?category=${item.value}`
                        : "/explore"
                    }
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      (category ?? "") === item.value
                        ? "border-ocean bg-ocean text-white"
                        : "border-border bg-white text-ocean hover:border-teal hover:text-teal"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              {posts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/journal/${post.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-teal/20 via-sand to-sunset-pink/20">
                            <Compass size={34} className="text-ocean/50" />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        <div className="flex flex-wrap gap-2">
                          {post.categories.slice(0, 2).map((item) => (
                            <span
                              key={item}
                              className="text-xs font-semibold uppercase tracking-wide text-teal"
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <h3 className="mt-3 text-xl font-semibold leading-snug text-ocean transition group-hover:text-teal">
                          {post.title}
                        </h3>

                        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
                          {post.excerpt}
                        </p>

                        <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs text-muted">
                          <span>{post.author}</span>
                          <span>
                            {new Date(
                              `${post.publishedAt}T12:00:00`,
                            ).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>

                        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                          Read story <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="rounded-2xl border border-border bg-white p-8 text-muted">
                  No stories in this category yet. Explore all our journal
                  stories instead.{" "}
                  <Link
                    href="/journal"
                    className="font-semibold text-teal underline"
                  >
                    Browse the journal
                  </Link>
                </p>
              )}
            </Container>
          </section>
        </Container>
      </section>
      <ExploreStories />
    </>
  );
}
}
