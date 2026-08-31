import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-print-a-filled-pdf-form",
  h1: "Como imprimir um formulário PDF preenchido",
  description:
    "Imprimiu o formulário e os campos saíram em branco? Por que os valores preenchidos às vezes não imprimem e como conseguir uma via em papel limpa com todas as respostas visíveis.",
  updated: "2026-06-01",
  intro: [
    "Você preenche um formulário na tela, manda para a impressora e o papel sai sem nenhuma resposta — só o formulário em branco. É um dos problemas mais comuns e mais desconcertantes com formulários, e tem uma causa específica: as respostas moram na camada de campos do formulário, e alguns caminhos de impressão pulam essa camada, imprimindo só a página de baixo.",
    "A correção normalmente é uma de duas coisas — ligar a opção que imprime os valores dos campos ou achatar o formulário antes, para as respostas virarem parte da página e não poderem ser deixadas de fora. De qualquer forma, conseguir uma impressão limpa com tudo aparecendo é simples depois que você sabe por que acontece.",
    "Este guia cobre o problema dos campos em branco, as opções de impressão que controlam isso e as verificações mais amplas (margens, escala) que mantêm um formulário preenchido bonito no papel.",
  ],
  steps: [
    {
      title: "Reproduza o problema na pré-visualização de impressão",
      body: "Abra a janela de impressão e olhe a pré-visualização antes de mandar qualquer coisa para a impressora. Se as respostas também faltam ali, é um problema de impressão de campos, não defeito da impressora.",
    },
    {
      title: "Ative a impressão dos valores dos campos",
      body: "Procure uma opção como “imprimir campos de formulário” ou um ajuste de comentários e formulários definido como “documento e marcações”. Ligar isso manda o caminho de impressão incluir a camada de campos com as suas respostas.",
    },
    {
      title: "Se não houver essa opção, achate o formulário antes",
      body: "Achatar funde as respostas preenchidas na própria página. Depois disso não sobra camada de campos para ser ignorada, então todo caminho de impressão inclui as respostas. É a correção mais confiável.",
    },
    {
      title: "Confira escala e margens",
      body: "Defina a escala como “ajustar” ou 100%, em vez de um zoom personalizado, para o formulário não sair cortado nem encolhido. Confirme que o tamanho do papel bate com o do formulário para nada estourar a borda.",
    },
    {
      title: "Imprima uma página de teste",
      body: "Imprima uma página só primeiro para confirmar respostas, layout e margens antes de rodar o documento inteiro — principalmente em formulários de várias páginas.",
    },
  ],
  tips: [
    "A correção universal mais rápida é achatar o formulário e depois imprimir — um formulário achatado imprime as respostas em qualquer lugar, sem ajuste especial.",
    "Se a pré-visualização mostra as respostas e o papel não, o problema está nas opções de impressão, não no arquivo — confira de novo a opção de campos de formulário.",
    "Um formulário digitalizado e plano nunca tem esse problema: os “campos” dele já fazem parte da página, então sempre imprimem.",
    "Em formulários escuros ou com fundo, confira se o texto dos campos imprime em uma cor que continua legível.",
    "As opções de impressão mudam de aplicativo para aplicativo e de impressora para impressora, então o nome exato varia — procure qualquer coisa que fale em campos de formulário ou marcações.",
  ],
  mobileNote:
    "Imprimir do celular tem a mesma armadilha — alguns atalhos de impressão descartam os valores dos campos. No app PDF Editor dá para achatar o formulário preenchido antes de imprimir ou de mandar para a impressora, então as respostas ficam gravadas na página e saem sempre.",
  faq: [
    {
      q: "Por que as respostas do formulário saem em branco quando imprimo?",
      a: "Porque as respostas ficam guardadas na camada de campos e o seu caminho de impressão está pulando essa camada. Ative a opção de imprimir os valores dos campos, ou achate o formulário para as respostas virarem parte da página.",
    },
    {
      q: "O que achatar resolve na impressão?",
      a: "Achatar funde os valores preenchidos na própria página. Depois disso não existe camada de campos separada para ser deixada de fora, então as respostas imprimem sem falha em qualquer aplicativo ou impressora.",
    },
    {
      q: "As respostas aparecem na tela, mas não no papel — por quê?",
      a: "O seu leitor exibe a camada de campos, mas as opções de impressão a excluem. Procure uma opção sobre campos de formulário ou “documento e marcações” e ative, ou achate antes de imprimir.",
    },
    {
      q: "Por que o formulário impresso sai cortado nas bordas?",
      a: "Isso é desencontro de escala ou de tamanho de papel, um problema separado dos campos em branco. Defina a escala como ajustar ou 100% e case o tamanho do papel com o do formulário.",
    },
    {
      q: "Formulários digitalizados planos têm esse problema?",
      a: "Não. As respostas de um formulário plano fazem parte da imagem da página, então sempre imprimem. O problema dos campos em branco só afeta formulários interativos com camada de campos separada.",
    },
  ],
  related: [
    { label: "Como salvar um formulário PDF preenchido", path: "/guides/how-to-save-a-filled-pdf-form" },
    { label: "Formulário PDF não imprime direito", path: "/guides/pdf-form-not-printing-correctly" },
    { label: "Como resolver problemas de impressão de PDF", path: "/guides/how-to-fix-pdf-printing-issues" },
    { label: "Como enviar um formulário PDF preenchido", path: "/guides/how-to-send-a-completed-pdf-form" },
  ],
  parentHub: { label: "Formulários PDF", path: "/pdf-forms" },
};

export default content;
