import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-contracts-as-pdf",
  h1: "Como enviar contratos em PDF (assinar, travar, entregar)",
  description:
    "Contratos exigem um fluxo de PDF mais rígido: travar o conteúdo, aplicar assinaturas, marcar rascunhos e entregar um arquivo final que a outra parte assina sem idas e vindas.",
  updated: "2026-05-29",
  intro: [
    "Contrato é o tipo de documento em que um PDF mal cuidado causa mais estrago. Uma via assinada que é uma versão diferente da minuta. Uma contra-assinatura aplicada a um arquivo que a primeira parte achava travado. Uma marca d'água de rascunho esquecida na versão final. Nada disso é exótico; tudo isso já colocou gente em disputas reais.",
    "A cura é um fluxo mais rígido em torno de três coisas: travar o conteúdo antes da assinatura, aplicar as assinaturas em uma ordem clara e entregar o resultado como um arquivo final definitivo. Nada disso exige software caro de contratos; exige uso consciente das ferramentas básicas de PDF e uma sequência honesta.",
    "Este guia percorre o fluxo como ele deveria funcionar — da minuta final até as assinaturas das duas partes, chegando a um PDF contra-assinado e limpo com que o jurídico fica feliz. Ele também cobre o que fazer quando a outra parte quer usar a plataforma de assinatura dela.",
  ],
  steps: [
    {
      title: "Finalize o conteúdo do contrato primeiro",
      body: "Toda a negociação volta à origem — Word, Pages, Docs. Não faça alterações dentro do PDF. Exporte em PDF só quando os dois lados concordarem que o texto está fechado.",
    },
    {
      title: "Tire rascunhos e marcas d'água",
      body: "Remova as marcas de RASCUNHO (a ferramenta Marca d'água em PDF permite simplesmente não colocá-la na versão final). O PDF final deve parecer final.",
    },
    {
      title: "Coloque a sua assinatura primeiro",
      body: "A ferramenta Assinar PDF permite adicionar uma assinatura digitada ou desenhada no lugar certo. Assine primeiro se você é quem propõe; a outra parte contra-assina o PDF que já tem a sua assinatura.",
    },
    {
      title: "Trave o arquivo antes de enviar",
      body: "Se a sua ferramenta permitir, aplique restrições de edição depois de assinar. A outra parte consegue ler e assinar, mas não alterar o conteúdo. É a única forma de congelar um contrato com confiança.",
    },
    {
      title: "Envie com instruções claras",
      body: "Um recado curto: “Em anexo: contrato assinado. Por favor, contra-assine na página 8 e devolva.” Uma frase evita uma rodada inteira de perguntas.",
    },
    {
      title: "Receba a via contra-assinada e arquive as duas",
      body: "Quando o PDF contra-assinado chegar, salve-o como versão canônica. Guarde a minuta sem assinatura, a sua via com uma assinatura e a via totalmente assinada na mesma pasta. A cadeia de versões é a trilha de auditoria.",
    },
  ],
  tips: [
    "Não use o PDF de assinatura original para um segundo contrato. Comece sempre uma exportação nova a cada contrato — metadados limpos, assinaturas limpas.",
    "Se a outra parte quer usar a plataforma de assinatura dela, ceda. Não vale a briga por qual ferramenta é mais elegante.",
    "Garanta que a sua assinatura seja visualmente distinta. Um nome digitado em itálico é uma assinatura, mas transmite menos intenção que uma desenhada.",
    "Capas listando título do contrato, data e partes facilitam muito a recuperação futura, mais do que confiar só no nome do arquivo.",
    "Marque as minutas (RASCUNHO, NÃO ASSINAR) durante a negociação. O rótulo visível evita uma contra-assinatura acidental.",
  ],
  mobileNote:
    "Contra-assinaturas costumam acontecer no celular — um sócio revisando no trânsito, um cliente assinando entre reuniões. O app PDF Editor faz isso bem: revisar o contrato, assinar com o dedo na tela e devolver sem passar por um computador. O arquivo assinado sai do celular como um PDF limpo.",
  faq: [
    {
      q: "Uma assinatura digitada em PDF tem valor jurídico?",
      a: "Na maioria dos países, sim, em contratos comuns. No Brasil, a MP 2.200-2/2001 e a Lei 14.063/2020 reconhecem assinaturas eletrônicas. Alguns casos específicos (escrituras, certos instrumentos financeiros) exigem mais — confira o tipo de contrato antes de supor.",
    },
    {
      q: "O contrato deve ter senha?",
      a: "Normalmente não. Senhas adicionam atrito sem muito ganho de segurança. Reserve-as para anexos altamente confidenciais, não para o contrato em si.",
    },
    {
      q: "Como travo um PDF depois de assinar?",
      a: "Muitas ferramentas de edição, inclusive o app PDF Editor, permitem aplicar restrições de edição durante o processo de assinatura. Trave depois da assinatura final, não durante a negociação.",
    },
    {
      q: "E se a outra parte editar o PDF depois de eu assinar?",
      a: "Se você travar o arquivo antes de enviar, as alterações ficam detectáveis. Mesmo sem travar, o PDF assinado é a versão de registro; edições posteriores invalidam a assinatura.",
    },
    {
      q: "Devo sempre assinar primeiro?",
      a: "Se você é quem propõe, sim — isso sinaliza compromisso. Se você é quem contra-assina, assine o arquivo que a outra parte mandou, em vez de começar do zero.",
    },
  ],
  related: [
    { label: "Assinar PDF — assinaturas eletrônicas", path: "/sign-pdf" },
    { label: "Marca d'água em PDF — marque rascunhos com clareza", path: "/add-watermark-to-pdf" },
    { label: "Como compartilhar PDFs com clientes", path: "/guides/how-to-share-pdfs-with-clients" },
    { label: "Fluxos de PDF para pequenas empresas", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "Assinar PDF", path: "/sign-pdf" },
};

export default content;
