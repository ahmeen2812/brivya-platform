import type { Metadata } from "next";
import { FACEBOOK_ADS_CONTENT } from "@/config/services/metaAds/facebookAds";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: FACEBOOK_ADS_CONTENT.seo.title,
  description: FACEBOOK_ADS_CONTENT.seo.description,
};

export default function FacebookAdsPage() {
  return <ServicePageTemplate content={FACEBOOK_ADS_CONTENT} />;
}