import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "can-you-edit-a-pdf-form",
  h1: "Dá para editar um formulário PDF?",
  description:
    "Editar as perguntas de um formulário PDF é diferente de preenchê-lo. O que dá para mudar, o que está travado e como alterar um formulário quando você só tem o PDF pronto.",
  updated: "2026-06-01",
  intro: [
    "“Dá para editar um formulário PDF?” costuma esconder duas perguntas diferentes. Uma é: dá para preencher — digitar as minhas respostas nos campos? Quase sempre dá. A outra é: dá para mudar o formulário em si — reescrever uma pergunta, acrescentar um campo, corrigir um rótulo? Aí depende inteiramente de como o formulário foi feito e de ele estar ou não bloqueado.",
    "Preencher é o caso do dia a dia e raramente dá problema. Editar a estrutura do formulário é o difícil, e a resposta depende de três coisas: se o arquivo tem texto editável de verdade ou é uma digitalização plana, se o autor aplicou uma proteção que impede alterações e se você tem uma ferramenta capaz de editar campos de formulário, não apenas preenchê-los.",
    "Este guia separa as duas perguntas com clareza e depois percorre o que é realisticamente possível quando você só tem o PDF pronto — inclusive os limites honestos, já que alguns formulários são construídos de propósito para resistir a edições.",
  ],
  steps: [
    {
      title: "Decida de que edição você está falando",
      body: "Preencher respostas é uma coisa; mudar o texto, o layout ou os campos do formulário é outra. A primeira é fácil e esperada; a segunda é o que as pessoas normalmente querem dizer com “editar o formulário”, e ela é mais limitada.",
    },
    {
      title: "Veja se há texto editável ou uma digitalização plana",
      body: "Tente selecionar o texto do próprio formulário. Se selecionar, o conteúdo é real e possivelmente editável. Se nada selecionar, é uma digitalização plana — uma imagem de formulário — e editar exige OCR antes ou refazer o layout.",
    },
    {
      title: "Verifique se há restrições de segurança",
      body: "Alguns formulários trazem permissões que liberam o preenchimento mas bloqueiam a edição, ou que proíbem qualquer alteração sem senha. Se um editor de PDF deixa as ferramentas de edição apagadas, o arquivo provavelmente está restrito de propósito.",
    },
    {
      title: "Use um editor que lide com campos de verdade",
      body: "Ferramentas de preenchimento só deixam responder os campos. Para acrescentar, mover, renomear ou apagar campos, ou mudar as perguntas, você precisa de um editor que exponha a estrutura do formulário — e nem todo aplicativo faz isso.",
    },
    {
      title: "Saiba a hora de pedir o arquivo de origem",
      body: "Se você precisa de mudanças grandes, o caminho mais limpo costuma ser pedir o documento editável original (um arquivo do Word ou a origem do formulário) a quem o criou, em vez de brigar com um PDF bloqueado.",
    },
  ],
  tips: [
    "Se você só precisa completar o formulário, não precisa editar nada — basta preencher os campos ou acrescentar texto a uma cópia plana.",
    "Editar um formulário digitalizado é trabalhar com imagem: ou você aplica OCR para recuperar o texto, ou coloca texto e caixas novos por cima dos antigos.",
    "Renomear ou reorganizar campos é edição de formulário de verdade e exige uma ferramenta feita para isso — leitores básicos não dão conta.",
    "Respeite formulários bloqueados: uma proteção que impede a edição costuma ser uma escolha deliberada do autor, não uma falha para contornar.",
    "Guarde uma cópia não achatada se pretende revisar as respostas depois; uma vez achatado, o preenchimento vira conteúdo fixo da página.",
  ],
  mobileNote:
    "No celular, o app PDF Editor preenche qualquer formulário e edita o conteúdo do documento quando o arquivo permite. Em formulários planos, você acrescenta texto direto na página em vez de editar campos. O preenchimento e as edições leves acontecem no aparelho, com o original em branco preservado para reuso.",
  faq: [
    {
      q: "Dá para mudar as perguntas de um formulário PDF?",
      a: "Às vezes. Se o formulário tem texto editável de verdade e não está bloqueado, um editor que lide com formulários consegue mudar o texto e os campos. Se for uma digitalização plana ou tiver restrição de segurança, mudar as perguntas fica bem mais difícil ou impossível.",
    },
    {
      q: "Por que o meu editor não deixa alterar o formulário?",
      a: "Ou o arquivo é uma imagem plana sem texto editável, ou ele carrega permissões que liberam o preenchimento mas não a edição. Os dois casos são comuns e normalmente intencionais.",
    },
    {
      q: "Dá para editar as minhas respostas depois de preencher?",
      a: "Dá, desde que você tenha salvado como formulário interativo e não tenha achatado. Depois de achatadas, as respostas se fundem à página e ficam fixas.",
    },
    {
      q: "Como edito um formulário digitalizado que não tem campos?",
      a: "Trate como imagem. Rode OCR para recuperar o texto editável ou simplesmente posicione o seu próprio texto e os vistos por cima — para preencher, a segunda opção normalmente já basta.",
    },
    {
      q: "É melhor editar o PDF ou conseguir o arquivo original?",
      a: "Para mudanças grandes, peça o documento de origem ao autor se for possível. Editar um PDF pronto, e possivelmente bloqueado, é sempre mais limitado do que trabalhar a partir do original.",
    },
  ],
  related: [
    { label: "O que é um formulário PDF?", path: "/guides/what-is-a-pdf-form" },
    { label: "PDF editável ou PDF preenchível", path: "/guides/editable-pdf-vs-fillable-pdf" },
    { label: "Como criar um PDF preenchível", path: "/guides/how-to-create-a-fillable-pdf" },
    { label: "Por que não consigo editar um PDF?", path: "/guides/why-cant-i-edit-a-pdf" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
