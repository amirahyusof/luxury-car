import React from "react"

export default function ImejEditorial(){
  return(
    <div className="bg-black/80 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-blue-500">PANDUAN FOTOGRAFI - IMEJ EDITORIAL</h3>
      <h4 className="text-lg font-bold mb-2">CONTOH</h4>
      <ul className="space-y-3 text-gray-300">
        <li>
          • Koleksi gambar editorial juga merupakan tambahan yang bagus. Ini boleh jadi apa-apa sahaja daripada
          tangkapan sudut lebar, panning, roller atau gaya hidup.
        </li>
        <li>• Lihat contoh yang dilampirkan untuk inspirasi.</li>
        <li>
          • Tangkapan ini akan membolehkan kerja anda menonjol daripada jurugambar lain di kawasan anda, dan
          memberi inspirasi banyak kemungkinan penggunaan merentas pemasaran cetak/digital.
        </li>
        <li>
          • Letakkan subjek dalam cara untuk membantu menjual kereta dan gaya hidup di sekelilingnya kepada
          pembida.
        </li>
      </ul>

      <div className="mt-6">
        <h4 className="text-lg font-bold mb-2">TEKNIK EDITORIAL</h4>
        <ul className="space-y-3 text-gray-300">
          <li>
            • Panning Shot: Ikuti kenderaan bergerak dengan kamera, menggunakan shutter speed yang lebih
            perlahan (1/30 - 1/60) untuk menangkap kesan gerakan.
          </li>
          <li>• Rolling Shot: Ambil gambar dari kenderaan lain yang bergerak pada kelajuan yang sama.</li>
          <li>• Lifestyle Shot: Tunjukkan kenderaan dalam konteks penggunaan atau gaya hidup yang sesuai.</li>
          <li>
            • Detail Macro: Fokus pada detail kecil yang menarik seperti lencana, jahitan atau elemen reka
            bentuk unik.
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-bold mb-2">PERALATAN YANG DISYORKAN</h4>
        <ul className="space-y-3 text-gray-300">
          <li>• Kamera DSLR atau mirrorless dengan lensa pelbagai.</li>
          <li>• Lensa sudut lebar (24-35mm) untuk tangkapan keseluruhan.</li>
          <li>• Lensa zoom (70-200mm) untuk panning dan detail.</li>
          <li>• Tripod atau monopod untuk kestabilan.</li>
          <li>• Polarizing filter untuk mengurangkan pantulan.</li>
          <li>• Reflector untuk mengisi bayang (opsyenal).</li>
        </ul>
      </div>
    </div>
    
  )
}