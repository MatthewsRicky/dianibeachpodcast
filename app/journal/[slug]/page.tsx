import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { getBlogPostBySlug } from "@/lib/data/blogPosts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function JournalArticlePage({ params }: PageProps) {
  return (
    <Suspense fallback={<ArticleLoading />}>
      <JournalArticleContent params={params} />
    </Suspense>
  );
}

async function JournalArticleContent({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen pb-20">
      <Container className="pt-8 sm:pt-12">
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-teal"
        >
          <ArrowLeft size={16} />
          Back to the journal
        </Link>

        <article className="mx-auto mt-8 max-w-4xl">
          <div className="flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-seafoam-light px-3 py-1 text-xs font-semibold text-emerald"
              >
                {category}
              </span>
            ))}
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-ocean sm:text-6xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
            <span>By {post.author}</span>
            <span>
              {new Date(`${post.publishedAt}T12:00:00`).toLocaleDateString(
                "en-KE",
                { day: "numeric", month: "long", year: "numeric" },
              )}
            </span>
          </div>

          {post.image ? (
            <div className="mt-8 overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="max-h-[560px] w-full object-cover"
              />
            </div>
          ) : (
            <div className="coastal-gradient mt-8 flex min-h-56 items-end rounded-3xl p-8 sm:min-h-72 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
                Diani Beach Journal
              </p>
            </div>
          )}

          <p className="mt-8 text-xl leading-9 text-ocean">{post.excerpt}</p>

          <div className="mt-8 space-y-6">
            {post.content.map((paragraph, index) => (
              <p
                key={`${post.id}-${index}`}
                className="text-base leading-8 text-ink/80"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-white p-6 sm:p-8">
            <p className="text-sm leading-7 text-muted">
              This is an introductory local-data version of the story. Visit the
              original article for the source publication and its original
              media.
            </p>
            <a
              href={post.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-white hover:bg-teal"
            >
              Read the original article
              <ArrowUpRight size={16} />
            </a>
          </div>
        </article>
      </Container>
    </main>
  );
}

function ArticleLoading() {
  return (
    <main className="min-h-[60vh]">
      <Container className="animate-pulse space-y-6 py-12">
        <div className="h-4 w-36 rounded bg-ocean-mist" />
        <div className="h-12 max-w-3xl rounded bg-ocean-mist" />
        <div className="h-5 max-w-xl rounded bg-ocean-mist" />
        <div className="aspect-video rounded-3xl bg-ocean-mist" />
      </Container>
    </main>
  );
}
