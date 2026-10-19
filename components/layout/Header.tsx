"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";

const navigation = [
  { href: "/journal", label: "Journal" },
  { href: "/podcast", label: "Listen & Watch" },
  { href: "/explore", label: "Explore Diani" },
  { href: "/directory", label: "Directory" },
  { href: "/classifieds", label: "Classifieds" },
  { href: "/events", label: "Events" },
  { href: "/mylivinglist", label: "My Living List" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-sand/90 backdrop-blur-xl">
      <Container className="relative flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="relative z-[60] shrink-0"
          onClick={closeMenu}
          aria-label="Diani Beach Podcast home"
        >
          <span className="block text-base font-bold tracking-tight text-ocean sm:text-lg">
            DIANI BEACH PODCAST
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-muted">
            Local Stories
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center justify-center gap-3 lg:flex lg:flex-wrap"
        >
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

        <div className="flex items-center gap-3">
          <Link
            href="/advertise"
            className="hidden items-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sunset-pink lg:inline-flex"
          >
            Advertise With Us
            <ArrowUpRight size={15} />
          </Link>

          {/* Animated mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-ocean/15 text-ocean transition-colors hover:bg-seafoam-light lg:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

            <span className="relative flex h-5 w-5 items-center justify-center">
              <motion.span
                className="absolute h-0.5 w-5 rounded-full bg-current"
                animate={
                  menuOpen
                    ? { top: "50%", rotate: 45 }
                    : { top: "22%", rotate: 0 }
                }
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />

              <motion.span
                className="absolute top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current"
                animate={{
                  opacity: menuOpen ? 0 : 1,
                  scaleX: menuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.15 }}
              />

              <motion.span
                className="absolute h-0.5 w-5 rounded-full bg-current"
                animate={
                  menuOpen
                    ? { top: "50%", rotate: -45 }
                    : { top: "78%", rotate: 0 }
                }
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
            </span>
          </button>
        </div>
      </Container>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            key="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-border bg-paper shadow-xl lg:hidden"
          >
            <Container className="py-6">
              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.035,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between border-b border-border/80 py-4 text-lg font-medium text-ocean transition-colors hover:text-teal"
                    >
                      {item.label}
                      <ArrowUpRight
                        size={18}
                        className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral"
                      />
                    </Link>
                  </motion.div>
                ))}

                <Link
                  href="/advertise"
                  onClick={closeMenu}
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sunset-pink"
                >
                  Advertise With Us
                  <ArrowUpRight size={16} />
                </Link>
              </nav>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-muted ">
                Stories of the South Coast
              </p>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
