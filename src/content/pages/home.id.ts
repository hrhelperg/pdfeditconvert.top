import type { HomeContent } from "@/types/content";

/**
 * Indonesian homepage copy. Terminology policy:
 * docs/localization/id-terminology.md.
 */
export const HOME_ID: HomeContent = {
  heroEyebrow: "Alat PDF gratis di browser",
  heroH1Before: "Konversi, Gabungkan & Edit PDF ",
  heroH1Highlight: "dalam Hitungan Detik",
  heroH1After: "",
  heroLead:
    "Alat PDF gratis berbasis browser dengan pemrosesan lokal yang privat. Tidak ada yang diunggah ke server.",
  trust: [
    "File diproses secara lokal di browser Anda",
    "Tanpa unggah, tanpa akun, tanpa watermark",
    "Gratis: berfungsi di ponsel dan desktop",
  ],
  browseAllToolsLabel: "Jelajahi semua alat PDF →",
  toolsEyebrow: "Gratis, di browser Anda",
  toolsHeading: "Semua alat PDF yang Anda butuhkan, tanpa perlu unggah.",
  toolsLead:
    "Gabungkan, bagi, putar, beri watermark, dan konversi PDF tanpa meninggalkan halaman ini. Setiap alat berjalan secara lokal di browser Anda.",
  toolBadge: "Alat gratis",
  tools: [
    { id: "image-to-pdf", label: "Gambar ke PDF", desc: "Gabungkan JPG, PNG, WebP menjadi satu PDF." },
    { id: "merge-pdf", label: "Gabungkan PDF", desc: "Gabungkan PDF menjadi satu dokumen." },
    { id: "split-pdf", label: "Bagi PDF", desc: "Ekstrak halaman berdasarkan rentang." },
    { id: "rotate-pdf", label: "Putar PDF", desc: "Perbaiki halaman yang miring." },
    { id: "pdf-to-images", label: "PDF ke gambar", desc: "Ekspor halaman sebagai PNG atau JPG." },
    {
      id: "add-watermark-to-pdf",
      label: "Tambah Watermark",
      desc: "Terapkan teks watermark di setiap halaman.",
    },
    {
      id: "compress-pdf",
      label: "Kompres PDF",
      desc: "Perkecil ukuran file untuk dikirim lewat email atau diunggah ke tempat lain.",
    },
    { id: "pdf-to-word", label: "PDF ke Word", desc: "Ekstrak teks ke file .docx yang bisa diedit." },
    { id: "word-to-pdf", label: "Word ke PDF", desc: "Ubah file .docx atau .txt menjadi PDF yang rapi." },
    {
      id: "reorder-pdf-pages",
      label: "Urutkan Ulang Halaman PDF",
      desc: "Lihat pratinjau dan susun ulang halaman, lalu unduh.",
    },
    {
      id: "extract-pdf-pages",
      label: "Ekstrak Halaman PDF",
      desc: "Simpan halaman atau rentang terpilih sebagai PDF baru.",
    },
  ],
  appBandEyebrow: "Juga tersedia di iPhone & Android · lima alat untuk kebutuhan sehari-hari",
  featureBand: [
    { key: "edit", label: "Edit", sub: "Teks, gambar, halaman" },
    { key: "convert", label: "Konversi", sub: "Word, JPG, PNG" },
    { key: "secure", label: "Amankan", sub: "Lindungi dengan kata sandi" },
    { key: "scan", label: "Pindai", sub: "Kertas ke PDF" },
    { key: "organize", label: "Atur", sub: "Urutkan ulang, bagi" },
  ],
  hubsHeading: "Semua yang Anda lakukan dengan PDF, dijelaskan.",
  hubsLead:
    "Panduan praktis dan alur kerja untuk hal-hal yang benar-benar dilakukan orang dengan PDF setiap hari.",
  hubs: [
    { id: "pdf-editor", label: "PDF Editor", desc: "Edit teks, gambar, dan halaman." },
    { id: "pdf-converter", label: "Konverter PDF", desc: "Konversi ke Word, JPG, PNG, dan lainnya." },
    { id: "compress-pdf", label: "Kompres PDF", desc: "Perkecil ukuran file tanpa kehilangan kualitas." },
    { id: "sign-pdf", label: "Tanda Tangan PDF", desc: "Tambahkan tanda tangan dari ponsel Anda." },
    { id: "scan-to-pdf", label: "Pindai ke PDF", desc: "Ubah kertas menjadi PDF yang rapi." },
    { id: "pdf-security", label: "Keamanan PDF", desc: "Lindungi dokumen dengan kata sandi." },
    { id: "pdf-for-business", label: "PDF untuk Bisnis", desc: "Kontrak dan faktur di mana saja." },
    { id: "pdf-for-students", label: "PDF untuk Pelajar", desc: "Catatan, sorotan, dan panduan belajar." },
    { id: "pdf-forms", label: "Formulir PDF", desc: "Isi, tanda tangani, dan simpan formulir PDF interaktif." },
  ],
  guidesHeading: "Panduan paling banyak dibaca",
  guideBadge: "Panduan",
  featuredGuides: [
    { id: "guides/how-to-edit-pdf-on-iphone", label: "Cara mengedit PDF di iPhone" },
    { id: "guides/how-to-edit-pdf-on-android", label: "Cara mengedit PDF di Android" },
    { id: "guides/how-to-compress-pdf", label: "Cara mengompres PDF" },
    { id: "guides/how-to-sign-pdf-on-phone", label: "Cara menandatangani PDF di ponsel" },
  ],
  browseAllGuidesLabel: "Jelajahi semua {count} panduan PDF →",
  finalCtaHeading: "Bawa PDF Editor ke mana saja.",
  finalCtaSub: "Gratis di iOS dan Android. Tidak perlu akun untuk memulai.",
  faq: [
    {
      q: "Apakah PDF Editor gratis?",
      a: "Ya. Fitur inti untuk mengedit, memindai, mengompres, dan menandatangani bersifat gratis. Beberapa fitur lanjutan tersedia dengan PDF Editor Pro.",
    },
    {
      q: "Apakah bisa digunakan tanpa koneksi internet?",
      a: "Fitur inti pengeditan, pengelolaan halaman, tanda tangan, dan kompresi semuanya berfungsi secara offline. Sinkronisasi cloud dan OCR mungkin memerlukan koneksi internet.",
    },
    {
      q: "Perangkat apa saja yang didukung?",
      a: "PDF Editor tersedia untuk iPhone dan iPad (iOS 16 ke atas) serta ponsel dan tablet Android (Android 9 ke atas).",
    },
    {
      q: "Apakah file saya bersifat privat?",
      a: "Ya. File Anda tetap berada di perangkat Anda kecuali Anda memilih untuk membagikannya. Kami tidak mengunggah dokumen Anda ke server kami.",
    },
    {
      q: "Bisakah saya menggunakan ini untuk dokumen legal?",
      a: "Banyak pengguna menandatangani dan membagikan kontrak menggunakan PDF Editor. Kami tidak memberikan konsultasi hukum. Periksa aturan setempat tentang tanda tangan elektronik sebelum mengandalkannya untuk dokumen penting.",
    },
  ],
};
