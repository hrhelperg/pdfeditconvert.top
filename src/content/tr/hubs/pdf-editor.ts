import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-editor",
  hero: {
    eyebrow: "PDF Düzenleyici",
    h1: "PDF'leri her yerde, her telefonda düzenle.",
    highlight: "PDF'leri",
    lead: "Metni değiştir, görselleri değiştir, sayfaları yeniden sırala ve belgeleri imzala — doğrudan iPhone veya Android'de. PDF Editor, telefonu sadece bir görüntüleyici olmaktan çıkarıp gerçek bir belge düzenleyiciye dönüştürür.",
    primaryCta: { label: "Uygulamayı aç", href: SITE.app.appStore },
  },
  problem: {
    heading: "PDF düzenlemek neden hep zahmetli oldu",
    paragraphs: [
      "PDF'ler her yerde aynı görünmek üzere tasarlandı — düzenlemeyi bu kadar zorlaştıran da tam olarak bu. Telefondaki çoğu uygulama sadece görüntülemene ya da not eklemene izin verir. Bir yazım hatasını düzeltmen, bir ismi değiştirmen ya da bir sayfayı taşıman gerektiği anda ya bilgisayara yönlendirilirsin ya da dosyanı rastgele bir web sitesine yüklemen istenir.",
      "O “yükle ve dua et” siteleri gizlilik açısından bir felaket. Dosyanı saatlerce saklarlar, çoğu zaman yavaştırlar ve hassas sözleşmelerle, faturalarla ya da kimliklerle ne yaptıklarına güvenemezsin. Sonuç: çoğu insan düzeltmek istediği kısmın ekran görüntüsünü alır, onu bir görsel gibi düzenler ve orijinalinden daha kötü görünen bir sürümü e-postayla gönderir.",
      "Telefon için tasarlanmış yerel bir düzenleyici bunu ödün vermeden çözer. Düzenlemeler cihaz üzerinde gerçekleşir. Orijinal yerleşim korunur. Başladıktan bir dakika sonra sonucu e-postayla gönderebilirsin — dosyanı bir yabancının sunucusuna hiç yüklemeden.",
    ],
  },
  features: {
    heading: "Gerçekten yapabildiklerin",
    items: [
      {
        icon: "Type",
        title: "Metni yerinde düzenle",
        body: "Yazım hatalarını düzelt, isimleri değiştir, tarihleri güncelle — yerleşimi bozmadan. Metin tabanlı PDF'lerde çalışır.",
      },
      {
        icon: "ImagePlus",
        title: "Görsel ekle ve değiştir",
        body: "Yeni bir logo ya da fotoğraf ekle. Sayfadan çıkmadan yeniden boyutlandır ve konumlandır.",
      },
      {
        icon: "Move",
        title: "Sayfaları yeniden sırala",
        body: "Küçük resimleri sürükleyerek sırala. Sayfaları sil, çoğalt ya da yeni bir boş sayfa ekle.",
      },
      {
        icon: "Pencil",
        title: "İmza ve paraf",
        body: "Gerçek bir el yazısı imza ya da yazılı imza ekle. Tek dokunuşla istediğin yere yerleştir.",
      },
      {
        icon: "Highlighter",
        title: "İşaretleme ve vurgulama",
        body: "Vurgula, altını çiz, üstünü çiz. Serbest el notları ya da yapışkan not ekle.",
      },
      {
        icon: "FileText",
        title: "Formları doldur",
        body: "Alanlara dokunarak doldur. Tamamlanan formu yeni bir PDF olarak kaydet.",
      },
    ],
  },
  steps: {
    heading: "Telefonda bir PDF nasıl düzenlenir",
    items: [
      {
        title: "PDF Editor uygulamasını aç",
        body: "Uygulamayı ana ekrandan başlat. Başlamak için hesap gerekmez.",
      },
      {
        title: "Düzenlemek istediğin PDF'i seç",
        body: "Dosyalar, iCloud Drive, Google Drive ya da e-postandan içe aktar. Ya da herhangi bir yerdeki PDF'e dokunup açıcı olarak PDF Editor'ı seç.",
      },
      {
        title: "Değiştirmek istediğin kısma dokun",
        body: "Metni düzenlemek için bir paragrafa, değiştirmek için bir görsele ya da yeniden sıralamak için sayfa küçük resmine dokun.",
      },
      {
        title: "Değişikliklerini yap",
        body: "Değişiklikler sayfada gerçek zamanlı gerçekleşir. Hassasiyet için iki parmakla yakınlaştır. Geri al ve yinele beklendiği gibi çalışır.",
      },
      {
        title: "Sonucu kaydet",
        body: "Orijinalin üzerine kaydet, yeni bir kopya olarak kaydet ya da Mail, AirDrop ya da herhangi bir mesajlaşma uygulamasıyla doğrudan paylaş.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Yolda düzenleme",
    body: "Çoğu PDF düzenlemesi en kötü anda yapılır — bir toplantıdan beş dakika önce, trende, dersler arasında. Telefon öncelikli bir düzenleyici, ofise yürürken bir sözleşmedeki yanlış yazılmış ismi düzeltmeni ya da kahve molasında bir teklife imzanı basmanı sağlar. Dizüstü bilgisayar yok, masaüstü bilgisayar yok, eve varana kadar beklemek yok.",
  },
  faq: [
    {
      q: "PDF Editor uygulaması ücretsiz mi?",
      a: "Evet. Temel düzenleme — metin, görseller, sayfa yeniden sıralama, imzalar ve dışa aktarma — ücretsizdir. Bazı gelişmiş özellikler Pro yükseltmesiyle açılır.",
    },
    {
      q: "Çevrimdışı çalışır mı?",
      a: "Evet. Düzenleme tamamen cihaz üzerinde gerçekleşir. Bağlantıya yalnızca bir bulut sürücüden dosya çekerken ya da çevrimiçi hizmetler üzerinden paylaşırken ihtiyacın olur.",
    },
    {
      q: "Taranan PDF'leri düzenleyebilir miyim?",
      a: "Taranan PDF'ler teknik olarak görseldir. Yine de not ekleyebilir, imzalayabilir ve sayfaları yeniden düzenleyebilirsin. Gerçek metni düzenlemek önce OCR gerektirir; uygulama çoğu belgede bunu çalıştırabilir.",
    },
    {
      q: "Dosya boyutu sınırı var mı?",
      a: "Yapay bir sınır yok. Çok büyük PDF'ler (karmaşık grafiklerle yüzlerce MB) eski telefonlarda daha yavaş olabilir, ama uygulama gerçek dünya belgelerini işlemek için tasarlandı.",
    },
    {
      q: "Değişikliklerim orijinal yerleşimi bozar mı?",
      a: "Hayır. Değişiklikler yerinde yapılır. Metin tabanlı PDF'lerde yazı tipleri, kenar boşlukları ve mevcut biçimlendirme olduğu gibi kalır.",
    },
    {
      q: "Word'e aktarabilir miyim?",
      a: "Evet. Düzenlenen PDF'i aynı uygulamadan Word'e ya da başka formatlara dönüştürebilirsin.",
    },
  ],
  related: [
    {
      label: "iPhone'da PDF nasıl düzenlenir",
      path: "/guides/how-to-edit-pdf-on-iphone",
    },
    {
      label: "Android'de PDF nasıl düzenlenir",
      path: "/guides/how-to-edit-pdf-on-android",
    },
    { label: "Telefonda PDF imzala", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "PDF'lerini telefonunda saniyeler içinde düzenle.",
    sub: "iOS ve Android'de ücretsiz. Başlamak için hesap gerekmez.",
  },
};

export default content;
