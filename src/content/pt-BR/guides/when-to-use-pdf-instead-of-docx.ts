import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-pdf-instead-of-docx",
  h1: "Quando usar PDF em vez de DOCX (checklist de decisão)",
  description:
    "Você tem um documento do Word — vale mandar como PDF? Um checklist rápido dos momentos em que o PDF é a escolha certa, e como converter.",
  updated: "2026-05-23",
  intro: [
    "Você terminou um documento no Word e agora há uma pequena decisão: mandar o .docx como está ou converter em PDF primeiro? É fácil escolher o que está à mão, mas a decisão errada tem consequências — um layout que quebra na tela de outra pessoa, um preço que o cliente ajusta em silêncio, um rascunho confundido com a versão final. Este guia trata de reconhecer os momentos em que o PDF é claramente o melhor envio.",
    "Em vez de uma comparação ampla de formatos, aqui vai um checklist de decisão focado: um conjunto de sinais que significam “converta em PDF antes de mandar”. Quando nenhum se aplica, o seu DOCX está bom como está. Quando um se aplica, a ferramenta gratuita Word para PDF converte no seu aparelho em segundos.",
    "Rode o checklist algumas vezes e ele vira instinto — você vai saber de bate-pronto se um documento deve sair como Word ou como PDF.",
  ],
  steps: [
    {
      title: "O documento está finalizado?",
      body: "Se está pronto e não é para ser editado — uma carta assinada, um relatório concluído, uma inscrição —, mande PDF. O DOCX convida a alterações que você não quer depois que o documento está pronto.",
    },
    {
      title: "O layout precisa ficar exatamente como você desenhou?",
      body: "Materiais, currículos e qualquer coisa em que espaçamento e fontes importam devem ir em PDF. O DOCX pode refluir em outra versão do Word ou no Google Docs, quebrando o seu layout cuidadoso.",
    },
    {
      title: "A pessoa poderia editar contra você?",
      body: "Orçamentos, cobranças, contratos — qualquer lugar em que um número ou uma condição possa ser alterada — pedem PDF. Ele impede edições casuais e mantém um registro fixo do que você enviou.",
    },
    {
      title: "Pode ser que ela não tenha o Word?",
      body: "O PDF abre de forma nativa em qualquer celular, tablet ou computador. Se você não tem certeza de que a pessoa tem um app de escritório, o PDF garante que ela consiga ler sem instalar nada.",
    },
    {
      title: "Ele vai para um arquivo permanente?",
      body: "Para guarda de longo prazo, o PDF renderiza igual daqui a dez anos; o DOCX pode variar entre versões do Word. Arquive em PDF e guarde o DOCX como o seu mestre editável.",
    },
    {
      title: "Se qualquer resposta for sim, converta",
      body: "Abra a ferramenta Word para PDF, adicione o seu .docx e baixe o PDF — no seu aparelho, sem enviar nada. Guarde o arquivo do Word original para as próximas edições.",
    },
  ],
  tips: [
    "Fique com o DOCX quando o documento ainda está em construção, precisa de comentários ou controle de alterações, ou quando a outra pessoa deve mesmo editar. O PDF é para documentos prontos e fixos.",
    "Guarde sempre o .docx editável. O PDF é a via de envio; o arquivo do Word é o seu mestre para a próxima revisão.",
    "Aceite ou remova as alterações controladas antes de converter, ou elas podem aparecer no PDF para todo mundo ver.",
    "Converter em PDF trava o layout, mas não criptografa o arquivo. Se ele precisa de proteção real, adicione uma senha como etapa separada.",
    "Se alguém pedir um “PDF editável”, normalmente quer dizer DOCX — confirme antes de supor e mande o formato certo.",
  ],
  mobileNote:
    "A decisão de mandar em PDF costuma acontecer longe da mesa, quando um documento pronto precisa sair agora. O app PDF Editor converte e envia pelo celular, então você trava um documento e o manda por e-mail sem esperar chegar a um computador.",
  faq: [
    {
      q: "Quando devo mandar um PDF em vez de um arquivo do Word?",
      a: "Quando o documento está finalizado, o layout precisa ficar fixo, a outra pessoa poderia editá-lo contra você, ela talvez não tenha o Word, ou o arquivo vai para um arquivo permanente. Qualquer um desses casos pede a conversão em PDF.",
    },
    {
      q: "Quando é melhor ficar com o DOCX?",
      a: "Quando o documento ainda está sendo escrito, precisa de comentários ou controle de alterações, ou quando a outra pessoa deve editá-lo. O DOCX é o formato de trabalho; o PDF é o formato pronto.",
    },
    {
      q: "Converter de Word para PDF muda o meu layout?",
      a: "Em documentos com fontes comuns, não — é justamente para isso que o PDF serve. Preste atenção só a fontes incomuns, que podem ser substituídas. Abra o PDF e confira antes de enviar.",
    },
    {
      q: "Mandar em PDF protege o documento?",
      a: "Ele evita a edição casual e fixa o layout, mas não é criptografia. Para proteção real contra abertura ou cópia, adicione uma senha à parte.",
    },
    {
      q: "Onde vejo uma comparação mais completa entre PDF e DOCX?",
      a: "Veja o guia e a página de comparação PDF ou DOCX para um panorama mais amplo de como os dois formatos diferem em edição, fidelidade e assinatura.",
    },
  ],
  related: [
    { label: "Word para PDF — converta no navegador", path: "/word-to-pdf" },
    { label: "PDF ou DOCX — qual formato usar", path: "/guides/pdf-vs-docx" },
    { label: "Como converter Word em PDF", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF ou DOCX — comparação de recursos", path: "/compare/pdf-vs-docx" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
