import Link from "next/link";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ocean text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=90')",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ocean-deep/95 via-ocean-deep/70 to-ocean-deep/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ocean-deep/70 via-transparent to-transparent" />

      <Container className="flex min-h-[640px] flex-col justify-center py-24 sm:min-h-[700px] lg:min-h-[740px]">
        <div className="max-w-3xl">
          <Badge variant="coral">Stories from the South Coast</Badge>

          <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            More than a<span className="block text-white/70">destination.</span>
            <span className="block">A whole story.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Discover the people, places, conversations and experiences that make
            Diani and Kenya&apos;s South Coast worth knowing.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink
              href="/podcast"
              className="bg-coral text-white hover:bg-coral/90"
            >
              <Play size={16} fill="currentColor" />
              Listen to the Podcast
            </ButtonLink>

            <ButtonLink href="/explore" variant="light">
              Explore Diani
              <ArrowUpRight size={16} />
            </ButtonLink>
          </div>

          <div className="mt-16 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-white/70">
            <span className="h-px w-10 bg-coral" />
            Local voices. Coastal stories. Real experiences.
          </div>
        </div>

        <Link
          href="#latest"
          className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white sm:flex lg:right-12"
        >
          Discover more
          <ArrowDown size={15} />
        </Link>
      </Container>
    </section>
  );
}
