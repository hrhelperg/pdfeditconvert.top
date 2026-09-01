import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf",
  h1: "PDF Nasıl Sıkıştırılır? Kalite Kaybetmeden",
  description:
    "E-posta ya da yükleme için PDF dosya boyutunu kalite kaybetmeden küçült. PDF Editor uygulamasıyla mobil uyumlu eğitim.",
  updated: "2026-05-11",
  intro: [
    "Her e-posta servisinin hâlâ bir ek dosya sınırı var. Gmail 25 MB'ta duruyor. Outlook yaklaşık 20 MB'ta duvara çarpıyor. Slack ve çoğu mesajlaşma uygulaması da yine yaklaşık 25 MB'ta kabul etmeyi kesiyor. Gerçek hayattaki PDF'ler — fotoğraflı teklifler, taranmış sözleşmeler, grafikli raporlar — bu sınırları kolayca aşıyor.",
    "Bir PDF'i küçültmenin iki yolu var. Yanlış yol, daha düşük bir kalite ayarıyla PDF'e yazdırmaktır — bu, metni ve imzaları kalıcı olarak bozar. Doğru yol ise dosyanın içindeki görselleri yeniden sıkıştırıp yazı tiplerini yeniden kodlamaktır; bu, metni keskin tutarken dosya boyutunu %60-90 arasında azaltır.",
    "Bu rehber, iPhone veya Android'de PDF Editor uygulamasıyla doğru yolu adım adım gösteriyor. Adımlar her iki platformda da aynı. Sonunda göndermeye yetecek kadar küçük, ama her yakınlaştırma seviyesinde orijinaliyle aynı görünen bir dosyan olacak.",
  ],
  steps: [
    {
      title: "PDF Editor uygulamasını aç",
      body: "Uygulamayı ana ekranından başlat. Ana ekrandaki Sıkıştırma kutucuğuna dokun.",
    },
    {
      title: "PDF'i ekle",
      body: "Dosya Ekle'ye dokun. Dosyalar / iCloud'dan (iPhone) ya da dosya seçiciden (Android) seç. Herhangi bir uygulamadan bir PDF'i PDF Editor'a paylaşarak da ekleyebilirsin.",
    },
    {
      title: "Bir kalite ön ayarı seç",
      body: "Üç ön ayar neredeyse her durumu karşılar. Dengeli, çoğu dosya için işe yarar. E-postayla göndereceğin ya da yükleyeceğin dosyalar için Küçük'ü seç. Sonucun baskıya hazır olması gerekiyorsa Yüksek'i seç.",
    },
    {
      title: "Sıkıştırılmış sonucu önizle",
      body: "Önizleme'ye dokun. Uygulama orijinal ve sıkıştırılmış dosya boyutunu yan yana, ayrıca ilk birkaç sayfanın küçük resimlerini gösterir. Metnin keskinliğini kontrol etmek için yakınlaştır.",
    },
    {
      title: "Orijinaliyle karşılaştır",
      body: "Orijinal ve sıkıştırılmış sayfalar arasında geçiş yap. Bir şey bozulmuş görünüyorsa (Dengeli'de nadir), farklı bir ön ayar dene.",
    },
    {
      title: "Kaydet veya paylaş",
      body: "Sıkıştırılmış dosyayı yeni bir adla kaydet (böylece orijinal bozulmadan kalır) ya da doğrudan e-posta, Drive veya herhangi bir mesajlaşma uygulaması üzerinden paylaş.",
    },
  ],
  tips: [
    "Bir dosyanın çoğu taranmış sayfalardan oluşuyorsa, Küçük ön ayarı gözle görülür bir kalite kaybı olmadan %90'ın üzerinde küçültme sağlayabilir.",
    "Çoğunlukla metinden oluşan PDF'lerde sıkıştırma kazancı daha küçüktür (%10-30) — dosya zaten verimlidir.",
    "Devasa bir PDF'i sıkıştırmadan önce bölmek, eski telefonlarda işlemi hızlandırır ve göndermede daha fazla esneklik sağlar.",
    "Sıkıştırılmış dosyanın doğru göründüğünü onaylayana kadar orijinali her zaman sakla — bir kez sıkıştırıldığında orijinal kalite geri gelmez.",
    "Sıkıştırılmış PDF'ler aranabilir metni ve imzaları korur. Sıkıştırma, içerik katmanını değil, görselleri ve yazı tipi tablolarını hedef alır.",
  ],
  mobileNote:
    "Sıkıştırma tamamen cihaz üzerinde gerçekleşir. Uçak modu açıkken bile hassas bir sözleşmeyi sıkıştırabilirsin ve bir bayt bile telefonundan çıkmaz.",
  faq: [
    {
      q: "PDF'im ne kadar küçülecek?",
      a: "Görsel ağırlıklı ya da taranmış PDF'ler genelde %60-90 küçülür. Metin ağırlıklı PDF'ler daha az küçülür, genelde %10-30. Uygulama önce ve sonraki tam boyutu gösterir.",
    },
    {
      q: "Görseller bulanıklaşır mı?",
      a: "Dengeli ve Yüksek, normal görüntüleme yakınlaştırmasında görselleri keskin tutar. Küçük daha güçlü görsel sıkıştırması uygular — e-posta için iyi, ama çok yakınlaştırırsan hafif bir yumuşama fark edersin.",
    },
    {
      q: "Şifre korumalı bir PDF'i sıkıştırabilir miyim?",
      a: "Evet, şifreyi girdikten sonra. Uygulama şifre çözmeyi halleder, içeriği sıkıştırır ve kaydederken korumayı yeniden uygulayabilir.",
    },
    {
      q: "Sıkıştırmak ile ZIP'lemek arasındaki fark nedir?",
      a: "ZIP'leme bir PDF'i başka bir kapsayıcıya sarar ama nadiren küçültür — PDF'ler zaten kendi iç sıkıştırmasını kullanır. Gerçek PDF sıkıştırması, dosyanın iç görsellerini ve yazı tiplerini yeniden yazar; gerçek boyut tasarrufu sağlamanın tek yolu budur.",
    },
    {
      q: "Birden fazla PDF'i toplu olarak sıkıştırabilir miyim?",
      a: "Evet. Tek bir oturumda birden fazla dosya ekle; uygulama bunları sırayla işler ve her birine aynı ön ayarı uygular.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — genel bakış", path: "/compress-pdf" },
    { label: "PDF Dönüştürücü", path: "/pdf-converter" },
    {
      label: "PDF dosyaları nasıl birleştirilir",
      path: "/guides/how-to-merge-pdf-files",
    },
  ],
  parentHub: { label: "PDF Sıkıştır", path: "/compress-pdf" },
};

export default content;
