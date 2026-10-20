import { ArrowUpRight, Play } from "lucide-react";
import type { VideoLink } from "@/lib/data/videos";
import { Badge } from "@/components/ui/Badge";

type EpisodeCardProps = {
  episode: VideoLink;
};

export function EpisodeCard({ episode }: EpisodeCardProps) {
  const thumbnail =
    episode.thumbnail ?? `https://i.ytimg.com/vi/${episode.id}/hqdefault.jpg`;

  return (
    <article className="group">
      <a
        href={episode.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Watch: ${episode.title} on YouTube`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url("${thumbnail}")` }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

          <div className="absolute left-4 top-4">
            <Badge variant="light">Pwani Viungo</Badge>
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-medium text-white">
            <Play size={14} fill="currentColor" />
            Watch on YouTube
          </div>

          <div className="absolute bottom-3 right-3 flex size-11 items-center justify-center rounded-full bg-paper text-ocean transition-colors group-hover:bg-coral group-hover:text-white">
            <ArrowUpRight size={19} />
          </div>
        </div>

        <div className="pt-4">
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            Video episode
          </p>

          <h3 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-ocean transition-colors group-hover:text-coral">
            {episode.title}
          </h3>

          {episode.description && (
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
              {episode.description}
            </p>
          )}
        </div>
      </a>
    </article>
  );
}
