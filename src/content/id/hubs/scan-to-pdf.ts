import type { HubContent } from "@/types/content";
import { SITE } from "@/content/site";

const content: HubContent = {
  slug: "scan-to-pdf",
  hero: {
    eyebrow: "Pindai ke PDF",
    h1: "Ubah kertas menjadi PDF yang rapi dan dapat dicari.",
    highlight: "rapi",
    lead: "Gunakan kamera HP untuk memindai struk, kartu identitas, kontrak, dan dokumen multi-halaman. Deteksi tepi otomatis, koreksi perspektif, dan OCR — selesai dalam hitungan detik, langsung di perangkat.",
    primaryCta: { label: "Buka aplikasi", href: SITE.app.appStore },
  },
  problem: {
    heading: "Kenapa foto dokumen dari HP sering terlihat buruk",
    paragraphs: [
      "Memotret kontrak dengan kamera bawaan menghasilkan JPG yang terlalu terang karena lampu langit-langit, terdistorsi karena sudut pengambilan gambar, dan menampilkan permukaan di belakang halaman. Bentuknya salah, kontrasnya salah, dan tidak bisa dicari. Siapa pun yang menerimanya harus menyipitkan mata untuk membacanya.",
      "Kirim JPG semacam itu ke akuntan dan Anda akan menerima permintaan sopan untuk “PDF yang layak”. Alasannya nyata: JPG struk tidak bisa diindeks, tidak bisa diproses OCR oleh software akuntansi mereka, dan sering gagal lolos validator unggahan dokumen.",
      "Aplikasi pemindai dokumen membangun ulang foto menjadi seperti seharusnya: berbentuk persegi panjang, kontras terkoreksi, tidak miring, dan disimpan sebagai PDF dengan teks tersembunyi di baliknya. Dokumen multi-halaman menjadi satu file, bukan dua belas JPG yang berserakan di galeri kamera.",
    ],
  },
  features: {
    heading: "Memindai seperti pakai pemindai sungguhan",
    items: [
      {
        icon: "ScanLine",
        title: "Deteksi tepi otomatis",
        body: "Aplikasi menemukan tepi dokumen secara otomatis dan mengambil pindaian begitu framing-nya pas.",
      },
      {
        icon: "Maximize",
        title: "Koreksi perspektif",
        body: "Sudut yang miring akan diluruskan. Hasilnya tampak seperti diambil tepat dari atas.",
      },
      {
        icon: "Layers",
        title: "Pindaian multi-halaman",
        body: "Ambil gambar halaman demi halaman secara berurutan. Aplikasi menyatukannya menjadi satu PDF.",
      },
      {
        icon: "ScanText",
        title: "OCR (teks dapat dicari)",
        body: "Mengenali kata-kata di dalam halaman hasil pindaian sehingga PDF yang dihasilkan dapat dicari dan disalin.",
      },
      {
        icon: "Sun",
        title: "Filter cerdas",
        body: "Filter berwarna, hitam-putih, atau yang dioptimalkan untuk dokumen guna mengatasi masalah pencahayaan.",
      },
      {
        icon: "Tag",
        title: "Penamaan otomatis",
        body: "Aplikasi menyarankan nama file berdasarkan isi dokumen — struk, kontrak, kartu identitas.",
      },
    ],
  },
  steps: {
    heading: "Cara memindai dokumen ke PDF",
    items: [
      {
        title: "Buka pemindai",
        body: "Ketuk ubin Pindai di layar utama aplikasi PDF Editor.",
      },
      {
        title: "Arahkan ke dokumen",
        body: "Pegang HP kira-kira di atas halaman. Aplikasi menemukan tepinya dan berkedip saat siap.",
      },
      {
        title: "Biarkan mengambil gambar otomatis",
        body: "Atau ketuk secara manual. Pengambilan gambarnya instan.",
      },
      {
        title: "Sesuaikan sudut bila perlu",
        body: "Perbaiki tepi yang terdeteksi sebelum perspektifnya dikoreksi.",
      },
      {
        title: "Tambahkan halaman lagi",
        body: "Ketuk penghitung halaman untuk melanjutkan. Aplikasi menyatukannya sesuai urutan.",
      },
      {
        title: "Simpan sebagai PDF",
        body: "Pilih nama file (atau terima saran otomatis) dan simpan. OCR berjalan di latar belakang.",
      },
    ],
  },
  mobileUseCase: {
    heading: "Memindai di mana pun Anda berada",
    body: "Struk dipindai di meja makan, kontrak di ruang rapat, kartu identitas saat check-in bandara. Intinya, Anda tidak perlu membawa pemindai flatbed di dalam tas. Pemindai dokumen di HP adalah pengganti terdekat dan, untuk kebutuhan bisnis sehari-hari, sudah lebih dari cukup.",
  },
  faq: [
    {
      q: "Apakah kualitas pindaiannya sebagus pemindai flatbed?",
      a: "Untuk dokumen bisnis sehari-hari — struk, kontrak, kartu identitas, formulir — ya. Untuk pemindaian foto arsip atau cetakan kecil di kertas glossy, pemindai flatbed tetap lebih unggul.",
    },
    {
      q: "Seberapa andal pemindaian multi-halaman?",
      a: "Sangat andal. Aplikasi terus mengambil gambar sampai Anda berhenti, dan Anda bisa mengurutkan ulang atau menghapus halaman sebelum menyimpan.",
    },
    {
      q: "Bahasa apa saja yang didukung OCR?",
      a: "Semua bahasa berhuruf Latin utama, ditambah Sirilik, Yunani, Arab, Mandarin, Jepang, Korea. Kualitas pengenalan bervariasi tergantung pencahayaan dan kondisi halaman.",
    },
    {
      q: "Bisakah saya memindai kartu identitas dan paspor?",
      a: "Bisa. Aplikasi menghasilkan pindaian yang rapi dan tidak miring yang bisa Anda simpan atau bagikan. Demi keamanan, simpan pindaian kartu identitas di folder yang terproteksi atau beri kata sandi pada PDF hasilnya.",
    },
    {
      q: "Apakah bisa digunakan secara offline?",
      a: "Pemindaian dan deteksi tepi berjalan di perangkat. OCR untuk beberapa bahasa yang kurang umum mungkin memerlukan koneksi saat pertama kali digunakan untuk mengunduh model-nya.",
    },
  ],
  related: [
    {
      label: "Langkah demi langkah: cara memindai dokumen ke PDF",
      path: "/guides/how-to-scan-documents-to-pdf",
    },
    { label: "Edit PDF hasil pindaian setelahnya", path: "/pdf-editor" },
    {
      label: "PDF untuk bisnis",
      path: "/pdf-for-business",
    },
  ],
  appCta: {
    heading: "Pindai dokumen langsung dari kamera Anda.",
    sub: "Gratis untuk iOS dan Android. Hasil pindaian tetap di perangkat Anda.",
  },
};

export default content;
