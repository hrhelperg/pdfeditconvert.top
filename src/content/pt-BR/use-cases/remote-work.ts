import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "remote-work",
  h1: "PDF Editor para trabalho remoto",
  description:
    "Trabalhe com documentos de onde estiver: digitalize, assine e compartilhe PDFs de qualquer dispositivo, em qualquer lugar.",
  intro: [
    "O trabalho remoto desliga o escritório do emprego. O lado ruim é que as operações com documentos que antes aconteciam na impressora, no scanner ou no servidor compartilhado agora precisam acontecer no aparelho que estiver à mão — muitas vezes dentro de um ônibus, num café ou no cliente. Um editor de PDF nativo no celular fecha essa lacuna.",
    "O critério para qualquer ferramenta de trabalho remoto é: funcionar com internet instável, funcionar offline quando preciso, não exigir o envio de documentos sensíveis a terceiros e rodar no aparelho que você tiver na mão. O PDF Editor atende aos quatro porque todas as operações pesadas rodam no próprio dispositivo.",
    "Estes são os fluxos específicos que transformam um celular em um escritório de documentos portátil — sem depender de uma mesa, de um país ou de uma conexão específica.",
  ],
  workflows: [
    {
      title: "Assinar documentos em viagem",
      body: "Assine um contrato dentro do avião ou do ônibus. A assinatura fica salva no aparelho e o arquivo é criptografado ao salvar.",
    },
    {
      title: "Digitalizar quando não há scanner",
      body: "Quarto de hotel, centro de eventos, escritório do cliente — a câmera do celular com correção automática dá conta de qualquer documento de trabalho.",
    },
    {
      title: "Juntar arquivos para um repasse remoto",
      body: "Una os documentos de que o seu colega precisa em um único PDF, compartilhe pelo Drive ou pelo Slack e pronto.",
    },
    {
      title: "Comprimir antes de enviar em redes lentas",
      body: "O wi-fi do hotel torna anexos gigantes um sofrimento. Comprima primeiro, envie depois e economize uma hora.",
    },
    {
      title: "Fazer ajustes pequenos sem ligar o notebook",
      body: "Erro de digitação em um rascunho, data errada em um orçamento — resolva no celular em 60 segundos e siga em frente.",
    },
  ],
  appPitch:
    "O PDF Editor combina naturalmente com o resto de um kit de trabalho remoto — Drive, iCloud, Notion, Slack, Linear, GitHub. Ele é a camada que cuida das operações com documentos sem exigir uma mesa nem uma conexão estável.",
  related: [
    { label: "PDF para empresas", path: "/pdf-for-business" },
    { label: "Casos de uso — freelancers", path: "/use-cases/freelancers" },
    { label: "Digitalizar para PDF", path: "/scan-to-pdf" },
  ],
};

export default content;
