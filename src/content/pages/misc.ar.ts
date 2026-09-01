import type {
  ContactContent,
  GuidesIndexContent,
  LegalContent,
  ToolsIndexContent,
} from "@/types/content";
import { PRIVACY_UPDATED } from "@/content/legal/privacy";
import { TERMS_UPDATED } from "@/content/legal/terms";

export const TOOLS_INDEX_AR: ToolsIndexContent = {
  crumbLabel: "أدوات PDF المجانية",
  heroEyebrow: "أدوات PDF المجانية",
  heroH1: "أدوات PDF في المتصفح — ملفاتك لا تغادر جهازك أبداً.",
  heroHighlight: "لا تغادر جهازك أبداً",
  heroLead:
    "ادمج وقسّم ودوّر وضع علامة مائية وحوّل ملفات PDF دون رفع أي شيء. تتم كل المعالجة محلياً في متصفحك، مجاناً ودون تسجيل.",
  privacyNote:
    "تُعالِج جميع الأدوات في هذه الصفحة ملفاتك محلياً في متصفحك. لا يُرسَل شيء إلى خوادمنا ولا يُحفَظ شيء.",
  clusterHeading: "{count} أدلة عن العمل مع ملفات PDF في المتصفح",
  goingFurtherHeading: "التعمق أكثر مع PDF",
  goingFurtherBody:
    "تحل هذه الأدوات مهام محددة في المتصفح. لطرق العمل الأشمل خلفها — التحرير والتحويل والتوقيع والحماية والمسح الضوئي — ابدأ بالأقسام أدناه.",
  hubs: [
    { id: "pdf-editor", label: "محرر PDF" },
    { id: "pdf-converter", label: "محول PDF" },
    { id: "pdf-forms", label: "نماذج PDF" },
    { id: "sign-pdf", label: "توقيع PDF" },
    { id: "pdf-security", label: "أمان PDF" },
    { id: "scan-to-pdf", label: "مسح ضوئي إلى PDF" },
    {
      id: "compare/pdf-app-vs-online-pdf-tools",
      label: "تطبيق PDF أم أدوات إنترنت",
    },
  ],
  appCtaHeading: "تحتاج أدوات PDF أثناء التنقل؟",
  appCtaSub: "نزّل تطبيق PDF Editor لآيفون وأندرويد — مجاناً.",
};

export const GUIDES_INDEX_AR: GuidesIndexContent = {
  h1: "أدلة PDF",
  lead: "{count} دروس عملية، مناسبة للهاتف، عن تحرير ملفات PDF وتحويلها وضغطها وتوقيعها وحمايتها — مصنّفة حسب الأداة أو الموضوع.",
};

export const CONTACT_AR: ContactContent = {
  h1: "اتصل بنا",
  lead: "أسئلة أو تعاون أو استفسارات صحفية أو آراء حول تطبيق PDF Editor — نقرأ كل رسالة.",
  emailLabel: "البريد الإلكتروني",
  officeLabel: "المقر الرسمي",
  sections: [
    {
      heading: "ماذا تتوقع",
      body: "البريد الإلكتروني هو قناة التواصل الوحيدة لدينا: لا يوجد نظام تذاكر ولا روبوت محادثة قبله. تأتي الردود من الفريق الصغير نفسه الذي يصنع التطبيق، عادة خلال أقل من يومَي عمل. لسؤال عن التطبيق، اذكر الجهاز وإصدار النظام؛ لمشكلة في مستند معين، صف ما كنت تفعله بدلاً من إرفاق الملف، لأننا لا نريد مستنداتك ولا نحتاجها.",
    },
    {
      heading: "ما لا يمكننا مساعدتك فيه",
      body: "تعمل أدوات هذا الموقع بالكامل على جهازك، لذا لا يصلنا شيء مما تعالجه. هذا يعني أيضاً أننا لا نستطيع استرجاع ملف قمت بتحويله، أو إعادة إرسال تنزيل، أو الاطلاع على شيء نيابة عنك — لا توجد نسخة لدينا. إذا فشلت أداة مع ملف PDF معين، أخبرنا عن نوع الملف (ممسوح ضوئياً، محمي بكلمة مرور، نموذج معبَّأ) وما فعلته الأداة.",
    },
    {
      heading: "الخصوصية والطلبات القانونية",
      body: "تصل الأسئلة المتعلقة بحماية البيانات وطلبات الحذف والإشعارات القانونية إلى العنوان نفسه، وتصل إلى شركة hrhelperg s.r.o. في المقر الرسمي المذكور أعلاه.",
    },
  ],
  legalSentence:
    "توضح {privacy} ما يُجمَع وما لا يُجمَع، وتنظّم {terms} استخدام الموقع والأدوات.",
  privacyLinkLabel: "سياسة الخصوصية",
  termsLinkLabel: "شروط الاستخدام",
  tryAppHeading: "اكتشف التطبيق",
};

/**
 * Arabic privacy policy.
 *
 * A translation, not a separate policy: the operator, the registered
 * office, the contact address, the analytics vendor and the legal basis are
 * the same facts the English version states, because the same company
 * processes the same data under the same law.
 *
 * GDPR is kept as the acronym (with a one-time Arabic gloss on first
 * mention) rather than invented as a local acronym — unlike DSGVO/RGPD in
 * German/French/Italian/Spanish, there is no single established
 * Arabic-script acronym for this EU regulation. The regulation applies
 * because the controller is established in the EU, regardless of the
 * reader's own country.
 */
export const PRIVACY_AR: LegalContent = {
  h1: "سياسة الخصوصية",
  updated: PRIVACY_UPDATED,
  sections: [
    {
      heading: "من نحن",
      body: [
        "يُدار موقع pdfeditconvert.top من قِبل شركة hrhelperg s.r.o.، وهي شركة تشيكية محدودة المسؤولية، ومقرها المسجّل في Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic. يمكنك مراسلتنا على info@hrhelperg.com.",
      ],
    },
    {
      heading: "ما الذي يجمعه هذا الموقع",
      body: [
        "هذا الموقع معلوماتي بطبيعته. لا يطلب منك إنشاء حساب أو إرسال مستندات أو مشاركة بيانات شخصية لقراءة أي صفحة.",
        "نستخدم أداة تحليلات تحترم الخصوصية (WebmasterID) لفهم الصفحات التي تُزار وكيف يجدنا القراء. تسجّل عنوان الصفحة التي تمت زيارتها، ومنطقتك التقريبية، ونوع الجهاز، والموقع المُحيل. لا تستخدم ملفات تعريف ارتباط إعلانية ولا تبني ملفاً شخصياً عنك في مواقع أخرى.",
      ],
    },
    {
      heading: "ما الذي يجمعه تطبيق الهاتف",
      body: [
        "يمكن لتطبيق PDF Editor حفظ بيانات محلياً على جهازك (الملفات المفتوحة، إعداداتك)، ويمكنه مزامنة الملفات مع خدمة التخزين السحابي التي تختارها (iCloud وGoogle Drive وغيرها) إذا فعّلت هذا الخيار. راجع معلومات الخصوصية الخاصة بالتطبيق في App Store وGoogle Play للحصول على القائمة الرسمية.",
      ],
    },
    {
      heading: "ملفات تعريف الارتباط",
      body: [
        "نستخدم عدداً محدوداً من ملفات تعريف الارتباط وتقنيات التخزين المشابهة لتشغيل الموقع الأساسي وقياس الزيارات. لا نستخدم ملفات تعريف ارتباط إعلانية.",
      ],
    },
    {
      heading: "حقوقك",
      body: [
        "إذا كنت مقيماً في الاتحاد الأوروبي أو المنطقة الاقتصادية الأوروبية، فلديك حقوق بموجب اللائحة العامة لحماية البيانات (GDPR)، منها الوصول والتصحيح والحذف وتقييد المعالجة ونقل البيانات. راسلنا على info@hrhelperg.com لممارستها.",
      ],
    },
    {
      heading: "التواصل",
      body: [
        "يمكن إرسال الأسئلة حول هذه السياسة إلى info@hrhelperg.com.",
      ],
    },
    {
      heading: "التغييرات",
      body: [
        "قد نحدّث هذه السياسة. سيُشار إلى أي تغييرات مهمة في هذه الصفحة، مع تاريخ تحديث جديد.",
      ],
    },
  ],
};

/** Arabic terms of service — a translation of the same terms. */
export const TERMS_AR: LegalContent = {
  h1: "شروط الاستخدام",
  updated: TERMS_UPDATED,
  sections: [
    {
      heading: "عن هذه الشروط",
      body: [
        "تنظّم هذه الشروط استخدام موقع pdfeditconvert.top، الذي تديره شركة hrhelperg s.r.o. (Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic).",
      ],
    },
    {
      heading: "استخدام الموقع",
      body: [
        "يمكنك قراءة صفحات هذا الموقع والربط بها ومشاركتها. لا يمكنك استخراج أجزاء كبيرة من المحتوى لإعادة نشرها، ولا استخدام الموقع بطريقة تزعج أشخاصاً آخرين.",
      ],
    },
    {
      heading: "عن تطبيق PDF Editor",
      body: [
        "PDF Editor تطبيق هاتف يُوزَّع عبر App Store من Apple وGoogle Play. يخضع استخدامه لشروط التطبيق الخاصة به، والتي تظهر أثناء التثبيت.",
      ],
    },
    {
      heading: "دون ضمانات",
      body: [
        "يُقدَّم محتوى pdfeditconvert.top لأغراض معلوماتية عامة ولا يشكّل استشارة قانونية أو ضريبية أو مالية. نبذل جهداً معقولاً للحفاظ على دقته، لكننا لا نضمن أنه كامل أو مناسب لغرض محدد.",
      ],
    },
    {
      heading: "المسؤولية",
      body: [
        "في الحدود التي يسمح بها القانون التشيكي وقانون الاتحاد الأوروبي، لا تتحمل hrhelperg s.r.o. المسؤولية عن الأضرار غير المباشرة أو التبعية الناتجة عن استخدام هذا الموقع.",
      ],
    },
    {
      heading: "القانون المعمول به",
      body: [
        "تخضع هذه الشروط لقوانين جمهورية التشيك. تُحَل أي نزاعات أمام المحاكم التشيكية المختصة.",
      ],
    },
    {
      heading: "التواصل",
      body: [
        "يمكن إرسال الأسئلة حول هذه الشروط إلى info@hrhelperg.com.",
      ],
    },
  ],
};
