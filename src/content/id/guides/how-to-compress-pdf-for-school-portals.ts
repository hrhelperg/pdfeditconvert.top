import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-compress-pdf-for-school-portals",
  h1: "Cara Mengompres PDF untuk Portal Sekolah (Batas yang Ketat)",
  description:
    "Portal unggahan sekolah dan kampus membatasi ukuran PDF lebih ketat dibanding email. Cara mengompres tugas agar muat tanpa merusak keterbacaan yang diperiksa penguji.",
  updated: "2026-05-29",
  intro: [
    "Portal sekolah termasuk salah satu tempat unggah PDF paling ketat yang biasa dijumpai sehari-hari. Jika email mungkin masih mentolerir 25 MB, portal kelas sering membatasi hanya 5 MB — dan sistem sekolah dasar-menengah kadang membatasi hanya 2 MB. Tambahkan beberapa halaman hasil pindaian tulisan tangan ke tugas yang sudah diketik, dan tiba-tiba Anda melebihi batas, dua menit sebelum tenggat.",
    "Kompresi adalah jawaban yang tepat, tapi mengompres terlalu agresif membuat pekerjaan jadi sulit dibaca — dan itu justru yang membuat Anda kehilangan nilai. Triknya adalah mengompres dengan cerdas: kuat pada bagian yang penuh hasil pindaian yang mendominasi ukuran file, lembut pada bagian yang diketik yang memang tidak banyak mengecil, dan hanya sebanyak yang dibutuhkan untuk lolos batas portal.",
    "Panduan ini menjelaskan proses yang realistis, termasuk apa yang harus dikompres, apa yang sebaiknya dibiarkan saja, dan apa yang harus dilakukan saat kompresi maksimum pun masih belum cukup.",
  ],
  steps: [
    {
      title: "Periksa dulu batas yang tertera di portal",
      body: "Sebagian besar portal mencantumkan batasnya; banyak pelajar tidak pernah memeriksanya. Mengetahui angka itu mengubah strategi Anda: batas 2 MB itu ketat, batas 25 MB itu longgar. Usahakan berada di 80% dari batas agar Anda punya ruang cadangan.",
    },
    {
      title: "Kenali apa yang membuat file besar",
      body: "Halaman hasil pindaian tulisan tangan biasanya jadi biang keroknya. Setiap halaman hasil pindaian adalah gambar dengan resolusi penuh. Tugas 20 halaman yang diketik ukurannya kecil; yang sama ditambah lima halaman hasil pindaian bisa membengkak tiga kali lipat.",
    },
    {
      title: "Kompres dengan Kompres PDF",
      body: "Kompres PDF di browser Anda mengecilkan file langsung di perangkat Anda. Coba kompresi kuat terlebih dahulu — kompresor modern tetap membuat tulisan tangan terbaca meski pada pengaturan kuat.",
    },
    {
      title: "Periksa keterbacaan setelah dikompres",
      body: "Buka file hasil kompresi dan zoom ke bagian yang akan dibaca penguji. Jika teks atau diagram terlihat terlalu lembek, turunkan ke kompresi sedang dan coba lagi. Keterbacaan lebih penting daripada ukuran kecil.",
    },
    {
      title: "Jika masih melebihi batas, buang halaman yang tidak dipakai",
      body: "Ekstrak Halaman PDF hanya menyimpan halaman yang Anda butuhkan. Sampul belakang yang kosong, kumpulan soal yang terduplikasi, halaman placeholder — buang semua itu, dan ukuran filenya ikut turun.",
    },
    {
      title: "Jika masih melebihi batas, bagi menjadi beberapa unggahan",
      body: "Sebagian portal menerima banyak file sekaligus. Bagi PDF atau Ekstrak Halaman PDF menghasilkan bagian-bagian yang berada di bawah batas. Beri nama yang jelas (Tugas3_Bagian1.pdf, Tugas3_Bagian2.pdf).",
    },
  ],
  tips: [
    "Pindai dalam skala abu-abu, bukan warna, sebelum Anda mengompres apa pun. Pilihan sejak awal pindaian ini menghemat lebih banyak daripada kompresi apa pun setelahnya.",
    "Memindai ulang pada DPI yang lebih rendah (200 alih-alih 600) mengecilkan file 5–10 kali lipat tanpa mengubah keterbacaan tulisan tangan.",
    "Jangan mengompres dua kali. Kompresi berulang menumpuk penurunan kualitas. Simpan versi master yang belum dikompres, dan kompres hanya untuk versi yang diunggah.",
    "Hindari membuat PDF menjadi file ZIP agar terlihat 'lebih kecil'. Sebagian besar portal langsung menolak ZIP; jika pun menerima, mereka sering mengekstraknya kembali dengan batas efektif yang sama.",
    "Jika portal menolak file hasil kompresi karena dianggap tidak valid, ekspor ulang lewat print-to-PDF terlebih dahulu — cara ini membuatnya menjadi PDF dasar yang diterima oleh hampir semua portal.",
  ],
  mobileNote:
    "Mengunggah dari HP ke portal sekolah kini sudah umum, dan HP-lah tempat bagian hasil pindaian dari tugas biasanya berasal. Aplikasi PDF Editor mengompres hasil pindaian langsung di perangkat sebelum diunggah, sehingga file sudah siap untuk portal sebelum harus melewati koneksi seluler yang tidak stabil.",
  faq: [
    {
      q: "Berapa ukuran yang biasanya diterima portal sekolah?",
      a: "Batas yang umum adalah 2 MB (sebagian sekolah dasar-menengah), 5 MB (banyak portal sekolah menengah atas dan kampus), dan 10–25 MB (portal kampus yang lebih longgar). Periksa ketentuan kelas Anda secara spesifik.",
    },
    {
      q: "Apakah kompresi agresif membuat teks tidak terbaca?",
      a: "Kadang-kadang. Kompresi berat pada hasil pindaian yang resolusinya sudah rendah bisa membuat karakter jadi berpiksel. Coba pengaturan kuat dulu; turunkan ke sedang jika teks jadi buram.",
    },
    {
      q: "Perlukah saya menghapus halaman kosong?",
      a: "Ya. Ekstrak Halaman PDF atau Bagi PDF bisa menghapusnya. Halaman kosong tetap memakan ruang yang nyata dan bukan bagian dari pekerjaan Anda.",
    },
    {
      q: "Bisakah saya mengumpulkan ZIP sebagai gantinya?",
      a: "Sebagian besar portal sekolah tidak menerima ZIP. Yang menerima pun tetap menerapkan batas ukuran, dan mungkin memperlakukan ZIP sebagai satu file dengan batas yang sama.",
    },
    {
      q: "Bagaimana jika file hasil kompresi saya masih terlalu besar?",
      a: "Buang halaman yang tidak dipakai, pindai ulang dalam skala abu-abu/hitam putih pada DPI lebih rendah, atau bagi menjadi beberapa unggahan jika portal mengizinkan. Sebagian tugas mungkin perlu benar-benar dibuat lebih ringkas.",
    },
  ],
  related: [
    { label: "Kompres PDF — perkecil di browser Anda", path: "/compress-pdf" },
    { label: "Bagi PDF — pecah menjadi bagian yang diterima", path: "/split-pdf" },
    { label: "Cara mengumpulkan tugas sebagai PDF", path: "/guides/how-to-submit-homework-as-pdf" },
    { label: "Cara mengurangi ukuran PDF sebelum mengunggah", path: "/guides/how-to-reduce-pdf-size-before-uploading" },
  ],
  parentHub: { label: "Kompres PDF — kurangi ukuran di browser Anda", path: "/compress-pdf" },
};

export default content;
