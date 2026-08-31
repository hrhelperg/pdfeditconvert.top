import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-large-pdf-files",
  h1: "Como enviar arquivos PDF grandes",
  description:
    "Cinco formas confiáveis de enviar um PDF grande demais para o e-mail — comprimir, dividir, links na nuvem e mais — e como escolher entre elas.",
  updated: "2026-05-23",
  intro: [
    "O e-mail é onde os PDFs grandes vão para voltar. Os limites são reais e implacáveis — 25 MB no Gmail, cerca de 20 MB no Outlook, às vezes menos do lado de quem recebe — e um documento cheio de digitalização passa disso com facilidade. A solução não é um truque só; é conhecer as poucas opções confiáveis e saber qual serve ao seu arquivo e ao seu destinatário.",
    "Este guia apresenta os caminhos práticos, mais ou menos na ordem em que a maioria deveria tentar: reduzir, dividir ou compartilhar um link. Dois deles usam ferramentas gratuitas de navegador, que rodam no seu aparelho e não enviam nada; o terceiro é sobre escolher um método de compartilhamento que respeite o sigilo do documento.",
    "A meta é um arquivo que chegue inteiro e legível, sem você destruir a qualidade nem compartilhar demais por um serviço em que não confia.",
  ],
  steps: [
    {
      title: "Primeiro, tente comprimir",
      body: "Passe o arquivo pela ferramenta Comprimir PDF. Digitalizações e PDFs cheios de imagem costumam cair abaixo dos limites de e-mail em uma única passada, que é a solução mais simples possível.",
    },
    {
      title: "Se continuar grande, divida",
      body: "Use a ferramenta Dividir PDF para mandar o documento em dois ou três arquivos menores. Duas metades legíveis valem mais que um arquivo comprimido até virar papa.",
    },
    {
      title: "Em arquivos muito grandes, compartilhe um link na nuvem",
      body: "Suba para uma nuvem que você controla e mande o link. Isso contorna os limites de e-mail por completo e permite revogar o acesso depois — mas escolha um serviço em que você confie para documentos sensíveis.",
    },
    {
      title: "Confira o limite de quem recebe, não só o seu",
      body: "O seu provedor pode permitir um envio de 25 MB enquanto o da outra pessoa recusa qualquer coisa acima de 10 MB. Na dúvida, mire baixo ou use um link.",
    },
    {
      title: "Confirme que o que você vai mandar está no tamanho certo e limpo",
      body: "Seja qual for o caminho, abra o arquivo final antes — páginas corretas, qualidade legível e nada que não deveria estar ali.",
    },
  ],
  tips: [
    "Siga a ordem: comprimir, depois dividir, depois link. Cada etapa dá mais trabalho que a anterior, então pare assim que o arquivo conseguir sair.",
    "Um link na nuvem costuma ser a resposta honesta para arquivos realmente enormes — mas, em documentos confidenciais, escolha um serviço em que você confie e revogue o acesso quando não for mais necessário.",
    "A compressão rasteriza as páginas e remove o texto selecionável. Se quem recebe precisa copiar texto, mande o original por link em vez de um anexo muito comprimido.",
    "Dividir em limites naturais (capítulos, seções, assinado e não assinado) é mais útil para quem recebe do que dividir numa página qualquer.",
    "Não mande documentos sensíveis para um serviço gratuito de “arquivos grandes” que você nunca ouviu falar só para vencer um limite de tamanho — isso troca um incômodo pequeno por um risco real de privacidade.",
  ],
  mobileNote:
    "Quando o arquivo grande demais está no celular, o app PDF Editor comprime e divide offline e entrega o resultado direto ao seu app de e-mail ou de mensagens — assim você consegue mandar uma digitalização enorme de onde estiver, sem antes subir o arquivo para um serviço desconhecido.",
  faq: [
    {
      q: "Qual é o jeito mais fácil de mandar um PDF grande demais?",
      a: "Comprimir primeiro. Digitalizações e PDFs cheios de imagem frequentemente caem abaixo dos limites de e-mail em uma passada, o que evita dividir ou usar links.",
    },
    {
      q: "Quando devo dividir em vez de comprimir?",
      a: "Quando só a compressão não consegue deixar o arquivo pequeno o bastante sem arruinar a qualidade. Dois ou três arquivos legíveis são melhores que um degradado.",
    },
    {
      q: "Links na nuvem são seguros para documentos sensíveis?",
      a: "Podem ser, se você usar um serviço em que confia e revogar o acesso ao terminar. Evite serviços gratuitos e desconhecidos de “arquivos grandes” em qualquer coisa confidencial.",
    },
    {
      q: "Como sei se quem vai receber consegue abrir?",
      a: "O limite da outra pessoa pode ser menor que o seu. Na dúvida, comprima bem abaixo de 10 MB ou mande um link, em vez de arriscar uma devolução silenciosa.",
    },
    {
      q: "Comprimir para enviar prejudica o documento?",
      a: "A compressão tem perdas e remove o texto selecionável. Em documentos em que a qualidade ou o texto pesquisável importa, compartilhe o original por link em vez de esmagá-lo em um anexo.",
    },
  ],
  related: [
    { label: "Comprimir PDF — reduza para enviar", path: "/compress-pdf" },
    { label: "Dividir PDF — mande em partes", path: "/split-pdf" },
    { label: "Como reduzir o tamanho de um PDF para e-mail", path: "/guides/how-to-reduce-pdf-file-size-for-email" },
    { label: "Como compartilhar um PDF pelo celular", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Comprimir PDF", path: "/compress-pdf" },
};

export default content;
