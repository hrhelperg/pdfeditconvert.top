import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-pdf-font-issues",
  h1: "Como resolver problemas de fonte em PDF (ausente, substituída, ilegível)",
  description:
    "Quando um PDF mostra a fonte errada, quadradinhos no lugar de letras ou texto substituído, quase sempre falta uma fonte embutida. Como funciona a incorporação e o que mudar na exportação.",
  updated: "2026-05-29",
  intro: [
    "Quando um PDF mostra quadrados no lugar de caracteres, a fonte errada em todo lugar, ou um espaçamento estranho que não existia no original, o problema é de fonte. PDFs referenciam fontes pelo nome; o leitor precisa encontrar essa fonte no sistema ou tê-la embutida no arquivo. Se nenhuma das duas coisas acontece, você vê uma substituição — na melhor das hipóteses uma fonte parecida, na pior, quadradinhos.",
    "A solução certa é quase sempre reexportar com as fontes incorporadas. Uma vez incorporada, o arquivo carrega os dados do glifo consigo e aparece correto em todo lugar. A troca é um arquivo levemente maior, mas, para a maioria das fontes, a diferença é irrisória perto do documento.",
    "Este guia explica como funciona a incorporação de fontes, percorre os sintomas mais comuns e mostra as soluções — inclusive quando reexportar não é possível e você precisa achatar o arquivo em imagens.",
  ],
  steps: [
    {
      title: "Confirme que o arquivo está renderizando fontes substituídas",
      body: "Abra o arquivo em dois leitores diferentes. Se os dois mostrarem a mesma fonte errada, as fontes não estão incorporadas. Se um leitor está certo e o outro não, o leitor errado é que não tem a fonte e está substituindo.",
    },
    {
      title: "Reexporte com todas as fontes incorporadas",
      body: "No Word, no Pages, no Docs e na maioria das ferramentas de design, as opções de exportação de PDF incluem “incorporar todas as fontes”. Ativar isso adiciona os dados da fonte ao arquivo e faz o documento aparecer igual em todo lugar.",
    },
    {
      title: "Use imprimir em PDF como plano B",
      body: "Se você não consegue ativar a incorporação no programa de origem, abra o documento em qualquer leitor que o exiba corretamente e imprima em PDF. A nova cópia grava os glifos renderizados como imagem — maior e não pesquisável, mas confiável.",
    },
    {
      title: "Verifique fontes licenciadas que não podem ser incorporadas",
      body: "Algumas fontes comerciais têm restrição de incorporação. O programa de origem avisa. A solução realista é trocar por uma fonte parecida que permita a incorporação, ou rasterizar o texto afetado em imagens.",
    },
    {
      title: "Converta em Word, corrija o texto e reexporte",
      body: "Se a substituição já embaralhou o texto e você só tem o PDF, a ferramenta PDF para Word extrai o que é recuperável. Limpe, defina fontes que você tem e exporte um PDF novo.",
    },
    {
      title: "Achate em imagens quando nada mais funcionar",
      body: "A ferramenta PDF para imagens exporta cada página em PNG de alta resolução. Se você remontar com a Imagem para PDF, o resultado não tem texto vivo — só imagens —, mas a renderização das fontes fica travada para todo leitor.",
    },
  ],
  tips: [
    "Não use fontes que não podem ser incorporadas em documentos importantes — o arquivo ficará sempre vulnerável à substituição.",
    "Fontes de web e fontes de exibição baixadas são as maiores vilãs da incorporação. Fontes do sistema (Arial, Times, Helvetica, Calibri) incorporam sem problema.",
    "Incorporar fontes por subconjunto (só os caracteres usados) mantém o arquivo pequeno. A maioria das ferramentas de exportação faz isso por padrão, e é a escolha certa.",
    "Se só um caractere está errado (como uma fração ou um símbolo especial), a fonte não tem aquele glifo. Troque o caractere de origem por um equivalente em Unicode.",
    "Depois de achatar em imagens, conte com a perda de copiar e colar e de OCR. Use esse caminho só quando a fidelidade visual importa mais que a busca.",
  ],
  mobileNote:
    "Leitores de celular costumam ter menos fontes instaladas que os de computador, então arquivos sem fontes incorporadas ficam piores no celular. O app PDF Editor mostra avisos de fonte substituída e permite reexportar documentos com as fontes gravadas, o que os mantém visualmente consistentes entre iOS, Android e computador.",
  faq: [
    {
      q: "O que “incorporar fontes” faz de verdade?",
      a: "Ele coloca os dados de glifo da fonte dentro do próprio PDF, para qualquer leitor renderizar o texto corretamente sem precisar da fonte instalada localmente.",
    },
    {
      q: "Por que eu vejo quadradinhos no lugar das letras?",
      a: "A fonte não está instalada no sistema e não foi incorporada. O leitor não consegue substituir porque não sabe quais glifos desenhar, então mostra o quadrado de caractere ausente.",
    },
    {
      q: "Dá para adicionar uma fonte ao PDF depois de exportado?",
      a: "Não de forma limpa. Reexportar da origem é o caminho certo. Existem ferramentas que dizem incorporar depois, mas a maioria produz arquivos com defeito.",
    },
    {
      q: "Por que o meu PDF fica maior quando eu incorporo as fontes?",
      a: "Porque os dados da fonte agora estão no arquivo. O aumento costuma ser pequeno, a menos que você incorpore muitas famílias. Incorporar só o subconjunto usado mantém o tamanho baixo.",
    },
    {
      q: "A compressão remove as fontes incorporadas?",
      a: "Não. A compressão de PDF age nas imagens, não no texto nem nas fontes. Comprimir um PDF com fontes incorporadas não o quebra.",
    },
  ],
  related: [
    { label: "PDF para Word — recupere texto de fontes substituídas", path: "/pdf-to-word" },
    { label: "PDF para imagens — achate como último recurso", path: "/pdf-to-images" },
    { label: "Como corrigir problemas de formatação em PDF", path: "/guides/how-to-fix-pdf-formatting-problems" },
    { label: "Como resolver problemas de impressão de PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
