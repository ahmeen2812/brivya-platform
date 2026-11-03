import type { Metadata } from "next";
import { CLOUD_DEPLOYMENT_CONTENT } from "@/config/services/cloudSolutions/cloudDeployment";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: CLOUD_DEPLOYMENT_CONTENT.seo.title,
  description: CLOUD_DEPLOYMENT_CONTENT.seo.description,
};

export default function CloudDeploymentPage() {
  return <ServicePageTemplate content={CLOUD_DEPLOYMENT_CONTENT} />;
}