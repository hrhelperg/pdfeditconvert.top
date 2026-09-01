import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-docx-for-business",
  h1: "PDF atau DOCX untuk Bisnis (Kontrak, Laporan, Distribusi)",
  description:
    "Alasan dokumen bisnis hampir selalu dikirim sebagai PDF tapi hidup sebagai DOCX. Alat yang tepat di setiap tahap perjalanan sebuah kontrak, laporan, atau faktur.",
  updated: "2026-05-29",
  intro: [
    "Dokumen bisnis punya siklus hidup yang cukup bisa diprediksi. Dibuat draf di Word (DOCX), ditinjau dan diedit di Word, difinalisasi di Word, lalu diekspor ke PDF untuk dikirim, ditandatangani, diarsipkan, dan didistribusikan. File yang sama ada dalam dua format di tahap yang berbeda, dan memakai format yang salah pada tahap yang salah adalah sumber sebagian besar hambatannya.",
    "DOCX adalah format kerja karena bisa diedit, ramah untuk kolaborasi, dan melacak perubahan dengan baik. PDF adalah format pengiriman karena mengunci tata letak, terlihat identik di setiap perangkat, mendukung tanda tangan elektronik, dan menjadi standar universal untuk dokumen bisnis yang diarsipkan.",
    "Panduan ini menjelaskan siklus hidupnya tahap demi tahap — kapan memakai format yang mana, cara berpindah di antara keduanya dengan bersih, dan kesalahan umum yang dilakukan bisnis dengan mengirim format yang salah pada momen yang salah.",
  ],
  steps: [
    {
      title: "Buat draf di DOCX tempat pengeditan terjadi",
      body: "Microsoft Word, Google Docs (ekspor DOCX), Pages → DOCX. Format ini mendukung pengeditan sungguhan, komentar, pelacakan perubahan, kerja multi-penulis. PDF tidak, meski sebagian alat berpura-pura bisa melakukannya.",
    },
    {
      title: "Negosiasikan kontrak di DOCX dengan track changes",
      body: "Coretan revisi kontrak sebaiknya ada di DOCX. Pihak penerima bisa melihat apa yang Anda ubah, memberi komentar pada masing-masing, dan membuat balasannya. Alat coret-revisi PDF memang ada, tapi lebih lambat dan kurang kolaboratif.",
    },
    {
      title: "Ekspor ke PDF saat versinya sudah final",
      body: "Word ke PDF di browser Anda menghasilkan ekspor yang bersih dengan font tersemat dan tata letak yang stabil. Inilah versi yang dikirim ke klien, ditandatangani, dan tersimpan di arsip.",
    },
    {
      title: "Tandatangani dan kirim sebagai PDF",
      body: "Tanda tangan melekat di PDF, bukan DOCX. Tanda Tangan PDF atau aplikasi PDF Editor menangkap tanda tangan pada PDF yang sudah terkunci; sumber DOCX-nya tetap menjadi catatan yang bisa diedit.",
    },
    {
      title: "Arsipkan PDF-nya, simpan DOCX-nya",
      body: "PDF adalah catatan resmi tentang apa yang dikirim/ditandatangani. DOCX disimpan untuk berjaga-jaga jika Anda perlu membuat dokumen terkait nanti. Keduanya punya tempatnya masing-masing; jangan mencampuradukkan fungsinya.",
    },
    {
      title: "Konversikan PDF kembali ke DOCX hanya jika terpaksa",
      body: "PDF ke Word memulihkan teks dari sebuah PDF saat Anda tidak punya sumbernya. Hasilnya bersifat perkiraan — siapkan diri untuk merapikan tata letaknya. Perlakukan ini sebagai jalan darurat, bukan alur kerja rutin.",
    },
  ],
  tips: [
    "Jangan mengirim DOCX ke klien kecuali mereka memintanya secara eksplisit. Versi PDF adalah yang menjadi dasar kesepakatan; DOCX adalah sumber kerja Anda sendiri.",
    "Lacak perubahan hanya di DOCX. Alat anotasi PDF memang ada, tapi tidak bisa menggantikan pelacakan perubahan yang sesungguhnya.",
    "Sematkan font pada ekspor PDF-nya. PDF yang tampil berbeda di komputer klien terkesan tidak profesional.",
    "Kompres PDF-nya untuk email atau unggahan ke portal. Sumber DOCX-nya tidak butuh kompresi; ukurannya sudah kecil. PDF-nya sering kali butuh.",
    "Simpan kedua format itu di folder proyek. PDF-nya di /final/, DOCX-nya di /draf/ atau /sumber/.",
  ],
  mobileNote:
    "HP sering menangani momen-momen tahap akhir PDF bisnis — menandatangani kontrak, mengompres laporan, mengirim versi final. Aplikasi PDF Editor menangani semua ini di iOS dan Android, melengkapi pekerjaan DOCX di desktop yang terjadi sebelumnya.",
  faq: [
    {
      q: "Kenapa tidak memakai PDF untuk semuanya saja?",
      a: "PDF tidak mendukung pengeditan sungguhan, pelacakan perubahan, atau kolaborasi multi-penulis. Untuk pembuatan draf, DOCX benar-benar lebih baik.",
    },
    {
      q: "Kenapa tidak memakai DOCX untuk pengiriman juga?",
      a: "DOCX tampil berbeda-beda di berbagai versi dan perangkat. Klien bisa melihat tata letak yang berbeda dari yang Anda maksudkan. PDF mengunci tampilannya.",
    },
    {
      q: "Sebaiknya kontrak dikirim sebagai PDF atau DOCX?",
      a: "Kontrak final: PDF, bertanda tangan. Draf negosiasi: DOCX dengan track changes. Alat yang berbeda untuk fase yang berbeda.",
    },
    {
      q: "Bagaimana dengan arsip — DOCX atau PDF?",
      a: "PDF, sebagai catatan resmi tentang apa yang dikirim atau ditandatangani. Simpan juga DOCX-nya sebagai referensi, tapi PDF-nya adalah salinan arsip yang resmi.",
    },
    {
      q: "Kapan PDF ke Word masuk akal untuk dilakukan?",
      a: "Saat Anda perlu mengedit sebuah PDF dan tidak punya sumbernya. Siapkan diri untuk merapikan tata letaknya; konversinya bersifat perkiraan.",
    },
  ],
  related: [
    { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
    { label: "Word ke PDF — ekspor bersih untuk distribusi", path: "/word-to-pdf" },
    { label: "PDF ke Word — pulihkan teks yang bisa diedit", path: "/pdf-to-word" },
    { label: "PDF dibanding DOCX — perbandingan fitur lengkap", path: "/guides/pdf-vs-docx" },
  ],
  parentHub: { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
};

export default content;
