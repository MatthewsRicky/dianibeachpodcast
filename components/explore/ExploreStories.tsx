"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ArrowUpRight, Compass } from "lucide-react";
import { blogPosts } from "@/lib/data/blogPosts";
import { Container } from "@/components/layout/Container";

const exploreFilters: Record<string, string[]> = {
  "food-drink": ["Food", "Bars & Nightlife"],
  "coastal-living": ["Lifestyle", "Culture", "Travel", "Wellness"],
  experiences: ["Things To Do", "Events", "Travel", "Culture", "Film"],
  events: ["Events"],
};

const filterOptions = [
  { label: "All stories", value: "" },
  { label: "Food & Drink", value: "food-drink" },
  { label: "Coastal Living", value: "coastal-living" },
  { label: "Places & Experiences", value: "experiences" },
  { label: "Events", value: "events" },
];

function ExploreStoriesContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? "";
  const matchingCategories = exploreFilters[category];

  const posts = [...blogPosts]
    .filter(
      (post) =>
        !matchingCategories ||
        post.categories.some((item) => matchingCategories.includes(item)),
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );

  const heading: Record<string, string> = {
    "food-drink": "Food, drink & good company",
    "coastal-living": "Life along the coast",
    experiences: "Places & experiences",
    events: "What's happening",
  };

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              Stories from the coast
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-ocean sm:text-4xl">
              {heading[category] ?? "Discover Diani through our stories"}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              Discover restaurants, cultural events, coastal living and the
              experiences that make the South Coast special.
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
          {filterOptions.map((item) => (
            <Link
              key={item.value || "all"}
              href={item.value ? `/explore?category=${item.value}` : "/explore"}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                category === item.value
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
                    // eslint-disable-next-line @next/next/no-img-element
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
                        timeZone: "UTC",
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
            No stories in this category yet.{" "}
            <Link href="/journal" className="font-semibold text-teal underline">
              Browse the journal
            </Link>
          </p>
        )}
      </Container>
    </section>
  );
}

export default function ExploreStories() {
  return (
    <Suspense
      fallback={
        <section className="py-16 sm:py-20">
          <Container>
            <p className="text-muted">Loading coastal stories...</p>
          </Container>
        </section>
      }
    >
      <ExploreStoriesContent />
    </Suspense>
  );
}
