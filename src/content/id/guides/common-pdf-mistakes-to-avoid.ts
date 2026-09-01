import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "common-pdf-mistakes-to-avoid",
  h1: "Kesalahan PDF Umum yang Harus Dihindari",
  description:
    "Kesalahan PDF yang membuang waktu atau membocorkan informasi, seperti kompresi berlebihan, mengirim foto, mengunggah file sensitif, dan lupa halaman, serta cara menghindarinya.",
  updated: "2026-05-23",
  intro: [
    "Sebagian besar masalah PDF bukan soal teknis — melainkan kebiasaan yang sebenarnya bisa dihindari. File yang ditolak karena tidak ada yang mengompresnya, foto yang dikirim padahal seharusnya dokumen, kontrak yang diunggah ke server sembarangan, halaman yang seharusnya tidak ikut terkirim tapi tetap terkirim. Masing-masing kecil, masing-masing umum, dan masing-masing mudah dihentikan begitu Anda tahu harus mewaspadainya.",
    "Panduan ini mengumpulkan kesalahan yang paling sering dilakukan orang dengan PDF, mengapa masing-masing merugikan, dan solusi cepatnya. Beberapa solusi memakai alat gratis di perangkat di situs ini; semuanya lebih merupakan kebiasaan daripada fitur.",
    "Baca sekali dan Anda akan menangkap diri sendiri sebelum kejadian yang sebenarnya bisa dihindari berikutnya — yang, untuk dokumen yang berpindah ke klien, rekan kerja, dan lembaga, lebih berharga daripada kedengarannya.",
  ],
  steps: [
    {
      title: "Mengirim foto, bukan dokumen",
      body: "JPG dari sebuah halaman itu miring, tidak bisa dicari, dan canggung untuk dicetak atau disimpan. Kalau itu sebuah dokumen, konversi dulu ke PDF dengan alat Gambar ke PDF, atau pindai dengan benar — jangan biarkan penerima harus mengurus jepretan biasa.",
    },
    {
      title: "Mengunggah file sensitif ke alat yang tidak dikenal",
      body: "Memasukkan kontrak atau kartu identitas ke layanan 'PDF online gratis' pertama yang ditemukan berarti mengunggahnya ke server orang asing. Gunakan alat berbasis browser di perangkat untuk apa pun yang Anda keberatan kalau dibaca orang lain.",
    },
    {
      title: "Mengompres berlebihan karena kebiasaan",
      body: "Menaikkan kompresi ke maksimum di setiap file merusak dokumen yang sebenarnya tidak membutuhkannya. Gunakan tingkat paling ringan yang mencapai target ukuran Anda, dan jangan kompres file yang sudah kecil.",
    },
    {
      title: "Lupa memeriksa halaman sebelum mengirim",
      body: "Catatan internal, detail penerima sebelumnya, halaman kosong dari pemindai — semua ini bisa ikut terkirim tanpa disadari. Tinjau halaman demi halaman, dan buang yang seharusnya tidak ikut terkirim dengan alat Ekstrak Halaman PDF.",
    },
    {
      title: "Mengirim file yang bisa diedit sebagai 'final'",
      body: "Penawaran atau kontrak yang sudah selesai tapi dikirim sebagai dokumen Word bisa diedit — sengaja atau tidak. Konversi versi final ke PDF agar tata letak dan angkanya tetap.",
    },
    {
      title: "Menimpa satu-satunya file asli Anda",
      body: "Kompresi, konversi, dan pengeditan bersifat satu arah untuk salinan yang Anda simpan. Selalu simpan versi yang sudah diedit dengan nama baru agar file asli yang belum tersentuh tetap ada kalau terjadi kesalahan.",
    },
  ],
  tips: [
    "Perlakukan 'apakah ini dokumen atau gambar?' sebagai pertanyaan pertama. Dokumen dikirim sebagai PDF; hanya gambar sungguhan yang dikirim sebagai JPG.",
    "Privasi adalah kebiasaan, bukan pengaturan. Jadikan alat di perangkat sebagai pilihan default untuk file sensitif agar Anda tidak perlu selalu ingat untuk berhati-hati.",
    "Kompres dengan tujuan, bukan reflek — sesuaikan tingkatnya dengan kebutuhan dan lewati kompresi untuk file yang sudah berukuran wajar.",
    "Pemeriksaan halaman demi halaman selama sepuluh detik sebelum mengirim mencegah kesalahan PDF paling memalukan yang ada.",
    "Simpan file asli. Hampir semua operasi PDF hanya bisa dibalik kalau Anda tidak menimpa sumbernya.",
  ],
  mobileNote:
    "Banyak dari kekeliruan ini terjadi dalam ketergesa-gesaan mengirim sesuatu dari HP. Aplikasi PDF Editor membiarkan Anda memangkas halaman yang tersasar, mengompres secara wajar, mengonversi foto, dan mengunci versi final — semuanya di perangkat — sehingga berbagi yang tergesa-gesa tidak berubah jadi kesalahan yang harus Anda minta maaf.",
  faq: [
    {
      q: "Apa kesalahan PDF yang paling umum?",
      a: "Mengirim foto JPG padahal penerima butuh dokumen. Miring, tidak bisa dicari, dan sulit dicetak atau disimpan. Mengonversi foto itu menjadi PDF terlebih dahulu menyelesaikannya.",
    },
    {
      q: "Mengapa mengunggah PDF ke alat gratis itu berisiko?",
      a: "Banyak alat 'online' mengunggah file Anda ke server, sehingga kontrak atau kartu identitas sebentar tinggal di infrastruktur yang tidak Anda kendalikan. Alat berbasis browser di perangkat sepenuhnya menghindari hal itu.",
    },
    {
      q: "Apakah kompresi lebih banyak selalu lebih baik?",
      a: "Tidak. Kompresi berlebihan merusak dokumen yang sebenarnya tidak membutuhkannya dan tidak berpengaruh apa pun pada file yang sudah kecil. Gunakan tingkat paling ringan yang mencapai target ukuran Anda.",
    },
    {
      q: "Bagaimana cara menghindari mengirim halaman yang salah?",
      a: "Tinjau dokumen halaman demi halaman sebelum mengirim dan buang apa pun yang seharusnya tidak ikut terkirim dengan alat Ekstrak Halaman PDF. Catatan internal dan halaman tersasar biasanya jadi biang keladinya.",
    },
    {
      q: "Mengapa saya tidak boleh menimpa file aslinya?",
      a: "Kompresi, konversi, dan pengeditan bersifat satu arah untuk salinan yang Anda simpan. Menyimpan dengan nama baru menjaga file asli tetap ada sehingga kesalahan mudah dibatalkan.",
    },
  ],
  related: [
    { label: "Semua alat PDF gratis", path: "/pdf-tools" },
    { label: "Cara menyiapkan PDF sebelum berbagi", path: "/guides/how-to-prepare-pdf-before-sharing" },
    { label: "Alat PDF yang mengutamakan privasi", path: "/guides/privacy-first-pdf-tools" },
    { label: "PDF atau JPG untuk dokumen", path: "/guides/pdf-vs-jpg-for-documents" },
  ],
  parentHub: { label: "Semua alat PDF gratis", path: "/pdf-tools" },
};

export default content;
