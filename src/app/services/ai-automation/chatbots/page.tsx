import type { Metadata } from "next";
import { AI_CHATBOTS_CONTENT } from "@/config/services/aiAutomation/aiChatbots";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: AI_CHATBOTS_CONTENT.seo.title,
  description: AI_CHATBOTS_CONTENT.seo.description,
};

export default function ChatbotsPage() {
  return <ServicePageTemplate content={AI_CHATBOTS_CONTENT} />;
}