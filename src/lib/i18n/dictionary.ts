import type { RouteId } from "@/lib/i18n/routeIds";
import type { PluralForms } from "@/lib/i18n/format";

/**
 * Localized site chrome: navigation, footer, and the labels the shared page
 * sections render around translated content.
 *
 * Kept separate from page content on purpose. Content answers "what does this
 * page say"; this answers "what does the frame around every page say". The
 * frame is small, changes rarely, and must be complete before a locale can
 * publish a single page — so it is the first thing a new locale writes and
 * the first thing the parity gate checks.
 */

/** A navigation entry. The path is resolved per locale from the route id. */
export interface NavLink {
  readonly id: RouteId;
  readonly label: string;
}

export interface SiteDictionary {
  readonly skipToContent: string;

  readonly header: {
    readonly homeAriaLabel: string;
    readonly nav: readonly NavLink[];
    readonly ctaLabel: string;
    readonly ctaAriaLabel: string;
    readonly openMenu: string;
    readonly closeMenu: string;
  };

  readonly switcher: {
    /** Visible trigger label, e.g. "Language". */
    readonly label: string;
    readonly ariaLabel: string;
    /** Announced for the option that is already active. */
    readonly currentLabel: string;
  };

  readonly footer: {
    readonly tagline: string;
    readonly appEyebrow: string;
    readonly appHeading: string;
    readonly appSub: string;
    readonly columnProduct: string;
    readonly columnLearn: string;
    readonly columnCompany: string;
    readonly columnTools: string;
    readonly product: readonly NavLink[];
    readonly learn: readonly NavLink[];
    readonly company: readonly NavLink[];
    readonly tools: readonly NavLink[];
    readonly sitemapLabel: string;
    readonly sitemapHref: string;
    readonly rights: string;
  };

  readonly store: {
    readonly appStoreAria: string;
    readonly googlePlayAria: string;
  };

  readonly breadcrumbs: {
    readonly home: string;
    readonly guides: string;
    readonly compare: string;
    readonly useCases: string;
    readonly tools: string;
  };

  readonly sections: {
    readonly faqHeading: string;
    readonly relatedGuides: string;
    readonly readTheGuide: string;
    readonly seeAllGuides: string;
    readonly browseEveryGuide: string;
    readonly allFreeTools: string;
    readonly relatedTools: string;
    readonly stepByStep: string;
    readonly tips: string;
    readonly lastUpdated: string;
    readonly whenToPick: string;
    readonly workflowsHeading: string;
    readonly tryOnPhone: string;
    readonly takeWithYou: string;
    readonly freeOnBoth: string;
    readonly appEyebrow: string;
    readonly editOnPhoneHeading: string;
    /** The three trust bullets beside every tool and the homepage hero. */
    readonly trust: readonly [string, string, string];
    /** "All {count} guides in this cluster" */
    readonly clusterHeading: PluralForms;
    /** "{label} guide" / "{label} guides" — heading above a tool's guides. */
    readonly toolGuidesHeading: PluralForms;
    /** "Go to {label} →" on the guides index. */
    readonly goToHub: string;
    readonly guideTopicsNav: string;
  };
}
