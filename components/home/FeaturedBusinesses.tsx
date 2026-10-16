import { businesses } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BusinessCard } from "@/components/directory/BusinessCard";

export function FeaturedBusinesses() {
  const featuredBusinesses = businesses
    .filter((business) => business.featured)
    .slice(0, 3);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Know the neighbourhood"
          title="Good places. Good people."
          description="Discover local businesses, experiences and places worth getting to know."
          href="/directory"
          linkLabel="Explore the directory"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </Container>
    </section>
  );
}
