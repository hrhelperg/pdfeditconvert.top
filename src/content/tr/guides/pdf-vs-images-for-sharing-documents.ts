import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-images-for-sharing-documents",
  h1: "Belge Paylaşmak İçin PDF mi Görsel mi? (JPG, PNG, HEIC)",
  description:
    "Bir belgenin JPG, PNG ya da HEIC hali ne zaman yanlış olur — ve PDF'i hızlı bir ekran görüntüsünün ötesinde her şey için doğru format yapan nedir.",
  updated: "2026-05-29",
  intro: [
    "Şaşırtıcı miktarda iş ve okul işi görsel dosya olarak gönderiliyor — sözleşmelerin JPG'leri, föylerin HEIC fotoğrafları, fişlerin PNG ekran görüntüleri. Bir PDF üretmekten daha hızlı hissettiriyor, telefon bunu kolaylaştırıyor ve alıcı genelde hâlâ okuyabiliyor. Ama belge görselleri neredeyse her gerçek belge iş akışı için yanlış formattır.",
    "PDF'ler ve belge görselleri farklı amaçlara hizmet eder. PDF'ler çok sayfalıdır, aranabilirdir, yazdırılabilirdir, imzalanabilirdir, arşivlenebilirdir ve döndürmede bozulmaz. Görseller tek sayfalıdır, aranabilir değildir, genelde dosya boyutu devasadır ve sık sık bulanık, yan ya da yanlış renkte çıkar. Tek bir hızlı paylaşımın ötesindeki her şey için PDF'ler işi daha iyi yapar.",
    "Bu kılavuz nedenini, belge-görsel yaklaşımının gerçekten işe yaradığı anları (bazen işe yarıyor) ve PDF sürümünü istediğinde basit dönüştürme yolunu anlatıyor.",
  ],
  steps: [
    {
      title: "Bir belge görselinin ne zaman yanlış olduğunu tanı",
      body: "Çok sayfalı belge: yanlış format. Yazdırılması gereken belge: yanlış format. Aranabilir olması gereken belge: yanlış format. Bir dosyaya girecek resmi herhangi bir şey: yanlış format.",
    },
    {
      title: "Görselin uygun olduğu küçük durum kümesini tanı",
      body: "Tek sayfalı, geçici, gündelik. Bir arkadaşa hızlı bir fiş fotoğrafı, bir onay sayfasının ekran görüntüsü, kendine bir el yazısı notun anlık görüntüsü. Görsel, henüz gerçekten bir belge değilken doğru formattır.",
    },
    {
      title: "Paylaşım bir belgeye dönüştüğünde Görselden PDF'e ile dönüştür",
      body: "Görselden PDF'e, JPG, PNG ve WebP'yi tarayıcında bir PDF'te birleştirir. Görsel, OCR uygulanırsa sonradan aranabilir hâle gelir; birçok dosya yerine tek dosya olarak kalır.",
    },
    {
      title: "Kaynak için doğru aracı kullan",
      body: "Fotoğraflar → Görselden PDF'e. Taranan sayfalar → PDF Tarama. Word/Pages belgesi → Word'den PDF'e. Her kaynak formatının en temiz dönüştürme yolu vardır.",
    },
    {
      title: "iPhone HEIC'ini özellikle ele al",
      body: "iPhone varsayılan olarak HEIC kullanır, ki her alıcı bunu açamaz. HEIC → JPG → PDF olarak dönüştür ya da HEIC'i doğrudan ele alan bir araç kullan. PDF Editor uygulamasının tarama akışı HEIC'i yerel olarak destekler.",
    },
    {
      title: "Düşünceli şekilde sıkıştır",
      body: "Ortaya çıkan dosya devasaysa PDF Sıkıştır kullan. Fotoğraf-PDF dönüşümleri fotoğrafın çözünürlüğünü devralır, ki bu genelde bir belge için gerekenden fazladır.",
    },
  ],
  tips: [
    "Telefonda dikey bir belgenin JPG'i yanlış formattır. Telefonu çevir ya da bir tarama uygulaması kullan — sonuç belirgin şekilde daha okunabilir olur.",
    "PNG ekran görüntüleri temiz şekilde PDF'e dönüşebilir ama kağıt belgelerin JPG fotoğrafları genelde kenar algılama için bir tarama uygulamasından geçmelidir.",
    "Çok sayfalı bir belge olarak birden fazla JPG gönderme. Bunları tek bir PDF'te birleştir; alıcılar çok ekli zincirlerin takibini kaybeder.",
    "HEIC iOS varsayılanıdır ama birçok web portalı ve e-posta istemcisi tarafından reddedilir. Alıcının kurulumunu bilmiyorsan paylaşmadan önce dönüştür.",
    "Dizüstü bilgisayar ekranlarının fotoğrafları en kötü durumdur — moiré, yansıma, düşük çözünürlük. Ekranı fotoğraflamak yerine PDF dışa aktarma özelliğini kullan.",
  ],
  mobileNote:
    "Belge-görseli hatalarının en çok gerçekleştiği yer telefonlardır. PDF Editor uygulamasının tarama akışı sayfaları algılar ve baştan temiz PDF'ler üretir, böylece hızlı bir paylaşım ekstra bir dönüştürme adımı olmadan uygun bir belgeye dönüşür.",
  faq: [
    {
      q: "Bir belgenin fotoğrafı neden PDF'ten daha kötü?",
      a: "Fotoğraflar tek sayfalıdır, genelde eğiktir, aranabilir değildir, dosya boyutu devasa olabilir ve döndürme/format sorunları içeriği gizler. PDF bunların hepsini çözer.",
    },
    {
      q: "JPG bir belge için hiç kabul edilebilir mi?",
      a: "Tek sayfalı, gündelik paylaşımlar için evet — bir arkadaşa hızlı bir fiş, bir meslektaşa ekran görüntüsü. Resmi ya da çok sayfalı herhangi bir şey için hayır.",
    },
    {
      q: "Peki HEIC?",
      a: "iPhone'un varsayılan formatı ama evrensel olarak desteklenmiyor. Alıcı Apple cihazlarında değilse paylaşmadan önce JPG ya da PDF'e dönüştür.",
    },
    {
      q: "Birden fazla fotoğrafı tek bir PDF'te nasıl birleştiririm?",
      a: "Görselden PDF'e, JPG, PNG ve WebP'yi tarayıcında tek bir PDF'te birleştirir. Eklemeden önce sırayı belirle; ortaya çıkan PDF onu korur.",
    },
    {
      q: "PDF dosyayı büyütür mü?",
      a: "Kaynağa bağlı. Bir belgenin JPG'i → yeniden sıkıştırma olmadan PDF, yaklaşık aynı boyuttadır. Gerekirse PDF Sıkıştır küçültür.",
    },
  ],
  related: [
    { label: "Görselden PDF'e — fotoğrafları tek dosyada birleştir", path: "/image-to-pdf" },
    { label: "Belgeler için PDF mi JPG mi", path: "/guides/pdf-vs-jpg-for-documents" },
    { label: "JPG PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "iPhone'da fotoğraflar PDF'e nasıl dönüştürülür", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Görselden PDF'e — fotoğrafları PDF'te birleştir", path: "/image-to-pdf" },
};

export default content;
