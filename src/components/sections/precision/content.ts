import { MetricsSectionCopy, MetricItemData } from "./types";

export const METRICS_SECTION_COPY: MetricsSectionCopy = {
  eyebrow: "THE WORK BEHIND THE THINKING",
  headingLine1: "Good work is built",
  headingLine2Accent: "on more than ideas.",
  description:
    "A successful project takes careful decisions, technical expertise, and attention to the details that matter. That's the standard we aim to bring to every engagement.",
  footerStatement: "Thoughtful execution. Clear accountability.",
  expandLabel: "Show all performance parameters",
  collapseLabel: "Show core metrics only",
} as const;

export const METRICS_DATA: readonly MetricItemData[] = [
  // 3 Primary metrics visible initially
  {
    id: "metric-projects",
    iconKey: "projects",
    value: "50+",
    label: "Completed Projects",
    sublabel: "Documented digital deliverables",
    isPrimary: true,
  },
  {
    id: "metric-experience",
    iconKey: "experience",
    value: "6+",
    label: "Years of Experience",
    sublabel: "Combined engineering leadership",
    isPrimary: true,
  },
  {
    id: "metric-clients",
    iconKey: "clients",
    value: "30+",
    label: "Clients Served",
    sublabel: "Enterprise & growth partners",
    isPrimary: true,
  },
  // 2 Expanded metrics
  {
    id: "metric-campaigns",
    iconKey: "campaigns",
    value: "120+",
    label: "Campaigns Managed",
    sublabel: "Multi-channel media pipelines",
    isPrimary: false,
  },
  {
    id: "metric-satisfaction",
    iconKey: "satisfaction",
    value: "98%",
    label: "Client Satisfaction",
    sublabel: "Audited delivery SLA rating",
    isPrimary: false,
  },
] as const;