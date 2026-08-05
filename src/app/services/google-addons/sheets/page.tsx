import type { Metadata } from "next";
import { SHEETS_ADDIN_CONTENT } from "@/config/services/googleAddons/sheetsAddin";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: SHEETS_ADDIN_CONTENT.seo.title,
  description: SHEETS_ADDIN_CONTENT.seo.description,
};

export default function SheetsAddinPage() {
  return <OfficeServicePageTemplate content={SHEETS_ADDIN_CONTENT} />;
}