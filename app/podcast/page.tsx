import type { Metadata } from "next";
import { ArrowUpRight, Play } from "lucide-react";

import { episodes } from "@/lib/content";
import { videoChannel, videos } from "@/lib/data/videos";
import { Container } from "@/components/layout/Container";
import { EditorialPageHero } from "@/components/ui/EditorialPageHero";
import { EpisodeCard } from "@/components/podcast/EpisodeCard";

export const metadata: Metadata = {
  title: "Listen & Watch | Diani Beach Podcast",
  description:
    "Explore podcast conversations, videos, people and stories from Diani Beach and Kenya's South Coast.",
};

export default function PodcastPage() {
  const sortedEpisodes = [...episodes].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <main className="min-h-screen pb-16">
      <EditorialPageHero
        eyebrow="Listen & watch"
        title="Stories worth staying for."
        description="Conversations, ideas and perspectives from the people shaping life on Kenya's South Coast — through podcasts and video."
        tone="ocean"
      />

      {/* Podcast episodes */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-teal">
                The podcast
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-ocean sm:text-4xl">
                Explore episodes
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-muted">
              Conversations about coastal living, food, culture and the people
              who make this place distinctive.
            </p>
          </div>

          {sortedEpisodes.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sortedEpisodes.map((episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl border border-border bg-shell p-8 text-muted">
              Podcast episodes will appear here as they are published.
            </p>
          )}
        </Container>
      </section>

      {/* Video collection */}
      <section className="border-y border-border bg-paper py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
                Watch the coast
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-ocean sm:text-4xl">
                Diani on screen
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                Discover the people, places, music and experiences of the Kenyan
                coast through video.
              </p>
            </div>

            <a
              href={videoChannel.videosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-coral"
            >
              Browse the YouTube channel
              <ArrowUpRight size={16} />
            </a>
          </div>

          {videos.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {videos.map((video) => (
                <article
                  key={video.id}
                  className="overflow-hidden rounded-2xl border border-border bg-white"
                >
                  {video.embedUrl ? (
                    <div className="relative aspect-video bg-ocean-deep">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="coastal-gradient flex aspect-video items-center justify-center text-white"
                      aria-label={`Watch ${video.title} on YouTube`}
                    >
                      <Play size={42} />
                    </a>
                  )}

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-ocean">
                      {video.title}
                    </h3>

                    {video.description && (
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {video.description}
                      </p>
                    )}

                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-coral"
                    >
                      Watch on YouTube
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-border bg-white p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-seafoam-light text-emerald">
                <Play size={28} />
              </div>

              <h3 className="mt-5 text-xl font-bold text-ocean">
                Explore Pwani Viungo
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                Explore the existing video collection on the Pwani Viungo
                YouTube channel. Individual videos will appear here once their
                details and links have been verified.
              </p>

              <a
                href={videoChannel.videosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal"
              >
                Browse videos
                <ArrowUpRight size={16} />
              </a>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
