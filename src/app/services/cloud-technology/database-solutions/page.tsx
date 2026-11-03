import type { Metadata } from "next";
import { DATABASE_SOLUTIONS_CONTENT } from "@/config/services/cloudSolutions/databaseSolutions";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: DATABASE_SOLUTIONS_CONTENT.seo.title,
  description: DATABASE_SOLUTIONS_CONTENT.seo.description,
};

export default function DatabaseSolutionsPage() {
  return <ServicePageTemplate content={DATABASE_SOLUTIONS_CONTENT} />;
}