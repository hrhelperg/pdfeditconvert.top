import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-for-business",
  hero: {
    eyebrow: "İşletmeler için PDF",
    h1: "Küçük ekipler için PDF iş akışları.",
    highlight: "Küçük ekipler",
    lead: "Sözleşmeler, faturalar, teklifler, imzalanmış anlaşmalar, taranan fişler — bir küçük işletmenin üzerine kurulu olduğu tüm belgeler, kişi başı lisans ya da kurumsal SaaS olmadan telefondan yönetilir.",
    primaryCta: { label: "Uygulamayı aç", href: SITE.app.appStore },
  },
  problem: {
    heading: "Küçük ekipler PDF'lerle neden hâlâ boğuşuyor",
    paragraphs: [
      "Küçük işletmeler PDF'lerin içinde yaşar. Teklifler PDF olarak gider, sözleşmeler imzalanmış PDF olarak geri gelir, faturalar PDF'tir, fişler taranarak PDF'e dönüşür, gizlilik sözleşmeleri PDF'tir. Yine de bunları yöneten araçlar ya kurumsal fiyatlıdır ya da web tabanlı ve kırılgandır.",
      "Kurumsal PDF yazılımları bir BT departmanın ve bir satın alma sürecin olduğunu varsayar. Ücretsiz web araçları, müşteri sözleşmelerini üçüncü taraf bir sunucuya yüklemekten sorunun olmadığını varsayar. Hiçbir model beş kişilik bir ajansa, bir serbest çalışana ya da bürokrasi olmadan belgeleri hızla işlemesi gereken küçük bir çevrimiçi işletmeye uymaz.",
      "Telefon öncelikli, yerel bir PDF araç seti küçük ekiplere daha iyi uyar. Yönetilecek lisans koltuğu yok, koordine edilecek yükleme sırası yok, haftada birkaç kez kullanılan bir araç için aylık ücret yok. Her ekip üyesi uygulamayı telefonuna kurar ve ilk günden üretken olur.",
    ],
  },
  features: {
    heading: "Küçük ekipler için önemli olan işlemler",
    items: [
      {
        icon: "FileSignature",
        title: "Teklif → sözleşme → imza",
        body: "Bir PDF teklifi gönder, imzalanmış kabulü al, sonucu sakla. Tüm döngü bir telefona sığar.",
      },
      {
        icon: "Receipt",
        title: "Kasada fiş tarama",
        body: "Kağıt fişleri aldığın an tara. Otomatik adlandırma ve OCR onları muhasebe aracına hazır hale getirir.",
      },
      {
        icon: "ShieldCheck",
        title: "Hassas belgeleri koru",
        body: "Dışarıyla paylaşmadan önce sözleşmeleri, bordro PDF'lerini ve gizlilik sözleşmesi kopyalarını şifreyle koru. AES-256, cihaz üzerinde.",
      },
      {
        icon: "Combine",
        title: "Teslim edilecekleri birleştir ve böl",
        body: "Bir teklifi kapsam belgesiyle birleştir; uzun bir dışa aktarmayı müşteri başına böl. İkisi de üç dokunuşluk işlem.",
      },
      {
        icon: "Wand",
        title: "Dizüstü bilgisayar gerekmeden hızlı düzeltmeler",
        body: "Bir teklifteki yazım hatasını düzelt, bir faturadaki tarihi güncelle, bir broşürdeki logoyu değiştir — hepsi telefondan.",
      },
      {
        icon: "Globe",
        title: "Zaten kullandığın bulutla çalışır",
        body: "Drive, iCloud, OneDrive, Dropbox — uygulama ekibinin dosyaları zaten sakladığı her yerden okur ve yazar.",
      },
    ],
  },
  steps: {
    heading: "Tipik bir küçük işletme iş akışı",
    items: [
      {
        title: "Bir talep al",
        body: "Bir müşteri teklif ister. Fatura aracında taslağını hazırlar ve PDF olarak dışa aktarırsın.",
      },
      {
        title: "İmzala ve tarih at",
        body: "PDF'i PDF Editor'da aç, kayıtlı imzanla imzala, bir tarih damgası ekle.",
      },
      {
        title: "E-posta ya da mesajlaşmayla gönder",
        body: "İmzalanmış teklifi doğrudan uygulamadan e-posta paylaşım menüsü ya da ekibinin mesajlaşma aracıyla paylaş.",
      },
      {
        title: "Karşı imzalı sürümü al",
        body: "Müşteri sana geri gönderdiğinde dosyayı aç, bulutuna arşivle ve hassas koşullar içeriyorsa şifreyle koru.",
      },
      {
        title: "Fatura oluştur ve sözleşmeyle birleştir",
        body: "Faturayı muhasebe aracından dışa aktar, ardından fatura ve imzalı sözleşmeyi tek bir düzenli arşiv PDF'inde toplamak için PDF Birleştir'i kullan.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Bir işletmeyi telefondan yürütmek",
    body: "Küçük işletmelerin belge işlerinin çoğu başka işler arasında olur — bir müşteri lokasyonunda, bir taksi içinde, okul servisleri arasında. Telefon öncelikli olmak, iş akışının bir masaya bağlı olmadığı anlamına gelir. Eskiden akşam dizüstü bilgisayar vaktini bekleyen sözleşmeler artık istendikleri saat içinde gönderiliyor.",
  },
  faq: [
    {
      q: "Uygulama 5-20 kişilik bir ekip için uygun mu?",
      a: "Küçük bir ekipteki bireysel kullanıcılar için evet — her kişi telefonuna kurar. Merkezi bir yönetim konsolu yoktur; cihaz başına çalışan bir araçtır. Bundan daha büyük kuruluşlar için kurumsal bir belge yönetim sistemi daha uygun olabilir.",
    },
    {
      q: "Hukuken bağlayıcı sözleşmeler için kullanabilir miyim?",
      a: "Çoğu yargı bölgesi, standart ticari sözleşmeler için imzalanmış PDF'leri kabul eder. AB'nin eIDAS düzenlemesi ve ABD'nin ESIGN Yasası, elektronik imzaları tanır. Yüksek değerli, düzenlemeye tabi ya da sınır ötesi anlaşmalar için yerel kuralları kontrol et ve nitelikli elektronik imzaları değerlendir.",
    },
    {
      q: "Muhasebe araçlarıyla entegre çalışır mı?",
      a: "PDF Editor, her muhasebe aracının kabul ettiği standart PDF'ler üretir (Xero, QuickBooks, FreeAgent, Pleo vb.). Özel bir entegrasyon gerekmez — PDF'i bulut sürücüne kaydetmen yeterli, muhasebe aracı onu otomatik alır.",
    },
    {
      q: "Müşteri dosyalarının gizliliğini nasıl korurum?",
      a: "Tüm işlemler cihaz üzerinde çalışır. Dosyalar telefonundan yalnızca aktif olarak paylaştığında çıkar. Özellikle hassas belgeleri dışarıyla paylaşmadan önce şifreyle koru.",
    },
    {
      q: "Peki denetim kayıtları ne olacak?",
      a: "İmzalanmış PDF'ler imza meta verisi içerir (zaman damgası, imzalayan adı). Tam denetim kaydı gerektiren düzenlemeye tabi sektörler için özel bir e-imza platformuyla destekle — PDF Editor günlük iş sözleşmelerini yönetir, düzenlemeye tabi iş akışlarını değil.",
    },
  ],
  related: [
    { label: "PDF güvenliği ve şifreleme", path: "/pdf-security" },
    {
      label: "İşletmeler için güvenli PDF iş akışları",
      path: "/guides/secure-pdf-workflows-for-business",
    },
    { label: "Telefonda PDF imzala", path: "/sign-pdf" },
  ],
  appCta: {
    heading: "Belge işlemlerini telefonundan yönet.",
    sub: "Günlük iş kullanımı için ücretsiz. Kişi başı lisans yok.",
  },
};

export default content;
