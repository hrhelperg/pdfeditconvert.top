import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-scanned-pdf",
  h1: "Quando usar um PDF digitalizado (e quando não usar)",
  description:
    "PDFs digitalizados resolvem um problema específico — passar papel para o digital. Eles também são maiores, menos pesquisáveis e mais difíceis de editar. Quando a troca compensa.",
  updated: "2026-05-29",
  intro: [
    "PDFs digitalizados resolvem um problema específico: transformar papel em um arquivo digital que dá para compartilhar, arquivar e ver em qualquer aparelho. Nisso eles são bons. Mas também são maiores que PDFs digitados equivalentes, não são pesquisáveis sem OCR, são mais difíceis de editar e costumam ter resolução menor que a origem. Digitalizar um documento que já existe em digital é quase sempre o movimento errado.",
    "A regra certa é curta. Digitalize papel que não tem origem digital. Não digitalize nada que você já tem como documento do Word, captura de tela ou exportação em PDF. A tentação de imprimir e digitalizar para “travar” um documento é compreensível, mas normalmente desnecessária — uma exportação direta em PDF faz a mesma coisa e melhor.",
    "Este guia percorre o quando digitalizar e o quando não. Boa parte é intuitiva depois de dita; o problema é que a tentação de digitalizar costuma ser mais forte que a necessidade real.",
  ],
  steps: [
    {
      title: "Use PDF digitalizado quando a única origem é papel",
      body: "Contratos antigos, anotações à mão, recibos de papel, documentos recebidos pelo correio, formulários assinados à mão. Qualquer coisa que existe fisicamente e precisa virar digital. Digitalizar em PDF pelo celular ou por um scanner de mesa produz um PDF limpo.",
    },
    {
      title: "Não digitalize documentos que você já tem em digital",
      body: "Se você tem o documento do Word, o PDF de origem ou a exportação, use isso. Imprimir e digitalizar perde fidelidade, aumenta o arquivo e tira a busca. Não há benefício.",
    },
    {
      title: "Não digitalize para “travar” um documento",
      body: "Reexportar da origem para PDF já trava o conteúdo. Digitalizar não acrescenta segurança; tira a busca e a qualidade do texto sem tornar o arquivo mais difícil de alterar.",
    },
    {
      title: "Use OCR se você digitalizar e precisar de busca",
      body: "O OCR transforma as imagens do texto digitalizado em texto pesquisável por baixo. Sem ele, PDFs digitalizados são fotos de palavras — legíveis, mas não pesquisáveis.",
    },
    {
      title: "Comprima as digitalizações antes de compartilhar",
      body: "PDFs digitalizados são os PDFs mais pesados que você encontra com frequência. A ferramenta Comprimir PDF no navegador reduz muito sem perda visível, principalmente em documentos só de texto.",
    },
    {
      title: "Digitalize na resolução certa",
      body: "200 a 300 DPI em documentos que serão lidos na tela. 300 DPI em qualquer coisa que possa ser impressa. 600 DPI é qualidade de foto e desperdiça espaço em texto.",
    },
  ],
  tips: [
    "A maioria dos momentos de “preciso digitalizar isso” acaba sendo “eu tenho isso em digital e esqueci”. Procure a origem primeiro.",
    "Uma exportação direta em PDF é mais limpa que uma impressão digitalizada em todo aspecto mensurável: mais nítida, menor, pesquisável, editável.",
    "Digitalizações por celular hoje se equiparam ao scanner de mesa em documentos comuns, com detecção de bordas e ajuste de contraste.",
    "Digitalizações com OCR são pesquisáveis, mas não perfeitas no texto. Trate o resultado do OCR como aproximado, não como autoridade.",
    "Não digitalize para um arquivo novo “parecer oficial”. O formato é o mesmo; ninguém liga se foi digitalizado ou exportado.",
  ],
  mobileNote:
    "O celular é a ferramenta certa para digitalizar no dia a dia — a câmera está com você, a detecção de bordas entrega resultado limpo e o PDF já sai utilizável. O fluxo de digitalização do app PDF Editor foi feito para isso, com captura de várias páginas e limpeza no aparelho.",
  faq: [
    {
      q: "Devo digitalizar um documento que tenho em arquivo do Word?",
      a: "Não. Exporte direto para PDF. Digitalizar perde resolução, aumenta o arquivo e tira a busca.",
    },
    {
      q: "Um PDF digitalizado é mais “oficial” que um exportado?",
      a: "Não. Os dois são PDFs. A oficialidade vem das assinaturas e do conteúdo, não da origem digitalizada.",
    },
    {
      q: "Quando digitalizar realmente ajuda?",
      a: "Quando a origem é papel. Contratos recebidos pelo correio, anotações à mão, formulários de papel preenchidos à mão. Digitalizar é o único jeito de passar isso para o digital.",
    },
    {
      q: "Devo aplicar OCR em toda digitalização?",
      a: "Se a sua ferramenta suporta, sim. Digitalizações pesquisáveis são muito mais úteis a longo prazo, e o OCR não muda a aparência visível.",
    },
    {
      q: "Que tamanho deve ter um PDF digitalizado?",
      a: "De algumas centenas de KB a alguns MB em documentos típicos. Digitalizações bem maiores que isso ganham com a compressão.",
    },
  ],
  related: [
    { label: "Digitalizar em PDF — pela câmera do celular", path: "/scan-to-pdf" },
    { label: "Como digitalizar documentos em PDF pelo celular", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Como melhorar a qualidade de um PDF digitalizado", path: "/guides/how-to-fix-scanned-pdf-quality" },
    { label: "PDF editável ou PDF plano", path: "/guides/editable-pdf-vs-flat-pdf" },
  ],
  parentHub: { label: "Digitalizar em PDF", path: "/scan-to-pdf" },
};

export default content;
