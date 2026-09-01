import type { SiteDictionary } from "@/lib/i18n/dictionary";

/** English site chrome — byte-identical to the pre-localization copy. */
export const SITE_EN: SiteDictionary = {
  skipToContent: "Skip to content",

  header: {
    homeAriaLabel: "PDF Editor home",
    nav: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "Convert" },
      { id: "compress-pdf", label: "Compress" },
      { id: "merge-pdf", label: "Merge" },
      { id: "sign-pdf", label: "Sign" },
      { id: "guides", label: "Guides" },
    ],
    ctaLabel: "Get the app",
    ctaAriaLabel: "Download PDF Editor on the App Store",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  switcher: {
    label: "Language",
    ariaLabel: "Change language",
    currentLabel: "Current language",
  },

  footer: {
    tagline:
      "All-in-One PDF Solution for Work, Study & Life. Edit, convert, sign and scan PDFs from your phone.",
    appEyebrow: "PDF Editor app",
    appHeading: "Take PDF Editor with you.",
    appSub: "Free on iPhone and Android. No account required.",
    columnProduct: "Product",
    columnLearn: "Learn",
    columnCompany: "Company",
    columnTools: "Free tools",
    product: [
      { id: "pdf-editor", label: "PDF Editor" },
      { id: "pdf-converter", label: "PDF Converter" },
      { id: "compress-pdf", label: "Compress PDF" },
      { id: "sign-pdf", label: "Sign PDF" },
      { id: "scan-to-pdf", label: "Scan to PDF" },
    ],
    learn: [
      { id: "guides", label: "All guides" },
      { id: "pdf-forms", label: "PDF Forms" },
      { id: "guides/how-to-fill-out-a-pdf-form", label: "Fill out a PDF form" },
      { id: "guides/how-to-convert-pdf-to-word", label: "Convert PDF to Word" },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "Reduce PDF size for email",
      },
      { id: "guides/how-to-edit-pdf-on-iphone", label: "Edit PDF on iPhone" },
      { id: "guides/how-to-merge-pdf-files", label: "Merge PDFs" },
      { id: "compare/pdf-vs-docx", label: "PDF vs DOCX" },
    ],
    company: [
      { id: "contact", label: "Contact" },
      { id: "privacy-policy", label: "Privacy" },
      { id: "terms", label: "Terms" },
    ],
    tools: [
      { id: "pdf-tools", label: "All free tools" },
      { id: "image-to-pdf", label: "Image to PDF" },
      { id: "merge-pdf", label: "Merge PDF" },
      { id: "split-pdf", label: "Split PDF" },
      { id: "rotate-pdf", label: "Rotate PDF" },
      { id: "pdf-to-images", label: "PDF to images" },
      { id: "add-watermark-to-pdf", label: "Add watermark" },
    ],
    sitemapLabel: "Sitemap",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. All rights reserved.",
  },

  store: {
    appStoreAria: "Download PDF Editor on the App Store",
    googlePlayAria: "Get PDF Editor on Google Play",
    availability: "Available on iOS and Android · Free to try",
  },

  breadcrumbs: {
    home: "Home",
    guides: "Guides",
    compare: "Compare",
    useCases: "Use cases",
    tools: "Tools",
    ariaLabel: "Breadcrumb",
  },

  sections: {
    faqHeading: "Frequently asked questions",
    relatedGuides: "Related guides",
    readTheGuide: "Read the guide →",
    seeAllGuides: "See all guides",
    browseEveryGuide: "Browse every PDF guide",
    allFreeTools: "All free browser PDF tools",
    relatedTools: "Related PDF tools",
    stepByStep: "Step by step",
    tips: "Tips",
    lastUpdated: "Last updated",
    whenToPick: "When to pick {label}",
    workflowsHeading: "Workflows that pay off",
    tryOnPhone: "Try it on your phone",
    takeWithYou: "Take PDF Editor with you.",
    freeOnBoth: "Free on iOS and Android.",
    appEyebrow: "PDF Editor app",
    editOnPhoneHeading: "Edit PDFs on your phone.",
    trust: [
      "Files are processed locally in your browser",
      "No upload, no account, no watermark",
      "Free — works on mobile and desktop",
    ],
    clusterHeading: {
      one: "The 1 guide in this cluster",
      other: "All {count} guides in this cluster",
    },
    toolGuidesHeading: {
      one: "{label} guide",
      other: "{label} guides",
    },
    goToHub: "Go to {label} →",
    guideTopicsNav: "Guide topics",
  },
};
