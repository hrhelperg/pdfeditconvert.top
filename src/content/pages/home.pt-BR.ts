import type { HomeContent } from "@/types/content";

/**
 * Brazilian Portuguese homepage copy.
 *
 * "Sem upload" is kept in English rather than translated to "sem envio":
 * *upload* is the word Brazilians actually use for this, and the whole
 * privacy claim rests on the reader recognising it instantly.
 */
export const HOME_PT_BR: HomeContent = {
  heroEyebrow: "Ferramentas de PDF grátis no navegador",
  heroH1Before: "Converta, junte e edite PDFs ",
  heroH1Highlight: "em segundos",
  heroH1After: "",
  heroLead:
    "Ferramentas de PDF grátis que rodam no seu navegador, com processamento local e privado — nada é enviado para servidor nenhum.",
  trust: [
    "Os arquivos são processados localmente, no seu navegador",
    "Sem upload, sem conta e sem marca d'água",
    "Grátis — funciona no celular e no computador",
  ],
  browseAllToolsLabel: "Ver todas as ferramentas de PDF →",
  toolsEyebrow: "Grátis, no seu navegador",
  toolsHeading: "Todas as ferramentas de PDF que você precisa — sem upload.",
  toolsLead:
    "Junte, divida, gire, marque e converta PDFs sem sair da página. Cada ferramenta roda localmente no seu navegador.",
  toolBadge: "Ferramenta grátis",
  tools: [
    { id: "image-to-pdf", label: "Imagem para PDF", desc: "Reúna JPG, PNG e WebP em um só PDF." },
    { id: "merge-pdf", label: "Juntar PDF", desc: "Combine vários PDFs em um documento." },
    { id: "split-pdf", label: "Dividir PDF", desc: "Separe páginas por intervalo." },
    { id: "rotate-pdf", label: "Girar PDF", desc: "Endireite páginas deitadas." },
    { id: "pdf-to-images", label: "PDF para imagens", desc: "Exporte páginas em PNG ou JPG." },
    {
      id: "add-watermark-to-pdf",
      label: "Marca d'água",
      desc: "Carimbe um texto em todas as páginas.",
    },
    {
      id: "compress-pdf",
      label: "Comprimir PDF",
      desc: "Reduza o tamanho para e-mail e envio.",
    },
    { id: "pdf-to-word", label: "PDF para Word", desc: "Extraia o texto para um .docx editável." },
    { id: "word-to-pdf", label: "Word para PDF", desc: "Transforme um .docx ou .txt em PDF limpo." },
    {
      id: "reorder-pdf-pages",
      label: "Organizar páginas",
      desc: "Veja a prévia, reordene e baixe.",
    },
    {
      id: "extract-pdf-pages",
      label: "Extrair páginas",
      desc: "Salve as páginas escolhidas em um novo PDF.",
    },
  ],
  appBandEyebrow: "Também no iPhone e no Android · cinco ferramentas do dia a dia",
  featureBand: [
    { key: "edit", label: "Editar", sub: "Texto, imagens, páginas" },
    { key: "convert", label: "Converter", sub: "Word, JPG, PNG" },
    { key: "secure", label: "Proteger", sub: "Senha no arquivo" },
    { key: "scan", label: "Digitalizar", sub: "Papel em PDF" },
    { key: "organize", label: "Organizar", sub: "Reordenar, dividir" },
  ],
  hubsHeading: "Tudo o que você faz com PDF — explicado.",
  hubsLead:
    "Guias práticos e fluxos de trabalho para o que as pessoas realmente fazem com PDF todo dia.",
  hubs: [
    { id: "pdf-editor", label: "Editor de PDF", desc: "Edite texto, imagens e páginas." },
    {
      id: "pdf-converter",
      label: "Conversor de PDF",
      desc: "Converta para Word, JPG, PNG e mais.",
    },
    {
      id: "compress-pdf",
      label: "Comprimir PDF",
      desc: "Reduza o arquivo sem perder qualidade.",
    },
    { id: "sign-pdf", label: "Assinar PDF", desc: "Assine direto pelo celular." },
    { id: "scan-to-pdf", label: "Digitalizar para PDF", desc: "Transforme papel em PDFs limpos." },
    {
      id: "pdf-security",
      label: "Segurança de PDF",
      desc: "Proteja documentos com senha.",
    },
    {
      id: "pdf-for-business",
      label: "PDF para empresas",
      desc: "Contratos e cobranças de onde estiver.",
    },
    {
      id: "pdf-for-students",
      label: "PDF para estudantes",
      desc: "Anotações, grifos e resumos.",
    },
    {
      id: "pdf-forms",
      label: "Formulários PDF",
      desc: "Preencha, assine e salve PDFs editáveis.",
    },
  ],
  guidesHeading: "Guias mais lidos",
  guideBadge: "Guia",
  featuredGuides: [
    { id: "guides/how-to-edit-pdf-on-iphone", label: "Como editar um PDF no iPhone" },
    { id: "guides/how-to-edit-pdf-on-android", label: "Como editar um PDF no Android" },
    { id: "guides/how-to-compress-pdf", label: "Como comprimir um PDF" },
    { id: "guides/how-to-sign-pdf-on-phone", label: "Como assinar um PDF pelo celular" },
  ],
  browseAllGuidesLabel: "Ver todos os {count} guias de PDF →",
  finalCtaHeading: "Leve o PDF Editor com você.",
  finalCtaSub: "Grátis no iOS e no Android. Não precisa criar conta para começar.",
  faq: [
    {
      q: "O PDF Editor é grátis?",
      a: "Sim. Os recursos principais de edição, digitalização, compressão e assinatura são gratuitos. Alguns recursos avançados são liberados no PDF Editor Pro.",
    },
    {
      q: "Funciona sem conexão com a internet?",
      a: "Edição, organização de páginas, assinatura e compressão funcionam offline. A sincronização com a nuvem e o OCR podem exigir conexão.",
    },
    {
      q: "Quais aparelhos são compatíveis?",
      a: "O PDF Editor está disponível para iPhone e iPad (iOS 16 ou superior) e para celulares e tablets Android (Android 9 ou superior).",
    },
    {
      q: "Meus arquivos ficam privados?",
      a: "Sim. Os arquivos ficam no seu aparelho, a não ser que você escolha compartilhá-los. Não enviamos os seus documentos para os nossos servidores.",
    },
    {
      q: "Posso usar isso em documentos jurídicos?",
      a: "Muita gente assina e envia contratos com o PDF Editor. Não damos orientação jurídica — confira as regras locais sobre assinatura eletrônica antes de contar com ela em um documento crítico.",
    },
  ],
};
