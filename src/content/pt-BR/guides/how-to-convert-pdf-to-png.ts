import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-png",
  h1: "Como converter PDF em PNG (imagens de página nítidas e sem perdas)",
  description:
    "Exporte páginas de PDF como imagens PNG de alta qualidade no navegador. Por que o PNG mantém texto e diagramas nítidos, além de notas sobre escala e transparência.",
  updated: "2026-05-23",
  intro: [
    "Quando você precisa de uma página de PDF como imagem e essa página é cheia de texto, tabela ou diagrama, o PNG é o formato a escolher. Ele não tem perdas, então as letras continuam nítidas em vez de ganharem bordas embaçadas — a diferença fica óbvia assim que você dá zoom em uma nota fiscal ou em um esquema convertido.",
    "Este guia usa a ferramenta gratuita PDF para imagens, que renderiza cada página do PDF como uma imagem para baixar, no seu navegador e sem enviar nada. O PNG é um dos dois formatos de saída e é o que se escolhe sempre que a nitidez vale mais que o tamanho do arquivo.",
    "A seguir: como obter o resultado mais nítido sem inchar o arquivo, quando vale escolher PNG em vez de JPG e o que ter em mente sobre imagens de página em geral.",
  ],
  steps: [
    {
      title: "Abra a ferramenta PDF para imagens",
      body: "Vá até a ferramenta PDF para imagens. Ela renderiza as páginas localmente, no seu navegador — sem upload e sem conta.",
    },
    {
      title: "Escolha o PDF",
      body: "Arraste o PDF até a área de soltar ou clique para escolhê-lo. A ferramenta prepara todas as páginas para exportação.",
    },
    {
      title: "Escolha o formato PNG",
      body: "Selecione PNG. Ele não tem perdas e mantém texto, tabelas e traços nítidos — a escolha certa para documentos, diagramas e tudo em que você vai dar zoom.",
    },
    {
      title: "Defina a escala para a nitidez",
      body: "Escolha uma escala: 2× fica nítido na maioria das telas; 3× fica extra nítido para impressão ou telas grandes, mas gera arquivos grandes. Ajuste a escala ao uso real da imagem.",
    },
    {
      title: "Exporte as páginas",
      body: "Rode a conversão. Cada página é baixada como um PNG próprio, pronto para inserir em um documento, apresentação ou página web.",
    },
    {
      title: "Use a página que interessa",
      body: "Guarde o PNG que você queria e descarte os outros. Em um PDF longo, dividir antes deixa menos arquivos para administrar.",
    },
  ],
  tips: [
    "Escolha PNG em vez de JPG sempre que a página tiver texto, tabelas ou linhas nítidas — a compressão do JPG amacia visivelmente essas bordas.",
    "Arquivos PNG são maiores que JPGs. Se você exporta muitas páginas e o tamanho importa mais que a nitidez, o JPG é a escolha pragmática.",
    "Uma página de PDF não tem transparência, então o PNG exportado fica sobre um fundo branco sólido, ainda que o PNG aceite transparência.",
    "Escala maior não melhora uma origem ruim. Se o próprio PDF tem uma digitalização embaçada, um PNG em 3× só renderiza o borrão em resolução mais alta.",
    "Imagens de página não são pesquisáveis — não há camada de texto. Guarde o PDF original se você for precisar achar ou copiar as palavras depois.",
  ],
  mobileNote:
    "Tirar uma imagem nítida de uma página de PDF pelo celular é prático para slides, referências de design e relatos de problema. O app PDF Editor renderiza as páginas com aceleração de hardware e deixa você marcar a imagem antes de compartilhar — mais rápido que mandar o arquivo para você mesmo e resolver depois.",
  faq: [
    {
      q: "Por que escolher PNG em vez de JPG?",
      a: "O PNG não tem perdas, então texto, tabelas e diagramas continuam nítidos. O JPG é menor, mas amacia as bordas finas. Para páginas de documento em que você vai dar zoom, o PNG é a melhor escolha.",
    },
    {
      q: "Recebo um PNG por página?",
      a: "Sim. Cada página é renderizada e baixada como um arquivo PNG separado. Guarde os que você precisa e descarte o resto.",
    },
    {
      q: "Meu PDF é enviado para algum lugar?",
      a: "Não. A renderização acontece inteiramente no seu navegador, então o arquivo fica no seu aparelho.",
    },
    {
      q: "Por que o meu PNG ficou tão grande?",
      a: "O PNG não tem perdas e a escala alta multiplica a quantidade de pixels. Reduza a escala ou mude para JPG se o tamanho for uma preocupação.",
    },
    {
      q: "Dá para exportar um PDF protegido por senha?",
      a: "No navegador, não — arquivos criptografados não podem ser renderizados. Remova a senha antes ou use o app PDF Editor.",
    },
  ],
  related: [
    { label: "PDF para imagens — exporte páginas no navegador", path: "/pdf-to-images" },
    { label: "Imagem para PDF — o caminho inverso", path: "/image-to-pdf" },
    { label: "Como converter PDF em JPG", path: "/guides/how-to-convert-pdf-to-jpg" },
    { label: "Como extrair páginas de um PDF", path: "/guides/how-to-extract-pages-from-pdf" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
