import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-prepare-pdf-before-sharing",
  h1: "Como preparar um PDF antes de compartilhar",
  description:
    "Checklist antes de enviar um PDF: corte páginas soltas, corrija a orientação, reduza o tamanho e marque rascunhos. Envie um documento limpo e proposital.",
  updated: "2026-05-23",
  intro: [
    "O minuto antes de apertar enviar é a hora mais barata de pegar um problema no PDF. Depois que ele cai na caixa de entrada de alguém, a página em branco, a digitalização deitada, os 40 MB ou a anotação interna que você esqueceu de tirar viram problema da outra pessoa também — e seu, para pedir desculpa. Uma passada rápida e proposital antes do envio evita quase tudo isso.",
    "Este guia é essa passada: um checklist prático que leva um par de minutos e usa ferramentas grátis de navegador, cada uma rodando no seu aparelho e sem enviar nada. O foco são os documentos que de fato vão para outras pessoas — orçamentos, contratos, inscrições, relatórios.",
    "Nada disso é capricho pelo capricho. É sobre quem recebe abrir o seu arquivo e encontrar exatamente o que esperava, em um tamanho que consegue receber, sem nada de extra anexado.",
  ],
  steps: [
    {
      title: "Confirme que é a versão certa e final",
      body: "Abra o arquivo e verifique se é o rascunho mais recente, com tudo editado. Um PDF é uma fotografia — corrigir um erro depois de enviar significa enviar de novo.",
    },
    {
      title: "Remova o que não deve sair",
      body: "Descarte páginas em branco, folhas de rosto, anotações internas e páginas destinadas a outra pessoa mantendo só o que pertence ao documento, com a ferramenta Extrair páginas do PDF.",
    },
    {
      title: "Corrija orientação e ordem",
      body: "Use a ferramenta Girar PDF nas páginas deitadas e a Organizar páginas do PDF em tudo que estiver fora de sequência, para o documento ler bem do começo ao fim.",
    },
    {
      title: "Deixe o tamanho abaixo do limite",
      body: "Se o arquivo estiver pesado — digitalizações e fotos deixam — passe pela ferramenta Comprimir PDF para caber nos limites típicos de 10 a 25 MB de e-mail e de portais.",
    },
    {
      title: "Marque a situação se não for final",
      body: "Se você está compartilhando um rascunho para revisão, coloque uma marca d'água RASCUNHO com a ferramenta Marca d'água em PDF, para ninguém confundir com a versão assinada.",
    },
    {
      title: "Nomeie com clareza e envie",
      body: "Dê um nome descritivo e datado, para ficar óbvio na caixa de entrada de quem recebe e fácil de achar depois, e então anexe ou envie.",
    },
  ],
  tips: [
    "O deslize mais comum antes do envio é uma página que não deveria estar ali — uma em branco, uma duplicada ou uma com dados destinados a outra pessoa. Confira página por página.",
    "Ajuste o tamanho ao canal: o e-mail para por volta de 25 MB e muitos portais de envio limitam bem menos. Comprimir um arquivo cheio de digitalização costuma resolver.",
    "Uma marca RASCUNHO ou CONFIDENCIAL alinha as expectativas e evita que uma versão de trabalho seja tratada como final — um seguro barato em tudo que ainda não foi assinado.",
    "Um nome claro faz parte de preparar o documento. É a primeira coisa que quem recebe vê e o que você vai procurar depois.",
    "Em qualquer coisa realmente sensível, considere também uma senha — preparar não é só arrumação, é não compartilhar demais.",
  ],
  mobileNote:
    "Enviar documentos direto do celular é justamente onde uma passada rápida de preparo compensa. O app PDF Editor permite aparar páginas, girar, comprimir, marcar e renomear em um só lugar antes do envio — offline e sem enviar nada.",
  faq: [
    {
      q: "O que devo conferir antes de enviar um PDF?",
      a: "Se é a versão final, se não há páginas soltas ou sensíveis, se a orientação e a ordem estão corretas, se o tamanho cabe no canal, se está marcado caso seja rascunho e se o nome é claro. Uma passada de dois minutos cobre tudo.",
    },
    {
      q: "Como garanto que não estou compartilhando as páginas erradas?",
      a: "Mantenha só as páginas que pertencem ao documento com a ferramenta Extrair páginas do PDF e revise o resultado página por página. Anotações internas e dados de outros destinatários costumam se esconder em páginas que você não precisa enviar.",
    },
    {
      q: "Por que o tamanho do arquivo importa tanto?",
      a: "Serviços de e-mail recusam anexos acima de cerca de 25 MB e muitos portais limitam bem menos. Um PDF cheio de digitalização passa disso com facilidade, então comprimir evita uma devolução ou um envio recusado.",
    },
    {
      q: "Essas ferramentas de preparo são privadas?",
      a: "São. As ferramentas de extrair, girar, reordenar, comprimir e marcar rodam todas no seu navegador, no seu aparelho — nada é enviado.",
    },
    {
      q: "Todo PDF compartilhado precisa de senha?",
      a: "Não — só os realmente sensíveis. A senha adiciona atrito para quem recebe, então reserve-a para documentos cujo conteúdo precisa mesmo de proteção.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduza para e-mail", path: "/compress-pdf" },
    { label: "Marca d'água em PDF — marque rascunhos", path: "/add-watermark-to-pdf" },
    { label: "Como reduzir o tamanho de um PDF para e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Como compartilhar um PDF pelo celular", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
