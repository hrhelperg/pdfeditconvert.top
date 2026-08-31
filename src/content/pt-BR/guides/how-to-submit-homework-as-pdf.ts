import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-submit-homework-as-pdf",
  h1: "Como entregar trabalhos em PDF (sem drama com o portal)",
  description:
    "Portais acadêmicos recusam trabalhos por motivos previsíveis — tamanho, número de páginas, formato. O caminho mais simples entre o trabalho pronto e o PDF aceito no envio.",
  updated: "2026-05-29",
  intro: [
    "Dois minutos antes do prazo é a pior hora para descobrir que o portal da faculdade recusa o seu trabalho. O erro costuma ser genérico — “arquivo inválido”, “falha no envio”, “grande demais” — e a causa real é uma de quatro coisas previsíveis: o arquivo passa do limite de tamanho, o formato não é bem o que o portal espera, o número de páginas está acima do teto, ou a sua captura de celular ainda nem é um PDF de verdade.",
    "A solução, em todos os casos, é curta, e pode ser feita do celular ou do computador em uma aba do navegador, sem enviar nada a terceiros. O truque é saber o que o portal realmente espera e produzir exatamente esse arquivo já de primeira.",
    "Este guia percorre o caminho do trabalho pronto até o PDF aceito — incluindo o jeito certo de lidar com digitalizações de material escrito à mão, listas de exercícios e entregas mistas do tipo “um documento do Word mais três páginas manuscritas”.",
  ],
  steps: [
    {
      title: "Confirme o que o portal exige de verdade",
      body: "A maioria dos portais informa o limite discretamente — normalmente de 5 a 25 MB, às vezes um número máximo de páginas e, ocasionalmente, PDF/A. Confira antes de enviar, e não depois da recusa.",
    },
    {
      title: "Converta todas as partes em PDF primeiro",
      body: "Documento do Word → ferramenta Word para PDF. Páginas manuscritas → Digitalizar para PDF pelo celular. Prints ou fotos do quadro → ferramenta Imagem para PDF. Tudo vira PDF antes de qualquer outra coisa.",
    },
    {
      title: "Junte em um único arquivo, na ordem de entrega",
      body: "A ferramenta Juntar PDF combina a parte digitada, a parte digitalizada e quaisquer anotações em um arquivo ordenado. Quem corrige prefere um arquivo a três.",
    },
    {
      title: "Confira a orientação e a ordem",
      body: "Use a ferramenta Organizar páginas do PDF se a junção deixou algo fora de sequência. Use a Girar PDF se uma digitalização entrou deitada. Quem corrige não deveria precisar girar a tela para ler o seu trabalho.",
    },
    {
      title: "Comprima para caber no limite",
      body: "A ferramenta Comprimir PDF reduz o arquivo no navegador. Digitalizações pesadas despencam; conteúdo digitado quase não muda. Mire abaixo do limite do portal, com uma folga.",
    },
    {
      title: "Nomeie o arquivo do jeito que a disciplina pede",
      body: "Muitas turmas especificam a convenção: Sobrenome_Nome_Trabalho3.pdf. Siga à risca. Nomes errados custam pontos ou geram confusão na hora de organizar.",
    },
  ],
  tips: [
    "Não entregue documentos do Word em um portal que aceita PDF. O Word renderiza diferente na máquina de quem corrige; o PDF trava a aparência.",
    "Digitalizações manuscritas devem ser em preto e branco ou tons de cinza, não em cores. Ficam menores, mais nítidas e mais legíveis.",
    "Comprima com força as digitalizações pesadas, não o conteúdo digitado. Páginas digitadas quase não encolhem; digitalizações encolhem muito.",
    "Faça um envio de teste com uma versão prévia para confirmar que o portal aceita o seu arquivo antes do prazo.",
    "Guarde o arquivo entregue também no seu aparelho. Nem sempre dá para recuperar a cópia do portal depois, e você pode precisar consultar o que entregou.",
  ],
  mobileNote:
    "Entregas feitas só pelo celular já são normais. O app PDF Editor cuida da corrente inteira no celular — digitalizar páginas manuscritas, juntar com a parte digitada, comprimir, nomear e deixar pronto para enviar — sem precisar passar por um computador.",
  faq: [
    {
      q: "Que tamanho a maioria dos portais acadêmicos aceita?",
      a: "Normalmente de 5 a 25 MB. Alguns portais de escola limitam a 2 MB. Portais universitários costumam ser mais tolerantes. Confira as especificações da disciplina.",
    },
    {
      q: "Posso entregar em Word em vez de PDF?",
      a: "Só se o portal aceitar explicitamente. A maioria pede PDF justamente para travar a formatação; entregar em Word pode custar pontos ou ser recusado automaticamente.",
    },
    {
      q: "Preciso juntar tudo em um arquivo só?",
      a: "Sim, a menos que o portal aceite vários envios. Quem corrige prefere um arquivo; muitos portais só aceitam um mesmo.",
    },
    {
      q: "Qual é o motivo mais comum de recusa?",
      a: "O tamanho do arquivo. Digitalizações empurram o arquivo para além dos limites rapidinho. Comprima antes de entregar e a recusa quase sempre desaparece.",
    },
    {
      q: "Dá para enviar pelo celular?",
      a: "Dá. A maioria dos portais acadêmicos atuais funciona em navegador de celular e aceita PDFs pela folha de compartilhamento. As ferramentas do celular cobrem toda a corrente.",
    },
  ],
  related: [
    { label: "PDF para estudantes — anotações e resumos", path: "/pdf-for-students" },
    { label: "Digitalizar para PDF — capture páginas manuscritas", path: "/scan-to-pdf" },
    { label: "Como comprimir PDF para portais acadêmicos", path: "/guides/how-to-compress-pdf-for-school-portals" },
    { label: "Como digitalizar anotações à mão em PDF", path: "/guides/how-to-scan-notes-to-pdf" },
  ],
  parentHub: { label: "PDF para estudantes", path: "/pdf-for-students" },
};

export default content;
