import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-scan-notes-to-pdf",
  h1: "Como digitalizar anotações à mão em PDF (limpo e pesquisável)",
  description:
    "Transforme páginas de anotações de aula feitas à mão em PDFs limpos de várias páginas com a câmera do celular. Os ajustes que geram uma digitalização legível de primeira.",
  updated: "2026-05-29",
  intro: [
    "Anotação de aula à mão continua sendo o jeito mais rápido de capturar uma aula, e a maioria dos estudantes a deixa no papel em vez de digitalizar — porque as digitalizações costumam sair ruins. Páginas tortas, cinza lavado, arquivos inchados e o tempo gasto refazendo as ruins. Somando ao longo de um semestre, é por isso que as anotações ficam no caderno.",
    "Conseguir digitalizações limpas com o celular é mais questão de técnica e ajustes do que de aplicativo. Luz uniforme, enquadramento quadrado, contraste ligado, tons de cinza em vez de cores e detecção de bordas, se a sua ferramenta tiver. Uma página bem capturada fica mais parecida com um scanner de mesa do que com um instantâneo.",
    "Este guia percorre a técnica do início ao fim — as condições do ambiente que geram boas digitalizações, a abordagem página a página, o fluxo de várias páginas e o que fazer com o PDF depois de pronto. Ele presume que você tem um celular e quer um PDF limpo de várias páginas sem comprar um scanner.",
  ],
  steps: [
    {
      title: "Coloque a página sobre um fundo contrastante",
      body: "Papel pautado sobre uma mesa escura. Papel branco sobre um pano escuro. Qualquer coisa que deixe a borda da página óbvia para a câmera e para o recorte automático. Evite reflexo; luz uniforme ganha de luz forte.",
    },
    {
      title: "Segure o celular paralelo à página",
      body: "A câmera deve ficar reta acima da página, sem inclinação. A inclinação gera distorção que a correção automática conserta, mas nunca tão bem quanto uma foto quadrada.",
    },
    {
      title: "Use um app de digitalização com detecção de bordas",
      body: "A ferramenta Digitalizar para PDF ou o fluxo de digitalização do app PDF Editor detecta a borda da página e recorta sozinho. Fotos comuns de celular não fazem isso; um app de digitalização entrega um resultado parecido com o de scanner de mesa.",
    },
    {
      title: "Mude para tons de cinza ou preto e branco",
      body: "Digitalizações coloridas de tinta preta em papel branco são maiores, mais ruidosas e mais macias. Tons de cinza geram digitalizações mais nítidas, menores e mais legíveis. O preto e branco é ainda menor, mas menos flexível depois.",
    },
    {
      title: "Capture cada página e depois junte",
      body: "Os fluxos de digitalização de várias páginas capturam página a página e combinam tudo em um PDF automaticamente. Se você capturou em separado, a ferramenta Juntar PDF combina na ordem.",
    },
    {
      title: "Recorte, gire e reordene na limpeza",
      body: "Use a ferramenta Organizar páginas do PDF se alguma página saiu fora de sequência. Use a Girar PDF nas fotos deitadas. Gaste um minuto arrumando; o você do futuro agradece ao você do presente.",
    },
  ],
  tips: [
    "Faça todas as capturas antes de começar a limpeza — trocar de modo o tempo todo mata o ritmo.",
    "Se a luz estiver desigual, uma folha de papel branco segurada acima da página, como refletor, melhora muito o contraste.",
    "Não recorte apertado demais. Deixar uma margem pequena em volta da borda faz o documento parecer menos amador.",
    "Comprima o PDF final antes de arquivar. Anotações cheias de digitalização são pesadas; versões comprimidas são mais fáceis de compartilhar depois.",
    "Acrescente uma capa (digitada, com nome da disciplina e data) antes de juntar. A coleção passa a se explicar sozinha no seu arquivo.",
  ],
  mobileNote:
    "Digitalizar anotações é uma das coisas em que o celular realmente faz melhor que um scanner de mesa no uso casual. O fluxo de digitalização do app PDF Editor roda inteiramente no celular — captura, detecção de bordas, contraste e junção de várias páginas —, gerando um PDF limpo sem passar por servidor nenhum.",
  faq: [
    {
      q: "Anotações manuscritas digitalizadas ficam pesquisáveis?",
      a: "Só se a ferramenta rodar OCR nelas — convertendo a imagem da escrita em texto pesquisável. O OCR em letra à mão é menos confiável que em texto impresso; a qualidade depende da caligrafia e da digitalização.",
    },
    {
      q: "Qual é o melhor ajuste da câmera do celular para digitalizar anotações?",
      a: "Use o modo tons de cinza ou preto e branco do app de digitalização, com contraste automático. Não confie no app de câmera padrão — as fotos dele são maiores, com menos contraste e mais difíceis de ler.",
    },
    {
      q: "Quantas páginas por sessão de digitalização?",
      a: "O que você escreveu de uma vez. Digitalizar toda semana, ou depois de cada aula, é mais fácil que deixar um semestre acumular.",
    },
    {
      q: "Devo digitalizar em cores?",
      a: "Só se as suas anotações usam cor (marca-texto, diagramas). Fora isso, tons de cinza ou preto e branco é mais nítido e menor.",
    },
    {
      q: "E se a página estiver amassada ou manchada?",
      a: "O contraste automático limpa boa parte do envelhecimento do papel. Amassados fortes costumam transparecer; considere refazer a foto ou aceitar assim, se for material de estudo pessoal.",
    },
  ],
  related: [
    { label: "Digitalizar para PDF — captura com detecção de bordas", path: "/scan-to-pdf" },
    { label: "Juntar PDF — combine digitalizações de várias páginas", path: "/merge-pdf" },
    { label: "Como digitalizar documentos em PDF com o celular", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Fluxo de PDF para universitários", path: "/guides/pdf-workflow-for-university-students" },
  ],
  parentHub: { label: "Digitalizar para PDF", path: "/scan-to-pdf" },
};

export default content;
