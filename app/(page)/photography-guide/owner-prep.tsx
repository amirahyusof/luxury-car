import React from 'react'

export default function PanduanPemilik(){
  return(
    <div className="max-w-5xl p-6 rounded-lg">
      {/* Owner Prep */}
        <h3 className="text-xl font-bold mb-4 text-blue-500">Pemilik Kenderaan</h3>
        <ul className="space-y-3 text-gray-300">
          <li>
            • Kami meminta setiap pemilik menyediakan kenderaan dengan sewajarnya. Memastikan bahawa ia
            dibersihkan (dalaman dan luaran). Ini membolehkan kereta itu dipaparkan dalam keadaan terbaik dan
            fotogenik.
          </li>
          <li>
            • Menyediakan semua dokumen (Geran, AP, Rekod Servis dan lain-lain) supaya mudah dan boleh diambil
            gambar sekali dengan kereta anda.
          </li>
        </ul>


      {/* photographer */}
        <h3 className="text-xl font-bold mb-4 mt-6 text-blue-500">Untuk Fotografer</h3>
        <ul className="space-y-3 text-gray-300">
          <li>
            • Tangkapan pada kamera digital. Tangkapan menggunakan telefon bimbit sila pastikan kemas dan jelas
            (Untuk media sosial).
          </li>
          <li>
            • Adalah penting untuk merangkap sekurang-kurangnya 15-20 imej. Potret bersama foto landskap (yang
            kebanyakannya akan diambil dalam format landskap.)
          </li>
          <li>
            • Kami memerlukan 20-30 tangkapan minimum untuk penyenaraian. Semua ini harus diubah saiznya agar
            sesuai dengan dimensi 2000 x 1333px.
          </li>
          <li>• Elakkan merakam dalam cahaya kontras tinggi, merakam di atas rumput dan keadaan cuaca buruk.</li>
          <li>
            • Anda bebas menyunting mengikut kehendak anda tanpa mengubah rupa/warna/keadaan kereta. Jadi
            ragu-ragu pelarasan ringkas kepada kontras dan pendedahan adalah mencukupi.
          </li>
          <li>
            • Jika boleh, kami juga meminta anda merakam video penyenaraian berjalan panjang, ini boleh dirakam
            pada telefon anda.
          </li>
        </ul>

      {/* Photographer Service */}
        <h3 className="text-xl font-bold mb-4 mt-6 text-blue-500">Servis Fotografer</h3>
        <p className="text-gray-300">
          Kami menawarkan servis fotografi secara berbayar untuk membantu anda mengambil gambar untuk jualan di laman 
          web kami. Bayaran adalah sebanyak RM500 untuk satu unit kenderaan.
        </p>
    </div> 

  )
}