"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { blogPosts, getBlogCategories } from "@/lib/data/blogPosts";

export default function JournalPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = getBlogCategories();

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory =
        category === "All" || post.categories.includes(category);

      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.categories.some((item) => item.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen pb-20">
      <section className="coastal-gradient text-white">
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-seafoam">
            Stories from the South Coast
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            The Diani Journal
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Food, music, people, places and experiences worth discovering around
            Diani and beyond.
          </p>
        </Container>
      </section>

      <Container className="pt-10 sm:pt-14">
        <div className="flex flex-col gap-4 sm:flex-row">
          <label className="flex min-h-12 flex-1 items-center gap-3 rounded-full border border-border bg-white px-5">
            <Search size={18} className="shrink-0 text-muted" />
            <span className="sr-only">Search journal articles</span>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search stories..."
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
            />
          </label>

          <label className="flex min-h-12 items-center gap-3 rounded-full border border-border bg-white px-5">
            <span className="text-xs font-semibold text-muted">Category</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="max-w-[220px] bg-transparent text-sm text-ocean outline-none"
            >
              <option value="All">All categories</option>
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3">
          <p className="text-sm text-muted">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "story" : "stories"}
          </p>
          {(search || category !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="text-sm font-semibold text-teal hover:text-ocean"
            >
              Clear filters
            </button>
          )}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {post.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.image}
                    alt=""
                    className="aspect-[16/10] w-full object-cover"
                  />
                ) : (
                  <div className="coastal-gradient flex aspect-[16/10] items-end p-5">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                      Diani Beach Journal
                    </span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    {post.categories.slice(0, 2).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-seafoam-light px-3 py-1 text-xs font-semibold text-emerald"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-xs text-muted">
                    {new Date(
                      `${post.publishedAt}T12:00:00`,
                    ).toLocaleDateString("en-KE", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <h2 className="mt-3 text-xl font-bold leading-snug text-ocean">
                    {post.title}
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-7 text-muted">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/journal/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal transition-colors hover:text-coral"
                  >
                    Read story
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-border p-10 text-center">
            <h2 className="text-lg font-bold text-ocean">No stories found</h2>
            <p className="mt-2 text-sm text-muted">
              Try another search term or select a different category.
            </p>
          </div>
        )}
      </Container>
    </main>
  );
}
