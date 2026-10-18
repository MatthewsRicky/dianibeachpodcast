export type LivingListItem = {
  id: number;
  title: string;
  completed: boolean;
  note?: string;
};

export const livingList: LivingListItem[] = [
  { id: 1, title: "Become a published author", completed: false },
  { id: 2, title: "Visit Jamaica", completed: false },
  { id: 3, title: "Skydive", completed: false },
  {
    id: 4,
    title: "Learn to speak a second language fluently",
    completed: false,
  },
  { id: 5, title: "Learn to deejay", completed: false },
  { id: 6, title: "Be a Movie Extra", completed: false },
  {
    id: 7,
    title: "Host an album listening party",
    completed: true,
    note: "Did that for Jamaican reggae acts Jah 9 in 2020 and Kelissa in 2018.",
  },
  {
    id: 8,
    title: "Watch the Wildebeest Migration in Masai Mara/Serengeti",
    completed: false,
  },
  { id: 9, title: "Visit Lamu", completed: false },
  { id: 10, title: "Visit Dubai", completed: false },
  { id: 11, title: "Explore China", completed: false },
  { id: 12, title: "Climb Kilimanjaro", completed: false },
  {
    id: 13,
    title: "Attend the Afrochella Festival in Ghana",
    completed: false,
  },
  { id: 14, title: "Visit the Taj Mahal", completed: false },
  { id: 15, title: "Spend New Year's Eve in Times Square", completed: false },
  { id: 16, title: "Go Scuba Diving", completed: false },
  { id: 17, title: "Go kite surfing", completed: false },
  { id: 18, title: "Go kayaking", completed: false },
  { id: 19, title: "Explore Africa by road", completed: false },
  { id: 20, title: "Learn to swim like a pro", completed: false },
  {
    id: 21,
    title: "Go on a Southern African Tour (3+ countries at a time)",
    completed: false,
  },
  {
    id: 22,
    title: "Go on an East African Tour (3+ countries at a time)",
    completed: false,
    note: "Already visited Uganda three times in a row: 2016, 2017 and 2018.",
  },
  {
    id: 23,
    title: "Go on a West Africa Tour (3+ countries at a time)",
    completed: false,
  },
  {
    id: 24,
    title: "Go on a North Africa Tour (3+ countries at a time)",
    completed: false,
  },
  { id: 25, title: "Take a Bike Tour", completed: false },
  {
    id: 26,
    title: "Grow Out My Hair",
    completed: true,
    note: "Already locked my hair.",
  },
  {
    id: 27,
    title:
      "See a Live East African derby in the stadium — AFC Leopards vs Gor Mahia in Kenya, or Yanga FC vs Simba FC in Tanzania",
    completed: false,
  },
  { id: 28, title: "Visit Marrakesh in Morocco", completed: false },
  { id: 29, title: "Visit the pyramids in Egypt", completed: false },
  { id: 30, title: "Visit Costa Rica", completed: false },
  { id: 31, title: "Tour South America by road", completed: false },
  { id: 32, title: "Visit Shashamane in Ethiopia", completed: false },
  { id: 33, title: "Camp in the Sahara desert", completed: false },
  { id: 34, title: "Eat sushi in Tokyo", completed: false },
  { id: 35, title: "Stay at the Giraffe Manor", completed: false },
  { id: 36, title: "Live in a tiny container house", completed: false },
  { id: 37, title: "Build a camper van and tour Kenya", completed: false },
  { id: 38, title: "Explore Northern Kenya", completed: false },
  { id: 39, title: "Visit Rwanda", completed: false },
  {
    id: 40,
    title: "Watch Buju Banton Live",
    completed: true,
    note: "Did that in 2019 at the KICC in Nairobi.",
  },
  { id: 41, title: "Live and work in another country", completed: false },
  { id: 42, title: "Live off grid at one point in my life", completed: false },
  {
    id: 43,
    title: "Live in my lifetime on the beach",
    completed: true,
    note: "Currently living in Diani Beach and curating this blog!",
  },
  {
    id: 44,
    title: "Watch a Marley live in concert",
    completed: true,
    note: "Attended a Damian Marley concert in Nairobi.",
  },
];

export const getCompletedLivingListItems = () =>
  livingList.filter((item) => item.completed);

export const getRemainingLivingListItems = () =>
  livingList.filter((item) => !item.completed);
