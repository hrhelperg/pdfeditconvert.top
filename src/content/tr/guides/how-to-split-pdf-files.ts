import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-split-pdf-files",
  h1: "PDF Dosyaları Ayrı Dosyalara Nasıl Bölünür? (Ücretsiz)",
  description:
    "Büyük bir PDF'i tarayıcında sayfa aralığına göre daha küçük dosyalara ayır. Ne zaman bölmeli ne zaman çıkarmalı, ayrıca orijinalleri güvende tutma yöntemi.",
  updated: "2026-05-23",
  intro: [
    "PDF bölmek, tek bir dosyanın aynı anda birkaç belge olmaya çalıştığı durumlarda yaptığın şeydir: aslında bir sözleşme artı ekleri olan taranmış bir paket, sadece bir bölümüne ihtiyacın olan 200 sayfalık bir rapor ya da ayrı dosyalar olarak geri gönderilmesi gereken birleşik bir grup. Tüm dosyayı gönderip insanlardan kendi kısımlarını bulmalarını istemek yerine, onu bölersin.",
    "Bu rehber, bir PDF'i doğrudan tarayıcında sayfa aralığına göre bölen ücretsiz PDF Böl aracını kullanıyor — hiçbir şey yüklenmez. Bu, tek bir dosyayı gerçekten göndermen ya da saklaman gereken daha küçük parçalara dönüştürmenin hızlı ve gizli bir yolu.",
    "Ayrıca yaygın bir kafa karışıklığı noktasını da netleştireceğiz: bir PDF'i bölmek ile sayfa çıkarmak arasındaki fark, çünkü doğru araç, elde etmeye çalıştığın şeye bağlıdır.",
  ],
  steps: [
    {
      title: "PDF Böl aracını aç",
      body: "Tarayıcında PDF Böl aracına git. Cihazında çalışır — yükleme yok, hesap yok.",
    },
    {
      title: "PDF'ini ekle",
      body: "Dosyayı bırakma alanına sürükle ya da seçmek için tıkla. Araç, aralığa göre bölebilmen için sayfa sayısını okur.",
    },
    {
      title: "Belgenin nerede bölüneceğine karar ver",
      body: "Sayfa numaralarına bak ve sınırları belirle — örneğin, 1-10. sayfalar sözleşme, 11-24 ek. Bölmeden önce aralıkları planla.",
    },
    {
      title: "Bölünecek sayfa aralığını gir",
      body: "Kendi dosyası olmasını istediğin aralığı belirt. Ayırman gereken her bölüm için tekrarla.",
    },
    {
      title: "Her parçayı indir",
      body: "Araç, seçtiğin aralık için yeni bir PDF üretir. Her birini net, bölüme özgü bir adla kaydet.",
    },
    {
      title: "Orijinali bozulmadan tut",
      body: "Bölme, kaynağı değiştirmez — orijinal PDF'in cihazında bütün kalır. Her bölmenin doğru çıktığını onaylayana kadar onu sakla.",
    },
  ],
  tips: [
    "Birkaç ayrı belge istediğinde böl; birkaç sayfayı tek bir yeni dosyaya almak istediğinde çıkar. Kulağa benzer gelirler ama farklı sonuçlar üretirler.",
    "Başlamadan önce sayfa sınırlarını not et. Metodolojinin 31. sayfada başladığını zaten bildiğinde uzun bir raporu bölmek çok daha hızlıdır.",
    "Her bölünmüş dosyayı aralığına değil, içeriğine göre adlandır — \"Ek-B.pdf\", bir alıcı için \"25-40-sayfalar.pdf\"ten daha kullanışlıdır.",
    "Önce devasa bir PDF'i bölmek diğer işlemleri de hızlandırır: 15 sayfalık bir bölümü sıkıştırmak ya da dönüştürmek, tam 300 sayfalık dosyayla boğuşmaktan daha iyidir.",
    "Şifre korumalı PDF'ler tarayıcıda işlenemez. Önce şifreyi kaldır ya da korumalı dosyaları destekleyen PDF Editor uygulamasını kullan.",
  ],
  mobileNote:
    "Telefonda bölmek, genelde nerede olursan ol doğru dilimi doğru kişiye göndermekle ilgilidir. PDF Editor uygulaması birkaç dokunuşla böler, çıkarır ve paylaşır, çevrimdışı da çalışır — sahada olup sadece imzalı sayfaları geri göndermen gerektiğinde işe yarar.",
  faq: [
    {
      q: "Bölmek ile çıkarmak arasındaki fark nedir?",
      a: "Bölmek, tek bir PDF'i aralığa göre birden fazla ayrı dosyaya böler. Çıkarmak, seçili sayfaları tek bir yeni dosyaya alır. Bir belgeyi ayırmak için böl, belirli sayfaları toplamak için çıkar kullan.",
    },
    {
      q: "Bölmek orijinal dosyamı değiştirir mi?",
      a: "Hayır. Kaynak PDF'e dokunulmaz — araç, seçtiğin aralıklar için yeni dosyalar oluşturur. Sonuçları kontrol edene kadar orijinali sakla.",
    },
    {
      q: "PDF'im yükleniyor mu?",
      a: "Hayır. Bölme, cihazındaki tarayıcında çalışır, bu yüzden dosya ondan hiç çıkmaz — sözleşmeler ve gizli raporlar için güvenlidir.",
    },
    {
      q: "Bir PDF'i kaç parçaya bölebilirim?",
      a: "İhtiyacın olduğu kadar — her bölüm için aralık seçimini tekrarla. Çok büyük PDF'ler tarayıcı belleğini zorlayabilir; bu durumda PDF Editor uygulaması daha iyi bir seçenektir.",
    },
    {
      q: "Şifre korumalı bir PDF'i bölebilir miyim?",
      a: "Tarayıcıda hayır. Önce şifreyi kaldır ya da korumalı dosyaları açabilen PDF Editor mobil uygulamasını kullan.",
    },
  ],
  related: [
    { label: "PDF Böl — tarayıcında bir dosyayı ayır", path: "/split-pdf" },
    { label: "PDF sayfalarını çıkar — sayfaları yeni bir dosyaya al", path: "/extract-pdf-pages" },
    { label: "PDF'ten sayfalar nasıl çıkarılır", path: "/guides/how-to-extract-pages-from-pdf" },
    { label: "PDF dosyaları nasıl birleştirilir", path: "/guides/how-to-merge-pdf-files" },
  ],
  parentHub: { label: "PDF Böl", path: "/split-pdf" },
};

export default content;
