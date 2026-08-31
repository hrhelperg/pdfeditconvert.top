import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "freelancers",
  h1: "PDF Editor para freelancers",
  description:
    "Fluxos de trabalho que freelancers adoram: propostas, contratos assinados e cobranças, tudo pelo celular.",
  intro: [
    "Freelancer toca quase toda a operação pelo celular. Não há escritório, não há TI, não há impressora compartilhada. O mesmo fluxo de PDF que numa equipe corporativa consome três apps e uma assinatura de plataforma de assinatura eletrônica precisa caber em um app só, rápido, entre uma hora faturável e outra.",
    "Cada minuto brigando com ferramenta é um minuto que não vira trabalho pago. Um editor de PDF que simplesmente funciona — sem upload, sem criar conta, sem mensalidade por algo usado duas vezes na semana — é um daqueles investimentos silenciosos que se paga ao longo dos meses.",
    "Estas são as operações específicas que tornam a vida de freelancer viável a partir do celular: rápidas, privadas e sem o peso de uma assinatura.",
  ],
  workflows: [
    {
      title: "Enviar uma proposta caprichada em PDF",
      body: "Exporte a sua proposta do Notion, do Pages ou do Google Docs em PDF. Assine, anexe ao e-mail e envie. Quem recebe vê exatamente o que você quis mostrar.",
    },
    {
      title: "Assinar contratos de cliente pelo celular",
      body: "Desenhe a sua assinatura uma vez e reutilize em todos os contratos seguintes. Acabou o “te respondo quando estiver no notebook”.",
    },
    {
      title: "Digitalizar recibos na hora do gasto",
      body: "Café de reunião, corrida de aplicativo, compra de equipamento — digitalize na hora. Os PDFs ficam pesquisáveis e prontos para o sistema contábil.",
    },
    {
      title: "Cobrar sempre em PDF",
      body: "Qualquer que seja o sistema de cobrança que você usa, exporte em PDF antes de enviar. Reduz o risco de alteração e passa uma imagem mais profissional que um DOCX.",
    },
    {
      title: "Reunir as entregas na hora do encerramento",
      body: "Combine o briefing final, o contrato assinado e o material de apoio em um único PDF de arquivo ao fechar o projeto.",
    },
  ],
  appPitch:
    "O PDF Editor é o cavalo de batalha silencioso do freelancer — ele não substitui as suas ferramentas de design ou de cobrança, só deixa a camada de documentos sem atrito. Grátis, nativo e rodando no aparelho. Disponível no iOS e no Android.",
  related: [
    { label: "Assinar PDF pelo celular", path: "/sign-pdf" },
    { label: "Fluxos de PDF para empresas", path: "/pdf-for-business" },
    { label: "Casos de uso — trabalho remoto", path: "/use-cases/remote-work" },
  ],
};

export default content;
