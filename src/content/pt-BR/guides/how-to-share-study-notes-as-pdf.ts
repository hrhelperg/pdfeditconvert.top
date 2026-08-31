import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-study-notes-as-pdf",
  h1: "Como compartilhar anotações de estudo em PDF (grupo, chat, nuvem)",
  description:
    "Compartilhe anotações com o grupo de estudo sem perder formatação nem controle de versão. Os hábitos de PDF que evitam que o estudo coletivo vire uma bagunça de prints.",
  updated: "2026-05-29",
  intro: [
    "Compartilhar anotações com o grupo de estudo deveria ser fácil, mas, na prática, isso costuma virar um grupo de mensagens com trinta prints e três versões diferentes da mesma aula. Na véspera da prova, ninguém acha a versão com o exemplo resolvido que todo mundo cita, e alguém mandou a foto das anotações à mão que ninguém consegue ler.",
    "O PDF resolve boa parte disso. Ele trava a formatação, funciona em qualquer aparelho, cabe na folha de compartilhamento de todas as plataformas e não fica preso a uma conta de nuvem. Alguns hábitos de compartilhamento — nomear o arquivo com consistência, versionar de propósito, escolher o canal certo — mantêm o estudo coletivo coerente sem ninguém precisar tocar aquilo como projeto.",
    "Este guia descreve esses hábitos. Nenhum é ferramenta; todos são convenções que você e o seu grupo combinam uma vez. Depois disso, simplesmente funciona.",
  ],
  steps: [
    {
      title: "Combine primeiro o canal de compartilhamento",
      body: "Escolham um lugar — grupo de mensagens, pasta compartilhada na nuvem, um servidor dedicado — e fiquem nele. Anotações espalhadas por dois canais somem. O canal importa menos que a consistência.",
    },
    {
      title: "Compartilhe sempre em PDF, nunca como foto do documento",
      body: "Um print de um PDF é pior que o PDF. Mande o arquivo direto. Celulares facilitam isso — folha de compartilhamento → arquivo, não print.",
    },
    {
      title: "Nomeie o arquivo pensando no grupo, não em você",
      body: "CodigoDaDisciplina_Semana3_Anotacoes_SeuNome.pdf. O grupo vê quem compartilhou o quê e de qual semana. “Anotacoes.pdf” é inútil em uma conversa com quinze anexos chamados Anotacoes.pdf.",
    },
    {
      title: "Marque as anotações que ainda são rascunho",
      body: "Se as suas anotações são de primeira mão e provavelmente serão revisadas, a ferramenta Marca d'água em PDF carimba RASCUNHO em todas as páginas. O grupo sabe que vem revisão.",
    },
    {
      title: "Comprima antes de compartilhar",
      body: "A ferramenta Comprimir PDF reduz o tamanho para plataformas de mensagem com limite de anexo. Economiza tempo de envio na rede móvel e evita a recusa por “arquivo grande demais”.",
    },
    {
      title: "Controle a versão no nome do arquivo, não na conversa",
      body: "Semana3_Anotacoes_v2.pdf não deixa dúvida. “Revisei as anotações, segue em anexo” em uma conversa deixa. O nome do arquivo é o registro de versão.",
    },
  ],
  tips: [
    "Não compartilhe documentos do Word com o grupo. Eles renderizam diferente em cada aparelho, travam em um editor por vez e se dividem em versões na hora. O PDF trava tudo.",
    "Use PDFs com OCR das anotações manuscritas quando possível — o texto pesquisável ajuda o grupo a achar temas específicos rápido.",
    "Não publique fotos da tela do notebook. Os defeitos (moiré, reflexo, baixa resolução) deixam as anotações mais difíceis de ler, não mais fáceis.",
    "Se o seu grupo compartilha com frequência, monte um modelo compartilhado para os PDFs de anotação. Capas consistentes ajudam a reconhecer quem compartilhou o quê.",
    "Evite e-mail para anotações de grupo. Conversas registram quem viu o quê; o e-mail espalha a mesma conversa por várias caixas de entrada.",
  ],
  mobileNote:
    "O celular faz a maior parte do compartilhamento em grupo — captura rápida, envio imediato para a conversa, confirmação na hora. O app PDF Editor cuida da corrente digitalizar-juntar-comprimir-renomear no celular, então o arquivo que chega ao grupo é limpo, e não um despejo bruto da galeria.",
  faq: [
    {
      q: "Qual é o pior jeito de compartilhar anotações de estudo?",
      a: "Prints do documento ou anotações só na conversa. Os dois não são pesquisáveis e não sobrevivem quando o assunto muda.",
    },
    {
      q: "Todo mundo deve compartilhar as anotações ou só uma pessoa?",
      a: "Todo mundo, mas com combinação: semanas acertadas por pessoa, ou “eu faço esta semana, você faz a próxima”. Revezar reduz o esforço de cada um e gera anotações com pontos de vista diferentes.",
    },
    {
      q: "Onde as anotações canônicas devem ficar?",
      a: "Uma pasta compartilhada na nuvem é o melhor para guarda de longo prazo. O grupo de mensagens serve para a distribuição rápida; a pasta é o arquivo.",
    },
    {
      q: "Como versionamos as anotações?",
      a: "Só pelo nome do arquivo. v1, v2, v3. Quando o grupo concordar que é a FINAL, renomeie e mova para /final/. Não controle versão pela conversa.",
    },
    {
      q: "E se as anotações forem à mão?",
      a: "Digitalize em PDF primeiro. Digitalizações em preto e branco de anotações manuscritas são mais nítidas e menores que fotos. Acrescente OCR se a sua ferramenta permitir.",
    },
  ],
  related: [
    { label: "PDF para estudantes — anotações e resumos", path: "/pdf-for-students" },
    { label: "Comprimir PDF — reduza para os limites de anexo do chat", path: "/compress-pdf" },
    { label: "Como organizar materiais de estudo em PDF", path: "/guides/how-to-organize-study-materials-as-pdf" },
    { label: "Como compartilhar um PDF pelo celular", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "PDF para estudantes", path: "/pdf-for-students" },
};

export default content;
