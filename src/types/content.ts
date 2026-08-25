export type RouteCategory =
  | "core"
  | "hub"
  | "tool"
  | "guide"
  | "compare"
  | "use-case"
  | "legal"
  | "meta";

export interface RouteEntry {
  path: string;
  /**
   * Date this route's content last genuinely changed, `YYYY-MM-DD`.
   *
   * Feeds sitemap `<lastmod>`. It must track real content edits — never a
   * build or deploy timestamp. Before Aug 2026 the sitemap stamped every URL
   * with `new Date()` at build time, so each deploy told Google all 176 pages
   * had just changed; that destroys the signal's usefulness and trains
   * crawlers to ignore it.
   */
  lastModified: string;
  title: string;
  description: string;
  category: RouteCategory;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  hidden?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  body: string;
}

export interface StepItem {
  title: string;
  body: string;
}

export interface RelatedLink {
  label: string;
  path: string;
}

export interface HubContent {
  slug: string;
  hero: {
    eyebrow?: string;
    h1: string;
    highlight?: string;
    lead: string;
    primaryCta: { label: string; href: string };
  };
  problem: { heading: string; paragraphs: string[] };
  features: { heading: string; items: FeatureItem[] };
  steps: { heading: string; items: StepItem[] };
  mobileUseCase: { heading: string; body: string };
  faq: FaqItem[];
  related: RelatedLink[];
  appCta: { heading: string; sub: string };
}

export interface GuideContent {
  slug: string;
  h1: string;
  description: string;
  updated: string;
  intro: string[];
  steps: StepItem[];
  tips: string[];
  mobileNote: string;
  faq: FaqItem[];
  related: RelatedLink[];
  parentHub: RelatedLink;
}

export interface CompareRow {
  feature: string;
  left: string;
  right: string;
}

export interface CompareContent {
  slug: string;
  h1: string;
  description: string;
  intro: string[];
  rows: CompareRow[];
  leftLabel: string;
  rightLabel: string;
  whenLeft: string[];
  whenRight: string[];
  faq: FaqItem[];
  related: RelatedLink[];
}

export interface UseCaseWorkflow {
  title: string;
  body: string;
}

export interface UseCaseContent {
  slug: string;
  h1: string;
  description: string;
  intro: string[];
  workflows: UseCaseWorkflow[];
  appPitch: string;
  related: RelatedLink[];
}

export interface ToolUseCase {
  title: string;
  body: string;
}

export interface ToolLimitation {
  title: string;
  body: string;
}

export interface ToolContent {
  slug: string;
  hero: {
    eyebrow: string;
    h1: string;
    highlight?: string;
    lead: string;
  };
  privacyNote: string;
  howTo: { heading: string; steps: StepItem[] };
  useCases: { heading: string; items: ToolUseCase[] };
  limitations: { heading: string; items: ToolLimitation[] };
  related: RelatedLink[];
  faq: FaqItem[];
  appCta: { heading: string; sub: string };
}
