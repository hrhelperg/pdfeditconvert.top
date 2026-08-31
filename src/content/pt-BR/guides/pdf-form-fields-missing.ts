import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-fields-missing",
  h1: "Campos do formulário PDF sumiram? Veja por quê",
  description:
    "Abriu o formulário e os campos não estão lá? Por que campos interativos desaparecem em alguns leitores, como recuperá-los e o que fazer quando nunca existiram.",
  updated: "2026-06-01",
  intro: [
    "Você abre um formulário esperando caixas para digitar e não há nada — só uma página de aparência plana, ou campos que aparecem como contornos vazios com os quais não dá para interagir. Campos sumidos assustam, mas normalmente são inofensivos: os campos continuam no arquivo; é o seu leitor que não os está desenhando. De vez em quando o formulário nunca teve campos e sempre foi para ser preenchido à mão.",
    "Dois cenários cobrem quase todos os casos. No primeiro, o formulário é interativo, mas você o abriu em um lugar que ignora a camada de campos — uma pré-visualização de navegador, um leitor de e-mail, um leitor de PDF básico que trata tudo como imagem. No segundo, o formulário é mesmo plano, então não há campos para achar e você o completa posicionando texto por cima.",
    "Este guia ajuda a diferenciar os dois e a recuperar os campos quando eles existem — sem presumir que o arquivo está corrompido, porque quase nunca está.",
  ],
  steps: [
    {
      title: "Descarte o leitor primeiro",
      body: "Abra o mesmo arquivo em um app de PDF dedicado, em vez de uma aba do navegador ou pré-visualização de e-mail. Se os campos reaparecerem, eles sempre estiveram lá — o leitor anterior é que não desenhava a camada de campos.",
    },
    {
      title: "Verifique se os campos algum dia existiram",
      body: "Se nenhum aplicativo competente mostra campos em ponto algum da página, o formulário é plano — foi digitalizado ou exportado sem camada de campos. Não falta nada; ele simplesmente nunca foi interativo.",
    },
    {
      title: "Atualize ou troque o seu app de PDF",
      body: "Um leitor desatualizado ou mínimo pode desenhar a página e pular os campos. Um app de PDF atual e completo é o jeito mais confiável de exibir e usar campos interativos.",
    },
    {
      title: "Baixe de novo se o arquivo parecer incompleto",
      body: "Um download parcial ou interrompido pode perder conteúdo. Baixe o formulário de novo na fonte e reabra — uma cópia nova e completa às vezes devolve campos que pareciam sumidos.",
    },
    {
      title: "Preencha um formulário plano acrescentando texto",
      body: "Se o formulário realmente não tem campos, complete do jeito plano: posicione texto e vistos na página com um editor de PDF e exporte. Você não precisa dos campos para terminar.",
    },
  ],
  tips: [
    "Antes de presumir defeito, troque de leitor — outro aplicativo é o teste mais rápido para saber se os campos existem.",
    "Pré-visualizações de navegador e leitores de e-mail são os suspeitos de sempre nos campos “desaparecidos”; um app de PDF de verdade resolve a maioria dos casos.",
    "Se os campos aparecem como contornos vazios em que não dá para clicar, muitas vezes é um leitor que os desenha mas não os ativa — troque de aplicativo.",
    "Um formulário realmente plano não está com nada faltando — acrescentar texto por cima é a forma prevista de preencher.",
    "Formulários dinâmicos avançados às vezes só revelam os campos em programas específicos; se for o caso, o formulário pode exigir aquele programa ou um formato alternativo.",
  ],
  mobileNote:
    "No celular, campos sumidos costumam ser uma pré-visualização que não os desenha. Abra o formulário no app PDF Editor: ele ativa os campos interativos onde eles existem e deixa você posicionar texto na página onde não existem — então um formulário que parecia sem campos no e-mail vira preenchível.",
  faq: [
    {
      q: "Por que os campos do formulário sumiram do meu PDF?",
      a: "Na maioria das vezes o seu leitor não está desenhando a camada de campos — comum em pré-visualizações de navegador e leitores de e-mail. Abra o arquivo em um app de PDF dedicado e os campos costumam reaparecer. Se nenhum aplicativo os mostra, o formulário é simplesmente plano.",
    },
    {
      q: "Eu perdi os campos ou nunca houve nenhum?",
      a: "Abra em um app de PDF competente. Se os campos aparecerem, eles sempre estiveram lá e o leitor antigo os escondia. Se não aparecerem em lugar nenhum, o formulário é plano e nunca teve camada de campos interativa.",
    },
    {
      q: "Um download corrompido pode causar campos sumidos?",
      a: "De vez em quando. Um download parcial pode perder conteúdo. Baixe o formulário de novo na fonte e reabra antes de concluir que os campos se foram mesmo.",
    },
    {
      q: "Como preencho um formulário que não tem campos?",
      a: "Posicione o seu próprio texto e os vistos direto na página com um editor de PDF e exporte. Formulários planos são completados assim — sem precisar de campos.",
    },
    {
      q: "Por que os campos aparecem como contornos em que não consigo clicar?",
      a: "O seu leitor está desenhando as caixas dos campos, mas não os deixando interativos. Passe para um app de PDF completo, que exibe e ativa os campos.",
    },
  ],
  related: [
    { label: "Formulário PDF não funciona", path: "/guides/pdf-form-not-working" },
    { label: "Por que não consigo digitar em um formulário PDF?", path: "/guides/why-cant-i-type-in-a-pdf-form" },
    { label: "Problemas de compatibilidade de formulários PDF", path: "/guides/pdf-form-compatibility-problems" },
    { label: "O que é um formulário PDF?", path: "/guides/what-is-a-pdf-form" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
