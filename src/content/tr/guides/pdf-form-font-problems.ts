import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-form-font-problems",
  h1: "PDF Form Yazı Tipi Sorunları (Otomatik Boyut, Kırpma, Değişim)",
  description:
    "Alan metni çok mu büyük, çok mu küçük, yoksa yazarken otomatik mi küçülüyor? Form alanlarına özgü yazı tipi tuhaflıkları — otomatik boyutlandırma, değişim, kırpma — ve temiz, okunaklı cevaplar elde etme yöntemi.",
  updated: "2026-06-01",
  intro: [
    "Form alanlarının, bir PDF'in geri kalanından ayrı kendi yazı tipi davranışı vardır, ve bu belirli bir baş ağrısı seti üretir. Daha fazla yazdıkça küçülen metin, bir alanda büyük diğerinde küçük görünen cevaplar, bir alanın üstünde ya da altında kırpılan karakterler ya da formun etiketlerinden farklı görünen bir yazı tipi. Bunlar genel PDF yazı tipi sorunları değil, forma özgü tuhaflıklardır — ve çoğu alanın nasıl kurulduğuyla ilgilidir.",
    "En büyük suçlu otomatik boyutlandırmadır. Birçok alan, daha uzun cevapların hâlâ sığması için metni otomatik olarak küçültecek şekilde yapılandırılmıştır, yazdıkça metninin küçülmesinin nedeni budur. Diğer sorunlar bir alanın yazı tipinin gömülü olmamasından kaynaklanır, bu yüzden bazı görüntüleyicilerde değiştirilir, ya da bir alanın yazı tipi boyutu için basitçe çok kısa olmasından, karakterleri kırpar.",
    "Bu kılavuz forma özgü yazı tipi sorunlarını, her birini nasıl tanıyacağını ve okunaklı, tutarlı cevaplar için neyi değiştirmen gerektiğini anlatıyor. Alanları değil bütün bir belgeyi kapsayan yazı tipi sorunları için, genel PDF yazı tipi kılavuzu daha geniş.",
  ],
  steps: [
    {
      title: "Otomatik boyut küçülmesini tanı",
      body: "Karakter ekledikçe alan metni küçülüyorsa, alan her şeyin sığması için otomatik boyutlandırma kullanıyordur. Bu amaçlanmış bir davranıştır ama uzun cevapları küçültebilir. Cevapları kısa tut ya da formu kontrol ediyorsan sabit bir boyut belirle.",
    },
    {
      title: "Alanlar arası tutarsız boyutları düzelt",
      body: "Bir alanda büyük diğerinde küçük görünen cevaplar genelde her alanın farklı bir yazı tipi boyutu ayarlandığı anlamına gelir. Senin formunsa, her cevabın eşleşmesi için alan yazı tipi boyutunu standartlaştır.",
    },
    {
      title: "Kırpılmış karakterleri ele al",
      body: "Harfler üstten ya da alttan kesiliyorsa, alan yazı tipi boyutu için çok kısadır. Kontrol ettiğin bir formda alanı büyüt ya da yazı tipini küçült, ya da kontrol etmediğin bir formu doldururken daha küçük bir boyut kabul et.",
    },
    {
      title: "Değiştirilmiş yazı tiplerini hallet",
      body: "Alan metni beklenenden farklı bir yazı tipinde görünüyorsa, amaçlanan yazı tipi gömülü değildir ve görüntüleyici bir tane değiştirmiştir. Formu kurarken alan yazı tipini gömmek, görüntüleyiciler arasında tutarlı kalmasını sağlar.",
    },
    {
      title: "Görünümü kilitlemek için formu kilitle",
      body: "Cevapların doğru göründüğünde, formu kilitle. Kilitleme, alan metnini sayfaya sabitler, böylece boyutu ve yazı tipi, alıcının görüntüleyicisi ne olursa olsun her yerde aynı görünür.",
    },
  ],
  tips: [
    "Otomatik boyutlandırma, alan metninin yazarken küçülmesinin olağan nedenidir — okunaklı kalmak için özlü cevaplar ver ya da kurduğun formlarda sabit bir boyut belirle.",
    "Formu tasarlıyorsan, cevapların büyük-küçük karışımı olarak çıkmaması için alan yazı tipi boyutlarını standartlaştır.",
    "Kırpılan karakterler, alanın yazı tipi için çok kısa olduğu anlamına gelir; kontrol ettiğin bir formda alanı ya da yazı tipini yeniden boyutlandır.",
    "Alan yazı tiplerinin ve boyutlarının alıcının ekranında kayamaması için göndermeden önce kilitle.",
    "Alan görünümü görüntüleyiciler arasında değişebilir, o yüzden sabit, gömülü, kilitlenmiş bir sonuç en tutarlı olanıdır.",
  ],
  mobileNote:
    "Telefonda, PDF Editor uygulaması etkileşimsiz formlara seçtiğin bir boyutta metin yerleştirmene izin verir, alan otomatik boyutunu tamamen atlayarak, ve sonucu kilitleyerek yazı tipi ile boyutu sabitler. Etkileşimli alanlar için, cevapları özlü tutmak, uzun girişleri okumayı zorlaştıran otomatik küçülmeyi önler.",
  faq: [
    {
      q: "Form metnim neden yazarken küçülüyor?",
      a: "Alan, daha uzun cevapların hâlâ sığması için metni küçülten otomatik boyutlandırma kullanıyor. Bu amaçlanmış bir davranıştır. Okunaklı kalmak için cevapları özlü tut, ya da formu kontrol ediyorsan sabit bir yazı tipi boyutu belirle.",
    },
    {
      q: "Cevaplarım neden farklı boyutlarda görünüyor?",
      a: "Her alanın muhtemelen kendi yazı tipi boyutu ayarlanmıştır. Kurduğun bir formda, her cevabın eşleşmesi için alan yazı tipi boyutunu standartlaştır. Kurmadığın bir formda ise boyutlar alanlara işlenmiştir.",
    },
    {
      q: "Form alanlarımdaki karakterler neden kesiliyor?",
      a: "Alan, yazı tipi boyutu için çok kısadır, harfleri kırpar. Kontrol ettiğin bir formda alanı büyüt ya da yazı tipini küçült, ya da kontrol etmediğin bir formu doldururken daha küçük bir boyut kullan.",
    },
    {
      q: "Alan yazı tipi neden etiketlerden farklı görünüyor?",
      a: "Alanın amaçlanan yazı tipi gömülü değildir, bu yüzden görüntüleyicin bir tane değiştirdi. Formu oluştururken alan yazı tipini gömmek, farklı görüntüleyicilerde tutarlı kalmasını sağlar.",
    },
    {
      q: "Bu, genel PDF yazı tipi sorunlarından nasıl farklı?",
      a: "Bu, form alanlarının içindeki yazı tipleriyle ilgili — otomatik boyut, alan düzeyinde boyutlandırma, kırpma. Genel PDF yazı tipi kılavuzu, tüm bir belgede eksik ya da değiştirilmiş yazı tiplerini kapsar.",
    },
  ],
  related: [
    {
      label: "PDF yazı tipi sorunları nasıl çözülür",
      path: "/guides/how-to-fix-pdf-font-issues",
    },
    {
      label: "PDF form biçimlendirme sorunları",
      path: "/guides/pdf-form-formatting-issues",
    },
    { label: "PDF form en iyi uygulamaları", path: "/guides/pdf-form-best-practices" },
    { label: "PDF form hataları nasıl düzeltilir", path: "/guides/fix-pdf-form-errors" },
  ],
  parentHub: { label: "PDF Formları", path: "/pdf-forms" },
};

export default content;
