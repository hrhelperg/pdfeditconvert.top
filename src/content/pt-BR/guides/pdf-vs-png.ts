import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-png",
  h1: "PDF ou PNG — documentos de várias páginas ou imagens únicas e nítidas",
  description:
    "O PDF ganha em documentos de várias páginas; o PNG ganha em imagens únicas, nítidas e com fundo transparente. As regras claras e a conversão entre os dois.",
  updated: "2026-05-29",
  intro: [
    "PDF e PNG são ótimos naquilo para que servem, e eles servem para coisas diferentes. O PDF guarda documentos de várias páginas, com texto selecionável, fontes incorporadas, assinaturas e estrutura. O PNG guarda imagens de bitmap únicas, com compressão sem perdas e suporte a transparência. Cada um é a ferramenta errada para o serviço do outro, e a confusão vem principalmente de gente usando PNG para mandar o que na verdade é um documento.",
    "O PNG brilha quando você precisa de uma imagem única, nítida e exata — uma logo com fundo transparente, uma captura de tela, um diagrama, um gráfico. Os pixels são o dado; não há texto por baixo. O PDF brilha quando você precisa de páginas, fontes, seleção de texto ou qualquer tipo de estrutura em etapas.",
    "Este guia dá as regras claras de quando usar cada um, a conversão entre eles nos dois sentidos e os casos em que a escolha é mesmo uma questão de julgamento.",
  ],
  steps: [
    {
      title: "Use PDF em qualquer coisa de várias páginas",
      body: "Todo documento com duas páginas ou mais deveria ser um PDF, e não uma sequência de PNGs. O PDF mantém as páginas juntas, preserva a ordem e chega como um arquivo único que a pessoa lê em sequência.",
    },
    {
      title: "Use PNG em imagens únicas e nítidas, com transparência",
      body: "Logos em fundo transparente, diagramas, capturas de tela — o PNG é o formato certo. A compressão sem perdas mantém texto e linhas nítidos; o canal alfa dá conta da transparência.",
    },
    {
      title: "Não use PNG em conteúdo fotográfico",
      body: "Fotos ficam grandes em PNG e não ganham nada com a compressão sem perdas. O JPG dá conta de fotos com qualidade visual parecida em uma fração do tamanho.",
    },
    {
      title: "Converta PDF em PNG para extrair páginas como imagem",
      body: "A ferramenta PDF para imagens exporta cada página do PDF como um PNG de alta resolução. Útil quando você precisa de uma página como imagem única para apresentações, páginas web ou programas de design.",
    },
    {
      title: "Converta PNG em PDF para empacotar capturas em um documento",
      body: "PNG para PDF ou Imagem para PDF combina capturas em PNG em um único PDF. Útil quando você fez muitas capturas e quer compartilhar tudo como um arquivo ordenado.",
    },
    {
      title: "Em uma página cheia de texto, o PDF ainda é melhor",
      body: "Mesmo uma única página de texto ganha com o PDF em vez do PNG — o texto continua selecionável, o arquivo é menor e quem recebe consegue copiar do arquivo.",
    },
  ],
  tips: [
    "PNG de captura de tela tudo bem; PNG de documento de várias páginas está errado. Várias páginas pertencem ao PDF.",
    "Se o seu PNG tem fotos, mude para JPG — mesma qualidade visual, arquivo bem menor.",
    "A conversão de PNG para PDF preserva a imagem em resolução plena; sem perda de qualidade.",
    "A conversão de PDF para PNG deixa você definir a resolução. Mais alta é mais nítida e maior; o dobro da escala costuma ser o equilíbrio certo.",
    "Não “exporte para PNG” um documento que você já tem em PDF, a menos que você precise mesmo do formato de imagem. O PDF é mais útil.",
  ],
  mobileNote:
    "O celular costuma capturar como PNG conteúdo que na verdade deveria ser PDF. O app PDF Editor combina capturas em PNG em um único PDF no aparelho, útil para compartilhar várias capturas como um arquivo ordenado em vez de um punhado espalhado.",
  faq: [
    {
      q: "Quando devo usar PNG em vez de PDF?",
      a: "Quando você precisa de uma imagem única e nítida, principalmente com transparência. Logos, diagramas, capturas de tela, gráficos que vão entrar em outros documentos.",
    },
    {
      q: "PDF ou PNG é menor em uma página só?",
      a: "Depende do conteúdo. Página com muito texto: o PDF ganha. Página com muita imagem: parecido, ou o PNG um pouco maior por ser sem perdas.",
    },
    {
      q: "Dá para editar um PNG dentro de um PDF?",
      a: "Dá — o PDF guarda o PNG e você manipula a imagem com as ferramentas de edição de PDF. Útil para acrescentar logos ou capturas a um documento.",
    },
    {
      q: "Por que o PNG não aceita várias páginas?",
      a: "O PNG é, na essência, um formato de imagem. Formatos de documento de várias páginas (PDF, TIFF) foram feitos para isso. O PNG não.",
    },
    {
      q: "E se eu tiver muitos PNGs para compartilhar?",
      a: "A ferramenta Imagem para PDF junta tudo em um PDF ordenado. Quem recebe fica com um arquivo único em vez de uma pasta de anexos.",
    },
  ],
  related: [
    { label: "PDF para imagens — exporte páginas em PNG ou JPG", path: "/pdf-to-images" },
    { label: "Imagem para PDF — junte PNGs em um único PDF", path: "/image-to-pdf" },
    { label: "Como converter PNG em PDF", path: "/guides/how-to-convert-png-to-pdf" },
    { label: "Como converter PDF em PNG", path: "/guides/how-to-convert-pdf-to-png" },
  ],
  parentHub: { label: "PDF para imagens", path: "/pdf-to-images" },
};

export default content;
