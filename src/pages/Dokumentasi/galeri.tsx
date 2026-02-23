import Footer from "@/components/footer";
import { ParallaxScrollDemo } from "@/components/gallery2";
import { ParallaxScrollKAI } from "@/components/kai";
import { ParallaxScrollKetapang } from "@/components/ketapang";
import { NavigationMenuDemo } from "@/components/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Galeri() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      
      {/* Navbar */}
      <div className="bg-blue-950">
        <NavigationMenuDemo className="text-white" textColor="text-black" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center text-center py-10 sm:py-14 md:py-16 px-4">
        
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6 sm:mb-8">
          Galeri PT. Dunia Maya Comunica
        </h1>

        {/* Tabs */}
        <div className="w-full flex justify-center">
          <Tabs
            defaultValue="account"
            className="w-full max-w-6xl flex flex-col items-center"
          >
            {/* Tabs Header */}
            <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-blue-50 border border-blue-100 p-2 rounded-lg">
              <TabsTrigger className="text-xs sm:text-sm" value="account">
                Semua Foto
              </TabsTrigger>
              <TabsTrigger className="text-xs sm:text-sm" value="password">
                Kerjasama dengan KAI
              </TabsTrigger>
              <TabsTrigger className="text-xs sm:text-sm" value="pln">
                Register Aset PLN Ketapang
              </TabsTrigger>
            </TabsList>

            {/* Semua Foto */}
            <TabsContent value="account" className="w-full mt-6">
              <ParallaxScrollDemo />
            </TabsContent>

            {/* KAI */}
            <TabsContent value="password" className="w-full mt-6">
              <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-2xl mx-auto">
                Galeri dokumentasi kerjasama kami dengan PT. KAI.
              </p>
              <ParallaxScrollKAI />
            </TabsContent>

            {/* PLN */}
            <TabsContent value="pln" className="w-full mt-6">
              <p className="text-sm sm:text-base text-gray-600 mb-4 max-w-2xl mx-auto">
                Dokumentasi registrasi aset kami di PLN Ketapang.
              </p>
              <ParallaxScrollKetapang />
            </TabsContent>

          </Tabs>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}