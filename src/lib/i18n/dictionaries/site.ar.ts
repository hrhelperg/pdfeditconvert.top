import type { SiteDictionary } from "@/lib/i18n/dictionary";

/**
 * Arabic site chrome (Modern Standard Arabic, `ar`).
 *
 * This is the site's first right-to-left locale — `dir="rtl"` is applied
 * automatically from the locale config (see SiteDocument.tsx), and shared
 * layout components were patched for logical CSS properties as part of
 * enabling this locale. See docs/localization/ar-terminology.md §0.
 *
 * The "continue reading" arrow baked into several labels below points left
 * (←), not right (→) — Arabic reading continues leftward. Terminology
 * policy: docs/localization/ar-terminology.md.
 */
export const SITE_AR: SiteDictionary = {
  skipToContent: "الانتقال إلى المحتوى",

  header: {
    homeAriaLabel: "الصفحة الرئيسية لـ PDF Editor",
    nav: [
      { id: "pdf-editor", label: "محرر PDF" },
      { id: "pdf-converter", label: "التحويل" },
      { id: "compress-pdf", label: "الضغط" },
      { id: "merge-pdf", label: "الدمج" },
      { id: "sign-pdf", label: "التوقيع" },
      { id: "guides", label: "الأدلة" },
    ],
    ctaLabel: "تنزيل التطبيق",
    ctaAriaLabel: "تنزيل PDF Editor من App Store",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
  },

  switcher: {
    label: "اللغة",
    ariaLabel: "تغيير اللغة",
    currentLabel: "اللغة الحالية",
  },

  footer: {
    tagline:
      "الحل الشامل لملفات PDF للعمل والدراسة والحياة اليومية. حرّر وحوّل ووقّع وامسح ملفات PDF من هاتفك مع تطبيق PDF Editor.",
    appEyebrow: "تطبيق PDF Editor",
    appHeading: "احمل PDF Editor معك أينما ذهبت.",
    appSub: "مجاني على آيفون وأندرويد. دون إنشاء حساب.",
    columnProduct: "المنتج",
    columnLearn: "التعلّم",
    columnCompany: "الشركة",
    columnTools: "أدوات مجانية",
    product: [
      { id: "pdf-editor", label: "محرر PDF" },
      { id: "pdf-converter", label: "محول PDF" },
      { id: "compress-pdf", label: "ضغط PDF" },
      { id: "sign-pdf", label: "توقيع PDF" },
      { id: "scan-to-pdf", label: "مسح ضوئي إلى PDF" },
    ],
    learn: [
      { id: "guides", label: "جميع الأدلة" },
      { id: "pdf-forms", label: "نماذج PDF" },
      {
        id: "guides/how-to-fill-out-a-pdf-form",
        label: "تعبئة نموذج PDF",
      },
      {
        id: "guides/how-to-convert-pdf-to-word",
        label: "تحويل PDF إلى Word",
      },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "تقليل حجم PDF للبريد الإلكتروني",
      },
      {
        id: "guides/how-to-edit-pdf-on-iphone",
        label: "تحرير PDF على آيفون",
      },
      { id: "guides/how-to-merge-pdf-files", label: "دمج ملفات PDF" },
      { id: "compare/pdf-vs-docx", label: "PDF أم DOCX" },
    ],
    company: [
      { id: "contact", label: "اتصل بنا" },
      { id: "privacy-policy", label: "الخصوصية" },
      { id: "terms", label: "الشروط" },
    ],
    tools: [
      { id: "pdf-tools", label: "جميع الأدوات المجانية" },
      { id: "image-to-pdf", label: "صورة إلى PDF" },
      { id: "merge-pdf", label: "دمج PDF" },
      { id: "split-pdf", label: "تقسيم PDF" },
      { id: "rotate-pdf", label: "تدوير PDF" },
      { id: "pdf-to-images", label: "PDF إلى صور" },
      { id: "add-watermark-to-pdf", label: "علامة مائية" },
    ],
    sitemapLabel: "خريطة الموقع",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. جميع الحقوق محفوظة.",
  },

  store: {
    appStoreAria: "تنزيل PDF Editor من App Store",
    googlePlayAria: "تنزيل PDF Editor من Google Play",
  },

  breadcrumbs: {
    home: "الرئيسية",
    guides: "الأدلة",
    compare: "المقارنات",
    useCases: "حالات الاستخدام",
    tools: "الأدوات",
  },

  sections: {
    faqHeading: "الأسئلة الشائعة",
    relatedGuides: "أدلة ذات صلة",
    readTheGuide: "اقرأ الدليل ←",
    seeAllGuides: "عرض جميع الأدلة",
    browseEveryGuide: "تصفّح جميع أدلة PDF",
    allFreeTools: "جميع أدوات PDF المجانية في المتصفح",
    relatedTools: "أدوات PDF ذات صلة",
    stepByStep: "خطوة بخطوة",
    tips: "نصائح",
    lastUpdated: "آخر تحديث في",
    whenToPick: "متى تختار {label}",
    workflowsHeading: "طرق عمل تستحق التجربة",
    tryOnPhone: "جرّبه من هاتفك",
    takeWithYou: "احمل PDF Editor معك أينما ذهبت.",
    freeOnBoth: "مجاني على iOS وAndroid.",
    appEyebrow: "تطبيق PDF Editor",
    editOnPhoneHeading: "حرّر ملفات PDF من هاتفك.",
    trust: [
      "تُعالَج الملفات محلياً في متصفحك",
      "دون رفع، دون حساب، ودون علامة مائية",
      "مجاني: يعمل على الهاتف والحاسوب",
    ],
    clusterHeading: {
      one: "الدليل الوحيد في هذه المجموعة",
      other: "الأدلة الـ{count} في هذه المجموعة",
    },
    toolGuidesHeading: {
      one: "دليل عن {label}",
      other: "أدلة عن {label}",
    },
    goToHub: "الانتقال إلى {label} ←",
    guideTopicsNav: "مواضيع الأدلة",
  },
};
