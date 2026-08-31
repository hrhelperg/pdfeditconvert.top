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

/**
 * Content for the pages that are not driven by a shared template — the
 * homepage, the tool index, the guides index, contact and the legal pages.
 *
 * These used to hold their copy inline in `page.tsx`. Lifting it into typed
 * records is what lets a second language render the same layout: the
 * alternative is a duplicated 400-line component per locale, which drifts
 * the first time anyone edits one of them.
 *
 * Link targets are canonical route ids, never paths, so each locale's page
 * links inside its own locale without the translator ever typing a URL.
 */
export interface LinkedItem {
  /** Canonical route id (English path minus the leading slash). */
  id: string;
  label: string;
  desc?: string;
}

export interface HomeContent {
  heroEyebrow: string;
  heroH1Before: string;
  heroH1Highlight: string;
  heroH1After: string;
  heroLead: string;
  trust: string[];
  browseAllToolsLabel: string;
  toolsEyebrow: string;
  toolsHeading: string;
  toolsLead: string;
  toolBadge: string;
  tools: LinkedItem[];
  appBandEyebrow: string;
  /** Keyed by feature id so the icon stays in code and the copy stays here. */
  featureBand: { key: string; label: string; sub: string }[];
  hubsHeading: string;
  hubsLead: string;
  hubs: LinkedItem[];
  guidesHeading: string;
  guideBadge: string;
  featuredGuides: LinkedItem[];
  /** Template with a {count} placeholder. */
  browseAllGuidesLabel: string;
  finalCtaHeading: string;
  finalCtaSub: string;
  faq: FaqItem[];
}

export interface ToolsIndexContent {
  crumbLabel: string;
  heroEyebrow: string;
  heroH1: string;
  heroHighlight: string;
  heroLead: string;
  privacyNote: string;
  /** Template with a {count} placeholder. */
  clusterHeading: string;
  goingFurtherHeading: string;
  goingFurtherBody: string;
  hubs: LinkedItem[];
  appCtaHeading: string;
  appCtaSub: string;
}

export interface GuidesIndexContent {
  h1: string;
  /** Template with a {count} placeholder. */
  lead: string;
}

export interface ContactSection {
  heading: string;
  body: string;
}

export interface ContactContent {
  h1: string;
  lead: string;
  emailLabel: string;
  officeLabel: string;
  sections: ContactSection[];
  /** Sentence containing {privacy} and {terms} link placeholders. */
  legalSentence: string;
  privacyLinkLabel: string;
  termsLinkLabel: string;
  tryAppHeading: string;
}

export interface LegalContent {
  h1: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}
