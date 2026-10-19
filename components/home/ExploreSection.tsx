import Link from "next/link";
import { ArrowUpRight, Compass, Utensils, Waves } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  {
    title: "Food & Drink",
    description: "Restaurants, cafés, bars and flavours worth discovering.",
    image: "/images/blog/funkymonkey/fm17.webp",
    href: "/explore?category=food-drink",
    size: "large",
  },
  {
    title: "Coastal Living",
    description: "The people, places and rhythms of life by the ocean.",
    image: "",
    href: "/explore?category=coastal-living",
    size: "medium",
  },
  {
    title: "Places & Experiences",
    description: "Find memorable things to see and do along the coast.",
    image: "/images/blog/places/diani-beach.webp",
    href: "/explore?category=experiences",
    size: "medium",
  },
];

export function ExploreSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="The local guide"
          title="There's more to discover."
          description="From the places we eat to the people we meet, explore the many sides of life on the coast."
          href="/explore"
          linkLabel="Explore all stories"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            //const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className={`group relative isolate flex min-h-[320px] flex-col justify-end overflow-hidden rounded-2xl bg-ocean p-6 text-white sm:min-h-[380px] sm:p-8 ${category.size}`}
              >
                <div
                  className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={
                    category.image
                      ? { backgroundImage: `url("${category.image}")` }
                      : undefined
                  }
                />

                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ocean-deep/90 via-ocean-deep/20 to-black/10" />

                <div className="mb-auto flex size-11 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm">
                  {/* <Icon size={20} /> */}
                </div>

                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {category.title}
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                  {category.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold">
                  Discover more
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
