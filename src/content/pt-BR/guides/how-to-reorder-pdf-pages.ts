import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reorder-pdf-pages",
  h1: "Como reordenar as páginas de um PDF",
  description:
    "Coloque as páginas do PDF na sequência certa pelo navegador. Conserte digitalizações que saíram de trás para frente e arquivos unidos fora de ordem.",
  updated: "2026-05-23",
  intro: [
    "As páginas saem na ordem errada com mais frequência do que se imagina. O alimentador do scanner puxa uma pilha e digitaliza de trás para frente. Uma junção coloca dois arquivos juntos, mas na sequência errada. Um anexo que deveria ficar no fim vai parar no meio. Seja qual for a causa, a solução é a mesma: reorganizar as páginas até o documento ler como deveria.",
    "Este guia usa a ferramenta gratuita Organizar páginas do PDF, que mostra a prévia de cada página e permite movê-las com controles simples, direto no navegador — sem enviar nada. Você vê as miniaturas, embaralha até o lugar certo e baixa o arquivo corrigido.",
    "É uma operação pequena com efeito desproporcional: um documento na ordem certa parece proposital, enquanto um na ordem errada faz tudo parecer descuidado.",
  ],
  steps: [
    {
      title: "Abra a ferramenta Organizar páginas do PDF",
      body: "Vá até a ferramenta Organizar páginas do PDF no navegador. Ela roda no seu aparelho — sem upload e sem conta.",
    },
    {
      title: "Escolha o PDF",
      body: "Arraste o arquivo até a área de soltar ou clique para escolhê-lo. A ferramenta gera a miniatura de cada página para você ver a ordem atual de relance.",
    },
    {
      title: "Identifique o que está fora do lugar",
      body: "Percorra as miniaturas procurando páginas invertidas, deslocadas ou duplicadas. Saber a ordem de destino antes de começar torna os movimentos rápidos.",
    },
    {
      title: "Mova as páginas para a sequência certa",
      body: "Use os controles para levar cada página à posição correta. Trabalhe do começo do documento para o fim, para as posições continuarem previsíveis.",
    },
    {
      title: "Revise a nova ordem",
      body: "Leia as miniaturas de cima a baixo mais uma vez. A sequência mostrada é a sequência que você vai ter no arquivo.",
    },
    {
      title: "Baixe o PDF corrigido",
      body: "Exporte o arquivo reorganizado e salve com um nome claro. Guarde o original até confirmar que a nova ordem está certa.",
    },
  ],
  tips: [
    "Se uma digitalização inteira saiu invertida, reordenar conserta a sequência — mas uma página deitada é problema de rotação, resolvido pela ferramenta Girar PDF.",
    "Reordene antes de comprimir ou converter. É mais fácil acertar a estrutura primeiro e depois rodar as operações mais pesadas no documento pronto.",
    "Trabalhe do começo para o fim ao mover páginas, para cada movimento não embaralhar as posições que você já ajustou.",
    "Em documentos montados a partir de várias origens, reordene logo depois de juntar, enquanto a estrutura pretendida ainda está fresca na cabeça.",
    "Guarde o arquivo original. Se a reorganização der errado, é bem mais rápido recomeçar da origem intocada.",
  ],
  mobileNote:
    "Reordenar no celular é um trabalho de arrastar miniaturas, e o app PDF Editor deixa isso tátil: pressione, arraste, solte, pronto — offline e sem enviar o arquivo. Prático logo depois de digitalizar, quando as páginas costumam pedir um ajuste rápido.",
  faq: [
    {
      q: "Dá para consertar uma digitalização que saiu de trás para frente?",
      a: "Dá. A reorganização permite inverter a sequência para a última página digitalizada voltar ao início. Se as páginas também estiverem giradas, corrija a orientação com a ferramenta Girar PDF.",
    },
    {
      q: "Reordenar altera o conteúdo das páginas?",
      a: "Não. Só a sequência muda — o conteúdo e a orientação de cada página continuam exatamente como estavam.",
    },
    {
      q: "Meu PDF é enviado?",
      a: "Não. A reorganização roda no seu navegador, no seu aparelho, então o arquivo continua privado.",
    },
    {
      q: "Dá para excluir páginas durante a reorganização?",
      a: "Reordenar trata da sequência. Para descartar páginas, extraia as que você quer manter com a ferramenta Extrair páginas do PDF, que deixa as indesejadas de fora.",
    },
    {
      q: "O arquivo original é afetado?",
      a: "Não. A ferramenta gera um PDF novo, reorganizado, e deixa a sua origem intocada, então você pode tentar de novo a partir do original se precisar.",
    },
  ],
  related: [
    { label: "Organizar páginas do PDF — reorganize no navegador", path: "/reorder-pdf-pages" },
    { label: "Girar PDF — endireite páginas deitadas", path: "/rotate-pdf" },
    { label: "Como organizar arquivos PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Como juntar arquivos PDF", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "Organizar páginas do PDF", path: "/reorder-pdf-pages" },
};

export default content;
