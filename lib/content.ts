import type { Business, Episode } from "@/types";

export const episodes: Episode[] = [
  {
    id: "episode-1",
    slug: "discovering-the-south-coast",
    title: "Discovering the South Coast",
    excerpt:
      "Stories, people and places that make the Kenyan coast distinctive.",
    description:
      "An introductory sample episode page for the Diani Beach Podcast redesign.",
    coverImage: "/images/episodes/featured.jpg",
    publishedAt: "2026-10-10",
    duration: "32 min",
    host: "Diani Beach Podcast",
    category: "Culture",
    externalLinks: [],
    featured: true,
  },
];

export const businesses: Business[] = [
  {
    id: "business-1",
    slug: "south-coast-escape",
    name: "South Coast Escape",
    category: "Accommodation",
    description:
      "Sample accommodation listing demonstrating the future business directory.",
    location: "Diani Beach, Kenya",
    image: "/images/businesses/accommodation.jpg",
    featured: true,
    sponsored: false,
  },
];

export const getEpisodeBySlug = (slug: string) =>
  episodes.find((episode) => episode.slug === slug);

export const getBusinessBySlug = (slug: string) =>
  businesses.find((business) => business.slug === slug);
