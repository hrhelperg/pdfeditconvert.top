import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-scanned-pdf-quality",
  h1: "Como melhorar a qualidade de um PDF digitalizado (nitidez, alinhamento, cor)",
  description:
    "PDFs digitalizados dão errado de formas previsíveis: torto, contraste lavado, fundo sujo, arquivo enorme. Os ajustes antes de digitalizar e as ferramentas depois que realmente limpam o resultado.",
  updated: "2026-05-29",
  intro: [
    "Uma digitalização ruim estraga um documento que seria simples. Linhas tortas, contraste lavado, pontinhos de poeira aparecendo, arquivo gigante — e o documento por dentro fica difícil de ler ou impossível de comprimir mais. O chato é que a maior parte desses problemas vem da configuração, e não do PDF, e evitá-los na captura é bem mais fácil que consertá-los depois.",
    "Quando você já tem uma digitalização ruim para corrigir, as opções realistas são: endireitar o que está torto, recortar o que está mal enquadrado, reduzir o que está grande demais e aceitar que a resolução perdida na captura não volta. Algumas ferramentas de imagem prometem nitidez; na prática, elas deixam diferente, não melhor.",
    "Este guia separa a prevenção (digitalizar direito de primeira) da recuperação (o que fazer com o arquivo que você já tem). A prevenção é a parte mais importante.",
  ],
  steps: [
    {
      title: "Evite a inclinação alimentando as páginas direito",
      body: "Scanners com alimentador entortam quando as folhas não estão alinhadas na bandeja. Digitalizações de celular entortam quando você inclina a câmera. Os dois são evitáveis: alinhe a página, segure o celular paralelo ao papel e a digitalização sai reta.",
    },
    {
      title: "Ajuste a resolução para 200 a 300 DPI em documentos",
      body: "600 DPI é qualidade de foto e gera arquivos enormes sem benefício em uma página datilografada. 150 DPI é baixo demais — o texto fica macio. A faixa de 200 a 300 é o ponto certo para documentos que você vai compartilhar, arquivar ou imprimir.",
    },
    {
      title: "Prefira tons de cinza ou preto e branco em texto",
      body: "O modo colorido em um documento de texto triplica o tamanho do arquivo e introduz ruído que comprime mal. Tons de cinza ou preto e branco produzem digitalizações mais nítidas, menores e mais limpas em tudo que não for foto ou gráfico colorido.",
    },
    {
      title: "Use contraste e recorte automáticos quando existirem",
      body: "A maioria dos apps de digitalização tem contraste automático e detecção de bordas. Os dois fazem diferença real: o contraste tira a névoa cinza e a detecção de bordas recorta na página, deixando as margens limpas.",
    },
    {
      title: "Comprima com cuidado digitalizações existentes",
      body: "Se um PDF digitalizado já está enorme, a ferramenta Comprimir PDF o reduz bastante no navegador. Não vá para o ajuste extremo em texto — ele pode pixelar os caracteres. Forte, mas não extremo, é a escolha segura.",
    },
    {
      title: "Endireite páginas tortas com a ferramenta Girar PDF",
      body: "Se só algumas páginas estão deitadas ou invertidas, a ferramenta Girar PDF as endireita no lugar. Ela não corrige inclinações pequenas, mas resolve as rotações de 90, 180 e 270 graus que a maioria dos erros de alimentador produz.",
    },
  ],
  tips: [
    "Luz forte e uniforme importa mais que a qualidade da câmera em digitalizações de celular. Uma captura bem iluminada pelo celular ganha de um scanner de escritório mal iluminado.",
    "Não digitalize em cores e DPI alto para depois comprimir com força. Digitalize já com os ajustes certos; o arquivo fica menor, mais nítido e mais fácil de lidar.",
    "Fundo transparecendo (texto do verso em papel fino) é problema de papel, não de digitalização. Coloque uma folha escura atrás da página.",
    "Digitalizar de novo quase sempre é mais rápido que consertar. Se você tem o papel, corrija na captura em vez de processar a imagem.",
    "Apps de digitalização que prometem “melhorar” muitas vezes adicionam nitidez artificial que fica pior de perto. Uma digitalização básica e limpa ganha de uma ruim processada.",
  ],
  mobileNote:
    "Digitalizações de celular dão errado de forma previsível — ângulo, luz e foco estão todos na mão de quem fotografa. O fluxo de digitalização do app PDF Editor usa detecção de bordas em tempo real e ajuste de contraste, então cada captura sai mais perto de um resultado de scanner de mesa já na primeira tentativa.",
  faq: [
    {
      q: "Por que o meu PDF digitalizado está lavado?",
      a: "O contraste ficou baixo demais na captura. Digitalize de novo com o contraste automático ligado, ou com brilho e contraste ajustados na mão. O processamento posterior ajuda pouco.",
    },
    {
      q: "Dá para deixar uma digitalização borrada nítida?",
      a: "Só na aparência. O detalhe real perdido na captura não é recuperável. Filtros de nitidez mudam as bordas, mas não acrescentam informação.",
    },
    {
      q: "Que resolução de digitalização devo usar?",
      a: "De 200 a 300 DPI em documentos. 300 se você puder imprimir. Qualquer coisa acima é desperdício em texto e só incha o arquivo.",
    },
    {
      q: "Devo digitalizar em cores ou em tons de cinza?",
      a: "Tons de cinza ou preto e branco para texto. Cores só para fotos e gráficos coloridos. Tons de cinza é mais nítido e bem menor.",
    },
    {
      q: "Por que as minhas digitalizações ficam enormes?",
      a: "Normalmente por DPI alto demais somado ao modo colorido. Reduza os dois na captura ou comprima o arquivo existente. PDFs digitalizados são os que mais se beneficiam da compressão.",
    },
  ],
  related: [
    { label: "Digitalizar para PDF — capturas limpas com detecção de bordas", path: "/scan-to-pdf" },
    { label: "Comprimir PDF — reduza digitalizações pesadas", path: "/compress-pdf" },
    { label: "Como comprimir um PDF digitalizado", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Por que meu PDF está borrado?", path: "/guides/why-is-my-pdf-blurry" },
  ],
  parentHub: { label: "Digitalizar para PDF", path: "/scan-to-pdf" },
};

export default content;
