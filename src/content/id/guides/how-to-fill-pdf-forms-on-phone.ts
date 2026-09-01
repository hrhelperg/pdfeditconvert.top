import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-fill-pdf-forms-on-phone",
  h1: "Cara Mengisi Formulir PDF di HP Anda",
  description:
    "Isi formulir PDF di iPhone atau Android, baik yang punya kolom formulir asli maupun yang berupa formulir non-interaktif. Ketuk untuk mengetik, tambahkan kotak teks, dan tanda tangani di satu tempat.",
  updated: "2026-05-23",
  intro: [
    "Formulir PDF hadir dalam dua jenis, dan mengetahui yang mana yang Anda hadapi menentukan cara mengisinya. Sebagian bersifat interaktif — ketuk sebuah kolom lalu ketik, dengan kotak rapi yang sudah dirancang perancang formulirnya. Sebagian lain non-interaktif: formulir hasil pindaian atau yang dicetak lalu dijadikan PDF tanpa kolom sama sekali, sehingga Anda harus meletakkan teks Anda sendiri di atasnya. Keduanya sama-sama bisa diisi dengan sempurna di HP; hanya butuh penanganan yang sedikit berbeda.",
    "Panduan ini membahas cara mengisi kedua jenisnya di iPhone dan Android memakai aplikasi PDF Editor, yang mendeteksi kolom interaktif kalau ada dan membiarkan Anda meletakkan teks serta tanda centang di mana saja kalau tidak ada. Banyak formulir juga butuh tanda tangan, yang ditangani aplikasi yang sama dalam satu alur.",
    "Hasilnya adalah formulir terisi yang bisa langsung Anda kirim balik — tanpa mencetak, tanpa memindai, tanpa mencari-cari printer yang berfungsi di saat yang paling tidak tepat.",
  ],
  steps: [
    {
      title: "Buka formulir di aplikasi PDF Editor",
      body: "Impor PDF dari Files, Mail, Drive, atau menu bagikan mana pun. Aplikasi memeriksa apakah formulir punya kolom interaktif.",
    },
    {
      title: "Kalau ada kolom, ketuk dan ketik",
      body: "Formulir interaktif membiarkan Anda langsung mengetuk tiap kolom dan mengetik. Tab atau gulir antar kolom, dan ketuk kotak centang untuk mencentangnya.",
    },
    {
      title: "Kalau non-interaktif, tambahkan teks Anda sendiri",
      body: "Untuk formulir hasil pindaian atau yang tanpa kolom, gunakan alat teks untuk meletakkan teks di tempat setiap jawaban seharusnya berada. Atur ukuran dan posisinya agar pas di garis.",
    },
    {
      title: "Tangani kotak centang dan tanggal",
      body: "Letakkan tanda centang atau tanda X pada kotak centang, dan tambahkan tanggal di mana diperlukan. Pada formulir non-interaktif, ini hanyalah objek teks atau tanda yang Anda posisikan sendiri.",
    },
    {
      title: "Tanda tangani kalau formulir memintanya",
      body: "Gunakan alat Tanda Tangan untuk menambahkan tanda tangan tersimpan Anda di area tanda tangan — alur yang sama baik formulirnya interaktif maupun non-interaktif.",
    },
    {
      title: "Ekspor dan kirim",
      body: "Simpan salinan yang sudah terisi sebagai file baru dan bagikan kembali lewat email atau aplikasi mana pun. Simpan file asli yang masih kosong siapa tahu Anda perlu mengisinya lagi.",
    },
  ],
  tips: [
    "Periksa dulu apakah kolomnya interaktif — ketuk di tempat jawaban seharusnya berada. Kalau kursor muncul, ketik; kalau tidak ada yang terjadi, itu formulir non-interaktif dan Anda menambahkan teks di atasnya.",
    "Pada formulir non-interaktif, perbesar tampilan sebelum meletakkan teks agar posisinya pas di garis, bukan melayang di atas atau di bawahnya.",
    "Simpan salinan kosong dari formulir yang sering Anda isi. Mengisi ulang file asli yang bersih lebih rapi daripada mengedit jawaban terakhir kali.",
    "Isi dan tanda tangani dalam sesi yang sama agar Anda tidak perlu mengekspor, membuka lagi, dan meletakkan ulang semuanya — aplikasi menjaganya tetap satu kali proses.",
    "Periksa ulang kolom wajib sebelum mengirim. Formulir yang ditolak balik karena tanggal yang hilang membuang lebih banyak waktu daripada pemeriksaan itu sendiri.",
  ],
  mobileNote:
    "Mengisi formulir adalah salah satu tugas PDF yang paling cocok untuk HP — formulir datang lewat email dan kembali dengan cara yang sama. Aplikasi PDF Editor mengisi formulir interaktif maupun non-interaktif, menambahkan tanda tangan Anda, dan mengekspor salinan yang sudah lengkap, semuanya di perangkat tanpa ada yang diunggah.",
  faq: [
    {
      q: "Bagaimana saya tahu apakah formulir PDF itu interaktif?",
      a: "Ketuk di tempat jawaban seharusnya berada. Kalau kursor teks muncul dan Anda bisa mengetik, formulir itu punya kolom interaktif. Kalau tidak ada yang terjadi, itu formulir non-interaktif dan Anda menambahkan teks di atasnya.",
    },
    {
      q: "Bisakah saya mengisi formulir hasil pindaian yang tidak punya kolom?",
      a: "Bisa. Gunakan alat teks untuk meletakkan jawaban Anda langsung di halaman, dan tambahkan tanda centang di mana perlu. Aplikasi memperlakukannya sebagai objek yang Anda posisikan sendiri.",
    },
    {
      q: "Bisakah saya menandatangani formulir di aplikasi yang sama?",
      a: "Bisa. Alat Tanda Tangan menambahkan tanda tangan tersimpan Anda dalam sesi yang sama, jadi Anda mengisi dan menandatangani tanpa berpindah aplikasi.",
    },
    {
      q: "Apakah formulir yang sudah terisi diunggah ke suatu tempat?",
      a: "Tidak. Aplikasi PDF Editor mengisi formulir di perangkat Anda, sehingga detail pribadi di dalamnya tetap privat.",
    },
    {
      q: "Bisakah saya memakai ulang formulir yang sering saya isi?",
      a: "Simpan file asli yang masih kosong dan isi salinan baru setiap kali. Ini lebih rapi daripada mengedit versi yang sudah pernah diisi sebelumnya.",
    },
  ],
  related: [
    { label: "PDF Editor — edit dan isi di mobile", path: "/pdf-editor" },
    { label: "Cara tanda tangan PDF di HP Anda", path: "/guides/how-to-sign-pdf-on-phone" },
    { label: "Cara memberi anotasi pada PDF di HP", path: "/guides/how-to-annotate-pdf-on-mobile" },
    { label: "Cara mengedit PDF di iPhone", path: "/guides/how-to-edit-pdf-on-iphone" },
  ],
  parentHub: { label: "PDF Editor", path: "/pdf-editor" },
};

export default content;
