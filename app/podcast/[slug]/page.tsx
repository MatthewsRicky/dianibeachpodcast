import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Headphones } from "lucide-react";

import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getEpisodeBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function EpisodeDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<EpisodeLoading />}>
      <EpisodeDetailContent params={params} />
    </Suspense>
  );
}

async function EpisodeDetailContent({ params }: PageProps) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);

  if (!episode) {
    notFound();
  }

  return (
    <main className="min-h-screen pb-20">
      <Container className="pt-8 sm:pt-12">
        <Link
          href="/podcast"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-teal"
        >
          <ArrowLeft size={16} />
          Back to all episodes
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
          <div className="overflow-hidden rounded-3xl bg-ocean-mist">
            {episode.coverImage ? (
              <div className="relative aspect-square">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={episode.coverImage}
                  alt={episode.title}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="coastal-gradient flex aspect-square flex-col items-center justify-center gap-4 p-8 text-center text-white">
                <Headphones size={48} strokeWidth={1.4} />
                <p className="text-sm font-semibold uppercase tracking-[0.25em]">
                  Diani Beach Podcast
                </p>
              </div>
            )}
          </div>

          <article className="pt-2">
            <Badge>{episode.category || "Podcast episode"}</Badge>

            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-ocean sm:text-5xl">
              {episode.title}
            </h1>

            {episode.publishedAt && (
              <p className="mt-4 text-sm text-muted">
                {new Date(episode.publishedAt).toLocaleDateString("en-KE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}

            <p className="mt-6 whitespace-pre-line text-base leading-8 text-muted">
              {episode.description}
            </p>

            {episode.audio && episode.audio.provider === "direct" && (
              <div className="mt-8 rounded-2xl border border-border bg-white p-5">
                <p className="mb-3 text-sm font-semibold text-ocean">
                  Listen to this episode
                </p>

                <audio
                  controls
                  preload="none"
                  className="w-full"
                  src={episode.audio.url}
                >
                  Your browser does not support audio playback.
                </audio>
              </div>
            )}

            {episode.video?.embedUrl && (
              <div className="mt-8">
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-ocean-deep">
                  <iframe
                    src={episode.video.embedUrl}
                    title={`Watch ${episode.title}`}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            )}

            {episode.externalLinks && episode.externalLinks.length > 0 && (
              <div className="mt-8">
                <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-muted">
                  Also available on
                </h2>

                <div className="mt-4 flex flex-wrap gap-3">
                  {episode.externalLinks.map((item) => (
                    <a
                      key={`${item.label}-${item.url}`}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-semibold text-ocean transition-colors hover:border-teal hover:text-teal"
                    >
                      {item.label}
                      <ArrowUpRight size={15} />
                    </a>
                  ))}
                </div>
              </div>
            )}
            {episode.audio && episode.audio.provider !== "direct" && (
              <a
                href={episode.audio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal"
              >
                Listen on {episode.audio.provider}
              </a>
            )}

            <div className="mt-10 border-t border-border pt-6">
              <p className="text-sm leading-6 text-muted">
                Discover more conversations, people and stories from Kenya's
                South Coast.
              </p>

              <div className="mt-5">
                <ButtonLink href="/podcast">Explore more episodes</ButtonLink>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </main>
  );
}

function EpisodeLoading() {
  return (
    <main className="min-h-[70vh] pb-20">
      <Container className="pt-12">
        <div className="animate-pulse">
          <div className="h-4 w-40 rounded bg-ocean-mist" />

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="aspect-square rounded-3xl bg-ocean-mist" />

            <div className="space-y-5 pt-2">
              <div className="h-7 w-32 rounded-full bg-ocean-mist" />
              <div className="h-12 w-full rounded bg-ocean-mist" />
              <div className="h-12 w-4/5 rounded bg-ocean-mist" />
              <div className="h-4 w-36 rounded bg-ocean-mist" />

              <div className="space-y-3 pt-4">
                <div className="h-4 w-full rounded bg-ocean-mist" />
                <div className="h-4 w-full rounded bg-ocean-mist" />
                <div className="h-4 w-2/3 rounded bg-ocean-mist" />
              </div>

              <div className="aspect-video rounded-2xl bg-ocean-mist" />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
