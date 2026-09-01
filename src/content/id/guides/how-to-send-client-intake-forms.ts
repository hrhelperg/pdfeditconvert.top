import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-send-client-intake-forms",
  h1: "Cara Mengirim Formulir Intake Klien (dengan Rapi dan Privat)",
  description:
    "Dapatkan detail klien baru dalam satu proses yang bersih. Cara mengirim formulir intake PDF agar mudah diisi, kembali lengkap, dan menjaga informasi klien tetap privat.",
  updated: "2026-06-01",
  intro: [
    "Formulir intake adalah interaksi nyata pertama yang dialami banyak klien dengan cara Anda bekerja, jadi penting untuk membuatnya benar. Jika dikerjakan dengan baik, satu formulir intake PDF mengumpulkan semua yang Anda butuhkan untuk memulai, detail kontak, spesifikasi proyek, preferensi, dalam satu putaran, tanpa bolak-balik “bisa kirimkan juga…”. Jika dikerjakan asal-asalan, formulirnya bolak-balik setengah terisi dan memberi kesan yang kurang rapi.",
    "Mekanismenya sederhana tapi detailnya penting: formulirnya harus mudah diisi di HP (tempat sebagian besar klien akan membukanya), harus kembali lengkap dan dalam format yang bisa dipakai, dan karena memuat informasi pribadi, sebaiknya tidak melewati situs publik sembarangan di tengah jalan.",
    "Panduan ini membahas cara menyiapkan formulir intake, mengirimnya agar klien benar-benar bisa menyelesaikannya, dan mengumpulkan jawabannya dengan rapi, versi praktisnya, bukan versi teoretis.",
  ],
  steps: [
    {
      title: "Bangun formulir intake yang hanya menanyakan yang Anda butuhkan",
      body: "Setiap kolom tambahan menurunkan tingkat penyelesaian. Tanyakan hanya yang benar-benar Anda butuhkan untuk memulai, kelompokkan secara logis, dan sediakan ruang yang cukup untuk jawaban. Simpan master kosong yang Anda pakai ulang untuk setiap klien baru.",
    },
    {
      title: "Kirim formulir kosong, bukan yang sudah dikunci",
      body: "Lampirkan PDF yang bisa diisi secara langsung atau bagikan lewat drive yang dipakai klien. Jangan kunci file kosongnya, itu akan menghilangkan kolomnya. Tambahkan catatan singkat cara mengisi dan mengembalikannya.",
    },
    {
      title: "Buat pengisiannya mudah di HP",
      body: "Beri tahu klien mereka bisa menyelesaikannya di aplikasi PDF, ketuk kolomnya atau tambahkan teks pada formulir non-interaktif, tanda tangani jika perlu, lalu ekspor. Kebanyakan akan melakukannya di HP, jadi permudah jalur itu.",
    },
    {
      title: "Minta salinan yang terkunci saat dikembalikan",
      body: "Minta PDF yang sudah disimpan atau dikunci, bukan foto. Formulir yang terkunci terbaca secara konsisten, tidak bisa terhapus, dan langsung masuk ke berkas klien.",
    },
    {
      title: "Arsipkan dan konfirmasi penerimaannya",
      body: "Beri nama ulang formulir yang kembali berdasarkan klien dan tanggal, simpan bersama catatan klien itu, dan kirim konfirmasi singkat. Tindak lanjuti sekali jika formulirnya kembali dengan kolom wajib yang masih kosong.",
    },
  ],
  tips: [
    "Formulir intake yang lebih singkat lebih sering diselesaikan; pangkas setiap kolom yang tidak benar-benar dibutuhkan di awal.",
    "Karena formulir intake memuat data pribadi, lebih baik pakai lampiran langsung atau drive privat daripada layanan “isi online” publik.",
    "Master kosong yang bisa dipakai ulang berarti setiap klien baru mendapat formulir yang bersih dan identik tanpa sisa detail sebelumnya.",
    "Sarankan aplikasi PDF tertentu dalam catatan Anda agar klien HP tidak terjebak di pratinjau email yang tidak bisa diketik.",
    "Jaga pola penamaan file yang konsisten agar formulir intake klien selalu mudah ditemukan nanti.",
  ],
  mobileNote:
    "Klien bisa menyelesaikan formulir intake Anda di HP memakai aplikasi PDF Editor, mengisi kolomnya atau menambahkan teks ke formulir non-interaktif, menandatangani, dan mengekspor salinan yang terkunci untuk langsung dikirim kembali. Ini berjalan di perangkat, jadi detail pribadi yang mereka masukkan tidak diunggah ke mana pun dalam perjalanannya ke Anda.",
  faq: [
    {
      q: "Bagaimana cara mengirim formulir intake klien sebagai PDF?",
      a: "Lampirkan PDF yang bisa diisi langsung ke email atau bagikan lewat drive yang dipakai klien, tanpa menguncinya lebih dulu. Sertakan catatan singkat cara mengisinya di aplikasi PDF dan mengembalikan salinan yang sudah selesai.",
    },
    {
      q: "Kenapa formulir intake saya kembali kosong atau setengah terisi?",
      a: "Klien sering membukanya di pratinjau email yang mengabaikan kolom, atau formulirnya menanyakan terlalu banyak hal. Sarankan aplikasi PDF, pangkas kolom yang tidak perlu, dan minta salinan yang terkunci saat dikembalikan.",
    },
    {
      q: "Bagaimana cara menjaga informasi klien tetap privat saat mengumpulkan formulir intake?",
      a: "Kirim dan terima formulirnya sebagai lampiran langsung atau lewat drive privat, bukan situs pengisian publik. Aplikasi PDF Editor mengisi di perangkat, jadi detail klien tidak diunggah.",
    },
    {
      q: "Sebaiknya formulir intake itu interaktif atau non-interaktif?",
      a: "Interaktif lebih rapi kalau Anda bisa membuatnya, tapi template non-interaktif yang bersih berfungsi di mana saja. Keduanya sama-sama baik selama kolomnya diberi label yang jelas dan punya ruang yang cukup.",
    },
    {
      q: "Bagaimana cara menjaga formulir intake yang kembali tetap rapi?",
      a: "Beri nama ulang masing-masing berdasarkan klien dan tanggal, simpan bersama catatan klien itu, dan jaga master kosongnya tetap terpisah agar setiap klien baru mendapat salinan yang segar.",
    },
  ],
  related: [
    { label: "Formulir PDF untuk bisnis kecil", path: "/guides/pdf-forms-for-small-business" },
    { label: "Alur kerja pengumpulan dokumen dengan PDF", path: "/guides/document-collection-workflows-with-pdf" },
    { label: "Cara membagikan formulir PDF", path: "/guides/how-to-share-a-pdf-form" },
    { label: "Cara membagikan PDF kepada klien", path: "/guides/how-to-share-pdfs-with-clients" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
