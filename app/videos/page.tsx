import { ArrowUpRight, Play } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { videoChannel, videos } from "@/lib/data/videos";

export default function VideosPage() {
  return (
    <main className="min-h-screen pb-20">
      <section className="coastal-gradient text-white">
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-seafoam">
            Watch the coast
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Diani on screen
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Discover the people, places, music and experiences of the Kenyan
            coast through video.
          </p>

          <a
            href={videoChannel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sunset-pink"
          >
            <Play size={18} />
            Visit Pwani Viungo
            <ArrowUpRight size={16} />
          </a>
        </Container>
      </section>

      <Container className="pt-10 sm:pt-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal">
              Video collection
            </p>
            <h2 className="mt-2 text-2xl font-bold text-ocean sm:text-3xl">
              Watch and discover
            </h2>
          </div>

          <a
            href={videoChannel.videosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-coral"
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
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-coral"
                  >
                    Watch on YouTube
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-border bg-white p-8 sm:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-seafoam-light text-emerald">
              <Play size={28} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-ocean">
              Explore the video channel
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
              The channel is connected, but individual video entries have not
              yet been verified and added to the local data file. Visit Pwani
              Viungo to watch the available videos.
            </p>
            <a
              href={videoChannel.videosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-white hover:bg-teal"
            >
              Browse videos
              <ArrowUpRight size={16} />
            </a>
          </div>
        )}
      </Container>
    </main>
  );
}
