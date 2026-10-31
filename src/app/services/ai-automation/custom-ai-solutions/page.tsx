import type { Metadata } from "next";
import { CUSTOM_AI_SOLUTIONS_CONTENT } from "@/config/services/aiAutomation/customAiSolutions";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: CUSTOM_AI_SOLUTIONS_CONTENT.seo.title,
  description: CUSTOM_AI_SOLUTIONS_CONTENT.seo.description,
};

export default function CustomAiSolutionsPage() {
  return <ServicePageTemplate content={CUSTOM_AI_SOLUTIONS_CONTENT} />;
}