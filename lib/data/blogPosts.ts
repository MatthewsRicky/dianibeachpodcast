export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  /**
   * Add the complete article text as an array of paragraphs.
   * Example: ["First paragraph...", "Second paragraph..."]
   */
  content: string[];
  publishedAt: string;
  categories: string[];
  author: string;
  sourceUrl: string;
  /**
   * Local image path, e.g. "/images/journal/funky-monkey-menu.jpg".
   * Keep as "" until you add the image to public/images/journal/.
   */
  image: string;
  featured?: boolean;
};

const sourceHome = "https://dianibeachpodcast.wordpress.com/home-2/";
const audioXCategory =
  "https://dianibeachpodcast.wordpress.com/category/the-audio-x/";

/**
 * Editorial content imported as titles and short introductions for the
 * Diani Beach Podcast modernization demo.
 *
 * `content` is intentionally empty: paste the complete article text into
 * each array when you are ready. `image` is intentionally empty until you
 * add your own local image files under public/images/journal/.
 *
 * `sourceUrl` points to the source page/category when an individual article
 * URL has not been confirmed. Replace it with the exact article URL if desired.
 */
export const blogPosts: BlogPost[] = [
  {
    id: "funky-monkey-new-menu",
    slug: "funky-monkey-cocktail-bar-diani-new-menu-tasting",
    title: "Funky Monkey Cocktail Bar Diani New Menu Tasting | Instagram Post Recap",
    excerpt:
      "A new menu is coming soon. Get ready to discover the next taste of Spanish and Latin America in Diani.",
    content: [],
    publishedAt: "2026-08-11",
    categories: ["Bars & Nightlife", "Food"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
    featured: true,
  },
  {
    id: "old-school-bongo-concert",
    slug: "old-school-bongo-concert-kenyan-coast",
    title:
      "Of Romantic Singalongs on the Beach – The Old School Bongo Concert Making the Kenyan Coast Clubbers Swoon",
    excerpt:
      "As Tanzania celebrates 30 years of Bongo Flava and 20 years of Christian Bella's contribution to music and culture, old-school sounds are finding a warm welcome across the border. This is Old School Concert Africa.",
    content: [],
    publishedAt: "2026-08-11",
    categories: ["Bars & Nightlife", "Events", "Lifestyle", "Things To Do"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
    featured: true,
  },
  {
    id: "black2zanzibar-juneteenth-2026",
    slug: "black2zanzibar-juneteenth-festival-2026-in-pictures",
    title: "Black2Zanzibar Juneteenth Festival 2026 – in pictures",
    excerpt:
      "An eight-day group trip celebrating East African culture, heritage, community and unity in one of the Indian Ocean's most breathtaking destinations.",
    content: [],
    publishedAt: "2026-07-29",
    categories: ["Events", "Culture", "Travel"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
  },
  {
    id: "diani-film-festival-day-three",
    slug: "hope-community-film-workshops-diani-international-film-festival",
    title:
      "Hope, Community and Film Workshops: Day Three at Diani International Film Festival | Review",
    excerpt:
      "The second edition of the Diani International Film Festival runs from July 24 to August 3, with events across Diani Beach, Mombasa and Nairobi and an opening celebration of cinema and African culture at Alliance Safari Beach Hotel.",
    content: [],
    publishedAt: "2026-07-27",
    categories: ["Events", "Film", "Culture"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
  },
  {
    id: "nomad-breakfast-review",
    slug: "breakfast-at-nomad-beach-bar-restaurant",
    title: "Review: Breakfast at Nomad Beach Bar & Restaurant",
    excerpt:
      "Nestled on the white sands of Diani Beach, Nomad has long mastered the art of slow coastal living. Its menu celebrates fresh local ingredients, global inspiration and dishes that let the produce shine.",
    content: [],
    publishedAt: "2026-07-16",
    categories: ["Food", "Things To Do"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
    featured: true,
  },
  {
    id: "java-house-diani",
    slug: "java-house-diani-where-good-ideas-find-a-table",
    title: "Java House Diani - Where good ideas find a table",
    excerpt:
      "A busy afternoon brought a little wait at Java House Diani. The restaurant was full and the team was working hard to keep up, but once lunch arrived, everyone tucked in happily.",
    content: [],
    publishedAt: "2026-07-16",
    categories: ["Food"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
  },
  {
    id: "burger-battle-meeting-point-madafoos",
    slug: "the-burger-battle-meeting-point-vs-madafoos-in-diani",
    title: "The Burger Battle: Meeting Point vs Madafoos in Diani",
    excerpt:
      "Every beach town deserves a great burger. This visit to Meeting Point Diani explores its Turkish and international favourites, from shawarmas and kebabs to pizzas and smash burgers, as the search for Diani's best continues.",
    content: [],
    publishedAt: "2026-07-16",
    categories: ["Food", "Things To Do"],
    author: "Embukane Libosso",
    sourceUrl:
      "https://dianibeachpodcast.wordpress.com/2026/07/16/the-burger-battle-meeting-point-vs-madafoos-in-diani/",
    image: "",
  },
  {
    id: "non-solo-gelato-cafes",
    slug: "best-cafes-in-diani-non-solo-gelato-review",
    title: "Best Cafes in Diani: Non Solo Gelato Review",
    excerpt:
      "Non Solo Gelato brings a little slice of Italy to the Kenyan coast, serving gelato, artisan pastries, coffee, breakfast, lunch and Italian-inspired comfort food. It is more than an ice-cream stop; it is a café to settle into at any time of day.",
    content: [],
    publishedAt: "2026-07-16",
    categories: ["Food", "Things To Do"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
  },
  {
    id: "bag-diani-2026-review",
    slug: "the-bag-diani-2026-review-dj-lyta-hot-grabba",
    title:
      "The B.A.G Diani 2026 Review: DJ Lyta Brings a Nostalgic “Hot Grabba” Party to The Beach",
    excerpt:
      "Two days of food, friends, coconut water and sounds ranging from Amapiano and Afrobeats to reggae and dancehall made The B.A.G a celebration of contemporary East African youth culture on the beach.",
    content: [],
    publishedAt: "2026-07-06",
    categories: ["Bars & Nightlife", "Events", "Lifestyle", "Music"],
    author: "Embukane Libosso",
    sourceUrl:
      "https://dianibeachpodcast.wordpress.com/2026/07/06/the-b-a-g-diani-2026-review-dj-lyta-brings-a-nostalgic-hot-grabba-party-to-the-beach/",
    image: "",
    featured: true,
  },
  {
    id: "oodles-garden-syokimau",
    slug: "discover-family-friendly-dining-at-oodles-garden-syokimau",
    title: "Discover Family-Friendly Dining at Oodles Garden Syokimau",
    excerpt:
      "A family-friendly setting and an interesting mix of dishes make this dining stop worth exploring. The platter invites diners to sample a range of flavours together.",
    content: [],
    publishedAt: "2026-07-06",
    categories: ["Food", "Lifestyle", "Travel"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
  },
  {
    id: "bag-survival-guide",
    slug: "the-bag-survival-guide-diani-edition",
    title: "The B.A.G. Survival Guide — Diani Edition",
    excerpt:
      "Inside this B.A.G are beautiful strangers who become familiar faces, DJs who understand the assignment, sunsets worth applauding, and conversations that last longer than the night.",
    content: [],
    publishedAt: "2026-07-06",
    categories: ["Diani Life Hacks", "Events", "Lifestyle", "Things To Do", "Travel"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
  },
  {
    id: "cjs-breakfast-combos",
    slug: "cjs-breakfast-combos-on-the-go-review",
    title: "CJ's Breakfast Combos on the go review: a Mombasa Must-Try",
    excerpt:
      "A stop at CJ's in The Promenade Mall, Nyali, while travelling towards Vipingo turned into a discovery of the restaurant's breakfast combos.",
    content: [],
    publishedAt: "2026-06-06",
    categories: ["Food", "Lifestyle", "Travel"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
  },
  {
    id: "deck-270-mombasa",
    slug: "discover-mombasas-deck-270-the-ultimate-tapas-experience",
    title: "Discover Mombasa's Deck 270: The Ultimate Tapas Experience | Restaurant Review",
    excerpt:
      "With panoramic ocean views, Deck 270 offers a setting for spectacular sunrises and sunsets. The experience feels like settling into a luxury cruise ship ready to voyage.",
    content: [],
    publishedAt: "2026-06-06",
    categories: ["Bars & Nightlife", "Food", "Lifestyle", "Things To Do", "Travel"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
  },
  {
    id: "pallet-cafe-farewell",
    slug: "goodbye-pallet-cafe-lavington-a-heartfelt-farewell",
    title: "Goodbye Pallet Cafe Lavington: A Heartfelt Farewell",
    excerpt:
      "A heartfelt farewell to Pallet Cafe Lavington, remembered through the stories of friends and the special place the Pallet Cafe name holds in the writer's memories of food and shared celebrations.",
    content: [],
    publishedAt: "2026-05-19",
    categories: ["Food", "Lifestyle", "Things To Do", "Travel"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
  },
  {
    id: "coral-beach-bar",
    slug: "coral-beach-bar-restaurant-a-culinary-gem-in-diani-beach",
    title: "Coral Beach Bar & Restaurant: A Culinary Gem in Diani Beach",
    excerpt:
      "A seaside restaurant in Diani where the food can be so compelling that you may find yourself lingering at the table instead of heading straight to the beach.",
    content: [],
    publishedAt: "2026-05-19",
    categories: ["Bars & Nightlife", "Food", "Lifestyle", "The Audio X", "Things To Do", "Travel"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
  },
  {
    id: "mijikenda-sounds-baobabs",
    slug: "exploring-mijikenda-sounds-at-baobabs-studios",
    title: "Exploring Mijikenda Sounds at Baobabs Studios",
    excerpt:
      "Episode 9 of Pwani Viungo explores a project dedicated to preserving Mijikenda traditional sounds and music, with a visit to Baobabs Studios in Kilifi.",
    content: [],
    publishedAt: "2026-05-17",
    categories: ["The Audio X", "Music", "Culture"],
    author: "Embukane Libosso",
    sourceUrl: audioXCategory,
    image: "",
    featured: true,
  },
  {
    id: "twali-modern-life",
    slug: "navigate-modern-life-with-clarity-a-conversation-with-twali",
    title: "Navigate Modern Life with Clarity: A Conversation with Twali",
    excerpt:
      "A conversation about navigating modern life with greater clarity, exploring personal growth, purpose and the choices that shape how we live.",
    content: [],
    publishedAt: "2026-05-17",
    categories: ["The Audio X", "Lifestyle", "Podcast"],
    author: "Embukane Libosso",
    sourceUrl: audioXCategory,
    image: "",
    featured: true,
  },
  {
    id: "nalka-cafe-mombasa",
    slug: "discover-nalka-cafe-a-hidden-gem-in-old-town-mombasa",
    title: "Discover Nalka Café: A Hidden Gem in Old Town Mombasa",
    excerpt:
      "Today we wandered into Nalka, a new café that feels as though it has been here forever. Swahili spices fill the air, the decor tells stories, and every plate feels like a little piece of home.",
    content: [],
    publishedAt: "2026-05-17",
    categories: ["Food", "The Audio X", "Travel"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "",
  },
  {
    id: "treesha-kenya-germany",
    slug: "treesha-from-kenya-to-germany-roots-reggae-identity",
    title: "Treesha: From Kenya to Germany | Roots, Reggae & Identity",
    excerpt:
      "A conversation exploring Treesha's journey from Kenya to Germany, and the relationship between roots, reggae, identity and a life shaped across cultures.",
    content: [],
    publishedAt: "2026-05-17",
    categories: ["The Audio X", "Music", "Culture"],
    author: "Embukane Libosso",
    sourceUrl: audioXCategory,
    image: "",
    featured: true,
  },
  {
    id: "tribearth-season-finale",
    slug: "pwani-viungo-season-2-finale-tribearth-reflections",
    title: "Pwani Viungo Season 2 Finale: Reflections at Tribearth Vegan Café",
    excerpt:
      "The Season 2 finale reflects on freedom, self-connection and coastal life, with Tribearth providing the setting for a conversation about the journey so far.",
    content: [],
    publishedAt: "2026-05-17",
    categories: ["The Audio X", "Podcast", "Lifestyle"],
    author: "Embukane Libosso",
    sourceUrl: audioXCategory,
    image: "",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPosts() {
  return blogPosts.filter((post) => post.featured);
}

export function getBlogCategories() {
  return Array.from(new Set(blogPosts.flatMap((post) => post.categories))).sort();
}
