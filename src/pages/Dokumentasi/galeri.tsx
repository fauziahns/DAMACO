import Footer from '@/components/footer'
import { ParallaxScrollDemo } from '@/components/gallery2'
import { ParallaxScrollKAI } from '@/components/kai'
import { ParallaxScrollKetapang } from '@/components/ketapang'
import { NavigationMenuDemo } from '@/components/navbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Galeri() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <div className="bg-blue-950">
        <NavigationMenuDemo className='text-white' textColor='text-black'/>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
          Galeri PT. Dunia Maya Comunica
        </h1>

        {/* Tabs Centered */}
        <div className="w-full flex justify-center mb-12">
          <Tabs defaultValue="account" className="w-full max-w-4xl flex flex-col items-center">
            <TabsList className="flex justify-center gap-4 bg-blue-50 border border-blue-100 p-2 rounded-lg">
              <TabsTrigger value="account">Semua Foto</TabsTrigger>
              <TabsTrigger value="password">Kerjasama dengan KAI</TabsTrigger>
              <TabsTrigger value="pln">Register Aset PLN Ketapang</TabsTrigger>
            </TabsList>

            <TabsContent value="account" className="w-full mt-6">
              <ParallaxScrollDemo />
            </TabsContent>
            <TabsContent value="password" className="w-full mt-6">
              <p className="text-sm text-gray-600 py-4">
                Galeri dokumentasi kerjasama kami dengan PT.KAI.
                <ParallaxScrollKAI/>
              </p>
            </TabsContent>
            <TabsContent value="pln" className="w-full mt-6">
              <p className="text-sm text-gray-600 py-4">
                Dokumentasi registrasi aset kami di PLN Ketapang.
                <ParallaxScrollKetapang/>
              </p>
              
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
