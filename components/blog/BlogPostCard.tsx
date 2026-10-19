import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/data/blogPosts";

type BlogPostCardProps = {
  post: BlogPost;
};

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-paper">
      <Link
        href={`/journal/${post.slug}`}
        aria-label={`Read ${post.title}`}
        className="block"
      >
        <div
          className="aspect-[4/3] bg-sand bg-cover bg-center"
          style={
            post.image
              ? { backgroundImage: `url("${post.image}")` }
              : undefined
          }
        />

        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            {post.categories.join(" · ")}
          </p>

          <h3 className="mt-3 text-xl font-semibold leading-snug text-ocean transition-colors group-hover:text-coral">
            {post.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-muted">
            {post.excerpt}
          </p>

          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ocean">
            Read story
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}