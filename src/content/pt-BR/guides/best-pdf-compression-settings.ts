import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-pdf-compression-settings",
  h1: "Melhores configurações de compressão de PDF (guia de decisão)",
  description:
    "Qual nível de compressão usar para e-mail, impressão, arquivamento ou web? Uma matriz prática ligando cada ajuste ao seu objetivo, com trocas honestas.",
  updated: "2026-05-23",
  intro: [
    "Não existe uma única configuração “melhor” de compressão — existe a melhor configuração para o que você vai fazer com o arquivo. O nível perfeito para mandar um recibo por e-mail arruinaria um documento que vai para a gráfica. Então, em vez de um número mágico, o que você precisa é de um jeito rápido de casar o ajuste ao objetivo.",
    "Este guia é essa matriz de decisão. Ele mapeia os níveis da ferramenta gratuita Comprimir PDF — Baixo, Recomendado e Forte — às situações em que cada um faz sentido, e explica a troca por trás de cada escolha. A ferramenta roda no navegador sem enviar nada e mostra a economia de tamanho para você confirmar a decisão.",
    "Leia uma vez e você para de adivinhar — passa a saber qual nível usar assim que vê para que serve o documento.",
  ],
  steps: [
    {
      title: "Para anexo de e-mail: Recomendado",
      body: "O ponto certo padrão. Ele resolve os limites de 25 MB do Gmail e de cerca de 20 MB do Outlook na maioria dos arquivos, mantendo o documento confortavelmente legível na tela.",
    },
    {
      title: "Para portais com limite apertado: Forte",
      body: "Portais de órgãos públicos e de RH costumam limitar a poucos megabytes. O Forte te leva até lá. Digitalizações aguentam bem; confira se documentos diagramados continuam aceitáveis.",
    },
    {
      title: "Para impressão ou registros formais: Baixo",
      body: "Quando o arquivo vai ser impresso ou guardado como registro de qualidade, use o Baixo para preservar o máximo de detalhe. E só comprima se o arquivo realmente precisar ficar menor.",
    },
    {
      title: "Para arquivamento de longo prazo: pouca ou nenhuma",
      body: "Arquivos permanentes devem privilegiar a fidelidade em vez do tamanho. Comprima de leve, se comprimir, e guarde um original sem compressão — você sempre pode reduzir uma cópia depois, mas não pode restaurar o detalhe perdido.",
    },
    {
      title: "Para web e leitura só em tela: Recomendado a Forte",
      body: "Documentos que só serão lidos na tela toleram uma compressão mais pesada. Puxe para o Forte em downloads de site que precisam carregar rápido e em que a qualidade de impressão é irrelevante.",
    },
    {
      title: "Confirme pelo tamanho antes e depois",
      body: "Escolha o que escolher, a ferramenta mostra a economia. Se um nível mais leve já atingiu a sua meta, fique com ele — não há prêmio para quem comprime demais.",
    },
  ],
  tips: [
    "Primeiro o objetivo, depois o ajuste. Decida o que vai acontecer com o arquivo e então escolha o nível — nunca o contrário.",
    "Digitalizações aguentam ajustes mais fortes que documentos diagramados. O mesmo nível Forte que resolve um formulário digitalizado pode amaciar demais um material cheio de foto.",
    "Todos os níveis rasterizam as páginas e removem o texto selecionável. Se o documento precisa continuar pesquisável, isso pesa na sua escolha tanto quanto o tamanho.",
    "PDFs cheios de texto e vetor quase não encolhem em nenhum ajuste — há pouca imagem para comprimir, então não espere milagres do Forte.",
    "Guarde um original sem compressão de tudo que for importante. A compressão é de mão única; o original permite gerar depois qualquer tamanho de que você precise.",
  ],
  mobileNote:
    "O app PDF Editor facilita casar o ajuste ao objetivo na correria: comprima offline, veja a prévia do resultado e ajuste o nível antes de compartilhar. Ele também aceita arquivos protegidos e mantém tudo no aparelho.",
  faq: [
    {
      q: "Qual é a melhor configuração de compressão no geral?",
      a: "Não existe uma — depende do objetivo. O Recomendado serve para e-mail, o Forte para limites apertados de portal e arquivos só de tela, e o Baixo (ou nenhuma compressão) para impressão e arquivamento.",
    },
    {
      q: "Qual ajuste é melhor para mandar um PDF por e-mail?",
      a: "Recomendado. Ele resolve os limites típicos de 20 a 25 MB na maioria dos arquivos, mantendo o documento legível. Passe para o Forte só se você continuar acima.",
    },
    {
      q: "O que usar em um documento que eu vou imprimir?",
      a: "Baixo, ou nenhuma compressão. A impressão precisa de detalhe, então preserve a qualidade e só reduza o arquivo se ele estiver realmente grande demais.",
    },
    {
      q: "Ajustes mais fortes removem o texto pesquisável?",
      a: "Todos os níveis renderizam as páginas como imagem, o que remove o texto selecionável. Se o documento precisa continuar pesquisável, guarde o original, independentemente do nível escolhido.",
    },
    {
      q: "Por que o Forte não reduziu muito o meu PDF de texto?",
      a: "A compressão age sobre os dados de imagem. Um PDF só de texto ou vetor tem pouco a comprimir, então até o Forte gera economia pequena. Esse arquivo está grande por outro motivo.",
    },
  ],
  related: [
    { label: "Comprimir PDF — escolha o seu nível", path: "/compress-pdf" },
    { label: "Como comprimir um PDF sem perder qualidade demais", path: "/guides/compress-pdf-without-losing-too-much-quality" },
    { label: "Como comprimir um PDF digitalizado", path: "/guides/how-to-compress-scanned-pdf" },
    { label: "Como reduzir o tamanho do PDF antes de enviar", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
