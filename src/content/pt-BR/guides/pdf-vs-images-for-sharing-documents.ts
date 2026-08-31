import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-images-for-sharing-documents",
  h1: "PDF ou imagens para compartilhar documentos (JPG, PNG, HEIC)",
  description:
    "Quando um JPG, PNG ou HEIC de um documento é a escolha errada — e o que faz do PDF o formato certo para qualquer coisa além de uma captura de tela rápida.",
  updated: "2026-05-29",
  intro: [
    "Uma quantidade surpreendente de trabalho de empresa e de escola é enviada como imagem — JPGs de contratos, fotos HEIC de apostilas, capturas de tela em PNG de recibos. Parece mais rápido que produzir um PDF, o celular facilita e quem recebe normalmente consegue ler. Mas imagens de documentos são o formato errado para quase todo fluxo de documento de verdade.",
    "PDFs e imagens de documento servem a propósitos diferentes. PDFs têm várias páginas, são pesquisáveis, imprimíveis, assináveis, arquiváveis e não quebram ao girar. Imagens são de uma página só, não são pesquisáveis, muitas vezes ocupam muito espaço e frequentemente saem tremidas, de lado ou com a cor errada. Para qualquer coisa além de um envio único e rápido, o PDF faz o serviço melhor.",
    "Este guia percorre o porquê, os casos em que a imagem de documento realmente serve (existem) e o caminho simples de conversão quando você quer a versão em PDF.",
  ],
  steps: [
    {
      title: "Reconheça quando a imagem de documento é errada",
      body: "Documento de várias páginas: formato errado. Documento que precisa ser impresso: formato errado. Documento que precisa ser pesquisável: formato errado. Qualquer coisa formal que vai para um arquivo: formato errado.",
    },
    {
      title: "Reconheça o pequeno conjunto de casos em que a imagem serve",
      body: "Uma página, efêmero, informal. Uma foto rápida de um recibo para um amigo, a captura de uma tela de confirmação, o registro de uma anotação à mão para você mesmo. A imagem é o formato certo quando aquilo ainda não é bem um documento.",
    },
    {
      title: "Converta com Imagem para PDF quando o envio virar documento",
      body: "A ferramenta Imagem para PDF combina JPG, PNG e WebP em um PDF, no seu navegador. A imagem pode virar pesquisável depois com OCR e fica em um arquivo só, em vez de vários.",
    },
    {
      title: "Use a ferramenta certa para cada origem",
      body: "Fotos → Imagem para PDF. Páginas digitalizadas → Digitalizar em PDF. Documento do Word ou do Pages → Word para PDF. Cada formato de origem tem o caminho de conversão mais limpo.",
    },
    {
      title: "Cuide especificamente do HEIC do iPhone",
      body: "O iPhone usa HEIC por padrão, e nem todo mundo consegue abrir. Converta de HEIC para JPG e depois para PDF, ou use uma ferramenta que lide com HEIC direto. O fluxo de digitalização do app PDF Editor entende HEIC nativamente.",
    },
    {
      title: "Comprima com bom senso",
      body: "Use Comprimir PDF se o arquivo resultante ficar enorme. Conversões de foto para PDF herdam a resolução da foto, que costuma ser mais do que um documento precisa.",
    },
  ],
  tips: [
    "JPG de um documento em retrato tirado no celular é o formato errado. Gire o telefone ou use um aplicativo de digitalização — o resultado fica muito mais legível.",
    "Capturas em PNG convertem bem para PDF, mas fotos em JPG de documentos em papel costumam ficar melhores passando por um aplicativo de digitalização, com detecção de bordas.",
    "Não mande vários JPGs como um documento de várias páginas. Combine em um PDF; quem recebe se perde em conversas com muitos anexos.",
    "O HEIC é padrão no iOS, mas rejeitado por muitos portais e programas de e-mail. Converta antes de compartilhar se você não conhece o equipamento de quem recebe.",
    "Fotos de tela de notebook são o pior caso — moiré, reflexo, baixa resolução. Use a exportação em PDF em vez de fotografar a tela.",
  ],
  mobileNote:
    "O celular é onde os erros de imagem-de-documento mais acontecem. O fluxo de digitalização do app PDF Editor detecta as páginas e já produz PDFs limpos, então um envio rápido vira um documento de verdade sem uma etapa extra de conversão.",
  faq: [
    {
      q: "Por que uma foto de documento é pior que um PDF?",
      a: "Fotos são de uma página só, muitas vezes tortas, não pesquisáveis, podem ser enormes e problemas de rotação ou formato escondem o conteúdo. O PDF resolve tudo isso.",
    },
    {
      q: "JPG é aceitável em algum caso de documento?",
      a: "Em envios informais de uma página, sim — um recibo rápido para um amigo, uma captura para um colega. Em qualquer coisa formal ou de várias páginas, não.",
    },
    {
      q: "E o HEIC?",
      a: "É o formato padrão do iPhone, mas sem suporte universal. Converta para JPG ou PDF antes de compartilhar se quem recebe não usa aparelhos Apple.",
    },
    {
      q: "Como combino várias fotos em um PDF?",
      a: "A ferramenta Imagem para PDF combina JPG, PNG e WebP em um único PDF no seu navegador. Defina a ordem antes de acrescentar; o PDF resultante preserva.",
    },
    {
      q: "O PDF vai deixar o arquivo maior?",
      a: "Depende da origem. Um JPG de documento convertido para PDF sem recompressão fica mais ou menos do mesmo tamanho. A ferramenta Comprimir PDF reduz se precisar.",
    },
  ],
  related: [
    { label: "Imagem para PDF — junte fotos em um arquivo", path: "/image-to-pdf" },
    { label: "PDF ou JPG para documentos", path: "/guides/pdf-vs-jpg-for-documents" },
    { label: "Como converter JPG em PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Como converter fotos em PDF no iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Imagem para PDF", path: "/image-to-pdf" },
};

export default content;
