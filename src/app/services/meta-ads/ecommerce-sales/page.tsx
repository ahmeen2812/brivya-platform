import type { Metadata } from "next";
import { ECOMMERCE_SALES_CONTENT } from "@/config/services/metaAds/ecommerceSales";
import { ServicePageTemplate } from "@/components/services/template/ServicePageTemplate";

export const metadata: Metadata = {
  title: ECOMMERCE_SALES_CONTENT.seo.title,
  description: ECOMMERCE_SALES_CONTENT.seo.description,
};

export default function EcommerceSalesPage() {
  return <ServicePageTemplate content={ECOMMERCE_SALES_CONTENT} />;
}