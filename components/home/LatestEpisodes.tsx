import { episodes } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EpisodeCard } from "@/components/podcast/EpisodeCard";

export function LatestEpisodes() {
  const latestEpisodes = [...episodes]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);

  return (
    <section id="latest" className="bg-sand py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Listen & watch"
          title="Conversations worth having."
          description="Meet the people, hear the stories and discover the ideas shaping life on the South Coast."
          href="/podcast"
          linkLabel="All episodes"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </Container>
    </section>
  );
}
