import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-forms-for-consultants",
  h1: "Formulários PDF para consultores",
  description:
    "Questionários de diagnóstico, fichas de escopo e formulários de avaliação — o lado dos formulários na consultoria, resolvido em PDFs preenchíveis que o cliente completa em qualquer aparelho.",
  updated: "2026-06-01",
  intro: [
    "Consultoria funciona à base de perguntas. Antes de um trabalho você precisa entender a situação do cliente; durante ele você define o que está dentro e fora; depois você quer uma avaliação honesta. Cada uma dessas coisas é um formulário — um questionário de diagnóstico, uma ficha de escopo, um pedido de avaliação — e tratá-las como PDFs preenchíveis mantém o processo afiado sem arrastar o cliente para mais um login.",
    "Esses formulários são diferentes das entregas de um consultor. Propostas, relatórios e cobranças são documentos que você produz; questionários e fichas de escopo são formulários que os clientes completam. Este guia é sobre o lado dos formulários especificamente — projetá-los para o cliente responder por completo e recolher as respostas de um jeito que elas realmente alimentem o trabalho.",
    "O retorno é um começo mais suave e limites mais claros. Um bom questionário de diagnóstico revela o problema real antes da primeira reunião; uma ficha de escopo clara evita o avanço lento de trabalho não combinado. Os dois são fáceis de conduzir em PDF.",
  ],
  steps: [
    {
      title: "Projete um questionário de diagnóstico que justifique o tamanho",
      body: "Faça as perguntas que mudam a sua abordagem, não tudo que se possa imaginar. Agrupe, deixe espaço para respostas de verdade e guarde um modelo em branco reutilizável por serviço.",
    },
    {
      title: "Monte uma ficha de escopo que estabeleça limites",
      body: "Transforme o escopo em formulário: entregas, o que fica explicitamente de fora, prazos, premissas. Campos que o cliente confirma tornam o limite mútuo, em vez de algo que você alega depois.",
    },
    {
      title: "Mande formulários que se preencham em qualquer aparelho",
      body: "Anexe o PDF preenchível direto e avise que dá para preencher em um app de PDF — tocar nos campos ou acrescentar texto em um formulário plano e devolver uma cópia completa. A maioria vai fazer isso no celular.",
    },
    {
      title: "Recolha um formulário de avaliação no fim",
      body: "Um formulário de avaliação curto e bem espaçado tem mais chance de ser preenchido que um longo. Mande no encerramento do trabalho, enquanto a experiência está fresca, e peça a devolução achatada.",
    },
    {
      title: "Arquive as respostas por trabalho",
      body: "Renomeie os formulários devolvidos por cliente e data e guarde junto aos registros daquele trabalho. Mantenha os modelos em branco separados para cada cliente novo receber um formulário limpo.",
    },
  ],
  tips: [
    "Um questionário de diagnóstico afiado revela o problema real antes da primeira reunião e economiza o tempo de uma conversa inteira.",
    "Faça da ficha de escopo algo que o cliente confirma em campos, para “fora do escopo” ser mútuo e não uma discussão futura.",
    "Mantenha os formulários de avaliação curtos; a taxa de resposta importa mais que o número de perguntas.",
    "As respostas dos clientes são sensíveis — mande e recolha por anexos diretos ou drive privado, não por sites públicos de preenchimento.",
    "Este é o lado dos formulários na consultoria; combine com o seu fluxo de propostas, relatórios e cobranças para o quadro completo.",
  ],
  mobileNote:
    "Os clientes preenchem os seus questionários e fichas de escopo no celular com o app PDF Editor — tocando nos campos ou acrescentando texto em formulários planos e exportando uma cópia achatada. É tudo no aparelho, então o que eles contam sobre o negócio deles não passa por um servidor de terceiros.",
  faq: [
    {
      q: "Quais formulários PDF os consultores mais usam?",
      a: "Questionários de diagnóstico antes do trabalho, fichas de escopo para estabelecer limites e formulários de avaliação no fim. Em PDF preenchível, eles mantêm o processo claro sem acrescentar mais uma plataforma para o cliente acessar.",
    },
    {
      q: "Como faço os clientes completarem um questionário de diagnóstico?",
      a: "Mantenha o foco nas perguntas que mudam a sua abordagem, deixe espaço de verdade para as respostas e mande em PDF preenchível com uma nota dizendo que dá para completar em um app de PDF em qualquer aparelho.",
    },
    {
      q: "Qual é a diferença em relação aos fluxos de PDF em consultoria?",
      a: "Aqui estão os formulários que os clientes preenchem — questionários, escopo, avaliação. O guia de fluxo cobre as suas próprias entregas: propostas, relatórios e cobranças.",
    },
    {
      q: "Como mantenho privadas as respostas dos questionários?",
      a: "Mande e receba por anexos diretos ou drive privado, em vez de sites públicos de preenchimento. O app PDF Editor preenche no aparelho, então as respostas do cliente não são enviadas a lugar nenhum.",
    },
    {
      q: "Uma ficha de escopo deve ser formulário ou documento?",
      a: "Faça dela um formulário que o cliente confirma — campos para entregas, exclusões, prazos e premissas. Um formulário confirmado torna o escopo mútuo de um jeito que um documento de mão única não torna.",
    },
  ],
  related: [
    { label: "Fluxos de PDF para consultores", path: "/guides/pdf-workflows-for-consultants" },
    { label: "Como enviar fichas de cadastro para clientes", path: "/guides/how-to-send-client-intake-forms" },
    { label: "Formulários PDF para agências", path: "/guides/pdf-forms-for-agencies" },
    { label: "Fluxos de coleta de documentos com PDF", path: "/guides/document-collection-workflows-with-pdf" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
