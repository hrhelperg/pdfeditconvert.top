import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-size-before-uploading",
  h1: "Como reduzir o tamanho do PDF antes de enviar a um sistema",
  description:
    "Portais de envio recusam arquivos grandes com mais rigor que o e-mail. Como caber nos limites apertados sem perder a legibilidade que eles conferem.",
  updated: "2026-05-23",
  intro: [
    "Portais de envio são mais rígidos que o e-mail. Um formulário de órgão público, um sistema de vagas, um portal de RH ou de imposto costuma limitar o PDF a 2, 4 ou 5 MB e recusar qualquer coisa maior com um erro seco e sem segunda chance. Pior: normalmente são documentos digitalizados — justamente os arquivos com mais chance de estarem grandes demais.",
    "Este guia trata de vencer esses limites com a ferramenta gratuita Comprimir PDF, que roda no navegador sem enviar nada. A peculiaridade dos portais é que eles também precisam do documento legível — um envio recusado e um ilegível falham do mesmo jeito —, então é um jogo de equilíbrio.",
    "Vamos cobrir como atingir uma meta específica de tamanho, o que fazer quando o limite do portal é brutalmente baixo e como manter o documento legível o bastante para passar pela conferência do outro lado.",
  ],
  steps: [
    {
      title: "Descubra o limite exato do portal",
      body: "Leia as letras miúdas do campo de envio. Os portais informam um limite rígido — muitas vezes de 2 a 5 MB — e recusam qualquer coisa acima. Esse número é a sua meta.",
    },
    {
      title: "Abra a ferramenta Comprimir PDF",
      body: "Vá até a ferramenta Comprimir PDF. Ela processa o arquivo no seu aparelho, o que importa porque envios a portais quase sempre são documentos pessoais ou oficiais.",
    },
    {
      title: "Comprima em direção ao limite",
      body: "Comece pelo Recomendado; se o limite for apertado, vá para o Forte. A ferramenta mostra o tamanho resultante para você ver se venceu o limite.",
    },
    {
      title: "Confirme que continua legível",
      body: "Abra o arquivo comprimido. Portais recusam arquivos grandes demais e revisores recusam arquivos ilegíveis — o documento precisa satisfazer os dois. Verifique se o texto está confortável de ler.",
    },
    {
      title: "Se não conseguir chegar ao limite, reduza páginas",
      body: "Se só a compressão não te levar abaixo de um limite muito baixo, remova páginas desnecessárias com a ferramenta Extrair páginas do PDF, ou envie as seções exigidas separadamente, se o portal permitir.",
    },
    {
      title: "Envie o arquivo no tamanho certo",
      body: "Submeta a versão comprimida. Guarde o seu original em qualidade cheia, caso o portal peça depois uma cópia mais nítida.",
    },
  ],
  tips: [
    "Descubra o limite exato antes de comprimir. Comprimir no escuro é esforço perdido; um limite declarado de 4 MB diz exatamente o quanto forçar.",
    "Portais exigem uma dupla aprovação: pequeno o bastante para enviar e nítido o bastante para ler. Uma compressão forte que transforma um formulário em papa reprova na conferência mesmo que o envio passe.",
    "Documentos de inscrição digitalizados comprimem de forma drástica, então até um limite de 2 MB costuma ser alcançável — eles são quase só imagem.",
    "Se o limite for impossível para uma digitalização de várias páginas, remover páginas em branco ou irrelevantes antes reduz o tamanho sem tocar na qualidade.",
    "Guarde o original. Um revisor que não conseguir ler um detalhe pode pedir uma cópia mais nítida, e você vai querer o arquivo em qualidade cheia à mão.",
  ],
  mobileNote:
    "Muitos envios a portais acontecem pelo celular — fotografar um documento e submeter na hora. O app PDF Editor comprime offline e deixa você conferir a legibilidade antes de enviar, para não submeter um arquivo grande demais nem borrado demais para passar.",
  faq: [
    {
      q: "Por que os portais recusam o meu PDF se o e-mail aceita?",
      a: "Os portais definem limites bem mais apertados — muitas vezes de 2 a 5 MB, contra os cerca de 25 MB do e-mail — e os aplicam com rigor. Um arquivo que vai bem por e-mail pode ser grande demais para um portal.",
    },
    {
      q: "Como atinjo uma meta específica de tamanho?",
      a: "Comprima e leia o tamanho resultante, subindo o nível até ficar abaixo do limite. A ferramenta mostra os números antes e depois para você mirar com precisão.",
    },
    {
      q: "E se nem o nível Forte for suficiente?",
      a: "Remova páginas desnecessárias com a ferramenta Extrair páginas do PDF, ou envie as seções exigidas separadamente, se o portal permitir. Isso corta o tamanho sem degradar mais as páginas que ficam.",
    },
    {
      q: "Meu documento é enviado aos seus servidores quando eu comprimo?",
      a: "Não. A ferramenta Comprimir PDF roda no seu navegador, no seu aparelho — o que é relevante porque documentos de portal costumam ser pessoais ou oficiais.",
    },
    {
      q: "A compressão pesada pode fazer o portal recusar por ilegibilidade?",
      a: "Pode. Os portais precisam do arquivo pequeno o bastante para enviar e nítido o bastante para ler. Confira a legibilidade depois de comprimir e guarde o original para qualquer pedido posterior.",
    },
  ],
  related: [
    { label: "Comprimir PDF — chegue ao limite do portal", path: "/compress-pdf" },
    { label: "Extrair páginas do PDF — descarte páginas para economizar", path: "/extract-pdf-pages" },
    { label: "Melhores configurações de compressão de PDF", path: "/guides/best-pdf-compression-settings" },
    { label: "Como reduzir o tamanho de um PDF para e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
