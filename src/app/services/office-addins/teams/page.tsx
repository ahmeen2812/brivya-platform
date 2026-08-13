import type { Metadata } from "next";
import { TEAMS_APPS_CONTENT } from "@/config/services/officeAddins/teamsApps";
import { OfficeServicePageTemplate } from "@/components/services/office-template/OfficeServicePageTemplate";

export const metadata: Metadata = {
  title: TEAMS_APPS_CONTENT.seo.title,
  description: TEAMS_APPS_CONTENT.seo.description,
};

export default function TeamsAppsPage() {
  return <OfficeServicePageTemplate content={TEAMS_APPS_CONTENT} />;
}