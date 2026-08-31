import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-remove-unwanted-pages-from-pdf",
  h1: "Como remover páginas indesejadas de um PDF",
  description:
    "Tire páginas em branco, folhas de rosto e trechos irrelevantes de um PDF no navegador, guardando só o que interessa. Arquivo limpo e processo privado.",
  updated: "2026-05-23",
  intro: [
    "Muitos PDFs chegam com páginas que você não quer: uma folha de rosto, uma página em branco que o scanner enfiou no meio, um anexo de termos e condições que ninguém pediu ou páginas duplicadas de uma junção malfeita. Mandar o documento com essa sujeira ainda anexada parece descuido e, de vez em quando, vaza informação que você preferiria não compartilhar.",
    "O jeito mais limpo de remover páginas no navegador é manter as que você quer. Este guia usa a ferramenta gratuita Extrair páginas do PDF: em vez de apagar uma a uma as páginas indesejadas, você lista as que devem ficar, e todo o resto simplesmente não entra no arquivo novo. Tudo roda no seu aparelho — nada é enviado.",
    "O resultado é um PDF organizado, só com as páginas que fazem parte dele, e o seu original continua intacto caso você tenha errado um número de página.",
  ],
  steps: [
    {
      title: "Identifique as páginas a remover",
      body: "Abra o PDF e anote quais páginas sobram — a página 2 em branco, a folha de rosto, a duplicada no fim. Depois descubra quais você quer manter.",
    },
    {
      title: "Abra a ferramenta Extrair páginas do PDF",
      body: "Vá até a ferramenta Extrair páginas do PDF no navegador. Ela roda no seu aparelho, sem upload e sem conta.",
    },
    {
      title: "Escolha o PDF",
      body: "Arraste o arquivo até a área de soltar ou clique para escolhê-lo. A ferramenta carrega o total de páginas para você ser preciso.",
    },
    {
      title: "Liste as páginas que quer manter",
      body: "Informe as páginas e os intervalos a manter — por exemplo, 1, 3-7, 9. As indesejadas não são listadas e, por isso, não aparecem no resultado.",
    },
    {
      title: "Gere o PDF limpo",
      body: "Rode a extração. A ferramenta monta um arquivo novo apenas com as páginas mantidas, na ordem certa.",
    },
    {
      title: "Confira e salve",
      body: "Abra o novo PDF, confirme que as páginas indesejadas sumiram e que nada importante foi junto, e salve com um nome claro.",
    },
  ],
  tips: [
    "Remover páginas mantendo o resto é o método confiável no navegador — você descreve o que quer, não o que apagar, o que evita escorregões de uma página a mais ou a menos.",
    "Fique de olho nas páginas em branco de scanner. O alimentador costuma inserir uma folha vazia entre originais frente e verso; são justamente as mais fáceis de esquecer.",
    "Remover página também é um passo de privacidade. Anotações internas, preços que você não pretendia mostrar ou dados de um destinatário anterior podem estar escondidos em páginas que você não precisa enviar.",
    "Confira os números no próprio documento. Uma capa pode deslocar a contagem, de modo que a “página 5” na sua cabeça seja a página 6 no arquivo.",
    "Guarde o original. Se você descartar sem querer uma página necessária, a origem intocada está ali para refazer.",
  ],
  mobileNote:
    "Cortar uma página perdida antes de encaminhar um documento pelo celular são poucos toques no app PDF Editor, que exclui páginas diretamente e funciona offline — assim a folha de rosto ou a página em branco nunca entra na cópia que você envia.",
  faq: [
    {
      q: "Como faço para excluir páginas com uma ferramenta de navegador?",
      a: "Mantenha as páginas que você quer, com a ferramenta Extrair páginas do PDF. Ao listar só as que ficam, as indesejadas simplesmente não entram no arquivo novo — um jeito limpo de remover páginas sem uma etapa de exclusão.",
    },
    {
      q: "O meu arquivo original vai ser alterado?",
      a: "Não. A ferramenta cria um PDF novo e deixa a origem intocada, então um erro é fácil de desfazer recomeçando.",
    },
    {
      q: "O arquivo é enviado para algum lugar?",
      a: "Não. Tudo roda no seu navegador, no seu aparelho, o que importa quando as páginas que você está removendo contêm informação sensível.",
    },
    {
      q: "Dá para remover páginas não consecutivas?",
      a: "Dá. Mantenha uma mistura de páginas avulsas e intervalos, como 1, 4, 8-10, e toda página que você não listou é descartada.",
    },
    {
      q: "E se eu quiser apagar as páginas diretamente?",
      a: "O app PDF Editor permite tocar e excluir páginas específicas, o que algumas pessoas acham mais intuitivo que a abordagem de manter o que interessa.",
    },
  ],
  related: [
    { label: "Extrair páginas do PDF — mantenha só o que interessa", path: "/extract-pdf-pages" },
    { label: "Dividir PDF — separe por intervalo", path: "/split-pdf" },
    { label: "Como extrair páginas de um PDF", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "Como organizar arquivos PDF", path: "/guides/how-to-organize-pdf-files" },
  ],
  parentHub: { label: "Extrair páginas do PDF", path: "/extract-pdf-pages" },
};

export default content;
