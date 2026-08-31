import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-a-pdf-form",
  h1: "Como compartilhar um formulário PDF para outras pessoas preencherem",
  description:
    "Mandar um formulário em branco para ser preenchido é diferente de mandar um documento pronto. Como compartilhar um formulário para que dê mesmo para preencher e como recolher os resultados.",
  updated: "2026-06-01",
  intro: [
    "Compartilhar um formulário PDF parece trivial — anexa e envia —, mas há diferença entre distribuir um formulário em branco para as pessoas completarem e mandar um documento para elas lerem. Ao compartilhar um formulário, você precisa que quem recebe consiga preencher no aparelho que tiver, e que as cópias completas voltem em um estado que você realmente consiga usar.",
    "Duas coisas costumam dar errado. O formulário chega de um jeito que remove ou esconde os campos, então ninguém consegue digitar. Ou as respostas voltam desencontradas — algumas achatadas, outras editáveis, outras como fotos de uma impressão. Um pouco de cuidado no envio evita as duas coisas e torna a coleta bem menos penosa.",
    "Este guia cobre como compartilhar um formulário em branco de modo que ele continue preenchível, como dar instruções claras a quem recebe e como lidar com as cópias completas conforme elas voltam — sem passar nada por um serviço de upload de terceiros quando o conteúdo é sensível.",
  ],
  steps: [
    {
      title: "Confirme que o formulário em branco é preenchível antes de enviar",
      body: "Abra o seu formulário e confira você mesmo. Se for interativo, garanta que os campos estão ativos; se for plano, garanta que há espaço claro para as respostas. Não achate um formulário em branco — isso remove os campos de que quem recebe precisa.",
    },
    {
      title: "Mande o arquivo, não um link para um conversor",
      body: "Anexe o PDF direto ao e-mail ou à mensagem, ou compartilhe por um drive que a outra pessoa já usa. Evite passar um formulário sensível por ferramentas públicas de upload quando um anexo comum resolve.",
    },
    {
      title: "Diga a quem recebe como preencher",
      body: "Uma linha ajuda: “Toque nos campos para digitar, ou acrescente texto por cima se o seu leitor não mostrar os campos, e exporte uma cópia preenchida”. Indique um app de PDF de verdade a quem estiver no celular, em vez da pré-visualização do e-mail.",
    },
    {
      title: "Peça as cópias preenchidas em um formato utilizável",
      body: "Peça que devolvam um PDF salvo ou achatado, e não uma foto de uma impressão. Cópias achatadas aparecem iguais em todo lugar e são mais fáceis de arquivar e ler.",
    },
    {
      title: "Recolha e organize as respostas",
      body: "Conforme as cópias chegam, renomeie por pessoa e data para elas não se misturarem. Mantenha o modelo em branco separado, para você sempre ter um original limpo para reenviar.",
    },
  ],
  tips: [
    "Nunca achate o formulário em branco que você distribui — achatar remove os campos e não deixa nada para preencher.",
    "Se as pessoas insistem em mandar fotos de impressões, as suas instruções precisam ser mais claras sobre preencher na tela e exportar.",
    "Em formulários sensíveis, prefira anexos diretos ou um drive privado a sites públicos de “preencher online”.",
    "Dê ao arquivo um nome claro, como “ficha-cadastro-branco.pdf”, para quem recebe distinguir o modelo da cópia preenchida.",
    "O comportamento dos formulários varia entre leitores, então sugerir um aplicativo confiável específico evita a maioria das respostas de “não consigo digitar”.",
  ],
  mobileNote:
    "Quem recebe pode preencher o seu formulário no celular com o app PDF Editor — ele ativa os campos interativos e deixa acrescentar texto em formulários planos — e exportar uma cópia preenchida para devolver na hora. Sugerir isso na sua mensagem poupa quem ficaria preso em uma pré-visualização de e-mail que ignora os campos.",
  faq: [
    {
      q: "Como compartilho um formulário PDF para as pessoas preencherem?",
      a: "Mande o PDF preenchível como anexo direto ou por um drive compartilhado, e não achate antes. Diga a quem recebe para abrir em um app de PDF de verdade, preencher os campos ou acrescentar texto e exportar uma cópia preenchida.",
    },
    {
      q: "Por que as pessoas não conseguem digitar no formulário que enviei?",
      a: "Elas costumam abrir na pré-visualização do e-mail ou em um leitor que ignora os campos, ou o formulário é plano. Recomende um app de PDF dedicado e avise que dá para acrescentar texto por cima se nenhum campo aparecer.",
    },
    {
      q: "Devo compartilhar um formulário por um serviço de preenchimento online?",
      a: "Em formulários comuns pode ser conveniente, mas em qualquer coisa sensível um anexo direto ou drive privado mantém o conteúdo fora de servidores de terceiros. Case o canal com a sensibilidade.",
    },
    {
      q: "Como os formulários preenchidos devem voltar para mim?",
      a: "Peça um PDF salvo ou achatado, e não uma foto de impressão. Cópias achatadas ficam iguais em todo lugar e são bem mais fáceis de arquivar e processar.",
    },
    {
      q: "Como mantenho as respostas organizadas?",
      a: "Renomeie cada arquivo devolvido por pessoa e data, guarde tudo em uma pasta e mantenha o modelo em branco separado, para você sempre poder reenviar um original limpo.",
    },
  ],
  related: [
    { label: "Como enviar um formulário PDF preenchido", path: "/guides/how-to-send-a-completed-pdf-form" },
    { label: "Como enviar fichas de cadastro para clientes", path: "/guides/how-to-send-client-intake-forms" },
    { label: "Fluxos de coleta de documentos com PDF", path: "/guides/document-collection-workflows-with-pdf" },
    { label: "Como compartilhar PDFs com clientes", path: "/guides/how-to-share-pdfs-with-clients" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
