import { Container } from "@/components/layout/Container";
import { LivingListClient } from "@/components/living-list/LivingListClient";
import { livingList } from "@/lib/data/livingList";

export default function MyLivingListPage() {
  return (
    <main className="min-h-screen pb-20">
      <section className="coastal-gradient text-white" >
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-seafoam">
            One life. Many possibilities.
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            My Living List
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            An ever-changing list of things I'd love to do before I die. Do we
            have any in common?
          </p>
        </Container>
      </section>

      <Container className="pt-10 sm:pt-14">
        <div className="mb-8 max-w-2xl">
          <p className="text-base leading-8 text-muted">
            From travelling across continents to discovering new music and
            learning new skills, this is a personal collection of ambitions,
            adventures and memories in the making.
          </p>
        </div>

        <LivingListClient items={livingList} />
      </Container>
    </main>
  );
}
