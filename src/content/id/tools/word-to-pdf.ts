import type { ToolContent } from "@/types/content";

const content: ToolContent = {
  slug: "word-to-pdf",
  hero: {
    eyebrow: "Word ke PDF",
    h1: "Konversi Word menjadi PDF — di browser Anda.",
    highlight: "di browser Anda",
    lead: "Ubah file .docx atau .txt menjadi PDF yang rapi dan siap dibagikan. Berjalan sepenuhnya di perangkat Anda; dokumen Anda tidak pernah diunggah.",
  },
  privacyNote:
    "File Anda diproses secara lokal di browser Anda dan tidak diunggah ke server kami. Tidak ada yang meninggalkan perangkat Anda.",
  howTo: {
    heading: "Cara mengonversi Word ke PDF",
    steps: [
      {
        title: "Tambahkan dokumen Anda",
        body: "Seret dan lepas file .docx atau .txt, atau klik untuk memilihnya.",
      },
      {
        title: "Konversi",
        body: "Klik Konversi ke PDF. Teks dibaca dan ditata ke dalam PDF secara lokal di browser Anda.",
      },
      {
        title: "Unduh",
        body: "PDF A4 yang rapi terunduh secara otomatis.",
      },
      {
        title: "Bagikan",
        body: "Kirim format yang tampil sama di mana pun dan tidak bisa diedit secara tidak sengaja.",
      },
    ],
  },
  useCases: {
    heading: "Kapan ini adalah alat yang tepat",
    items: [
      {
        title: "Kirim salinan yang tidak bisa diedit",
        body: "Bagikan draf sebagai PDF sehingga penerima tidak bisa mengubahnya secara tidak sengaja.",
      },
      {
        title: "Kirim sebuah lamaran",
        body: "Banyak portal mengharuskan format PDF, bukan .docx. Konversikan dulu sebelum diunggah.",
      },
      {
        title: "Arsipkan catatan sederhana",
        body: "Ubah log atau catatan .txt menjadi PDF yang rapi dan berhalaman untuk arsip.",
      },
      {
        title: "Serahkan siap cetak",
        body: "Hasilkan PDF A4 yang konsisten dari sebuah dokumen sederhana.",
      },
    ],
  },
  limitations: {
    heading: "Keterbatasan yang jujur",
    items: [
      {
        title: "Konversi berfokus pada teks",
        body: "Kami mengekstrak dan menata ulang teks dokumen menjadi PDF yang rapi. Font asli, gambar, tabel, dan spasi persis dari .docx tidak direproduksi.",
      },
      {
        title: "Tidak mendukung .doc lama",
        body: "File biner .doc lama tidak dapat dibaca di browser. Simpan dulu sebagai .docx.",
      },
      {
        title: "Karakter tidak umum disederhanakan",
        body: "Font PDF bawaan mendukung teks Latin; beberapa karakter khusus disederhanakan agar konversi tidak pernah gagal.",
      },
    ],
  },
  related: [
    { label: "PDF ke Word — kebalikannya", path: "/pdf-to-word" },
    { label: "Gambar ke PDF", path: "/image-to-pdf" },
    { label: "Gabung PDF", path: "/merge-pdf" },
    { label: "Semua Alat PDF Gratis", path: "/pdf-tools" },
    {
      label: "Cara mengonversi Word ke PDF",
      path: "/guides/how-to-convert-word-to-pdf",
    },
  ],
  faq: [
    {
      q: "Apakah file saya diunggah ke server?",
      a: "Tidak. Konversi berjalan sepenuhnya di browser Anda. Dokumen Anda tidak pernah meninggalkan perangkat Anda.",
    },
    {
      q: "Apakah PDF-nya akan terlihat persis seperti file Word saya?",
      a: "Tidak, dan kami tidak mengklaim demikian. Ini adalah konversi yang mengutamakan teks bersih: font, gambar, tabel, dan spasi persis dari .docx tidak direproduksi.",
    },
    {
      q: "File apa saja yang didukung?",
      a: "Word .docx modern dan teks polos .txt. Format biner .doc lama tidak didukung, simpan dulu sebagai .docx.",
    },
    {
      q: "Apakah ada batas ukuran?",
      a: "Hingga 100 MB per file, karena semuanya diproses dalam memori browser Anda.",
    },
    {
      q: "Bisakah saya mengonversi PDF kembali ke Word?",
      a: "Bisa, gunakan PDF ke Word untuk mengekstrak teksnya kembali menjadi file .docx yang dapat diedit.",
    },
  ],
  appCta: {
    heading: "Butuh alat PDF saat bepergian?",
    sub: "PDF Editor untuk iPhone dan Android mengonversi, menandatangani, dan membagikan dokumen langsung dari ponsel Anda.",
  },
};

export default content;
