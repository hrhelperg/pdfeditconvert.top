import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdfs-with-clients",
  h1: "Como compartilhar PDFs com clientes (com profissionalismo e privacidade)",
  description:
    "Um roteiro curto para mandar PDFs a clientes — tamanho para e-mail, escolha de senha, identidade visual, confirmação de recebimento — sem enviar nada a terceiros.",
  updated: "2026-05-29",
  intro: [
    "A forma como você manda um PDF a um cliente diz surpreendentemente muito sobre como você trabalha. Um anexo de 40 MB que volta, um nome genérico como “Documento (1).pdf”, ou um arquivo que abre com o nome do cliente escrito errado na barra de título — são detalhes pequenos, e todos ficam na memória.",
    "Um repasse profissional é, na maior parte, questão de alguns hábitos: dimensionar o arquivo direito, nomeá-lo como entrega, manter a identidade visual, colocar senha quando faz sentido e confirmar o recebimento. Nada disso demora depois que vira rotina; juntos, fazem o arquivo parecer pronto.",
    "Este guia é esse roteiro curto — o que fazer antes de apertar enviar e quais ferramentas gratuitas resolvem cada etapa sem mandar nada sensível para o servidor de terceiros.",
  ],
  steps: [
    {
      title: "Nomeie o arquivo pensando no cliente, não em você",
      body: "NomeDoCliente_NomeDoProjeto_Proposta_2026-05-29.pdf é inconfundível. “final_v3_editado.pdf” é uma confissão. Quem recebe precisa identificar o arquivo na pasta de downloads um mês depois.",
    },
    {
      title: "Ajuste o título nos metadados para combinar",
      body: "O título da aba do PDF muitas vezes mostra o nome de arquivo original ou uma sobra do Word. Reexporte do programa de origem com o título definido nos metadados, ou ajuste em um editor de PDF. Detalhe pequeno, acabamento profissional.",
    },
    {
      title: "Comprima pensando na caixa de entrada do cliente",
      body: "Alguns portais de cliente limitam a 5 MB; a maioria dos e-mails, a 25. A ferramenta Comprimir PDF deixa uma entrega típica confortavelmente abaixo dos dois. Faça disso o último passo, não o primeiro.",
    },
    {
      title: "Coloque senha só quando importa",
      body: "Use senha em material realmente sensível — detalhes financeiros, dados pessoais, minutas de contrato. Não proteja a proposta em si; o atrito supera o ganho de segurança.",
    },
    {
      title: "Mande um e-mail de apresentação listando o que vai dentro",
      body: "Uma frase curta: “Em anexo: proposta (12 páginas), termos (3 páginas), preços (1 página)”. O cliente sabe o que está abrindo sem precisar folhear o arquivo antes.",
    },
    {
      title: "Confirme o recebimento depois",
      body: "Ou peça no e-mail “me avise se chegou legível”, ou volte a checar no dia seguinte. Arquivos caem em filtro de spam, especialmente anexos com senha.",
    },
  ],
  tips: [
    "Marque os rascunhos (RASCUNHO, INTERNO), mas nunca a versão final. A final não deveria precisar de rótulo.",
    "Alinhe a sua convenção de nomes à do cliente, se der para perceber — muitas empresas grandes têm um padrão que você pode espelhar.",
    "Evite mandar mais de três anexos. Junte o que anda junto e mande o resto depois, se for preciso.",
    "Se você precisa de uma assinatura de volta, assine a sua parte antes e deixe o campo de assinatura preparado para a pessoa. É uma gentileza pequena que volta mais rápido.",
    "Teste o arquivo em um leitor novo antes de enviar — o seu leitor pode mostrar layouts que os outros não mostram.",
  ],
  mobileNote:
    "Cada vez mais clientes leem as entregas primeiro no celular. O app PDF Editor deixa você visualizar, comprimir, assinar e reenviar PDFs pelo celular, então uma revisão de última hora do cliente não espera você voltar ao escritório.",
  faq: [
    {
      q: "Qual é o erro mais comum ao mandar PDFs para clientes?",
      a: "O nome do arquivo. “Documento (1).pdf” diz ao cliente que você não se importou. Um nome descritivo com projeto e data deixa o arquivo encontrável depois.",
    },
    {
      q: "Devo colocar senha em tudo que envio?",
      a: "Não. Reserve as senhas ao conteúdo realmente sensível. Entregas de rotina não precisam, e abusar de senhas ensina os clientes a ignorá-las ou perdê-las.",
    },
    {
      q: "Qual pode ser o tamanho do arquivo?",
      a: "O e-mail para em 25 MB; muitos portais de cliente, em 5. Comprima tudo acima de 5 MB, a menos que você saiba que o cliente aceita mais. Menor é sempre mais seguro.",
    },
    {
      q: "Devo mandar vários PDFs ou juntar tudo?",
      a: "Junte quando as peças andam juntas (proposta + termos + preços). Mantenha separado quando são entregas genuinamente diferentes. Três anexos é o limite prático antes de as coisas se perderem.",
    },
    {
      q: "Tudo bem usar ferramentas de PDF online em trabalho de cliente?",
      a: "Só se elas rodarem localmente no seu navegador. Subir um documento sensível de cliente para o servidor de terceiros é um risco real. Ferramentas de navegador que processam no seu aparelho evitam isso por completo.",
    },
  ],
  related: [
    { label: "PDF para empresas — contratos e fluxos", path: "/pdf-for-business" },
    { label: "Comprimir PDF — reduza para portais de cliente", path: "/compress-pdf" },
    { label: "Como preparar um PDF para uso profissional", path: "/guides/how-to-prepare-pdf-for-business-use" },
    { label: "Como criar PDFs prontos para o cliente", path: "/guides/how-to-create-client-ready-pdf-files" },
  ],
  parentHub: { label: "PDF para empresas", path: "/pdf-for-business" },
};

export default content;
