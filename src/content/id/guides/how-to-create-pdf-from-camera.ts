import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-create-pdf-from-camera",
  h1: "Cara Membuat PDF dari Kamera Anda",
  description:
    "Ubah hasil jepretan kamera menjadi PDF, dan alasan pindaian yang benar lebih baik daripada foto mentah. Pengambilan cepat untuk struk dan papan tulis, pemindaian untuk dokumen.",
  updated: "2026-05-23",
  intro: [
    "Mengarahkan kamera Anda ke sesuatu dan mendapatkan PDF adalah cara tercepat menangkap dunia fisik sebagai dokumen — struk, papan tulis setelah rapat, halaman dari sebuah buku, pengumuman di dinding. Tapi ada perbedaan nyata antara foto mentah yang dibungkus jadi PDF dan pindaian yang benar, dan mengetahui mana yang Anda butuhkan menghindarkan Anda dari hasil yang miring dan bergaris silau.",
    "Panduan ini membahas keduanya: pengambilan cepat, di mana foto kamera menjadi halaman PDF memakai alat gratis Gambar ke PDF, dan pemindaian yang benar, di mana aplikasi PDF Editor mendeteksi tepi dokumen, mengoreksi sudutnya, dan bisa mengenali teksnya. Keduanya berjalan di perangkat Anda tanpa ada yang diunggah.",
    "Untuk jepretan cepat yang cuma perlu Anda simpan, pengambilan cepat sudah cukup baik. Untuk apa pun yang harus terlihat seperti dokumen — rata, persegi, terbaca — memindai layak menyisihkan sedikit waktu ekstra.",
  ],
  steps: [
    {
      title: "Putuskan: pengambilan cepat atau pindaian yang benar",
      body: "Struk untuk catatan pribadi Anda bisa jadi foto cepat saja. Dokumen yang akan Anda kirim atau perlu dibaca dengan jelas layak mendapat pindaian yang benar dengan deteksi tepi dan koreksi sudut.",
    },
    {
      title: "Pengambilan cepat: foto dengan baik",
      body: "Ambil gambar tegak lurus dengan cahaya merata, memenuhi bingkai dengan halaman dan menghindari bayangan dari tangan atau HP Anda. Foto yang baik menghasilkan halaman PDF yang baik.",
    },
    {
      title: "Ubah foto menjadi PDF",
      body: "Buka alat Gambar ke PDF, tambahkan foto (atau beberapa), susun urutannya, lalu buat PDF-nya. Setiap jepretan menjadi satu halaman.",
    },
    {
      title: "Pindaian yang benar: gunakan pemindai bawaan aplikasi",
      body: "Di aplikasi PDF Editor, gunakan fitur pindai. Fitur ini menemukan tepi dokumen secara otomatis, meluruskan perspektifnya, dan merapikan halaman agar terlihat seperti hasil pindaian, bukan jepretan biasa.",
    },
    {
      title: "Tangkap beberapa halaman secara berurutan",
      body: "Untuk dokumen multihalaman, pemindai membiarkan Anda memotret halaman demi halaman ke dalam satu PDF, menjaga urutannya seiring Anda bekerja.",
    },
    {
      title: "Buat bisa dicari kalau Anda perlu",
      body: "Foto mentah tidak punya lapisan teks. Aplikasi bisa menjalankan pengenalan teks agar halaman hasil tangkapan bisa dicari — berguna untuk apa pun yang nanti perlu Anda cari berdasarkan isinya.",
    },
  ],
  tips: [
    "Foto mentah adalah gambar dari sebuah dokumen; pindaian adalah versi yang sudah dikoreksi, diratakan, dan terbaca. Sesuaikan usaha Anda dengan bagaimana hasilnya akan dipakai.",
    "Cahaya merata dan sudut tegak lurus berpengaruh lebih besar pada halaman hasil tangkapan daripada filter apa pun. Silau dan bayangan lebih mudah dihindari daripada diperbaiki.",
    "Latar belakang gelap dan polos di belakang halaman membantu deteksi tepi menemukan dokumen dengan bersih.",
    "Foto dan pindaian hasil tangkapan bisa berukuran besar — kompres PDF-nya kalau akan dikirim lewat email atau portal unggahan.",
    "Pengambilan cepat tidak punya teks yang bisa dicari. Kalau Anda nanti perlu mencari isi dokumennya, pindai dengan pengenalan teks, bukan sekadar memotretnya.",
  ],
  mobileNote:
    "Kamera Anda sudah ada di tangan Anda, itulah sebabnya menangkap dokumen adalah tugas yang alami di HP. Aplikasi PDF Editor memindai dengan deteksi tepi otomatis, penangkapan multihalaman, dan pengenalan teks — semuanya offline — mengubah apa pun yang ada di depan Anda menjadi PDF yang rapi dan siap dibagikan saat itu juga.",
  faq: [
    {
      q: "Apa bedanya memotret dan memindai sebuah dokumen?",
      a: "Foto adalah gambar mentah yang dibungkus jadi PDF — cukup baik untuk catatan cepat. Pindaian mendeteksi tepi halaman, mengoreksi sudutnya, dan meratakannya agar terlihat seperti dokumen sungguhan. Pindai apa pun yang akan Anda kirim atau perlu dibaca dengan jelas.",
    },
    {
      q: "Bisakah saya membuat PDF dari satu foto kamera saja?",
      a: "Bisa. Ambil fotonya, lalu gunakan alat Gambar ke PDF untuk mengubahnya (atau beberapa foto sekaligus) menjadi PDF, satu halaman per jepretan.",
    },
    {
      q: "Apakah PDF hasil kamera bisa dicari?",
      a: "Tidak, kalau dari foto mentah — tidak ada lapisan teks. Aplikasi PDF Editor bisa menjalankan pengenalan teks saat memindai sehingga hasilnya bisa dicari.",
    },
    {
      q: "Apakah dokumen hasil tangkapan saya diunggah?",
      a: "Tidak. Baik alat Gambar ke PDF maupun pemindai bawaan aplikasi bekerja di perangkat Anda, sehingga dokumen hasil tangkapan tetap privat.",
    },
    {
      q: "Bagaimana cara menangkap beberapa halaman ke dalam satu PDF?",
      a: "Gunakan pemindai bawaan aplikasi, yang membiarkan Anda memotret halaman demi halaman ke dalam satu dokumen dan menjaga urutannya. Alat Gambar ke PDF juga menggabungkan beberapa foto menjadi satu file.",
    },
  ],
  related: [
    { label: "Pindai ke PDF — tangkap kertas dengan kamera Anda", path: "/scan-to-pdf" },
    { label: "Gambar ke PDF — ubah foto menjadi PDF", path: "/image-to-pdf" },
    { label: "Cara memindai dokumen ke PDF dengan HP", path: "/guides/how-to-scan-documents-to-pdf" },
    { label: "Cara mengonversi foto ke PDF di iPhone", path: "/guides/how-to-convert-photos-to-pdf-on-iphone" },
  ],
  parentHub: { label: "Pindai ke PDF", path: "/scan-to-pdf" },
};

export default content;
