import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "rotate-pdf",
  hero: {
    eyebrow: "Girar PDF",
    h1: "Endireite páginas de PDF deitadas — no seu navegador.",
    highlight: "no seu navegador",
    lead: "Gire todas as páginas ou só as que você escolher e baixe o PDF corrigido — tudo no seu navegador.",
  },
  privacyNote:
    "Seu arquivo é processado localmente, no seu navegador, e não é enviado aos nossos servidores. Nada sai do seu dispositivo.",
  howTo: {
    heading: "Como girar um PDF",
    steps: [
      {
        title: "Escolha o PDF",
        body: "Arraste e solte um único PDF ou clique para escolher o arquivo.",
      },
      { title: "Escolha o ângulo", body: "Selecione 90°, 180° ou 270° (no sentido horário)." },
      {
        title: "Escolha as páginas",
        body: "Gire todas as páginas ou informe os números (por exemplo, 1,3-5).",
      },
      {
        title: "Gire e baixe",
        body: "Clique em Girar PDF. Reconstruímos o arquivo localmente com a nova orientação.",
      },
    ],
  },
  useCases: {
    heading: "Quando girar é a escolha certa",
    items: [
      {
        title: "Digitalizações do celular saíram deitadas",
        body: "Fotos de documentos costumam ser salvas na horizontal — endireite com um clique.",
      },
      {
        title: "Relatórios com orientação misturada",
        body: "Tabelas largas em páginas deitadas no meio de um relatório em pé? Corrija sem digitalizar de novo.",
      },
      {
        title: "Documentos de identidade",
        body: "Garanta que todas as páginas fiquem na mesma direção antes que o portal do órgão reclame.",
      },
      {
        title: "Recibos e notas",
        body: "Deixe uma pilha de fotos de recibos legível na mesma direção antes de juntar tudo.",
      },
    ],
  },
  limitations: {
    heading: "Limitações",
    items: [
      {
        title: "PDFs protegidos por senha",
        body: "Arquivos bloqueados não podem ser girados no navegador. Desbloqueie antes ou use o app PDF Editor.",
      },
      {
        title: "Ângulos diferentes por página",
        body: "A ferramenta aplica um ângulo por vez. Para ângulos diferentes, rode-a duas vezes com seleções de páginas distintas.",
      },
      {
        title: "Anotações e campos de formulário",
        body: "A rotação pode deslocar visualmente as camadas sobrepostas. O app para celular lida melhor com anotações.",
      },
    ],
  },
  related: [
    { label: "Juntar arquivos PDF", path: "/merge-pdf" },
    { label: "Dividir PDF", path: "/split-pdf" },
    { label: "Marca d'água em PDF", path: "/add-watermark-to-pdf" },
    { label: "Organizar páginas do PDF", path: "/reorder-pdf-pages" },
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Meu arquivo é enviado para algum servidor?",
      a: "Não. A rotação roda inteiramente no seu navegador; nada sai do seu dispositivo.",
    },
    {
      q: "Dá para girar só algumas páginas?",
      a: "Dá. Use o campo de seleção de páginas, por exemplo 1,3-5,9.",
    },
    {
      q: "Girar reduz a qualidade?",
      a: "Não. As páginas são mantidas byte a byte; só ajustamos a informação de rotação do arquivo.",
    },
    {
      q: "Dá para girar um PDF protegido por senha?",
      a: "No navegador, não. Remova a senha antes ou use o app PDF Editor.",
    },
  ],
  appCta: {
    heading: "Gire pelo celular também.",
    sub: "O PDF Editor para iPhone e Android edita, gira e assina PDFs sem internet.",
  },
};

export default content;
