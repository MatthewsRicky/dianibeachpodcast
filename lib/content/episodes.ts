import type { Episode } from "@/types";

export const episodes: Episode[] = [
  {
    id: "episode-001",
    slug: "life-on-the-south-coast",
    title: "Life on the South Coast",
    excerpt:
      "An introduction to the people, places and experiences that make the South Coast distinctive.",
    description:
      "DEMO CONTENT — Replace this description with an approved episode summary. Add the real audio or video source when available.",
    coverImage: "/images/episodes/episode-placeholder.jpg",
    publishedAt: "2026-09-15",
    duration: "35 min",
    host: "Diani Beach Podcast",
    category: "Community",
    featured: true,
    externalLinks: [],
  },
  {
    id: "episode-002",
    slug: "building-a-business-in-diani",
    title: "Building a Business in Diani",
    excerpt:
      "A sample episode concept exploring entrepreneurship and the local business community.",
    description:
      "DEMO CONTENT — Replace with the verified episode description and recording details.",
    coverImage: "/images/episodes/episode-placeholder.jpg",
    publishedAt: "2026-09-08",
    duration: "28 min",
    category: "Business",
    featured: false,
    externalLinks: [],
  },
  {
    id: "episode-003",
    slug: "coastal-culture-and-community",
    title: "Coastal Culture and Community",
    excerpt:
      "A sample conversation about community, creativity and life along the coast.",
    description:
      "DEMO CONTENT — Replace with the approved episode description.",
    coverImage: "/images/episodes/episode-placeholder.jpg",
    publishedAt: "2026-09-01",
    duration: "42 min",
    category: "Culture",
    featured: false,
    externalLinks: [],
  },
];

export function getEpisodes(): Episode[] {
  return [...episodes].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find((episode) => episode.slug === slug);
}

export function getFeaturedEpisodes(): Episode[] {
  return getEpisodes().filter((episode) => episode.featured);
}

export function getEpisodeCategories(): string[] {
  return [...new Set(episodes.map((episode) => episode.category))].sort();
}
