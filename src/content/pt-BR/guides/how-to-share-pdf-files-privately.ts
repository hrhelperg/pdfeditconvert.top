import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-share-pdf-files-privately",
  h1: "Como compartilhar arquivos PDF com privacidade",
  description:
    "O jeito privado de compartilhar um PDF não passa por um site público de “ferramentas de PDF”. Os canais que mantêm o documento entre você e o destinatário, com ajustes sensatos.",
  updated: "2026-05-29",
  intro: [
    "A primeira coisa que muita gente faz quando quer compartilhar um PDF é subi-lo para uma ferramenta que promete compartilhamento “privado” — e essa ferramenta, muitas vezes, é o maior risco de privacidade de toda a corrente. Serviços gratuitos de compartilhamento costumam reter os arquivos por algum tempo, às vezes indexá-los, e dependem de um servidor com o qual você não tem nenhuma relação.",
    "Compartilhar com privacidade não é complicado; é escolher o canal certo. Transferência direta (AirDrop, cabo), mensageiro com criptografia de ponta a ponta, e-mail criptografado ou arquivos protegidos por senha em um e-mail comum. Cada um serve a uma situação. Nenhum exige subir nada para um desconhecido.",
    "Este guia percorre as opções realistas por nível de sensibilidade e caso de uso, com as trocas de cada uma. A meta são documentos compartilhados que ficam entre você e quem recebe, sem um terceiro como intermediário evitável.",
  ],
  steps: [
    {
      title: "Para transferência no mesmo lugar, use AirDrop ou compartilhamento local",
      body: "Entre iPhones ou de iPhone para Mac: AirDrop. No Android: Compartilhamento por Proximidade. No mesmo computador: pasta compartilhada. O arquivo nunca toca a internet.",
    },
    {
      title: "Para destinatários confiáveis, use mensageiro com criptografia de ponta a ponta",
      body: "Signal, WhatsApp (com ressalvas), iMessage entre aparelhos Apple. O transporte em si é criptografado; o arquivo é decifrado apenas no aparelho de quem recebe. As plataformas veem metadados, não conteúdo.",
    },
    {
      title: "Para arquivos de baixa sensibilidade, o e-mail comum resolve",
      body: "O e-mail padrão não é criptografado, mas é praticamente seguro para a maioria dos documentos não sensíveis. O risco é a interceptação, algo raro em documentos comuns passando por grandes provedores.",
    },
    {
      title: "Para arquivos sensíveis por e-mail comum, coloque senha antes",
      body: "Aplique uma senha ao PDF antes de anexar. O e-mail leva o arquivo; a senha vai por outro canal (ligação, mensagem separada). Mesmo que o e-mail seja interceptado, o arquivo continua protegido.",
    },
    {
      title: "Para material muito sensível, use e-mail criptografado ou entrega segura",
      body: "ProtonMail, Tutanota ou o serviço de entrega segura da sua organização. Eles acrescentam criptografia real ao próprio canal, dispensando a etapa da senha por fora.",
    },
    {
      title: "Evite subir conteúdo sensível para serviços gratuitos de compartilhamento",
      body: "Ferramentas gratuitas que sobem o seu arquivo (compressores, junções, divisões) o mantêm no servidor delas, ainda que por pouco tempo. Em material sensível, use ferramentas de navegador que processam localmente antes de qualquer compartilhamento.",
    },
  ],
  tips: [
    "Não coloque a senha no mesmo e-mail do arquivo protegido. O sentido da senha é justamente defender contra a interceptação do e-mail.",
    "Confirme a identidade de quem recebe antes de compartilhar — golpes de phishing às vezes se passam por clientes para extrair PDFs sensíveis.",
    "Em compartilhamentos recorrentes com a mesma pessoa, combinem um canal único e mantenham. É na troca de canal que os vazamentos acontecem.",
    "Não compartilhe por links públicos, a menos que o link seja de uso único. Links permanentes podem ser descobertos ou repassados.",
    "Depois de compartilhar, apague o arquivo de qualquer área temporária (pasta de downloads, disco de trabalho). Quanto menos cópias de material sensível, menor a superfície.",
  ],
  mobileNote:
    "A maior parte do compartilhamento privado hoje começa no celular. O app PDF Editor prepara os arquivos (comprimir, assinar, proteger com senha) localmente no iOS e no Android e depois entrega ao AirDrop, ao Signal ou ao seu e-mail — o arquivo fica no celular durante todo o preparo e só então segue direto para quem recebe.",
  faq: [
    {
      q: "Qual é o jeito mais simples de compartilhar com privacidade?",
      a: "AirDrop ou Compartilhamento por Proximidade quando você está perto da pessoa. Mensageiro com criptografia de ponta a ponta quando não está. Os dois mantêm o arquivo fora das mãos de servidores de terceiros.",
    },
    {
      q: "O WhatsApp é privado o bastante para documentos sensíveis?",
      a: "A criptografia de ponta a ponta protege o conteúdo; o WhatsApp ainda vê metadados (quem mandou o quê para quem). Na maioria dos casos isso basta; em material muito sensível, o Signal é a escolha mais limpa.",
    },
    {
      q: "Devo usar um serviço de link de compartilhamento?",
      a: "Só com compromissos explícitos de tratamento de dados e retenção curta. Em arquivos sensíveis, canais diretos são mais seguros.",
    },
    {
      q: "Como a senha do PDF se compara à criptografia do canal?",
      a: "A senha protege o próprio arquivo; a criptografia do canal protege o transporte. As duas têm valor; elas protegem contra ataques diferentes.",
    },
    {
      q: "Qual é a pior prática comum?",
      a: "Subir um PDF sensível para uma ferramenta gratuita de “converter” ou “comprimir” e depois mandar o resultado por e-mail. O upload é o momento em que os dados saem do seu controle. Use ferramentas de navegador que não fazem upload.",
    },
  ],
  related: [
    { label: "Segurança de PDF — proteja com senha e criptografia", path: "/pdf-security" },
    { label: "Como proteger arquivos PDF sigilosos", path: "/guides/how-to-protect-sensitive-pdf-files" },
    { label: "Como evitar enviar documentos sigilosos", path: "/guides/how-to-avoid-uploading-sensitive-documents" },
    { label: "Fluxos de documentos com foco em privacidade", path: "/guides/privacy-first-document-workflows" },
  ],
  parentHub: { label: "Segurança de PDF", path: "/pdf-security" },
};

export default content;
