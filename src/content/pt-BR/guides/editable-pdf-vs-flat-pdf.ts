import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "editable-pdf-vs-flat-pdf",
  h1: "PDF editável ou PDF plano — qual é a diferença de verdade",
  description:
    "Alguns PDFs têm texto real, selecionável e com estrutura editável; outros são imagens de páginas sem texto por baixo. Como saber qual você tem e quando cada um é o certo.",
  updated: "2026-05-29",
  intro: [
    "Dois arquivos podem ser PDF e se comportar de formas completamente diferentes. Um deixa você selecionar texto, copiar trechos, buscar palavras e editar o conteúdo. O outro parece idêntico na tela, mas é basicamente uma foto de um documento — o texto faz parte da imagem, não é separado dela. O primeiro é um PDF editável; o segundo é um PDF plano (também chamado de digitalizado ou de imagem).",
    "Saber qual você tem importa porque as ferramentas para lidar com cada um são diferentes. PDFs editáveis respondem a editores de PDF, ferramentas de conversão e busca. PDFs planos precisam de OCR para virar pesquisáveis, e editá-los significa aplicar OCR e depois editar, ou substituir a imagem inteira. Usar ferramentas de PDF editável em um PDF plano só gera frustração.",
    "Este guia explica a diferença, mostra o teste que resolve em dois segundos e aponta quando cada tipo é a escolha certa. Às vezes o plano é intencional — às vezes é só um acidente de como o arquivo foi produzido.",
  ],
  steps: [
    {
      title: "O teste de dois segundos: tente selecionar o texto",
      body: "Abra o PDF, clique e arraste sobre algum texto. Se o texto for selecionado (destacado, copiável), é um PDF editável. Se o cursor só desenha um retângulo e nada acende, é plano — o “texto” é dado de imagem.",
    },
    {
      title: "PDF editável: texto selecionável, pesquisável e copiável",
      body: "Exportações diretas do Word, Pages, Docs ou de programas de design geram PDFs editáveis. O texto é dado estruturado dentro do arquivo; busca e copiar e colar funcionam; editores de PDF conseguem alterá-lo.",
    },
    {
      title: "PDF plano: imagem de página, sem texto por baixo",
      body: "Documentos digitalizados são os PDFs planos mais comuns. O texto existe só como pixels; não há dado de caractere por baixo. A busca não retorna nada; copiar e colar também não.",
    },
    {
      title: "O OCR torna o plano pesquisável (mas não perfeitamente editável)",
      body: "O OCR analisa a imagem da página e acrescenta uma camada de texto sob os pixels. A busca passa a funcionar; copiar e colar devolve um texto aproximado. Editar ainda exige substituir elementos de imagem à mão.",
    },
    {
      title: "Quando o plano é intencional: travar, fidelidade de imagem",
      body: "Alguns fluxos achatam o PDF de propósito — o arquivo não é fácil de editar, e assinaturas e carimbos não bagunçam o texto por baixo. PDF para imagens e depois Imagem para PDF gera uma cópia plana.",
    },
    {
      title: "Quando o editável é intencional: em todos os outros casos",
      body: "Para compartilhar, assinar, editar, arquivar, reaproveitar — o PDF editável é a escolha certa. Não achate a menos que você realmente precise.",
    },
  ],
  tips: [
    "Se você não consegue selecionar texto em um PDF que você mesmo gerou, as opções de exportação descartaram a camada de texto. Exporte de novo com a preservação de texto ativada.",
    "PDFs digitalizados em aparelhos antigos costumam ser planos. Aplique OCR na hora de digitalizar, ou depois com uma ferramenta, para o arquivo continuar útil a longo prazo.",
    "PDFs planos são maiores que os editáveis equivalentes — dado de imagem ocupa mais espaço que dado de caractere.",
    "Não achate um PDF só para “travá-lo” — restrições de edição de verdade funcionam melhor e preservam a busca.",
    "Alguns PDFs “editáveis” exportam cada caractere como uma forminha em vez de texto. A seleção parece certa, mas copiar e colar devolve besteira. Esse é o pior caso para edição.",
  ],
  mobileNote:
    "No celular, PDFs planos e editáveis parecem idênticos no leitor. O app PDF Editor mostra a diferença no modo de edição — dá para ver quais arquivos têm texto real e quais são só imagem, e encaminhar cada um para o OCR ou para a edição direta.",
  faq: [
    {
      q: "Como saber de bate-pronto qual tipo eu tenho?",
      a: "Tente selecionar o texto. Se a seleção funcionar e a cópia trouxer texto limpo, é editável. Se não, é plano.",
    },
    {
      q: "PDFs digitalizados são sempre planos?",
      a: "Saindo do scanner, sim. Muitos aplicativos de digitalização hoje aplicam OCR automaticamente e produzem um PDF plano pesquisável — o texto continua sendo imagem, mas ganha uma camada pesquisável por baixo.",
    },
    {
      q: "Dá para editar um PDF plano?",
      a: "Só manipulando a imagem (girar, cortar, sobrepor texto). Editar texto de verdade exige OCR antes, e mesmo assim o resultado é aproximado.",
    },
    {
      q: "Por que eu iria querer um PDF plano?",
      a: "Para impedir edições de texto, para travar assinaturas e carimbos no lugar ou para entregar uma reprodução fiel como imagem. São casos raros, mas reais.",
    },
    {
      q: "A origem do arquivo influencia no tipo?",
      a: "Influencia — exportações diretas de editores de texto geram PDFs editáveis; arquivos digitalizados e salvos geram PDFs planos. A origem determina o tipo.",
    },
  ],
  related: [
    { label: "Editor de PDF — edite texto e imagens no celular", path: "/pdf-editor" },
    { label: "Por que não consigo editar um PDF?", path: "/guides/why-cant-i-edit-a-pdf" },
    { label: "PDF para Word — recupere texto editável", path: "/pdf-to-word" },
    { label: "Quando usar um PDF digitalizado", path: "/guides/when-to-use-scanned-pdf" },
  ],
  parentHub: { label: "Editor de PDF", path: "/pdf-editor" },
};

export default content;
