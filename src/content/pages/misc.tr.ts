import type {
  ContactContent,
  GuidesIndexContent,
  LegalContent,
  ToolsIndexContent,
} from "@/types/content";
import { PRIVACY_UPDATED } from "@/content/legal/privacy";
import { TERMS_UPDATED } from "@/content/legal/terms";

export const TOOLS_INDEX_TR: ToolsIndexContent = {
  crumbLabel: "Ücretsiz PDF araçları",
  heroEyebrow: "Ücretsiz PDF araçları",
  heroH1: "Tarayıcı tabanlı PDF araçları — dosyaların cihazından hiç çıkmaz.",
  heroHighlight: "hiç çıkmaz",
  heroLead:
    "PDF'leri hiçbir şey yüklemeden birleştir, böl, döndür, filigranla ve dönüştür. Tüm işlemler tarayıcında yerel olarak, ücretsiz ve kayıt olmadan çalışır.",
  privacyNote:
    "Bu sayfadaki her araç dosyalarını tarayıcında yerel olarak işler. Sunucularımıza hiçbir şey gönderilmez ve hiçbir şey saklanmaz.",
  clusterHeading: "Tarayıcı tabanlı PDF işleri hakkında {count} kılavuz",
  goingFurtherHeading: "PDF'lerle daha ileri git",
  goingFurtherBody:
    "Bu araçlar tarayıcıda tek seferlik işleri kapsar. Arkalarındaki iş akışları için — düzenleme, dönüştürme, imzalama, güvenlik ve tarama — konu sayfalarından başla.",
  hubs: [
    { id: "pdf-editor", label: "PDF Düzenleyici" },
    { id: "pdf-converter", label: "PDF Dönüştürücü" },
    { id: "pdf-forms", label: "PDF Formları" },
    { id: "sign-pdf", label: "PDF İmzala" },
    { id: "pdf-security", label: "PDF Güvenliği" },
    { id: "scan-to-pdf", label: "PDF Tarama" },
    {
      id: "compare/pdf-app-vs-online-pdf-tools",
      label: "PDF uygulaması mı, online araçlar mı",
    },
  ],
  appCtaHeading: "Telefonunda PDF araçlarına mı ihtiyacın var?",
  appCtaSub: "iPhone ve Android için PDF Editor uygulamasını al — ücretsiz.",
};

export const GUIDES_INDEX_TR: GuidesIndexContent = {
  h1: "PDF Kılavuzları",
  lead: "PDF'leri düzenlemek, dönüştürmek, sıkıştırmak, imzalamak ve korumak için {count} pratik, telefon odaklı eğitim — ait olduğu araca ya da konuya göre gruplandırıldı.",
};

export const CONTACT_TR: ContactContent = {
  h1: "İletişim",
  lead: "Sorular, iş birlikleri, basın ya da PDF Editor uygulamasıyla ilgili geri bildirimler — her e-postayı okuyoruz.",
  emailLabel: "E-posta",
  officeLabel: "Kayıtlı merkez",
  sections: [
    {
      heading: "Ne bekleyebilirsin",
      body: "E-posta tek destek kanalımızdır — ne bir talep sistemi ne de önünde bir sohbet robotu var. Yanıtlar, uygulamayı geliştiren aynı küçük ekipten gelir, genellikle iki iş günü içinde. Uygulamayla ilgili her konuda cihazını ve işletim sistemi sürümünü belirt; belirli bir belgeyle ilgili bir sorun için dosyayı eklemek yerine ne yaptığını anlat, çünkü belgelerini ne istiyoruz ne de ihtiyacımız var.",
    },
    {
      heading: "Neyle yardımcı olamayız",
      body: "Bu sitedeki tarayıcı araçları tamamen cihazında çalışır, bu yüzden işlediğin hiçbir şey bize hiç ulaşmaz. Bu aynı zamanda dönüştürdüğün bir dosyayı kurtaramayacağımız, bir indirmeyi yeniden gönderemeyeceğimiz ya da senin adına bir şeye bakamayacağımız anlamına gelir — bizim tarafımızda bakacak bir kopya yok. Bir araç belirli bir PDF'te başarısız olduysa, dosyanın ne olduğunu (taranmış, şifreyle korunan, doldurulmuş bir form) ve aracın ne yaptığını bize anlat.",
    },
    {
      heading: "Gizlilik ve yasal talepler",
      body: "Veri koruma soruları, silme talepleri ve yasal bildirimler aynı adrese gider ve yukarıdaki kayıtlı merkezdeki hrhelperg s.r.o.'ya ulaşır.",
    },
  ],
  legalSentence:
    "{privacy} nelerin toplanıp toplanmadığını açıklar, {terms} ise sitenin ve araçların kullanımını kapsar.",
  privacyLinkLabel: "gizlilik politikası",
  termsLinkLabel: "kullanım koşulları",
  tryAppHeading: "Uygulamayı dene",
};

/**
 * Turkish privacy policy.
 *
 * A translation, not a separate policy: the operator, the registered
 * office, the contact address, the analytics vendor and the legal basis are
 * the same facts the English version states, because the same company
 * processes the same data under the same law.
 *
 * The operator identity and address — "hrhelperg s.r.o.", "Husitská 502/36,
 * Žižkov, 130 00 Praha 3, Czech Republic" and "info@hrhelperg.com" — are
 * reproduced exactly as in the English source, never translated, matching
 * the treatment already used for pt-BR, es, fr, de, ar, ru, pl, cs, ja.
 *
 * "GDPR" is kept as the acronym (with a one-time Turkish gloss on first
 * mention, "AB'nin veri koruma düzenlemesi") rather than substituted with
 * Turkey's own KVKK — a different, narrower Turkish statute. The operator
 * is EU-established, so GDPR is the regulation that actually applies. Same
 * treatment as Arabic, Russian, Czech, Japanese and Indonesian. See §8 of
 * docs/localization/tr-terminology.md.
 */
export const PRIVACY_TR: LegalContent = {
  h1: "Gizlilik Politikası",
  updated: PRIVACY_UPDATED,
  sections: [
    {
      heading: "Biz kimiz",
      body: [
        "pdfeditconvert.top, kayıtlı merkezi Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic olan bir Çek limited şirketi hrhelperg s.r.o. tarafından işletilir. Bize info@hrhelperg.com adresinden ulaşabilirsin.",
      ],
    },
    {
      heading: "Bu web sitesi neleri toplar",
      body: [
        "Bu web sitesi bilgilendirme amaçlıdır. Herhangi bir sayfayı okumak için hesap oluşturmanı, belge eklemeni ya da kişisel bilgi paylaşmanı gerektirmez.",
        "Hangi sayfaların ziyaret edildiğini ve okuyucuların bizi nasıl bulduğunu anlamak için gizliliğe duyarlı bir analiz aracı (WebmasterID) kullanıyoruz. Ziyaret ettiğin sayfanın adresini, yaklaşık bölgeni ve cihaz türünü, yönlendiren siteyi kaydeder. Reklam çerezi kullanmaz ve seni diğer sitelerde profillemez.",
      ],
    },
    {
      heading: "Mobil uygulama neleri toplar",
      body: [
        "PDF Editor mobil uygulaması cihazında yerel olarak veri saklayabilir (açtığın dosyalar, ayarların) ve bu seçeneği açarsan dosyalarını seçtiğin bulut hizmetiyle (iCloud, Google Drive ve benzerleri) senkronize edebilir. Resmi liste için uygulamanın App Store ve Google Play'deki gizlilik bilgilerine bak.",
      ],
    },
    {
      heading: "Çerezler",
      body: [
        "Sitenin temel işlevleri ve analiz için sınırlı sayıda çerez ve benzeri depolama teknolojisi kullanıyoruz. Reklam çerezi kullanmıyoruz.",
      ],
    },
    {
      heading: "Hakların",
      body: [
        "Avrupa Birliği (AB) ya da Avrupa Ekonomik Alanı'nda (AEA) yaşıyorsan, GDPR (AB'nin veri koruma düzenlemesi) kapsamında erişim, düzeltme, silme, işlemeyi kısıtlama ve veri taşınabilirliği gibi haklara sahipsin. Bu hakları kullanmak için info@hrhelperg.com adresine yaz.",
      ],
    },
    {
      heading: "İletişim",
      body: [
        "Bu politikayla ilgili sorular info@hrhelperg.com adresine gönderilebilir.",
      ],
    },
    {
      heading: "Değişiklikler",
      body: [
        "Bu politikayı güncelleyebiliriz. Önemli değişiklikler bu sayfada yeni bir “son güncelleme” tarihiyle birlikte belirtilecek.",
      ],
    },
  ],
};

/** Turkish terms of service — a translation of the same terms. */
export const TERMS_TR: LegalContent = {
  h1: "Kullanım Koşulları",
  updated: TERMS_UPDATED,
  sections: [
    {
      heading: "Bu koşullar hakkında",
      body: [
        "Bu koşullar, hrhelperg s.r.o. (Husitská 502/36, Žižkov, 130 00 Praha 3, Czech Republic) tarafından işletilen pdfeditconvert.top'un kullanımını düzenler.",
      ],
    },
    {
      heading: "Web sitesinin kullanımı",
      body: [
        "Bu web sitesindeki sayfaları okuyabilir, bağlantı verebilir ve paylaşabilirsin. İçeriğin büyük bölümlerini yeniden yayımlamak için kazıyamaz ya da siteyi başka kullanıcıları rahatsız edecek şekilde kullanamazsın.",
      ],
    },
    {
      heading: "PDF Editor mobil uygulaması hakkında",
      body: [
        "PDF Editor, Apple App Store ve Google Play üzerinden dağıtılan ayrı bir mobil uygulamadır. Uygulamanın kullanımı, kurulum sırasında sunulan kendi koşullarına tabidir.",
      ],
    },
    {
      heading: "Garanti yok",
      body: [
        "pdfeditconvert.top'taki içerik genel bilgilendirme amaçlıdır ve hukuki, mali ya da vergiyle ilgili tavsiye niteliği taşımaz. İçeriği doğru tutmak için makul çaba gösteriyoruz, ancak eksiksizliği ya da belirli bir amaca uygunluğu konusunda garanti vermiyoruz.",
      ],
    },
    {
      heading: "Sorumluluk",
      body: [
        "Çek ve AB hukukunun izin verdiği azami ölçüde, hrhelperg s.r.o. bu web sitesinin kullanımından doğan dolaylı ya da sonuç niteliğindeki zararlardan sorumlu değildir.",
      ],
    },
    {
      heading: "Uygulanacak hukuk",
      body: [
        "Bu koşullar Çek Cumhuriyeti yasalarına tabidir. Uyuşmazlıklar yetkili Çek mahkemelerinde çözülür.",
      ],
    },
    {
      heading: "İletişim",
      body: [
        "Bu koşullarla ilgili sorular info@hrhelperg.com adresine gönderilebilir.",
      ],
    },
  ],
};
