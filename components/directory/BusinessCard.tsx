import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Business } from "@/types";
import { Badge } from "@/components/ui/Badge";

type BusinessCardProps = {
  business: Business;
};

export function BusinessCard({ business }: BusinessCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-paper transition-shadow hover:shadow-lg hover:shadow-ocean/5">
      <Link
        href={`/directory/${business.slug}`}
        aria-label={`View ${business.name}`}
      >
        <div className="relative aspect-[5/3] overflow-hidden bg-sand">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url("${business.image}")` }}
          />

          {business.sponsored && (
            <div className="absolute left-4 top-4">
              <Badge variant="light">Featured partner</Badge>
            </div>
          )}
        </div>

        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral">
            {business.category}
          </p>

          <h3 className="mt-2 flex items-center justify-between gap-3 text-xl font-semibold text-ocean">
            {business.name}
            <ArrowUpRight
              size={18}
              className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">
            {business.description}
          </p>

          <p className="mt-4 flex items-center gap-2 text-xs text-muted">
            <MapPin size={14} />
            {business.location}
          </p>
        </div>
      </Link>
    </article>
  );
}
