import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

type EditorialPageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "ocean" | "teal" | "emerald" | "sunset";
  children?: ReactNode;
};

const tones = {
  ocean: "bg-ocean-deep text-white",
  teal: "bg-teal text-white",
  emerald: "bg-emerald text-white",
  sunset: "sunset-gradient text-white",
};

export function EditorialPageHero({
  eyebrow,
  title,
  description,
  tone = "ocean",
  children,
}: EditorialPageHeroProps) {
  return (
    <section
      className={`relative overflow-hidden py-20 sm:py-28 ${tones[tone]}`}
    >
      <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/15 sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72" />

      <Container className="relative">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/75">
            {eyebrow}
          </p>
          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
