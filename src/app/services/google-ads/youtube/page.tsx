import type { Metadata } from "next";
import { YOUTUBE_ADS_CONTENT } from "@/config/services/youtubeAds";

// Feature Components
import { YoutubeHero } from "@/components/services/google-ads/youtube/YoutubeHero";
import { YoutubeFeaturedCard } from "@/components/services/google-ads/youtube/YoutubeFeaturedCard";
import { YoutubeSupportingCards } from "@/components/services/google-ads/youtube/YoutubeSupportingCards";
import { YoutubeOfficialResources } from "@/components/services/google-ads/youtube/YoutubeOfficialResources";
import { YoutubeFaq } from "@/components/services/google-ads/youtube/YoutubeFaq";
import { YoutubeCta } from "@/components/services/google-ads/youtube/YoutubeCta";

import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: YOUTUBE_ADS_CONTENT.seo.title,
  description: YOUTUBE_ADS_CONTENT.seo.description,
};

export default function YouTubeAdsPage() {
  return (
    <div className="relative w-full overflow-x-clip bg-[#F4F7FC]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 md:pt-8 pb-16 sm:pb-20">
        {/* 01. Hero Section (Image on Left, Content on Right) */}
        <YoutubeHero />

        {/* 02. Main Featured Service Card (Master Substrate) */}
        <YoutubeFeaturedCard />

        {/* 03. Supporting Service Cards (Alternating Layout with 2 Images) */}
        <YoutubeSupportingCards />

        {/* 04. Official YouTube Advertising Resources (4 Boxes with Enlarged 98px Badges) */}
        <YoutubeOfficialResources />

        {/* 05. Frequently Asked Questions (Animated Accordion) */}
        <YoutubeFaq />

        {/* 06. Final Call to Action (Unfilled Bordered Layout) */}
        <YoutubeCta />
      </div>

      {/* Official Brivya Footer */}
      <Footer />
    </div>
  );
}