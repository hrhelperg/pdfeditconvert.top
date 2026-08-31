import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-jpg",
  h1: "Como converter PDF em JPG (páginas como imagens para compartilhar)",
  description:
    "Exporte as páginas de um PDF como imagens JPG no navegador. Quando o JPG é melhor que o PNG, como a escala afeta a qualidade e onde a imagem ganha do PDF.",
  updated: "2026-05-23",
  intro: [
    "Às vezes o PDF é o recipiente errado. Você quer soltar uma página em uma conversa do Slack, onde ela aparece na hora; colar um gráfico em um slide; ou publicar uma página em um lugar que só aceita imagem. Para tudo isso, você precisa das páginas em JPG, e não de um PDF.",
    "Este guia usa a ferramenta gratuita PDF para imagens, que renderiza cada página de um PDF como uma imagem para baixar, inteiramente no navegador e sem enviar nada. O JPG é um dos dois formatos oferecidos, e é a escolha certa quando o tamanho do arquivo importa mais que o texto perfeitamente nítido.",
    "Vamos cobrir como escolher a escala (que controla a nitidez), quando o JPG ganha do PNG e a limitação que vale lembrar: o JPG de uma página é uma figura chapada, não um documento.",
  ],
  steps: [
    {
      title: "Abra a ferramenta PDF para imagens",
      body: "Vá até a ferramenta PDF para imagens no navegador. Ela renderiza as páginas localmente, no seu aparelho — sem upload e sem conta.",
    },
    {
      title: "Escolha o PDF",
      body: "Arraste um único PDF até a área de soltar ou clique para escolhê-lo. A ferramenta lê todas as páginas para poder exportá-las como imagens.",
    },
    {
      title: "Escolha o formato JPG",
      body: "Selecione JPG. Ele gera arquivos menores que o PNG e é a escolha certa para páginas cheias de foto, prints de página inteira e qualquer situação em que o tamanho importa mais que texto perfeitamente nítido.",
    },
    {
      title: "Defina a escala",
      body: "A escala controla quantos pixels cada página gera. 2× fica nítido na maioria das telas; caia para 1,5× se quiser arquivos menores, ou vá a 3× quando precisar de um resultado muito nítido e não se importar com o tamanho.",
    },
    {
      title: "Exporte as páginas",
      body: "Rode a conversão. Cada página é baixada como um arquivo JPG próprio, pronto para colocar em uma mensagem, apresentação ou formulário de envio.",
    },
    {
      title: "Separe a página que interessa",
      body: "Se você queria só uma página, guarde esse JPG e apague o resto. Em um PDF longo, dividir antes significa menos imagens para separar depois.",
    },
  ],
  tips: [
    "Escolha JPG quando a página é cheia de foto ou quando você está otimizando o tamanho; escolha PNG quando a página é quase toda texto ou traço e precisa continuar nítida.",
    "Escala maior significa imagem mais nítida e arquivo maior. Não há vantagem em 3× se a imagem só vai ser vista em tamanho pequeno.",
    "O JPG de uma página não tem camada de texto — as palavras não podem ser buscadas, selecionadas nem copiadas. Guarde o PDF original se você for precisar do texto de novo.",
    "PDFs muito grandes em escala alta podem esgotar a memória do navegador. Se a ferramenta penar, caia para a escala 1,5× ou divida o PDF antes.",
    "PDFs protegidos por senha não podem ser renderizados no navegador. Remova a senha antes ou use o app PDF Editor.",
  ],
  mobileNote:
    "No celular, exportar uma página como imagem costuma ser questão de compartilhamento: a prévia da imagem aparece dentro das conversas, enquanto um anexo em PDF fica lá parado como um ícone. O app PDF Editor renderiza e exporta páginas na hora, com aceleração de hardware, e as entrega direto para a folha de compartilhamento.",
  faq: [
    {
      q: "JPG ou PNG — o que devo exportar?",
      a: "JPG para arquivos menores e páginas cheias de foto; PNG quando a página é quase toda texto ou diagramas que precisam ficar nítidos. A compressão do JPG amacia as bordas finas, e isso se nota nas letras.",
    },
    {
      q: "Vou receber uma imagem por página?",
      a: "Sim. Cada página do PDF é renderizada e baixada como um JPG separado. Se você só precisa de uma página, guarde esse arquivo e descarte os outros.",
    },
    {
      q: "Meu PDF é enviado?",
      a: "Não. A renderização roda inteiramente no seu navegador, então o arquivo nunca sai do seu aparelho.",
    },
    {
      q: "Dá para pesquisar o texto no JPG depois?",
      a: "Não. Uma página convertida é uma imagem chapada, sem camada de texto. Para manter o texto pesquisável, guarde o PDF original.",
    },
    {
      q: "O que a escala faz?",
      a: "Ela define quantos pixels de imagem são gerados por ponto do PDF. 2× fica nítido na maioria das telas; 3× é muito nítido, porém gera arquivos grandes.",
    },
  ],
  related: [
    { label: "PDF para imagens — exporte páginas no navegador", path: "/pdf-to-images" },
    { label: "Imagem para PDF — o caminho inverso", path: "/image-to-pdf" },
    { label: "Como converter PDF em PNG", path: "/guides/how-to-convert-pdf-to-png" },
    { label: "Como dividir um PDF em arquivos separados", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
