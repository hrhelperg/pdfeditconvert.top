import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-word",
  hero: {
    eyebrow: "PDF para Word",
    h1: "Converta um PDF em Word editável — no seu navegador.",
    highlight: "no seu navegador",
    lead: "Extraia o texto de um PDF para um .docx editável que você retrabalha no Word, no Google Docs ou no Pages. Conversão de texto honesta — sem promessa falsa de “layout perfeito”.",
  },
  privacyNote:
    "Seu arquivo é processado localmente, no seu navegador, e não é enviado aos nossos servidores. Nada sai do seu dispositivo.",
  howTo: {
    heading: "Como converter PDF em Word",
    steps: [
      {
        title: "Escolha o PDF",
        body: "Arraste e solte um PDF com texto, ou clique para escolher um arquivo.",
      },
      {
        title: "Converta",
        body: "Clique em Converter para Word. O texto selecionável é extraído localmente, no seu navegador.",
      },
      {
        title: "Baixe",
        body: "Um arquivo .docx é baixado automaticamente — abra e edite onde quiser.",
      },
      {
        title: "Ajuste",
        body: "Reaplique títulos e formatação no seu editor. O texto fica pronto para você reorganizar.",
      },
    ],
  },
  useCases: {
    heading: "Quando esta é a ferramenta certa",
    items: [
      {
        title: "Reaproveitar cláusulas de contrato",
        body: "Tire trechos de um contrato em PDF para uma minuta editável em vez de redigitar tudo.",
      },
      {
        title: "Reaproveitar um relatório",
        body: "Leve o corpo do texto de um relatório em PDF para um documento que você pode reestruturar.",
      },
      {
        title: "Citar e resumir",
        body: "Extraia trechos para anotações, resumos ou citações sem transcrever à mão.",
      },
      {
        title: "Recuperar um PDF sem arquivo de origem",
        body: "Resgate o texto editável quando o .docx original sumiu faz tempo.",
      },
    ],
  },
  limitations: {
    heading: "Limitações honestas",
    items: [
      {
        title: "O layout não é preservado",
        body: "A ferramenta extrai apenas o texto. Colunas, tabelas, espaçamento exato, fontes e imagens não são reproduzidos — você reaplica a formatação no seu editor.",
      },
      {
        title: "PDFs digitalizados não funcionam",
        body: "PDFs feitos só de imagem não têm camada de texto. O OCR não está disponível no navegador; use o app PDF Editor para digitalizações.",
      },
      {
        title: "Documentos complexos exigem ajuste",
        body: "PDFs muito diagramados (várias colunas, notas de rodapé) são extraídos como um fluxo de texto legível que você vai querer arrumar.",
      },
    ],
  },
  related: [
    { label: "Word para PDF — o caminho inverso", path: "/word-to-pdf" },
    { label: "PDF para imagens", path: "/pdf-to-images" },
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
    { label: "PDF ou DOCX — qual usar", path: "/compare/pdf-vs-docx" },
    {
      label: "Como converter um PDF em Word",
      path: "/guides/how-to-convert-pdf-to-word",
    },
  ],
  faq: [
    {
      q: "Meu arquivo é enviado para algum servidor?",
      a: "Não. A extração do texto roda inteiramente no seu navegador. Seu PDF nunca sai do seu dispositivo.",
    },
    {
      q: "O arquivo do Word vai ficar igualzinho ao PDF?",
      a: "Não — e não vamos fingir o contrário. Esta é uma conversão de texto prática. Layout, fontes, colunas e imagens não são preservados; você reaplica a formatação no seu editor.",
    },
    {
      q: "Apareceu “nenhum texto encontrado” — por quê?",
      a: "Seu PDF provavelmente é uma digitalização ou um arquivo só de imagem, sem camada de texto. Ferramentas de navegador não fazem OCR; o app PDF Editor faz.",
    },
    {
      q: "Qual formato eu recebo?",
      a: "Um arquivo .docx padrão, que abre no Microsoft Word, no Google Docs, no Pages e no LibreOffice.",
    },
    {
      q: "Dá para converter de volta?",
      a: "Dá — use a ferramenta Word para PDF para transformar o .docx editado de volta em PDF.",
    },
  ],
  appCta: {
    heading: "Precisa de ferramentas de PDF na correria?",
    sub: "O PDF Editor para iPhone e Android converte, edita e assina documentos direto do celular.",
  },
};

export default content;
