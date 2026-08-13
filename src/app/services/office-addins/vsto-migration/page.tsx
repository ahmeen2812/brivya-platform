import type { Metadata } from "next";
import { VSTO_MIGRATION_CONTENT } from "@/config/services/officeAddins/vstoMigration";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: VSTO_MIGRATION_CONTENT.seo.title,
  description: VSTO_MIGRATION_CONTENT.seo.description,
};

export default function VstoMigrationPage() {
  return <OfficeServicePageTemplate content={VSTO_MIGRATION_CONTENT} />;
}