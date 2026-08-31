import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-sideways-pdf-pages",
  h1: "Como corrigir páginas de PDF deitadas ou de cabeça para baixo",
  description:
    "Endireite de vez as páginas de um PDF que abrem deitadas ou invertidas, no navegador. Por que girar a tela não resolve e o que realmente conserta.",
  updated: "2026-05-23",
  intro: [
    "Você abre um PDF e uma página está deitada. Você gira no visualizador, fica boa — aí você envia, e quem recebe vê deitada de novo. Essa é a armadilha: girar no visualizador muitas vezes só muda como você vê, não como a página está salva. Para consertar para todo mundo, é preciso girar a própria página e salvar a alteração.",
    "Este guia faz exatamente isso com a ferramenta gratuita Girar PDF, que vira as páginas em 90, 180 ou 270 graus e grava a correção em um arquivo novo, tudo no navegador e sem enviar nada. Seja uma única página errada ou uma digitalização inteira que saiu deitada, esta é a correção definitiva.",
    "Também vamos ver por que as páginas ficam deitadas para começo de conversa, para você impedir o problema na origem — geralmente um scanner ou um celular segurado de lado.",
  ],
  steps: [
    {
      title: "Abra a ferramenta Girar PDF",
      body: "Vá até a ferramenta Girar PDF no navegador. Ela grava a rotação no próprio arquivo, então a correção vale em qualquer visualizador — sem upload e sem conta.",
    },
    {
      title: "Escolha o PDF",
      body: "Arraste o arquivo até a área de soltar ou clique para escolhê-lo. A ferramenta mostra as páginas para você ver quais estão deitadas ou invertidas.",
    },
    {
      title: "Localize as páginas afetadas",
      body: "Anote quais estão erradas e quanto estão fora — um quarto de volta, meia volta. Numa digitalização longa pode ser todas; em um relatório, talvez só uma tabela larga.",
    },
    {
      title: "Gire até ficar em pé",
      body: "Aplique 90° em uma página deitada, 180° em uma de cabeça para baixo ou 270° em uma virada para o outro lado, até o conteúdo ler normalmente.",
    },
    {
      title: "Confira e baixe",
      body: "Confirme que todas as páginas corrigidas ficaram em pé e que você não mexeu nas que já estavam certas, e então exporte o PDF corrigido.",
    },
    {
      title: "Corrija na origem da próxima vez",
      body: "Páginas deitadas normalmente vêm de um scanner alimentando as folhas na horizontal ou de um celular segurado de lado. Ajustar a orientação da digitalização ou a forma de segurar o aparelho evita a repetição.",
    },
  ],
  tips: [
    "Girar dentro de um visualizador costuma mudar só a sua visão, não o arquivo salvo — e é por isso que a página aparece deitada de novo para quem recebe. Salvar uma cópia girada é o que realmente conserta.",
    "Gire só as páginas que estão de fato erradas. Uma tabela deitada corretamente (uma planilha, um gráfico) deve ser assim mesmo; girá-la piora as coisas.",
    "Se a digitalização inteira está na horizontal, uma única rotação de 90° aplicada em todas as páginas costuma resolver de uma vez.",
    "Corrija a rotação antes de reordenar ou juntar — é bem mais fácil julgar a sequência e combinar documentos com todas as páginas em pé.",
    "Guarde o original. Girar demais é fácil; refazer a partir do arquivo intocado é mais rápido do que girar de um lado para o outro.",
  ],
  mobileNote:
    "Páginas deitadas quase sempre nascem no celular, e é ali que elas são mais rápidas de resolver. O app PDF Editor gira páginas com um toque e grava a correção no arquivo, offline — então um documento recém-digitalizado já sai em pé das suas mãos.",
  faq: [
    {
      q: "Por que a página aparece certa para mim e deitada para os outros?",
      a: "Girar no visualizador normalmente muda só a exibição na sua tela, não a forma como a página está salva. Para consertar para todo mundo, gire a página e salve um arquivo novo — que é o que a ferramenta Girar PDF faz.",
    },
    {
      q: "Quanto eu devo girar?",
      a: "90° para uma página deitada, 180° para uma de cabeça para baixo e 270° para uma virada no sentido oposto. Escolha o ângulo que deixa o conteúdo em pé.",
    },
    {
      q: "Corrigir a rotação reduz a qualidade?",
      a: "Não. Girar muda apenas a orientação; o conteúdo e a resolução da página continuam iguais.",
    },
    {
      q: "Meu arquivo é enviado?",
      a: "Não. A rotação roda no seu navegador, no seu aparelho, então o arquivo continua privado.",
    },
    {
      q: "Como evito que as páginas saiam deitadas na digitalização?",
      a: "Configure o scanner para detectar ou seguir a orientação da página, ou segure o celular de modo que a folha preencha o quadro em pé. Acertar na captura poupa o passo da rotação depois.",
    },
  ],
  related: [
    { label: "Girar PDF — endireite páginas no navegador", path: "/rotate-pdf" },
    { label: "Como girar páginas de um PDF", path: "/guides/how-to-rotate-pdf-pages" },
    { label: "Como digitalizar documentos em PDF com o celular", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Como reordenar as páginas de um PDF", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "Girar PDF", path: "/rotate-pdf" },
};

export default content;
