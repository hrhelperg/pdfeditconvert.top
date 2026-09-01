import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-pdf-form-wont-save",
  h1: "Mengapa Formulir PDF Tidak Mau Tersimpan (dan Cara Memperbaikinya)",
  description:
    "Mengisi formulir lalu jawabannya menghilang saat dibuka lagi? Alasan sebagian aplikasi pembaca hanya bisa mencetak, bukan menyimpan data kolom, dan cara-cara andal agar jawaban Anda benar-benar tersimpan.",
  updated: "2026-06-01",
  intro: [
    "Anda menghabiskan sepuluh menit mengisi formulir, menyimpannya, membuka lagi nanti, dan setiap kolomnya kosong lagi. Ini menjengkelkan, dan bukan kesalahan Anda, penyebabnya adalah nilai kolom formulir hidup di lapisan yang terpisah dari halamannya, dan tidak semua alat benar-benar menulis lapisan itu kembali ke file saat Anda menyimpan. Sebagian alat hanya bisa mencetak formulirnya, tidak pernah menyimpan input Anda.",
    "Ada dua solusi yang andal: gunakan alat yang benar-benar menyimpan data formulir, atau kunci formulirnya agar jawaban Anda menjadi isi halaman yang permanen dan tidak bisa hilang apa pun yang terjadi. Yang Anda pilih bergantung pada apakah Anda masih perlu mengedit jawabannya nanti. Bagaimanapun caranya, masalah jawaban yang menghilang ini sepenuhnya bisa diselesaikan.",
    "Panduan ini menjelaskan alasan penyimpanan gagal, cara memastikan apakah alat Anda yang bermasalah, dan dua cara yang bisa diandalkan untuk membuat jawaban yang sudah diisi tetap bertahan.",
  ],
  steps: [
    {
      title: "Pastikan jawabannya memang benar-benar tidak tersimpan",
      body: "Isi sebuah kolom, simpan, tutup filenya sepenuhnya, lalu buka lagi. Jika jawabannya hilang, berarti nilai kolomnya tidak tertulis, ini masalah penyimpanan, bukan kesalahan Anda.",
    },
    {
      title: "Gunakan Save atau Export, jangan hanya Print",
      body: "Pilih Save atau Export agar nilai kolomnya tertulis ke dalam PDF. Jalur yang hanya Print (umum pada aplikasi pembaca dasar) menghasilkan keluaran tapi tidak pernah menyimpan jawaban yang bisa diedit, inilah penyebab klasik data yang hilang.",
    },
    {
      title: "Beralih ke alat yang mendukung formulir",
      body: "Jika aplikasi Anda saat ini hanya bisa mencetak, pindahkan formulirnya ke aplikasi PDF khusus atau alat browser yang benar-benar menyimpan data formulir. Buka lagi file yang sudah disimpan untuk memastikan jawabannya tetap ada.",
    },
    {
      title: "Kunci agar jawabannya permanen",
      body: "Jika Anda sudah selesai mengedit, kunci formulirnya. Mengunci menggabungkan nilainya ke halaman, sehingga tidak ada lagi lapisan terpisah yang bisa hilang dan jawabannya bertahan di mana saja.",
    },
    {
      title: "Simpan sebagai salinan baru",
      body: "Ekspor dengan nama file baru agar Anda punya file kosong yang bersih dan versi yang sudah diisi dan tersimpan, dan tidak pernah tanpa sengaja menimpa master dengan formulir kosong.",
    },
  ],
  tips: [
    "Jika jawaban hilang, alat Anda hanya mencetak, tidak menyimpan lapisan kolomnya, beralihlah ke alat yang benar-benar menulis data formulir.",
    "Mengunci adalah solusi paling pasti: setelah dikunci, tidak ada lagi lapisan kolom yang bisa hilang.",
    "Selalu buka lagi formulir yang sudah disimpan sebelum mengandalkannya; uji tutup-lalu-buka langsung menangkap masalahnya.",
    "Simpan file kosong aslinya secara terpisah agar mengunci salinan yang sudah Anda isi tidak pernah membuat Anda kehilangan template yang bisa dipakai ulang.",
    "Di HP, pintasan “cetak ke PDF” biasanya menguncinya, tidak masalah kalau Anda sudah selesai, tapi tidak akan membuat formulirnya tetap bisa diedit.",
  ],
  mobileNote:
    "Aplikasi PDF Editor menulis jawaban yang sudah diisi ke dalam file dan bisa mengekspor salinan yang terkunci saat Anda selesai, jadi tidak ada yang menghilang saat dibuka lagi atau di sisi penerima. Aplikasi ini menyimpan di perangkat, jadi detail yang Anda masukkan tetap privat.",
  faq: [
    {
      q: "Kenapa formulir PDF saya terus tersimpan kosong?",
      a: "Karena aplikasi pembaca Anda mencetak formulirnya, bukan menyimpan nilai kolomnya. Jawabannya hidup di lapisan kolom yang terpisah; jika lapisan itu tidak tertulis ke file, membuka lagi akan menampilkan kolom kosong. Gunakan alat yang benar-benar menyimpan data formulir, atau kunci formulirnya.",
    },
    {
      q: "Bagaimana membuat jawaban formulir saya benar-benar tersimpan?",
      a: "Simpan atau ekspor dengan alat yang mendukung formulir agar nilai kolomnya tertulis ke dalam file, lalu buka lagi untuk memastikan. Untuk hasil yang permanen, kunci formulirnya agar jawabannya menyatu ke halaman.",
    },
    {
      q: "Apa yang dilakukan penguncian untuk penyimpanan?",
      a: "Ini menggabungkan nilai yang sudah Anda isi ke dalam halaman itu sendiri, sehingga tidak ada lagi lapisan kolom terpisah yang bisa hilang. Setelah dikunci, jawabannya tersimpan dan tampil dengan andal di aplikasi pembaca mana pun.",
    },
    {
      q: "Sebaiknya saya menimpa aslinya atau menyimpan salinan?",
      a: "Simpan salinan dengan nama baru. Ini menjaga master kosong yang bersih dan versi yang sudah Anda isi tetap terpisah, sehingga Anda tidak pernah kehilangan template yang bisa dipakai ulang atau salah kirim formulir kosong.",
    },
    {
      q: "Apakah ini sama dengan formulir yang hanya-baca?",
      a: "Bukan. Masalah tidak mau tersimpan berarti alat Anda tidak menyimpan data kolom. Formulir hanya-baca secara aktif memblokir pengeditan. Jika Anda bisa mengetik tapi tidak bisa mempertahankan jawabannya, ini masalah penyimpanan, bukan masalah keamanan.",
    },
  ],
  related: [
    { label: "Cara menyimpan formulir PDF yang sudah diisi", path: "/guides/how-to-save-a-filled-pdf-form" },
    { label: "Formulir PDF tidak berfungsi", path: "/guides/pdf-form-not-working" },
    { label: "Mengapa formulir PDF hanya bisa dibaca", path: "/guides/why-pdf-form-is-read-only" },
    { label: "Cara kerja formulir PDF", path: "/guides/how-pdf-forms-work" },
  ],
  parentHub: { label: "Formulir PDF", path: "/pdf-forms" },
};

export default content;
