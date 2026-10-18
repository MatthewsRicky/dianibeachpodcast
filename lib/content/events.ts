import type { Event } from "@/types";

export const events: Event[] = [
  {
    id: "event-001",
    slug: "sample-community-gathering",
    title: "Sample Community Gathering",
    description:
      "DEMO EVENT — Replace with a confirmed event, venue, date and organiser information.",
    image: "/images/events/event-placeholder.jpg",
    venue: "Diani Beach, Kenya",
    startsAt: "2026-11-15T10:00:00+03:00",
    endsAt: "2026-11-15T16:00:00+03:00",
  },
  {
    id: "event-002",
    slug: "sample-creative-market",
    title: "Sample Creative Market",
    description:
      "DEMO EVENT — Replace with verified event details before publication.",
    image: "/images/events/event-placeholder.jpg",
    venue: "Ukunda, Kenya",
    startsAt: "2026-12-05T09:00:00+03:00",
    endsAt: "2026-12-05T17:00:00+03:00",
  },
];

export function getEvents(): Event[] {
  return [...events].sort(
    (a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime(),
  );
}

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((event) => event.slug === slug);
}

export function getUpcomingEvents(now = new Date()): Event[] {
  return getEvents().filter((event) => new Date(event.startsAt) >= now);
}
