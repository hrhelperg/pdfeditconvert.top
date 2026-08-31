import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "image-to-pdf",
  hero: {
    eyebrow: "Imagem para PDF",
    h1: "Transforme imagens JPG, PNG e WebP em um único PDF.",
    highlight: "um único PDF",
    lead: "Escolha imagens JPG, PNG ou WebP e reúna todas em um só PDF. Reordene as páginas e baixe — as imagens continuam no seu dispositivo.",
  },
  privacyNote:
    "Seus arquivos são processados localmente, no seu navegador, e não são enviados aos nossos servidores. Nada sai do seu dispositivo.",
  howTo: {
    heading: "Como usar a ferramenta Imagem para PDF",
    steps: [
      {
        title: "Escolha as imagens",
        body: "Arraste e solte arquivos JPG, PNG ou WebP, ou clique para selecioná-los no seu dispositivo.",
      },
      {
        title: "Reordene se precisar",
        body: "Use as setas para cima e para baixo de cada linha para colocar as páginas na sequência certa.",
      },
      {
        title: "Gere o PDF",
        body: "Clique em Converter para PDF. Suas imagens viram páginas de um único documento, dimensionadas conforme cada imagem.",
      },
      {
        title: "Baixe",
        body: "O PDF gerado é baixado automaticamente. Você pode renomeá-lo depois de salvar.",
      },
    ],
  },
  useCases: {
    heading: "Quando esta ferramenta é útil",
    items: [
      {
        title: "Fotos de recibos e despesas",
        body: "Junte um mês inteiro de recibos em um PDF antes de mandar para a contabilidade.",
      },
      {
        title: "Documentos digitalizados",
        body: "Combine a frente e o verso de um documento em um único arquivo que o portal do órgão aceita.",
      },
      {
        title: "Prints em um relatório",
        body: "Reúna uma sequência de prints de tela em um documento de revisão organizado.",
      },
      {
        title: "Fotos do quadro branco",
        body: "Transforme uma sequência de fotos de uma reunião em um documento que a equipe pode folhear.",
      },
    ],
  },
  limitations: {
    heading: "Limitações",
    items: [
      {
        title: "Só JPG, PNG e WebP",
        body: "HEIC, AVIF, GIF e TIFF não são aceitos no navegador. Converta antes ou use o app para celular.",
      },
      {
        title: "Memória do navegador",
        body: "Lotes muito grandes (centenas de fotos em alta resolução) podem deixar aparelhos mais antigos lentos.",
      },
      {
        title: "Sem OCR",
        body: "O texto dentro das imagens não é extraído. Para PDFs pesquisáveis, digitalize com o app PDF Editor.",
      },
    ],
  },
  related: [
    { label: "Juntar arquivos PDF", path: "/merge-pdf" },
    { label: "PDF para imagens", path: "/pdf-to-images" },
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
  ],
  faq: [
    {
      q: "Minhas imagens são enviadas para algum lugar?",
      a: "Não. Tudo roda no seu navegador. Suas imagens nunca saem do seu dispositivo.",
    },
    {
      q: "Existe limite de tamanho de arquivo?",
      a: "Sim — cada arquivo é limitado a 100 MB para o navegador continuar respondendo bem. O app PDF Editor dá conta de lotes maiores, com aceleração de hardware.",
    },
    {
      q: "Dá para mudar o tamanho da página?",
      a: "Cada página acompanha as dimensões em pixels da sua imagem, então as proporções ficam corretas. Para uma saída uniforme em A4, use o app PDF Editor.",
    },
    {
      q: "Funciona no iPhone e no Android?",
      a: "Sim, em qualquer navegador de celular atual. Para uso frequente, o app PDF Editor é mais rápido e aceita fotos HEIC direto da galeria.",
    },
  ],
  appCta: {
    heading: "Precisa disso no celular toda semana?",
    sub: "O PDF Editor para iPhone e Android digitaliza, organiza e assina PDFs sem internet.",
  },
};

export default content;
