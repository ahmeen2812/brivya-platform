import type { Metadata } from "next";
import { AUDIENCE_OPTIMIZATION_CONTENT } from "@/config/services/metaAds/audienceOptimization";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: AUDIENCE_OPTIMIZATION_CONTENT.seo.title,
  description: AUDIENCE_OPTIMIZATION_CONTENT.seo.description,
};

export default function AudienceOptimizationPage() {
  return <ServicePageTemplate content={AUDIENCE_OPTIMIZATION_CONTENT} />;
}