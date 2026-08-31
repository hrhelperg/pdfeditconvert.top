import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-fillable-pdf",
  h1: "PDF editável ou PDF preenchível",
  description:
    "Editar um PDF muda o conteúdo dele; preencher um PDF é colocar respostas nos campos do formulário. Por que são tarefas diferentes e qual delas você precisa de verdade.",
  updated: "2026-06-01",
  intro: [
    "“Editável” e “preenchível” soam como a mesma coisa, e as pessoas usam um pelo outro — mas descrevem tarefas diferentes. Editar um PDF é mudar o próprio documento: reescrever uma frase, trocar uma logo, mover um parágrafo. Preencher um PDF é deixar o documento como o autor quis e apenas colocar respostas nos espaços reservados para elas. Um formulário é feito para ser preenchido, não editado.",
    "A distinção importa porque as ferramentas e as permissões são diferentes. Um PDF editável deixa você alterar o conteúdo por baixo. Um PDF preenchível te limita, de propósito, aos campos do formulário, para que as perguntas e o layout continuem fixos enquanto você fornece as respostas. Muitos formulários não são editáveis por escolha — o autor quer que a cópia de todo mundo faça as mesmas perguntas no mesmo lugar.",
    "Existe uma terceira palavra que embaralha ainda mais — “plano” — que trata de o texto do PDF ser real ou apenas imagem. Este guia mantém o foco em editável versus preenchível: o que cada um significa, quando você precisa de qual e como descobrir o que um arquivo permite.",
  ],
  steps: [
    {
      title: "Definindo editar: mudar o documento",
      body: "Editar altera o conteúdo que o autor criou — texto, imagens, ordem das páginas. Você edita um PDF para corrigir um erro de digitação em um contrato ou atualizar um preço em um folheto. Isso muda o que o documento diz.",
    },
    {
      title: "Definindo preencher: responder dentro dos campos",
      body: "Preencher deixa o documento intacto e só acrescenta as suas respostas nos campos ou espaços designados. Você preenche um formulário de inscrição; não reescreve as perguntas dele.",
    },
    {
      title: "Confira se o arquivo é preenchível",
      body: "Toque onde deveria entrar uma resposta. Cursor ou caixa acesa significa que o formulário é preenchível por campos interativos. Se não houver campos, você ainda pode acrescentar texto por cima — um preenchimento manual em vez de embutido.",
    },
    {
      title: "Confira se o arquivo é editável",
      body: "Tente selecionar uma linha do texto do próprio documento. Se selecionar e um editor de PDF deixar você mudá-la, o conteúdo é editável. Páginas digitalizadas e arquivos bloqueados costumam resistir.",
    },
    {
      title: "Case a ferramenta com a tarefa",
      body: "Precisa mudar o que o documento diz? Use um editor de PDF. Precisa completar um formulário que te mandaram? Use o preenchimento — toque nos campos ou posicione texto onde entram as respostas e exporte.",
    },
  ],
  tips: [
    "Um arquivo pode ser preenchível sem ser editável: você responde os campos, mas não muda as perguntas. Na maioria dos formulários isso é intencional.",
    "Se um formulário faz uma pergunta que você não consegue responder no espaço dado, não tente editar o formulário — acrescente uma observação onde for permitido ou pergunte a quem enviou.",
    "Editar as respostas de um formulário depois é possível se você guardar uma cópia editável, mas versões achatadas ou digitalizadas são bem mais difíceis de mudar.",
    "Quando você é o autor, decida logo no começo: quer que as pessoas preencham (trave o conteúdo, acrescente campos) ou colaborem (mantenha editável)?",
    "Alguns PDFs usam proteções que bloqueiam a edição e ainda assim liberam o preenchimento — é uma combinação deliberada, não um defeito.",
  ],
  mobileNote:
    "O app PDF Editor dá conta das duas tarefas no celular: edite o texto e as imagens do documento quando precisar mudar o conteúdo, ou toque nos campos do formulário — e posicione texto em formulários planos — quando só precisar preencher. Ele reconhece os campos interativos sozinho e mantém tudo no aparelho.",
  faq: [
    {
      q: "PDF preenchível é a mesma coisa que PDF editável?",
      a: "Não. Preenchível significa que você pode colocar respostas nos campos sem mudar o documento. Editável significa que você pode alterar o conteúdo em si. Um formulário costuma ser preenchível e, de propósito, não editável.",
    },
    {
      q: "Um PDF pode ser editável e preenchível ao mesmo tempo?",
      a: "Pode, se as proteções permitirem os dois. Mas muitos formulários são bloqueados para que as perguntas e o layout não mudem, enquanto os campos continuam aceitando respostas.",
    },
    {
      q: "Não consigo editar as perguntas de um formulário — ele está com defeito?",
      a: "Quase certamente não. Formulários costumam ser protegidos para que toda cópia faça as mesmas perguntas. A ideia é você preencher os campos, não reescrever o formulário.",
    },
    {
      q: "Do que preciso para completar uma inscrição que me enviaram?",
      a: "De preenchimento, não de edição. Coloque as respostas nos campos, ou posicione texto na página se ele for plano, assine e exporte. Não deveria ser preciso mudar o formulário.",
    },
    {
      q: "Qual é a diferença em relação a editável versus plano?",
      a: "Editável versus plano é sobre o texto do PDF ser real ou uma imagem. Editável versus preenchível é sobre você estar mudando o documento ou apenas respondendo a ele. São perguntas relacionadas, mas separadas.",
    },
  ],
  related: [
    { label: "O que é um formulário PDF?", path: "/guides/what-is-a-pdf-form" },
    { label: "PDF editável ou PDF plano", path: "/guides/editable-pdf-vs-flat-pdf" },
    { label: "Dá para editar um formulário PDF?", path: "/guides/can-you-edit-a-pdf-form" },
    { label: "Editor de PDF — edite e preencha", path: "/pdf-editor" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
