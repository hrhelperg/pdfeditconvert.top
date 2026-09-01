import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "why-is-my-pdf-blurry",
  h1: "Mengapa PDF Saya Buram? Penyebab Resolusi, Kompresi, dan Pindaian",
  description:
    "PDF yang buram berasal dari hasil pindaian resolusi rendah, kompresi yang terlalu agresif, atau ekspor yang buruk, bukan dari format itu sendiri. Cara mengenali penyebabnya dan mengembalikan ketajamannya.",
  updated: "2026-05-29",
  intro: [
    "PDF sendiri tidak membuat apa pun jadi buram. Formatnya dengan senang hati menampung teks vektor yang tajam sekali dan gambar beresolusi tinggi. Jadi saat sebuah PDF terlihat lembut, kabur, atau berbintik, kebur-annya berasal dari sesuatu yang spesifik: tangkapan beresolusi rendah, proses kompresi yang berlebihan, atau pengaturan ekspor yang meratakan konten tajam menjadi bitmap.",
    "Mengetahui yang mana dari itu yang menyebabkan file Anda itu penting, karena solusinya sama sekali berbeda. Anda tidak bisa 'membalikkan kompresi' pada file yang sudah terlanjur dipadatkan, tapi Anda bisa mengekspor ulang dari sumbernya, memindai ulang dengan resolusi lebih baik, atau memilih alat konversi yang berbeda. Dan untuk sebagian file, kebur-annya hanya ada di layar — aslinya masih ada dengan kualitas penuh, hanya ditampilkan dengan resolusi lebih rendah oleh aplikasi pembacanya.",
    "Panduan ini memisahkan penyebabnya dan membahas solusi praktis untuk masing-masing, termasuk saat tidak ada yang bisa dilakukan selain kembali ke sumbernya.",
  ],
  steps: [
    {
      title: "Perbesar tampilan dan lihat tepinya",
      body: "Tepi yang tajam pada teks tapi buram pada gambar berarti teksnya vektor (bersih) dan hanya foto yang menurun kualitasnya — biasanya karena kompresi. Teks yang buram berarti seluruh halaman adalah gambar raster, yang menunjuk ke hasil pindaian atau ekspor cetak-ke-gambar.",
    },
    {
      title: "Periksa resolusi tangkapan aslinya",
      body: "Hasil pindaian di bawah 150 DPI terlihat buram apa pun yang terjadi. 200–300 DPI adalah rentang aman untuk dokumen yang akan Anda baca di layar; 600 DPI berlebihan untuk apa pun selain pekerjaan arsip dan mencetak foto.",
    },
    {
      title: "Selidiki apakah kompresinya berlebihan",
      body: "File yang dikurangi ke kompresi 'ekstrem' sering terlihat baik-baik saja di zoom 100% dan buruk di 200%. Kalau Anda punya file asli sebelum dikompres, Anda bisa mengompres ulang dengan pengaturan yang lebih ringan — alat Kompres PDF membiarkan Anda menukar ukuran dengan ketajaman.",
    },
    {
      title: "Ekspor ulang dari sumbernya kalau Anda punya",
      body: "Dokumen yang dibuat di Word, Pages, Google Docs, atau alat desain sebaiknya diekspor sebagai PDF langsung dari sumbernya, bukan dicetak-ke-PDF dari tangkapan layar. Ekspor langsung menjaga teks tetap vektor dan tajam.",
    },
    {
      title: "Pindai ulang dengan pengaturan yang lebih tajam",
      body: "Kalau hasil pindaian yang jadi masalah dan Anda masih punya dokumen fisiknya, ulangi dengan 300 DPI dan pencahayaan yang baik. Pindaian HP sangat terbantu dengan satu halaman yang diletakkan rata dengan cahaya merata — tangkapan yang bersih mengalahkan pengolahan pasca-pindai.",
    },
    {
      title: "Pastikan file-nya tidak hanya sedang diskalakan turun di layar",
      body: "Sebagian aplikasi pembaca menurunkan sampel demi performa dan terlihat lembut sampai Anda memperbesar. Ekspor satu halaman ke PNG dengan PDF ke Gambar pada skala 2× atau 3× — kalau PNG-nya tajam, aplikasi pembaca Anda-lah yang menyesatkan.",
    },
  ],
  tips: [
    "Teks yang bisa dipilih dengan kursor Anda adalah teks vektor dan seharusnya tidak buram. Kalau tetap buram, aplikasi pembaca Anda-lah yang menurunkan resolusinya — coba aplikasi pembaca lain sebelum mengekspor ulang.",
    "Tangkapan layar HP yang disisipkan ke dalam dokumen sudah beresolusi rendah sejak awal. Selamanya akan terlihat lembut di PDF; tidak ada solusi selain menangkap ulang dengan ukuran lebih besar.",
    "Jangan kompres file dua kali. Kompresi berulang memperparah kebur-an. Simpan aslinya, kompres sekali untuk dibagikan, arsipkan sumbernya.",
    "PDF yang penuh JPEG buram lebih parah daripada yang penuh PNG pada tingkat kompresi yang sama — JPEG memang lossy sejak dirancang. Tangkapan layar PNG tetap tajam lebih lama.",
    "Kalau Anda hanya punya versi yang buram, OCR kadang masih bisa memulihkan teks yang terbaca meski gambarnya terlihat kabur. Teksnya akan bersih meski gambarnya tidak.",
  ],
  mobileNote:
    "PDF hasil tangkapan HP paling sering buram karena tangan yang goyang, cahaya rendah, atau pembingkaian yang buruk. Alur pindai aplikasi PDF Editor mencakup deteksi tepi otomatis dan stabilisasi, sehingga satu tangkapan yang stabil per halaman menghasilkan dokumen yang tajam sejak percobaan pertama.",
  faq: [
    {
      q: "Apakah kebur-annya disebabkan oleh format PDF itu sendiri?",
      a: "Tidak. PDF menyimpan teks sebagai vektor dan gambar pada resolusi sumbernya. Kebur-an berasal dari sumbernya — DPI rendah, kompresi yang agresif, atau ekspor tangkapan layar.",
    },
    {
      q: "Bisakah saya mempertajam PDF yang buram setelahnya?",
      a: "Hampir tidak bisa. Sebagian pengolahan gambar bisa memalsukan ketajaman pada foto, tapi Anda tidak bisa menambahkan detail yang tidak pernah ditangkap. Solusi jujurnya adalah mengulang langkah dari sumbernya.",
    },
    {
      q: "Mengapa PDF hasil kompresi saya buram hanya di sebagian halaman?",
      a: "Kompresi paling berpengaruh pada halaman yang penuh gambar. Halaman berisi teks saja tetap tajam. Kalau hanya sebagian halaman yang buram, itulah halaman yang berisi foto, grafik, atau hasil pindaian.",
    },
    {
      q: "Resolusi pindaian apa yang harus saya gunakan?",
      a: "200–300 DPI untuk dokumen yang akan Anda baca di layar. 300 DPI untuk apa pun yang mungkin akan dicetak. 600 DPI hanya untuk foto dan pekerjaan arsip.",
    },
    {
      q: "Mengapa PDF-nya terlihat baik-baik saja di 100% tapi buram di 200%?",
      a: "Halaman itu diubah jadi raster dengan resolusi rendah atau dikompres melewati titik di mana memperbesar tampilan mengungkap kehilangannya. Tidak ada cara mengembalikan detailnya tanpa mengekspor ulang.",
    },
  ],
  related: [
    { label: "Kompres PDF — pilih pengaturan yang lebih ringan untuk hasil lebih tajam", path: "/compress-pdf" },
    { label: "PDF ke Gambar — ekspor halaman dengan resolusi tinggi", path: "/pdf-to-images" },
    { label: "Pengaturan kompresi PDF terbaik", path: "/guides/best-pdf-compression-settings" },
    { label: "Cara memperbaiki kualitas PDF hasil pindaian", path: "/guides/how-to-fix-scanned-pdf-quality" },
  ],
  parentHub: { label: "PDF ke Gambar — ekspor halaman yang tajam", path: "/pdf-to-images" },
};

export default content;
