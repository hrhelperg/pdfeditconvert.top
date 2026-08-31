import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-pdfs-on-phone",
  h1: "Como organizar seus PDFs no celular",
  description:
    "Evite que os PDFs do celular virem bagunça: renomeie, separe em pastas, sincronize com a nuvem e libere espaço. Uma rotina de manutenção que funciona.",
  updated: "2026-05-23",
  intro: [
    "PDFs se acumulam no celular mais rápido que em qualquer outro lugar. Anexos de e-mail, digitalizações, downloads, fotos convertidas — tudo empilha na pasta de downloads ou no app Arquivos com nomes tipo “Documento(3).pdf”, até você não achar mais o que precisa na hora que precisa. Organizar não é glamouroso, mas dez minutos de rotina economizam uma hora de busca desesperada depois.",
    "Este guia é uma rotina prática de manutenção para os PDFs do seu iPhone ou Android: nomeá-los para serem encontrados, separá-los em pastas que fazem sentido, sincronizar os importantes e limpar os devoradores de espaço. Ele se apoia no app Arquivos do seu celular e no app PDF Editor para o trabalho nos documentos.",
    "A meta é um celular em que você põe a mão em qualquer documento em segundos e em que o armazenamento não some silenciosamente dentro de digitalizações esquecidas de 40 MB.",
  ],
  steps: [
    {
      title: "Renomeie os arquivos assim que chegarem",
      body: "No momento em que salvar um PDF, dê a ele um nome de verdade — “Contrato-assinado-2026-05.pdf”, não “scan_0007.pdf”. Um nome descritivo é o que torna o arquivo encontrável semanas depois.",
    },
    {
      title: "Monte algumas pastas sensatas",
      body: "No app Arquivos, crie pastas que combinem com o seu jeito de pensar — Recibos, Contratos, Formulários, Trabalho. Um punhado de pastas claras é melhor que uma pilha gigante.",
    },
    {
      title: "Sincronize os importantes com a nuvem",
      body: "Mova os documentos que você não pode perder para o iCloud Drive, o Google Drive ou o OneDrive, para eles sobreviverem a um celular perdido ou trocado — e abrirem nos seus outros aparelhos.",
    },
    {
      title: "Ajuste os próprios documentos",
      body: "Use o app PDF Editor para juntar arquivos relacionados, descartar páginas em branco e endireitar digitalizações deitadas, para cada documento guardado ser limpo, e não um despejo bruto.",
    },
    {
      title: "Comprima os devoradores de espaço",
      body: "Digitalizações grandes consomem armazenamento. Comprima as que você vai guardar mas não precisa em resolução cheia, e o seu espaço para de encher misteriosamente.",
    },
    {
      title: "Descarte o que não é mais necessário",
      body: "Apague duplicatas e arquivos avulsos que você já enviou. Esvazie a pasta de itens apagados de tempos em tempos, para o espaço liberado realmente voltar.",
    },
  ],
  tips: [
    "Renomeie na chegada, não “depois”. O depois nunca chega, e o resultado é uma pasta de “Documento(n).pdf”.",
    "Escolha um padrão de nome — “Tipo-Quem-Data” funciona bem — e os seus arquivos se ordenam e se encontram sozinhos.",
    "Sincronize tudo que você lamentaria perder. Um celular é bem mais fácil de perder que uma conta na nuvem, e arquivos sincronizados também abrem no seu computador.",
    "Comprimir digitalizações guardadas e pouco abertas recupera mais espaço do que apagar arquivos pequenos jamais vai recuperar.",
    "Uma arrumação mensal rápida é melhor que uma escavação arqueológica anual. Dez minutos com regularidade evitam que a pilha vire um projeto.",
  ],
  mobileNote:
    "O app PDF Editor é o lado documento da organização de PDFs no celular: juntar, aparar, girar, comprimir e renomear em um só lugar, offline, antes de arquivar. Combine com o app Arquivos para pastas e sincronização com a nuvem, e a pilha fica sob controle.",
  faq: [
    {
      q: "Onde ficam os PDFs no meu celular?",
      a: "No iPhone, no app Arquivos (geralmente em Downloads ou no iCloud Drive); no Android, normalmente em Downloads, pelo app Arquivos. Criar pastas em qualquer um deles mantém tudo organizado.",
    },
    {
      q: "Como devo nomear os meus arquivos PDF?",
      a: "Use um padrão consistente e descritivo com data, como “Tipo-Quem-Data.pdf”. Fazer isso conforme os arquivos chegam é o que os mantém encontráveis depois.",
    },
    {
      q: "Como evito que os PDFs comam o meu armazenamento?",
      a: "Comprima as digitalizações grandes que você vai guardar, apague duplicatas e arquivos avulsos já enviados e esvazie a pasta de itens apagados, para o espaço realmente voltar.",
    },
    {
      q: "Devo guardar os PDFs na nuvem ou no aparelho?",
      a: "Guarde os importantes na nuvem, para sobreviverem a um celular perdido e sincronizarem com os seus outros aparelhos. O armazenamento só local resolve para arquivos passageiros que você vai apagar logo.",
    },
    {
      q: "Dá para organizar os documentos em si, e não só os arquivos?",
      a: "Dá. O app PDF Editor junta, apara e conserta documentos, então o que você guarda fica limpo — veja o guia sobre organizar arquivos PDF para o fluxo completo.",
    },
  ],
  related: [
    { label: "Todas as ferramentas de PDF grátis", path: "/pdf-tools" },
    { label: "Como organizar arquivos PDF", path: "/guides/how-to-organize-pdf-files" },
    { label: "Como diminuir o tamanho de um PDF no iPhone", path: "/guides/how-to-make-pdf-smaller-on-iphone" },
    { label: "Como compartilhar um PDF pelo celular", path: "/guides/how-to-share-pdf-from-phone" },
  ],
  parentHub: { label: "Editor de PDF", path: "/pdf-editor" },
};

export default content;
