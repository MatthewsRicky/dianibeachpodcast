import { getLatestBlogPosts } from "@/lib/data/blogPosts";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogPostCard } from "@/components/blog/BlogPostCard";

export function LatestEpisodes() {
  const latestPosts = getLatestBlogPosts(4);

  return (
    <section id="latest" className="bg-sand py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="From the journal"
          title="Stories worth discovering."
          description="Explore the people, places, food, music and experiences shaping life on the South Coast."
          href="/journal"
          linkLabel="All stories"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {latestPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
