import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-security",
  hero: {
    eyebrow: "PDF Güvenliği",
    h1: "Hassas PDF'leri doğru şekilde koru.",
    highlight: "doğru şekilde",
    lead: "Sözleşmelerde, bordrolarda ve kimlik taramalarında şifreler, AES-256 şifreleme, sansürleme ve kullanım kısıtlamaları. Hassas belgelerin gerçekten hak ettiği türden koruma.",
    primaryCta: { label: "Uygulamayı aç", href: SITE.app.appStore },
  },
  problem: {
    heading: "Çoğu “korumalı” PDF neden aslında korumalı değil",
    paragraphs: [
      "İnsanların pasaport taramalarını, imzalanmış sözleşmeleri ve maaş bordrolarını düz PDF olarak paylaşması — e-posta üzerinden, mesajlaşma uygulamaları üzerinden ya da form eklerinde — şaşırtıcı derecede yaygın. E-posta hesabı ya da mesajlaşma geçmişi ele geçirilirse, bu belgelerin her biri açığa çıkar.",
      "Bazı kullanıcılar ücretsiz bir çevrimiçi araçla ayarlanmış, sadece bir açma şifresinden ibaret bir “koruma” ekler. Bu hiç yoktan iyidir, ama şifre çoğu zaman zayıftır, şifreleme bazen eski 40 bitlik şifredir ve araç dosyanı kendi başına bir risk oluşturacak kadar uzun süre saklar.",
      "Gerçek PDF güvenliği güçlü şifreleme (AES-256), güçlü şifreler ve gerektiğinde düzenleme/yazdırma izinlerini açık erişimden ayırmak anlamına gelir. Bunun cihaz üzerinde yapılması da gerekir, çünkü hassas bir belgeyi bir web aracına yüklediğin an gizlilik mücadelesini zaten kaybetmişsindir.",
    ],
  },
  features: {
    heading: "Tehdide uygun güvenlik araçları",
    items: [
      {
        icon: "Lock",
        title: "Şifre koruması",
        body: "Belgeyi açmak için bir şifre belirle. PDF şifre olmadan görüntülenemez.",
      },
      {
        icon: "ShieldCheck",
        title: "AES-256 şifreleme",
        body: "Kurumsal sistemlerin kullandığı standart, güçlü ve modern şifreleme.",
      },
      {
        icon: "Printer",
        title: "Kopyalama ve yazdırmayı kısıtla",
        body: "Görüntülemeye izin ver ama metin kopyalamayı, yazdırmayı ya da sayfa çıkarmayı engelle.",
      },
      {
        icon: "EyeOff",
        title: "Sansürleme",
        body: "Paylaşmadan önce isimleri, hesap numaralarını ya da imzaları kalıcı olarak karart.",
      },
      {
        icon: "Stamp",
        title: "Filigranlar",
        body: "İletmeyi caydırmak için “gizli” ya da alıcıya özel bir filigran ekle.",
      },
      {
        icon: "Link",
        title: "Şifre paylaşma önerileri",
        body: "Şifreleri belgenin kendisinden ayrı bir kanaldan paylaşma konusunda yerleşik rehberlik.",
      },
    ],
  },
  steps: {
    heading: "Bir PDF nasıl korunur",
    items: [
      {
        title: "PDF'i aç",
        body: "Belgeyi Dosyalar'dan ya da herhangi bir bulut sürücüden PDF Editor'a aktar.",
      },
      {
        title: "Koru'ya dokun",
        body: "Belge araçları menüsünde bulunur. İhtiyacın olan koruma düzeyini seç.",
      },
      {
        title: "Şifreyi belirle",
        body: "Güçlü bir şifre kullan — en az 12 karakter, harf, rakam ve simge karışımı.",
      },
      {
        title: "(İsteğe bağlı) Kısıtlamaları seç",
        body: "Yazdırmaya, kopyalamaya ve düzenlemeye izin ver ya da engelle. Paylaşılan ama salt okunur belgeler için yararlıdır.",
      },
      {
        title: "Korumalı kopyayı kaydet",
        body: "Şifreyi unutursan orijinal erişilebilir kalsın diye yeni bir dosya olarak kaydet.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Yolda hassas belgeleri koruma",
    body: "Çoğu güvenlik hatası aceleye getirildiğinde olur. Telefon tabanlı koruma, havaalanından göndermeden önce bir sözleşmeyi kilit altına almanı ya da bir yükleniciyle paylaşmadan önce bir bordro PDF'ini korumanı sağlar — masaüstü bilgisayar aramadan.",
  },
  faq: [
    {
      q: "Uygulama hangi şifrelemeyi kullanıyor?",
      a: "AES-256, modern standart. Eski 40 bit ve 128 bit RC4 şifrelemeden kaçın — bunlar kolayca kırılır.",
    },
    {
      q: "Şifreyi unutursam ne olur?",
      a: "Arka kapı yok. Güçlü şifreleme, belgenin şifre olmadan kurtarılamaz olduğu anlamına gelir. Şifreni bir şifre yöneticisinde sakla.",
    },
    {
      q: "Şifreyi güvenle nasıl paylaşırım?",
      a: "Belgenin kendisinden farklı bir kanal kullan — PDF'i e-postayla gönderdiysen şifreyi mesajla gönder ya da bir şifre yöneticisinin güvenli paylaşım özelliğini kullan.",
    },
    {
      q: "Sansürleme kalıcı mı?",
      a: "Evet. Doğru bir sansürleme yalnızca görsel olarak üzerini kapatmaz, altındaki metni de kaldırır. Sansürlenen PDF'ten kopyala-yapıştır yapmak bile orijinali ortaya çıkarmaz.",
    },
    {
      q: "Aynı anda hem filigran hem şifre ekleyebilir miyim?",
      a: "Evet. Birbirinden bağımsızdırlar ve birlikte uygulanabilirler.",
    },
  ],
  related: [
    {
      label: "Adım adım: bir PDF şifreyle nasıl korunur",
      path: "/guides/how-to-protect-pdf-file",
    },
    { label: "PDF'leri şifreyle korumadan önce imzala", path: "/sign-pdf" },
    {
      label: "İş ekipleri için PDF iş akışları",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Hassas PDF'leri saniyeler içinde kilit altına al.",
    sub: "iOS ve Android'de ücretsiz. Koruma cihaz üzerinde gerçekleşir.",
  },
};

export default content;
