import type { Metadata } from "next";
import { SECURITY_OPTIMIZATION_CONTENT } from "@/config/services/cloudSolutions/securityOptimization";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: SECURITY_OPTIMIZATION_CONTENT.seo.title,
  description: SECURITY_OPTIMIZATION_CONTENT.seo.description,
};

export default function SecurityOptimizationPage() {
  return <ServicePageTemplate content={SECURITY_OPTIMIZATION_CONTENT} />;
}