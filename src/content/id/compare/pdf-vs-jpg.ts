import type { CompareContent } from "@/types/content";

const content: CompareContent = {
  slug: "pdf-vs-jpg",
  h1: "PDF atau JPG — Kapan Menggunakan Format Mana",
  description:
    "PDF atau JPG: kapan sebaiknya memindai, kapan sebaiknya memotret. Bandingkan kualitas, ukuran file, OCR, dan kecocokan untuk alur kerja dokumen.",
  intro: [
    "JPG adalah format foto. PDF adalah format dokumen. Meski pembagiannya sesederhana itu, orang-orang tetap sering mengirim JPG berisi kontrak dan PDF berisi satu gambar saja — kedua pilihan ini memang berfungsi, tapi tidak ideal.",
    "Kesalahan pemakaian ini terjadi karena HP secara default memakai JPG untuk segalanya, mulai dari foto keluarga sampai struk hasil pindaian, sementara laptop secara default memakai PDF untuk dokumen apa pun yang bisa dicetak. Tanpa disadari, orang akhirnya punya JPG struk di galeri dan PDF penuh gambar yang memenuhi folder Downloads.",
    "Perbandingan ini membantu Anda memilih format yang tepat untuk dokumen yang benar-benar Anda kirim: struk, kartu identitas, kontrak, screenshot, foto produk, dan kasus-kasus di antaranya yang jawabannya tidak langsung jelas.",
  ],
  leftLabel: "PDF",
  rightLabel: "JPG",
  rows: [
    { feature: "Dukungan multi-halaman", left: "ya", right: "tidak" },
    { feature: "Teks dapat dicari (dengan OCR)", left: "ya", right: "tidak" },
    { feature: "Tetap tajam di level zoom berapa pun", left: "ya", right: "tidak" },
    { feature: "Ukuran file kecil untuk foto", left: "Terbatas", right: "ya" },
    { feature: "Bisa dilihat di mana saja", left: "ya", right: "ya" },
    { feature: "Proteksi kata sandi", left: "ya", right: "tidak" },
    { feature: "Bisa diedit belakangan", left: "ya", right: "Terbatas" },
    { feature: "Terbaik untuk struk dan kontrak", left: "ya", right: "tidak" },
    { feature: "Terbaik untuk foto produk", left: "tidak", right: "ya" },
  ],
  whenLeft: [
    "Isinya berupa dokumen (struk, kontrak, kartu identitas, formulir)",
    "Hasilnya mungkin perlu beberapa halaman",
    "Anda ingin teks yang dapat dicari (OCR)",
    "Penerimanya adalah akuntan atau sistem bisnis",
    "Anda mungkin perlu menambahkan tanda tangan belakangan",
  ],
  whenRight: [
    "Isinya berupa foto",
    "Ukuran file lebih penting daripada akurasi tampilan",
    "Gambar tunggal, tidak perlu banyak halaman",
    "Dibagikan lewat aplikasi perpesanan yang lebih suka gambar",
    "Diunggah ke media sosial",
  ],
  faq: [
    {
      q: "Bisakah saya mengonversi JPG ke PDF?",
      a: "Bisa. PDF Editor (dan sebagian besar alat PDF lainnya) membungkus JPG menjadi PDF sambil mempertahankan kualitas gambar.",
    },
    {
      q: "Apakah OCR berfungsi pada JPG dari sebuah dokumen?",
      a: "Lebih baik konversi ke PDF dulu, baru jalankan OCR — hasilnya berupa teks yang dapat dicari di dalam format dokumen yang sesungguhnya.",
    },
    {
      q: "Kenapa akuntan lebih suka PDF?",
      a: "Alat akuntansi mereka mengindeks PDF dan mengabaikan JPG. Struk dalam bentuk PDF otomatis dikategorikan; JPG hanya diam di dalam folder.",
    },
  ],
  related: [
    { label: "Konverter PDF", path: "/pdf-converter" },
    { label: "Pindai ke PDF", path: "/scan-to-pdf" },
    { label: "PDF Editor", path: "/pdf-editor" },
  ],
};

export default content;
