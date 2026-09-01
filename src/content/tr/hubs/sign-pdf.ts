import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "sign-pdf",
  hero: {
    eyebrow: "PDF İmzala",
    h1: "PDF'leri telefonundan saniyeler içinde imzala.",
    highlight: "saniyeler",
    lead: "Herhangi bir PDF'e gerçek bir el yazısı imza, yazılı bir isim ya da paraf ekle. Yerleştir, boyutlandır ve dışa aktar — yazdırmadan, taramadan ya da kendine bir dosya e-postalamadan.",
    primaryCta: { label: "Uygulamayı aç", href: SITE.app.appStore },
  },
  problem: {
    heading: "Yazdırıp tarama neden sonunda tarihe karıştı",
    paragraphs: [
      "Eski imzalama rutini — PDF'i yazdır, imzala, tara, e-postayla geri gönder — nasıl olduysa 2026'ya kadar hayatta kaldı. Çoğu şirket elektronik imzayı kabul ediyor, yine de bir sürü sözleşme sanki herkesin bir yazıcısı ve tarayıcısı varmış gibi “lütfen imzalayıp geri gönderin” notuyla geliyor.",
      "Herkese açık e-imza hizmetleri bunun bir kısmını çözüyor ama giriş sürtünmesi, belge yükleme, hesap yönetimi ve fiyat katmanları ekliyor. Tek bir belgedeki tek bir imza için bu fazla iş ve ihtiyacın olmayan bir gecikme ekliyor.",
      "Telefonunda yerel bir imzalama akışı iş için tam doğru boyuttadır: PDF'i aç, imzanı çiz ya da yaz, yerleştir, gönder. Tüm bu sıra bir dakikadan kısa sürer ve hesap gerektirmeden, uçakta ya da bir otoparkta bile çalışır.",
    ],
  },
  features: {
    heading: "Belgeye uyan şekilde imzala",
    items: [
      {
        icon: "Pencil",
        title: "El yazısı imza",
        body: "Parmağınla ya da bir dijital kalemle çiz. Bir kez kaydet, sonraki her belgede yeniden kullan.",
      },
      {
        icon: "Type",
        title: "Yazılı imza",
        body: "Adını yaz ve temiz, okunaklı imzalar için el yazısı stilinde bir yazı tipi seç.",
      },
      {
        icon: "User",
        title: "Paraf damgası",
        body: "Her sayfada paraf isteyen belgeler için parafını ayrı olarak kaydet.",
      },
      {
        icon: "Calendar",
        title: "Tarih damgası",
        body: "Sözleşmeler istediğinde imzanın yanına tek dokunuşla tarih ekle.",
      },
      {
        icon: "Users",
        title: "Çok imzacılı iş akışı",
        body: "Bir PDF'i paylaşım menüsü üzerinden imzacılar arasında dolaştır. Her imza yerinde kalır.",
      },
      {
        icon: "ShieldCheck",
        title: "Denetim bilgisiyle dışa aktar",
        body: "İmzalanan kopya, kayıt tutmak için bir zaman damgası ve imza meta verisi içerir.",
      },
    ],
  },
  steps: {
    heading: "Telefonda bir PDF nasıl imzalanır",
    items: [
      {
        title: "PDF'i aç",
        body: "Belgeyi Dosyalar'dan, e-postadan ya da herhangi bir paylaşım uygulamasından PDF Editor'a aktar.",
      },
      {
        title: "İmzala aracına dokun",
        body: "Düzenleme araç çubuğunda bulunur. El yazısı, yazılı ya da paraf seç.",
      },
      {
        title: "İmzanı çiz ya da yaz",
        body: "Sadece ilk seferinde — imza sonraki kullanımlar için kaydedilir. İstediğin zaman Ayarlar'dan düzenleyebilir ya da değiştirebilirsin.",
      },
      {
        title: "Yerleştir ve boyutlandır",
        body: "İmzayı doğru yere sürükle. Köşe tutamaçlarıyla boyutlandır. Gerekirse tarih damgası ekle.",
      },
      {
        title: "İmzalı kopyayı dışa aktar",
        body: "Orijinalin üzerine ya da yeni bir kopya olarak kaydet. Mail ya da herhangi bir mesajlaşma uygulamasıyla doğrudan paylaş.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Günü aksatmadan imzalama",
    body: "İmza nadiren darboğazdır — asıl darboğaz bir yazıcı bulmak için geçen süredir. Telefonda imzalamak, sözleşmelerin gün içinde değil saat içinde karşı tarafa geri dönmesi demektir. Özellikle serbest çalışanlar, küçük işletme sahipleri ve masadan uzakta çalışan herkes için faydalıdır.",
  },
  faq: [
    {
      q: "Elektronik imza hukuken geçerli mi?",
      a: "Çoğu yargı bölgesinde evet — çoğu ticari belge için. AB'nin eIDAS düzenlemesi ve ABD'nin ESIGN Yasası, elektronik imzaları tanır. Yüksek değerli ya da hukuken hassas belgeler için yerel kuralları kontrol et ve nitelikli elektronik imzaları değerlendir.",
    },
    {
      q: "İmzam bir sunucuda saklanır mı?",
      a: "Hayır. Kaydedilen imzalar cihazında kalır. Belgelere yerel olarak uygulanır ve altyapımıza asla yüklenmez.",
    },
    {
      q: "Aynı PDF'i birden fazla kişi imzalayabilir mi?",
      a: "Evet. Dosyayı paylaşım menüsü, AirDrop, e-posta ya da herhangi bir mesajlaşma uygulamasıyla imzacılar arasında dolaştır. Her imza eklenir ve yerinde kaydedilir.",
    },
    {
      q: "Ya PDF'te imza alanları varsa?",
      a: "Uygulama mevcut imza alanlarını algılar ve doğrudan onlara dokunmanı sağlar. İmzan doğru boyuta ve konuma otomatik oturur.",
    },
    {
      q: "Apple Pencil ya da S Pen ile kullanabilir miyim?",
      a: "Evet. İkisi de parmak ucuyla imzalamaya göre daha akıcı çizgiler verir, bu da görsel incelemeden geçen sözleşmelerde gerçek bir fark yaratır.",
    },
  ],
  related: [
    {
      label: "Adım adım: telefonda PDF nasıl imzalanır",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "İmzalanan PDF'leri şifreyle koru", path: "/pdf-security" },
    { label: "Serbest çalışanlar için iş akışları", path: "/use-cases/freelancers" },
  ],
  appCta: {
    heading: "PDF'leri her yerden imzala.",
    sub: "iOS ve Android'de ücretsiz. Hesap gerekmez.",
  },
};

export default content;
