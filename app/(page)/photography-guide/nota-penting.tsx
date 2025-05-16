import React from 'react'

export default function NotaPenting(){
  return(
    <section className='rounded-lg p-6 bg-black/80'>
      <h3 className="text-xl font-bold mb-4 text-blue-500">PANDUAN FOTOGRAFI - NOTA</h3>
      <div>
        <h4 className="text-lg font-bold mb-2">PERKARA YANG PERLU DIPERHATIKAN</h4>
        <ul className="space-y-3 text-gray-300">
          <li>• Ketidaksempurnaan pada badan dan kerja cat.</li>
          <li>• Cat calar atau roda yang bercalar.</li>
          <li>• Bahagian yang rosak.</li>
          <li>• Karat atau reput.</li>
          <li>• Keluarkan plat Dealer / elakkan penjenamaan.</li>
        </ul>

          <h4 className="text-lg font-bold mb-2 mt-6">PERINGATAN</h4>
          <ul className="space-y-3 text-gray-300">
            <li>
              • Tinggalkan ruang negatif di sekeliling penyenaraian dan sentiasa ingat untuk mengumpulkan pilihan
              gambar wira untuk penyenaraian untuk membantunya menonjol.
            </li>
            <li>
              • Jangan mengambil gambar di atas rumput, melainkan ia berkaitan dengan jenis kenderaan (Offroad /
              4x4).
            </li>
            <li>• Pastikan anda mengambil gambar semua dokumen, rekod servis, invois dan lain-lain.</li>
          </ul>
      </div>

      <h4 className="text-lg font-bold mb-2 mt-6">SERAHKAN</h4>
      <ul className="space-y-3 text-gray-300">
        <li>
          • Apabila anda telah merakam dan mengedit foto, e-melkannya kepada; chai@luxoticars.cc menamakannya
          dengan nama pemilik kenderaan.
        </li>
        <li>• Jangan lupa untuk mengubah saiz semula imej kepada 2000px x 1333px.</li>
      </ul>
    </section>
  )
}