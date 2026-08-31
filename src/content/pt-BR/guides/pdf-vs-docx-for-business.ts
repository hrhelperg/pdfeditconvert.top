import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx-for-business",
  h1: "PDF ou DOCX para empresas (contratos, relatórios, distribuição)",
  description:
    "Por que documentos corporativos quase sempre circulam em PDF, mas vivem em DOCX. A ferramenta certa em cada etapa da vida de um contrato, relatório ou cobrança.",
  updated: "2026-05-29",
  intro: [
    "Documentos de empresa têm um ciclo de vida bem previsível. Eles são escritos no Word (DOCX), revisados e editados no Word, finalizados no Word e então exportados em PDF para entrega, assinatura, arquivamento e distribuição. O mesmo arquivo existe em dois formatos em etapas diferentes, e usar o formato errado na etapa errada é de onde vem quase todo o atrito.",
    "O DOCX é o formato de trabalho porque é editável, bom para colaboração e registra bem as alterações. O PDF é o formato de entrega porque trava o layout, aparece igual em qualquer aparelho, aceita assinatura eletrônica e é o padrão universal para documentos corporativos arquivados.",
    "Este guia percorre o ciclo etapa por etapa — quando usar cada formato, como transitar entre eles com limpeza e os erros comuns que as empresas cometem ao mandar o formato errado na hora errada.",
  ],
  steps: [
    {
      title: "Escreva em DOCX, onde a edição acontece",
      body: "Microsoft Word, Google Docs (com exportação em DOCX), Pages → DOCX. O formato aceita edição de verdade, comentários, controle de alterações e trabalho de várias pessoas. O PDF não aceita, por mais que algumas ferramentas finjam.",
    },
    {
      title: "Negocie contratos em DOCX, com controle de alterações",
      body: "As marcações de contrato pertencem ao DOCX. A outra parte vê o que você mudou, comenta cada ponto e devolve uma contraproposta. Ferramentas de marcação em PDF existem, mas são mais lentas e menos colaborativas.",
    },
    {
      title: "Exporte em PDF quando a versão for final",
      body: "A ferramenta Word para PDF gera uma exportação limpa, com fontes incorporadas e layout estável. Esta é a versão que vai para o cliente, é assinada e vive no arquivo permanente.",
    },
    {
      title: "Assine e entregue em PDF",
      body: "Assinaturas se ligam ao PDF, não ao DOCX. A ferramenta Assinar PDF ou o app PDF Editor captura a assinatura no PDF travado; o DOCX de origem continua como registro editável.",
    },
    {
      title: "Arquive o PDF e guarde o DOCX",
      body: "O PDF é o registro canônico do que foi entregue ou assinado. O DOCX fica guardado caso você precise gerar um documento relacionado depois. Os dois têm lugar; não confunda um com o outro.",
    },
    {
      title: "Converta o PDF de volta em DOCX só quando não houver saída",
      body: "A ferramenta PDF para Word recupera o texto de um PDF quando você não tem a origem. O resultado é aproximado — conte com limpeza de layout. Trate como saída de emergência, não como fluxo.",
    },
  ],
  tips: [
    "Não mande o DOCX ao cliente, a menos que ele peça explicitamente. A versão em PDF é aquela sobre a qual o acordo se dá; o DOCX é a sua origem de trabalho.",
    "Controle as alterações apenas no DOCX. Ferramentas de anotação em PDF existem, mas não substituem o controle de alterações de verdade.",
    "Incorpore as fontes na exportação em PDF. Um PDF que aparece diferente na máquina do cliente passa falta de profissionalismo.",
    "Comprima o PDF para e-mail ou envio a portal. O DOCX de origem não precisa de compressão; ele é pequeno. O PDF muitas vezes precisa.",
    "Guarde os dois formatos na pasta do projeto. O PDF em /final/, o DOCX em /rascunhos/ ou /origem/.",
  ],
  mobileNote:
    "O celular costuma resolver os momentos finais dos documentos corporativos em PDF — assinar um contrato, comprimir um relatório, mandar a versão final. O app PDF Editor faz tudo isso no iOS e no Android, complementando o trabalho em DOCX que aconteceu antes no computador.",
  faq: [
    {
      q: "Por que não usar PDF para tudo?",
      a: "O PDF não aceita edição de verdade, controle de alterações nem colaboração de várias pessoas. Para escrever, o DOCX é genuinamente melhor.",
    },
    {
      q: "Por que não usar DOCX também para entregar?",
      a: "O DOCX renderiza diferente entre versões e aparelhos. Clientes veem layouts diferentes do que você pretendia. O PDF trava a aparência.",
    },
    {
      q: "Contratos devem ser enviados em PDF ou em DOCX?",
      a: "Contratos finais: PDF, assinado. Minutas em negociação: DOCX, com controle de alterações. Ferramentas diferentes em fases diferentes.",
    },
    {
      q: "E para arquivar — DOCX ou PDF?",
      a: "PDF, como registro do que foi entregue ou assinado. Guarde o DOCX também para referência, mas o PDF é a cópia canônica do arquivo.",
    },
    {
      q: "Quando converter de PDF para Word faz sentido?",
      a: "Quando você precisa editar um PDF e não tem a origem. Conte com limpeza de layout; a conversão é aproximada.",
    },
  ],
  related: [
    { label: "PDF para empresas — contratos e fluxos", path: "/pdf-for-business" },
    { label: "Word para PDF — exportações limpas para distribuir", path: "/word-to-pdf" },
    { label: "PDF para Word — recupere texto editável", path: "/pdf-to-word" },
    { label: "PDF ou DOCX — comparação completa", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF para empresas", path: "/pdf-for-business" },
};

export default content;
