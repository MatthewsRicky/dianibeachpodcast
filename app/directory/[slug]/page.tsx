import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { businesses, getBusinessBySlug } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return businesses.map((business) => ({ slug: business.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  return business
    ? {
        title: `${business.name} | Diani Beach Directory`,
        description: business.description,
      }
    : { title: "Business not found" };
}

export default async function BusinessDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  if (!business) notFound();

  return (
    <>
      <section className="bg-ocean-deep py-10 text-white sm:py-14">
        <Container>
          <Link
            href="/directory"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to directory
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <Badge variant="coral">{business.category}</Badge>
              {business.sponsored && (
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-sunset-gold">
                  Featured partner
                </p>
              )}
              <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
                {business.name}
              </h1>
              <p className="mt-5 max-w-xl leading-7 text-white/75">
                {business.description}
              </p>
              <p className="mt-5 flex items-center gap-2 text-sm text-white/70">
                <MapPin size={16} />
                {business.location}
              </p>
            </div>

            <div
              role="img"
              aria-label={`Image representing ${business.name}`}
              className="aspect-[5/4] rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url("${business.image}")` }}
            />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal">
              About this listing
            </p>
            <h2 className="text-2xl font-semibold text-ocean sm:text-3xl">
              Get to know {business.name}
            </h2>
            <p className="mt-4 leading-8 text-muted">{business.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {business.website && (
                <a
                  href={business.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white hover:bg-teal"
                >
                  Visit website <ArrowUpRight size={16} />
                </a>
              )}
              {business.whatsapp && (
                <a
                  href={`https://wa.me/${business.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ocean hover:border-teal"
                >
                  Contact on WhatsApp <ArrowUpRight size={16} />
                </a>
              )}
              {business.phone && (
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ocean hover:border-teal"
                >
                  Call business
                </a>
              )}
            </div>

            <p className="mt-8 text-xs leading-5 text-muted">
              Prototype listing: confirm all business details, imagery and
              contact permissions before publication.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
