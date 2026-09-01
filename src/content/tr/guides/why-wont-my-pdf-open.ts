import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-wont-my-pdf-open",
  h1: "PDF'im Neden Açılmıyor? Nedenleri ve Pratik Çözümleri",
  description:
    "Açılmayan bir PDF neredeyse her zaman beş şeyden biridir. Bozuk indirmeleri, şifre kilitlerini, görüntüleyici hatalarını ve eski dosyaları teşhis etme yöntemi — her biri için ne işe yaradığı.",
  updated: "2026-05-29",
  intro: [
    "Bir PDF'e çift tıklıyorsun ve hiçbir şey olmuyor. Ya da görüntüleyici bir hata veriyor, donuyor ya da beklemediğin bir şifre kutusu açıyor. PDF'lerin sorunsuz çalışması gerekir gibi hissettirir ve çoğu zaman da öyle çalışırlar — biri çalışmadığında, nedenlerinin kısa listesini bilmekte fayda var.",
    "İnatçı bir PDF'in arkasında gerçekten sadece birkaç neden vardır: indirme yarım kaldı, dosya şifreyle korunuyor, görüntüleyici PDF sürümüyle uyuşmuyor, dosya hatalı bir dışa aktarmayla oluşturuldu ya da sadece bir PDF gibi görünen başka bir dosya türü. Her birinin belirli, tekrarlanabilir bir çözümü var.",
    "Bu rehber, kontrol edilmeye değer sırayla teşhisleri tek tek ele alıyor, her biri için doğru araçla. Çoğu çözüm gelişmiş bir numara öğrenmek değil, hangi sorunla karşı karşıya olduğunu belirlemekle ilgili.",
  ],
  steps: [
    {
      title: "Başka bir şey yapmadan önce dosyayı yeniden indir",
      body: "Yarım kalmış bir indirme, bir PDF'in açılmamasının tek en yaygın nedenidir. Dosyayı yeniden almak sorunu saniyeler içinde çözer. Hâlâ başarısız oluyorsa, dosya boyutu kaynakla eşleşiyor ve kaynak dosyayı hâlâ yüklüyorsa — kötü bir indirme olasılığını elemiş olursun.",
    },
    {
      title: "Şifreyle korunup korunmadığını kontrol et",
      body: "Bazı görüntüleyiciler bir şifre istemi yerine genel bir hata verir. Dosya bir bankadan, işverenden ya da hukuki bir sağlayıcıdan geldiyse, bir şifre olduğunu varsay. Orijinal gönderen onu bilecektir.",
    },
    {
      title: "Farklı bir PDF görüntüleyici dene",
      body: "Tarayıcılar, macOS'taki Önizleme, Adobe Acrobat ve mobil okuyucular PDF'leri hafifçe farklı şekilde ayrıştırır. Bir görüntüleyicinin reddettiği bir dosya genelde bir diğerinde sorunsuz açılır. Bir tarayıcı sekmesi çalışıyor ama masaüstü uygulaması çalışmıyorsa, bozuk bir dosyaya değil bir görüntüleyici-sürüm uyuşmazlığına bakıyorsundur.",
    },
    {
      title: "Gerçek dosya türünü incele",
      body: "E-postadan ya da sohbetten gelen dosyalar bazen .pdf uzantısı taşır ama aslında .docx, .html, bir görsel ya da ZIP'tir. Genel bir metin düzenleyiciyle açmak ilk birkaç baytı ortaya çıkarır. Gerçek bir PDF %PDF- ile başlar. Başka bir şeyse yeniden adlandır ya da yeniden iste.",
    },
    {
      title: "Yeniden dışa aktarma döngüsüyle onar",
      body: "Dosya gerçekten geçerli ama incelikli şekillerde bozuksa, onu hâlâ görüntüleyebilen bir görüntüleyicide açıp PDF'e yazdırmak ya da yeniden dışa aktarmak çoğu zaman temiz bir kopya üretir. Bazı bozuk nesneler yeniden yazılır ve yeni dosya her yerde açılır.",
    },
    {
      title: "Sorun bellekse boyutunu küçült",
      body: "Eski telefonlarda, çok büyük tarama ağırlıklı PDF'ler hiç açılamayabilir. Tarayıcındaki PDF Sıkıştır aracı dosyayı yerinde küçültür; sıkıştırılmış kopya, orijinalin açılmadığı yerde açılır.",
    },
  ],
  tips: [
    "İndirilen dosya boyutunu gönderenin paylaştığıyla karşılaştır. Bir uyuşmazlık doğrudan yarım kalmış bir indirmeye işaret eder.",
    "Bir tarayıcı PDF'i açıyor ama masaüstü uygulaman açmıyorsa, şimdilik tarayıcıda açılacak şekilde varsayılan yap — hiçbir şey kaybetmezsin ve devam edersin.",
    "Telefonda açılan ama dizüstü bilgisayarda başarısız olan (ya da tam tersi) bir dosya genelde bozuk bir dosya değil, görüntüleyici sürüm sorunudur. Çalışan görüntüleyiciyi seç.",
    "E-posta ekli PDF'ler tekrar tekrar başarısız olursa, masaüstü istemcisi yerine webmail arayüzünden indirmeyi dene — istemciler bazen büyük ekleri yarıda keser.",
    "Onarım döngülerine başlamadan önce orijinalleri kaydet. Kötü bir yeniden dışa aktarma, orijinalin koruduğu form alanlarını ya da işaretlemeleri kaybedebilir.",
  ],
  mobileNote:
    "Telefonda, en yaygın suçlu düzensiz hücresel bağlantı üzerinden yarım kalan bir indirmedir. PDF Editor uygulaması dosyaları yerel olarak saklar ve büyük PDF'leri, kesilmenin genelde gerçekleştiği yer olan tarayıcı önbelleğine bağımlı olmadan yeniden alıp açmanı sağlar.",
  faq: [
    {
      q: "Gönderen dosyanın sorunsuz olduğunu söylerken PDF'im neden bozuk diyor?",
      a: "Neredeyse her zaman yarım kalmış bir indirme. Dosyayı yeniden al; bayt boyutunun gönderenin paylaştığıyla eşleştiğini kontrol et. Yeni kopya açılıyorsa, orijinal kopya eksikti.",
    },
    {
      q: "Görüntüleyicim elimde olmayan bir şifre istiyor. Şimdi ne yapmalıyım?",
      a: "Onu sadece orijinal gönderen paylaşabilir. Alıcı tarafından gerçek bir PDF şifresini atlamanın güvenli bir yolu yoktur, bunu vaat eden araçlardan kaçınılmalıdır.",
    },
    {
      q: "Neden Chrome'da açılıyor ama Acrobat'ta açılmıyor?",
      a: "Eski masaüstü görüntüleyiciler daha yeni PDF özelliklerini desteklemeyebilir. Ya çalışan görüntüleyiciyi kullanmaya devam et ya da uyumlu bir kopya üretmek için dosyayı bir yazdır-PDF'e adımından geçirerek yeniden dışa aktar.",
    },
    {
      q: "Bozuk PDF'leri sadece “düzelten” bir araç var mı?",
      a: "Bazen — dosyayı yeniden dışa aktarmadan (aç, yazdır-PDF'e, kaydet) geçirmek küçük yapısal sorunları temizler. Ama ağır hasarlı PDF'ler genelde kurtarılamaz.",
    },
    {
      q: "Sıkıştırmak açılmayan dosyalara yardımcı olur mu?",
      a: "Sadece neden bellekse: aşırı büyük tarama ağırlıklı PDF'ler bazen eski telefonlarda başarısız olur. PDF Sıkıştır onları yüklenecek kadar küçültür. Yapısal olarak bozuk bir dosyayı düzeltmez.",
    },
  ],
  related: [
    { label: "PDF Sıkıştır — açılmayan büyük dosyaları küçült", path: "/compress-pdf" },
    { label: "PDF araçları — tarayıcı içi çözümlerin tam listesi", path: "/pdf-tools" },
    { label: "Bozuk Bir PDF Dosyası Nasıl Onarılır?", path: "/guides/how-to-fix-a-corrupted-pdf" },
    { label: "PDF Biçimlendirme Sorunları Nasıl Çözülür? (Satır Kayması, Kenar Boşluğu, Boşluklar)", path: "/guides/how-to-fix-pdf-formatting-problems" },
  ],
  parentHub: { label: "Ücretsiz PDF Araçları", path: "/pdf-tools" },
};

export default content;
