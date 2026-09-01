import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "when-to-use-scanned-pdf",
  h1: "Taranmış PDF Ne Zaman Kullanılmalı (Ne Zaman Kullanılmamalı)",
  description:
    "Taranmış PDF'ler belirli bir sorunu çözer — kağıttan dijitale geçiş. Aynı zamanda daha büyük, daha az aranabilir ve düzenlemesi daha zordurlar. Bu takasın ne zaman değdiği.",
  updated: "2026-05-29",
  intro: [
    "Taranmış PDF'ler belirli bir sorunu çözer: kağıdı, herhangi bir cihazda paylaşılabilen, arşivlenebilen ve görüntülenebilen dijital bir dosyaya dönüştürmek. Bunu iyi yaparlar. Ama aynı zamanda eşdeğer yazılı PDF'lerden daha büyüktürler, OCR olmadan aranabilir değildirler, düzenlemesi daha zordur ve genelde kaynaktan daha düşük çözünürlüktedirler. Dijital olarak zaten var olan bir belgeyi taramak neredeyse her zaman yanlış hamledir.",
    "Doğru kural kısadır. Dijital kaynağı olmayan kağıdı tara. Zaten bir Word belgesi, bir ekran görüntüsü ya da bir PDF dışa aktarımı olarak sahip olduğun hiçbir şeyi tarama. Bir belgeyi “kilitlemek” için yazdırıp-sonra-taramanın cazibesi anlaşılabilir ama genelde gereksizdir — doğrudan bir PDF dışa aktarımı aynı şeyi daha iyi yapar.",
    "Bu kılavuz ne-zaman-taramalı ve ne-zaman-taramamalıyı anlatıyor. Söylendiğinde çoğu sezgiseldir; sorun, tarama cazibesinin genelde gerçek ihtiyaçtan daha güçlü olmasıdır.",
  ],
  steps: [
    {
      title: "Tek kaynak kağıt olduğunda taranmış PDF kullan",
      body: "Eski sözleşmeler, el yazısı notlar, kağıt fişler, postayla gelen belgeler, elle imzalanmış formlar. Fiziksel olarak var olan ve dijital olması gereken her şey. Telefonunda ya da bir masaüstü tarayıcıda PDF Tarama temiz bir PDF üretir.",
    },
    {
      title: "Dijital olarak sahip olduğun belgeleri tarama",
      body: "Word belgesine, kaynak PDF'e ya da dışa aktarıma sahipsen onları kullan. Yazdırıp-sonra-tarama sadakat kaybeder, dosyayı büyütür ve aranabilirliği kaldırır. Hiçbir faydası yok.",
    },
    {
      title: "Bir belgeyi “kilitlemek” için tarama",
      body: "Kaynaktan PDF'e yeniden dışa aktarmak içeriği kilitler. Tarama güvenlik eklemez; dosyayı değiştirmesi daha zor hâle getirmeden aranabilirliği ve metin kalitesini kaldırır.",
    },
    {
      title: "Tarıyorsan ve aranabilirliğe ihtiyacın varsa OCR kullan",
      body: "OCR, metnin taranmış görsellerini aranabilir alttaki metne dönüştürür. Olmadan, taranmış PDF'ler kelimelerin resimleridir — okunabilir ama aranabilir değildir.",
    },
    {
      title: "Paylaşmadan önce taramaları sıkıştır",
      body: "Taranmış PDF'ler yaygın olarak karşılaşacağın en büyük PDF'lerdir. Tarayıcındaki PDF Sıkıştır, özellikle sadece metin içeren belgelerde, belirgin bir kalite kaybı olmadan bunları belirgin şekilde küçültür.",
    },
    {
      title: "Doğru çözünürlükte tara",
      body: "Ekranda okunacak belgeler için 200–300 DPI. Yazdırılabilecek herhangi bir şey için 300 DPI. 600 DPI fotoğraf kalitesindedir ve metinde yer israf eder.",
    },
  ],
  tips: [
    "Çoğu “bunu taramam lazım” anı, aslında “bu dijital olarak elimde var ve unuttum”a dönüşür. Önce kaynağı ara.",
    "Doğrudan bir PDF dışa aktarımı, ölçülebilir her açıdan taranmış bir çıktıdan daha temizdir: daha keskin, daha küçük, aranabilir, düzenlenebilir.",
    "Telefon taramaları artık kenar algılama ve kontrast ayarlamasıyla sıradan belgeler için masaüstü tarayıcı kalitesine ulaşıyor.",
    "OCR uygulanan taramalar aranabilirdir ama metin açısından kusursuz değildir. OCR çıktısını yaklaşık kabul et, kesin değil.",
    "Taze bir dosyayı “resmi görünmesi” için tarama. Format aynıdır; kimse taranıp taranmadığını umursamaz.",
  ],
  mobileNote:
    "Telefonlar günlük tarama için doğru araçtır — kamera üzerinde, kenar algılama temiz sonuçlar üretir ve ortaya çıkan PDF hemen kullanılabilir. PDF Editor uygulamasının tarama akışı bunun için, çok sayfalı çekim ve cihaz üzerinde temizlikle kurulmuştur.",
  faq: [
    {
      q: "Word dosyası olarak sahip olduğum bir belgeyi taramalı mıyım?",
      a: "Hayır. Doğrudan PDF'e aktar. Tarama çözünürlük kaybeder, dosyayı büyütür ve aranabilirliği kaldırır.",
    },
    {
      q: "Taranmış bir PDF dışa aktarılan bir PDF'ten daha mı “resmi”?",
      a: "Hayır. İkisi de PDF'tir. Resmiyet imzalardan ve içerikten gelir, tarama kökeninden değil.",
    },
    {
      q: "Tarama gerçekten ne zaman yardımcı olur?",
      a: "Kaynak kağıt olduğunda. Postayla gelen sözleşmeler, el yazısı notlar, el yazısı içeren kağıt formlar. Bunları dijitalleştirmenin tek yolu tarama.",
    },
    {
      q: "Her taramaya OCR uygulamalı mıyım?",
      a: "Aracın destekliyorsa evet. Aranabilir taramalar uzun vadede çok daha kullanışlıdır ve OCR görünür görünümü değiştirmez.",
    },
    {
      q: "Taranmış bir PDF ne kadar büyük olmalı?",
      a: "Tipik belgeler için birkaç yüz KB'dan birkaç MB'a. Bundan çok daha büyük taramalar sıkıştırmadan fayda görür.",
    },
  ],
  related: [
    { label: "PDF Tarama — telefon kamerasıyla tarama", path: "/scan-to-pdf" },
    { label: "Telefonla belgeler PDF'e nasıl taranır", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Taranmış PDF kalitesi nasıl düzeltilir", path: "/guides/how-to-fix-scanned-pdf-quality" },
    { label: "Düzenlenebilir PDF ile görüntü PDF'i farkı", path: "/guides/editable-pdf-vs-flat-pdf" },
  ],
  parentHub: { label: "PDF Tarama — telefon kamerasıyla tarama", path: "/scan-to-pdf" },
};

export default content;
