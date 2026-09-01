import type { LocaleRouteEntry } from "@/lib/i18n/routeMap";
import { RU_GUIDE_ROUTES } from "@/content/ru/routes.guides";

/**
 * Russian route manifest — the localization manifest for ru.
 *
 * One entry per English route this locale publishes. `id` is the English
 * route id; `slug` is the permanent Russian URL after the `/ru` prefix.
 * Category, priority, change frequency and lastmod policy are inherited —
 * see buildLocaleRoutes.
 *
 * Slug conventions (also recorded in docs/localization/ru-terminology.md):
 *
 * - ASCII-transliterated (romanized), not native Cyrillic script — matches
 *   the principle already established for pt-BR/fr/es/de/it: avoid
 *   percent-encoded URLs in links, sharing and analytics.
 * - A simple, readable transliteration a search-savvy reader would
 *   recognize, not strict scholarly transliteration.
 * - Translated section prefixes: instrukcii/, sravnenie/,
 *   scenarii-ispolzovaniya/.
 */
export const RU_ROUTE_MANIFEST: readonly LocaleRouteEntry[] = [
  {
    id: "",
    slug: "",
    title: "PDF Editor — редактирование, конвертация, подпись и сканирование PDF на телефоне",
    description:
      "Универсальное решение для работы с PDF: работа, учёба, повседневные задачи. Редактируйте, конвертируйте, сжимайте, объединяйте, подписывайте и сканируйте PDF прямо с телефона с приложением PDF Editor для iOS и Android.",
  },
  {
    id: "pdf-editor",
    slug: "redaktor-pdf",
    title: "Редактор PDF — редактирование текста, изображений и страниц на телефоне",
    description:
      "Редактируйте PDF на iPhone или Android: меняйте текст, добавляйте изображения, меняйте порядок страниц и подписывайте документы. Узнайте, как приложение PDF Editor делает редактирование с телефона простым.",
  },
  {
    id: "pdf-converter",
    slug: "konverter-pdf",
    title: "Конвертер PDF — конвертация PDF в Word, JPG, PNG и другие форматы",
    description:
      "Конвертируйте PDF в Word, Excel, JPG, PNG и обратно. Узнайте, как удобнее всего это делать с телефона — с приложением PDF Editor на iOS и Android.",
  },
  {
    id: "compress-pdf",
    slug: "szhat-pdf",
    title: "Сжать PDF — уменьшение размера файла в браузере (бесплатно, без загрузки)",
    description:
      "Уменьшите размер PDF-файла прямо в браузере, с настраиваемыми уровнями сжатия. Бесплатно, без регистрации, без загрузки на сервер — файл никогда не покидает ваше устройство.",
  },
  {
    id: "pdf-to-word",
    slug: "pdf-v-word",
    title: "PDF в Word — конвертация PDF в редактируемый DOCX в браузере",
    description:
      "Извлеките текст PDF в редактируемый документ Word (.docx) прямо в браузере. Бесплатно, без загрузки — честная текстовая конвертация, а не ложное обещание сохранить вёрстку.",
  },
  {
    id: "word-to-pdf",
    slug: "word-v-pdf",
    title: "Word в PDF — конвертация DOCX или TXT в PDF в браузере",
    description:
      "Превратите файл Word .docx или .txt в чистый PDF прямо в браузере. Бесплатно, без регистрации, без загрузки — документ никогда не покидает ваше устройство.",
  },
  {
    id: "reorder-pdf-pages",
    slug: "izmenit-poryadok-stranits-pdf",
    title: "Изменить порядок страниц PDF — прямо в браузере (бесплатно, без загрузки)",
    description:
      "Просмотрите каждую страницу и измените порядок страниц PDF простыми элементами управления, затем скачайте файл с новым порядком. Бесплатно, без регистрации, без загрузки — файлы остаются на вашем устройстве.",
  },
  {
    id: "extract-pdf-pages",
    slug: "izvlech-stranitsy-pdf",
    title:
      "Извлечь страницы из PDF — сохранить выбранные страницы как новый PDF (бесплатно, без загрузки)",
    description:
      "Выберите конкретные страницы или диапазоны и скачайте новый PDF только с ними, прямо в браузере. Бесплатно, без регистрации, без загрузки — файлы никогда не покидают ваше устройство.",
  },
  {
    id: "merge-pdf",
    slug: "obedinit-pdf",
    title: "Объединить PDF — в браузере (бесплатно, без загрузки)",
    description:
      "Объедините несколько PDF-файлов в один прямо в браузере. Бесплатно, без регистрации, без загрузки — файлы никогда не покидают ваше устройство.",
  },
  {
    id: "split-pdf",
    slug: "razdelit-pdf",
    title: "Разделить PDF — извлечение страниц в браузере (бесплатно, без загрузки)",
    description:
      "Разделите PDF по диапазону страниц прямо в браузере. Бесплатно, без регистрации, без загрузки — файлы остаются на вашем устройстве.",
  },
  {
    id: "sign-pdf",
    slug: "podpisat-pdf",
    title: "Подписать PDF — добавление электронной подписи с телефона",
    description:
      "Подписывайте PDF с телефона настоящей рукописной подписью или введённым именем. Юридически принимается в большинстве случаев. Попробуйте приложение PDF Editor.",
  },
  {
    id: "scan-to-pdf",
    slug: "skanirovat-v-pdf",
    title: "Сканирование в PDF — превратите бумажные документы в чистые PDF-файлы",
    description:
      "Используйте камеру телефона, чтобы сканировать документы, удостоверения личности и чеки в чистые, доступные для поиска PDF-файлы. Приложение PDF Editor автоматически распознаёт края страницы.",
  },
  {
    id: "pdf-security",
    slug: "bezopasnost-pdf",
    title: "Безопасность PDF — защита паролем и шифрование PDF-файлов",
    description:
      "Защищайте конфиденциальные PDF-файлы паролями и шифрованием. Практическое руководство по защите документов на iPhone и Android.",
  },
  {
    id: "pdf-for-business",
    slug: "pdf-dlya-biznesa",
    title: "PDF для бизнеса — договоры, счета и рабочие процессы",
    description:
      "Как небольшие команды используют PDF для договоров, счетов и согласований. Современные рабочие процессы с упором на телефон и приложение PDF Editor.",
  },
  {
    id: "pdf-for-students",
    slug: "pdf-dlya-studentov",
    title: "PDF для студентов — конспекты, выделения и учебные материалы",
    description:
      "Используйте PDF для конспектов лекций, выделений и учебных материалов. Удобные способы работы с телефона с приложением PDF Editor на iOS и Android.",
  },
  {
    id: "pdf-forms",
    slug: "formy-pdf",
    title: "Формы PDF — заполнение, подпись и работа с заполняемыми PDF",
    description:
      "Узнайте, как устроены формы PDF и как их заполнять, подписывать, создавать и исправлять. Полный обзор интерактивных и неинтерактивных заполняемых PDF — на компьютере и на телефоне.",
  },
  {
    id: "guides",
    slug: "instrukcii",
    title: "Инструкции по PDF — практические статьи и руководства",
    description:
      "Практические инструкции по PDF с упором на телефон: редактирование, конвертация, сжатие, объединение, подпись и защита документов на iPhone и Android.",
  },
  {
    id: "compare/pdf-vs-docx",
    slug: "sravnenie/pdf-ili-docx",
    title: "PDF или DOCX — подробное сравнение форматов",
    description:
      "Сравните PDF и DOCX по редактируемости, точности отображения, подписи, безопасности и удобству передачи. Выберите подходящий формат для задачи.",
  },
  {
    id: "compare/pdf-vs-jpg",
    slug: "sravnenie/pdf-ili-jpg",
    title: "PDF или JPG — когда использовать каждый формат",
    description:
      "PDF против JPG: когда сканировать, а когда фотографировать. Сравнение качества, размера файла, распознавания текста и удобства для работы с документами.",
  },
  {
    id: "compare/pdf-app-vs-online-pdf-tools",
    slug: "sravnenie/prilozhenie-pdf-ili-onlain-instrumenty",
    title: "Приложения для PDF или онлайн-инструменты — что лучше?",
    description:
      "Нативные приложения для PDF против инструментов на основе браузера: сравнение скорости, конфиденциальности и работы без подключения к интернету.",
  },
  {
    id: "use-cases/freelancers",
    slug: "scenarii-ispolzovaniya/frilansery",
    title: "PDF Editor для фрилансеров — предложения и подписанные документы",
    description:
      "Рабочие процессы, которые любят фрилансеры: предложения, подписанные договорённости и счета — всё с телефона.",
  },
  {
    id: "use-cases/remote-work",
    slug: "scenarii-ispolzovaniya/udalyonnaya-rabota",
    title: "PDF Editor для удалённой работы — документы в любом месте",
    description:
      "Работайте с документами в дороге: сканируйте, подписывайте и делитесь PDF-файлами с любого устройства, из любого места.",
  },
  {
    id: "pdf-tools",
    slug: "instrumenty-pdf",
    title: "Бесплатные инструменты PDF — работают в браузере, без загрузки на сервер",
    description:
      "Бесплатные инструменты PDF, которые полностью работают в браузере. Объединяйте, разделяйте, поворачивайте, добавляйте водяные знаки, конвертируйте изображения в PDF и PDF в изображения — файлы никогда не покидают ваше устройство.",
  },
  {
    id: "image-to-pdf",
    slug: "izobrazhenie-v-pdf",
    title: "Изображение в PDF — конвертация JPG, PNG, WebP в PDF в браузере",
    description:
      "Объедините изображения JPG, PNG и WebP в один PDF-файл прямо в браузере. Бесплатно, без загрузки, без регистрации — файлы остаются на вашем устройстве.",
  },
  {
    id: "rotate-pdf",
    slug: "povernut-pdf",
    title: "Повернуть PDF — исправление ориентации страниц в браузере",
    description:
      "Поверните все или отдельные страницы PDF на 90°, 180° или 270° прямо в браузере. Бесплатно и приватно — файлы никогда не покидают ваше устройство.",
  },
  {
    id: "pdf-to-images",
    slug: "pdf-v-izobrazheniya",
    title: "PDF в изображения — экспорт страниц PDF в PNG или JPG",
    description:
      "Превратите любой PDF в изображения PNG или JPG, постранично, в браузере. Бесплатно, без загрузки, без аккаунта — работает полностью на вашем устройстве.",
  },
  {
    id: "add-watermark-to-pdf",
    slug: "vodyanoi-znak-na-pdf",
    title: "Добавить водяной знак на PDF — бесплатно, приватно, в браузере",
    description:
      "Добавьте текстовый водяной знак на каждую страницу PDF прямо в браузере. Бесплатно, без загрузки, без регистрации — файлы остаются на вашем устройстве.",
  },
  {
    id: "privacy-policy",
    slug: "politika-konfidentsialnosti",
    title: "Политика конфиденциальности",
    description: "Как pdfeditconvert.top и hrhelperg s.r.o. обрабатывают ваши данные.",
  },
  {
    id: "terms",
    slug: "usloviya-ispolzovaniya",
    title: "Условия использования",
    description: "Условия, регулирующие использование сайта pdfeditconvert.top.",
  },
  {
    id: "contact",
    slug: "kontakty",
    title: "Контакты — PDF Editor от hrhelperg s.r.o.",
    description: "Свяжитесь с командой, стоящей за PDF Editor. Email: info@hrhelperg.com.",
  },

  ...RU_GUIDE_ROUTES,
];
