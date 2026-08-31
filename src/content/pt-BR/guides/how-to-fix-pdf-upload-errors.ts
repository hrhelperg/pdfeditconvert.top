import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-upload-errors",
  h1: "Como resolver erros ao enviar PDF (grande demais, recusado, travado)",
  description:
    "Portais recusam PDFs por poucos motivos: tamanho, número de páginas, rigor de formato ou envio instável. Como identificar o seu caso e conseguir o aceite na próxima tentativa.",
  updated: "2026-05-29",
  intro: [
    "Portais de envio são mais rígidos que o e-mail. Muitos recusam qualquer coisa acima de 5 MB, alguns acima de 2 MB, outros não aceitam arquivos de várias páginas, e há os que falham em silêncio com tudo que não seja um PDF/A perfeitamente conforme. As mensagens de erro raramente são específicas — “arquivo grande demais”, “formato inválido”, “falha no envio” — e a maioria significa algo diferente do que diz.",
    "As causas reais costumam ser uma de quatro: o arquivo passa do limite do portal, o formato interno não é padrão, a sua conexão caiu no meio do envio, ou o portal espera um tipo específico de PDF (PDF/A, página única, versão antiga). Cada uma tem uma solução diferente, e a certa depende de qual é.",
    "Este guia percorre os diagnósticos por sintoma e mostra como resolver cada um no navegador. A maioria dos envios que falharam passa na segunda tentativa, depois que você trata a causa real.",
  ],
  steps: [
    {
      title: "Leia a mensagem de erro ao pé da letra",
      body: "“Arquivo excede o limite de tamanho” significa compressão. “Arquivo inválido” significa formato. “Falha no envio” normalmente significa rede. Trate as palavras como a primeira pista, mesmo quando forem secas.",
    },
    {
      title: "Comprima com força se o problema for tamanho",
      body: "A ferramenta Comprimir PDF reduz bastante os arquivos no navegador, principalmente os cheios de digitalização. Teste a compressão mais forte primeiro; se a qualidade cair demais, volte um nível. Alguns portais limitam a 2 MB — a maioria dos documentos comuns fica bem abaixo disso.",
    },
    {
      title: "Divida um PDF grande de várias páginas, se preciso",
      body: "Se o portal aceita vários arquivos menores mas recusa um grande, as ferramentas Dividir PDF ou Extrair páginas do PDF quebram o arquivo em seções. Numere as partes com clareza no nome, para quem recebe conseguir recompor.",
    },
    {
      title: "Reexporte em PDF padrão se o formato for recusado",
      body: "Alguns portais só aceitam arquivos salvos como PDF 1.4 ou PDF/A. A solução mais simples é abrir o arquivo em qualquer leitor e imprimir em PDF — a cópia resultante é simples, padrão e normalmente aceita.",
    },
    {
      title: "Confira o número de páginas e as dimensões",
      body: "Portais de órgãos públicos e de instituições de ensino às vezes limitam a quantidade de páginas ou o tamanho do papel. Se o portal lista requisitos, atenda a eles: só A4 ou Carta, sem páginas fora do padrão, sem fundo transparente. A ferramenta Extrair páginas do PDF descarta o que ultrapassa.",
    },
    {
      title: "Tente de novo em uma conexão estável",
      body: "Uma queda de wi-fi no meio do envio parece uma recusa. Troque de rede ou tente em outra conexão antes de supor que o problema é o arquivo.",
    },
  ],
  tips: [
    "Comprima antes de dividir. Um único arquivo comprimido muitas vezes cabe no limite; se ainda não couber, divida a cópia comprimida.",
    "Evite criptografia ou senha ao enviar para portais — muitos bloqueiam arquivos protegidos, mesmo aceitando o conteúdo por trás deles.",
    "Fique atento a limites escondidos no nome do arquivo. Alguns portais recusam nomes com espaços, acentos ou pontuação.",
    "Se o portal aceita JPG e recusa PDF, dá para exportar as páginas do PDF em imagem com a ferramenta PDF para imagens e enviar essas — útil quando o requisito é só de imagem, como no envio de documentos pessoais.",
    "Confirme sempre que o envio foi concluído (alguns portais falham em silêncio). Atualize a página de comprovante e procure uma confirmação, não apenas a ausência de erro.",
  ],
  mobileNote:
    "Envios feitos pelo celular falham mais que os do computador simplesmente porque a conexão cai mais. O app PDF Editor comprime e divide arquivos offline, então a etapa de envio em si fica curta — um arquivo menor sobe mais rápido e sobrevive a uma rede instável.",
  faq: [
    {
      q: "Qual é o limite de tamanho da maioria dos portais?",
      a: "Os limites comuns são 2 MB, 5 MB e 10 MB. Portais de órgãos públicos e de instituições de ensino costumam ser os mais rígidos; portais comerciais são mais tolerantes. Confira a ajuda do portal se o limite não estiver informado.",
    },
    {
      q: "A compressão sempre resolve uma recusa por tamanho?",
      a: "Normalmente sim, principalmente em arquivos cheios de digitalização. Uma digitalização de 30 MB costuma cair para menos de 5 MB sem sofrimento. PDFs só de texto que já são pequenos não encolhem muito mais.",
    },
    {
      q: "Por que o portal recusa o meu arquivo como “inválido”?",
      a: "Ou o arquivo não é realmente um PDF (alguns downloads vêm com nome errado), ou ele usa recursos de PDF que o leitor do portal não entende. Reexportar por imprimir em PDF gera uma cópia básica quase sempre aceita.",
    },
    {
      q: "Dá para contornar o limite compactando em ZIP?",
      a: "Quase nunca. Portais que limitam PDFs também costumam limitar o tamanho total do envio e recusam ZIPs por completo. Comprimir o próprio PDF é o caminho certo.",
    },
    {
      q: "E se o portal exigir PDF/A especificamente?",
      a: "O PDF/A é uma variante para arquivamento. O Microsoft Word e o Google Docs exportam direto nesse formato. Fora isso, abra o arquivo, imprima em PDF e procure uma opção compatível com PDF/A nas configurações de exportação.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduza para caber no portal", path: "/compress-pdf" },
    { label: "Dividir PDF — quebre arquivos grandes em partes aceitas", path: "/split-pdf" },
    { label: "Como reduzir o tamanho do PDF antes de enviar", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
    { label: "Como reduzir o tamanho de um PDF para e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
