export type MediaSource = {
  provider: "youtube" | "spotify" | "direct" | "external";
  url: string;
  embedUrl?: string;
};

export type Episode = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  coverImage: string;
  publishedAt: string;
  duration?: string;
  host?: string;
  guest?: string;
  category: string;
  audio?: MediaSource;
  video?: MediaSource;
  externalLinks: {
    label: string;
    url: string;
  }[];
  featured?: boolean;
};

export type Business = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  location: string;
  image: string;
  website?: string;
  phone?: string;
  whatsapp?: string;
  featured?: boolean;
  sponsored?: boolean;
};

export type Event = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  venue: string;
  startsAt: string;
  endsAt?: string;
  ticketUrl?: string;
};

export type ClassifiedListing = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  location: string;
  price?: number;
  currency?: "KES";
  contactUrl?: string;
  expiresAt?: string;
};

export type Advertisement = {
  id: string;
  title: string;
  image: string;
  destinationUrl: string;
  placement: "homepage" | "directory" | "podcast" | "sidebar";
  startsAt?: string;
  endsAt?: string;
  sponsored: true;
};
