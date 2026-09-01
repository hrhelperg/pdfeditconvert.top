import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fix-sideways-pdf-pages",
  h1: "Yan Yatmış veya Baş Aşağı PDF Sayfaları Nasıl Düzeltilir?",
  description:
    "Yan ya da baş aşağı açılan PDF sayfalarını tarayıcında kalıcı olarak düzelt. Ekranı çevirmenin neden işe yaramadığı ve gerçekte neyin çözüm olduğu.",
  updated: "2026-05-23",
  intro: [
    "Bir PDF açarsın ve bir sayfa yan yatmış durur. Görüntüleyicide döndürürsün, iyi görünür — sonra gönderirsin ve alıcı onu tekrar yan görür. İşte tuzak bu: görüntüleyicide döndürmek genelde sadece senin nasıl gördüğünü değiştirir, sayfanın nasıl saklandığını değil. Herkes için düzeltmek için sayfanın kendisini döndürüp değişikliği kaydetmen gerekir.",
    "Bu rehber, sayfaları 90, 180 ya da 270 derece döndüren ve düzeltmeyi yeni bir dosyaya sabitleyen ücretsiz PDF Döndür aracıyla tam olarak bunu yapıyor — hepsi tarayıcında, hiçbir şey yüklenmeden. İster tek bir sayfa yanlış olsun ister tüm bir tarama yatay çıksın, kalıcı çözüm budur.",
    "Ayrıca sayfaların ilk etapta neden yan yattığını da ele alacağız, böylece kaynakta olmasını durdurabilirsin — genelde bir tarayıcı ya da yanlış tutulan bir telefon.",
  ],
  steps: [
    {
      title: "PDF Döndür aracını aç",
      body: "Tarayıcında PDF Döndür aracına git. Döndürmeyi dosyanın kendisine kaydeder, bu yüzden düzeltme her görüntüleyici için kalıcı olur — yükleme yok, hesap yok.",
    },
    {
      title: "PDF'i ekle",
      body: "Dosyayı bırakma alanına sürükle ya da seçmek için tıkla. Araç, hangilerinin yan ya da baş aşağı olduğunu görebilmen için sayfaları gösterir.",
    },
    {
      title: "Etkilenen sayfaları bul",
      body: "Hangi sayfaların yanlış olduğunu ve ne kadar döndüğünü not et — çeyrek tur, yarım tur. Uzun bir taramada her sayfa olabilir; bir raporda ise sadece tek bir geniş tablo.",
    },
    {
      title: "Dik hale getir",
      body: "İçerik normal okununcaya kadar yanına yatmış bir sayfaya 90°, baş aşağı bir sayfaya 180° ya da diğer yöne dönmüş birine 270° uygula.",
    },
    {
      title: "Doğrula, sonra indir",
      body: "Düzeltilmiş her sayfanın dik olduğunu ve zaten iyi olan sayfaları bozmadığını doğrula, sonra düzeltilmiş PDF'i dışa aktar.",
    },
    {
      title: "Bir dahaki sefere kaynakta düzelt",
      body: "Yan sayfalar genelde sayfaları yatay besleyen bir tarayıcıdan ya da yanlış tutulan bir telefondan gelir. Tarama yönünü ya da telefonu tutuş şeklini ayarlamak, sorunun tekrarlanmasını önler.",
    },
  ],
  tips: [
    "Bir PDF görüntüleyicide döndürmek genelde sadece görünümünü değiştirir, kaydedilen dosyayı değil — bu yüzden sayfa alıcıya tekrar yan görünür. Gerçekten düzelten şey, döndürülmüş bir kopyayı kaydetmektir.",
    "Sadece gerçekten yanlış olan sayfaları döndür. Doğru şekilde geniş bir yatay tablo (bir elektronik tablo, bir grafik) öyle olması gerektiği içindir; onu döndürmek işleri daha kötü yapar.",
    "Tüm tarama yatayysa, her sayfaya uygulanan tek bir 90° döndürme genelde tek hamlede düzeltir.",
    "Döndürmeyi yeniden sıralamadan ya da birleştirmeden önce düzelt — her sayfa dikken sırayı değerlendirmek ve belgeleri birleştirmek çok daha kolaydır.",
    "Orijinali sakla. Fazla döndürmek kolay yapılır; dokunulmamış dosyadan yeniden yapmak, ileri geri döndürmekten daha hızlıdır.",
  ],
  mobileNote:
    "Yan sayfalar neredeyse her zaman bir telefonda ortaya çıkar ve onları düzeltmenin en hızlı yeri de orasıdır. PDF Editor uygulaması sayfaları tek dokunuşla döndürür ve düzeltmeyi çevrimdışı olarak dosyaya kaydeder — böylece taze taranan bir belge, elinden hiç çıkmadan dik olur.",
  faq: [
    {
      q: "Sayfa bana düzelmiş görünüyor ama başkalarına neden yan görünüyor?",
      a: "Bir görüntüleyicide döndürmek genelde sadece ekrandaki görünümünü değiştirir, sayfanın nasıl saklandığını değil. Herkes için düzeltmek için sayfayı döndür ve yeni bir dosya kaydet — PDF Döndür aracının yaptığı tam olarak bu.",
    },
    {
      q: "Ne kadar döndürmeliyim?",
      a: "Yanına yatmış bir sayfa için 90°, baş aşağı için 180°, ters yöne dönmüş biri için 270°. İçeriği dik getiren miktarı seç.",
    },
    {
      q: "Döndürmeyi düzeltmek kaliteyi düşürür mü?",
      a: "Hayır. Döndürmek sadece yönü değiştirir; sayfa içeriği ve çözünürlük değişmez.",
    },
    {
      q: "Dosyam yükleniyor mu?",
      a: "Hayır. Döndürme, cihazındaki tarayıcında çalışır, bu yüzden dosya gizli kalır.",
    },
    {
      q: "Sayfaların yan taranmasını nasıl durdururum?",
      a: "Tarayıcını sayfa yönünü algılayacak ya da eşleştirecek şekilde ayarla ya da telefonunu, sayfa kadrajı dik doldursun diye tut. Yakalarken düzeltmek, sonraki döndürme adımından tasarruf sağlar.",
    },
  ],
  related: [
    { label: "PDF Döndür — tarayıcında sayfaları düzelt", path: "/rotate-pdf" },
    { label: "PDF sayfaları nasıl döndürülür", path: "/guides/how-to-rotate-pdf-pages" },
    { label: "Telefonla belgeler PDF'e nasıl taranır", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "PDF sayfaları nasıl yeniden sıralanır", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "PDF Döndür", path: "/rotate-pdf" },
};

export default content;
