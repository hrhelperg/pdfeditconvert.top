import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-compatibility-problems",
  h1: "Problemas de compatibilidade de formulários PDF",
  description:
    "Um formulário que abre em um programa e quebra em outro normalmente usa recursos que nem todo leitor suporta. Como reconhecer formulários dinâmicos, o que causa o desencontro e quais são as suas opções.",
  updated: "2026-06-01",
  intro: [
    "Às vezes um formulário funciona perfeitamente em um programa e desmonta em outro — os campos não aparecem, um aviso pede para “abrir em outro leitor”, ou a página fica em branco com apenas uma mensagem de erro. Isso é um problema de compatibilidade, e quase sempre significa que o formulário usa recursos que nem todo leitor de PDF suporta. O formulário não está quebrado; ele só é mais exigente com onde é aberto do que um formulário comum.",
    "A causa de sempre é um formulário avançado ou dinâmico, construído com uma tecnologia (muitas vezes chamada de XFA ou LiveCycle) que só certos programas desenham direito. Formulários interativos padrão têm suporte amplo, mas esses dinâmicos podem exigir um programa específico, e muitos leitores modernos — especialmente em celulares e navegadores — não conseguem abri-los corretamente.",
    "Este guia ajuda a reconhecer um problema de compatibilidade, entender por que ele acontece e pesar as suas opções realistas — inclusive a realidade honesta de que alguns formulários simplesmente exigem o programa para o qual foram feitos, ou outro formato vindo de quem emitiu.",
  ],
  steps: [
    {
      title: "Reconheça os sinais reveladores",
      body: "Uma mensagem de “aguarde” ou de “abra em um leitor compatível”, uma página em branco onde deveria haver um formulário, ou campos que aparecem em um programa e somem em outro apontam todos para um formulário com recursos sem suporte.",
    },
    {
      title: "Identifique um formulário dinâmico (XFA)",
      body: "Formulários que exibem um aviso sobre precisar de um programa específico normalmente são formulários dinâmicos XFA. Eles não são formulários interativos padrão, e muitos leitores — principalmente de celular e de navegador — não conseguem desenhá-los.",
    },
    {
      title: "Teste em outro leitor completo",
      body: "Abra o formulário em alguns programas de PDF competentes. Um formulário interativo padrão que quebrou em um leitor básico costuma funcionar em um completo. Um formulário dinâmico ainda pode exigir o programa específico dele.",
    },
    {
      title: "Peça a quem emitiu uma versão compatível",
      body: "Se um formulário realmente não abre em lugar nenhum que você possa usar, peça a quem enviou um PDF padrão, uma versão plana para imprimir ou a instrução de qual programa ele exige. Quem emite quase sempre tem uma alternativa.",
    },
    {
      title: "Recorra a imprimir e preencher, se precisar",
      body: "Como último recurso para um formulário que você não consegue abrir de forma interativa, peça ou gere uma cópia plana para imprimir e complete posicionando texto na página ou à mão. Não é elegante, mas sempre funciona.",
    },
  ],
  tips: [
    "Um aviso de “leitor compatível” é o sinal clássico de um formulário dinâmico XFA que precisa de um programa específico.",
    "Formulários interativos padrão têm suporte amplo; se um só quebra em um leitor básico, um aplicativo completo normalmente resolve.",
    "Alguns formulários simplesmente exigem o programa para o qual foram feitos — isso é um limite real, não algo para forçar.",
    "Quando um formulário não abre em lugar nenhum útil, quem emitiu quase sempre consegue fornecer uma alternativa padrão ou para imprimir.",
    "Alguns formulários PDF podem usar recursos sem suporte, então “não abre aqui” pode ser o projeto do formulário, não um defeito do seu lado.",
  ],
  mobileNote:
    "O celular é onde os problemas de compatibilidade mais doem — formulários dinâmicos XFA muitas vezes nem são desenhados em leitores móveis. O app PDF Editor abre e preenche formulários interativos padrão e planos com segurança; para um formulário dinâmico que exige um programa específico de computador, peça a quem emitiu uma versão em PDF padrão.",
  faq: [
    {
      q: "Por que o meu formulário PDF funciona em um programa e não em outro?",
      a: "Ele provavelmente usa recursos que nem todo leitor suporta — muitas vezes um formulário dinâmico XFA. Formulários padrão têm compatibilidade ampla; os dinâmicos podem exigir um programa específico e não abrem em muitos leitores, principalmente de celular e de navegador.",
    },
    {
      q: "O que é um formulário dinâmico ou XFA?",
      a: "É um tipo avançado de formulário que se comporta como um pequeno programa em vez de uma página estática. Só certos programas o desenham corretamente, e é por isso que ele pode mostrar um aviso ou uma página em branco em outros lugares.",
    },
    {
      q: "Como abro um formulário que pede “use um leitor compatível”?",
      a: "Teste um programa de PDF completo. Se for um formulário dinâmico e ainda assim não abrir, peça a quem emitiu um PDF padrão ou uma versão para imprimir — muitos leitores realmente não conseguem desenhar formulários dinâmicos.",
    },
    {
      q: "Dá para converter um formulário dinâmico em padrão por conta própria?",
      a: "Não de forma confiável a partir do arquivo pronto. O caminho seguro é pedir a quem emitiu uma versão padrão ou plana. Forçar uma conversão costuma perder campos ou dados.",
    },
    {
      q: "Problema de compatibilidade é a mesma coisa que campos sumidos?",
      a: "Eles se sobrepõem — uma questão de compatibilidade pode fazer os campos sumirem em um leitor sem suporte. Mas campos sumidos muitas vezes são só um leitor básico não desenhando um formulário padrão, o que um aplicativo competente resolve.",
    },
  ],
  related: [
    { label: "Campos do formulário PDF sumiram", path: "/guides/pdf-form-fields-missing" },
    { label: "Formulário PDF não funciona", path: "/guides/pdf-form-not-working" },
    { label: "Como funcionam os formulários PDF", path: "/guides/how-pdf-forms-work" },
    { label: "Corrigir erros de formulário PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
