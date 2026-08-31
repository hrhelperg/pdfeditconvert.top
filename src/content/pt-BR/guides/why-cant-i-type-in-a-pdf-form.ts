import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-cant-i-type-in-a-pdf-form",
  h1: "Por que não consigo digitar em um formulário PDF?",
  description:
    "Você clica em um campo e nada acontece. Os três motivos de sempre — formulário plano, leitor errado ou arquivo bloqueado — e exatamente o que fazer em cada caso.",
  updated: "2026-06-01",
  intro: [
    "Você abre um formulário, clica onde deveria entrar o seu nome e… nada. Sem cursor, sem caixa, sem jeito de digitar. Parece que o formulário está com defeito, mas quase nunca está. A impossibilidade de digitar se resume a uma de três causas específicas, cada uma com uma solução clara depois que você a identifica.",
    "A primeira e mais comum é o formulário ser plano — não há campos interativos para digitar, só uma imagem de formulário. A segunda é você estar abrindo em um leitor que não lida direito com campos. A terceira é o formulário estar bloqueado ou somente leitura, impedindo a digitação de propósito. Distinguir entre elas leva algumas verificações rápidas.",
    "Este guia percorre as três causas em ordem, mostra como confirmar em qual você esbarrou e dá a saída prática para cada uma, para as suas respostas chegarem à página.",
  ],
  steps: [
    {
      title: "Confirme se o formulário tem campos",
      body: "Toque em várias lacunas diferentes. Se nenhuma delas produzir cursor ou destaque em ponto algum da página, o formulário é quase certamente plano — não há campos para digitar, por escolha ou porque ele foi digitalizado.",
    },
    {
      title: "Se for plano, acrescente texto por cima",
      body: "Formulários planos não aceitam digitação, mas você pode posicionar o seu próprio texto e os vistos sobre a página com a ferramenta de texto de um editor de PDF. É a forma prevista de completar um formulário digitalizado ou sem campos.",
    },
    {
      title: "Descarte o leitor",
      body: "Alguns navegadores e pré-visualizadores leves mostram o formulário mas ignoram os campos. Abra o mesmo arquivo em um app de PDF dedicado. Se os campos passarem a funcionar, o problema era o leitor anterior.",
    },
    {
      title: "Verifique se o formulário está bloqueado ou somente leitura",
      body: "Se existem campos mas eles recusam qualquer digitação, o formulário pode estar protegido ou marcado como somente leitura. Procure um cadeado ou um aviso de “protegido”. Um formulário somente leitura bloqueia a digitação de propósito.",
    },
    {
      title: "Contorne um formulário bloqueado",
      body: "Em um formulário somente leitura, muitas vezes ainda dá para posicionar texto por cima como se ele fosse plano, ou pedir a quem enviou uma versão desbloqueada. Não tente burlar a proteção de um formulário que não é seu para alterar.",
    },
  ],
  tips: [
    "O diagnóstico mais rápido: teste o mesmo arquivo em um app de PDF de verdade. Isso separa na hora “formulário plano” de “leitor ruim”.",
    "Acrescentar texto por cima funciona em quase qualquer formulário, plano ou bloqueado, e costuma ser o caminho mais rápido para a página preenchida.",
    "Um formulário que aceita digitação no computador mas não na pré-visualização de e-mail do celular é caso de leitor — abra em um app de PDF de verdade.",
    "Se só alguns campos recusam a digitação, esses campos específicos podem ser calculados ou bloqueados, enquanto o resto continua livre.",
    "A aparência e o comportamento dos formulários variam entre leitores de PDF, então “não funciona aqui” raramente significa “está quebrado em todo lugar”.",
  ],
  mobileNote:
    "No celular, o app PDF Editor digita nos campos interativos onde eles existem e deixa você posicionar texto direto em formulários planos ou bloqueados onde não existem — então um formulário que não aceitava digitação na pré-visualização do e-mail vira preenchível. Ele funciona no aparelho, sem upload.",
  faq: [
    {
      q: "Por que não consigo digitar no meu formulário PDF?",
      a: "Normalmente por um de três motivos: o formulário é plano e não tem campos, o seu leitor não suporta campos de formulário, ou o formulário está bloqueado/somente leitura. Identifique qual é e então acrescente texto por cima, troque de leitor ou peça uma cópia desbloqueada.",
    },
    {
      q: "Como digito em um formulário PDF plano?",
      a: "Você não digita nos campos porque não existem campos. Em vez disso, use um editor de PDF para posicionar texto e vistos direto na página, onde cada resposta pertence, e exporte o arquivo.",
    },
    {
      q: "Por que o formulário funciona no meu computador e não no celular?",
      a: "O seu celular provavelmente está pré-visualizando em um aplicativo que ignora os campos. Abra o arquivo em um app de PDF dedicado e os campos devem ficar ativos.",
    },
    {
      q: "O que significa um formulário PDF somente leitura?",
      a: "É um formulário que o autor protegeu para que os campos não sejam editados nem digitados. Muitas vezes ainda dá para colocar texto por cima, ou pedir a quem enviou uma versão que aceite preenchimento.",
    },
    {
      q: "Um formulário pode ser parcialmente digitável?",
      a: "Pode. Alguns campos podem estar bloqueados ou serem calculados automaticamente enquanto outros aceitam entrada. Preencha os livres e acrescente texto à mão nos que você não alcança.",
    },
  ],
  related: [
    { label: "Como preencher um formulário PDF", path: "/guides/how-to-fill-out-a-pdf-form" },
    { label: "Por que o formulário PDF é somente leitura", path: "/guides/why-pdf-form-is-read-only" },
    { label: "Campos do formulário PDF sumiram", path: "/guides/pdf-form-fields-missing" },
    { label: "Formulário PDF não funciona", path: "/guides/pdf-form-not-working" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
