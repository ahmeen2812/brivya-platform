import type { Metadata } from "next";
import { AI_AGENTS_CONTENT } from "@/config/services/aiAutomation/aiAgents";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: AI_AGENTS_CONTENT.seo.title,
  description: AI_AGENTS_CONTENT.seo.description,
};

export default function AiAgentsPage() {
  return <ServicePageTemplate content={AI_AGENTS_CONTENT} />;
}