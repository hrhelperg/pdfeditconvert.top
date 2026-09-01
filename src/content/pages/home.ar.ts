import type { HomeContent } from "@/types/content";

/**
 * Arabic homepage copy. Terminology policy: docs/localization/ar-terminology.md.
 */
export const HOME_AR: HomeContent = {
  heroEyebrow: "أدوات PDF مجانية في المتصفح",
  heroH1Before: "حوّل وادمج وحرّر ملفات PDF ",
  heroH1Highlight: "في ثوانٍ",
  heroH1After: "",
  heroLead:
    "أدوات PDF مجانية تعمل في متصفحك، بمعالجة محلية وخاصة — لا يُرسَل شيء إلى أي خادم أبداً.",
  trust: [
    "تُعالَج الملفات محلياً في متصفحك",
    "دون رفع، دون حساب، ودون علامة مائية",
    "مجاني: يعمل على الهاتف والحاسوب",
  ],
  browseAllToolsLabel: "عرض جميع أدوات PDF ←",
  toolsEyebrow: "مجاني، في متصفحك",
  toolsHeading: "جميع أدوات PDF التي تحتاجها — دون رفع.",
  toolsLead:
    "ادمج وقسّم ودوّر وضع علامة مائية وحوّل ملفات PDF دون مغادرة الصفحة. كل أداة تعمل محلياً في متصفحك.",
  toolBadge: "أداة مجانية",
  tools: [
    { id: "image-to-pdf", label: "صورة إلى PDF", desc: "اجمع JPG وPNG وWebP في ملف PDF واحد." },
    { id: "merge-pdf", label: "دمج PDF", desc: "ادمج عدة ملفات PDF في مستند واحد." },
    { id: "split-pdf", label: "تقسيم PDF", desc: "افصل الصفحات حسب النطاق." },
    { id: "rotate-pdf", label: "تدوير PDF", desc: "قوّم الصفحات المائلة." },
    { id: "pdf-to-images", label: "PDF إلى صور", desc: "صدّر الصفحات بصيغة PNG أو JPG." },
    {
      id: "add-watermark-to-pdf",
      label: "علامة مائية",
      desc: "اطبع نصاً على كل الصفحات.",
    },
    {
      id: "compress-pdf",
      label: "ضغط PDF",
      desc: "قلّل الحجم للبريد الإلكتروني والإرسال.",
    },
    { id: "pdf-to-word", label: "PDF إلى Word", desc: "استخرج النص إلى ملف .docx قابل للتحرير." },
    { id: "word-to-pdf", label: "Word إلى PDF", desc: "حوّل .docx أو .txt إلى PDF نظيف." },
    {
      id: "reorder-pdf-pages",
      label: "إعادة ترتيب الصفحات",
      desc: "عاين وأعد الترتيب ونزّل.",
    },
    {
      id: "extract-pdf-pages",
      label: "استخراج الصفحات",
      desc: "احفظ الصفحات المختارة في ملف PDF جديد.",
    },
  ],
  appBandEyebrow: "متوفر أيضاً على آيفون وأندرويد · خمس أدوات للاستخدام اليومي",
  featureBand: [
    { key: "edit", label: "تحرير", sub: "النص والصور والصفحات" },
    { key: "convert", label: "تحويل", sub: "Word وJPG وPNG" },
    { key: "secure", label: "حماية", sub: "كلمة مرور للملف" },
    { key: "scan", label: "مسح ضوئي", sub: "من الورق إلى PDF" },
    { key: "organize", label: "تنظيم", sub: "إعادة الترتيب والتقسيم" },
  ],
  hubsHeading: "كل ما يمكن فعله بملف PDF — بالتفصيل.",
  hubsLead:
    "أدلة عملية وطرق عمل محددة لما يفعله الناس فعلاً بملفات PDF كل يوم.",
  hubs: [
    { id: "pdf-editor", label: "محرر PDF", desc: "حرّر النص والصور والصفحات." },
    {
      id: "pdf-converter",
      label: "محول PDF",
      desc: "حوّل إلى Word وJPG وPNG والمزيد.",
    },
    {
      id: "compress-pdf",
      label: "ضغط PDF",
      desc: "قلّل حجم الملف دون فقدان الجودة.",
    },
    { id: "sign-pdf", label: "توقيع PDF", desc: "وقّع مباشرة من هاتفك." },
    { id: "scan-to-pdf", label: "مسح ضوئي إلى PDF", desc: "حوّل الورق إلى ملفات PDF واضحة." },
    {
      id: "pdf-security",
      label: "أمان PDF",
      desc: "احمِ المستندات بكلمة مرور.",
    },
    {
      id: "pdf-for-business",
      label: "PDF للأعمال",
      desc: "عقود وفواتير من أي مكان.",
    },
    {
      id: "pdf-for-students",
      label: "PDF للطلاب",
      desc: "ملاحظات وتظليل وملخصات.",
    },
    {
      id: "pdf-forms",
      label: "نماذج PDF",
      desc: "عبّئ ووقّع واحفظ ملفات PDF الخاصة بك.",
    },
  ],
  guidesHeading: "الأدلة الأكثر قراءة",
  guideBadge: "دليل",
  featuredGuides: [
    { id: "guides/how-to-edit-pdf-on-iphone", label: "كيفية تحرير PDF على آيفون" },
    { id: "guides/how-to-edit-pdf-on-android", label: "كيفية تحرير PDF على أندرويد" },
    { id: "guides/how-to-compress-pdf", label: "كيفية ضغط PDF" },
    { id: "guides/how-to-sign-pdf-on-phone", label: "كيفية توقيع PDF من الهاتف" },
  ],
  browseAllGuidesLabel: "عرض أدلة PDF الـ{count} ←",
  finalCtaHeading: "احمل PDF Editor معك أينما ذهبت.",
  finalCtaSub: "مجاني على iOS وAndroid. لا تحتاج حساباً للبدء.",
  faq: [
    {
      q: "هل تطبيق PDF Editor مجاني؟",
      a: "نعم. الوظائف الأساسية للتحرير والمسح الضوئي والضغط والتوقيع مجانية. بعض الوظائف المتقدمة متوفرة في PDF Editor Pro.",
    },
    {
      q: "هل يعمل دون اتصال بالإنترنت؟",
      a: "يعمل التحرير وتنظيم الصفحات والتوقيع والضغط دون اتصال. قد تحتاج المزامنة السحابية وOCR إلى اتصال.",
    },
    {
      q: "مع أي الأجهزة يتوافق؟",
      a: "يتوفر PDF Editor لآيفون وآيباد (iOS 16 أو أحدث) ولهواتف وأجهزة أندرويد اللوحية (Android 9 أو أحدث).",
    },
    {
      q: "هل ملفاتي خاصة؟",
      a: "نعم. تبقى ملفاتك على جهازك، إلا إذا اخترت مشاركتها. لا نرسل مستنداتك إلى خوادمنا.",
    },
    {
      q: "هل يمكنني استخدامه للمستندات القانونية؟",
      a: "يوقّع الكثيرون العقود ويرسلونها باستخدام PDF Editor. لا نقدّم استشارات قانونية — تحقق من الأنظمة المحلية للتوقيع الإلكتروني قبل الاعتماد عليه في مستند بالغ الأهمية.",
    },
  ],
};
