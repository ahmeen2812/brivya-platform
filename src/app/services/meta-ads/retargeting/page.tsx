import type { Metadata } from "next";
import { RETARGETING_STRATEGY_CONTENT } from "@/config/services/metaAds/retargetingStrategy";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: RETARGETING_STRATEGY_CONTENT.seo.title,
  description: RETARGETING_STRATEGY_CONTENT.seo.description,
};

export default function RetargetingStrategyPage() {
  return <ServicePageTemplate content={RETARGETING_STRATEGY_CONTENT} />;
}