export type ArticleImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ArticleContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
      level?: 2 | 3;
    }
  | {
      type: "image";
      image: ArticleImage;
      layout?: "wide" | "inline";
    }
  | {
      type: "gallery";
      images: ArticleImage[];
      columns?: 2 | 3;
    }
  | {
      type: "quote";
      text: string;
      attribution?: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  /**
   * Add the complete article text as an array of paragraphs.
   * Example: ["First paragraph...", "Second paragraph..."]
   */
  content: ArticleContentBlock[];
  publishedAt: string;
  categories: string[];
  author: string;
  sourceUrl: string;
  /**
   * Local image path, e.g. "/images/journal/funky-monkey-menu.jpg".
   * Keep as "" until you add the image to public/images/journal/.
   */
  image: string;
  gallery1?: string[];
  gallery2?: string[];
  gallery3?: string[];
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
    title:
      "Funky Monkey Cocktail Bar Diani New Menu Tasting | Instagram Post Recap",
    subtitle:
      "A few menu tweaks are landing next week: new pairings. New ideas. A few new dishes. A few old ones are gone. Some will stay. Some will go. Others become classics and a few never made it past the tasting spoon.",
    excerpt:
      "A new menu is coming soon. Get ready to discover the next taste of Spanish and Latin America in Diani.",
    content: [
      {
        type: "paragraph",
        text: "First ever Diani spot to land a feature on @theworlds50best Discovery list in 2025, @FunkyMonkeyKenya gathered a few funky friends from Diani around a table on a Thursday night – informal, chatty and overlaid with cool music—reimagining some iconic experiences with exciting new dishes, stunning presentations, and the theatrical flair you’ve come to expect from Funky Monkey.",
      },
      {
        type: "image",
        image: {
          src: "/images/blog/funkymonkey/fm1alternate.webp",
          alt: "article intro image",
        },
        layout: "inline",
      },
      {
        type: "paragraph",
        text: "Shorter menus are now common, even in restaurants with established worldwide reputations.",
      },
      {
        type: "paragraph",
        text: "Funky Monkey’s General Manager, @Kevin.a.d, side-chatted with me about this plus also why working with small producers is key; and why they are intentionally moving this way.",
      },
      {
        type: "paragraph",
        text: "Some plates are small and some are perfect for sharing. Communal dining is low key standing out with this new menu.",
      },
      {
        type: "paragraph",
        text: "An in-house carbonation system, a gluten free bakery and even an oven that can cook meat at designated temperatures are some elements central to this new menu kitchen.",
      },
      {
        type: "paragraph",
        text: "From Mexico, the guacamole and arrow root chips slapped. But it is the baked corn, drizzled with spices that tickled my taste buds and won.",
      },
      {
        type: "paragraph",
        text: "Peru introduced us to ceviche and Funky Monkey’s reimagination with tuna is a favourite among many at the table including @_Sylvianelly seated across from the table in glow and full of Diani beach road runs passion.",
      },
      {
        type: "paragraph",
        text: "Argentina shared its slow-cooked pork ribs, which was a star dish at the tasting. Leave room for the watermelon granita and dark chocolate churros.",
      },
      {
        type: "paragraph",
        text: "A new menu is coming soon. Get ready to discover the next taste of Spanish and Latin America in Diani 🌎",
      },
      {
        type: "paragraph",
        text: "🏆 Faves: corn riblet, quac and chips, watermelon granita and the Funky churros.",
      },
      {
        type: "gallery",
        images: [
          {
            src: "/images/blog/funkymonkey/fm1.webp",
            alt: "gallery image 1",
          },
          {
            src: "/images/blog/funkymonkey/fm2.webp",
            alt: "gallery image 2",
          },
          {
            src: "/images/blog/funkymonkey/fm3.webp",
            alt: "gallery image 3",
          },
          {
            src: "/images/blog/funkymonkey/fm4.webp",
            alt: "gallery image 4",
          },
          {
            src: "/images/blog/funkymonkey/fm5.webp",
            alt: "gallery image 5",
          },
          // {
          // src: "/images/blog/funkymonkey/fm6.webp",
          // alt: "gallery image 6"
          // },
          {
            src: "/images/blog/funkymonkey/fm7.webp",
            alt: "gallery image 7",
          },
          {
            src: "/images/blog/funkymonkey/fm8.webp",
            alt: "gallery image 8",
          },
          {
            src: "/images/blog/funkymonkey/fm9.webp",
            alt: "gallery image 9",
          },
          {
            src: "/images/blog/funkymonkey/fm10.webp",
            alt: "gallery image 10",
          },
          {
            src: "/images/blog/funkymonkey/fm11.webp",
            alt: "gallery image 11",
          },
          {
            src: "/images/blog/funkymonkey/fm12.webp",
            alt: "gallery image 12",
          },
          {
            src: "/images/blog/funkymonkey/fm13.webp",
            alt: "gallery image 13",
          },
          {
            src: "/images/blog/funkymonkey/fm14.webp",
            alt: "gallery image 14",
          },
          {
            src: "/images/blog/funkymonkey/fm15.webp",
            alt: "gallery image 15",
          },
          {
            src: "/images/blog/funkymonkey/fm16.webp",
            alt: "gallery image 16",
          },
          {
            src: "/images/blog/funkymonkey/fm17.webp",
            alt: "gallery image 17",
          },
          {
            src: "/images/blog/funkymonkey/fm18.webp",
            alt: "gallery image 18",
          },
          {
            src: "/images/blog/funkymonkey/fm19.webp",
            alt: "gallery image 19",
          },
          {
            src: "/images/blog/funkymonkey/fm20.webp",
            alt: "gallery image 20",
          },
          {
            src: "/images/blog/funkymonkey/fm21.webp",
            alt: "gallery image 21",
          },
          {
            src: "/images/blog/funkymonkey/fm22.webp",
            alt: "gallery image 22",
          },
          {
            src: "/images/blog/funkymonkey/fm23.webp",
            alt: "gallery image 23",
          },
          {
            src: "/images/blog/funkymonkey/fm24.webp",
            alt: "gallery image 24",
          },
          {
            src: "/images/blog/funkymonkey/fm25.webp",
            alt: "gallery image 25",
          },
          {
            src: "/images/blog/funkymonkey/fm26.webp",
            alt: "gallery image 26",
          },
          {
            src: "/images/blog/funkymonkey/fm27.webp",
            alt: "gallery image 27",
          },
        ],
        columns: 3,
      },
      {
        type: "paragraph",
        text: "🍽️ Name: @FunkyMonkeyKenya",
      },
      {
        type: "paragraph",
        text: "📍Location: Diani Beach Road opposite Tradewinds International School",
      },
      {
        type: "paragraph",
        text: "🌾GF Options: ⁣Yes⁣!",
      },
      {
        type: "paragraph",
        text: "🌱100% vegan business? ⁣No",
      },
      {
        type: "paragraph",
        text: "🍽 Cuisine: Spanish / Latin",
      },
      {
        type: "paragraph",
        text: "📦Leftovers: Yes, took lots home",
      },
      {
        type: "paragraph",
        text: "🌍Sustainability:⁣⁣ They use local suppliers and eco-friendly packaging!",
      },
      {
        type: "paragraph",
        text: "♿️ Wheelchair friendly: No – small step at the entrance, but once inside the courtyard is maneuverable in a wheelchair.",
      },
      {
        type: "paragraph",
        text: "🐶 Dog friendly: Yes",
      },
    ],
    publishedAt: "2026-08-11",
    categories: ["Bars & Nightlife", "Food"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "/images/blog/funky-monkey.webp",
    featured: true,
  },
  {
    id: "old-school-bongo-concert",
    slug: "old-school-bongo-concert-kenyan-coast",
    title:
      "Of Romantic Singalongs on the Beach – The Old School Bongo Concert Making the Kenyan Coast Clubbers Swoon",
    subtitle:
      "On stage at Jacaranda Beach Resort Diani, there is real fire, romantic singalongs and nostalgic East African sound vibes. The slick medley set featured Old School Bongo Concert Africa (OSBCA) deejays playing back to back.",
    excerpt:
      "As Tanzania celebrates 30 years of Bongo Flava and 20 years of Christian Bella's contribution to music and culture, old-school sounds are finding a warm welcome across the border. This is Old School Concert Africa.",
    content: [
      {
        type: "paragraph",
        text: 'Monday 10th August 2026 Diani Beach Kenya – There is no doubt that Coastal Kenya is the citadel of the country’s music. Yet even with the Kenyan coast sounds of Bango and traditional Taarab, favour still leans toward the aesthetic and aptitude of Bongo Flava / Fleva. As we made our way to Jacaranda Beach Hotel Diani a few minutes past 9pm, the mammoth crowd was singing along to Alikiba ‘Conderella’ hit. The DJ smoothly transitioned into Sam wa Ukweli’s ‘Hata kwetu wapo,’ and the energy in the beach venue shifted – phones shot up in the air as everyone prepared to belt out the intro: "Wenye machungu na mabaya sio kwenu tu, ata kwetu wapo. Wapenda ngono na wachawi sio kwenu tu, hata kwetu wapo. Ukichukia sishangai, peace and love."',
      },
      {
        type: "paragraph",
        text: "This is Old School concert Africa, part of a growing concert experience where Mombasa-based deejays focus not on new, uptempo pop Bongo music, but instead on the nostalgic old Bongo Flava sound with a touch of old Kenyan and Ugandan hits, and sometimes with guest artist performances as well. And the concept is proving to be a profound and emotional format in the kenyan coast nightlife.",
      },
      {
        type: "paragraph",
        text: "Consequently, the beach dancefloor was a surreal sight. It was a crescent moon dance night, and the deejays from Lenium to Masha, Sir Ric to the award-winning DJ Wighnit play nothing but old rave records. The crowd welcomed every track like an old friend, blowing their whistles and waving their phone lights as if the last years of Bongo Flava music had never happened.",
      },
      {
        type: "paragraph",
        text: "On their first outing in Diani and flanked by hosts BM Shaxxy, Mr, Vibes Diani, MC Konki and the mic queen Rubeka, OSBCA has hosted parties across Mombasa and cultivated a devoted, cross-generational following. In the VIP section, this young girl who looked to be in her early twenties belted out Ali Kiba single ‘Cinderella’ word for word before surprising me with the same energy while singing ‘Mfalme Wa Amani’ by Solomon Mkubwa word for word. Regardless of age, nostalgia springs eternal.",
      },
      {
        type: "paragraph",
        text: "On their first outing in Diani and flanked by hosts BM Shaxxy, Mr, Vibes Diani, MC Konki and the mic queen Rubeka, OSBCA has hosted parties across Mombasa and cultivated a devoted, cross-generational following. In the VIP section, this young girl who looked to be in her early twenties belted out Ali Kiba single ‘Cinderella’ word for word before surprising me with the same energy while singing ‘Mfalme Wa Amani’ by Solomon Mkubwa word for word. Regardless of age, nostalgia springs eternal.",
      },
      {
        type: "paragraph",
        text: "BM Shaxxy then took the stage to announce the concert’s next date. Saturday December 12th – Jamhuri Day (Independence Day) weekend with no venue announced, the crowd chanted for the concert to return to Diani.",
      },
    ],
    publishedAt: "2026-08-11",
    categories: ["Bars & Nightlife", "Events", "Lifestyle", "Things To Do"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "/images/blog/old-school-bongo-concert.webp",
    featured: true,
  },
  {
    id: "black-2-zanzibar-juneteenth-festival-2026",
    slug: "black-2-zanzibar-juneteenth-festival-2026-in-pictures",
    title: "Black2Zanzibar Juneteenth Festival 2026 – in pictures",
    excerpt:
      "As Tanzania celebrates 30 years of Bongo Flava and 20 years of Christian Bella's contribution to music and culture, old-school sounds are finding a warm welcome across the border. This is Old School Concert Africa.",
    content: [
      {
        type: "paragraph",
        text: "Designed for the diaspora, this curated group experience honors heritage, community, and joy while immersing travelers in the vibrant beauty of Zanzibar. The festival remains a curated cultural journey that honors heritage, community and celebration in one of the Indian Ocean’s most breathtaking destinations. An 8-day group trip filled with East African vibes, cultural immersion, heritage, and unity surrounded by the beauty of East Africa.",
      },
      {
        type: "paragraph",
        text: "At the heart of the 5-day Festival is a soul-stirring celebration of freedom, resilience, and Black excellence. From a Welcome Mixer on arrival day to the Zanzibar Diaspora Investment Summit to a “Welcome To Africa Gala” to a lively Freedom Tide Yacht Day with food, drinks, and vibes on the water, every moment is created to uplift and connect",
      },
      {
        type: "paragraph",
        text: "A Beach Bash “No Chains, Just Waves” because freedom should be celebrated on the sand, in the sun, and with your people. Finally, we close with In the Wild Pool Party Finale experience like none other including food and drinks.",
      },
      {
        type: "paragraph",
        text: "Planned events included:",
      },
      {
        type: "paragraph",
        text: "The “Coming to Africa” Gala: This stunning, elegant opening-night event will include you strutting down a red carpet, enjoying live entertainment, and dining on a delicious meal under the stars.",
      },
      {
        type: "paragraph",
        text: "Freedom Tide Yacht Day (June 19): This celebration of freedom honors Black attendees’ return to African waters on their own terms. Moreover, attendees will do so on yachts in a joyous and celebratory fashion. Expect good music (Afrobeats, Hip Hop, Amapiano, and Dancehall) and the vibrant energy of Black joy.",
      },
      {
        type: "paragraph",
        text: "Karaoke & Nighttime Celebration (on the night of Juneteenth): The group will head to an African American–owned restaurant to sing their hearts out to beloved tunes.",
      },
      {
        type: "paragraph",
        text: "The Zanzibar Diaspora Investment Summit (June 20): This summit will bring together Black2Zanzibar attendees, local expats, investors, bankers, and professionals. The focus will be on sharing practical information about investing in property and doing business in East Africa. Discussions will revolve around long-term opportunities in Africa, including investment and entrepreneurship.",
      },
      {
        type: "paragraph",
        text: "The Finale Bash — Private Beach Club Takeover (June 20): Prepare to show off your best dance moves while on the beach during an epic party.",
      },
      {
        type: "paragraph",
        text: "Regarding why they chose Tanzania as the host country for Black2Zanzibar’s inaugural June event, Black2Zanzibar co-founder Chanice Williams talking to Travel Noire said the East African nation is approachable for tourism, bubbling with culture, and absolutely stunning.",
      },
      {
        type: "paragraph",
        text: "“Many travelers from the diaspora are familiar with West Africa. So we wanted to help shine a light on East Africa, which has its own incredible history, culture, and beauty. Tanzania offers such a unique mix of experiences,” Williams explained.",
      },
      {
        type: "paragraph",
        text: "“What I personally love most about Tanzania is the calm energy and the warmth of the people,” she added. “It’s a welcoming place that feels approachable for travelers who may be visiting Africa for the first time. At the same time, it offers everything many travelers are looking for — beautiful beaches, rich culture and history, great food, vibrant nightlife, and a strong sense of safety and hospitality.”",
      },
    ],
    publishedAt: "2026-08-11",
    categories: ["Bars & Nightlife", "Events", "Lifestyle", "Things To Do"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "/images/blog/old-school-bongo-concert.webp",
    featured: true,
  },
  {
    id: "diani-film-festival-day-three",
    slug: "hope-community-film-workshops-diani-international-film-festival",
    title:
      "Hope, Community and Film Workshops: Day Three at Diani International Film Festival | Review",
    excerpt:
      "The second edition of the Diani International Film Festival runs from July 24 to August 3, with events across Diani Beach, Mombasa and Nairobi and an opening celebration of cinema and African culture at Alliance Safari Beach Hotel.",
    content: [
      {
        type: "paragraph",
        text: "Monday 27th July, 2026 – “Don’t be afraid. “Keep on filming,” proclaims Rev. Dr. Chris Hesse, a 93-year-old Ghanaian cinematographer and archivist. Widely regarded as the living film professor and visual chronicler of Ghana’s independence era, he served as the personal cameraman to Ghana’s first President, Osagyefo Dr. Kwame Nkrumah. The 24-frames-per-second, quick-snippet documentary, seen by audiences for the first time on the opening night of Diani International Film Festival under the rising moon by the Indian Ocean on Diani beach, celebrates Ghana’s pioneering cinematic legacy.",
      },
      {
        type: "paragraph",
        text: "The second edition of the Diani International Film Festival running from July 24 to August 3 features a number of events across Diani Beach, Mombasa and Nairobi, opening at Alliance Safari Beach Hotel in celebration of cinema and African culture. Film maker Chloe Keleny film which had ben slated for the opening night could not be screened due to a last minute prmit hitch. Punga Upepo follows the making of a traditional ngalawa sailing boat on the Kenyan coast, and the people connected to it: artist Pie Herring, local boatbuilders, fishermen, and the Makongeni Beekeepers – Kwale county. Set between Chale Island, Makongeni village and the waters of Diani, the film explores how culture, community, and environmental stewardship are deeply connected",
      },
      {
        type: "paragraph",
        text: "‘The Eyes Of Ghana,’ executive produced by The Obamas, traces Hesse’s extraordinary effort to preserve more than 1,300 reels of archival footage documenting Ghana’s independence era and Africa’s broader liberation movement. The film reveals another life of Nkrumah and his passion for film and telling African stories. Nkrumah, a a great lover of cinema and recognised the extraordinary political power of film. Director Ben Proudfoot (“The Last Repair Shop”) and the film’s secondary subject, filmmaker Anita Afonu,who both made it to the festival on a zoom call broadcast to answer a Q&A with the Diani Beach audience give a context to a complicated footprint in African history with the film.",
      },
      {
        type: "paragraph",
        text: "This year’s edition featured an opening art gallery by Verdianne Heri who works with the medium of shells collected from the beach, dubbed Mkuki. This year, the festival celebrates major achievements, including Martin Scorsese being named Jury President of the African Short Film Competition. Scorsese is an American director, producer, screenwriter, actor, and film historian. The African Short Film category is expected to feature both established and emerging directors, with renowned Kenyan Media personality Adelle Onyango among the filmmakers shortlisted in the category for her work on “Home.” ",
      },
      {
        type: "paragraph",
        text: "One of the most striking aspects of this year’s program is the diversity of the film selection. Director Emmanuel Gras (set to host a workshop at the festival) leads day two with his immersive documentary, ‘Makala.’ Gras on his dizzying camera follows a Congolese charcoal maker trekking over 40km on his pushbike to sell the charcoal that he has stripped and smoked himself.",
      },
      {
        type: "paragraph",
        text: "2024 Sundance Amazon MGM Non-Fiction Producer Prize winner, Toni Kamau, leads day three with ‘The Battle for Laikipia’ – exploring the conflict fueled by a climate crisis between the nomadic pastoralist Samburu people, a community that has always moved with and grazed cattle and goats on the land, and the third- and fourth-generation European settlers who own ranches and conservancies in the northern Laikipia region.",
      },
      {
        type: "paragraph",
        text: "As Diani beach continues to position itself as a cultural and creative hub on the East African coast, community, creativity, history, film, and education remain central to the Diani International Film Festival conversation even with rumored talks of next year’s festival screening earlier in the year.",
      },
    ],
    publishedAt: "2026-07-27",
    categories: ["Events", "Film", "Culture"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "/images/blog/dianifilmfestival.heic",
  },
  {
    id: "nomad-breakfast-review",
    slug: "breakfast-at-nomad-beach-bar-restaurant",
    title: "Review: Breakfast at Nomad Beach Bar & Restaurant",
    subtitle: "Some mornings aren’t meant to be rushed.",
    excerpt:
      "Nestled on the white sands of Diani Beach, Nomad has long mastered the art of slow coastal living. Its menu celebrates fresh local ingredients, global inspiration and dishes that let the produce shine.",
    content: [
      {
        type: "paragraph",
        text: "They’re meant for slow coffee, good conversations, ocean breezes and a breakfast worth waking up for. 🌊✨",
      },
      {
        type: "paragraph",
        text: "Nestled on the white sands of Diani Beach, @Nomadbeachbarhas long mastered the art of slow coastal living. Their menu celebrates the best of the coast—fresh local ingredients, global inspiration, and dishes that let the produce do the talking. 🥗🍍",
      },
      {
        type: "paragraph",
        text: "This morning, I went for their vegan breakfast platter… and legendary isn’t an exaggeration. 🌱👌🏾 Every bite was fresh, colourful and beautifully put together.",
      },
      {
        type: "paragraph",
        text: "Across the table, my colleague @Latoyaflows was happily diving into her oozy eggs 🍳 while we caffeinated, scribbled through our notes, and prepared for another day hosting a corporate retreat at the Nomad Beach Resort Villas.",
      },
      {
        type: "paragraph",
        text:
          "Even Oliver Mzungu; the Operations Manager, joined us for breakfast—a reminder that great hospitality often starts with people who genuinely love the spaces they create. 🤍" +
          "And if you’re staying at the resort…",
      },
      {
        type: "paragraph",
        text: "Their all-inclusive breakfast buffet is one of Diani’s quiet luxuries.",
      },
      {
        type: "paragraph",
        text: "What I also love is Nomad’s commitment to sustainability. 🌿 Their organic farm supplies seasonal produce directly to the kitchen, supporting local farmers while reducing food miles. Guests can even purchase their fresh, pesticide-free harvests to take home. 🍅🥬",
      },
      {
        type: "paragraph",
        text: "It’s thoughtful hospitality—from farm to fork. 🌍💚",
      },
      {
        type: "paragraph",
        text: "📍 @Nomadbeachbar x @NomadBeachResort",
      },
      {
        type: "paragraph",
        text: "🕡 Open daily",
      },
      {
        type: "paragraph",
        text: "🍽️ Cuisine: International casual dining, fresh seafood, Italian pizzas & an excellent wine selection 🍷",
      },
      {
        type: "paragraph",
        text: "🌾 Gluten-free options available",
      },
      {
        type: "paragraph",
        text: "🌱 100% Vegan? No",
      },
      {
        type: "paragraph",
        text: "♿ Wheelchair friendly",
      },
      {
        type: "paragraph",
        text: "📦 Takeaway available",
      },
      {
        type: "paragraph",
        text: "One breakfast closer to understanding why Nomad remains one of Diani’s classics. 🌴💙",
      },
    ],
    publishedAt: "2026-07-16",
    categories: ["Food", "Things To Do"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "/images/blog/breakfast-review.webp",
    featured: true,
  },
  {
    id: "java-house-diani",
    slug: "java-house-diani-where-good-ideas-find-a-table",
    title: "Java House Diani - Where good ideas find a table",
    subtitle: "Some restaurants are for grabbing lunch..",
    excerpt:
      "A busy afternoon brought a little wait at Java House Diani. The restaurant was full and the team was working hard to keep up, but once lunch arrived, everyone tucked in happily.",
    content: [
      {
        type: "paragraph",
        text: "Java House Diani was the latter for us a few weeks ago.",
      },
      {
        type: "paragraph",
        text: "Three creatives around one table, swapping stories, sketching ideas, and talking through a new space Josh is quietly bringing to life. There’s something about sharing a meal that slows time just enough for ideas to breathe.",
      },
      {
        type: "paragraph",
        text: "It was a busy afternoon, so lunch took a little longer to arrive. The restaurant was full, and the team was clearly working hard to keep up. Once the food landed, though, everyone tucked in happily.",
      },
      {
        type: "paragraph",
        text: "I went for the Vegan Burger—always a dependable choice when I’m craving something hearty and plant-based.",
      },
      {
        type: "paragraph",
        text: "@JoshKisamwa ordered the Chicken Sandwich; while",
      },
      {
        type: "paragraph",
        text: "@BandeleZuberi went for the Rice Chicken with a fresh kachumbari salad",
      },
      {
        type: "paragraph",
        text: "No coffee this time. ",
      },
      {
        type: "paragraph",
        text: "Just a few cold sodas ",
      },
      {
        type: "paragraph",
        text: "to keep the conversations flowing as the hot Diani afternoon unfolded.",
      },
      {
        type: "paragraph",
        text: "Java continues to be one of those dependable spots in Diani where creatives, freelancers, friends and travellers naturally find themselves crossing paths. Whether you’re meeting clients, catching up with old friends or simply escaping the heat for a good meal, it always feels like there’s room for one more conversation.",
      },
      {
        type: "paragraph",
        text: "Here’s to the ideas that begin over lunch.",
      },
    ],
    publishedAt: "2026-07-16",
    categories: ["Food"],
    author: "Embukane Libosso",
    sourceUrl: sourceHome,
    image: "/images/blog/java.webp",
  },
  {
    id: "burger-battle-meeting-point-madafoos",
    slug: "the-burger-battle-meeting-point-vs-madafoos-in-diani",
    title: "The Burger Battle: Meeting Point vs Madafoos in Diani",
    excerpt:
      "Every beach town deserves a great burger. This visit to Meeting Point Diani explores its Turkish and international favourites, from shawarmas and kebabs to pizzas and smash burgers, as the search for Diani's best continues.",
    content: [
      {
        type: "paragraph",
        text: "",
      },
      {
        type: "paragraph",
        text: "",
      },
      {
        type: "paragraph",
        text: "",
      },
      {
        type: "paragraph",
        text: "",
      },
      {
        type: "paragraph",
        text: "",
      },
      {
        type: "paragraph",
        text: "",
      },
      {
        type: "paragraph",
        text: "",
      },
      {
        type: "paragraph",
        text: "",
      },
      {
        type: "paragraph",
        text: "",
      },
    ],
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
    categories: [
      "Diani Life Hacks",
      "Events",
      "Lifestyle",
      "Things To Do",
      "Travel",
    ],
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
    title:
      "Discover Mombasa's Deck 270: The Ultimate Tapas Experience | Restaurant Review",
    excerpt:
      "With panoramic ocean views, Deck 270 offers a setting for spectacular sunrises and sunsets. The experience feels like settling into a luxury cruise ship ready to voyage.",
    content: [],
    publishedAt: "2026-06-06",
    categories: [
      "Bars & Nightlife",
      "Food",
      "Lifestyle",
      "Things To Do",
      "Travel",
    ],
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
    categories: [
      "Bars & Nightlife",
      "Food",
      "Lifestyle",
      "The Audio X",
      "Things To Do",
      "Travel",
    ],
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
  return Array.from(
    new Set(blogPosts.flatMap((post) => post.categories)),
  ).sort();
}
export function getFeaturedBlogPost() {
  return blogPosts.find((post) => post.featured) ?? blogPosts[0];
}

export function getLatestBlogPosts(limit = 4) {
  return [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}
