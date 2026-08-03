import type { Metadata } from "next";
import { SLIDES_ADDIN_CONTENT } from "@/config/services/googleAddons/slidesAddin";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: SLIDES_ADDIN_CONTENT.seo.title,
  description: SLIDES_ADDIN_CONTENT.seo.description,
};

export default function SlidesAddinPage() {
  return <OfficeServicePageTemplate content={SLIDES_ADDIN_CONTENT} />;
}