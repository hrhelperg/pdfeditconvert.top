import type { SiteDictionary } from "@/lib/i18n/dictionary";

/**
 * Brazilian Portuguese site chrome.
 *
 * Navigation labels are the noun a Brazilian reader would search for
 * ("Comprimir", "Juntar"), not a literal rendering of the English verb list.
 * The footer links point at the Portuguese route ids, so the whole footer
 * graph stays inside pt-BR.
 */
export const SITE_PT_BR: SiteDictionary = {
  skipToContent: "Pular para o conteúdo",

  header: {
    homeAriaLabel: "Página inicial do PDF Editor",
    nav: [
      { id: "pdf-editor", label: "Editor de PDF" },
      { id: "pdf-converter", label: "Converter" },
      { id: "compress-pdf", label: "Comprimir" },
      { id: "merge-pdf", label: "Juntar" },
      { id: "sign-pdf", label: "Assinar" },
      { id: "guides", label: "Guias" },
    ],
    ctaLabel: "Baixar o app",
    ctaAriaLabel: "Baixar o PDF Editor na App Store",
    openMenu: "Abrir o menu",
    closeMenu: "Fechar o menu",
  },

  switcher: {
    label: "Idioma",
    ariaLabel: "Mudar de idioma",
    currentLabel: "Idioma atual",
  },

  footer: {
    tagline:
      "A solução completa de PDF para o trabalho, os estudos e o dia a dia. Edite, converta, assine e digitalize PDFs pelo celular.",
    appEyebrow: "App PDF Editor",
    appHeading: "Leve o PDF Editor com você.",
    appSub: "Grátis no iPhone e no Android. Sem precisar criar conta.",
    columnProduct: "Produto",
    columnLearn: "Aprender",
    columnCompany: "Empresa",
    columnTools: "Ferramentas grátis",
    product: [
      { id: "pdf-editor", label: "Editor de PDF" },
      { id: "pdf-converter", label: "Conversor de PDF" },
      { id: "compress-pdf", label: "Comprimir PDF" },
      { id: "sign-pdf", label: "Assinar PDF" },
      { id: "scan-to-pdf", label: "Digitalizar para PDF" },
    ],
    learn: [
      { id: "guides", label: "Todos os guias" },
      { id: "pdf-forms", label: "Formulários PDF" },
      {
        id: "guides/how-to-fill-out-a-pdf-form",
        label: "Preencher um formulário PDF",
      },
      {
        id: "guides/how-to-convert-pdf-to-word",
        label: "Converter PDF em Word",
      },
      {
        id: "guides/how-to-reduce-pdf-file-size-for-email",
        label: "Reduzir o PDF para enviar por e-mail",
      },
      {
        id: "guides/how-to-edit-pdf-on-iphone",
        label: "Editar PDF no iPhone",
      },
      { id: "guides/how-to-merge-pdf-files", label: "Juntar PDFs" },
      { id: "compare/pdf-vs-docx", label: "PDF ou DOCX" },
    ],
    company: [
      { id: "contact", label: "Contato" },
      { id: "privacy-policy", label: "Privacidade" },
      { id: "terms", label: "Termos" },
    ],
    tools: [
      { id: "pdf-tools", label: "Todas as ferramentas grátis" },
      { id: "image-to-pdf", label: "Imagem para PDF" },
      { id: "merge-pdf", label: "Juntar PDF" },
      { id: "split-pdf", label: "Dividir PDF" },
      { id: "rotate-pdf", label: "Girar PDF" },
      { id: "pdf-to-images", label: "PDF para imagens" },
      { id: "add-watermark-to-pdf", label: "Marca d'água" },
    ],
    sitemapLabel: "Mapa do site",
    sitemapHref: "/sitemap.xml",
    rights: "© {year} hrhelperg s.r.o. Todos os direitos reservados.",
  },

  store: {
    appStoreAria: "Baixar o PDF Editor na App Store",
    googlePlayAria: "Baixar o PDF Editor no Google Play",
  },

  breadcrumbs: {
    home: "Início",
    guides: "Guias",
    compare: "Comparações",
    useCases: "Casos de uso",
    tools: "Ferramentas",
  },

  sections: {
    faqHeading: "Perguntas frequentes",
    relatedGuides: "Guias relacionados",
    readTheGuide: "Ler o guia →",
    seeAllGuides: "Ver todos os guias",
    browseEveryGuide: "Ver todos os guias de PDF",
    allFreeTools: "Todas as ferramentas de PDF grátis no navegador",
    relatedTools: "Ferramentas de PDF relacionadas",
    stepByStep: "Passo a passo",
    tips: "Dicas",
    lastUpdated: "Atualizado em",
    whenToPick: "Quando escolher {label}",
    workflowsHeading: "Fluxos de trabalho que valem a pena",
    tryOnPhone: "Teste no seu celular",
    takeWithYou: "Leve o PDF Editor com você.",
    freeOnBoth: "Grátis no iOS e no Android.",
    appEyebrow: "App PDF Editor",
    editOnPhoneHeading: "Edite PDFs pelo celular.",
    trust: [
      "Os arquivos são processados localmente, no seu navegador",
      "Sem upload, sem conta e sem marca d'água",
      "Grátis — funciona no celular e no computador",
    ],
    clusterHeading: {
      one: "O único guia deste grupo",
      other: "Todos os {count} guias deste grupo",
    },
    toolGuidesHeading: {
      one: "Guia sobre {label}",
      other: "Guias sobre {label}",
    },
    goToHub: "Ir para {label} →",
    guideTopicsNav: "Temas dos guias",
  },
};
