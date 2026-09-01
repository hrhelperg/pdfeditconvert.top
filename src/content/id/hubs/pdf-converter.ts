import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-converter",
  hero: {
    eyebrow: "Konverter PDF",
    h1: "Konversi PDF ke format yang benar-benar Anda butuhkan.",
    highlight: "benar-benar",
    lead: "PDF ke Word untuk diedit. PDF ke JPG untuk aplikasi perpesanan. Word dan gambar kembali ke PDF untuk diarsipkan. Satu aplikasi, hasil cepat, tanpa mengunggah apa pun ke server yang tidak jelas asalnya.",
    primaryCta: { label: "Buka aplikasi", href: SITE.app.appStore },
  },
  problem: {
    heading: "Kekacauan konversi yang dialami hampir semua orang",
    paragraphs: [
      "PDF sangat praktis sampai ada yang meminta filenya dalam bentuk Word. Atau sampai aplikasi perpesanan hanya menerima JPG. Atau sampai Anda perlu menggabungkan struk belanja (yang berupa gambar) dengan penawaran harga (yang berupa PDF) menjadi satu dokumen yang siap dikirim.",
      "Situs web konverter PDF publik memang menyelesaikan tugas ini — sekaligus menciptakan masalah baru. Mereka mengunggah file Anda, kadang menyimpannya selama berjam-jam, sering mengunci konversi di atas ukuran tertentu di balik tembok bayar, dan jarang menghasilkan DOCX yang rapi. Tata letak bergeser, font diganti, tabel berantakan.",
      "Konverter native mengerjakan semuanya di perangkat Anda. Mesin yang sama yang menata tata letak PDF membangunnya kembali ke format tujuan. Tabel tetap rapi, font dipetakan secara cerdas, dan Anda tidak pernah menyerahkan kontrak sensitif ke situs gratis yang menutup biayanya lewat jaringan iklan.",
    ],
  },
  features: {
    heading: "Konversi ke dua arah",
    items: [
      {
        icon: "FileText",
        title: "PDF → Word (DOCX)",
        body: "Dokumen Word yang bisa diedit dan tetap mempertahankan tata letak, font, tabel, serta gambar.",
      },
      {
        icon: "Image",
        title: "PDF → JPG dan PNG",
        body: "Ekspor satu halaman atau semua halaman sebagai gambar terpisah, siap untuk perpesanan atau slide.",
      },
      {
        icon: "Sheet",
        title: "PDF → Excel",
        body: "Ekstrak tabel ke sel XLSX yang sesungguhnya, bukan sekadar menempelkan screenshot.",
      },
      {
        icon: "FilePlus",
        title: "Word dan gambar → PDF",
        body: "Ubah DOCX, foto struk belanja, atau screenshot menjadi PDF yang rapi dalam hitungan detik.",
      },
      {
        icon: "ScanText",
        title: "OCR untuk PDF hasil pindaian",
        body: "Jalankan pengenalan teks pada dokumen hasil pindaian agar hasilnya bisa dipilih dan dicari.",
      },
      {
        icon: "Layers",
        title: "Konversi massal",
        body: "Antrekan beberapa file sekaligus. Aplikasi memprosesnya secara lokal di latar belakang.",
      },
    ],
  },
  steps: {
    heading: "Cara mengonversi PDF dari HP",
    items: [
      {
        title: "Buka aplikasi PDF Editor",
        body: "Ketuk ubin Konversi di layar utama.",
      },
      {
        title: "Pilih file sumber",
        body: "Pilih PDF, DOCX, gambar, atau dokumen lain apa pun yang didukung aplikasi.",
      },
      {
        title: "Pilih format hasil",
        body: "Word, Excel, JPG, PNG, PowerPoint — apa pun yang dibutuhkan penerima.",
      },
      {
        title: "Ketuk Konversi",
        body: "Konversi berlangsung di perangkat. Sebagian besar file selesai dalam beberapa detik.",
      },
      {
        title: "Simpan atau bagikan",
        body: "Simpan ke Files, sinkronkan ke Drive atau iCloud, atau bagikan langsung lewat Mail atau aplikasi perpesanan.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Konversi sambil bergerak",
    body: "Kebutuhan konversi yang paling sering terjadi bukanlah “ubah laporan tahunan ini jadi dokumen Word”. Melainkan “ubah foto struk hotel ini jadi PDF yang bisa saya lampirkan ke formulir reimbursement” atau “ambil tiga tabel dari penawaran ini supaya bisa saya tempelkan ke spreadsheet”. Keduanya terjadi di HP, di sela-sela kesibukan lain, dan harus selesai saat itu juga.",
  },
  faq: [
    {
      q: "Format apa saja yang didukung?",
      a: "Untuk kedua arah: Word (DOCX), Excel (XLSX), PowerPoint (PPTX), JPG, PNG, dan teks biasa. Word, gambar, dan beberapa format umum lainnya bisa diubah menjadi PDF.",
    },
    {
      q: "Seberapa akurat konversi PDF ke Word?",
      a: "Sangat akurat untuk PDF berbasis teks — tabel, daftar, dan judul tetap terjaga. Tata letak kompleks dengan banyak kolom mungkin perlu sedikit dirapikan. PDF hasil pindaian perlu OCR terlebih dahulu.",
    },
    {
      q: "Apakah konversi berlangsung offline?",
      a: "Konversi standar berjalan secara lokal. Beberapa fitur lanjutan (OCR kualitas tinggi untuk bahasa tertentu) mungkin memakai cloud — aplikasi akan memberi tahu Anda sebelum mengirim apa pun.",
    },
    {
      q: "Apakah font saya tetap utuh setelah dikonversi?",
      a: "Aplikasi memetakan font secara cerdas. Jika sebuah font tidak terpasang di perangkat tujuan, font yang paling mendekati akan dipakai agar dokumen tetap terbaca dengan benar.",
    },
    {
      q: "Bisakah saya mengonversi PDF yang terproteksi?",
      a: "Jika PDF dilindungi kata sandi, Anda perlu memasukkan kata sandinya sebelum konversi. PDF dengan pembatasan edit biasanya tetap bisa dikonversi asal kata sandi pembuka diketahui.",
    },
  ],
  related: [
    { label: "PDF atau DOCX — mana yang sebaiknya dipakai", path: "/guides/pdf-vs-docx" },
    { label: "Perbandingan PDF atau JPG", path: "/compare/pdf-vs-jpg" },
    { label: "Edit PDF setelah dikonversi", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Konversi PDF tanpa mengunggahnya ke mana pun.",
    sub: "Gratis untuk iOS dan Android. Konversi berlangsung di perangkat.",
  },
};

export default content;
