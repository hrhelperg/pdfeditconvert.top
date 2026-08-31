import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-submission-errors",
  h1: "Erros no envio de formulários PDF",
  description:
    "O botão Enviar do formulário falha ou não faz nada? Por que botões de envio embutidos dependem do servidor de quem emitiu, o que os erros significam e o jeito manual confiável de mandar o seu formulário.",
  updated: "2026-06-01",
  intro: [
    "Alguns formulários PDF têm um botão Enviar embutido — você aperta e o formulário deveria se mandar sozinho para algum lugar. Quando funciona, é conveniente; quando não funciona, é desconcertante, porque o botão simplesmente falha, solta um erro enigmático ou parece não fazer nada. O motivo é que um botão de envio não manda o formulário por conta própria: ele tenta entregar os dados a um destino que quem criou o formulário configurou, e essa ligação costuma ser a parte que quebra.",
    "Esses botões normalmente enviam os dados do formulário para um endereço na internet ou um e-mail controlado por quem criou o formulário. Se aquele servidor está fora do ar, o endereço mudou ou o seu leitor bloqueia a ação por segurança, o envio falha — e nada disso é coisa que você resolva do seu lado. A boa notícia é que quase sempre existe uma alternativa manual confiável.",
    "Este guia explica o que os botões de envio de fato fazem, o que as falhas comuns significam e como levar o seu formulário preenchido ao destino quando o botão não colabora. É diferente de erros de upload em um portal na web, que são outro problema.",
  ],
  steps: [
    {
      title: "Entenda o que o Enviar faz",
      body: "O botão Enviar de um formulário manda os dados dos campos a um destino — um endereço na internet ou um e-mail — que quem emitiu configurou. Ele não é autossuficiente: depende de aquele destino continuar funcionando e de o seu leitor permitir a ação.",
    },
    {
      title: "Leia o erro em busca de uma pista",
      body: "Uma mensagem sobre servidor, rede ou ação bloqueada aponta para o destino ou para uma restrição de segurança, não para o seu arquivo. “Não aconteceu nada” muitas vezes significa que o seu leitor bloqueou o envio em silêncio por precaução.",
    },
    {
      title: "Teste um app de PDF completo",
      body: "Leitores básicos e de navegador frequentemente bloqueiam ou ignoram ações de envio. Abrir o formulário preenchido em um app de PDF dedicado às vezes deixa o botão funcionar como previsto.",
    },
    {
      title: "Recorra ao envio manual",
      body: "Se o botão continuar falhando, salve e achate o formulário preenchido e mande à mão — por e-mail para o endereço que está no formulário, ou pelo portal de quem emitiu. Isso contorna o envio quebrado por completo.",
    },
    {
      title: "Confirme e guarde uma cópia",
      body: "Ao enviar manualmente, guarde a sua cópia achatada e fique de olho em um comprovante. Se o formulário deveria chegar a uma caixa de entrada ou portal específico, as instruções de quem emitiu dizem onde.",
    },
  ],
  tips: [
    "Um botão Enviar que falha normalmente é o destino de quem emitiu, não o seu arquivo — o envio manual é a alternativa confiável.",
    "Salve e achate as suas respostas antes de mandar à mão, para quem recebe ficar com uma cópia travada e completa.",
    "“Não aconteceu nada” no Enviar costuma significar que o seu leitor bloqueou a ação por segurança; um app dedicado pode permitir.",
    "Erros de envio são diferentes de erros de upload em portal — se você está subindo um arquivo em um site, a solução é outra.",
    "Procure no formulário um e-mail de contato ou instruções; quem emite costuma oferecer um caminho manual exatamente para essa situação.",
  ],
  mobileNote:
    "Se o botão Enviar de um formulário falha no celular, o app PDF Editor deixa você achatar o formulário preenchido e mandar à mão pela folha de compartilhamento — e-mail ou envio a portal — então um envio quebrado nunca prende as suas respostas. Tudo funciona no aparelho.",
  faq: [
    {
      q: "Por que o botão Enviar do meu formulário PDF não funciona?",
      a: "O botão manda os seus dados a um destino que quem emitiu configurou — um servidor ou e-mail. Se ele está fora do ar, mudou, ou o seu leitor bloqueia a ação por segurança, o envio falha. Isso está fora do seu controle; mande o formulário à mão.",
    },
    {
      q: "O que significa o Enviar não fazer nada?",
      a: "O seu leitor provavelmente bloqueou a ação de envio em silêncio, por precaução. Teste um app de PDF completo, ou pule o botão e mande o formulário preenchido à mão.",
    },
    {
      q: "Como envio o formulário se o botão está quebrado?",
      a: "Salve e achate o formulário preenchido e mande pelo caminho manual: e-mail para o endereço do formulário ou envio ao portal de quem emitiu. Isso contorna a ação de envio por completo.",
    },
    {
      q: "Erro de envio é a mesma coisa que erro de upload?",
      a: "Não. Erro de envio é o botão Enviar embutido do formulário falhando. Erro de upload é um site recusando um arquivo que você está subindo. As causas e as soluções são diferentes.",
    },
    {
      q: "Os dados do formulário podem ter sido enviados mesmo com o erro?",
      a: "Provavelmente não — se apareceu um erro, presuma que não chegou. Mande à mão, guarde a sua cópia e procure um comprovante para ter certeza de que chegou ao destino.",
    },
  ],
  related: [
    { label: "Como enviar um formulário PDF preenchido", path: "/guides/how-to-send-a-completed-pdf-form" },
    { label: "Como resolver erros de upload de PDF", path: "/guides/how-to-fix-pdf-upload-errors" },
    { label: "Formulário PDF não funciona", path: "/guides/pdf-form-not-working" },
    { label: "Problemas de compatibilidade de formulários PDF", path: "/guides/pdf-form-compatibility-problems" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
