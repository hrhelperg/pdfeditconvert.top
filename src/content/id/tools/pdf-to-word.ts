import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "pdf-to-word",
  hero: {
    eyebrow: "PDF ke Word",
    h1: "Konversi PDF menjadi Word yang dapat diedit — di browser Anda.",
    highlight: "di browser Anda",
    lead: "Ambil teks dari PDF menjadi file .docx yang dapat diedit dan Anda olah kembali di Word, Google Docs, atau Pages. Konversi teks yang jujur: tanpa janji palsu 'tata letak sempurna'.",
  },
  privacyNote:
    "File Anda diproses secara lokal di browser Anda dan tidak diunggah ke server kami. Tidak ada yang meninggalkan perangkat Anda.",
  howTo: {
    heading: "Cara mengonversi PDF ke Word",
    steps: [
      {
        title: "Tambahkan PDF Anda",
        body: "Seret dan lepas PDF berbasis teks, atau klik untuk memilih satu.",
      },
      {
        title: "Konversi",
        body: "Klik Konversi ke Word. Teks yang dapat dipilih diekstrak secara lokal di browser Anda.",
      },
      {
        title: "Unduh",
        body: "File .docx terunduh secara otomatis. Buka dan edit di mana saja.",
      },
      {
        title: "Rapikan",
        body: "Terapkan ulang judul dan tata letak di editor Anda. Teksnya milik Anda, bisa disusun ulang sesuka hati.",
      },
    ],
  },
  useCases: {
    heading: "Kapan ini adalah alat yang tepat",
    items: [
      {
        title: "Gunakan ulang teks kontrak",
        body: "Ambil klausul dari kontrak PDF menjadi draf yang dapat diedit, tanpa perlu mengetik ulang.",
      },
      {
        title: "Susun ulang sebuah laporan",
        body: "Pindahkan teks isi laporan PDF ke dokumen yang bisa Anda susun ulang.",
      },
      {
        title: "Kutip dan rujuk",
        body: "Ambil bagian teks untuk catatan, ringkasan, atau kutipan tanpa transkripsi manual.",
      },
      {
        title: "Perbaiki PDF yang sumber aslinya sudah hilang",
        body: "Pulihkan teks yang dapat diedit ketika file .docx aslinya sudah lama hilang.",
      },
    ],
  },
  limitations: {
    heading: "Keterbatasan yang jujur",
    items: [
      {
        title: "Tata letak tidak dipertahankan",
        body: "Alat ini hanya mengekstrak teks. Kolom, tabel, spasi persis, font, dan gambar tidak direproduksi. Anda perlu menerapkan ulang format di editor Anda.",
      },
      {
        title: "PDF hasil pindaian tidak akan berfungsi",
        body: "PDF berupa gambar atau hasil pindaian tidak memiliki lapisan teks. OCR (pengenalan teks) tidak tersedia di browser; untuk pindaian, gunakan aplikasi PDF Editor di ponsel.",
      },
      {
        title: "Dokumen kompleks perlu dirapikan",
        body: "PDF dengan desain rumit (multi-kolom, catatan kaki) diekstrak sebagai aliran teks yang dapat dibaca namun perlu dirapikan lagi.",
      },
    ],
  },
  related: [
    { label: "Word ke PDF — kebalikannya", path: "/word-to-pdf" },
    { label: "PDF ke Gambar", path: "/pdf-to-images" },
    { label: "Semua Alat PDF Gratis", path: "/pdf-tools" },
    { label: "PDF atau DOCX — mana yang digunakan", path: "/compare/pdf-vs-docx" },
    {
      label: "Cara mengonversi PDF ke Word",
      path: "/guides/how-to-convert-pdf-to-word",
    },
  ],
  faq: [
    {
      q: "Apakah file saya diunggah ke server?",
      a: "Tidak. Ekstraksi teks berjalan sepenuhnya di browser Anda. PDF Anda tidak pernah meninggalkan perangkat Anda.",
    },
    {
      q: "Apakah file Word akan terlihat persis seperti PDF-nya?",
      a: "Tidak, dan kami tidak berpura-pura demikian. Ini adalah konversi teks yang praktis. Tata letak, font, kolom, dan gambar tidak dipertahankan; Anda menerapkan ulang format di editor Anda.",
    },
    {
      q: "Kenapa muncul pesan bahwa tidak ada teks yang ditemukan?",
      a: "PDF Anda kemungkinan adalah hasil pindaian atau file berupa gambar tanpa lapisan teks. Alat berbasis browser tidak bisa melakukan OCR; aplikasi PDF Editor di ponsel bisa.",
    },
    {
      q: "Format apa yang saya dapatkan?",
      a: "File .docx standar yang bisa dibuka di Microsoft Word, Google Docs, Pages, dan LibreOffice.",
    },
    {
      q: "Bisakah saya mengonversinya kembali?",
      a: "Bisa, gunakan Word ke PDF untuk mengubah file .docx yang sudah Anda edit kembali menjadi PDF.",
    },
  ],
  appCta: {
    heading: "Butuh alat PDF saat bepergian?",
    sub: "PDF Editor untuk iPhone dan Android mengonversi, mengedit, dan menandatangani dokumen langsung dari ponsel Anda.",
  },
};

export default content;
