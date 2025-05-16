import React from 'react'
import Banner from './banner'
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from '@/components/ui/tabs'
import { 
  Camera, 
  FileText, 
  User, 
  CheckSquare, 
  Info, 
  ImageIcon
} from "lucide-react"
import PanduanPemilik from './owner-prep'
import SenaraiSemak from './checklist'
import NotaPenting from './nota-penting'
import ImejUtama from './imej-utama'
import RuangNegatif from './ruang-negatif'
import ImejEditorial from './imej-editorial'

export default function PhotographyGuidePage(){
  return(
    <section className="w-full min-h-screen  bg-black text-white">
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col items-center text-center mb-8'>
          <h1 className="text-4xl font-bold mb-4">Photography Guide</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Ikuti panduan komprehensif kami untuk mengambil gambar kenderaan mewah anda untuk penyenaraian terbaik di
            Luxoticars.
          </p>
        </div>

        <Tabs defaultValue='owner-guide' className='w-full items-center'>
          <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8 bg-gray-600/50 text-white">
            <TabsTrigger value="owner-guide" className="flex items-center gap-2 data-[state=active]:bg-blue-500">
              <User className="h-4 w-4" />
              <span>Panduan Pemilik</span>
            </TabsTrigger>
            <TabsTrigger value="checklist" className="flex items-center gap-2 data-[state=active]:bg-blue-500">
              <CheckSquare className="h-4 w-4" />
              <span>Senarai Semak</span>
            </TabsTrigger>
            <TabsTrigger value="main-images" className="flex items-center gap-2 data-[state=active]:bg-blue-500">
              <FileText className="h-4 w-4" />
              <span>Imej Utama</span>
            </TabsTrigger>
            <TabsTrigger value="editorial-images" className="flex items-center gap-2 data-[state=active]:bg-blue-500">
              <ImageIcon className="h-4 w-4" />
              <span>Imej Editorial</span>
            </TabsTrigger>
            <TabsTrigger value="negative-space" className="flex items-center gap-2 data-[state=active]:bg-blue-500">
              <Camera className="h-4 w-4" />
              <span>Ruang Negatif</span>
            </TabsTrigger>
            <TabsTrigger value="notes" className="flex items-center gap-2 data-[state=active]:bg-blue-500">
              <Info className="h-4 w-4" />
              <span>Nota</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value='owner-guide' className='space-y-8'>
            <PanduanPemilik />
          </TabsContent>

          <TabsContent value='checklist' className='space-y-8'>
            <SenaraiSemak/>
          </TabsContent>

          <TabsContent value='main-images' className='space-y-8'>
            <ImejUtama />
          </TabsContent>

          <TabsContent value='editorial-images' className='space-y-8'>
            <ImejEditorial />
          </TabsContent>

          <TabsContent value='negative-space' className='space-y-8'>
            <RuangNegatif />
          </TabsContent>

          <TabsContent value='notes' className='space-y-8'>
            <NotaPenting />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
