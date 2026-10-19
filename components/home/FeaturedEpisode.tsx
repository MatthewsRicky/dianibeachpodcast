import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { getFeaturedBlogPost } from "@/lib/data/blogPosts";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

export function FeaturedEpisode() {
  const post = getFeaturedBlogPost();

  if (!post) return null;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid overflow-hidden rounded-3xl bg-sand lg:grid-cols-2">
          <Link
            href={`/journal/${post.slug}`}
            aria-label={`Read ${post.title}`}
            className="group relative min-h-[320px] overflow-hidden bg-ocean sm:min-h-[440px]"
          >
            {post.image && (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url("${post.image}")` }}
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

            <div className="absolute bottom-6 left-6 flex size-14 items-center justify-center rounded-full bg-paper text-ocean transition-colors group-hover:bg-coral group-hover:text-white">
              <BookOpen size={23} />
            </div>

            <div className="absolute bottom-8 left-24 text-sm font-medium text-white">
              Discover this story
            </div>
          </Link>

          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-14">
            <Badge variant="coral">Featured story</Badge>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {post.categories.join(" · ")}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ocean sm:text-4xl">
              {post.title}
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
              {post.excerpt}
            </p>

            <Link
              href={`/journal/${post.slug}`}
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ocean transition-colors hover:text-coral"
            >
              Read the story
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
