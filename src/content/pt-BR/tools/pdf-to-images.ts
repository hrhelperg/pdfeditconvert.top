import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-images",
  hero: {
    eyebrow: "PDF para imagens",
    h1: "Exporte cada página do PDF em PNG ou JPG.",
    highlight: "PNG ou JPG",
    lead: "Transforme as páginas de um PDF em arquivos de imagem PNG ou JPEG para baixar — renderizados localmente, no seu navegador.",
  },
  privacyNote:
    "Seu arquivo é renderizado localmente, no seu navegador, e não é enviado aos nossos servidores. Nada sai do seu dispositivo.",
  howTo: {
    heading: "Como converter PDF em imagens",
    steps: [
      {
        title: "Escolha o PDF",
        body: "Arraste e solte um único PDF ou clique para escolher o arquivo.",
      },
      {
        title: "Escolha o formato",
        body: "PNG para texto nítido e transparência; JPG para arquivos menores.",
      },
      {
        title: "Escolha a escala",
        body: "Escala maior deixa a imagem mais nítida e o arquivo maior. 2× costuma ser o ponto certo.",
      },
      { title: "Baixe", body: "Cada página é baixada como um arquivo de imagem separado." },
    ],
  },
  useCases: {
    heading: "Quando esta ferramenta é útil",
    items: [
      {
        title: "Colar uma página no Slack",
        body: "A prévia da imagem aparece direto na conversa, coisa que o PDF não faz.",
      },
      {
        title: "Reaproveitar um gráfico numa apresentação",
        body: "Tire uma página do PDF e cole em um slide.",
      },
      {
        title: "Criar miniaturas",
        body: "Monte uma folha de contato com as páginas do PDF para revisar rápido.",
      },
      {
        title: "Prévias na web",
        body: "Use as imagens renderizadas como prévias leves em um site.",
      },
    ],
  },
  limitations: {
    heading: "Limitações",
    items: [
      {
        title: "Memória do navegador",
        body: "PDFs muito grandes em escala alta podem esgotar a memória. Tente a escala 1,5× ou divida o PDF antes.",
      },
      {
        title: "PDFs protegidos por senha",
        body: "Arquivos criptografados não podem ser renderizados. Desbloqueie antes ou use o app PDF Editor.",
      },
      {
        title: "O conteúdo vetorial vira imagem",
        body: "Imagens não preservam texto pesquisável. Guarde o PDF original se você precisar disso.",
      },
    ],
  },
  related: [
    { label: "Imagem para PDF — o caminho inverso", path: "/image-to-pdf" },
    { label: "Dividir PDF", path: "/split-pdf" },
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Meu arquivo é enviado para algum servidor?",
      a: "Não. A renderização roda inteiramente no seu navegador; nada sai do seu dispositivo.",
    },
    {
      q: "PNG ou JPG — qual escolher?",
      a: "O PNG é mais nítido para texto e aceita transparência. O JPG é menor e resolve bem para fotos e páginas inteiras capturadas.",
    },
    {
      q: "O que significa a escala?",
      a: "Quantos pixels de imagem para cada ponto do PDF. 2× dá um resultado nítido em telas de alta resolução. 3× gera arquivos grandes, porém muito nítidos.",
    },
    {
      q: "Dá para baixar tudo em um ZIP?",
      a: "Ainda não — as páginas são baixadas uma a uma. Para exportar em lote, o app PDF Editor é mais rápido.",
    },
  ],
  appCta: {
    heading: "Precisa de ferramentas de PDF sem internet?",
    sub: "O PDF Editor para iPhone e Android renderiza páginas na hora, com aceleração de hardware.",
  },
};

export default content;
