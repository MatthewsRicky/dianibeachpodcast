import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-ocean-deep py-12 text-white">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              DIANI BEACH PODCAST
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
              Stories, people, places and experiences from Diani and
              Kenya&apos;s South Coast.
            </p>
          </div>

          <div>
            <h2 className="font-semibold">Discover</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <Link href="/podcast">Listen & Watch</Link>
              <Link href="/explore">Explore Diani</Link>
              <Link href="/directory">Business Directory</Link>
              <Link href="/events">Events</Link>
            </div>
          </div>

          <div>
            <h2 className="font-semibold">Work With Us</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <Link href="/advertise">Advertising & Sponsorship</Link>
              <Link href="/classifieds">Classifieds</Link>
              <Link href="/about">About the Podcast</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-xs text-white/60">
          © {new Date().getFullYear()} Diani Beach Podcast. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
