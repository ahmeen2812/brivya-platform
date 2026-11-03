import type { Metadata } from "next";
import { APPLICATION_DEPLOYMENT_CONTENT } from "@/config/services/cloudSolutions/applicationDeployment";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: APPLICATION_DEPLOYMENT_CONTENT.seo.title,
  description: APPLICATION_DEPLOYMENT_CONTENT.seo.description,
};

export default function ApplicationDeploymentPage() {
  return <ServicePageTemplate content={APPLICATION_DEPLOYMENT_CONTENT} />;
}