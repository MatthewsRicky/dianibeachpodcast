import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedEpisode } from "@/components/home/FeaturedEpisode";
import { LatestEpisodes } from "@/components/home/LatestEpisodes";
import { ExploreSection } from "@/components/home/ExploreSection";
import { FeaturedBusinesses } from "@/components/home/FeaturedBusinesses";
import { AdvertisingBanner } from "@/components/home/AdvertisingBanner";

export const metadata: Metadata = {
  title: "Diani Beach Podcast | Stories of the South Coast",
  description:
    "Discover conversations, local businesses, food, culture and experiences from Diani Beach and Kenya's South Coast.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedEpisode />
      <LatestEpisodes />
      <ExploreSection />
      <FeaturedBusinesses />
      <AdvertisingBanner />
    </>
  );
}
