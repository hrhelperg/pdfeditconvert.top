import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-rotate-pdf-pages",
  h1: "Como girar páginas de um PDF",
  description:
    "Gire todas as páginas de um PDF, ou só algumas, em 90, 180 ou 270 graus no navegador. Conserte digitalizações deitadas e páginas de cabeça para baixo.",
  updated: "2026-05-23",
  intro: [
    "Um PDF que abre deitado é um incômodo pequeno, mas persistente. Você inclina a cabeça, ou fica girando o celular e a página gira junto. A solução é girar a própria página, para que ela fique salva em pé — aí ela lê corretamente para todo mundo, em qualquer aparelho, sem ninguém torcer o pescoço.",
    "Este guia usa a ferramenta gratuita Girar PDF, que vira todas as páginas ou só as escolhidas em 90, 180 ou 270 graus, direto no navegador e sem enviar nada. É a correção certa tanto quando uma única página está errada quanto quando o documento inteiro saiu deitado do scanner.",
    "Girar é uma mudança permanente na forma como a página fica salva, então vamos cobrir como aplicar só nas páginas que precisam e como conferir o resultado antes de salvar.",
  ],
  steps: [
    {
      title: "Abra a ferramenta Girar PDF",
      body: "Vá até a ferramenta Girar PDF no navegador. Ela roda no seu aparelho — sem upload e sem conta.",
    },
    {
      title: "Escolha o PDF",
      body: "Arraste o arquivo até a área de soltar ou clique para escolhê-lo. A ferramenta mostra as páginas para você ver quais estão erradas.",
    },
    {
      title: "Decida quais páginas girar",
      body: "Gire todas ou só as que estão fora — uma única tabela deitada em um relatório em pé, por exemplo. Anote quais páginas e em que direção.",
    },
    {
      title: "Escolha o ângulo de rotação",
      body: "Selecione 90° para uma página deitada de lado, 180° para uma de cabeça para baixo ou 270° para uma girada no outro sentido. Aplique nas páginas escolhidas.",
    },
    {
      title: "Confira se todas as páginas ficaram em pé",
      body: "Verifique se as páginas corrigidas agora leem normalmente e se você não girou por engano as que já estavam certas.",
    },
    {
      title: "Baixe o PDF corrigido",
      body: "Exporte o arquivo girado e salve com um nome claro. O original fica intocado, caso você precise recomeçar.",
    },
  ],
  tips: [
    "Gire só as páginas que estão erradas. Aplicar uma rotação geral em um documento em que a maioria está certa apenas cria problemas novos.",
    "Páginas deitadas — tabelas largas, gráficos, planilhas exportadas em PDF — muitas vezes deveriam mesmo ser deitadas. Gire apenas se o conteúdo estiver de fato de lado, e não se ele for corretamente largo.",
    "Se as páginas estiverem fora de ordem e giradas, corrija a rotação primeiro e reordene depois — é mais fácil julgar a sequência com todas as páginas em pé.",
    "Girar antes de juntar deixa o documento combinado correto desde o início, sem surpresas deitadas no meio.",
    "Guarde o original. Se você girar para o lado errado, é mais rápido refazer a partir do arquivo intocado do que ficar girando de um lado para o outro.",
  ],
  mobileNote:
    "Digitalizações deitadas acontecem principalmente no celular, e é ali que elas são mais rápidas de resolver. O app PDF Editor gira páginas com um toque e funciona offline, então você endireita um documento recém-digitalizado antes que ele saia do aparelho.",
  faq: [
    {
      q: "Dá para girar só uma página?",
      a: "Dá. Selecione apenas as páginas erradas e gire essas, deixando o resto do documento como está.",
    },
    {
      q: "Qual rotação eu devo escolher?",
      a: "90° para uma página deitada de lado, 180° para uma de cabeça para baixo e 270° para uma virada no sentido oposto. Escolha o ângulo que deixa o conteúdo em pé.",
    },
    {
      q: "A rotação é permanente?",
      a: "Ela é gravada no arquivo exportado, para a página aparecer em pé em todo lugar. O seu original fica intocado, então você sempre pode refazer se precisar.",
    },
    {
      q: "Meu PDF é enviado?",
      a: "Não. A rotação roda no seu navegador, no seu aparelho, então o arquivo nunca sai dele.",
    },
    {
      q: "Minha digitalização está deitada e fora de ordem — o que faço primeiro?",
      a: "Gire as páginas para cima primeiro e depois use a ferramenta Organizar páginas do PDF para corrigir a sequência. Julgar a ordem é mais fácil quando tudo está no sentido certo.",
    },
  ],
  related: [
    { label: "Girar PDF — corrija a orientação no navegador", path: "/rotate-pdf" },
    { label: "Organizar páginas do PDF — corrija a sequência", path: "/reorder-pdf-pages" },
    { label: "Como corrigir páginas de PDF deitadas", path: "/guides/how-to-fix-sideways-pdf-pages" },
    { label: "Como reordenar as páginas de um PDF", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "Girar PDF", path: "/rotate-pdf" },
};

export default content;
