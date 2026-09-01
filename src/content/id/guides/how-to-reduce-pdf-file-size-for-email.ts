import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-reduce-pdf-file-size-for-email",
  h1: "Cara Memperkecil Ukuran File PDF untuk Email",
  description:
    "Buat PDF muat di bawah batas lampiran Gmail dan Outlook. Batas sebenarnya, alasan hasil pindaian sering melampauinya, dan cara memperkecil file agar berhasil terkirim.",
  updated: "2026-05-23",
  intro: [
    "Batas lampiran email tidak banyak berubah selama bertahun-tahun, tapi dokumen yang kita lampirkan terus makin berat. Gmail menghentikan Anda di 25 MB. Outlook menarik batas di sekitar 20 MB. Server penerima bisa jadi membatasi lebih rendah lagi. Jadi Anda melampirkan kontrak hasil pindaian atau laporan penuh foto, tekan kirim, dan gagal terkirim, atau lebih buruk, diam-diam tidak sampai.",
    "Panduan ini soal membuat PDF cukup kecil untuk benar-benar terkirim. Memakai alat gratis Kompres PDF, yang berjalan di browser Anda tanpa apa pun yang diunggah, dan membahas keputusan praktisnya: tingkat kompresi mana, kapan sebaiknya kompres versus bagi, dan apa yang harus dilakukan saat kompresi saja tidak cukup.",
    "Kabar baiknya, file yang paling sering gagal terkirim, hasil pindaian dan PDF penuh gambar, justru yang paling banyak mengecil saat dikompres.",
  ],
  steps: [
    {
      title: "Periksa seberapa jauh Anda melebihi batasnya",
      body: "Catat ukuran filenya dan targetnya. Gmail membatasi di 25 MB, Outlook di sekitar 20 MB, dan beberapa server perusahaan lebih rendah lagi. Mengetahui selisihnya memberi tahu Anda seberapa agresif harus bertindak.",
    },
    {
      title: "Buka alat Kompres PDF",
      body: "Buka alat Kompres PDF di browser Anda. Alat ini memproses filenya di perangkat Anda, tidak ada yang diunggah, penting untuk dokumen yang akan Anda kirim lewat email.",
    },
    {
      title: "Tambahkan PDF-nya dan pilih tingkatnya",
      body: "Mulai dengan \"Direkomendasikan\". Tingkat ini menyeimbangkan ukuran dan kualitas dan cukup untuk sebagian besar file. Turun ke \"Kuat\" hanya jika masih melebihi batas.",
    },
    {
      title: "Kompres dan baca ukuran barunya",
      body: "Jalankan dan periksa angka sebelum-sesudahnya. Dokumen hasil pindaian sering langsung jatuh jauh di bawah 25 MB dalam sekali proses.",
    },
    {
      title: "Jika masih terlalu besar, bagi filenya",
      body: "Saat satu dokumen tidak bisa cukup kecil, gunakan alat Bagi PDF untuk mengirimnya sebagai dua atau tiga file yang lebih kecil, sering lebih praktis daripada menekan kualitas lebih jauh.",
    },
    {
      title: "Lampirkan dan kirim",
      body: "Lampirkan file hasil kompresi (atau hasil pembagian). Buka sekali dulu untuk memastikan masih terbaca bersih pada tingkat yang Anda pilih.",
    },
  ],
  tips: [
    "Tingkat \"Direkomendasikan\" berhasil melewati sebagian besar batas email dengan kualitas yang masih tersisa. Simpan \"Kuat\" untuk file yang masih melebihi batas setelah proses pertama.",
    "Hasil pindaian dan PDF penuh foto paling banyak mengecil; dokumen yang hanya berisi teks sudah kecil dari sononya, jadi jika ukurannya besar, cari penyebabnya pada gambar atau font tersemat.",
    "Jika kompresi saja tidak cukup, membagi dokumen lebih baik daripada merusak kualitasnya sampai tidak terbaca, dua bagian yang terbaca lebih baik daripada satu keseluruhan yang kasar.",
    "Kompresi merasterisasi halaman, jadi salinan yang dikirim tidak akan punya teks yang bisa dipilih. Jika penerima perlu menyalin teksnya, kirim aslinya lewat cara lain dan pratinjau hasil kompresi lewat email.",
    "Saat bahkan file hasil kompresi masih terlalu besar, tautan cloud yang dibagikan adalah jawaban yang jujur, lihat panduan mengirim file PDF berukuran besar.",
  ],
  mobileNote:
    "Sebagian besar lampiran yang gagal terkirim terjadi saat Anda mengirim dokumen dari HP di sela-sela kesibukan lain. Aplikasi PDF Editor mengompres secara offline dan membagikan langsung ke aplikasi email Anda, jadi hasil pindaian yang terlalu besar berubah jadi file yang siap terkirim tanpa meninggalkan kotak masuk Anda.",
  faq: [
    {
      q: "Berapa sebenarnya batas lampiran email?",
      a: "Gmail membatasi di 25 MB, Outlook di sekitar 20 MB, dan beberapa server email perusahaan lebih rendah lagi. Bidik jauh di bawah batas penerima Anda, bukan hanya batas Anda sendiri.",
    },
    {
      q: "Kenapa PDF saya terlalu besar untuk dikirim lewat email sejak awal?",
      a: "Hampir selalu karena halaman hasil pindaian atau foto tersemat. Setiap halaman hasil pindaian pada dasarnya adalah gambar beresolusi tinggi, dan beberapa saja sudah cepat melampaui 25 MB.",
    },
    {
      q: "Tingkat kompresi mana yang harus saya pakai untuk email?",
      a: "Mulai dengan \"Direkomendasikan\", tingkat ini melewati sebagian besar batas sambil menjaga dokumen tetap terbaca. Beralih ke \"Kuat\" hanya jika masih melebihi batas setelah proses pertama.",
    },
    {
      q: "Apakah file saya diunggah saat dikompres?",
      a: "Tidak. Alat Kompres PDF berjalan di browser Anda, di perangkat Anda, jadi dokumennya tetap privat bahkan saat Anda menyiapkannya untuk dikirim.",
    },
    {
      q: "Bagaimana jika kompresi saja masih tidak cukup?",
      a: "Bagi PDF-nya menjadi file yang lebih kecil, atau bagikan tautan cloud alih-alih lampiran. Keduanya lebih baik daripada mengompres dokumen sampai tidak terbaca.",
    },
  ],
  related: [
    { label: "Kompres PDF — perkecil untuk email", path: "/compress-pdf" },
    { label: "Cara mengirim file PDF berukuran besar", path: "/guides/how-to-send-large-pdf-files" },
    { label: "Cara mengompres PDF online tanpa mengunggah", path: "/guides/how-to-compress-pdf-online" },
    { label: "Cara membagi PDF menjadi file terpisah", path: "/guides/how-to-split-pdf-files" },
  ],
  parentHub: { label: "Kompres PDF", path: "/compress-pdf" },
};

export default content;
