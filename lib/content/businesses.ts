import type { Business } from "@/types";

export const businesses: Business[] = [
  {
    id: "business-001",
    slug: "sample-coastal-cafe",
    name: "Sample Coastal Café",
    category: "Food & Drink",
    description:
      "DEMO LISTING — Replace with a verified business profile and approved description.",
    location: "Diani Beach, Kenya",
    image: "/images/businesses/business-placeholder.jpg",
    website: undefined,
    featured: true,
    sponsored: false,
  },
  {
    id: "business-002",
    slug: "sample-local-stays",
    name: "Sample Local Stays",
    category: "Accommodation",
    description:
      "DEMO LISTING — A placeholder for a verified accommodation provider.",
    location: "Diani Beach, Kenya",
    image: "/images/businesses/business-placeholder.jpg",
    featured: true,
    sponsored: false,
  },
  {
    id: "business-003",
    slug: "sample-creative-studio",
    name: "Sample Creative Studio",
    category: "Arts & Services",
    description: "DEMO LISTING — A placeholder for a local creative business.",
    location: "Ukunda, Kenya",
    image: "/images/businesses/business-placeholder.jpg",
    featured: false,
    sponsored: false,
  },
];

export function getBusinesses(): Business[] {
  return [...businesses];
}

export function getBusinessBySlug(slug: string): Business | undefined {
  return businesses.find((business) => business.slug === slug);
}

export function getFeaturedBusinesses(): Business[] {
  return getBusinesses().filter((business) => business.featured);
}

export function getBusinessCategories(): string[] {
  return [...new Set(businesses.map((business) => business.category))].sort();
}
