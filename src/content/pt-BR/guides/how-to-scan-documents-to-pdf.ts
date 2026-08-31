import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-documents-to-pdf",
  h1: "Como digitalizar documentos em PDF com o celular",
  description:
    "Use a câmera do celular para digitalizar documentos de várias páginas em PDFs limpos. Fluxo no celular com detecção de bordas e OCR.",
  updated: "2026-05-11",
  intro: [
    "Celulares são ótimos scanners de documento assim que você para de usar a câmera padrão. O app certo cuida da detecção de bordas, da correção de perspectiva, do ajuste de contraste e do OCR — transformando uma foto tirada na mão em um PDF limpo e pesquisável, com cara de digitalização e não de instantâneo.",
    "Este guia percorre o fluxo de digitalização do app PDF Editor no iPhone ou no Android. As duas plataformas produzem resultados equivalentes. Vamos cobrir os casos do dia a dia: recibos, formulários assinados, contratos de várias páginas, documentos pessoais e as situações em que digitalizar ganha de caminhar até um scanner de mesa.",
    "No final, você terá uma rotina de digitalização repetível que funciona em iluminação nem sempre ideal, gera arquivos que a contabilidade e o jurídico aceitam sem questionar e mantém tudo no aparelho.",
  ],
  steps: [
    {
      title: "Abra o scanner",
      body: "Toque no bloco Digitalizar na tela inicial do app PDF Editor. O visor da câmera abre com a detecção de bordas ativa.",
    },
    {
      title: "Coloque o documento sobre uma superfície contrastante",
      body: "A detecção de bordas funciona melhor quando há contraste claro entre a folha e a superfície atrás dela. Ponha o papel branco sobre uma mesa escura, ou o contrário.",
    },
    {
      title: "Aponte o celular sobre a página",
      body: "Segure o aparelho mais ou menos acima do documento. O app desenha um contorno azul em volta das bordas detectadas. Quando o contorno estabiliza, ele captura sozinho.",
    },
    {
      title: "Deixe capturar automaticamente ou toque",
      body: "A câmera pisca e dispara quando o enquadramento está certo. Se a captura automática estiver errando as bordas, toque no botão de captura manual. Você pode ajustar os cantos logo em seguida.",
    },
    {
      title: "Ajuste os cantos detectados",
      body: "Arraste as alças dos cantos para refinar as bordas, se precisar. A correção de perspectiva entra depois desse passo e transforma a foto em ângulo numa página retangular.",
    },
    {
      title: "Aplique um filtro",
      body: "Escolha Colorido, Tons de cinza ou Preto e branco. Para recibos e formulários, o preto e branco reduz muito o arquivo sem perda de qualidade. Para documentos com fotos ou elementos coloridos, fique no Colorido.",
    },
    {
      title: "Adicione mais páginas",
      body: "Toque no contador de páginas na parte de baixo da tela para capturar mais páginas. Cada nova captura entra no PDF atual. Reordene pelas miniaturas se precisar.",
    },
    {
      title: "Salve o PDF",
      body: "Toque em Concluir, dê um nome que faça sentido e salve. O OCR roda em segundo plano e deixa o PDF pesquisável. Depois é só compartilhar, imprimir ou enviar para a nuvem.",
    },
  ],
  tips: [
    "Luz difusa e uniforme é melhor que luz forte no teto — a luz direta cria reflexo em papel brilhante ou formulário plastificado.",
    "Deixe o documento bem plano. Páginas curvas (como um livro aberto) causam distorção do texto que a correção de perspectiva não consegue resolver por completo.",
    "Em recibos, o filtro preto e branco costuma reduzir o arquivo de 60% a 80% sem perder legibilidade.",
    "Se você digitalizar RG, CNH ou passaporte, salve o PDF em uma pasta protegida por senha ou coloque uma senha no arquivo antes de compartilhar.",
    "A captura automática dispara em menos de um segundo quando o enquadramento está bom. Se ela estiver penando, o problema quase sempre é a iluminação ou o contraste.",
  ],
  mobileNote:
    "O fluxo completo de digitalizar e salvar leva menos de 30 segundos em um documento de várias páginas. Comparado a caminhar até um scanner de mesa, instalar o software dele e lidar com anexos de e-mail, o celular ganha com folga para as necessidades do dia a dia. E o resultado é o mesmo PDF pesquisável padrão que todo sistema contábil e todo sistema de documentos aceita.",
  faq: [
    {
      q: "A qualidade é igual à de um scanner de mesa?",
      a: "Para documentos do dia a dia — recibos, contratos, documentos pessoais, formulários — é, desde que a iluminação esteja boa e o documento esteja plano. Para digitalização de fotos de arquivo ou letra miúda em papel brilhante, o scanner de mesa continua ganhando.",
    },
    {
      q: "Quais idiomas o OCR reconhece?",
      a: "Todos os principais idiomas de alfabeto latino (português, inglês, espanhol, francês, alemão, italiano, holandês, tcheco, polonês e outros), além de cirílico, grego, árabe, chinês, japonês e coreano. O reconhecimento é melhor em texto impresso limpo e pior em letra à mão.",
    },
    {
      q: "Dá para digitalizar RG ou passaporte?",
      a: "Dá. O app gera uma digitalização limpa e sem distorção, pronta para envios de cadastro ou para qualquer entrega de documento. Coloque senha no PDF gerado se for mandar por e-mail.",
    },
    {
      q: "A digitalização funciona sem internet?",
      a: "Funciona. Detecção de bordas, correção de perspectiva e filtros rodam no aparelho. O OCR roda localmente para os idiomas principais; idiomas menos comuns podem baixar um modelo de reconhecimento no primeiro uso.",
    },
    {
      q: "Qual é o tamanho de um PDF digitalizado?",
      a: "Um documento típico de 5 páginas em preto e branco fica entre 200 e 400 KB. A mesma digitalização em cores costuma dar de 1 a 2 MB. A compressão reduz ainda mais, se você precisar mandar por e-mail.",
    },
  ],
  related: [
    { label: "Digitalizar para PDF — visão geral", path: "/scan-to-pdf" },
    {
      label: "Editar o PDF digitalizado depois",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "PDF para empresas", path: "/pdf-for-business" },
  ],
  parentHub: { label: "Digitalizar para PDF", path: "/scan-to-pdf" },
};

export default content;
