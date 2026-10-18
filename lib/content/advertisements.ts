import type { Advertisement } from "@/types";

export const advertisements: Advertisement[] = [
  {
    id: "advertisement-001",
    title: "Sample Homepage Sponsor",
    image: "/images/editorial/advertisement-placeholder.jpg",
    destinationUrl: "/advertise",
    placement: "homepage",
    sponsored: true,
  },
  {
    id: "advertisement-002",
    title: "Sample Directory Sponsor",
    image: "/images/editorial/advertisement-placeholder.jpg",
    destinationUrl: "/advertise",
    placement: "directory",
    sponsored: true,
  },
];

export function getAdvertisements(): Advertisement[] {
  return [...advertisements];
}

export function getAdvertisementsByPlacement(
  placement: Advertisement["placement"],
): Advertisement[] {
  const now = Date.now();

  return advertisements.filter((advertisement) => {
    if (advertisement.placement !== placement) return false;

    if (
      advertisement.startsAt &&
      new Date(advertisement.startsAt).getTime() > now
    ) {
      return false;
    }

    if (
      advertisement.endsAt &&
      new Date(advertisement.endsAt).getTime() < now
    ) {
      return false;
    }

    return true;
  });
}
