import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-not-printing-correctly",
  h1: "Formulário PDF não imprime direito",
  description:
    "O formulário sai com campos em branco, texto deslocado ou bordas cortadas? Os problemas de impressão próprios de formulários — em especial os valores de campo sumidos — e o ajuste que resolve cada um.",
  updated: "2026-06-01",
  intro: [
    "Formulários imprimem mal de jeitos que PDFs comuns não imprimem. O mais frequente e confuso é os campos preenchidos saírem em branco — você completou tudo na tela, mas o papel mostra só o formulário vazio. Logo atrás vêm o texto do campo deslocado da linha, caixas de seleção que não imprimem e bordas cortadas. Cada um tem uma causa específica e resolvível, enraizada no fato de campos de formulário imprimirem de forma diferente do conteúdo da página.",
    "O problema principal — campos em branco no papel — acontece porque as respostas preenchidas moram na camada de campos, e alguns caminhos de impressão pulam essa camada inteira. A correção é ou uma opção de impressão que inclua os campos, ou achatar o formulário para as respostas virarem parte da página. Os outros problemas são de escala e de desenho de campo, cada um com o seu ajuste.",
    "Este guia foca nos problemas de impressão próprios de formulários. Para questões gerais de impressão de PDF, como tamanhos de página errados em qualquer documento, o guia mais amplo de impressão vai além.",
  ],
  steps: [
    {
      title: "Campos em branco: imprima os valores ou achate",
      body: "Se os campos preenchidos saem em branco, ative a opção de imprimir campos de formulário (às vezes chamada de “documento e marcações”), ou achate o formulário antes para as respostas se fundirem à página e sempre imprimirem.",
    },
    {
      title: "Texto de campo deslocado",
      body: "Se o texto do campo imprime fora do lugar ou na fonte errada, o leitor está desenhando os campos de outro jeito na impressão. Achatar trava a aparência que você vê na tela para ela imprimir igual.",
    },
    {
      title: "Caixas de seleção e marcações que somem",
      body: "Vistos que desaparecem no papel são o mesmo problema de camada de campos do texto em branco. A opção de imprimir campos de formulário ou uma passada de achatamento os traz de volta junto com o resto das respostas.",
    },
    {
      title: "Bordas cortadas",
      body: "Defina a escala como “ajustar” ou 100%, em vez de um zoom personalizado, e case o tamanho do papel com o do formulário. Isso é problema de escala, separado da camada de campos, mas comum em formulários densos.",
    },
    {
      title: "Imprima uma página para confirmar",
      body: "Depois de mudar as opções, imprima uma página só. Confirme respostas, alinhamento e margens antes de mandar o formulário inteiro de várias páginas para o papel.",
    },
  ],
  tips: [
    "Achatar antes de imprimir é a correção universal para campos em branco ou deslocados — um formulário achatado imprime as respostas em qualquer lugar, sem ajuste especial.",
    "Se as respostas aparecem na tela e não no papel, é opção de impressão, não o arquivo — procure a opção de campos de formulário.",
    "Problemas de escala e tamanho de papel são separados dos campos em branco; resolva com “ajustar”/100% e papel compatível.",
    "Formulários digitalizados planos não sofrem com campos em branco porque as respostas já fazem parte da página.",
    "Os nomes das opções de impressão mudam por aplicativo e impressora, então procure qualquer coisa que fale em campos de formulário, marcações ou comentários.",
  ],
  mobileNote:
    "Atalhos de impressão do celular podem descartar valores de campo do mesmo jeito que os do computador. No app PDF Editor, achate o formulário preenchido antes de imprimir ou de mandar para a impressora, para toda resposta ficar gravada na página e imprimir sem falha.",
  faq: [
    {
      q: "Por que o meu formulário imprime com os campos em branco?",
      a: "As respostas preenchidas estão na camada de campos e o seu caminho de impressão a está pulando. Ative a opção de imprimir campos de formulário, ou achate o formulário para as respostas virarem parte da página e sempre imprimirem.",
    },
    {
      q: "Por que o texto do campo imprime no lugar ou na fonte errada?",
      a: "O leitor desenha os campos de outro jeito na impressão. Achate o formulário antes — achatar fixa a aparência que você vê na tela, então ela imprime idêntica.",
    },
    {
      q: "Os meus vistos não imprimem — por quê?",
      a: "A mesma causa do texto em branco: as caixas de seleção fazem parte da camada de campos. A opção de imprimir campos de formulário ou uma passada de achatamento as imprime junto com as outras respostas.",
    },
    {
      q: "Por que o formulário impresso sai cortado nas bordas?",
      a: "É desencontro de escala ou de tamanho de papel, não questão de campos. Defina a escala como ajustar ou 100% e case o tamanho do papel com o da página do formulário.",
    },
    {
      q: "Qual é a diferença em relação aos problemas gerais de impressão de PDF?",
      a: "Aqui estão os problemas específicos de formulário — principalmente os valores de campo em branco. O guia geral de impressão de PDF trata de problemas do documento inteiro, como tamanhos errados e cortes em qualquer PDF.",
    },
  ],
  related: [
    { label: "Como imprimir um formulário PDF preenchido", path: "/guides/how-to-print-a-filled-pdf-form" },
    { label: "Como resolver problemas de impressão de PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
    { label: "Formulário PDF não funciona", path: "/guides/pdf-form-not-working" },
    { label: "Corrigir erros de formulário PDF", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
