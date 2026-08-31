import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-pdf-from-camera",
  h1: "Como criar um PDF com a câmera do celular",
  description:
    "Transforme uma foto em PDF — e entenda por que uma digitalização de verdade é melhor que uma foto crua. Captura rápida para recibos e quadros, digitalização para documentos.",
  updated: "2026-05-23",
  intro: [
    "Apontar a câmera para alguma coisa e sair com um PDF é o jeito mais rápido de capturar o mundo físico como documento — um recibo, o quadro branco depois de uma reunião, a página de um livro, um aviso na parede. Mas existe uma diferença real entre uma foto crua embrulhada em PDF e uma digitalização de verdade, e saber qual você precisa evita um resultado torto e cheio de reflexo.",
    "Este guia cobre os dois: a captura rápida, em que a foto vira página de PDF com a ferramenta gratuita Imagem para PDF, e a digitalização de verdade, em que o app PDF Editor detecta as bordas do documento, corrige o ângulo e ainda pode reconhecer o texto. Os dois rodam no seu aparelho, sem enviar nada.",
    "Para um registro que você só quer ter arquivado, a captura rápida basta. Para qualquer coisa que precise parecer um documento — plana, quadrada, legível —, a digitalização vale o instante a mais.",
  ],
  steps: [
    {
      title: "Decida: captura rápida ou digitalização de verdade",
      body: "Um recibo para os seus próprios registros pode ser uma foto rápida. Um documento que você vai enviar ou precisa ler com clareza merece uma digitalização, com detecção de bordas e correção de ângulo.",
    },
    {
      title: "Captura rápida: fotografe bem",
      body: "Fotografe de cima, com luz uniforme, preenchendo o quadro com a página e evitando a sombra da sua mão ou do celular. Uma boa foto gera uma boa página de PDF.",
    },
    {
      title: "Transforme a foto em PDF",
      body: "Abra a ferramenta Imagem para PDF, adicione a foto (ou várias), coloque na ordem e gere o PDF. Cada foto vira uma página.",
    },
    {
      title: "Digitalização de verdade: use o scanner do app",
      body: "No app PDF Editor, use o recurso de digitalizar. Ele encontra as bordas do documento sozinho, endireita a perspectiva e limpa a página, para ela ler como digitalização e não como foto.",
    },
    {
      title: "Capture várias páginas em sequência",
      body: "Em um documento de várias páginas, o scanner deixa você fotografar uma página atrás da outra dentro do mesmo PDF, mantendo a ordem conforme avança.",
    },
    {
      title: "Deixe pesquisável, se precisar",
      body: "Uma foto crua não tem camada de texto. O app pode rodar o reconhecimento de texto para as páginas capturadas ficarem pesquisáveis — útil em qualquer coisa que você depois vá procurar pelo conteúdo.",
    },
  ],
  tips: [
    "Uma foto crua é a figura de um documento; uma digitalização é a versão corrigida, plana e legível dele. Ajuste o esforço ao uso que o resultado vai ter.",
    "Luz uniforme e ângulo reto de cima fazem mais por uma página capturada que qualquer filtro. Reflexo e sombra são mais fáceis de evitar do que de consertar.",
    "Um fundo escuro e liso atrás da folha ajuda a detecção de bordas a encontrar o documento com precisão.",
    "Fotos capturadas e digitalizações costumam ficar grandes — comprima o PDF se ele for para e-mail ou para um portal de envio.",
    "A captura rápida não gera texto pesquisável. Se você vai precisar buscar no documento depois, digitalize com reconhecimento de texto em vez de só fotografar.",
  ],
  mobileNote:
    "A sua câmera já está na mão, e é por isso que capturar documentos é uma tarefa nativa do celular. O app PDF Editor digitaliza com detecção automática de bordas, captura de várias páginas e reconhecimento de texto — tudo offline —, transformando o que estiver na sua frente em um PDF limpo e pronto para compartilhar.",
  faq: [
    {
      q: "Qual é a diferença entre fotografar e digitalizar um documento?",
      a: "A foto é uma imagem crua embrulhada em PDF — serve para registros rápidos. A digitalização detecta as bordas, corrige o ângulo e aplaina a página, para ela ler como um documento de verdade. Digitalize tudo que você for enviar ou precisar ler com clareza.",
    },
    {
      q: "Dá para fazer um PDF de uma única foto?",
      a: "Dá. Tire a foto e use a ferramenta Imagem para PDF para transformá-la (ou várias) em PDF, uma página por foto.",
    },
    {
      q: "Um PDF feito com a câmera vai ser pesquisável?",
      a: "A partir de uma foto crua, não — não há camada de texto. O app PDF Editor consegue rodar o reconhecimento de texto durante a digitalização, e aí o resultado fica pesquisável.",
    },
    {
      q: "Os documentos capturados são enviados?",
      a: "Não. Tanto a ferramenta Imagem para PDF quanto o scanner do app trabalham no seu aparelho, então os documentos capturados continuam privados.",
    },
    {
      q: "Como capturo várias páginas em um só PDF?",
      a: "Use o scanner do app, que permite fotografar página após página dentro de um único documento, mantendo a ordem. A ferramenta Imagem para PDF também combina várias fotos em um só arquivo.",
    },
  ],
  related: [
    { label: "Digitalizar para PDF — capture papel com a câmera", path: "/scan-to-pdf" },
    { label: "Imagem para PDF — transforme fotos em PDF", path: "/image-to-pdf" },
    { label: "Como digitalizar documentos em PDF com o celular", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Como converter fotos em PDF no iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Digitalizar para PDF", path: "/scan-to-pdf" },
};

export default content;
