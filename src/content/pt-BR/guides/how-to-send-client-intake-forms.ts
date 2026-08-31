import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-client-intake-forms",
  h1: "Como enviar fichas de cadastro para clientes",
  description:
    "Consiga os dados de um cliente novo em uma passada limpa. Como enviar uma ficha de cadastro em PDF fácil de preencher, que volta completa e preserva a privacidade das informações.",
  updated: "2026-06-01",
  intro: [
    "A ficha de cadastro é a primeira interação real que muitos clientes têm com o seu jeito de trabalhar, então vale acertar. Bem-feita, uma única ficha em PDF coleta tudo o que você precisa para começar — contato, detalhes do projeto, preferências — em uma passada só, sem aquele vaivém de “você também poderia me mandar…”. Malfeita, ela circula pela metade e dá o tom errado.",
    "A mecânica é simples, mas os detalhes importam: a ficha precisa ser fácil de preencher no celular (onde a maioria dos clientes vai abrir), precisa voltar completa e em um formato utilizável e, como carrega dados pessoais, não deveria passar por um site público qualquer no caminho.",
    "Este guia percorre como preparar a ficha, como enviá-la para os clientes conseguirem completar e como recolher as respostas com limpeza — na versão prática, não na teórica.",
  ],
  steps: [
    {
      title: "Monte uma ficha que peça só o necessário",
      body: "Cada campo a mais reduz a taxa de conclusão. Peça o que você realmente precisa para começar, agrupe de forma lógica e deixe espaço de verdade para as respostas. Guarde um modelo em branco que você reaproveita a cada cliente novo.",
    },
    {
      title: "Envie a ficha em branco, não achatada",
      body: "Anexe o PDF preenchível direto ou compartilhe por um drive que o cliente usa. Não achate o modelo em branco — isso tira os campos. Acrescente uma linha explicando como preencher e devolver.",
    },
    {
      title: "Deixe o preenchimento no celular sem esforço",
      body: "Diga que dá para completar em um app de PDF — tocando nos campos ou acrescentando texto em uma ficha plana —, assinar se precisar e exportar. A maioria vai fazer isso no celular, então facilite esse caminho.",
    },
    {
      title: "Peça a devolução achatada",
      body: "Peça um PDF salvo ou achatado, e não uma foto. Fichas achatadas se leem igual em todo lugar, não podem ser apagadas e entram direto no arquivo do cliente.",
    },
    {
      title: "Arquive e confirme o recebimento",
      body: "Renomeie a ficha devolvida por cliente e data, guarde junto aos registros daquele cliente e mande uma confirmação rápida. Cobre uma vez se a ficha voltar com campos obrigatórios em branco.",
    },
  ],
  tips: [
    "Fichas de cadastro mais curtas são completadas; corte todo campo que não é realmente necessário no começo.",
    "Como fichas de cadastro carregam dados pessoais, prefira anexos diretos ou um drive privado a serviços públicos de preenchimento online. No Brasil, a LGPD também recomenda coletar só o mínimo necessário e guardar com cuidado.",
    "Um modelo em branco reutilizável faz cada cliente novo receber uma ficha limpa e idêntica, sem dados sobrando de outra pessoa.",
    "Recomende um app de PDF específico na sua mensagem para os clientes no celular não ficarem presos em uma pré-visualização de e-mail que não digita.",
    "Mantenha um padrão consistente de nomes de arquivo para a ficha de um cliente ser sempre fácil de achar depois.",
  ],
  mobileNote:
    "Os clientes conseguem completar a sua ficha no celular com o app PDF Editor — preenchendo campos ou acrescentando texto em uma ficha plana, assinando e exportando uma cópia achatada para devolver na hora. Ele funciona no aparelho, então os dados pessoais que eles digitam não são enviados a lugar nenhum no caminho até você.",
  faq: [
    {
      q: "Como envio uma ficha de cadastro em PDF para um cliente?",
      a: "Anexe o PDF preenchível direto ao e-mail ou compartilhe por um drive que o cliente use, sem achatar o modelo em branco. Inclua uma nota curta sobre preencher em um app de PDF e devolver a cópia completa.",
    },
    {
      q: "Por que a minha ficha volta em branco ou pela metade?",
      a: "Os clientes costumam abrir na pré-visualização do e-mail, que ignora os campos, ou a ficha pede coisas demais. Recomende um app de PDF, corte campos desnecessários e peça a devolução achatada.",
    },
    {
      q: "Como mantenho os dados do cliente privados ao coletar fichas?",
      a: "Envie e receba a ficha como anexo direto ou por um drive privado, em vez de um site público de preenchimento. O app PDF Editor preenche no aparelho, então os dados do cliente não são enviados.",
    },
    {
      q: "Fichas de cadastro devem ser interativas ou planas?",
      a: "A interativa fica mais organizada se você conseguir montá-la, mas um modelo plano limpo funciona em qualquer lugar. Qualquer uma serve, desde que os campos sejam bem rotulados e tenham espaço suficiente.",
    },
    {
      q: "Como mantenho as fichas devolvidas organizadas?",
      a: "Renomeie cada uma por cliente e data, guarde junto aos registros daquele cliente e mantenha o modelo em branco separado, para todo cliente novo receber uma cópia limpa.",
    },
  ],
  related: [
    { label: "Formulários PDF para pequenas empresas", path: "/guides/pdf-forms-for-small-business" },
    { label: "Fluxos de coleta de documentos com PDF", path: "/guides/document-collection-workflows-with-pdf" },
    { label: "Como compartilhar um formulário PDF", path: "/guides/how-to-share-a-pdf-form" },
    { label: "Como compartilhar PDFs com clientes", path: "/guides/how-to-share-pdfs-with-clients" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
