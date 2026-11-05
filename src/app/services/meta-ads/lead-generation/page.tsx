import type { Metadata } from "next";
import { LEAD_GENERATION_CONTENT } from "@/config/services/metaAds/leadGeneration";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: LEAD_GENERATION_CONTENT.seo.title,
  description: LEAD_GENERATION_CONTENT.seo.description,
};

export default function LeadGenerationPage() {
  return <ServicePageTemplate content={LEAD_GENERATION_CONTENT} />;
}