import type { Business, Episode } from "@/types";

export const episodes: Episode[] = [
  {
    id: "episode-1",
    slug: "discovering-the-south-coast",
    title: "Discovering the South Coast",
    excerpt:
      "The people, places and stories that make Kenya's coast distinctive.",
    description:
      "An introduction to the people and experiences shaping life on the South Coast.",
    coverImage:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85",
    publishedAt: "2026-10-10",
    duration: "32 min",
    host: "Diani Beach Podcast",
    category: "Lifestyle",
    externalLinks: [],
    featured: true,
  },
  {
    id: "episode-2",
    slug: "coastal-food-and-culture",
    title: "Coastal Food & Culture",
    excerpt:
      "Exploring the flavours, traditions and people behind the coast's food scene.",
    description:
      "A sample episode exploring coastal food and cultural experiences.",
    coverImage:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    publishedAt: "2026-10-03",
    duration: "24 min",
    host: "Diani Beach Podcast",
    category: "Food & Drink",
    externalLinks: [],
  },
  {
    id: "episode-3",
    slug: "life-by-the-ocean",
    title: "Life by the Ocean",
    excerpt:
      "A closer look at the people and experiences that shape coastal living.",
    description: "A sample conversation about the South Coast lifestyle.",
    coverImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    publishedAt: "2026-09-26",
    duration: "38 min",
    host: "Diani Beach Podcast",
    category: "Culture",
    externalLinks: [],
  },
];

export const businesses: Business[] = [
  {
    id: "business-1",
    slug: "coastal-stays",
    name: "Coastal Stays",
    category: "Accommodation",
    description:
      "Illustrative accommodation profile for the local business directory.",
    location: "Diani Beach, Kenya",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=85",
    featured: true,
    sponsored: true,
  },
  {
    id: "business-2",
    slug: "ocean-table",
    name: "Ocean Table",
    category: "Food & Drink",
    description:
      "Illustrative restaurant profile showcasing the directory layout.",
    location: "South Coast, Kenya",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    featured: true,
    sponsored: false,
  },
  {
    id: "business-3",
    slug: "coast-adventures",
    name: "Coast Adventures",
    category: "Experiences",
    description: "Illustrative local experiences listing for the prototype.",
    location: "Diani Beach, Kenya",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
    featured: true,
    sponsored: false,
  },
];

export const getEpisodeBySlug = (slug: string) =>
  episodes.find((episode) => episode.slug === slug);

export const getBusinessBySlug = (slug: string) =>
  businesses.find((business) => business.slug === slug);
