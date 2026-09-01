import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";
import { AR_GUIDE_ROUTES } from "@/content/ar/routes.guides";

/**
 * Arabic route manifest — the localization manifest for ar.
 *
 * One entry per English route this locale publishes. `id` is the English
 * route id; `slug` is the permanent Arabic URL after the `/ar` prefix.
 * Category, priority, change frequency and lastmod policy are inherited —
 * see buildLocaleRoutes.
 *
 * Slug conventions (also recorded in docs/localization/ar-terminology.md):
 *
 * - ASCII-transliterated (romanized), not native Arabic script — matches
 *   the principle already established for pt-BR/fr/es/de/it: avoid
 *   percent-encoded URLs in links, sharing and analytics.
 * - A simple, readable transliteration a search-savvy reader would
 *   recognize, not strict academic transliteration with diacritics.
 * - Translated section prefixes: adilla/, muqaranat/, halat-alistikhdam/.
 */
export const AR_ROUTE_MANIFEST: readonly LocaleRouteEntry[] = [
  {
    id: "",
    slug: "",
    title: "PDF Editor — تحرير وتحويل وتوقيع ومسح PDF من الهاتف",
    description:
      "الحل الشامل لملفات PDF للعمل والدراسة والحياة اليومية. حرّر وحوّل واضغط وادمج ووقّع وامسح ملفات PDF من هاتفك مع تطبيق PDF Editor لنظامَي iOS وAndroid.",
  },
  {
    id: "pdf-editor",
    slug: "muharrir-pdf",
    title: "محرر PDF — تحرير النص والصور والصفحات من الهاتف",
    description:
      "حرّر ملفات PDF على آيفون أو أندرويد: غيّر النص، أضف صوراً، أعد ترتيب الصفحات ووقّع المستندات. تعرّف على كيف يجعل تطبيق PDF Editor التحرير من الهاتف أمراً سهلاً.",
  },
  {
    id: "pdf-converter",
    slug: "muhawwil-pdf",
    title: "محول PDF — تحويل ملفات PDF إلى Word وJPG وPNG والمزيد",
    description:
      "حوّل ملفات PDF إلى Word وExcel وJPG وPNG والعكس. تعرّف على أفضل طريقة للتحويل من الهاتف مع تطبيق PDF Editor على iOS وAndroid.",
  },
  {
    id: "compress-pdf",
    slug: "daght-pdf",
    title: "ضغط PDF — تقليل حجم الملف في متصفحك (مجاني، دون رفع)",
    description:
      "قلّل حجم ملف PDF مباشرة في متصفحك، مع مستويات ضغط قابلة للتعديل. مجاني، دون تسجيل، ودون رفع — ملفك لا يغادر جهازك أبداً.",
  },
  {
    id: "pdf-to-word",
    slug: "pdf-ila-word",
    title: "PDF إلى Word — تحويل PDF إلى مستند DOCX قابل للتحرير في متصفحك",
    description:
      "استخرج نص ملف PDF إلى مستند Word (.docx) قابل للتحرير، مباشرة في متصفحك. مجاني، دون رفع — تحويل نصي صادق، لا وعود زائفة بالحفاظ على التنسيق.",
  },
  {
    id: "word-to-pdf",
    slug: "word-ila-pdf",
    title: "Word إلى PDF — تحويل DOCX أو TXT إلى PDF في متصفحك",
    description:
      "حوّل ملف Word بصيغة .docx أو .txt إلى PDF نظيف مباشرة في متصفحك. مجاني، دون تسجيل، ودون رفع — مستندك لا يغادر جهازك.",
  },
  {
    id: "reorder-pdf-pages",
    slug: "tarteeb-safahat-pdf",
    title: "إعادة ترتيب صفحات PDF — في متصفحك (مجاني، دون رفع)",
    description:
      "عاين كل صفحة وأعد ترتيب PDF بعناصر تحكم بسيطة، ثم نزّل الملف بترتيبه الجديد. مجاني، دون تسجيل، ودون رفع — الملفات تبقى على جهازك.",
  },
  {
    id: "extract-pdf-pages",
    slug: "istikhraj-safahat-pdf",
    title:
      "استخراج صفحات من PDF — احفظ الصفحات المحددة كملف PDF جديد (مجاني، دون رفع)",
    description:
      "اختر صفحات أو نطاقات محددة ونزّل ملف PDF جديداً يحتوي عليها فقط، مباشرة في متصفحك. مجاني، دون تسجيل، ودون رفع — الملفات لا تغادر جهازك أبداً.",
  },
  {
    id: "merge-pdf",
    slug: "damj-pdf",
    title: "دمج ملفات PDF — في متصفحك (مجاني، دون رفع)",
    description:
      "ادمج عدة ملفات PDF في ملف واحد مباشرة في متصفحك. مجاني، دون تسجيل، ودون رفع — ملفاتك لا تغادر جهازك أبداً.",
  },
  {
    id: "split-pdf",
    slug: "taqseem-pdf",
    title: "تقسيم PDF — استخراج صفحات في متصفحك (مجاني، دون رفع)",
    description:
      "قسّم ملف PDF حسب نطاق الصفحات مباشرة في متصفحك. مجاني، دون تسجيل، ودون رفع — ملفاتك تبقى على جهازك.",
  },
  {
    id: "sign-pdf",
    slug: "tawqee-pdf",
    title: "توقيع PDF — إضافة توقيعات إلكترونية من الهاتف",
    description:
      "وقّع ملفات PDF من هاتفك بتوقيع حقيقي بخط اليد أو باسم مكتوب. مقبول قانونياً في معظم السياقات. جرّب تطبيق PDF Editor.",
  },
  {
    id: "scan-to-pdf",
    slug: "mash-ila-pdf",
    title: "مسح ضوئي إلى PDF — تحويل المستندات الورقية إلى ملفات PDF نظيفة",
    description:
      "استخدم كاميرا هاتفك لمسح المستندات وبطاقات الهوية والإيصالات ضوئياً إلى ملفات PDF نظيفة وقابلة للبحث. يتعرّف تطبيق PDF Editor على حواف الصفحة تلقائياً.",
  },
  {
    id: "pdf-security",
    slug: "amaan-pdf",
    title: "أمان PDF — حماية وتشفير ملفات PDF بكلمة مرور",
    description:
      "احمِ ملفات PDF الحساسة بكلمات مرور وتشفير. دليل عملي لتأمين المستندات على آيفون وأندرويد.",
  },
  {
    id: "pdf-for-business",
    slug: "pdf-lilaamal",
    title: "PDF للأعمال — العقود والفواتير وسير العمل",
    description:
      "كيف تستخدم الفرق الصغيرة ملفات PDF للعقود والفواتير والموافقات. طرق عمل حديثة تركّز على الهاتف مع تطبيق PDF Editor.",
  },
  {
    id: "pdf-for-students",
    slug: "pdf-liltullab",
    title: "PDF للطلاب — الملاحظات والتظليل وأدلة المذاكرة",
    description:
      "استخدم ملفات PDF لملاحظات المحاضرات والتظليل وأدلة المذاكرة. طرق عمل ذكية من الهاتف مع تطبيق PDF Editor على iOS وAndroid.",
  },
  {
    id: "pdf-forms",
    slug: "namathij-pdf",
    title: "نماذج PDF — تعبئة وتوقيع وإدارة النماذج القابلة للتعبئة",
    description:
      "تعرّف على كيفية عمل نماذج PDF وكيفية تعبئتها وتوقيعها وإنشائها وإصلاحها. المرجع الشامل للنماذج التفاعلية وغير التفاعلية، على الحاسوب والهاتف.",
  },
  {
    id: "guides",
    slug: "adilla",
    title: "أدلة PDF — مقالات إرشادية ودروس عملية",
    description:
      "دروس عملية لملفات PDF تركّز على الهاتف: تحرير وتحويل وضغط ودمج وتوقيع وحماية المستندات على آيفون وأندرويد.",
  },
  {
    id: "compare/pdf-vs-docx",
    slug: "muqaranat/pdf-aw-docx",
    title: "PDF أم DOCX — مقارنة شاملة بين الصيغتين",
    description:
      "قارن بين PDF وDOCX من حيث قابلية التحرير والدقة والتوقيع والأمان والمشاركة. اختر الصيغة المناسبة لمهمتك.",
  },
  {
    id: "compare/pdf-vs-jpg",
    slug: "muqaranat/pdf-aw-jpg",
    title: "PDF أم JPG — متى تستخدم كل صيغة",
    description:
      "PDF مقابل JPG: متى تمسح ضوئياً ومتى تصوّر. مقارنة من حيث الجودة وحجم الملف والتعرف الضوئي على الحروف وملاءمة كل صيغة لسير عمل المستندات.",
  },
  {
    id: "compare/pdf-app-vs-online-pdf-tools",
    slug: "muqaranat/tatbeeq-pdf-aw-adawat-online",
    title: "تطبيقات PDF أم أدوات PDF عبر الإنترنت — أيهما أفضل؟",
    description:
      "تطبيقات PDF الأصلية مقابل الأدوات المستندة إلى المتصفح: مقارنة من حيث السرعة والخصوصية والعمل دون اتصال.",
  },
  {
    id: "use-cases/freelancers",
    slug: "halat-alistikhdam/almustaqilleen",
    title: "PDF Editor للمستقلين — العروض والمستندات الموقّعة",
    description:
      "طرق عمل يحبها المستقلون: العروض والاتفاقيات الموقّعة والفواتير، كلها من الهاتف.",
  },
  {
    id: "use-cases/remote-work",
    slug: "halat-alistikhdam/al-amal-an-buad",
    title: "PDF Editor للعمل عن بُعد — مستندات في أي مكان",
    description:
      "تعامل مع المستندات أثناء التنقل: امسح ووقّع وشارك ملفات PDF من أي جهاز وفي أي مكان.",
  },
  {
    id: "pdf-tools",
    slug: "adawat-pdf",
    title: "أدوات PDF مجانية — تعمل في المتصفح، دون حاجة للرفع",
    description:
      "أدوات PDF مجانية تعمل بالكامل في متصفحك. ادمج وقسّم ودوّر وأضف علامة مائية وحوّل الصور إلى PDF وPDF إلى صور — ملفاتك لا تغادر جهازك أبداً.",
  },
  {
    id: "image-to-pdf",
    slug: "soura-ila-pdf",
    title: "صورة إلى PDF — تحويل JPG وPNG وWebP إلى PDF في متصفحك",
    description:
      "ادمج صور JPG وPNG وWebP في ملف PDF واحد مباشرة في متصفحك. مجاني، دون رفع، ودون تسجيل — الملفات تبقى على جهازك.",
  },
  {
    id: "rotate-pdf",
    slug: "tadweer-pdf",
    title: "تدوير PDF — إصلاح اتجاه الصفحات في متصفحك",
    description:
      "دوّر كل صفحات PDF أو صفحات محددة بزاوية 90 أو 180 أو 270 درجة، مباشرة في متصفحك. مجاني وخاص — الملفات لا تغادر جهازك أبداً.",
  },
  {
    id: "pdf-to-images",
    slug: "pdf-ila-suwar",
    title: "PDF إلى صور — تصدير صفحات PDF بصيغة PNG أو JPG",
    description:
      "حوّل أي ملف PDF إلى صور PNG أو JPG، صفحة بصفحة، في متصفحك. مجاني، دون رفع، ودون حساب — يعمل بالكامل على جهازك.",
  },
  {
    id: "add-watermark-to-pdf",
    slug: "alama-maiya-lipdf",
    title: "إضافة علامة مائية إلى PDF — مجاني وخاص، في المتصفح",
    description:
      "أضف علامة مائية نصية إلى كل صفحة من ملف PDF مباشرة في متصفحك. مجاني، دون رفع، ودون تسجيل — الملفات تبقى على جهازك.",
  },
  {
    id: "privacy-policy",
    slug: "siyasat-alkhususiya",
    title: "سياسة الخصوصية",
    description: "كيف تتعامل pdfeditconvert.top وشركة hrhelperg s.r.o. مع بياناتك.",
  },
  {
    id: "terms",
    slug: "sharoot-alistikhdam",
    title: "شروط الاستخدام",
    description: "الشروط التي تحكم استخدامك لموقع pdfeditconvert.top.",
  },
  {
    id: "contact",
    slug: "ittisal",
    title: "اتصل بنا — PDF Editor من hrhelperg s.r.o.",
    description: "تواصل مع الفريق وراء PDF Editor. البريد الإلكتروني: info@hrhelperg.com.",
  },

  ...AR_GUIDE_ROUTES,
];
