import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-converter",
  hero: {
    eyebrow: "PDF Dönüştürücü",
    h1: "PDF'leri gerçekten ihtiyacın olan formata dönüştür.",
    highlight: "gerçekten",
    lead: "Düzenlemek için PDF'ten Word'e. Mesajlaşma uygulamaları için PDF'ten JPG'ye. Arşivlemek için Word ve görselleri tekrar PDF'e. Tek uygulama, hızlı sonuç, rastgele sunuculara yükleme yok.",
    primaryCta: { label: "Uygulamayı aç", href: SITE.app.appStore },
  },
  problem: {
    heading: "Çoğu kişinin karşılaştığı dönüştürme karmaşası",
    paragraphs: [
      "PDF'ler harikadır, ta ki biri dosyayı Word olarak isteyene kadar. Ya da bir mesajlaşma uygulaması JPG dışında hiçbir şeyi kabul etmeyene kadar. Ya da makbuzları (ki bunlar görseldir) bir teklifle (ki bu bir PDF'tir) tek, gönderilebilir bir belgede birleştirmen gerekene kadar.",
      "Herkese açık PDF dönüştürücü siteleri işi hallediyor — ve yeni sorunlar yaratıyor. Dosyanı yüklüyorlar, bazen saatlerce saklıyorlar, çoğu zaman belirli bir boyutun üzerindeki dönüşümleri ücretli hale getiriyorlar ve nadiren temiz bir DOCX üretiyorlar. Biçimlendirme kayıyor, yazı tipleri değiştiriliyor, tablolar bozuluyor.",
      "Yerel bir dönüştürücü işi cihazında yapar. PDF'i yerleştiren aynı motor onu hedef formatta yeniden oluşturur. Tablolar hizalı kalır, yazı tipleri akıllıca eşleştirilir ve hassas bir sözleşmeyi reklamlarla geçinen ücretsiz bir siteye asla teslim etmezsin.",
    ],
  },
  features: {
    heading: "İki yönde de dönüştür",
    items: [
      {
        icon: "FileText",
        title: "PDF → Word (DOCX)",
        body: "Yerleşimi, yazı tiplerini, tabloları ve görselleri koruyan düzenlenebilir Word belgeleri.",
      },
      {
        icon: "Image",
        title: "PDF → JPG ve PNG",
        body: "Tek tek sayfaları ya da her sayfayı ayrı görseller olarak dışa aktar, mesajlaşma ya da sunumlar için hazır.",
      },
      {
        icon: "Sheet",
        title: "PDF → Excel",
        body: "Tabloları ekran görüntüsü yapıştırmak yerine gerçek XLSX hücrelerine çıkar.",
      },
      {
        icon: "FilePlus",
        title: "Word ve görseller → PDF",
        body: "Bir DOCX'i, bir makbuz fotoğrafını ya da bir ekran görüntüsünü saniyeler içinde temiz bir PDF'e dönüştür.",
      },
      {
        icon: "ScanText",
        title: "Taranan PDF'ler için OCR",
        body: "Taranan belgelerde metin tanıma çalıştır, böylece sonuç seçilebilir ve aranabilir olur.",
      },
      {
        icon: "Layers",
        title: "Toplu dönüştürme",
        body: "Birden fazla dosyayı sıraya koy. Uygulama bunları arka planda yerel olarak işler.",
      },
    ],
  },
  steps: {
    heading: "Telefonda bir PDF nasıl dönüştürülür",
    items: [
      {
        title: "PDF Editor uygulamasını aç",
        body: "Ana ekrandaki Dönüştür kutucuğuna dokun.",
      },
      {
        title: "Kaynak dosyayı seç",
        body: "Bir PDF, DOCX, görsel ya da uygulamanın desteklediği herhangi bir belge seç.",
      },
      {
        title: "Çıkış formatını seç",
        body: "Word, Excel, JPG, PNG, PowerPoint — alıcı tarafın ihtiyacı ne ise.",
      },
      {
        title: "Dönüştür'e dokun",
        body: "Dönüştürme cihaz üzerinde gerçekleşir. Çoğu dosya birkaç saniyede tamamlanır.",
      },
      {
        title: "Kaydet ya da paylaş",
        body: "Dosyalar'a kaydet, Drive ya da iCloud'a eşitle ya da Mail veya mesajlaşma üzerinden doğrudan paylaş.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Hareket halindeyken dönüştürme",
    body: "Gerçekçi dönüştürme işi “bu yıllık raporu Word belgesine çevir” değildir. “Bu otel fişinin fotoğrafını bir gider formuna ekleyebileceğim bir PDF'e çevir” ya da “bu teklifteki üç tabloyu bir e-tabloya yapıştırabilmek için çıkar”dır. İkisi de telefonda, başka işler arasında olur ve hemen yapılması gerekir.",
  },
  faq: [
    {
      q: "Hangi formatlar destekleniyor?",
      a: "Her iki yönde de: Word (DOCX), Excel (XLSX), PowerPoint (PPTX), JPG, PNG ve düz metin. Word, görseller ve birkaç yaygın format PDF'e dönüştürülebilir.",
    },
    {
      q: "PDF'ten Word'e dönüştürme ne kadar doğru?",
      a: "Metin tabanlı PDF'ler için çok doğru — tablolar, listeler ve başlıklar aktarılır. Karmaşık çok sütunlu yerleşimler hafif düzeltme gerektirebilir. Taranan PDF'ler önce OCR gerektirir.",
    },
    {
      q: "Dönüştürme çevrimdışı mı gerçekleşir?",
      a: "Standart dönüşümler yerel olarak çalışır. Bazı gelişmiş özellikler (bazı diller için yüksek kaliteli OCR) bulutu kullanabilir — uygulama bir şey göndermeden önce seni bilgilendirir.",
    },
    {
      q: "Yazı tiplerim dönüşümden sağlam çıkar mı?",
      a: "Uygulama yazı tiplerini akıllıca eşleştirir. Hedef cihazda bir yazı tipi yüklü değilse, belge doğru okunmaya devam etsin diye en yakın eşleşme kullanılır.",
    },
    {
      q: "Korumalı PDF'leri dönüştürebilir miyim?",
      a: "PDF şifreyle korunuyorsa, dönüştürmeden önce şifreyi girmen gerekir. Düzenleme kısıtlaması olan PDF'ler, açma şifresi biliniyorsa genellikle dönüştürülebilir.",
    },
  ],
  related: [
    { label: "PDF veya DOCX — hangisini kullanmalısın", path: "/guides/pdf-vs-docx" },
    { label: "PDF ve JPG karşılaştırması", path: "/compare/pdf-vs-jpg" },
    { label: "Dönüştürdükten sonra PDF'leri düzenle", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "PDF'leri hiçbir yere yüklemeden dönüştür.",
    sub: "iOS ve Android'de ücretsiz. Dönüştürmeler cihaz üzerinde gerçekleşir.",
  },
};

export default content;
