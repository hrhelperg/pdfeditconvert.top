import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdf-application-forms",
  h1: "Como gerenciar formulários de inscrição em PDF",
  description:
    "Recebe inscrições em PDF? Como recolher, revisar, comparar e arquivar sem se perder — um sistema simples para lidar com uma pilha de formulários preenchidos.",
  updated: "2026-06-01",
  intro: [
    "Enviar um formulário é a parte fácil; gerenciar a enxurrada de formulários preenchidos é onde a coisa embola. Se você recolhe inscrições em PDF — candidatos a vaga, fornecedores, participantes de um programa, associados — logo você tem uma pasta cheia de arquivos chamados “formulario (3).pdf” e nenhum jeito claro de revisar ou comparar. A solução é um sistema leve aplicado com consistência, não um banco de dados.",
    "Gerenciar bem formulários de inscrição é sobre três coisas: receber todo envio em um formato utilizável e consistente; conseguir revisar e comparar sem abrir vinte arquivos ao mesmo tempo; e arquivar de um jeito que permita achar qualquer um depois. Nada disso exige programa especial — só uma convenção de nomes, uma estrutura de pastas e alguns hábitos com PDF.",
    "Este guia apresenta esse sistema para o lado de quem recebe, a contraparte de mandar fichas ou formulários de inscrição. Ele parte de um fluxo constante ou de lotes periódicos, o volume realista que a maioria das operações pequenas de fato administra.",
  ],
  steps: [
    {
      title: "Exija um formato de devolução consistente",
      body: "Peça que as pessoas mandem PDFs achatados, não fotos nem arquivos editáveis. Um formato consistente faz todo envio se ler do mesmo jeito e evita que algo chegue pela metade ou alterável.",
    },
    {
      title: "Renomeie na chegada",
      body: "Renomeie cada arquivo no instante em que ele cai — nome da pessoa, data, talvez um protocolo. “sobrenome-nome-2026-06.pdf” ganha de “digitalizacao_final.pdf” sempre e deixa a pasta instantaneamente legível.",
    },
    {
      title: "Agrupe em lotes de revisão",
      body: "Coloque as inscrições de cada rodada em uma pasta. Para comparar, dá para juntar o lote em um único PDF e folhear, ou manter separado e passar os olhos pelos nomes dos arquivos.",
    },
    {
      title: "Acompanhe o andamento de forma simples",
      body: "Uma estrutura de subpastas — recebidas, selecionadas, recusadas — ou uma anotação curta no nome do arquivo deixa o andamento visível sem nenhuma ferramenta. Mova os arquivos conforme o status muda.",
    },
    {
      title: "Arquive as rodadas encerradas",
      body: "Quando uma rodada fecha, mova a pasta para um arquivo permanente e mantenha o modelo em branco separado. Você fica com um registro limpo e um modelo reutilizável para a próxima.",
    },
  ],
  tips: [
    "Renomear na chegada é o hábito de maior valor — evita o caos do “formulario (3).pdf” antes que ele comece.",
    "Juntar um lote de inscrições em um único PDF torna a revisão lado a lado muito mais rápida que malabarismo com vários arquivos.",
    "Peça envios achatados para as respostas não escorregarem e todo arquivo se ler do mesmo jeito.",
    "Uma estrutura simples de recebidas/selecionadas/recusadas acompanha o andamento sem nenhum programa extra.",
    "Mantenha os dados dos candidatos fora de ferramentas públicas e siga as regras de guarda e retenção que se aplicam a você — no Brasil, a LGPD exige guardar só o necessário e pelo tempo necessário.",
  ],
  mobileNote:
    "Os candidatos conseguem completar e devolver o seu formulário pelo celular com o app PDF Editor, mandando uma cópia achatada consistente para arquivar. Do seu lado, dá para revisar os envios e juntar um lote para comparação também pelo celular — prático quando as inscrições chegam com você longe da mesa.",
  faq: [
    {
      q: "Como mantenho os formulários de inscrição preenchidos organizados?",
      a: "Renomeie cada arquivo na chegada com nome e data, agrupe cada rodada em uma pasta, acompanhe o andamento com subpastas e arquive as rodadas encerradas. Convenção de nomes mais pastas já basta — sem banco de dados.",
    },
    {
      q: "Como comparo muitas inscrições rapidamente?",
      a: "Junte os PDFs de uma rodada em um único arquivo e folheie, ou mantenha separados e passe os olhos pelos nomes consistentes. Os dois ganham de abrir vinte arquivos um por um.",
    },
    {
      q: "Em que formato os candidatos devem mandar os formulários?",
      a: "Em PDF achatado. Eles se leem igual, não podem ser alterados nem apagados e arquivam com limpeza. Desencoraje fotos de impressões e arquivos editáveis, que chegam desencontrados.",
    },
    {
      q: "Preciso de um programa especial para gerenciar formulários de inscrição?",
      a: "Não. Uma convenção de nomes consistente, uma estrutura de pastas sensata e ferramentas básicas de PDF para juntar e revisar cobrem o volume realista da maioria das operações pequenas.",
    },
    {
      q: "Por quanto tempo devo guardar os formulários preenchidos?",
      a: "Depende das suas necessidades de registro e das regras que se aplicam a você — as exigências variam, e a LGPD pede que dados pessoais não sejam guardados além do necessário. Arquive as rodadas encerradas de forma recuperável e descarte os dados conforme a sua política.",
    },
  ],
  related: [
    { label: "Como enviar fichas de cadastro para clientes", path: "/guides/how-to-send-client-intake-forms" },
    { label: "Fluxos de coleta de documentos com PDF", path: "/guides/document-collection-workflows-with-pdf" },
    { label: "Formulários PDF para pequenas empresas", path: "/guides/pdf-forms-for-small-business" },
    { label: "Como juntar arquivos PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
