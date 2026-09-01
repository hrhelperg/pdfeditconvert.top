import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "sign-pdf",
  hero: {
    eyebrow: "Tanda Tangan PDF",
    h1: "Tanda tangani PDF dari HP hanya dalam hitungan detik.",
    highlight: "detik",
    lead: "Tambahkan tanda tangan tulisan tangan asli, nama yang diketik, atau inisial ke PDF apa pun. Tempatkan, ubah ukurannya, lalu ekspor — tanpa mencetak, memindai, atau mengirim file ke diri sendiri lewat email.",
    primaryCta: { label: "Buka aplikasi", href: SITE.app.appStore },
  },
  problem: {
    heading: "Kenapa era cetak dan pindai akhirnya berakhir",
    paragraphs: [
      "Rutinitas menandatangani cara lama — cetak PDF, tanda tangani, pindai, kirim balik lewat email — entah bagaimana masih bertahan sampai 2026. Sebagian besar perusahaan sudah menerima tanda tangan elektronik, tetapi masih banyak kontrak yang datang dengan tulisan “harap ditandatangani dan dikembalikan”, seolah semua orang punya printer dan pemindai.",
      "Layanan tanda tangan elektronik publik mengatasi sebagian masalah ini, tetapi menambah hambatan login, unggah dokumen, pengelolaan akun, dan tingkatan harga. Untuk satu tanda tangan pada satu dokumen, itu berlebihan dan menambah waktu tunggu yang tidak Anda perlukan.",
      "Alur tanda tangan native di HP adalah solusi yang pas untuk kebutuhan ini: buka PDF, gambar atau ketik tanda tangan Anda, tempatkan, kirim. Seluruh proses ini kurang dari semenit dan berfungsi tanpa akun, di pesawat, atau di tempat parkir.",
    ],
  },
  features: {
    heading: "Tanda tangani sesuai kebutuhan dokumen",
    items: [
      {
        icon: "Pencil",
        title: "Tanda tangan tulisan tangan",
        body: "Gambar dengan jari atau stylus. Simpan sekali, gunakan lagi di setiap dokumen berikutnya.",
      },
      {
        icon: "Type",
        title: "Tanda tangan yang diketik",
        body: "Ketik nama Anda dan pilih font bergaya kursif untuk tanda tangan yang bersih dan mudah dibaca.",
      },
      {
        icon: "User",
        title: "Stempel inisial",
        body: "Simpan inisial Anda secara terpisah untuk dokumen yang memerlukannya di setiap halaman.",
      },
      {
        icon: "Calendar",
        title: "Stempel tanggal",
        body: "Sisipkan tanggal dengan satu ketukan di samping tanda tangan Anda ketika kontrak memintanya.",
      },
      {
        icon: "Users",
        title: "Alur kerja multi-penanda tangan",
        body: "Kirimkan PDF dari satu penanda tangan ke penanda tangan lain lewat menu bagikan. Setiap tanda tangan tetap di tempatnya.",
      },
      {
        icon: "ShieldCheck",
        title: "Ekspor lengkap dengan info audit",
        body: "Salinan yang sudah ditandatangani menyertakan stempel waktu dan metadata tanda tangan untuk keperluan pencatatan.",
      },
    ],
  },
  steps: {
    heading: "Cara menandatangani PDF dari HP",
    items: [
      {
        title: "Buka PDF",
        body: "Impor dokumen ke aplikasi PDF Editor dari Files, email, atau aplikasi berbagi apa pun.",
      },
      {
        title: "Ketuk alat Tanda Tangan",
        body: "Terletak di toolbar pengeditan. Pilih tulisan tangan, diketik, atau inisial.",
      },
      {
        title: "Gambar atau ketik tanda tangan Anda",
        body: "Hanya sekali di awal — tanda tangan akan disimpan untuk dipakai lagi. Anda bisa mengubah atau menggantinya kapan saja lewat Pengaturan.",
      },
      {
        title: "Tempatkan dan ubah ukurannya",
        body: "Seret tanda tangan ke posisi yang tepat. Ubah ukurannya dengan gagang di sudut. Tambahkan stempel tanggal jika diperlukan.",
      },
      {
        title: "Ekspor salinan yang sudah ditandatangani",
        body: "Simpan menimpa file asli atau sebagai salinan baru. Bagikan langsung lewat Mail atau aplikasi perpesanan apa pun.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Menandatangani tanpa mengganggu jadwal harian",
    body: "Tanda tangan itu jarang jadi hambatan sebenarnya — yang menghambat adalah waktu yang dibutuhkan untuk mencari printer. Menandatangani dari HP berarti kontrak kembali ke pihak lain dalam hitungan jam, bukan hari. Sangat membantu untuk pekerja lepas, pemilik usaha kecil, dan siapa pun yang bekerja jauh dari meja kerja.",
  },
  faq: [
    {
      q: "Apakah tanda tangan elektronik sah secara hukum?",
      a: "Di sebagian besar yurisdiksi, ya — untuk sebagian besar dokumen bisnis. Regulasi eIDAS Uni Eropa dan ESIGN Act Amerika Serikat sama-sama mengakui tanda tangan elektronik. Untuk dokumen bernilai tinggi atau sensitif secara hukum, periksa aturan setempat dan pertimbangkan tanda tangan elektronik yang memenuhi syarat (qualified electronic signature).",
    },
    {
      q: "Apakah tanda tangan saya akan disimpan di server?",
      a: "Tidak. Tanda tangan yang tersimpan berada di perangkat Anda. Tanda tangan diterapkan ke dokumen secara lokal dan tidak pernah diunggah ke infrastruktur kami.",
    },
    {
      q: "Bisakah beberapa orang menandatangani PDF yang sama?",
      a: "Bisa. Kirimkan file dari satu penanda tangan ke penanda tangan lain lewat menu bagikan, AirDrop, email, atau aplikasi perpesanan apa pun. Setiap tanda tangan ditambahkan dan tersimpan di tempatnya.",
    },
    {
      q: "Bagaimana jika PDF sudah punya kolom tanda tangan?",
      a: "Aplikasi mendeteksi kolom tanda tangan yang sudah ada dan membiarkan Anda mengetuknya langsung. Tanda tangan Anda otomatis menyesuaikan ukuran dan posisi yang tepat.",
    },
    {
      q: "Bisakah saya memakainya dengan Apple Pencil atau S Pen?",
      a: "Bisa. Keduanya menghasilkan goresan yang lebih halus dibanding menandatangani dengan jari, dan itu membuat perbedaan nyata pada kontrak yang melalui tinjauan visual.",
    },
  ],
  related: [
    {
      label: "Langkah demi langkah: cara menandatangani PDF dari HP",
      path: "/guides/how-to-sign-pdf-on-phone",
    },
    { label: "Lindungi PDF yang sudah ditandatangani dengan kata sandi", path: "/pdf-security" },
    { label: "Alur kerja untuk pekerja lepas", path: "/use-cases/freelancers" },
  ],
  appCta: {
    heading: "Tanda tangani PDF dari mana saja.",
    sub: "Gratis untuk iOS dan Android. Tidak perlu akun.",
  },
};

export default content;
