import type { Metadata } from "next";
import { INSTAGRAM_ADS_CONTENT } from "@/config/services/metaAds/instagramAds";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: INSTAGRAM_ADS_CONTENT.seo.title,
  description: INSTAGRAM_ADS_CONTENT.seo.description,
};

export default function InstagramAdsPage() {
  return <ServicePageTemplate content={INSTAGRAM_ADS_CONTENT} />;
}