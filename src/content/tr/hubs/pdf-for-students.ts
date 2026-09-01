import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-students",
  hero: {
    eyebrow: "Öğrenciler için PDF",
    h1: "Öğrencilerin gerçekten çalışma şekline uyan PDF araçları.",
    highlight: "gerçekten",
    lead: "Ders slaytlarına not ekle, okumaları vurgula, araştırma makalelerini birleştir, ders kitabı sayfalarını tara ve formları imzala — zaten sahip olduğun telefon ya da tabletten.",
    primaryCta: { label: "Uygulamayı aç", href: SITE.app.appStore },
  },
  problem: {
    heading: "PDF'ler öğrencilerin iş akışının merkezinde neden kalıyor",
    paragraphs: [
      "Öğretim üyeleri slayt setlerini PDF olarak paylaşır. Ders kitapları PDF olarak gelir. Ödev tanımları PDF'tir. Ders programları PDF'tir. Yine de varsayılan telefon görüntüleyicisi vurgulama, not ekleme ya da düzgün organize etme imkânı vermez — çoğu öğrencinin başvurduğu alternatif, sayfaların ekran görüntüsünü alıp Notlar'a kaydetmektir; bu da aranabilirliği, yapıyı ve kaynağa geri dönme imkânını kaybettirir.",
      "Gerçek bir mobil PDF düzenleyici, öğrencilerin okumaları bir ders kitabına davrandıkları gibi ele almasını sağlar — vurgular, kenar notları, yer imleri — ama aranabilirlik ve paylaşılabilirlikle birlikte. Aynı not eklenmiş okumalar her cihazda açılır, böylece otobüste yaptığın çalışma kütüphanede otururken de orada olur.",
      "Bir tablette dijital kalemle birleştirildiğinde, bu kurulum ders materyalleri için çoğu fiziksel not tutma işini değiştirebilir. Maliyeti uygulamanın fiyatı (temel özellikler için ücretsiz) ve bir kez kurmak için harcanan zamandır.",
    ],
  },
  features: {
    heading: "Çalışma seansları için tasarlandı",
    items: [
      {
        icon: "Highlighter",
        title: "Vurgula ve not ekle",
        body: "Sarı vurgular, serbest el notları, yapışkan notlar, altı çizmeler — kağıtta yapacağın her şey, ama aranabilir.",
      },
      {
        icon: "Bookmark",
        title: "Yer imi ve gezinme",
        body: "Geri dönmek istediğin bölümleri ya da başlıkları işaretle. Kompozisyon yazarken tek dokunuşla aralarında geç.",
      },
      {
        icon: "Combine",
        title: "Okumaları birleştir",
        body: "Haftanın makalelerini trende, uçakta ya da yolda çevrimdışı okumak için tek bir belgede topla.",
      },
      {
        icon: "ScanLine",
        title: "Ders kitabı sayfalarını tara",
        body: "Fiziksel kitaplardaki sayfaları aranabilir PDF'lere aktar. Sadece fiziksel kopyaya sahip olduğun kaynaklardan makalede alıntı yaparken kullanışlı.",
      },
      {
        icon: "FileSignature",
        title: "Formları anında imzala",
        body: "Burs formları, yoklama kâğıtları, kayıt onayları — yazdırmadan imzala ve geri gönder.",
      },
      {
        icon: "Layers",
        title: "Derse göre organize et",
        body: "Belgeleri derse göre grupla. Notlarını kaybetmeden dönem boyunca taşı.",
      },
    ],
  },
  steps: {
    heading: "Basit bir çalışma iş akışı",
    items: [
      {
        title: "Haftanın okumalarını topla",
        body: "Her PDF'i üniversitenin portalından, Canvas, Moodle ya da e-postandan PDF Editor'a indir ya da paylaş.",
      },
      {
        title: "Ders haftası başına tek dosyada birleştir",
        body: "Çevrimdışı kullanım için bunları “Hafta 3 Okumaları - Mikroekonomi.pdf” olarak birleştirmek üzere PDF Birleştir aracını kullan.",
      },
      {
        title: "Okurken not al",
        body: "Önemli pasajları vurgula, kenar notları ekle, takip sorularının olduğu yerlere yapışkan not bırak. Notlar yerinde kaydedilir.",
      },
      {
        title: "Kompozisyon yazarken vurguları kullan",
        body: "Kaynak gösterirken yer imleri panelinden vurgulanan bölümlere geri dön. Vurgunun altındaki metin seçilebilir ve kopyalanabilir.",
      },
      {
        title: "El yazısı notları tara ve birleştir",
        body: "Kağıda not aldığında, hepsi aranabilir tek bir yerde olsun diye bunları aynı PDF Editor kitaplığına tara.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Her yerde çalışma",
    body: "Dersler, kütüphane, tren, kafe — bir öğrencinin okuduğu yer nadiren bir masadır. Telefon öncelikli bir PDF düzenleyici, aynı not eklenmiş kopyanın nerede olursan ol elinde olması demektir. Otobüs beklerken kaybedeceğin saat, üretken bir okuma saatine dönüşür.",
  },
  faq: [
    {
      q: "Uygulama öğrenciler için ücretsiz mi?",
      a: "Evet. Temel not ekleme, birleştirme, tarama ve imzalama günlük sınır olmadan ücretsizdir. Bazı Pro özellikler (toplu OCR, gelişmiş şifreleme) ücretlidir ama ücretsiz katman bir öğrencinin genellikle ihtiyaç duyduğu her şeyi kapsar.",
    },
    {
      q: "Vurgularım cihazlar arasında eşitlenir mi?",
      a: "Dosyayı iCloud Drive, Google Drive ya da herhangi bir bulut sağlayıcısına kaydedersen, değişiklikler aynı dosyanın açıldığı her yerde eşitlenir. Sadece yerel dosyalar düzenlendikleri cihazda kalır.",
    },
    {
      q: "Bir ders kitabı sayfasını yasal olarak tarayabilir miyim?",
      a: "Kişisel çalışma için, çoğu yargı bölgesinde evet (adil kullanım kuralları genellikle çalışma amaçlı kısa alıntılara izin verir). Taranan kopyaları dağıtma konusunda dikkatli ol — bu farklı bir konudur ve çoğu zaman izin verilmez.",
    },
    {
      q: "Uygulama iPad ve Android tabletlerde iyi çalışıyor mu?",
      a: "Evet. Dijital kalem girişi olan tabletler (Apple Pencil, S Pen), not almayı sadece parmakla kullanılan telefonlara göre kağıda çok daha yakın hissettirir. Bir tabletin varsa, okuma seansları için kullan.",
    },
    {
      q: "Not eklediğim çalışmalarımı dışa aktarabilir miyim?",
      a: "Evet. Not eklenmiş PDF olduğu gibi (notlar sayfaya işlenmiş halde) paylaşılabilir ya da notların kalıcı olarak sayfaya işlendiği nihai bir PDF'e dönüştürülebilir. Alıntılar için sadece vurgulanan metni de çıkarabilirsin.",
    },
  ],
  related: [
    {
      label: "Çalışma notlarını PDF olarak nasıl paylaşırsın",
      path: "/guides/how-to-share-study-notes-as-pdf",
    },
    {
      label: "Öğrenciler için en iyi PDF uygulaması",
      path: "/guides/best-pdf-app-for-students",
    },
    { label: "PDF Tarama", path: "/scan-to-pdf" },
  ],
  appCta: {
    heading: "Gerçek bir PDF araç setiyle çalış.",
    sub: "iOS ve Android'de ücretsiz. Notlar iCloud ya da Drive üzerinden eşitlenir.",
  },
};

export default content;
