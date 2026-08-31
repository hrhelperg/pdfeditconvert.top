import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "best-format-for-sharing-documents",
  h1: "Melhor formato para compartilhar documentos (PDF, DOCX e imagens comparados)",
  description:
    "Quando o PDF é o formato certo para compartilhar, quando não é e como as alternativas realistas (DOCX, imagens, HTML, Markdown) se comparam nas situações do dia a dia.",
  updated: "2026-05-29",
  intro: [
    "Não existe um formato melhor para compartilhar documentos — existe um formato melhor para cada tipo de situação. O PDF é o certo na maior parte das vezes, mas não sempre. O DOCX é o certo para documentos que serão editados. Imagens são certas para um visual único. O HTML é certo para a web. O Markdown é certo para texto simples com estrutura leve. Cada um se destaca em uma coisa e é desajeitado nas outras.",
    "O jeito certo de decidir é pensar no que a outra pessoa vai fazer com o arquivo. Ler e arquivar? PDF. Editar? DOCX. Ver na web? HTML. Citar em uma conversa? Markdown. Olhar uma imagem única? PNG ou JPG. Forçar todo envio para PDF é conveniente, mas gera atrito quando quem recebe queria editar.",
    "Este guia percorre a escolha situação por situação. A meta é mandar o formato que a outra pessoa vai usar, não o que é mais fácil para você produzir.",
  ],
  steps: [
    {
      title: "Se a pessoa vai ler e arquivar, mande PDF",
      body: "Layout travado, idêntico em qualquer aparelho, assinável, arquivável. O PDF é o padrão para documentos compartilhados e a escolha certa na maioria das vezes.",
    },
    {
      title: "Se a pessoa vai editar, mande DOCX ou Google Docs",
      body: "Edição de verdade acontece em DOCX ou no Docs. Mandar PDF quando a outra pessoa vai editar obriga a converter de volta — e ela vai receber algo aproximado do que você mandou.",
    },
    {
      title: "Se a pessoa vai ver na web, mande um link ou HTML",
      body: "Páginas web aparecem no navegador sem precisar baixar nada. Para conteúdo pensado para a web, o HTML ganha do PDF.",
    },
    {
      title: "Se é texto simples com estrutura leve, mande Markdown",
      body: "Anotações, conteúdo técnico, documentação leve. O Markdown é legível como texto em qualquer contexto e fica bonito onde há suporte.",
    },
    {
      title: "Se é uma imagem única, mande PNG ou JPG",
      body: "Imagem única, sem texto por baixo, sem páginas para administrar. PNG para nitidez e transparência, JPG para fotos. O PDF embrulha uma imagem única sem necessidade.",
    },
    {
      title: "Na dúvida, o padrão é PDF",
      body: "Quando você não consegue prever o que a outra pessoa vai fazer com o arquivo, o PDF é a saída mais segura. Qualquer um lê, ele não muda depois do envio e converte para outros formatos se precisar.",
    },
  ],
  tips: [
    "Pergunte se a pessoa vai precisar editar. A resposta muda o formato certo.",
    "Não mande PDF e DOCX juntos sem ser pedido. Isso passa indecisão.",
    "Conteúdo de várias páginas em qualquer formato que não seja PDF costuma estar errado.",
    "Ferramentas internas (mensageiro, wiki, plataformas de documento) muitas vezes têm formatos nativos que ganham do PDF naquele contexto. Não exporte para PDF por reflexo em um envio interno.",
    "Na dúvida sobre formato, mande PDF — quem recebe converte se precisar.",
  ],
  mobileNote:
    "Hoje o celular recebe a maior parte dos documentos compartilhados, e o PDF funciona melhor em tela pequena porque o layout é travado. O app PDF Editor lê, assina e compartilha PDFs no iOS e no Android sem surpresas sobre como o arquivo vai aparecer em cada aparelho.",
  faq: [
    {
      q: "O PDF é mesmo o melhor padrão?",
      a: "Para compartilhar documentos finalizados, é. Para minutas em andamento, o DOCX é melhor. Para imagens únicas, PNG ou JPG. Escolha pelo que a outra pessoa vai fazer.",
    },
    {
      q: "Quando o DOCX é melhor que o PDF?",
      a: "Quando quem recebe vai editar o documento. O PDF é difícil de editar; o DOCX é fácil. Não obrigue a pessoa a converter.",
    },
    {
      q: "Devo mandar os dois?",
      a: "Só quando pedirem explicitamente. Mandar dois formatos passa a ideia de que você não sabe qual a pessoa quer, e ela vai ter que escolher.",
    },
    {
      q: "E os links de documento na nuvem?",
      a: "São úteis em documentos colaborativos (Docs, Planilhas). Em envios de mão única de documentos finalizados, baixar é mais simples que administrar permissões de link.",
    },
    {
      q: "O aparelho de quem recebe importa?",
      a: "Um pouco — aparelhos antigos podem não abrir recursos novos de DOCX. O PDF é o formato de compatibilidade mais universal.",
    },
  ],
  related: [
    { label: "Ferramentas de PDF — lista completa das ferramentas de navegador", path: "/pdf-tools" },
    { label: "PDF ou DOCX — comparação de recursos", path: "/guides/pdf-vs-docx" },
    { label: "PDF ou Google Docs", path: "/guides/pdf-vs-google-docs" },
    { label: "PDF ou imagens para compartilhar documentos", path: "/guides/pdf-vs-images-for-sharing-documents" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
