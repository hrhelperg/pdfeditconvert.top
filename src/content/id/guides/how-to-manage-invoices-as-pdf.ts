import type { GuideContent } from "@/types/content";

const content: GuideContent = {
  slug: "how-to-manage-invoices-as-pdf",
  h1: "Cara Mengelola Faktur sebagai PDF (Terbitkan, Lacak, Arsipkan)",
  description:
    "Alur kerja faktur berbentuk PDF yang tidak butuh software akuntansi: membuat, memberi nomor, mengirim, melacak, dan mengarsipkan, hanya dengan alat browser gratis dan sistem folder yang rapi.",
  updated: "2026-05-29",
  intro: [
    "Sebagian besar bisnis kecil sebenarnya tidak butuh software akuntansi untuk faktur. Yang mereka butuhkan adalah cara yang bersih untuk membuat PDF, memberinya nomor secara konsisten, mengirimnya, melacak kapan dibayar, dan mengarsipkannya untuk musim pajak. Pekerjaannya mekanis; alatnya sederhana; kekacauannya datang dari melewatkan konvensinya.",
    "Alur kerja faktur punya empat bagian: penerbitan (dari mana PDF-nya berasal), pelacakan (di mana Anda mencatat apa yang sudah dikirim), pembayaran (kapan lunas), dan arsip (di mana salinan yang sudah dibayar disimpan). Setiap bagian singkat, dan tidak satu pun butuh langganan kalau Anda tidak menginginkannya.",
    "Panduan ini membahas alur kerjanya seperti yang benar-benar bisa dijalankan pekerja lepas atau tim kecil — dengan pembuatan PDF dari template Word, penomoran yang Anda kendalikan sendiri, dan arsip yang bertahan lewat audit pajak. Ini bukan satu-satunya cara; ini cara yang tidak mudah rusak.",
  ],
  steps: [
    {
      title: "Buat faktur di Word atau Pages dari sebuah template",
      body: "Template faktur di Word memberi Anda tata letak yang sudah teruji baik dengan placeholder untuk klien, tanggal, item baris, total. Isi variabelnya, ekspor ke PDF dengan Word ke PDF. Hindari mengedit angka final di mana pun kecuali di sumbernya.",
    },
    {
      title: "Gunakan nomor faktur yang berurutan",
      body: "INV-2026-001, INV-2026-002, dan seterusnya. Reset setiap tahun. Nomornya harus unik dan tidak boleh ada yang terlewat — otoritas pajak menandai kesenjangannya. Simpan daftar berjalan di spreadsheet atau file teks.",
    },
    {
      title: "Simpan dengan nama file yang bisa diprediksi",
      body: "NamaKlien_Invoice_INV-2026-001_2026-05-29.pdf. Nomor faktur di nama file cocok dengan nomor di dokumennya. Folder per klien memudahkan pencarian per klien.",
    },
    {
      title: "Kirim dan catat segera",
      body: "Kirim PDF-nya lewat email dengan catatan pengantar singkat dan catat pengirimannya di lembar pelacakan Anda. Tanggal dikirim, nomor faktur, jumlah, tanggal jatuh tempo. Semenit Anda tidak mencatat adalah semenit Anda akan lupa.",
    },
    {
      title: "Beri watermark PAID begitu pembayaran lunas",
      body: "Tambah Watermark ke PDF mencap PAID di seluruh file beserta tanggalnya. Salinan yang sudah dibayar masuk ke /invoices/paid/; yang belum dibayar tetap di /invoices/outstanding/. Status visual mengalahkan status spreadsheet.",
    },
    {
      title: "Arsipkan per tahun",
      body: "Di akhir tahun, pindahkan /invoices/paid/ ke /Archive/Invoices/2026/. Simpan setidaknya tujuh tahun (bervariasi tergantung yurisdiksi). Arsipnya harus mudah dipahami sendiri lima tahun kemudian saat Anda sudah lupa logika pengarsipan aslinya.",
    },
  ],
  tips: [
    "Jangan pernah mengedit faktur yang sudah dikirim. Kalau jumlahnya salah, terbitkan nota kredit atau faktur baru — jejak auditnya harus tetap utuh.",
    "Cocokkan nomor faktur di file dengan nomor faktur di dokumen dan baris di lembar pelacakan Anda. Tiga tempat yang mengatakan hal yang sama.",
    "PDF/A adalah format arsip yang disukai sebagian otoritas pajak. Kalau Anda mengajukan di yurisdiksi seperti itu, ekspor ulang kumpulan akhir tahun ke PDF/A.",
    "Kompres faktur untuk arsip — isinya teks polos, tapi arsip menumpuk seiring waktu. Salinan yang dikompres menghemat ruang disk yang nyata selama bertahun-tahun.",
    "Jangan lindungi faktur dengan kata sandi kecuali klien memintanya. Hambatan tanpa manfaat pada dokumen yang cuma berisi angka dan nama.",
  ],
  mobileNote:
    "Faktur semakin sering dibuat dari HP — pengiriman cepat dari kedai kopi setelah selesai kerja. Aplikasi PDF Editor membiarkan Anda mengisi template, mencap nomor fakturnya, dan mengirim PDF lewat email dari mobile, dengan salinan tersimpan lokal untuk catatan Anda.",
  faq: [
    {
      q: "Apakah saya butuh software faktur?",
      a: "Tidak untuk volume rendah. Template Word, lembar pelacakan, dan sistem folder menangani puluhan faktur per bulan dengan bersih. Software baru terbayar saat Anda butuh penagihan berulang, multi-mata uang, atau banyak klien.",
    },
    {
      q: "Format nomor faktur apa yang harus saya gunakan?",
      a: "Berurutan, tanpa celah, idealnya dengan awalan tahun. INV-2026-001 mudah dibaca manusia dan ramah untuk audit pajak.",
    },
    {
      q: "Berapa lama saya harus menyimpan faktur?",
      a: "Bervariasi tergantung yurisdiksi; tujuh tahun adalah default yang aman. Periksa aturan negara Anda untuk persyaratan sebenarnya.",
    },
    {
      q: "Haruskah saya mengirim faktur sebagai Word atau PDF?",
      a: "Selalu PDF. PDF mengunci format dan jumlahnya; dokumen Word mengundang klien yang bermaksud baik untuk 'memperbaiki' sesuatu.",
    },
    {
      q: "Bagaimana dengan faktur PPN atau pajak penjualan?",
      a: "Sebagian yurisdiksi mensyaratkan tata letak khusus, penomoran berurutan, dan pengarsipan format asli. Patuhi aturan setempat; alur kerja di atas mengakomodasinya.",
    },
  ],
  related: [
    { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
    { label: "Word ke PDF — ekspor faktur yang bersih", path: "/word-to-pdf" },
    { label: "Tambah Watermark ke PDF — cap PAID pada faktur yang lunas", path: "/add-watermark-to-pdf" },
    { label: "Alur kerja PDF untuk bisnis kecil", path: "/guides/pdf-workflows-for-small-business" },
  ],
  parentHub: { label: "PDF untuk Bisnis — kontrak dan alur kerja", path: "/pdf-for-business" },
};

export default content;
