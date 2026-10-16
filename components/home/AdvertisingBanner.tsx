import Link from "next/link";
import { ArrowUpRight, Megaphone } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function AdvertisingBanner() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-ocean px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-16 -top-20 -z-10 size-72 rounded-full border border-white/10 sm:size-96" />
          <div className="absolute -right-4 -top-8 -z-10 size-52 rounded-full border border-white/10 sm:size-72" />

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-coral">
                <Megaphone size={19} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Partner with us
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Your business belongs in the conversation.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                Connect your brand with people discovering Diani and
                Kenya&apos;s South Coast through sponsored stories, podcast
                partnerships and featured business listings.
              </p>
            </div>

            <Link
              href="/advertise"
              className="inline-flex min-h-12 w-fit items-center justify-center gap-3 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral/90"
            >
              Explore advertising
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
