import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-forms",
  hero: {
    eyebrow: "Formulários PDF",
    h1: "Preencha, assine e organize formulários PDF em qualquer lugar.",
    highlight: "formulários PDF",
    lead: "Declarações, inscrições, fichas de cadastro, termos de consentimento — quase tudo chega em PDF. Entenda como os formulários PDF funcionam de verdade, como preencher os interativos e os planos, e como resolver os problemas mais comuns, sem imprimir uma única página.",
    primaryCta: { label: "Abrir o app", href: SITE.app.appStore },
  },
  problem: {
    heading: "Por que formulário PDF confunde tanta gente",
    paragraphs: [
      "Um formulário PDF parece uma coisa só, mas costuma ser duas. Alguns são interativos — quem criou o arquivo inseriu campos de verdade, em que você toca e digita. Outros são planos: um formulário digitalizado, ou impresso e salvo depois, sem campo nenhum, em que você precisa colocar o seu próprio texto por cima. Os dois se comportam de formas completamente diferentes, e boa parte da irritação com formulários vem de não saber qual deles você tem em mãos.",
      "Além disso, formulários dão problemas que PDFs comuns não dão. Os campos somem no leitor errado, as respostas digitadas se recusam a salvar, o arquivo abre como somente leitura, ou os valores preenchidos não aparecem na impressão. Nada disso significa que o formulário está quebrado — são problemas previsíveis, com soluções previsíveis, quando se entende o que acontece por baixo.",
      "Este centro de conteúdo reúne tudo em um lugar: os fundamentos de como os formulários funcionam, o passo a passo para preenchê-los no computador ou no celular, os fluxos de trabalho para coletar informação de clientes e um conjunto de soluções para quando o formulário não colabora. A aparência e o comportamento de um formulário variam de um leitor de PDF para outro, então os guias são honestos sobre o que funciona em todo lugar e o que depende da ferramenta em que você abre o arquivo.",
    ],
  },
  features: {
    heading: "O que dá para fazer com formulários PDF",
    items: [
      {
        icon: "FileText",
        title: "Preencher campos interativos",
        body: "Toque em um campo de verdade e digite. Passe de um campo a outro, marque caixas de seleção e escolha nas listas suspensas, quando quem criou o arquivo as incluiu.",
      },
      {
        icon: "TextCursorInput",
        title: "Completar formulários planos",
        body: "Sem campos? Coloque o seu próprio texto e as marcas de seleção em qualquer ponto da página — exatamente onde cada resposta deve ficar num formulário digitalizado ou impresso.",
      },
      {
        icon: "PenLine",
        title: "Assinar onde for preciso",
        body: "Coloque uma assinatura digitada ou de próprio punho na área de assinatura, seja ela um campo interativo ou apenas uma linha num formulário plano.",
      },
      {
        icon: "Save",
        title: "Salvar uma via preenchida",
        body: "Exporte a versão finalizada para devolver na hora e guarde o original em branco para a próxima vez.",
      },
      {
        icon: "Lock",
        title: "Achatar antes de enviar",
        body: "Fixe as suas respostas na página para que não sejam alteradas nem apagadas por acidente no leitor de quem recebe.",
      },
      {
        icon: "Smartphone",
        title: "Fazer tudo pelo celular",
        body: "Formulário chega por e-mail e volta pelo mesmo caminho — preencher e assinar pelo celular é uma das tarefas de PDF mais genuinamente móveis que existem.",
      },
    ],
  },
  steps: {
    heading: "Preenchendo um formulário PDF do início ao fim",
    items: [
      {
        title: "Abra o formulário e veja de que tipo ele é",
        body: "Abra o PDF e toque onde uma resposta deveria entrar. Se aparecer um cursor, o formulário tem campos interativos. Se não acontecer nada, ele é plano e você vai escrever por cima.",
      },
      {
        title: "Preencha os campos",
        body: "Em formulários interativos, toque e digite, passando de campo em campo. Em formulários planos, use a ferramenta de texto para posicionar as respostas exatamente sobre cada linha.",
      },
      {
        title: "Resolva caixas, datas e assinatura",
        body: "Marque as caixas ou coloque um sinal de seleção, preencha a data onde for exigida e use a ferramenta de assinatura na área correspondente.",
      },
      {
        title: "Revise todos os campos obrigatórios",
        body: "Passe o olho pelo formulário procurando espaços em branco. Um formulário devolvido por causa de uma data faltando custa mais tempo do que a conferência custaria.",
      },
      {
        title: "Salve, achate e envie",
        body: "Exporte uma via preenchida, achate o arquivo para travar as respostas e devolva por e-mail ou upload. Guarde o original em branco.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Formulários no seu celular",
    body: "Um formulário cai na sua caixa de entrada enquanto você está longe da mesa. Com o celular, você abre, preenche os campos (ou escreve por cima de uma digitalização plana), assina e devolve antes mesmo de encontrar uma cadeira — sem impressora, sem scanner e sem esperar chegar em casa. O app PDF Editor identifica os campos interativos quando existem, deixa você posicionar texto e marcas onde não existem, e mantém os dados pessoais do formulário no seu aparelho.",
  },
  faq: [
    {
      q: "Qual é a diferença entre formulário PDF interativo e plano?",
      a: "O formulário interativo tem campos criados por quem montou o arquivo — você toca em um deles e aparece um cursor para digitar. O formulário plano é basicamente uma imagem de formulário, sem campo nenhum, então você escreve por cima. Dá para preencher os dois; eles só pedem um tratamento um pouco diferente.",
    },
    {
      q: "Preciso imprimir um formulário PDF para preencher?",
      a: "Quase nunca. Tanto os interativos quanto os planos podem ser preenchidos digitalmente — digite nos campos ou posicione o texto na página, depois assine e exporte. Imprimir só compensa se quem recebe exigir especificamente uma assinatura de próprio punho no papel.",
    },
    {
      q: "Por que não consigo digitar em alguns formulários PDF?",
      a: "Normalmente é uma de três coisas: o formulário é plano (não tem campos para digitar), o seu leitor não dá suporte a campos de formulário, ou o arquivo é somente leitura ou protegido. Os guias de solução deste centro percorrem cada causa.",
    },
    {
      q: "O formulário que eu preencher vai aparecer igual para quem receber?",
      a: "Na maior parte das vezes, sim — mas nem sempre: a aparência de um formulário pode variar de um leitor de PDF para outro. Achatar o formulário preenchido antes de enviar trava as respostas na página, para que apareçam do mesmo jeito onde quer que o arquivo seja aberto.",
    },
    {
      q: "Preencher formulário online é seguro?",
      a: "Depende da ferramenta. O app PDF Editor preenche os formulários no seu aparelho, então as informações pessoais que você digita não são enviadas a lugar nenhum. Ferramentas de navegador que rodam localmente também mantêm o arquivo na sua máquina.",
    },
  ],
  related: [
    { label: "O que é um formulário PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Como preencher um formulário PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Como criar um PDF preenchível",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "Formulário PDF não funciona? Comece por aqui",
      path: "/guides/pdf-form-not-working",
    },
    { label: "Editor de PDF — preencha e assine no celular", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Preencha e assine formulários PDF pelo celular.",
    sub: "Grátis no iOS e no Android. Nada para enviar.",
  },
};

export default content;
