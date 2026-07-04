export type RouteCategory =
  | "core"
  | "hub"
  | "tool"
  | "guide"
  | "compare"
  | "use-case"
  | "legal"
  | "meta"
  | "reference";

export interface RouteEntry {
  path: string;
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

// ---------------------------------------------------------------------------
// Knowledge Graph (domain-agnostic — reused by every future phase)
// ---------------------------------------------------------------------------

export type KnowledgeCluster =
  | "foundations"
  | "standards"
  | "text-fonts"
  | "graphics-color"
  | "images-compression"
  | "interactivity"
  | "security"
  | "accessibility"
  | "metadata-tooling"
  | "print-geometry";

export type KnowledgeSearchIntent =
  | "definition"
  | "concept"
  | "standard"
  | "specification"
  | "comparison"
  | "security"
  | "format"
  | "history"
  | "printing"
  | "metadata"
  | "rendering"
  | "accessibility"
  | "workflow";

export type KnowledgeDifficulty = "Beginner" | "Intermediate" | "Advanced";

export interface KnowledgeSection {
  heading: string;
  body: string[];
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface KnowledgeMisconception {
  claim: string; // the common but wrong belief
  truth: string; // the correction
}

export interface SpecificationMeta {
  iso?: string;
  introduced?: string;
  latestVersion?: string;
  typicalUsage?: string;
  relatedStandards?: string[]; // knowledge slugs
}

export interface KnowledgeGraphEdges {
  parentConcept?: string; // knowledge slug
  childConcepts?: string[]; // knowledge slugs
  relatedConcepts?: string[]; // knowledge slugs
  relatedStandards?: string[]; // knowledge slugs
  relatedFormats?: string[]; // knowledge slugs
  relatedTools?: RelatedLink[]; // existing site routes
  relatedGuides?: RelatedLink[]; // existing site routes
}

export interface KnowledgeContent {
  slug: string;
  h1: string;
  cluster: KnowledgeCluster;
  aliases: string[];
  definition: string;
  description: string;
  searchIntent: KnowledgeSearchIntent;
  difficulty: KnowledgeDifficulty;
  updated: string; // ISO date — publication / last content change
  reviewed: string; // ISO date — editorial review
  intro: string[];
  sections: KnowledgeSection[];
  keyFacts?: KeyFact[];
  specification?: SpecificationMeta;
  misconceptions?: KnowledgeMisconception[];
  faq: FaqItem[];
  graph: KnowledgeGraphEdges;
  seeAlso: string[]; // 5–8 knowledge slugs
  parentHub: RelatedLink;
}
