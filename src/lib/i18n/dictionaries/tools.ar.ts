import type { ToolDictionary } from "@/lib/i18n/toolStrings";

/**
 * Arabic tool copy. Terminology policy: docs/localization/ar-terminology.md.
 *
 * The first step is "إضافة" (add), never "رفع" (upload). "رفع" reads as
 * *upload to a server* to an Arabic speaker, which is exactly what these
 * tools do not do — it would contradict the privacy sentence printed
 * directly beneath the button. Range-format examples ("1-3", "2,4,6") keep
 * Latin punctuation exactly as written — that is the literal syntax a
 * reader must type into the field, not prose, so it is not converted to
 * Arabic punctuation. Output filenames are romanized ASCII, since the file
 * lands in the reader's own downloads folder and has to stay safe across
 * every filesystem.
 */
export const TOOLS_AR: ToolDictionary = {
  common: {
    privacyText: "تُعالَج ملفاتك محلياً في متصفحك.",
    fileMoveUp: "نقل {name} للأعلى في القائمة",
    fileMoveDown: "نقل {name} للأسفل في القائمة",
    fileRemove: "إزالة {name}",
    downloadAgain: "تنزيل مرة أخرى",
    startOver: "البدء من جديد",
    tryNext: "جرّب هذا أيضاً",
    clearAll: "مسح الكل",
    appCtaHeading: "تحتاج أدوات PDF أثناء التنقل؟",
    dropPdfLabel: "أفلت ملف PDF هنا أو انقر لاختياره",
    dropPdfHint: "ملف PDF واحد · حتى 100 ميجابايت",
    genericErrorMessage: "حدث خطأ ما. حاول مرة أخرى أو استخدم ملفاً أصغر.",
    errors: {
      not_pdf: { message: "«{name}» ليس ملف PDF." },
      not_image: {
        message: "«{name}» ليس صيغة صورة مدعومة. استخدم JPG أو PNG أو WebP.",
      },
      not_word: {
        message: "«{name}» ليس ملف Word (.docx) ولا ملف .txt.",
      },
      legacy_doc: {
        message: "لا يمكن قراءة ملفات «.doc» القديمة في المتصفح.",
        hint: "احفظ المستند بصيغة «.docx» وحاول مرة أخرى.",
      },
      too_large: {
        message: "«{name}» كبير جداً ({size} ميجابايت).",
        hint: "الحد الأقصى هو {limit} ميجابايت لكل ملف، لأن المعالجة تتم بالكامل في متصفحك.",
      },
      unreadable_pdf: {
        message: "تعذّر فتح هذا الملف.",
        hint: "قد يكون تالفاً أو محمياً بكلمة مرور. ألغِ القفل عنه أو أصلحه وحاول مرة أخرى.",
      },
      invalid_range: {
        message: "أدخل نطاق صفحات صالحاً.",
        hint: "استخدم مثلاً 1-3 أو 2,4,6.",
      },
      memory: {
        message: "قد يكون هذا الملف كبيراً جداً للمعالجة في المتصفح.",
        hint: "جرّب ملف PDF أصغر أو قسّمه إلى أجزاء أولاً.",
      },
      too_many_files: { message: "أضف {limit} ملفات كحد أقصى في المرة الواحدة." },
      too_few_files: { message: "أضف ملفَي PDF على الأقل لدمجهما." },
      canvas_unsupported: { message: "هذا المتصفح لا يدعم Canvas." },
      encode_failed: { message: "تعذّر ترميز الصورة." },
      generic: {
        message: "حدث خطأ ما. حاول مرة أخرى أو استخدم ملفاً أصغر.",
      },
    },
  },
  tools: {
    "image-to-pdf": {
      title: "صورة إلى PDF",
      subtitle: "اختر صور JPG أو PNG أو WebP واجمعها في ملف PDF واحد.",
      steps: ["إضافة", "ضبط", "تنزيل"],
      successTitle: "ملف PDF الخاص بك جاهز",
      actionIdle: "التحويل إلى PDF",
      actionBusy: "جارٍ التحويل…",
      appCtaSub: "يعمل تطبيق PDF Editor لآيفون وأندرويد دون اتصال أيضاً.",
      related: [
        { id: "merge-pdf", label: "دمج ملفَي PDF" },
        { id: "add-watermark-to-pdf", label: "إضافة علامة مائية" },
      ],
      dropLabel: "أفلت صورك هنا أو انقر لاختيارها",
      dropHint: "JPG أو PNG أو WebP · حتى 100 ميجابايت لكل صورة",
      busyCreating: "جارٍ إنشاء ملف PDF الخاص بك…",
      errorNoImages: "أضف صورة واحدة على الأقل.",
      pageSizeLabel: "حجم الصفحة",
      pageSizeAuto: "تلقائي",
      orientationLabel: "الاتجاه",
      orientationAuto: "تلقائي",
      orientationPortrait: "طولي",
      orientationLandscape: "عرضي",
      fitLabel: "ملاءمة الصورة",
      fitFit: "ملاءمة مع الصفحة",
      fitFill: "ملء الصفحة",
      marginLabel: "الهامش",
      marginNone: "بلا",
      marginSmall: "صغير",
      marginMedium: "متوسط",
      outputFilename: "suwar.pdf",
    },
    "merge-pdf": {
      title: "دمج ملفات PDF",
      subtitle: "اختر ملفَي PDF أو أكثر وادمجها في مستند واحد.",
      steps: ["إضافة", "ضبط", "تنزيل"],
      successTitle: "ملف PDF المدمج جاهز",
      actionIdle: "دمج ملفات PDF",
      actionBusy: "جارٍ الدمج…",
      appCtaSub: "يدمج تطبيق PDF Editor لآيفون وأندرويد ملفاتك ويقسّمها أيضاً.",
      related: [
        { id: "split-pdf", label: "تقسيم PDF" },
        { id: "rotate-pdf", label: "تدوير الصفحات" },
      ],
      dropLabel: "أفلت ملفات PDF هنا أو انقر لاختيارها",
      dropHint: "PDF · حتى 100 ميجابايت لكل ملف",
      busyMerging: "جارٍ دمج ملفات PDF…",
      errorTooFew: "أضف ملفَي PDF على الأقل لدمجهما.",
      outputFilename: "pdf-madmouj.pdf",
    },
    "split-pdf": {
      title: "تقسيم PDF",
      subtitle:
        "اختر ملف PDF وحدد نطاق الصفحات الذي تريد تصديره. أمثلة: 1-3 أو 2,4,6.",
      steps: ["إضافة", "ضبط", "تنزيل"],
      successTitle: "ملف PDF بالصفحات المختارة جاهز",
      actionIdle: "تقسيم PDF",
      actionBusy: "جارٍ التقسيم…",
      appCtaSub: "يقسّم تطبيق PDF Editor لآيفون وأندرويد الصفحات ويعيد ترتيبها أيضاً.",
      related: [
        { id: "merge-pdf", label: "دمج PDF" },
        { id: "rotate-pdf", label: "تدوير الصفحات" },
      ],
      busyExtracting: "جارٍ استخراج الصفحات…",
      rangeLabel: "الصفحات المتبقية (من أصل {total})",
      rangeHint: "أمثلة: 1-3 أو 2,4,6 أو 1-3,5,8-10",
      rangePlaceholder: "مثال: 1-3 أو 2,4,6",
      outputSuffix: "-safahat-{first}-ila-{last}",
    },
    "compress-pdf": {
      title: "ضغط PDF",
      subtitle:
        "قلّل حجم ملف PDF للإرسال بالبريد الإلكتروني أو لمرفق نموذج أو للحفظ — مباشرة في المتصفح.",
      steps: ["إضافة", "ضبط", "تنزيل"],
      successTitle: "ملف PDF المضغوط جاهز",
      actionIdle: "ضغط PDF",
      actionBusy: "جارٍ الضغط…",
      appCtaSub: "يضغط تطبيق PDF Editor لآيفون وأندرويد ملفاتك ويشاركها أيضاً.",
      related: [
        { id: "merge-pdf", label: "دمج PDF" },
        { id: "split-pdf", label: "تقسيم PDF" },
      ],
      busyReading: "جارٍ قراءة PDF…",
      busyPage: "جارٍ ضغط الصفحة {page} من {total}…",
      busyFinalizing: "جارٍ الإنهاء…",
      levelLabel: "مستوى الضغط",
      levelLow: "منخفض",
      levelRecommended: "موصى به",
      levelStrong: "قوي",
      levelNote:
        "يحوّل الضغط القوي الصفحات إلى صور (لن يعود النص قابلاً للتحديد). هذا هو الخيار الأفضل لملفات PDF الممسوحة ضوئياً أو المليئة بالصور.",
      summaryAlreadyCompact:
        "هذا الملف يتكوّن غالباً من نص ورسومات متجهية، وهو مضغوط بالفعل ({size}). لن يفيد ضغطه أكثر، لذلك أبقينا على الملف الأصلي كما هو.",
      summaryReduced:
        "تم التصغير من {from} إلى {to} (أقل بنسبة {percent}%). تم تحويل الصفحات إلى صور، لذا لم يعد النص قابلاً للتحديد.",
      outputSuffix: "-madghout",
    },
    "rotate-pdf": {
      title: "تدوير PDF",
      subtitle:
        "دوّر جميع الصفحات أو الصفحات التي تختارها ونزّل ملف PDF المصحح.",
      steps: ["إضافة", "ضبط", "تنزيل"],
      successTitle: "ملف PDF المُدوَّر جاهز",
      actionIdle: "تدوير PDF",
      actionBusy: "جارٍ التدوير…",
      appCtaSub: "يدوّر تطبيق PDF Editor لآيفون وأندرويد الصفحات ويعيد ترتيبها أيضاً.",
      related: [
        { id: "split-pdf", label: "تقسيم PDF" },
        { id: "add-watermark-to-pdf", label: "إضافة علامة مائية" },
      ],
      busyRotating: "جارٍ تدوير الصفحات…",
      angleLabel: "الدوران",
      scopeLabel: "التطبيق على",
      scopeAll: "جميع الصفحات",
      scopeSome: "صفحات محددة",
      rangeLabel: "الصفحات المراد تدويرها",
      rangeHint: "أمثلة: 1-3 أو 2,4,6",
      rangePlaceholder: "مثال: 1,3-5",
      outputSuffix: "-mudawwar",
    },
    "pdf-to-images": {
      title: "PDF إلى صور",
      subtitle: "حوّل صفحات PDF إلى ملفات صور جاهزة للتنزيل.",
      steps: ["إضافة", "ضبط", "تنزيل"],
      successTitle: "صورك جاهزة",
      successDescription: "تم تنزيل كل صفحة كملف منفصل.",
      actionIdle: "التحويل إلى صور",
      actionBusy: "جارٍ التحويل…",
      appCtaSub: "يرسم تطبيق PDF Editor لآيفون وأندرويد الصفحات بتسريع الأجهزة.",
      related: [
        { id: "image-to-pdf", label: "صورة إلى PDF — الاتجاه المعاكس" },
        { id: "split-pdf", label: "تقسيم PDF" },
      ],
      busyLoading: "جارٍ تحميل PDF…",
      busyPage: "جارٍ إنشاء الصفحة {page} من {total}…",
      formatLabel: "الصيغة",
      scaleLabel: "المقياس",
      qualityLabel: "جودة JPEG",
      rangeLabel: "الصفحات (اختياري)",
      rangeHint: "اتركه فارغاً لتحويل جميع الصفحات. أمثلة: 1-3 أو 2,4,6",
      rangePlaceholder: "جميع الصفحات",
      downloadedSummary: {
        one: "تم تنزيل صورة واحدة (الأخيرة: {filename})",
        other: "تم تنزيل {count} صورة (الأخيرة: {filename})",
      },
    },
    "add-watermark-to-pdf": {
      title: "إضافة علامة مائية إلى PDF",
      subtitle: "ضع علامة مائية نصية قبل مشاركة ملف PDF.",
      steps: ["إضافة", "ضبط", "تنزيل"],
      successTitle: "ملف PDF مع العلامة المائية جاهز",
      actionIdle: "إضافة العلامة المائية",
      actionBusy: "جارٍ التطبيق…",
      appCtaSub: "يختم تطبيق PDF Editor لآيفون وأندرويد مستنداتك ويوقّعها أيضاً.",
      related: [
        { id: "merge-pdf", label: "دمج PDF" },
        { id: "rotate-pdf", label: "تدوير الصفحات" },
      ],
      busyStamping: "جارٍ تطبيق العلامة على الصفحات…",
      textLabel: "نص العلامة المائية",
      textDefault: "سري",
      errorEmptyText: "لا يمكن أن يكون نص العلامة المائية فارغاً.",
      positionLabel: "الموضع",
      positionCenter: "المنتصف",
      positionTopLeft: "أعلى اليسار",
      positionTopRight: "أعلى اليمين",
      positionBottomLeft: "أسفل اليسار",
      positionBottomRight: "أسفل اليمين",
      fontSizeLabel: "حجم الخط",
      opacityLabel: "الشفافية",
      angleLabel: "الزاوية",
      outputSuffix: "-alama-maiya",
    },
    "pdf-to-word": {
      title: "PDF إلى Word",
      subtitle:
        "استرجع نص ملف PDF في مستند .docx قابل للتحرير — مباشرة في متصفحك.",
      steps: ["إضافة", "تحويل", "تنزيل"],
      successTitle: "مستند Word الخاص بك جاهز",
      successDescription:
        "تم استخراج النص القابل للتحرير إلى ملف .docx. لا يُحافَظ على التنسيق الأصلي أو الأعمدة أو الصور.",
      actionIdle: "التحويل إلى Word",
      actionBusy: "جارٍ التحويل…",
      appCtaSub: "يحوّل تطبيق PDF Editor لآيفون وأندرويد المستندات ويحررها أيضاً.",
      related: [
        { id: "word-to-pdf", label: "Word إلى PDF — الاتجاه المعاكس" },
        { id: "pdf-to-images", label: "PDF إلى صور" },
      ],
      dropHint: "ملف PDF واحد · حتى 100 ميجابايت · فقط ملفات PDF التي تحتوي نصاً",
      explainerTitle: "ماذا تفعل هذه الأداة",
      explainerBody:
        "تستخرج النص القابل للتحديد من ملف PDF وتحفظه في ملف Word (.docx) قابل للتحرير. لا تعيد إنتاج التنسيق أو الخطوط أو الأعمدة أو الجداول أو الصور من الملف الأصلي — إنه تحويل نصي صادق وعملي. ملف PDF الممسوح ضوئياً (صورة فقط) لا يحتوي طبقة نص ولا يمكن تحويله هنا.",
      busyReading: "جارٍ قراءة PDF…",
      busyPage: "جارٍ استخراج نص الصفحة {page} من {total}…",
      busyBuilding: "جارٍ إنشاء مستند Word…",
      errorNoText:
        "لم يُعثر على نص قابل للتحديد. يبدو أن هذا الملف مسح ضوئي: سيحتاج إلى OCR، وهذه الأداة في المتصفح لا تقوم بذلك.",
    },
    "word-to-pdf": {
      title: "Word إلى PDF",
      subtitle:
        "حوّل مستند .docx أو .txt إلى ملف PDF نظيف — مباشرة في متصفحك.",
      steps: ["إضافة", "تحويل", "تنزيل"],
      successTitle: "ملف PDF الخاص بك جاهز",
      successDescription:
        "تم تنسيق النص في ملف PDF نظيف بحجم A4. لا يُحافَظ على الخطوط أو الصور أو الجداول أو التباعد الدقيق لملف .docx الأصلي.",
      actionIdle: "التحويل إلى PDF",
      actionBusy: "جارٍ التحويل…",
      appCtaSub: "يحوّل تطبيق PDF Editor لآيفون وأندرويد المستندات ويوقّعها أيضاً.",
      related: [
        { id: "pdf-to-word", label: "PDF إلى Word — الاتجاه المعاكس" },
        { id: "image-to-pdf", label: "صورة إلى PDF" },
      ],
      dropLabel: "أفلت ملف .docx أو .txt هنا أو انقر لاختياره",
      dropHint: "Word .docx أو نص عادي .txt · حتى 100 ميجابايت",
      explainerTitle: "ماذا تفعل هذه الأداة",
      explainerBody:
        "تقرأ النص من ملف Word (.docx) أو ملف نصي عادي (.txt) وتنسّقه في ملف PDF نظيف ومقسّم إلى صفحات بحجم A4. إنه تحويل نصي صادق — لا يُحافَظ على الخطوط أو الصور أو الجداول أو التنسيق الدقيق للملف الأصلي. صيغة .doc الثنائية القديمة غير مدعومة؛ احفظ الملف أولاً بصيغة .docx.",
      busyReading: "جارٍ قراءة المستند…",
      busyBuilding: "جارٍ إنشاء PDF…",
      errorEmptyDocument: "يبدو المستند فارغاً — لا يوجد نص لتحويله.",
      errorUnreadable:
        "تعذّر قراءة هذا المستند. احفظه مجدداً بصيغة .docx وحاول مرة أخرى.",
    },
    "reorder-pdf-pages": {
      title: "إعادة ترتيب صفحات PDF",
      subtitle:
        "عاين كل صفحة، رتّبها بالترتيب الذي تريده ونزّل الملف.",
      steps: ["إضافة", "إعادة الترتيب", "تنزيل"],
      successTitle: "ملف PDF المُعاد ترتيبه جاهز",
      actionIdle: "إعادة ترتيب PDF",
      actionBusy: "جارٍ الإنشاء…",
      appCtaSub: "يعيد تطبيق PDF Editor لآيفون وأندرويد ترتيب الصفحات ويدمجها أيضاً.",
      related: [
        { id: "merge-pdf", label: "دمج PDF" },
        { id: "extract-pdf-pages", label: "استخراج الصفحات" },
      ],
      busyBuilding: "جارٍ إنشاء PDF المُعاد ترتيبه…",
      prepRendering: "جارٍ إنشاء معاينات الصفحات…",
      prepRenderingProgress: "جارٍ إنشاء معاينات الصفحات… ({done}/{total})",
      instructions: {
        one: "صفحة واحدة. استخدم الأسهم لتقديم الصفحة أو تأخيرها ثم أنشئ ملف PDF.",
        other:
          "{count} صفحة. استخدم الأسهم لتقديم الصفحة أو تأخيرها ثم أنشئ ملف PDF.",
      },
      positionLabel: "الموضع {position}",
      wasPageLabel: "كانت الصفحة {page}",
      originalPageAlt: "الصفحة الأصلية {page}",
      moveEarlier: "تقديم الموضع {position}",
      moveLater: "تأخير الموضع {position}",
      resetOrder: "استعادة الترتيب",
      outputSuffix: "-muaad-tarteebuh",
    },
    "extract-pdf-pages": {
      title: "استخراج صفحات PDF",
      subtitle:
        "اختر صفحات أو نطاقات محددة ونزّل ملف PDF جديداً يحتوي عليها فقط.",
      steps: ["إضافة", "اختيار", "تنزيل"],
      successTitle: "ملف PDF بالصفحات المستخرجة جاهز",
      actionIdle: "استخراج الصفحات",
      actionBusy: "جارٍ الاستخراج…",
      appCtaSub: "يستخرج تطبيق PDF Editor لآيفون وأندرويد الصفحات ويعيد ترتيبها أيضاً.",
      related: [
        { id: "split-pdf", label: "تقسيم PDF" },
        { id: "reorder-pdf-pages", label: "إعادة ترتيب صفحات PDF" },
      ],
      busyExtracting: "جارٍ استخراج الصفحات…",
      pageCountNote: {
        one: "يحتوي ملف PDF هذا على صفحة واحدة.",
        other: "يحتوي ملف PDF هذا على {count} صفحة.",
      },
      rangeLabel: "الصفحات المراد استخراجها",
      rangeHint: "أمثلة: 1-3 · 2,4,6 · 1-2,5,8-10",
      rangePlaceholder: "مثال: 1-3,5",
      selectedNote: {
        one: "تم اختيار صفحة واحدة من أصل {total}.",
        other: "تم اختيار {count} صفحة من أصل {total}.",
      },
      outputSuffix: "-safahat",
    },
  },
};
