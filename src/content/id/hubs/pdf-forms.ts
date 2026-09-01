import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "pdf-forms",
  hero: {
    eyebrow: "Formulir PDF",
    h1: "Isi, tanda tangani, dan kelola formulir PDF di mana saja.",
    highlight: "formulir PDF",
    lead: "Formulir pajak, formulir pendaftaran, lembar intake, formulir persetujuan — sebagian besar datang sebagai PDF. Pelajari cara kerja formulir PDF yang sesungguhnya, cara mengisi yang interaktif maupun yang non-interaktif, dan cara memperbaiki masalah umum yang muncul, semuanya tanpa mencetak satu halaman pun.",
    primaryCta: { label: "Buka aplikasi", href: SITE.app.appStore },
  },
  problem: {
    heading: "Kenapa formulir PDF sering menjebak",
    paragraphs: [
      "Formulir PDF terlihat seperti satu jenis, padahal sering kali ada dua. Sebagian bersifat interaktif — perancangnya menambahkan kolom sungguhan yang bisa Anda ketuk dan isi. Sebagian lain non-interaktif: formulir hasil pindaian atau yang dicetak lalu disimpan lagi, tanpa kolom sama sekali, sehingga Anda harus meletakkan sendiri teks di atasnya. Keduanya berperilaku sangat berbeda, dan sebagian besar kekesalan seputar formulir muncul karena tidak tahu jenis mana yang sedang Anda hadapi.",
      "Selain itu, formulir juga bisa berulah dengan cara yang tidak dialami PDF biasa. Kolom menghilang di penampil yang salah, jawaban yang diketik menolak untuk tersimpan, formulir terbuka dalam mode hanya-baca, atau nilai yang Anda isikan tidak muncul saat dicetak. Semua ini bukan berarti formulirnya rusak — itu masalah yang bisa diprediksi dengan solusi yang juga bisa diprediksi, begitu Anda tahu apa yang sebenarnya terjadi di baliknya.",
      "Hub ini mengumpulkan semuanya di satu tempat: dasar-dasar cara kerja formulir, langkah demi langkah untuk mengisinya di komputer atau HP, alur kerja bisnis untuk mengumpulkan informasi dari klien, dan kumpulan solusi masalah untuk saat formulir tidak mau bekerja sama. Tampilan dan perilaku formulir bisa berbeda antar-penampil PDF, jadi panduan-panduan ini tetap jujur soal apa yang berfungsi di mana saja dan apa yang bergantung pada alat yang Anda pakai untuk membuka filenya.",
    ],
  },
  features: {
    heading: "Yang bisa Anda lakukan dengan formulir PDF",
    items: [
      {
        icon: "FileText",
        title: "Isi kolom interaktif",
        body: "Ketuk kolom formulir sungguhan lalu ketik. Pindah antar-kolom, centang kotak centang, dan pilih dari dropdown di tempat yang sudah disiapkan perancangnya.",
      },
      {
        icon: "TextCursorInput",
        title: "Lengkapi formulir non-interaktif",
        body: "Tidak ada kolom? Letakkan sendiri teks dan tanda centang di mana pun di halaman — tepat di posisi setiap jawaban seharusnya berada pada formulir hasil pindaian atau cetakan.",
      },
      {
        icon: "PenLine",
        title: "Tanda tangani di tempat yang diperlukan",
        body: "Tambahkan tanda tangan yang diketik atau tulisan tangan di area tanda tangan, baik kolomnya interaktif maupun hanya berupa garis pada formulir non-interaktif.",
      },
      {
        icon: "Save",
        title: "Simpan salinan yang sudah lengkap",
        body: "Ekspor versi yang sudah selesai untuk langsung dikirim balik, dan simpan versi kosong aslinya untuk lain kali Anda membutuhkannya.",
      },
      {
        icon: "Lock",
        title: "Kunci sebelum mengirim",
        body: "Kunci jawaban Anda ke halaman agar tidak bisa diubah atau terhapus secara tidak sengaja oleh penampil milik penerima.",
      },
      {
        icon: "Smartphone",
        title: "Lakukan semuanya dari HP",
        body: "Formulir datang lewat email dan kembali dengan cara yang sama — mengisi dan menandatangani dari HP adalah salah satu tugas PDF yang paling benar-benar mobile yang ada.",
      },
    ],
  },
  steps: {
    heading: "Mengisi formulir PDF, dari awal sampai akhir",
    items: [
      {
        title: "Buka formulir dan cek jenisnya",
        body: "Buka PDF-nya dan ketuk tempat jawaban seharusnya diisi. Jika muncul kursor, berarti formulir ini punya kolom interaktif. Jika tidak terjadi apa-apa, berarti ini formulir non-interaktif dan Anda perlu menambahkan teks di atasnya.",
      },
      {
        title: "Isi kolomnya",
        body: "Untuk formulir interaktif, ketuk lalu ketik, berpindah antar-kolom dengan tab. Untuk formulir non-interaktif, gunakan alat teks untuk menempatkan jawaban tepat pada setiap baris.",
      },
      {
        title: "Tangani kotak centang, tanggal, dan tanda tangan",
        body: "Centang kotaknya atau tempatkan tanda centang, tambahkan tanggal di tempat yang diperlukan, dan gunakan alat tanda tangan untuk area tanda tangan mana pun.",
      },
      {
        title: "Periksa ulang setiap kolom wajib",
        body: "Telusuri kembali formulirnya untuk mencari kolom yang masih kosong. Formulir yang ditolak hanya karena satu tanggal yang terlewat menghabiskan lebih banyak waktu daripada jika Anda memeriksanya lebih dulu.",
      },
      {
        title: "Simpan, kunci, dan kirim",
        body: "Ekspor salinan yang sudah lengkap, kunci agar jawabannya terkunci permanen, lalu kirim balik lewat email atau unggah ke portalnya. Simpan versi kosong aslinya.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Formulir dari HP Anda",
    body: "Formulir masuk ke kotak masuk Anda saat Anda jauh dari meja kerja. Dengan HP, Anda bisa membukanya, mengisi kolomnya atau menambahkan teks ke hasil pindaian yang non-interaktif, menandatanganinya, dan mengirimnya balik bahkan sebelum Anda sempat duduk — tanpa printer, tanpa pemindai, tanpa harus menunggu sampai di rumah. Aplikasi PDF Editor mendeteksi kolom interaktif jika ada, membiarkan Anda menempatkan teks dan tanda centang di mana saja jika tidak ada, dan menjaga detail pribadi pada formulir itu tetap ada di perangkat Anda.",
  },
  faq: [
    {
      q: "Apa perbedaan antara formulir PDF interaktif dan non-interaktif?",
      a: "Formulir interaktif punya kolom yang sudah disiapkan perancangnya — ketuk salah satunya dan kursor akan muncul sehingga Anda bisa mengetik. Formulir non-interaktif pada dasarnya adalah gambar formulir tanpa kolom sama sekali, jadi Anda menambahkan sendiri teks di atasnya. Anda bisa mengisi keduanya; hanya perlu penanganan yang sedikit berbeda.",
    },
    {
      q: "Apakah saya perlu mencetak formulir PDF untuk mengisinya?",
      a: "Hampir tidak pernah. Baik formulir interaktif maupun non-interaktif bisa diselesaikan secara digital — ketik di kolomnya atau letakkan teks di halaman, lalu tanda tangani dan ekspor. Mencetak hanya perlu dilakukan jika penerima secara khusus meminta tanda tangan basah di atas kertas.",
    },
    {
      q: "Kenapa saya tidak bisa mengetik di beberapa formulir PDF?",
      a: "Biasanya salah satu dari tiga hal ini: formulirnya non-interaktif (tidak ada kolom untuk diketik), penampil PDF Anda tidak mendukung kolom formulir, atau formulirnya bersifat hanya-baca atau terproteksi. Panduan pemecahan masalah di hub ini membahas setiap penyebabnya.",
    },
    {
      q: "Apakah formulir yang saya isi akan terlihat sama bagi penerimanya?",
      a: "Sebagian besar iya, tapi tidak selalu — tampilan formulir bisa berbeda antar-penampil PDF. Mengunci formulir yang sudah Anda isi sebelum mengirimnya membuat jawaban-jawabannya terkunci ke halaman, sehingga tampil konsisten di mana pun formulir itu dibuka.",
    },
    {
      q: "Apakah mengisi formulir secara online itu privat?",
      a: "Tergantung alatnya. Aplikasi PDF Editor mengisi formulir langsung di perangkat Anda, jadi informasi pribadi yang Anda masukkan tidak diunggah ke mana pun. Alat berbasis browser yang berjalan secara lokal juga menjaga file tetap ada di perangkat Anda.",
    },
  ],
  related: [
    { label: "Apa itu formulir PDF?", path: "/guides/what-is-a-pdf-form" },
    {
      label: "Cara mengisi formulir PDF",
      path: "/guides/how-to-fill-out-a-pdf-form",
    },
    {
      label: "Cara membuat PDF yang bisa diisi",
      path: "/guides/how-to-create-a-fillable-pdf",
    },
    {
      label: "Formulir PDF tidak berfungsi? Mulai di sini",
      path: "/guides/pdf-form-not-working",
    },
    { label: "PDF Editor — isi dan tanda tangani dari mobile", path: "/pdf-editor" },
  ],
  appCta: {
    heading: "Isi dan tanda tangani formulir PDF dari HP Anda.",
    sub: "Gratis untuk iOS dan Android. Tidak ada yang perlu diunggah.",
  },
};

export default content;
