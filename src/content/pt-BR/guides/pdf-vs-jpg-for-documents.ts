import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-jpg-for-documents",
  h1: "PDF ou JPG para documentos: pare de mandar foto",
  description:
    "Por que mandar a foto JPG de um documento é a escolha errada, quando o PDF é o formato certo e como transformar uma foto em documento de verdade.",
  updated: "2026-05-23",
  intro: [
    "Alguém pede um documento e o caminho mais rápido é fotografar e mandar o JPG. Parece eficiente. É também por isso que a outra pessoa acaba apertando os olhos diante de uma imagem torta e cheia de reflexo, sem conseguir imprimir direito, pesquisar nem arquivar junto com o resto. Para um documento de verdade, a foto em JPG é quase sempre o formato errado — e o PDF é quase sempre o certo.",
    "Este guia explica a diferença onde ela importa: em documentos. Não é uma tabela neutra de recursos — é o argumento para converter aquela foto em PDF antes de enviar, e um jeito rápido de fazer isso com a ferramenta gratuita Imagem para PDF, que roda no seu aparelho sem enviar nada.",
    "Se você já recebeu cinco JPGs que deveriam ter sido um PDF organizado, este é o guia para mandar de volta.",
  ],
  steps: [
    {
      title: "Entenda o que uma foto JPG perde",
      body: "Um documento fotografado é uma única imagem: nada de várias páginas no mesmo arquivo, nada de texto pesquisável, e quase sempre torto e mal iluminado. É a figura de um documento, não um documento.",
    },
    {
      title: "Veja o que o PDF dá a um documento",
      body: "O PDF guarda várias páginas em um arquivo, imprime em um tamanho previsível, abre igual em todo lugar e convive naturalmente com outros documentos. É o formato que o resto do mundo arquiva.",
    },
    {
      title: "Decida pelo propósito",
      body: "Se quem recebe vai ler, imprimir, arquivar ou combinar com outros documentos, mande PDF. Um JPG solto só resolve quando a imagem em si é o assunto — uma foto, não papelada.",
    },
    {
      title: "Converta a foto em PDF",
      body: "Abra a ferramenta Imagem para PDF, adicione os JPGs, coloque na ordem e gere um PDF só. Várias páginas fotografadas viram um documento único, em vez de imagens espalhadas.",
    },
    {
      title: "Faça parecer um documento",
      body: "Recorte e endireite as fotos antes, para as páginas ficarem quadradas. Em qualquer coisa importante, uma digitalização de verdade, com detecção de bordas, ganha de uma foto crua.",
    },
    {
      title: "Ajuste o tamanho e envie",
      body: "Comprima o PDF se as páginas fotografadas o deixaram pesado e mande um arquivo limpo que a pessoa consiga realmente usar.",
    },
  ],
  tips: [
    "O sinal de que você deveria ter mandado um PDF: a pessoa pede para você “mandar como documento de verdade” ou não consegue imprimir direito.",
    "Várias páginas é o argumento decisivo. Dois JPGs de um formulário de duas páginas é bagunça; um PDF é documento.",
    "Um JPG de texto não é pesquisável. PDFs feitos de texto real são, e até digitalizações podem ficar pesquisáveis com reconhecimento de texto.",
    "O JPG é a escolha certa quando a imagem é o conteúdo — uma foto de produto, um print que você compartilha como imagem. Ele é errado quando o conteúdo é um documento.",
    "Converter não conserta uma foto ruim. Endireite e ilumine bem a página antes de converter, ou digitalize direito.",
  ],
  mobileNote:
    "Como o JPG problemático quase sempre nasce como foto de celular, a solução também mora no celular. O app PDF Editor transforma fotos da galeria em PDF ou digitaliza a página direito, com detecção de bordas e reconhecimento de texto — então o que você manda é um documento, não um instantâneo.",
  faq: [
    {
      q: "Por que eu não deveria simplesmente mandar um JPG do documento?",
      a: "Uma foto JPG é uma imagem única, muitas vezes torta, sem texto pesquisável, sem suporte a várias páginas e com tamanho de impressão imprevisível. Para um documento, isso gera trabalho para quem recebe. O PDF evita tudo isso.",
    },
    {
      q: "Quando o JPG é realmente a escolha certa?",
      a: "Quando a imagem em si é o conteúdo — uma fotografia, um print que você compartilha como figura. O JPG é errado especificamente quando o conteúdo é um documento que alguém precisa ler, imprimir ou arquivar.",
    },
    {
      q: "Como transformo uma foto em documento PDF?",
      a: "Use a ferramenta Imagem para PDF: adicione os JPGs, coloque na ordem e gere um PDF. Para um resultado melhor, endireite as fotos antes ou digitalize a página direito.",
    },
    {
      q: "O PDF convertido vai ser pesquisável?",
      a: "A partir de uma foto simples, não — ele continua sendo uma imagem. Para conseguir texto pesquisável, digitalize o documento com reconhecimento de texto pelo app PDF Editor em vez de apenas fotografar.",
    },
    {
      q: "Existe uma comparação neutra entre os dois formatos?",
      a: "Existe. Para um paralelo entre PDF e JPG em qualidade, tamanho e uso, veja a página de comparação PDF ou JPG.",
    },
  ],
  related: [
    { label: "Imagem para PDF — transforme fotos em documento", path: "/image-to-pdf" },
    { label: "PDF ou JPG — comparação de recursos", path: "/compare/pdf-vs-jpg" },
    { label: "Como converter JPG em PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Como criar um PDF com a câmera do celular", path: "/guides/how-to-create-pdf-from-camera" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
