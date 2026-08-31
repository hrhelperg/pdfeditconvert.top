import type {
  ContactContent,
  GuidesIndexContent,
  LegalContent,
  ToolsIndexContent,
} from "@/types/content";
import { PRIVACY_UPDATED } from "@/content/legal/privacy";
import { TERMS_UPDATED } from "@/content/legal/terms";

export const TOOLS_INDEX_PT_BR: ToolsIndexContent = {
  crumbLabel: "Ferramentas de PDF grátis",
  heroEyebrow: "Ferramentas de PDF grátis",
  heroH1: "Ferramentas de PDF no navegador — seus arquivos nunca saem do seu dispositivo.",
  heroHighlight: "nunca saem",
  heroLead:
    "Junte, divida, gire, marque e converta PDFs sem enviar nada. Todo o processamento roda localmente no seu navegador, de graça e sem cadastro.",
  privacyNote:
    "Todas as ferramentas desta página processam os seus arquivos localmente, no seu navegador. Nada é enviado aos nossos servidores e nada fica armazenado.",
  clusterHeading: "{count} guias sobre trabalhar com PDF no navegador",
  goingFurtherHeading: "Indo além com PDFs",
  goingFurtherBody:
    "Estas ferramentas resolvem tarefas pontuais no navegador. Para os fluxos de trabalho por trás delas — editar, converter, assinar, proteger e digitalizar — comece pelos centros de conteúdo.",
  hubs: [
    { id: "pdf-editor", label: "Editor de PDF" },
    { id: "pdf-converter", label: "Conversor de PDF" },
    { id: "pdf-forms", label: "Formulários PDF" },
    { id: "sign-pdf", label: "Assinar PDF" },
    { id: "pdf-security", label: "Segurança de PDF" },
    { id: "scan-to-pdf", label: "Digitalizar para PDF" },
    {
      id: "compare/pdf-app-vs-online-pdf-tools",
      label: "App de PDF ou ferramentas online",
    },
  ],
  appCtaHeading: "Precisa de ferramentas de PDF no celular?",
  appCtaSub: "Baixe o app PDF Editor para iPhone e Android — de graça.",
};

export const GUIDES_INDEX_PT_BR: GuidesIndexContent = {
  h1: "Guias de PDF",
  lead: "{count} tutoriais práticos e pensados para o celular sobre editar, converter, comprimir, assinar e proteger PDFs — agrupados pela ferramenta ou pelo tema a que pertencem.",
};

export const CONTACT_PT_BR: ContactContent = {
  h1: "Contato",
  lead: "Dúvidas, parcerias, imprensa ou opiniões sobre o app PDF Editor — a gente lê todos os e-mails.",
  emailLabel: "E-mail",
  officeLabel: "Sede registrada",
  sections: [
    {
      heading: "O que esperar",
      body: "O e-mail é o único canal de atendimento — não existe sistema de chamados nem chatbot na frente dele. As respostas vêm do mesmo time pequeno que faz o app, normalmente em até dois dias úteis. Para questões do app, informe o aparelho e a versão do sistema; para um problema com um documento específico, descreva o que você estava fazendo em vez de anexar o arquivo, porque não queremos nem precisamos dos seus documentos.",
    },
    {
      heading: "Com o que não podemos ajudar",
      body: "As ferramentas deste site rodam inteiramente no seu dispositivo, então nada do que você processa chega até nós. Isso também significa que não conseguimos recuperar um arquivo que você converteu, reenviar um download nem consultar nada em seu nome — não existe cópia do nosso lado para consultar. Se uma ferramenta falhou com um PDF específico, conte que tipo de arquivo era (digitalizado, protegido por senha, um formulário preenchido) e o que a ferramenta fez.",
    },
    {
      heading: "Privacidade e solicitações jurídicas",
      body: "Dúvidas sobre proteção de dados, pedidos de exclusão e notificações jurídicas vão para o mesmo endereço e chegam à hrhelperg s.r.o., na sede registrada acima.",
    },
  ],
  legalSentence:
    "A nossa {privacy} explica o que é e o que não é coletado, e os {terms} tratam do uso do site e das ferramentas.",
  privacyLinkLabel: "política de privacidade",
  termsLinkLabel: "termos de uso",
  tryAppHeading: "Conheça o app",
};

/**
 * Brazilian Portuguese privacy policy.
 *
 * A translation, not a separate policy: the operator, the registered
 * office, the contact address, the analytics vendor and the legal basis are
 * the same facts as the English version states, because the same company
 * processes the same data under the same law. Nothing localized here
 * changes a legal fact — the GDPR paragraph still says GDPR, because the
 * controller is established in the EU regardless of the reader's country.
 */
export const PRIVACY_PT_BR: LegalContent = {
  h1: "Política de Privacidade",
  updated: PRIVACY_UPDATED,
  sections: [
    {
      heading: "Quem somos",
      body: [
        "O pdfeditconvert.top é operado pela hrhelperg s.r.o., uma sociedade limitada tcheca com sede registrada em Husitská 502/36, Žižkov, 130 00 Praha 3, República Tcheca. Você pode falar conosco pelo e-mail info@hrhelperg.com.",
      ],
    },
    {
      heading: "O que este site coleta",
      body: [
        "Este site é informativo. Ele não exige que você crie uma conta, envie documentos nem compartilhe dados pessoais para ler qualquer página.",
        "Usamos uma ferramenta de análise que respeita a privacidade (WebmasterID) para entender quais páginas são visitadas e como os leitores nos encontram. Ela registra o endereço da página visitada, a sua região aproximada, o tipo de dispositivo e o site de origem. Ela não usa cookies de publicidade e não monta um perfil seu em outros sites.",
      ],
    },
    {
      heading: "O que o app para celular coleta",
      body: [
        "O app PDF Editor pode guardar dados localmente no seu aparelho (arquivos abertos, suas configurações) e pode sincronizar arquivos com o serviço de nuvem que você escolher (iCloud, Google Drive e outros), caso você ative essa opção. Consulte as informações de privacidade do app na App Store e no Google Play para a lista oficial.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "Usamos um número pequeno de cookies e tecnologias de armazenamento semelhantes para o funcionamento básico do site e para as análises. Não usamos cookies de publicidade.",
      ],
    },
    {
      heading: "Seus direitos",
      body: [
        "Se você está na UE ou no Espaço Econômico Europeu, tem direitos previstos no GDPR, entre eles acesso, correção, exclusão, restrição e portabilidade. Escreva para info@hrhelperg.com para exercê-los.",
      ],
    },
    {
      heading: "Contato",
      body: [
        "Dúvidas sobre esta política podem ser enviadas para info@hrhelperg.com.",
      ],
    },
    {
      heading: "Alterações",
      body: [
        "Podemos atualizar esta política. Mudanças relevantes serão destacadas nesta página, junto com uma nova data de atualização.",
      ],
    },
  ],
};

/** Brazilian Portuguese terms of service — a translation of the same terms. */
export const TERMS_PT_BR: LegalContent = {
  h1: "Termos de Uso",
  updated: TERMS_UPDATED,
  sections: [
    {
      heading: "Sobre estes termos",
      body: [
        "Estes termos regem o uso do pdfeditconvert.top, operado pela hrhelperg s.r.o. (Husitská 502/36, Žižkov, 130 00 Praha 3, República Tcheca).",
      ],
    },
    {
      heading: "Uso do site",
      body: [
        "Você pode ler, criar links e compartilhar as páginas deste site. Você não pode extrair grandes trechos do conteúdo para republicação, nem usar o site de forma que atrapalhe outras pessoas.",
      ],
    },
    {
      heading: "Sobre o app PDF Editor",
      body: [
        "O PDF Editor é um aplicativo para celular distribuído pela Apple App Store e pelo Google Play. O uso do app é regido pelos termos do próprio aplicativo, apresentados durante a instalação.",
      ],
    },
    {
      heading: "Sem garantias",
      body: [
        "O conteúdo do pdfeditconvert.top é fornecido para fins informativos gerais e não constitui orientação jurídica, tributária ou financeira. Fazemos um esforço razoável para mantê-lo correto, mas não garantimos que seja completo nem adequado a qualquer finalidade específica.",
      ],
    },
    {
      heading: "Responsabilidade",
      body: [
        "Na máxima extensão permitida pela legislação tcheca e da União Europeia, a hrhelperg s.r.o. não se responsabiliza por prejuízos indiretos ou consequenciais decorrentes do uso deste site.",
      ],
    },
    {
      heading: "Legislação aplicável",
      body: [
        "Estes termos são regidos pelas leis da República Tcheca. Eventuais litígios serão resolvidos pelos tribunais tchecos competentes.",
      ],
    },
    {
      heading: "Contato",
      body: [
        "Dúvidas sobre estes termos podem ser enviadas para info@hrhelperg.com.",
      ],
    },
  ],
};
