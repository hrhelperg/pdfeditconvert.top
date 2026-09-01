import type { UseCaseContent } from "@/types/content";

const content: UseCaseContent = {
  slug: "remote-work",
  h1: "Uzaktan Çalışma için PDF Editor",
  description:
    "Yolda belgelerle çalış: herhangi bir cihazdan, herhangi bir yerden PDF tara, imzala ve paylaş.",
  intro: [
    "Uzaktan çalışma, ofisini işinden ayırır. Dezavantajı, eskiden bir yazıcıda, tarayıcıda ya da paylaşılan bir sürücüde gerçekleşen belge işlemlerinin artık kullandığın her ne cihazdaysa onun üzerinde gerçekleşmesi gerekmesidir — çoğu zaman bir trende, bir kafede ya da bir müşteri lokasyonunda. Telefon için tasarlanmış yerel bir PDF düzenleyici bu boşluğu kapatır.",
    "Herhangi bir uzaktan çalışma aracı için çıta şudur: düzensiz WiFi'de çalışması, gerektiğinde çevrimdışı çalışması, hassas belgeleri üçüncü bir tarafa yüklemeyi gerektirmemesi ve kullandığın her ne cihazdaysa onda çalışması. PDF Editor bu dördünü de karşılar çünkü tüm ağır işlemler cihaz üzerinde çalışır.",
    "Bunlar, bir telefonu belirli bir masaya, ülkeye ya da internet bağlantısına bağlı olmadan taşınabilir bir belge ofisine dönüştüren somut iş akışlarıdır.",
  ],
  workflows: [
    {
      title: "Seyahat sırasında belgeleri imzala",
      body: "Bir uçakta ya da trende bir sözleşmeyi imzala. İmza cihaz üzerinde kaydedilir; dosya kaydedildiğinde şifrelenir.",
    },
    {
      title: "Tarayıcın olmadığında tara",
      body: "Otel odaları, konferans merkezleri, müşteri ofisleri — telefon kamerası ve otomatik düzeltme herhangi bir iş belgesi için yeterlidir.",
    },
    {
      title: "Uzaktan devir için dosyaları birleştir",
      body: "Meslektaşının ihtiyaç duyduğu belgeleri PDF Birleştir ile tek bir PDF'te topla, Drive ya da Slack üzerinden paylaş, tamamdır.",
    },
    {
      title: "Yavaş ağlarda yüklemeden önce sıkıştır",
      body: "Otel WiFi'ı büyük ekleri acı verici hale getirir. Önce sıkıştır, sonra yükle, bir saat kazan.",
    },
    {
      title: "Dizüstü bilgisayar açmadan küçük düzeltmeler yap",
      body: "Bir taslaktaki yazım hatası, bir tekliften yanlış tarih — telefonda 60 saniyede düzelt ve devam et.",
    },
  ],
  appPitch:
    "PDF Editor, uzaktan çalışma yığınının geri kalanıyla doğal olarak uyumludur — Drive, iCloud, Notion, Slack, Linear, GitHub. Masaya ya da sabit bir bağlantıya ihtiyaç duymadan belge işlemlerini halleden katmandır.",
  related: [
    { label: "İşletmeler için PDF", path: "/pdf-for-business" },
    { label: "Kullanım senaryoları — serbest çalışanlar", path: "/use-cases/freelancers" },
    { label: "PDF Tarama", path: "/scan-to-pdf" },
  ],
};

export default content;
