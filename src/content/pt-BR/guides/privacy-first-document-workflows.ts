import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "privacy-first-document-workflows",
  h1: "Fluxos de documentos com foco em privacidade (do início ao fim, sem upload)",
  description:
    "Um fluxo completo de documentos — capturar, editar, assinar, enviar, arquivar — que mantém os arquivos nos seus dispositivos e fora de servidores de terceiros. O formato realista e as ferramentas.",
  updated: "2026-05-29",
  intro: [
    "A maioria dos fluxos de documentos vaza. Você digitaliza um papel sigiloso com um app, sobe para comprimir em um site, manda por e-mail passando por uma ferramenta de “melhorar” e termina com três ou quatro servidores guardando cópias de algo que você achava que continuava seu. Cada etapa é cômoda; o custo acumulado em privacidade é grande e invisível.",
    "Um fluxo com foco em privacidade não recusa ferramentas modernas — ele escolhe as que não movem os seus arquivos. A captura acontece na sua câmera. A compressão e a edição acontecem no seu navegador. A assinatura acontece em um app no seu celular. A transferência acontece por um canal em que você confia. Em nenhum momento o documento mora no servidor de um desconhecido.",
    "Este guia descreve o formato de ponta a ponta, as ferramentas que encaixam em cada etapa e onde o processamento local realmente não dá conta (um conjunto menor do que a maioria imagina). É o fluxo realista com foco em privacidade, não o absolutista.",
  ],
  steps: [
    {
      title: "Captura: digitalize localmente com o celular",
      body: "A ferramenta Digitalizar para PDF no celular roda a câmera e a detecção de página no próprio aparelho. Sem upload, sem processamento na nuvem. O PDF que você gera nasce e permanece local até você decidir compartilhar.",
    },
    {
      title: "Edite e ajuste em uma aba do navegador",
      body: "Comprimir PDF, Organizar páginas do PDF, Extrair páginas do PDF, Girar PDF, Marca d'água em PDF — todas rodam no navegador. O arquivo é lido por JavaScript na sua máquina; o servidor nunca vê o conteúdo.",
    },
    {
      title: "Assine com uma assinatura de verdade, localmente",
      body: "A ferramenta Assinar PDF ou o app PDF Editor capturam uma assinatura desenhada no seu aparelho e a incorporam ao arquivo. Nenhuma plataforma de assinatura de terceiros vê o documento.",
    },
    {
      title: "Compartilhe por um canal confiável",
      body: "AirDrop, Signal, e-mail criptografado, mensageiro de ponta a ponta. O canal criptografa a transferência; quem recebe pega o arquivo sem que ele passe por um intermediário capaz de lê-lo.",
    },
    {
      title: "Arquive em armazenamento criptografado",
      body: "Disco local com criptografia completa, ou backup em nuvem de conhecimento zero. Não guarde PDFs sigilosos em nuvem comum — isso é um servidor lendo os seus arquivos.",
    },
    {
      title: "Revise e apague em um ritmo fixo",
      body: "A cada trimestre, passe pelos PDFs sigilosos. Apague o que você não precisa mais. Cada arquivo sensível mantido é um pequeno risco contínuo; reduzir o estoque reduz a exposição.",
    },
  ],
  tips: [
    "Capturar, editar e assinar podem acontecer em um único aparelho. Quanto menos saltos entre dispositivos, menor a superfície de vazamento.",
    "Verifique se uma ferramenta “de navegador” realmente roda localmente antes de confiar. A aba de rede das ferramentas de desenvolvedor é a checagem mais rápida.",
    "Coloque senha nos PDFs sigilosos mesmo quando for compartilhar por canais criptografados. Defesa em camadas.",
    "Evite serviços de “mandar link” em material sensível. O link é um identificador do lado do servidor; o arquivo mora no disco de outra pessoa.",
    "Não imprima PDFs sigilosos sem necessidade. A fila de impressão e o papel são duas cópias adicionais que você passa a ter de controlar.",
  ],
  mobileNote:
    "Fluxos com foco em privacidade são mais fáceis no celular do que as pessoas imaginam. O app PDF Editor cuida de captura, edição, assinatura e compartilhamento localmente no iOS e no Android, então um documento sigiloso vai do papel até quem recebe sem nunca tocar um servidor de terceiros.",
  faq: [
    {
      q: "Um fluxo real consegue mesmo ficar todo local?",
      a: "Na maioria das etapas, sim. Capturar, comprimir, editar, assinar e transferir de forma comum acontecem sem upload. Algumas operações (OCR de alta qualidade, ocultação avançada) às vezes precisam de servidor; escolha essas ferramentas com cuidado se precisar delas.",
    },
    {
      q: "Isso não é paranoia?",
      a: "Não em material sensível. O fluxo de subir tudo funcionava quando os documentos eram menos sensíveis e os vazamentos mais raros. As duas coisas mudaram. O fluxo com foco em privacidade leva o mesmo tempo depois que vira hábito.",
    },
    {
      q: "Como sei que uma ferramenta de navegador é realmente local?",
      a: "Abra as ferramentas de desenvolvedor, na aba de rede, e adicione um arquivo. Se não aparecer um upload grande de saída, ela está processando localmente. As ferramentas deste site seguem esse padrão.",
    },
    {
      q: "E os backups?",
      a: "Backup em nuvem de conhecimento zero (o provedor não consegue ler os seus arquivos) resolve. Backup em nuvem comum de PDFs sigilosos não é privado — o provedor consegue ler tudo.",
    },
    {
      q: "Onde o fluxo quebra?",
      a: "Em dois lugares: quando um fluxo exige uma plataforma paga específica (setores regulados) e quando quem recebe usa um fluxo com upload do lado de lá. A privacidade depende dos dois lados.",
    },
  ],
  related: [
    { label: "Ferramentas de PDF — no navegador, sem upload", path: "/pdf-tools" },
    { label: "Ferramentas de PDF que respeitam a privacidade", path: "/guides/privacy-first-pdf-tools" },
    { label: "Processamento local de PDF no navegador, explicado", path: "/guides/local-browser-pdf-processing-explained" },
    { label: "Vantagens de processar documentos no navegador", path: "/guides/browser-based-document-processing-benefits" },
  ],
  parentHub: { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
};

export default content;
