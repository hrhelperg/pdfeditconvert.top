import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-iphone",
  h1: "Como editar um PDF no iPhone (guia 2026)",
  description:
    "Edite o texto, insira imagens e reorganize as páginas de um PDF direto no iPhone. Passo a passo completo com o app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "Editar um PDF no iPhone já significou subir o arquivo para um site em que você mal confiava, ligar um Mac ou tirar print do trecho necessário e reanexar como imagem. Em 2026 nada disso é preciso. Com o app nativo certo dá para editar texto, trocar imagens, reordenar páginas, preencher formulários e assinar documentos — tudo no celular, em menos de um minuto.",
    "Este guia mostra os toques exatos com o app PDF Editor. Os mesmos padrões valem no iPad e na maioria dos editores de PDF atuais, então o passo a passo continua útil se você trocar de ferramenta depois. Você vai precisar do iOS 16 ou superior e do app PDF Editor instalado pela App Store.",
    "Vamos cobrir a abertura de um PDF vindo de qualquer origem (Arquivos, Mail, iCloud Drive, Google Drive), a edição do conteúdo e a exportação do resultado. Cada passo diz o que fazer, não o porquê — mas se algum ponto parecer difícil na tela, a seção de dicas no final traz os atalhos.",
  ],
  steps: [
    {
      title: "Instale e abra o PDF Editor",
      body: "Baixe pela App Store e abra o app. Não é preciso criar conta para começar a editar.",
    },
    {
      title: "Traga o PDF para o app",
      body: "Toque no botão + na tela inicial. Escolha a origem — Arquivos, iCloud Drive, a sua galeria de fotos ou “Procurar” para chegar às pastas do Google Drive e do OneDrive. Também dá para abrir qualquer PDF no Mail ou no Safari e escolher “Abrir no PDF Editor” na folha de compartilhamento.",
    },
    {
      title: "Edite o texto na própria página",
      body: "Toque em um parágrafo ou palavra. Aparece uma seleção azul. Edite direto na caixa de texto que surge. O app mantém a fonte, o tamanho e a cor originais, para o layout continuar intacto.",
    },
    {
      title: "Troque ou adicione uma imagem",
      body: "Toque em uma imagem existente para substituí-la pela galeria. Ou toque na ferramenta de imagem e posicione uma nova em qualquer ponto da página. Arraste os cantos para redimensionar.",
    },
    {
      title: "Reordene, exclua ou duplique páginas",
      body: "Toque no ícone de páginas para abrir a grade de miniaturas. Mantenha o dedo em qualquer página para movê-la. Toque em uma miniatura para duplicar ou excluir.",
    },
    {
      title: "Assine o documento",
      body: "Toque na ferramenta Assinar, desenhe a assinatura (ou use uma salva) e posicione onde ela deve ficar. A assinatura é um objeto normal do PDF, então dá para movê-la ou redimensioná-la depois.",
    },
    {
      title: "Preencha os campos do formulário",
      body: "Se o PDF tiver campos de formulário, toque em cada um para preencher. O app identifica o tipo do campo — texto, caixa de seleção, lista — e mostra o teclado adequado.",
    },
    {
      title: "Salve e compartilhe",
      body: "Toque em Concluir. Escolha “Salvar” para sobrescrever o original ou “Salvar como” para ficar com os dois. A folha de compartilhamento então permite enviar por Mail, Mensagens, AirDrop ou qualquer app instalado.",
    },
  ],
  tips: [
    "Dê zoom com os dedos antes de editar textos pequenos — isso melhora muito a precisão.",
    "Toque duas vezes em uma palavra para selecionar só ela; três vezes para selecionar a linha inteira.",
    "Use o Apple Pencil no iPad: as assinaturas ficam visivelmente mais suaves do que com o dedo.",
    "Ative a integração com o app Arquivos em Ajustes → PDF Editor para o app aparecer em todas as folhas de compartilhamento.",
    "Mantenha o dedo na seta de voltar da tela de edição para percorrer as últimas alterações quando o desfazer simples não bastar.",
  ],
  mobileNote:
    "A integração com o app Arquivos do iOS faz diferença: ative-a nos Ajustes para o PDF Editor aparecer em todas as folhas de compartilhamento dos outros apps. A partir daí, editar um PDF que chegou no Mail ou no Slack é um toque.",
  faq: [
    {
      q: "Dá para editar um PDF digitalizado no iPhone?",
      a: "Dá para anotar, assinar e reorganizar as páginas. Para editar o texto de uma página digitalizada, rode o OCR antes — o app faz isso em poucos segundos.",
    },
    {
      q: "O app é grátis?",
      a: "É, para a edição do dia a dia. Alguns recursos avançados são liberados na versão Pro.",
    },
    {
      q: "Funciona com o Apple Pencil?",
      a: "Funciona. A caneta serve para assinaturas, anotações à mão livre e grifos, com um toque bem melhor que o do dedo.",
    },
    {
      q: "Dá para editar um PDF protegido por senha?",
      a: "Digite a senha quando ela for pedida na abertura. Depois de desbloqueado, a edição funciona normalmente. Você pode reaplicar a senha ao salvar.",
    },
    {
      q: "Onde o arquivo editado vai parar?",
      a: "Onde você salvá-lo: no app Arquivos, no iCloud Drive, no Google Drive, na sua galeria de fotos ou direto em um rascunho de e-mail.",
    },
  ],
  related: [
    { label: "Editor de PDF — visão geral", path: "/pdf-editor" },
    {
      label: "Como editar um PDF no Android",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Como assinar um PDF pelo celular", path: "/sign-pdf" },
  ],
  parentHub: { label: "Editor de PDF", path: "/pdf-editor" },
};

export default content;
