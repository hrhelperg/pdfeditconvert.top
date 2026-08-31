import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-convert-pdf-to-word",
  h1: "Como converter um PDF em Word (DOCX editável)",
  description:
    "Extraia o texto de um PDF para um documento do Word editável, no navegador. O que converte bem, o que precisa de ajuste e por que digitalizações não funcionam.",
  updated: "2026-05-23",
  intro: [
    "Quase todo mundo que quer “converter um PDF em Word” quer, na verdade, uma coisa só: o texto de volta, em um documento que dê para editar. Talvez o .docx original tenha se perdido, talvez um colega só tenha mandado o PDF, ou talvez você precise tirar algumas cláusulas de um contrato sem redigitar. Isso é um trabalho de extração de texto, e é mais rápido do que parece.",
    "Este guia usa a ferramenta gratuita PDF para Word, que roda inteiramente no seu navegador — o arquivo nunca é enviado. Ela lê a camada de texto do PDF e entrega um .docx que você abre no Word, no Google Docs, no Pages ou no LibreOffice. O que ela não faz é reconstruir o layout original pixel a pixel, e vale saber disso de antemão para o resultado não surpreender.",
    "Abaixo estão o fluxo prático, os tipos de PDF que convertem bem e os casos honestos em que você vai precisar arrumar depois ou partir para outra abordagem.",
  ],
  steps: [
    {
      title: "Abra a ferramenta PDF para Word",
      body: "Vá até a ferramenta PDF para Word. Nada para instalar, sem conta — o conversor carrega no navegador e processa o arquivo no seu próprio aparelho.",
    },
    {
      title: "Escolha o PDF",
      body: "Arraste o PDF até a área de soltar ou clique para selecioná-lo. Use um PDF com texto — aquele em que você consegue selecionar e copiar o conteúdo em qualquer visualizador. Se o texto não fica destacado quando você tenta selecionar, o arquivo é uma digitalização e não vai converter (veja as limitações mais abaixo).",
    },
    {
      title: "Rode a conversão",
      body: "Clique em Converter para Word. A ferramenta percorre a camada de texto do PDF e a reconstrói como um .docx corrido. Em um documento comum de várias páginas, isso leva poucos segundos.",
    },
    {
      title: "Baixe o .docx",
      body: "O arquivo do Word é baixado automaticamente. Abra no editor que preferir — o texto chega como parágrafos editáveis que você pode reorganizar à vontade.",
    },
    {
      title: "Reaplique a formatação",
      body: "Títulos, negrito, colunas e espaçamento costumam pedir uma passada manual. Marque os títulos com os estilos do seu editor, refaça as tabelas e o documento volta a ser seu.",
    },
    {
      title: "Reinsira as imagens, se precisar",
      body: "A extração de texto não leva as imagens junto. Se o original tinha um logotipo, um gráfico ou uma foto de que você precisa, coloque de volta a partir do PDF de origem — exportando a página como imagem, se for o caso.",
    },
  ],
  tips: [
    "Confira primeiro se o texto é selecionável: se você não consegue destacar o texto no PDF, ele é uma imagem digitalizada e a extração não vai devolver nada útil.",
    "Documentos simples de uma coluna (cartas, comunicados, relatórios sem firula) convertem melhor. PDFs muito diagramados, com várias colunas e notas de rodapé, saem como um fluxo legível que você vai querer arrumar.",
    "Não espere que as tabelas cheguem intactas — elas costumam virar sequências de texto. Refaça as tabelas importantes no seu editor em vez de brigar com a versão extraída.",
    "Deixe o PDF original aberto ao lado enquanto reformata. É muito mais rápido olhar a fonte do que adivinhar a estrutura pretendida.",
    "Se você só precisa de algumas frases, copie direto de um visualizador de PDF em vez de converter o arquivo inteiro — a conversão serve para quando você precisa recuperar quase todo o documento.",
  ],
  mobileNote:
    "Trabalhando pelo celular? O app PDF Editor converte e edita documentos na correria e, diferente do navegador, ele consegue rodar reconhecimento de texto em páginas digitalizadas — útil quando o PDF que chegou é, na verdade, a foto de uma impressão, e não um documento digital.",
  faq: [
    {
      q: "O arquivo do Word vai ficar igualzinho ao PDF?",
      a: "Não, e nenhuma ferramenta honesta deveria prometer isso. Esta é uma conversão de texto: fontes, colunas, espaçamento exato e imagens não são reproduzidos. Você recupera as palavras como parágrafos editáveis e reaplica a formatação no seu editor.",
    },
    {
      q: "Apareceu “nenhum texto encontrado” — o que houve?",
      a: "O seu PDF é quase certamente uma digitalização ou um arquivo só de imagem, sem camada de texto. Ferramentas de navegador não conseguem ler texto de dentro de uma imagem. O app PDF Editor consegue rodar reconhecimento de texto em digitalizações, e esse é o caminho nesse caso.",
    },
    {
      q: "Meu documento é enviado para algum servidor?",
      a: "Não. A extração roda localmente no seu navegador, então o PDF nunca sai do seu dispositivo. Isso torna a ferramenta segura para contratos e outros arquivos sensíveis.",
    },
    {
      q: "Que formato eu recebo de volta?",
      a: "Um .docx padrão, que abre no Microsoft Word, no Google Docs, no Apple Pages e no LibreOffice. Você pode reexportá-lo em PDF depois, se precisar.",
    },
    {
      q: "Dá para converter de volta em PDF quando eu terminar de editar?",
      a: "Dá — use a ferramenta Word para PDF para transformar o .docx finalizado em um PDF limpo e pronto para compartilhar.",
    },
  ],
  related: [
    { label: "PDF para Word — converta no navegador", path: "/pdf-to-word" },
    { label: "Word para PDF — a conversão inversa", path: "/word-to-pdf" },
    { label: "Como converter Word em PDF", path: "/guides/how-to-convert-word-to-pdf" },
    { label: "PDF ou DOCX — qual formato usar", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "Conversor de PDF", path: "/pdf-converter" },
};

export default content;
