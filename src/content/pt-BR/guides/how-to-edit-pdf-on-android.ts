import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-edit-pdf-on-android",
  h1: "Como editar um PDF no Android (guia 2026)",
  description:
    "Edite PDFs no Android: altere o texto, insira páginas e assine documentos. Instruções claras, passo a passo, com o app PDF Editor.",
  updated: "2026-05-11",
  intro: [
    "O Android lida razoavelmente bem com PDFs de fábrica — mas só para leitura. Na hora de corrigir um erro de digitação, trocar uma imagem ou reordenar páginas, o visualizador nativo chega ao limite e a saída de sempre é subir o arquivo para um site. Existe um caminho mais rápido: um editor nativo que roda no seu celular.",
    "Este guia usa o app PDF Editor no Android. O mesmo fluxo funciona em tablets e em Chromebooks com o ambiente Android. Você vai precisar do Android 9 ou superior. Quase todos os passos são iguais aos do iPhone, mas o Storage Access Framework do Android muda a forma de importar e salvar arquivos.",
    "Cada passo mostra onde tocar, incluindo as pequenas diferenças entre celulares e tablets. Onde o Android difere do iOS — seletor de arquivos, integração com o Drive, botão de voltar — nós avisamos.",
  ],
  steps: [
    {
      title: "Instale o PDF Editor pelo Google Play",
      body: "Procure por “PDF Editor” e escolha o publicado pela hrhelperg. Instale e abra. Não é preciso criar conta.",
    },
    {
      title: "Abra um PDF",
      body: "Toque no botão + na tela inicial. Aparece a janela do Storage Access Framework do Android — escolha o PDF no app Arquivos, no Google Drive, no OneDrive, no Dropbox ou em qualquer nuvem conectada. Também dá para tocar em um PDF dentro do Gmail ou de qualquer app e escolher o PDF Editor para abrir.",
    },
    {
      title: "Edite o texto",
      body: "Toque em um parágrafo. Aparece uma caixa de edição azul. Digite para substituir ou inserir texto. O app mantém a fonte e a cor existentes, para o layout não quebrar.",
    },
    {
      title: "Troque uma imagem",
      body: "Toque em uma imagem para destacá-la. Toque no ícone de troca e escolha a substituta na galeria ou nos arquivos. Arraste os cantos para redimensionar sem distorcer a proporção.",
    },
    {
      title: "Insira uma página nova",
      body: "Toque no ícone de páginas para ver as miniaturas. Use o botão + entre as miniaturas para inserir uma página em branco ou importar uma imagem como nova página.",
    },
    {
      title: "Preencha os campos do formulário",
      body: "PDFs com campos interativos são destacados automaticamente. Toque em um campo, digite e toque em Concluir. O teclado se adapta ao tipo do campo (texto, número, data).",
    },
    {
      title: "Assine o documento",
      body: "Toque na ferramenta Assinar, desenhe com o dedo ou com a caneta e posicione a assinatura. Salve para os próximos usos — você não vai precisar desenhar de novo.",
    },
    {
      title: "Salve como um arquivo novo",
      body: "Toque em Concluir e depois em “Salvar como” para ficar com o original e com a cópia editada. O seletor de arquivos do Android deixa salvar no app Arquivos, no Drive ou em qualquer nuvem conectada.",
    },
  ],
  tips: [
    "Em tablets grandes, ative a tela dividida e coloque dois PDFs lado a lado para comparar rápido.",
    "Se você tem uma S Pen, mude a entrada para “Somente caneta” no modo de edição — a rejeição de palma fica bem melhor.",
    "Use nomes de arquivo descritivos antes de salvar — “Contrato-Assinado-2026-05-11.pdf” é muito mais útil que “Documento(1).pdf” quando você for procurar depois.",
    "Fixe o PDF Editor na sua folha de compartilhamento mantendo o dedo sobre ele depois do primeiro uso — ele passa a aparecer no topo.",
    "Se a edição ficar lenta em um aparelho antigo, feche os apps em segundo plano; a renderização de PDF agradece a memória livre.",
  ],
  mobileNote:
    "O Storage Access Framework do Android é a forma certa de abrir arquivos — ele concede acesso permanente sem copiar o arquivo para o armazenamento interno do app. Ou seja, as edições são salvas direto no Drive ou no OneDrive, e não em uma cópia duplicada.",
  faq: [
    {
      q: "Funciona em versões antigas do Android?",
      a: "Oficialmente, do Android 9 em diante. Aparelhos mais antigos podem instalar o app, mas não recebem os recursos mais recentes (OCR aprimorado, filtros de digitalização).",
    },
    {
      q: "Dá para abrir PDFs protegidos por senha?",
      a: "Dá. Digite a senha quando ela for pedida. O app mantém o documento criptografado durante a edição e o recriptografa ao salvar, se você quiser.",
    },
    {
      q: "E a integração com o Google Drive?",
      a: "Abra e salve direto no Drive pelo seletor de arquivos do sistema. As edições salvas de volta no Drive sobrescrevem o original (ou viram um arquivo novo, conforme a sua escolha).",
    },
    {
      q: "As edições sincronizam com o meu computador?",
      a: "Se você salvou em uma nuvem (Drive, OneDrive, Dropbox), o arquivo editado sincroniza sozinho com os seus outros aparelhos. Arquivos salvos só localmente ficam no celular.",
    },
    {
      q: "Funciona sem internet?",
      a: "Funciona. A edição acontece inteiramente no aparelho. A sincronização com a nuvem só entra em ação quando você salva em um caminho na nuvem.",
    },
  ],
  related: [
    { label: "Editor de PDF — visão geral", path: "/pdf-editor" },
    {
      label: "Como editar um PDF no iPhone",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    { label: "Como comprimir um PDF", path: "/guides/how-to-compress-pdf" },
  ],
  parentHub: { label: "Editor de PDF", path: "/pdf-editor" },
};

export default content;
