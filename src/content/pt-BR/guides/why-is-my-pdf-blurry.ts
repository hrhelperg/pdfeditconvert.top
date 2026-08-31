import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blurry",
  h1: "Por que meu PDF está borrado? Resolução, compressão e digitalização",
  description:
    "PDFs borrados vêm de digitalização em baixa resolução, compressão agressiva ou exportação ruim — não do formato em si. Como descobrir a causa e recuperar a nitidez.",
  updated: "2026-05-29",
  intro: [
    "O PDF em si não borra nada. O formato guarda sem problema texto vetorial afiadíssimo e imagens em alta resolução. Então, quando um PDF parece macio, embaçado ou pixelado, o borrão veio de algo específico: uma captura em baixa resolução, uma compressão que foi longe demais ou um ajuste de exportação que achatou conteúdo nítido em bitmaps.",
    "Saber qual dessas causou o seu arquivo importa, porque as soluções são completamente diferentes. Você não “descomprime” um arquivo que já foi espremido, mas pode reexportar da origem, digitalizar de novo em uma resolução melhor ou escolher outra ferramenta de conversão. E, em alguns arquivos, o borrão está só na tela — o original continua em qualidade cheia, apenas renderizado para baixo pelo leitor.",
    "Este guia separa as causas e mostra a solução prática de cada uma, inclusive quando não há o que fazer sem voltar à origem.",
  ],
  steps: [
    {
      title: "Dê zoom e olhe as bordas",
      body: "Bordas nítidas no texto e borradas nas imagens significam que o texto é vetorial (limpo) e só as fotos estão degradadas — normalmente por compressão. Texto borrado significa que a página inteira é uma imagem, o que aponta para uma digitalização ou uma exportação por captura de tela.",
    },
    {
      title: "Confira a resolução original da captura",
      body: "Digitalizações abaixo de 150 DPI ficam borradas de qualquer jeito. De 200 a 300 DPI é a faixa segura para documentos lidos na tela; 600 é exagero para tudo, menos arquivamento e impressão de fotos.",
    },
    {
      title: "Investigue se a compressão passou do ponto",
      body: "Arquivos reduzidos na compressão “extrema” costumam parecer bons a 100% de zoom e terríveis a 200%. Se você tem o original antes da compressão, dá para recomprimir num ajuste mais suave — a ferramenta Comprimir PDF permite trocar tamanho por nitidez.",
    },
    {
      title: "Reexporte da origem, se você a tiver",
      body: "Documentos criados no Word, no Pages, no Google Docs ou em ferramentas de design devem ser exportados em PDF direto da origem, e não impressos em PDF a partir de uma captura de tela. A exportação direta mantém o texto vetorial e nítido.",
    },
    {
      title: "Digitalize de novo com ajustes melhores",
      body: "Se o problema é a digitalização e você ainda tem o papel, refaça em 300 DPI com boa iluminação. Digitalizações de celular ganham muito com a página plana e luz uniforme — uma captura limpa vale mais que qualquer tratamento posterior.",
    },
    {
      title: "Confirme se o arquivo não está só sendo reduzido na tela",
      body: "Alguns leitores reduzem a resolução por desempenho e parecem macios até você dar zoom. Exporte uma página em PNG com a ferramenta PDF para imagens em escala 2× ou 3× — se o PNG estiver nítido, o seu leitor estava mentindo.",
    },
  ],
  tips: [
    "Texto que você consegue selecionar com o cursor é texto vetorial e não deveria estar borrado. Se estiver, o seu leitor está renderizando para baixo — teste outro leitor antes de reexportar.",
    "Prints de celular inseridos em um documento já são de baixa resolução. Eles vão sempre parecer macios em um PDF; não há solução sem recapturar em tamanho maior.",
    "Não comprima um arquivo duas vezes. Compressões repetidas acumulam borrão. Guarde o original, comprima uma vez para compartilhar e arquive a origem.",
    "PDFs cheios de JPEG borram mais que os cheios de PNG na mesma compressão — o JPEG tem perdas por natureza. Prints em PNG continuam nítidos por mais tempo.",
    "Se você só tem uma versão borrada, o OCR às vezes recupera texto legível mesmo com a imagem embaçada. O texto fica limpo, ainda que a imagem não fique.",
  ],
  mobileNote:
    "PDFs capturados no celular borram principalmente por mão trêmula, pouca luz ou enquadramento ruim. O fluxo de digitalização do app PDF Editor inclui detecção automática de bordas e estabilização, então uma captura firme por página gera um documento nítido de primeira.",
  faq: [
    {
      q: "O borrão é causado pelo próprio formato PDF?",
      a: "Não. O PDF guarda texto como vetor e imagens na resolução de origem. O borrão vem da origem — DPI baixo, compressão agressiva ou exportação por captura de tela.",
    },
    {
      q: "Dá para deixar um PDF borrado nítido depois?",
      a: "Quase nada. Algum processamento de imagem pode simular nitidez em fotos, mas não dá para adicionar detalhe que nunca foi capturado. A solução honesta é refazer a etapa de origem.",
    },
    {
      q: "Por que o meu PDF comprimido está borrado só em algumas páginas?",
      a: "A compressão pega mais pesado nas páginas cheias de imagem. Páginas só de texto continuam nítidas. Se só algumas estão borradas, são as que têm fotos, gráficos ou digitalizações.",
    },
    {
      q: "Que resolução de digitalização devo usar?",
      a: "De 200 a 300 DPI para documentos lidos na tela. 300 DPI para qualquer coisa que você possa imprimir. 600 DPI só para fotos e arquivamento.",
    },
    {
      q: "Por que o PDF fica bom em 100% e borrado em 200%?",
      a: "Ou ele foi rasterizado em baixa resolução, ou foi comprimido além do ponto em que o zoom revela a perda. Não há como recuperar o detalhe sem reexportar.",
    },
  ],
  related: [
    { label: "Comprimir PDF — escolha ajustes mais suaves para um resultado nítido", path: "/compress-pdf" },
    { label: "PDF para imagens — exporte páginas em alta resolução", path: "/pdf-to-images" },
    { label: "Melhores configurações de compressão de PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Como melhorar a qualidade de um PDF digitalizado", path: "/guides/how-to-fix-scanned-pdf-quality" },
  ],
  parentHub: { label: "PDF para imagens", path: "/pdf-to-images" },
};

export default content;
