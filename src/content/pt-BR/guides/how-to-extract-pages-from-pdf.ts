import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-extract-pages-from-pdf",
  h1: "Como extrair páginas de um PDF",
  description:
    "Tire páginas ou intervalos específicos de um PDF e salve num arquivo novo, no navegador. Perfeito para enviar só as páginas que a pessoa pediu.",
  updated: "2026-05-23",
  intro: [
    "Extrair páginas é a resposta para uma necessidade bem específica: alguém quer parte de um documento, não o documento inteiro. O banco precisa da página 3, o formulário precisa da folha de assinatura, a revisão da proposta trata só da seção de preços. Encaminhar o arquivo inteiro de 40 páginas dizendo “veja a página 12” é preguiçoso e, em qualquer coisa sensível, descuidado.",
    "Este guia usa a ferramenta gratuita Extrair páginas do PDF, que permite escolher as páginas desejadas e salvá-las como um PDF novinho — tudo no navegador, sem enviar nada. O original fica intocado; você recebe um arquivo limpo apenas com o que escolheu.",
    "É uma das operações mais úteis de PDF justamente porque também funciona como ferramenta de privacidade: você envia exatamente as páginas exigidas e nada além delas.",
  ],
  steps: [
    {
      title: "Abra a ferramenta Extrair páginas do PDF",
      body: "Vá até a ferramenta Extrair páginas do PDF no navegador. Ela roda inteiramente no seu aparelho — sem upload e sem conta.",
    },
    {
      title: "Escolha o PDF",
      body: "Arraste o arquivo até a área de soltar ou clique para selecioná-lo. A ferramenta carrega o total de páginas para você escolher com precisão.",
    },
    {
      title: "Escolha as páginas que quer",
      body: "Informe páginas avulsas ou intervalos — por exemplo, 3 e depois 8-10. Só as páginas listadas entram no arquivo novo.",
    },
    {
      title: "Gere o novo PDF",
      body: "Rode a extração. A ferramenta monta um PDF novo apenas com as páginas escolhidas, na ordem em que você indicou.",
    },
    {
      title: "Baixe e nomeie",
      body: "Salve o arquivo extraído com um nome que diga o que ele é — “Folha-de-assinatura.pdf” ou “Secao-de-precos.pdf”.",
    },
    {
      title: "Confira antes de enviar",
      body: "Abra o PDF novo e verifique se ele contém apenas as páginas pretendidas. Este é o momento de pegar um erro de uma página a mais antes que ele chegue a alguém.",
    },
  ],
  tips: [
    "Extraia quando quiser reunir algumas páginas em um arquivo novo; divida quando quiser quebrar o documento em vários arquivos. Ajuste a ferramenta ao objetivo.",
    "Extrair é uma vitória silenciosa de privacidade: mandar só as páginas relevantes significa nenhuma exposição acidental do resto do documento.",
    "Confira os números das páginas no próprio documento, não no índice do visualizador — capas e folhas inseridas podem deslocar a contagem em uma unidade.",
    "O original nunca é alterado, então você pode extrair conjuntos diferentes de páginas do mesmo arquivo quantas vezes precisar.",
    "Para remover páginas e ficar com o resto, extraia as páginas que você quer manter — é o jeito mais limpo de descartar algumas páginas indesejadas.",
  ],
  mobileNote:
    "Precisa devolver só a página assinada pelo celular? O app PDF Editor extrai e compartilha páginas específicas em poucos toques, offline — assim a página certa é enviada sem encaminhar o arquivo confidencial inteiro.",
  faq: [
    {
      q: "Qual é a diferença entre extrair e dividir?",
      a: "Extrair reúne as páginas escolhidas em um único arquivo novo. Dividir quebra um PDF em vários arquivos separados. Use extrair para juntar páginas específicas e dividir para separar um documento.",
    },
    {
      q: "Dá para escolher páginas não consecutivas?",
      a: "Dá. Liste páginas avulsas e intervalos juntos, como 1, 4, 9-12, e o novo PDF vai conter exatamente essas páginas nessa ordem.",
    },
    {
      q: "Extrair altera o original?",
      a: "Não. O PDF de origem fica intacto; a ferramenta cria um arquivo novo. Você pode rodar quantas extrações quiser a partir do mesmo original.",
    },
    {
      q: "Meu arquivo é enviado?",
      a: "Não. A extração roda no seu navegador, no seu aparelho, então documentos confidenciais continuam privados.",
    },
    {
      q: "Como faço para remover páginas em vez de mantê-las?",
      a: "Extraia as páginas que você quer manter — as indesejadas simplesmente não entram. É o caminho mais simples para descartar algumas páginas de um PDF.",
    },
  ],
  related: [
    { label: "Extrair páginas do PDF — no navegador", path: "/extract-pdf-pages" },
    { label: "Dividir PDF — separe por intervalo", path: "/split-pdf" },
    { label: "Como dividir um PDF em arquivos separados", path: "/guides/how-to-split-pdf-files" },
    { label: "Como remover páginas indesejadas de um PDF", path: "/guides/how-to-remove-unwanted-pages-from-pdf" },
  ],
  parentHub: { label: "Extrair páginas do PDF", path: "/extract-pdf-pages" },
};

export default content;
