import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-rotate-pdf-pages",
  h1: "PDF Sayfaları Nasıl Döndürülür? (Ücretsiz, Yükleme Yok)",
  description:
    "PDF'in tüm ya da seçili sayfalarını tarayıcında 90, 180 veya 270 derece döndür. Yatay taramaları ve baş aşağı sayfaları düzelterek belgeyi okunur hale getir.",
  updated: "2026-05-23",
  intro: [
    "Yan açılan bir PDF, küçük ama sürekli can sıkan bir şeydir. Ya başını eğersin ya da telefonunu döndürmeye devam edersin ve sayfa onunla birlikte döner. Çözüm, sayfayı dik olarak kaydedilecek şekilde döndürmektir — o zaman herkes için, her cihazda, kimse boynunu uzatmadan doğru okunur.",
    "Bu rehber, tüm ya da seçili sayfaları 90, 180 ya da 270 derece döndüren, doğrudan tarayıcında çalışan ve hiçbir şey yüklemeyen ücretsiz PDF Döndür aracını kullanıyor. İster tek bir sayfa yanlış olsun ister tüm belge tarayıcıdan yatay çıksın, doğru çözüm budur.",
    "Döndürmek, sayfanın nasıl saklandığına yönelik kalıcı bir değişikliktir, bu yüzden bunu sadece ihtiyacı olan sayfalara nasıl uygulayacağını ve kaydetmeden önce sonucu nasıl doğrulayacağını ele alacağız.",
  ],
  steps: [
    {
      title: "PDF Döndür aracını aç",
      body: "Tarayıcında PDF Döndür aracına git. Cihazında çalışır — yükleme yok, hesap yok.",
    },
    {
      title: "PDF'ini ekle",
      body: "Dosyayı bırakma alanına sürükle ya da seçmek için tıkla. Araç, hangilerinin yanlış olduğunu görebilmen için sayfaları gösterir.",
    },
    {
      title: "Hangi sayfaların döndürüleceğine karar ver",
      body: "Her sayfayı döndür ya da sadece yanlış olanları — örneğin, aksi takdirde dik bir raporun içindeki tek bir yatay tablo. Hangi sayfaların ve hangi yönde olduğunu not et.",
    },
    {
      title: "Döndürme miktarını seç",
      body: "Yanına yatmış bir sayfa için 90°, baş aşağı bir sayfa için 180° ya da diğer yöne dönmüş biri için 270° seç. Bunu seçtiğin sayfalara uygula.",
    },
    {
      title: "Her sayfanın dik durduğunu kontrol et",
      body: "Düzeltilmiş sayfaların artık normal okunduğunu ve zaten iyi olanları kazara döndürmediğini doğrula.",
    },
    {
      title: "Düzeltilmiş PDF'i indir",
      body: "Döndürülmüş dosyayı dışa aktar ve net bir adla kaydet. Baştan başlaman gerekirse diye orijinal dokunulmadan kalır.",
    },
  ],
  tips: [
    "Sadece yanlış olan sayfaları döndür. Çoğu sayfası iyi olan bir belgeye toptan döndürme uygulamak sadece yeni sorunlar yaratır.",
    "Yatay sayfalar — geniş tablolar, grafikler, PDF'e aktarılmış elektronik tablolar — genelde yatay olması gerekenlerdir. Sadece içerik gerçekten yana yatıksa döndür, doğru şekilde geniş olan sayfaları değil.",
    "Sayfalar hem yanlış sırada hem de dönmüşse, önce döndürmeyi düzelt, sonra yeniden sırala — her sayfa dikken sırayı değerlendirmek daha kolaydır.",
    "Birleştirmeden önce döndürmek, birleşik belgenin en baştan doğru olması, ortada gizli hiçbir yan sürprizin olmaması demektir.",
    "Orijinali sakla. Yanlış yöne döndürürsen, ileri geri döndürmek yerine dokunulmamış dosyadan yeniden yapmak daha hızlıdır.",
  ],
  mobileNote:
    "Yan taramalar en çok telefonda olur ve düzeltmenin en hızlı olduğu yer de orasıdır. PDF Editor uygulaması sayfaları tek dokunuşla döndürür ve çevrimdışı çalışır, böylece taze taranan bir belgeyi cihazdan hiç çıkmadan düzeltebilirsin.",
  faq: [
    {
      q: "Sadece bir sayfayı döndürebilir miyim?",
      a: "Evet. Sadece yanlış olan sayfaları seç ve onları döndür, belgenin geri kalanını olduğu gibi bırak.",
    },
    {
      q: "Hangi döndürmeyi seçmeliyim?",
      a: "Yana yatmış bir sayfa için 90°, baş aşağı bir sayfa için 180° ve ters yöne dönmüş biri için 270°. İçeriği dik getiren miktarı seç.",
    },
    {
      q: "Döndürme kalıcı mı?",
      a: "Sayfanın her yerde dik okunması için dışa aktarılan dosyaya kaydedilir. Orijinalin dokunulmadan kalır, bu yüzden gerekirse her zaman yeniden yapabilirsin.",
    },
    {
      q: "PDF'im yükleniyor mu?",
      a: "Hayır. Döndürme, cihazındaki tarayıcında çalışır, bu yüzden dosya ondan hiç çıkmaz.",
    },
    {
      q: "Taramam hem yan hem yanlış sırada — önce ne yapmalıyım?",
      a: "Önce sayfaları dik döndür, sonra sırayı düzeltmek için PDF Sayfalarını Yeniden Sırala aracını kullan. Her şey doğru yöndeyken sırayı değerlendirmek daha kolaydır.",
    },
  ],
  related: [
    { label: "PDF Döndür — tarayıcında yönü düzelt", path: "/rotate-pdf" },
    { label: "PDF Sayfalarını Yeniden Sırala — sırayı düzelt", path: "/reorder-pdf-pages" },
    { label: "Yan yatmış veya baş aşağı PDF sayfaları nasıl düzeltilir", path: "/guides/how-to-fix-sideways-pdf-pages" },
    { label: "PDF sayfaları nasıl yeniden sıralanır", path: "/guides/how-to-reorder-pdf-pages" },
  ],
  parentHub: { label: "PDF Döndür", path: "/rotate-pdf" },
};

export default content;
