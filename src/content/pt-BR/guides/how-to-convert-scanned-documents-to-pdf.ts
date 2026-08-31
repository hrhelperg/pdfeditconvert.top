import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-scanned-documents-to-pdf",
  h1: "Como converter documentos digitalizados em PDF",
  description:
    "Já tem imagens digitalizadas ou fotos de papel? Junte tudo em um só PDF no navegador — e entenda o que o OCR faz e por que digitalizações precisam dele.",
  updated: "2026-05-23",
  intro: [
    "Existe uma diferença importante entre digitalizar um documento e converter um que você já digitalizou. Se você tem uma pilha de papel fresca, o que você quer é um fluxo de digitalização. Mas, muitas vezes, as imagens já existem — um scanner de mesa despejou uma pasta de JPEGs, um colega mandou por e-mail as fotos de um formulário assinado, ou a galeria do seu celular está cheia de fotos de papelada. A tarefa agora é reunir tudo em um PDF único e organizado.",
    "Este guia cobre exatamente isso: combinar as imagens que você já tem em um PDF, com a ferramenta gratuita Imagem para PDF, que roda no navegador e não envia nada. Ele também explica o ponto que as pessoas erram — que uma digitalização convertida é uma figura de texto, e não texto pesquisável — e o que fazer se você precisar das palavras de volta.",
    "Se você ainda precisa capturar o papel, veja o guia dedicado à digitalização; este aqui parte do princípio de que as imagens já existem.",
  ],
  steps: [
    {
      title: "Reúna as imagens digitalizadas",
      body: "Junte os arquivos JPG ou PNG do scanner, do e-mail ou da galeria em um só lugar, para adicionar tudo de uma vez.",
    },
    {
      title: "Abra a ferramenta Imagem para PDF",
      body: "Vá até a ferramenta Imagem para PDF no navegador. Ela aceita JPG, PNG e WebP e processa tudo no seu aparelho — sem upload e sem conta.",
    },
    {
      title: "Adicione as imagens na ordem do documento",
      body: "Arraste as digitalizações até a área de soltar. Use as setas para colocar as páginas na sequência certa — a página um do formulário antes da página dois.",
    },
    {
      title: "Gere o PDF",
      body: "Clique em Converter para PDF. Cada digitalização vira uma página, e a ferramenta combina tudo em um documento localmente.",
    },
    {
      title: "Comprima se ficar grande",
      body: "Digitalizações são cheias de imagem e o PDF pode ficar pesado. Passe pelo Comprimir PDF para caber nos limites de e-mail e de envio — conteúdo digitalizado encolhe bastante com pouca perda visível.",
    },
    {
      title: "Adicione texto pesquisável, se precisar",
      body: "Uma digitalização convertida é uma imagem, então o texto não pode ser pesquisado. Para deixá-la pesquisável, rode o reconhecimento de texto (OCR) com o app PDF Editor, que adiciona uma camada de texto invisível sobre a digitalização.",
    },
  ],
  tips: [
    "Endireite e recorte cada digitalização antes de combinar — uma página torta continua torta dentro do PDF.",
    "Resolução consistente entre as páginas gera um documento mais organizado. Tamanhos de imagem muito diferentes produzem páginas que saltam de escala.",
    "Ferramentas de navegador combinam digitalizações, mas não conseguem ler o texto dentro delas. Se você precisa buscar ou copiar as palavras, isso é trabalho de OCR, que o app PDF Editor resolve.",
    "Mantenha as digitalizações coloridas em qualquer coisa com carimbo, grifo ou assinatura; mude para tons de cinza só quando a cor não acrescentar nada, já que isso reduz o arquivo.",
    "Nomeie o arquivo pelo conteúdo e pela data. “Contrato-assinado-2026-05.pdf” é muito mais fácil de achar depois que uma sequência de números do scanner.",
  ],
  mobileNote:
    "Se as “digitalizações” são, na verdade, fotos no seu celular, o app PDF Editor é o atalho: ele transforma imagens da galeria em PDF, captura páginas novas com detecção de bordas e roda reconhecimento de texto para o resultado ficar pesquisável — tudo sem enviar nada.",
  faq: [
    {
      q: "Qual é a diferença entre isto e digitalizar?",
      a: "Digitalizar é capturar o papel em imagens, para começo de conversa. Este guia parte do princípio de que você já tem as imagens e só precisa combiná-las em um PDF. Se você ainda precisa capturar o papel, use um fluxo de digitalização.",
    },
    {
      q: "O texto do meu PDF digitalizado vai ser pesquisável?",
      a: "Só com a conversão, não — uma digitalização é uma imagem, então não há camada de texto. Rode o OCR (reconhecimento de texto) com o app PDF Editor para adicionar uma camada pesquisável sobre a digitalização.",
    },
    {
      q: "Minhas digitalizações são enviadas?",
      a: "Não. A ferramenta Imagem para PDF processa os arquivos no seu navegador, no seu aparelho, então documentos sensíveis continuam privados.",
    },
    {
      q: "Por que o meu PDF digitalizado ficou tão grande?",
      a: "Digitalizações são basicamente fotos, e várias páginas em alta resolução somam rápido. Comprima o PDF — conteúdo digitalizado costuma encolher muito com pouca perda visível de qualidade.",
    },
    {
      q: "Dá para consertar uma página que saiu deitada?",
      a: "Dá. Use a ferramenta Girar PDF para endireitar as páginas afetadas depois de combinar, ou corrija a orientação da imagem de origem antes de converter.",
    },
  ],
  related: [
    { label: "Imagem para PDF — junte digitalizações no navegador", path: "/image-to-pdf" },
    { label: "Digitalizar para PDF — capture papel com a câmera", path: "/scan-to-pdf" },
    { label: "Como digitalizar documentos em PDF com o celular", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Como comprimir um PDF digitalizado", path: "/guides/how-to-compress-scanned-pdf" },
  ],
  parentHub: { label: "Digitalizar para PDF", path: "/scan-to-pdf" },
};

export default content;
