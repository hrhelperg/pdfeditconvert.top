import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-is-read-only",
  h1: "Por que o formulário PDF é somente leitura",
  description:
    "O formulário abre bloqueado e com tudo apagado? Por que formulários são deixados somente leitura, como diferenciar proteção deliberada de mania do leitor e as opções honestas para completar um.",
  updated: "2026-06-01",
  intro: [
    "Um formulário PDF somente leitura abre normalmente, mas recusa toda tentativa de preenchimento — campos apagados, um cadeado, talvez um aviso de “protegido” ou “seguro” na barra de título. Diferente de um formulário plano (que simplesmente não tem campos) ou de um problema de salvamento (em que as respostas não ficam), um formulário somente leitura tem campos que existem, mas foram desligados de propósito. Alguém ou alguma coisa o travou.",
    "Há alguns motivos honestos para isso, e eles importam porque mudam o que você deve fazer. O autor pode tê-lo protegido de propósito. O formulário pode estar certificado ou já assinado, e alterá-lo quebraria isso. Ou o seu leitor pode estar abrindo em um modo somente leitura que dá para desligar. Diferenciar proteção deliberada de mania do leitor é o primeiro passo essencial.",
    "Este guia explica as causas, como identificar em qual você esbarrou e os caminhos legítimos para completar um formulário somente leitura — sem tentar burlar a proteção de um documento que não é seu para alterar.",
  ],
  steps: [
    {
      title: "Procure um aviso de protegido ou seguro",
      body: "Olhe a barra de título e as propriedades do documento em busca de palavras como “protegido” ou “seguro”, ou de um cadeado. Isso indica proteção deliberada aplicada pelo autor — o estado somente leitura é intencional.",
    },
    {
      title: "Descarte o modo somente leitura do leitor",
      body: "Alguns aplicativos abrem arquivos em modo somente leitura ou “exibição protegida” por padrão. Procure um botão de “habilitar edição” ou um interruptor de somente leitura, e teste em um app de PDF dedicado, antes de presumir que o arquivo é que está travado.",
    },
    {
      title: "Considere se ele é certificado ou assinado",
      body: "Se o formulário já está assinado digitalmente ou certificado, editar invalidaria a assinatura, então os leitores o travam. Esse comportamento é correto — em geral você não deve alterar um formulário assinado.",
    },
    {
      title: "Complete acrescentando texto por cima",
      body: "Mesmo com os campos travados, muitas vezes dá para posicionar o seu próprio texto e os vistos na página como se ela fosse plana e depois exportar — uma forma legítima de preencher um formulário somente leitura.",
    },
    {
      title: "Peça a quem enviou uma versão desbloqueada",
      body: "Se você realmente precisa dos campos interativos, o caminho mais limpo é pedir uma versão que aceite preenchimento a quem mandou. Não tente contornar a proteção de um documento que não é seu.",
    },
  ],
  tips: [
    "Decida primeiro: proteção deliberada ou mania do leitor? Procure um cadeado ou aviso de “seguro” versus um botão de “habilitar edição”.",
    "Posicionar texto sobre a página funciona na maioria dos formulários somente leitura e costuma ser o caminho legítimo mais rápido.",
    "Não tente retirar a proteção de um formulário que não é seu — se precisa dos campos liberados, peça a quem enviou.",
    "Um formulário certificado ou assinado está travado por um bom motivo; alterá-lo quebraria a assinatura que ele carrega.",
    "A “exibição protegida” de alguns leitores é só um padrão — passar para um app de PDF completo ou habilitar a edição pode ser tudo o que falta.",
  ],
  mobileNote:
    "No celular, um formulário somente leitura normalmente ainda pode ser completado no app PDF Editor posicionando texto e vistos na página, mesmo com os campos travados. Ele funciona no aparelho, então os seus dados continuam privados — e não mexe na proteção do formulário, só deposita as suas respostas por cima.",
  faq: [
    {
      q: "Por que o meu formulário PDF é somente leitura?",
      a: "Ou o autor o protegeu de propósito, ou ele está certificado ou já assinado (e editar quebraria isso), ou o seu leitor o abriu em modo somente leitura. Procure um cadeado ou aviso de “seguro” para diferenciar proteção deliberada de ajuste do leitor.",
    },
    {
      q: "Como preencho um formulário PDF somente leitura?",
      a: "Muitas vezes dá para posicionar o seu próprio texto e os vistos na página como se ela fosse plana e exportar — mesmo com os campos travados. Se você precisa dos campos interativos, peça uma cópia desbloqueada a quem enviou.",
    },
    {
      q: "Somente leitura é a mesma coisa que não conseguir digitar?",
      a: "É uma das causas de não conseguir digitar. Um formulário também pode recusar digitação por ser plano ou por estar aberto no leitor errado. Somente leitura significa especificamente que existem campos, mas eles foram desativados de propósito.",
    },
    {
      q: "Dá para remover a proteção somente leitura?",
      a: "Se o formulário é seu e foi você quem aplicou a proteção, dá para mudar em um editor competente. Se for de outra pessoa, não tente burlar a proteção dela — peça uma versão desbloqueada.",
    },
    {
      q: "Por que editar um formulário assinado é bloqueado?",
      a: "Editar invalidaria a assinatura digital ou a certificação que o formulário carrega, então os leitores o travam. É um comportamento proposital para manter documentos assinados confiáveis.",
    },
  ],
  related: [
    { label: "Por que não consigo digitar em um formulário PDF?", path: "/guides/why-cant-i-type-in-a-pdf-form" },
    { label: "Formulário PDF não funciona", path: "/guides/pdf-form-not-working" },
    { label: "Por que o formulário PDF não salva", path: "/guides/why-pdf-form-wont-save" },
    { label: "Como proteger um arquivo PDF com senha", path: "/guides/how-to-protect-pdf-file" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
