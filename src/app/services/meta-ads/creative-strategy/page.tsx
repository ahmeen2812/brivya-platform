import type { Metadata } from "next";
import { CREATIVE_STRATEGY_CONTENT } from "@/config/services/metaAds/creativeStrategy";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: CREATIVE_STRATEGY_CONTENT.seo.title,
  description: CREATIVE_STRATEGY_CONTENT.seo.description,
};

export default function CreativeStrategyPage() {
  return <ServicePageTemplate content={CREATIVE_STRATEGY_CONTENT} />;
}