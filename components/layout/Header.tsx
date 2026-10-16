import Link from "next/link";
import { Container } from "./Container";

const navigation = [
  { href: "/podcast", label: "Listen & Watch" },
  { href: "/explore", label: "Explore Diani" },
  { href: "/directory", label: "Directory" },
  { href: "/classifieds", label: "Classifieds" },
  { href: "/events", label: "Events" },
  { href: "/mylivinglist", label: "My Living List" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-sand/85 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <span className="block text-lg font-bold tracking-tight text-ocean">
            DIANI BEACH PODCAST
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">
            Local Stories
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink transition-colors hover:text-coral"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/advertise"
          className="hidden rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-seafoam hover:text-ocean-deep sm:inline-flex"
        >
          Advertise With Us
        </Link>

        <Link
          href="/podcast"
          className="text-sm font-semibold text-ocean lg:hidden"
        >
          Episodes
        </Link>
      </Container>
    </header>
  );
}
