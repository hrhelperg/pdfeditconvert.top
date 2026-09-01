import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "pdf-vs-jpg-for-documents",
  h1: "PDF atau JPG untuk Dokumen, Berhenti Mengirim Foto",
  description:
    "Alasan foto JPG dari sebuah dokumen adalah pilihan yang salah untuk dikirim, kapan PDF adalah pilihan tepat, dan cara mengonversi foto menjadi dokumen yang benar.",
  updated: "2026-05-23",
  intro: [
    "Seseorang meminta sebuah dokumen, dan hal tercepat yang bisa dilakukan adalah memotretnya dan mengirim JPG-nya. Rasanya efisien. Tapi itu juga alasan orang lain berakhir memicingkan mata melihat gambar yang miring dan bergaris silau, tidak bisa mencetaknya dengan rapi, mencarinya, atau menyimpannya bersama dokumen lain. Untuk dokumen yang sesungguhnya, foto JPG hampir selalu format yang salah — dan PDF hampir selalu yang tepat.",
    "Panduan ini menjelaskan perbedaannya di titik yang penting: dokumen. Ini bukan tabel fitur yang netral — ini adalah alasan untuk mengonversi foto itu menjadi PDF sebelum Anda mengirimnya, dan cara cepat melakukannya dengan alat gratis Gambar ke PDF, yang berjalan di perangkat Anda tanpa ada yang diunggah.",
    "Kalau Anda pernah menerima lima JPG yang seharusnya jadi satu PDF yang rapi, ini panduan yang layak dikirim balik.",
  ],
  steps: [
    {
      title: "Pahami apa yang hilang dari foto JPG",
      body: "Dokumen yang difoto adalah satu gambar tunggal: tidak ada banyak halaman dalam satu file, tidak ada teks yang bisa dicari, sering miring dan pencahayaannya tidak rata. Itu gambar dari sebuah dokumen, bukan dokumen itu sendiri.",
    },
    {
      title: "Lihat apa yang diberikan PDF pada dokumen",
      body: "PDF menampung banyak halaman dalam satu file, tercetak dengan ukuran yang bisa diprediksi, terbuka identik di mana saja, dan cocok berdampingan dengan dokumen lain. Ini format yang dipakai sebagian besar dunia untuk menyimpan dan mengarsipkan.",
    },
    {
      title: "Putuskan berdasarkan tujuan",
      body: "Kalau penerima akan membaca, mencetak, menyimpan, atau menggabungkannya dengan dokumen lain, kirim PDF. Satu JPG saja baru cocok kalau gambar itu sendiri yang jadi intinya — foto, bukan berkas administratif.",
    },
    {
      title: "Konversi foto menjadi PDF",
      body: "Buka alat Gambar ke PDF, tambahkan JPG Anda, urutkan, dan buat satu PDF. Beberapa halaman hasil foto menjadi satu dokumen, bukan sebaran gambar.",
    },
    {
      title: "Buat agar terlihat seperti dokumen",
      body: "Potong dan luruskan foto terlebih dahulu agar halamannya rata. Untuk apa pun yang penting, pindaian yang benar dengan deteksi tepi lebih baik daripada foto mentah.",
    },
    {
      title: "Sesuaikan ukuran dan kirim",
      body: "Kompres PDF-nya kalau halaman hasil foto membuatnya berat, lalu kirim satu file bersih yang benar-benar bisa dipakai penerima.",
    },
  ],
  tips: [
    "Tanda Anda seharusnya mengirim PDF: penerima meminta Anda 'kirim sebagai dokumen yang benar' atau tidak bisa mencetaknya dengan rapi.",
    "Banyak halaman adalah faktor penentu. Dua JPG dari formulir dua halaman itu berantakan; satu PDF adalah dokumen.",
    "JPG dari teks tidak bisa dicari. PDF yang dibuat dari teks asli bisa, dan bahkan PDF hasil pindaian pun bisa dibuat bisa dicari dengan pengenalan teks.",
    "JPG adalah pilihan yang tepat saat gambar itu sendiri adalah kontennya — foto produk, tangkapan layar yang Anda bagikan sebagai gambar. Salah kalau kontennya adalah sebuah dokumen.",
    "Mengonversi tidak memperbaiki foto yang buruk. Luruskan dan pastikan pencahayaan halaman baik sebelum mengonversi, atau pindai dengan benar.",
  ],
  mobileNote:
    "Karena JPG yang bermasalah hampir selalu berawal dari foto HP, perbaikannya juga sebaiknya dilakukan di HP. Aplikasi PDF Editor mengubah foto dari galeri menjadi PDF, atau memindai halaman dengan benar memakai deteksi tepi dan pengenalan teks — jadi yang Anda kirim adalah dokumen, bukan jepretan biasa.",
  faq: [
    {
      q: "Mengapa saya tidak boleh langsung mengirim JPG dari sebuah dokumen?",
      a: "Foto JPG adalah satu gambar tunggal, sering miring, tanpa teks yang bisa dicari, tanpa dukungan multihalaman, dan ukuran cetak yang tidak bisa diprediksi. Untuk sebuah dokumen, itu menciptakan pekerjaan tambahan bagi penerima. PDF menghindari semua itu.",
    },
    {
      q: "Kapan JPG sebenarnya pilihan yang tepat?",
      a: "Saat gambar itu sendiri adalah kontennya — sebuah foto, tangkapan layar yang Anda bagikan sebagai gambar. JPG salah khususnya saat kontennya adalah dokumen yang perlu dibaca, dicetak, atau disimpan seseorang.",
    },
    {
      q: "Bagaimana cara mengubah foto menjadi dokumen PDF?",
      a: "Gunakan alat Gambar ke PDF: tambahkan JPG Anda, urutkan, dan buat satu PDF. Untuk hasil terbaik, luruskan foto dulu atau pindai halaman dengan benar.",
    },
    {
      q: "Apakah PDF hasil konversi bisa dicari?",
      a: "Tidak, kalau dari foto biasa — itu masih gambar. Untuk mendapatkan teks yang bisa dicari, pindai dokumen dengan pengenalan teks memakai aplikasi PDF Editor, bukan sekadar memotretnya.",
    },
    {
      q: "Apakah ada perbandingan fitur yang netral antara keduanya?",
      a: "Ada. Untuk perbandingan langsung PDF dan JPG dari sisi kualitas, ukuran, dan penggunaan, lihat halaman perbandingan PDF atau JPG.",
    },
  ],
  related: [
    { label: "Gambar ke PDF — ubah foto menjadi dokumen", path: "/image-to-pdf" },
    { label: "PDF atau JPG — perbandingan fitur", path: "/compare/pdf-vs-jpg" },
    { label: "Cara mengonversi JPG ke PDF", path: "/guides/how-to-convert-jpg-to-pdf" },
    { label: "Cara membuat PDF dari kamera Anda", path: "/guides/how-to-create-pdf-from-camera" },
  ],
  parentHub: { label: "Konverter PDF", path: "/pdf-converter" },
};

export default content;
