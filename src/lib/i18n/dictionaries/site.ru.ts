import type { SiteDictionary } from "@/lib/i18n/dictionary";

/**
 * Russian site chrome (ru-RU).
 *
 * Navigation labels are the verb/noun a Russian reader would search for
 * ("Сжатие", "Объединение"), not a literal rendering of the English list.
 * The footer links point at the Russian route ids, so the whole footer
 * graph stays inside ru. Terminology policy:
 * docs/localization/ru-terminology.md.
 */
export const SITE_RU: SiteDictionary = {
  skipToContent: "Перейти к содержимому",

  header: {
    homeAriaLabel: "Главная страница PDF Editor",
    nav: [
      { id: "pdf-editor", label: "Редактор PDF" },
      { id: "pdf-converter", label: "Конвертация" },
      { id: "compress-pdf", label: "Сжатие" },
      { id: "merge-pdf", label: "Объединение" },
      { id: "sign-pdf", label: "Подпись" },
      { id: "guides", label: "Инструкции" },
    ],
    ctaLabel: "Скачать приложение",
    ctaAriaLabel: "Скачать PDF Editor в App Store",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
  },

  switcher: {
    label: "Язык",
    ariaLabel: "Сменить язык",
    currentLabel: "Текущий язык",
  },

  footer: {
    tagline:
      "Универсальное решение для работы с PDF: работа, учёба, повседневные задачи. Редактируйте, конвертируйте, подписывайте и сканируйте PDF с телефона.",
    appEyebrow: "Приложение PDF Editor",
    appHeading: "Берите PDF Editor с собой.",
    appSub: "Бесплатно на iPhone и Android. Без создания аккаунта.",
    columnProduct: "Продукт",
    columnLearn: "Обучение",
    columnCompany: "Компания",
    columnTools: "Бесплатные инструменты",
    product: [
      { id: "pdf-editor", label: "Редактор PDF" },
      { id: "pdf-converter", label: "Конвертер PDF" },
      { id: "compress-pdf", label: "Сжать PDF" },
      { id: "sign-pdf", label: "Подписать PDF" },
      { id: "scan-to-pdf", label: "Сканирование в PDF" },
    ],
    learn: [
      { id: "guides", label: "Все инструкции" },
      { id: "pdf-forms", label: "Формы PDF" },
      {
        id: "guides/how-to-fill-out-a-pdf-form",
        label: "Заполнить форму PDF",
      },
      {
        id: "guides/how-to-convert-pdf-to-word",
        label: "Конвертировать PDF в Word",
      },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "Уменьшить PDF для письма",
      },
      {
        id: "guides/how-to-edit-pdf-on-iphone",
        label: "Редактировать PDF на iPhone",
      },
      { id: "guides/how-to-merge-pdf-files", label: "Объединить файлы PDF" },
      { id: "compare/pdf-vs-docx", label: "PDF или DOCX" },
    ],
    company: [
      { id: "contact", label: "Контакты" },
      { id: "privacy-policy", label: "Конфиденциальность" },
      { id: "terms", label: "Условия" },
    ],
    tools: [
      { id: "pdf-tools", label: "Все бесплатные инструменты" },
      { id: "image-to-pdf", label: "Изображение в PDF" },
      { id: "merge-pdf", label: "Объединить PDF" },
      { id: "split-pdf", label: "Разделить PDF" },
      { id: "rotate-pdf", label: "Повернуть PDF" },
      { id: "pdf-to-images", label: "PDF в изображения" },
      { id: "add-watermark-to-pdf", label: "Водяной знак" },
    ],
    sitemapLabel: "Карта сайта",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. Все права защищены.",
  },

  store: {
    appStoreAria: "Скачать PDF Editor в App Store",
    googlePlayAria: "Скачать PDF Editor в Google Play",
  },

  breadcrumbs: {
    home: "Главная",
    guides: "Инструкции",
    compare: "Сравнения",
    useCases: "Сценарии использования",
    tools: "Инструменты",
  },

  sections: {
    faqHeading: "Часто задаваемые вопросы",
    relatedGuides: "Похожие инструкции",
    readTheGuide: "Читать инструкцию →",
    seeAllGuides: "Смотреть все инструкции",
    browseEveryGuide: "Просмотреть все инструкции по PDF",
    allFreeTools: "Все бесплатные инструменты PDF в браузере",
    relatedTools: "Похожие инструменты PDF",
    stepByStep: "Пошагово",
    tips: "Советы",
    lastUpdated: "Обновлено",
    whenToPick: "Когда выбрать {label}",
    workflowsHeading: "Методы, которые того стоят",
    tryOnPhone: "Попробуйте с телефона",
    takeWithYou: "Берите PDF Editor с собой.",
    freeOnBoth: "Бесплатно на iOS и Android.",
    appEyebrow: "Приложение PDF Editor",
    editOnPhoneHeading: "Редактируйте PDF с телефона.",
    trust: [
      "Файлы обрабатываются локально, в вашем браузере",
      "Без загрузки на сервер, без аккаунта, без водяного знака",
      "Бесплатно: работает на телефоне и компьютере",
    ],
    clusterHeading: {
      one: "Единственная инструкция в этой группе",
      other: "{count} инструкций в этой группе",
    },
    toolGuidesHeading: {
      one: "Инструкция про {label}",
      other: "Инструкции про {label}",
    },
    goToHub: "Перейти в раздел {label} →",
    guideTopicsNav: "Темы инструкций",
  },
};
