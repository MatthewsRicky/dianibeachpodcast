import type { ClassifiedListing } from "@/types";

export const classifieds: ClassifiedListing[] = [
  {
    id: "classified-001",
    slug: "sample-property-listing",
    title: "Sample Property Listing",
    category: "Property",
    description:
      "DEMO LISTING — Replace with verified details supplied by the advertiser.",
    image: "/images/editorial/classified-placeholder.jpg",
    location: "Diani Beach, Kenya",
    currency: "KES",
    expiresAt: "2026-12-31",
  },
  {
    id: "classified-002",
    slug: "sample-professional-service",
    title: "Sample Professional Service",
    category: "Services",
    description:
      "DEMO LISTING — Replace with an approved service description and contact details.",
    image: "/images/editorial/classified-placeholder.jpg",
    location: "Ukunda, Kenya",
    currency: "KES",
    expiresAt: "2026-12-31",
  },
];

export function getClassifieds(): ClassifiedListing[] {
  return [...classifieds];
}

export function getClassifiedBySlug(
  slug: string,
): ClassifiedListing | undefined {
  return classifieds.find((listing) => listing.slug === slug);
}

export function getClassifiedCategories(): string[] {
  return [...new Set(classifieds.map((item) => item.category))].sort();
}

export function getActiveClassifieds(now = new Date()): ClassifiedListing[] {
  return getClassifieds().filter(
    (listing) =>
      !listing.expiresAt ||
      new Date(listing.expiresAt).getTime() >= now.getTime(),
  );
}
