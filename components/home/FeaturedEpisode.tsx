import Link from "next/link";
import { ArrowUpRight, Headphones } from "lucide-react";
import { episodes } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

export function FeaturedEpisode() {
  const episode = episodes.find((item) => item.featured);

  if (!episode) return null;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid overflow-hidden rounded-3xl bg-sand lg:grid-cols-2">
          <Link
            href={`/podcast/${episode.slug}`}
            className="group relative min-h-[320px] overflow-hidden sm:min-h-[440px]"
            aria-label={`Listen to ${episode.title}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url("${episode.coverImage}")` }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

            <div className="absolute bottom-6 left-6 flex size-14 items-center justify-center rounded-full bg-paper text-ocean transition-colors group-hover:bg-coral group-hover:text-white">
              <Headphones size={23} />
            </div>

            <div className="absolute bottom-8 left-24 text-sm font-medium text-white">
              Discover this episode
            </div>
          </Link>

          <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-14">
            <Badge variant="coral">Featured episode</Badge>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {episode.category} · {episode.duration}
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-ocean sm:text-4xl">
              {episode.title}
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
              {episode.excerpt}
            </p>

            <Link
              href={`/podcast/${episode.slug}`}
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ocean transition-colors hover:text-coral"
            >
              Explore the episode
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
