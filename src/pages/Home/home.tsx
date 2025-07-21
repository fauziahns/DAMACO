
import Footer from '@/components/footer'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { ImageCarousel } from '@/components/marquee'
import { NavigationMenuDemo } from '@/components/navbar'
import { LayananCard } from '@/components/service'
import { motion } from 'framer-motion'
import { Award, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    
      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
      };

              const videos = [
        "/gallery/22.mp4",
        "/gallery/21.mp4",
        "/gallery/18.mp4",
        "/gallery/20.mp4",
        ];

          const [currentIndex, setCurrentIndex] = useState(0);

        const prevSlide = () => {
            setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
        };

        const nextSlide = () => {
            setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
        };
      
  return (
    <div>
      <section className="relative w-full h-screen overflow-hidden bg-[#FAFAFA]">
      <NavigationMenuDemo className='text-white' textColor='text-black'/>  
            <div
                onMouseMove={handleMouseMove} 
                className="absolute inset-0 bg-black opacity-100 bg-no-repeat w-screen bg-cover" style={{ backgroundImage: "url('/hero9.png')" }}> 
                <motion.img
                src="/cursor.png"
                alt="drone"
                className="w-[300px] md:w-[500px] absolute pointer-events-none"
                style={{
                    left: mousePosition.x - 150,
                    top: mousePosition.y - 150,
                }}
                animate={{
                    x: 0,
                    y: 0,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
            </div>
        </section>

        <div className="bg-white flex flex-wrap gap-2 items-center justify-center py-15  px-4">
            <div className="flex flex-col md:flex-row gap-20">
                <div className="">
                    <p className='text-3xl font-semibold mb-4 max-w-[400px]'>
                        Kenapa Anda Harus Memilih PT.Dunia Maya Comunica?
                    </p>
                    <p className='leading-loose max-w-[400px] text-sm text-justify'>
                        Kami selalu memberikan progress project secara transparan dan bertahap, didukung oleh tim yang profesional dan siap menjawab berbagai kebutuhan Anda. Dengan pengalaman yang telah dipercaya oleh banyak pihak dalam mengerjakan berbagai project pemetaan, kami berkomitmen memberikan hasil terbaik untuk setiap klien.
                    </p>
                    <p className="text-blue-500 underline text-sm mt-3 cursor-pointer">
                        Kenali kami lebih dalam
                    </p>
                </div>
                <div className="">
                    <img src="/robot.png" alt="" />
                </div>
            </div>
        </div>

                <div
                    className="relative min-h-screen bg-cover bg-black opacity-100 bg-center"
                    style={{ backgroundImage: "url('/bg1.png')" }}
                    >
        
                    {/* Konten di atas overlay */}
                    <div className="flex flex-col pt-60 md:pt-0 gap-10 text-center h-full px-4 z-10 relative">
                        <p className="w-[464px] text-justify mt-60 text-white text-lg leading-relaxed">
                            Seluruh layanan kami yang ada di penjuru Indonesia, mulai dari pemetaan topografi,
                            survei lahan, hingga pengembangan aplikasi berbasis GIS. Kami siap membantu Anda
                            dalam setiap langkah.
                        </p>
                        <div className="flex items-center itcems-center justify-start gap-7">
                            <div className="flex flex-col  items-center gap-2">
                                <div className="flex gap-2 items-center">
                                    <Award size={30} className="text-white"/>
                                    <p className='text-white text-3xl font-semibold'>2001</p>
                                </div>
                                <div className="">
                                    <p className="text-white text-md">Didirikan Sejak</p>
                                </div>
                            </div>
                            <div className="flex flex-col  items-center gap-2">
                                <div className="flex gap-2 items-center">
                                    <MapPin size={30} className="text-white"/>
                                    <NumberTicker
                                        value={30000}
                                        startValue={20000}
                                        className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white"
                                        />
                                </div>
                                <div className="">
                                    <p className="text-white text-md">Hektar Diakuisisi</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

        <div className="flex gap-5 flex-col px-8  bg-white">
            <p className='pt-20  max-w-[800px] text-2xl leading-relaxed text-justify pb-5 text-slate-500 bg-white'>Kami menciptakan solusi digital yang berdampak melalui strategi yang tepat, desain kolaboratif, dan pengembangan yang inovatif.</p>
        </div>

        <div className="flex flex-col space-y-4 px-8 py-10 bg-white">
            <LayananCard
                title="Pengembangan Aplikasi dan Website"
                description="Kami menghadirkan solusi inovatif untuk visualisasi data spasial, pemetaan interaktif, serta pengelolaan informasi berbasis lokasi yang dapat diakses kapan saja dan di mana saja melalui perangkat digital Anda."
                imageSrc="/layanan1.png"
                detailLink="/layanan/pengembangan-aplikasi-web-dan-mobile"
            />

                  <LayananCard
                    title="Sistem Informasi Geografis (SIG)"
                    description="Solusi SIG interaktif yang mendukung analisis spasial untuk kebutuhan pemerintah, perusahaan, dan masyarakat luas."
                    imageSrc="/2.jpg"
                    detailLink="/layanan/sistem-informasi-geografis"
                />

            <LayananCard
                title="Agrikultur Drone"
                description="Teknologi drone untuk monitoring lahan dan penyemprotan presisi yang efisien untuk sektor pertanian modern."
                imageSrc="/16.jpg"
                detailLink="/layanan/agrikultur-drone"
            />

            <LayananCard
                title="Pemetaan Topografi dan Utilitas"
                description="Layanan survei dan pemetaan yang akurat untuk mendukung pembangunan infrastruktur dan jaringan utilitas."
                imageSrc="/4.png"
                detailLink="/layanan/pemetaan-topografi-dan-utilitas"
            />
        </div>
        
        <div className="py-10">
            <div className="flex flex-col items-center justify-center text-center pb-10 bg-white py-5">
                <p className='text-2xl mb-5 font-semibold'>Mitra Kerja Kami</p>
                <div className="flex gap-10">
                    <img src="/DJI.png" alt="dji" className="h-24 w-auto object-contain" />
                    <img src="/ESRI.png" alt="esri" className="h-24 w-auto object-contain" />
                    <img src="/Hi-Target.png" alt="esri"  className="h-24 w-auto object-contain"/>
                </div>

            </div>

            <div className="flex flex-col items-center justify-center text-center my-10">
                <p className="text-2xl mb-5 font-semibold">Telah Dipercayai Oleh</p>
                <ImageCarousel/>
            </div>
        </div>

            <section className="py-16 px-4 md:px-12 text-slate-800">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
                    Video Dokumentasi PT. Dunia Maya Comunica
                    </h2>
                    <div className="relative rounded-2xl shadow-lg aspect-video overflow-hidden group">
                    {/* Video */}
                    <video
                        key={videos[currentIndex]} // reset video on change
                        className="w-full h-full object-cover"
                        src={videos[currentIndex]}
                        controls
                        playsInline
                    />
                    {/* Chevron Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 p-2 rounded-full shadow transition"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 p-2 rounded-full shadow transition"
                    >
                        <ChevronRight size={24} />
                    </button>
                    </div>
                </div>
            </section>
        <Footer/>

    </div>
  )
}
