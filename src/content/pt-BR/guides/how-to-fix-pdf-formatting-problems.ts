import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-formatting-problems",
  h1: "Como corrigir problemas de formatação em PDF (quebras, margens, espaçamento)",
  description:
    "Quando o layout do PDF sai quebrado — texto reposicionado, margens erradas, espaçamento estranho — a solução costuma estar no documento de origem, não no PDF. O fluxo mais limpo para exportar bem.",
  updated: "2026-05-29",
  intro: [
    "Formatação ruim em PDF quase sempre remete ao momento da exportação. O PDF em si não reposiciona nada — ele trava a página exatamente como ela estava na hora de salvar. Então, se o espaçamento está errado, as margens fora ou a tabela quebrou entre páginas, o arquivo de origem já produzia esse resultado.",
    "A solução, quase sempre, é voltar à origem — Word, Pages, Google Docs, ferramenta de design —, ajustar o layout e exportar de novo. Isso é frustrante quando a origem não é sua, mas é o caminho mais limpo. As alternativas — converter em Word, editar o PDF direto ou “consertar” com outro leitor — perdem algo que o original tinha.",
    "Este guia percorre os sintomas comuns de formatação e a solução realista para cada um, incluindo os fluxos que geram PDFs limpos já na primeira tentativa.",
  ],
  steps: [
    {
      title: "Identifique se é problema de conteúdo ou de renderização",
      body: "Abra o PDF em dois leitores diferentes. Se os dois mostrarem o mesmo layout quebrado, o problema está no arquivo. Se um renderiza certo, você tem um problema de leitor, não de formatação.",
    },
    {
      title: "Corrija o layout na origem, não no PDF",
      body: "Abra o arquivo do Word, do Pages ou do Docs, corrija margens, espaçamento ou tabela e exporte de novo em PDF. A origem corrigida gera um PDF corrigido diretamente. Editar o PDF para remendar layout é brigar com o formato.",
    },
    {
      title: "Reexporte com o tamanho de papel explícito",
      body: "Ajustes automáticos costumam gerar surpresas. Defina o tamanho do papel (A4 ou Carta), as margens (2,5 cm) e a orientação de forma explícita no programa de origem antes de exportar.",
    },
    {
      title: "Converta em Word só para reescritas pesadas",
      body: "A ferramenta PDF para Word extrai o texto no navegador para reedição. A conversão perde parte do layout — aceite isso como a troca por recuperar a edição de texto. Depois da limpeza, exporte de novo em PDF para compartilhar.",
    },
    {
      title: "Use ferramentas de página para consertos estruturais",
      body: "Se só algumas páginas estão erradas — uma digitalização fora de ordem, uma capa duplicada, uma folha deitada —, as ferramentas Organizar páginas, Extrair páginas e Girar PDF resolvem a estrutura sem tocar na formatação do texto.",
    },
    {
      title: "Exporte um PDF novo antes de compartilhar",
      body: "Com o layout corrigido na origem, exporte do zero em vez de salvar de novo um PDF existente. A exportação mais limpa vem diretamente do programa que fez o documento.",
    },
  ],
  tips: [
    "A visualização de impressão do Word ou do Pages mostra o mesmo comportamento de quebra de página que o PDF terá. Corrija as quebras ruins antes de exportar, e não depois.",
    "Tabelas que se partem de forma estranha são um problema de formatação de parágrafo na origem, não do PDF. Use “manter com o próximo” para prender a linha de cabeçalho ao conteúdo.",
    "Não abra um PDF no Word para editar — o Word o converte, muitas vezes mal. Use o arquivo de origem se você o tiver, ou a ferramenta PDF para Word apenas quando não tiver.",
    "Conteúdo colado da web costuma trazer formatação de fundo. Limpe antes de exportar (colar como texto simples) para evitar bordas e cores surpresa no PDF.",
    "Se você só tem o PDF e não pode voltar à origem, aceite que a limpeza de layout será parcial. Priorize as mudanças que o leitor vai notar primeiro.",
  ],
  mobileNote:
    "Problemas de formatação percebidos no celular costumam vir de documentos feitos no computador e exportados com o papel de destino errado. O app PDF Editor permite girar, reordenar e recortar páginas no celular — útil para limpar questões estruturais mesmo quando você não pode corrigir a origem.",
  faq: [
    {
      q: "Por que o meu PDF ficou diferente da versão em Word?",
      a: "Normalmente por causa de fontes, tamanho de papel ou área de impressão na hora de exportar. Reexportar com o tamanho de papel explícito e as fontes incorporadas gera um PDF igual à origem.",
    },
    {
      q: "Dá para editar o texto do PDF para corrigir o espaçamento?",
      a: "Dá para editar caracteres e palavras, mas reposicionar parágrafos é difícil, porque o PDF trata o texto como blocos posicionados. Corrija na origem, se possível.",
    },
    {
      q: "Por que o meu PDF convertido em Word ficou quebrado?",
      a: "PDFs codificam layout, não fluxo. A conversão os devolve ao fluxo, mas as pistas estruturais se perderam. Espere uma limpeza de verdade em um arquivo convertido.",
    },
    {
      q: "Por que as minhas tabelas se partem de forma estranha entre páginas?",
      a: "Quase sempre por formatação de parágrafo na origem. Os ajustes “manter com o próximo” e “não dividir entre páginas” no Word resolvem a maioria das quebras antes da exportação.",
    },
    {
      q: "Comprimir afeta a formatação?",
      a: "Não. A compressão age nas imagens, não no layout. Um PDF comprimido tem a mesma formatação do original — apenas com as imagens embutidas menores.",
    },
  ],
  related: [
    { label: "PDF para Word — converta para correções pesadas de texto", path: "/pdf-to-word" },
    { label: "Word para PDF — reexporte com limpeza", path: "/word-to-pdf" },
    { label: "Como resolver problemas de fonte em PDF", path: "/guides/how-to-fix-pdf-font-issues" },
    { label: "Como resolver problemas de impressão de PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
