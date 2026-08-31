import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-jpg",
  h1: "PDF ou JPG — quando usar cada formato",
  description:
    "PDF ou JPG: quando digitalizar e quando fotografar. Compare qualidade, tamanho de arquivo, OCR e adequação ao fluxo de documentos.",
  intro: [
    "JPG é formato de foto. PDF é formato de documento. Apesar dessa divisão simples, as pessoas mandam JPG de contrato e PDF de imagem única o tempo todo — escolhas que funcionam, mas não são as ideais.",
    "O mau uso acontece porque o celular salva tudo em JPG, da foto de família ao recibo digitalizado, e o computador salva em PDF qualquer coisa imprimível. Sem pensar no assunto, a pessoa acaba com JPGs de recibo na galeria e PDFs cheios de imagem entupindo a pasta de downloads.",
    "Esta comparação ajuda a escolher o formato certo para os documentos que você realmente envia: recibos, documentos de identidade, contratos, prints, fotos de produto e os casos intermediários em que a resposta certa não é óbvia.",
  ],
  leftLabel: "PDF",
  rightLabel: "JPG",
  rows: [
    { feature: "Suporte a várias páginas", left: "sim", right: "não" },
    { feature: "Texto pesquisável (com OCR)", left: "sim", right: "não" },
    { feature: "Nítido em qualquer zoom", left: "sim", right: "não" },
    { feature: "Arquivo pequeno para fotos", left: "Limitado", right: "sim" },
    { feature: "Abre em qualquer lugar", left: "sim", right: "sim" },
    { feature: "Proteção por senha", left: "sim", right: "não" },
    { feature: "Editar depois", left: "sim", right: "Limitado" },
    { feature: "Melhor para recibos e contratos", left: "sim", right: "não" },
    { feature: "Melhor para fotos de produto", left: "não", right: "sim" },
  ],
  whenLeft: [
    "O conteúdo é um documento (recibo, contrato, documento pessoal, formulário)",
    "O resultado pode precisar de várias páginas",
    "Você quer texto pesquisável (OCR)",
    "Quem recebe é a contabilidade ou um sistema da empresa",
    "Você talvez precise adicionar uma assinatura depois",
  ],
  whenRight: [
    "O conteúdo é uma fotografia",
    "O tamanho do arquivo importa mais que a fidelidade",
    "É uma imagem só, sem necessidade de várias páginas",
    "O envio é por apps de mensagem que preferem imagem",
    "A publicação é em rede social",
  ],
  faq: [
    {
      q: "Dá para converter um JPG em PDF?",
      a: "Dá. O PDF Editor (e a maioria das ferramentas de PDF) envolve o JPG em um PDF preservando a qualidade da imagem.",
    },
    {
      q: "O OCR funciona em um JPG de documento?",
      a: "É melhor converter para PDF antes e depois rodar o OCR — assim o resultado é texto pesquisável dentro de um formato de documento de verdade.",
    },
    {
      q: "Por que a contabilidade prefere PDF?",
      a: "Os sistemas contábeis indexam PDFs e ignoram JPGs. Recibos em PDF são categorizados automaticamente; JPGs ficam parados numa pasta.",
    },
  ],
  related: [
    { label: "Conversor de PDF", path: "/pdf-converter" },
    { label: "Digitalizar para PDF", path: "/scan-to-pdf" },
    { label: "Editor de PDF", path: "/pdf-editor" },
  ],
};

export default content;
