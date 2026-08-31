import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "add-watermark-to-pdf",
  hero: {
    eyebrow: "Marca d'água",
    h1: "Coloque uma marca d'água de texto em todas as páginas do PDF.",
    highlight: "todas as páginas",
    lead: "Adicione uma marca d'água simples de texto antes de compartilhar o PDF — escolha posição, opacidade, tamanho da fonte e rotação.",
  },
  privacyNote:
    "Seu arquivo é processado localmente, no seu navegador, e não é enviado aos nossos servidores. Nada sai do seu dispositivo.",
  howTo: {
    heading: "Como adicionar uma marca d'água",
    steps: [
      {
        title: "Escolha o PDF",
        body: "Arraste e solte um único PDF ou clique para escolher o arquivo.",
      },
      {
        title: "Digite o texto",
        body: "Até cerca de 40 caracteres funciona melhor. Exemplos: CONFIDENCIAL, RASCUNHO, Amostra.",
      },
      {
        title: "Ajuste opacidade e ângulo",
        body: "Opacidade baixa deixa a marca discreta; alta, bem visível. O ângulo de 45° serve para a maioria dos layouts.",
      },
      {
        title: "Baixe",
        body: "Reconstruímos o PDF localmente, com a marca d'água em todas as páginas.",
      },
    ],
  },
  useCases: {
    heading: "Quando a marca d'água é útil",
    items: [
      {
        title: "Rascunhos em revisão",
        body: "Marque os documentos como RASCUNHO antes de circular, para evitar confusão.",
      },
      {
        title: "Documentos sigilosos",
        body: "Carimbe CONFIDENCIAL antes de compartilhar contratos ou dados financeiros sensíveis.",
      },
      {
        title: "Materiais de amostra",
        body: "Marque amostras de portfólio para que não sejam reaproveitadas sem autorização.",
      },
      {
        title: "Documentos de uso interno",
        body: "Sinalize o que não deve circular fora da empresa.",
      },
    ],
  },
  limitations: {
    heading: "Limitações",
    items: [
      {
        title: "Somente marca d'água de texto",
        body: "Esta ferramenta carimba texto. Para marca d'água com imagem ou logotipo, use o app PDF Editor.",
      },
      {
        title: "Apenas fontes padrão",
        body: "Usamos a fonte Helvetica embutida para o resultado continuar portátil. Fontes personalizadas não são incorporadas.",
      },
      {
        title: "Marca d'água pode ser removida",
        body: "Marca d'água não é proteção jurídica. Ela desestimula o uso indevido casual, não uma edição determinada.",
      },
    ],
  },
  related: [
    { label: "Juntar arquivos PDF", path: "/merge-pdf" },
    { label: "Dividir PDF", path: "/split-pdf" },
    { label: "Girar PDF", path: "/rotate-pdf" },
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Meu arquivo é enviado para algum servidor?",
      a: "Não. A marca d'água é aplicada inteiramente no seu navegador; nada sai do seu dispositivo.",
    },
    {
      q: "Dá para usar outra fonte?",
      a: "Nesta ferramenta, não — usamos a Helvetica para o resultado ficar portátil. Para fontes personalizadas, use o app PDF Editor.",
    },
    {
      q: "A marca d'água entra em todas as páginas?",
      a: "Entra. O mesmo texto é aplicado na diagonal, no centro de cada página.",
    },
    {
      q: "Uma marca d'água pode ser removida?",
      a: "Por alguém com as ferramentas certas, sim. Ela desestimula o uso indevido casual, mas não é um recurso de segurança.",
    },
  ],
  appCta: {
    heading: "Precisa de marca d'água com imagem ou logotipo?",
    sub: "O PDF Editor para iPhone e Android aceita fontes personalizadas, imagens e posicionamento por página.",
  },
};

export default content;
