import type { Metadata } from "next";
import { EXCEL_ADDIN_CONTENT } from "@/config/services/officeAddins/excelAddin";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: EXCEL_ADDIN_CONTENT.seo.title,
  description: EXCEL_ADDIN_CONTENT.seo.description,
};

export default function ExcelAddinPage() {
  return <OfficeServicePageTemplate content={EXCEL_ADDIN_CONTENT} />;
}