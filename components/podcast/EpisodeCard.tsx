import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { Episode } from "@/types";
import { Badge } from "@/components/ui/Badge";

type EpisodeCardProps = {
  episode: Episode;
};

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="group">
      <Link
        href={`/podcast/${episode.slug}`}
        className="block"
        aria-label={`View episode: ${episode.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url("${episode.coverImage}")` }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

          <div className="absolute left-4 top-4">
            <Badge variant="light">{episode.category}</Badge>
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-medium text-white">
            <Clock3 size={14} />
            {episode.duration ?? "Podcast episode"}
          </div>

          <div className="absolute bottom-3 right-3 flex size-11 items-center justify-center rounded-full bg-paper text-ocean transition-colors group-hover:bg-coral group-hover:text-white">
            <ArrowUpRight size={19} />
          </div>
        </div>

        <div className="pt-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            {new Date(`${episode.publishedAt}T12:00:00`).toLocaleDateString(
              "en-GB",
              { day: "numeric", month: "short", year: "numeric" },
            )}
          </p>

          <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-ocean transition-colors group-hover:text-coral">
            {episode.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
            {episode.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
