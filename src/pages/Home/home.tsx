import Footer from "@/components/footer";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ImageCarousel } from "@/components/marquee";
import { NavigationMenuDemo } from "@/components/navbar";
import { LayananCard } from "@/components/service";
import { motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
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
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[70vh] md:h-screen overflow-hidden bg-[#FAFAFA]">
        <NavigationMenuDemo className="text-white" textColor="text-black" />

            <div
            onMouseMove={handleMouseMove}
            className="absolute inset-0 bg-cover bg-center 
                        bg-[url('/hero-mobile.png')] 
                        sm:bg-[url('/hero.png')]"
            >
            <motion.img
                src="/cursor.png"
                alt="cursor"
                className="w-[160px] sm:w-[220px] md:w-[380px] absolute pointer-events-none"
                style={{
                left: mousePosition.x - 80,
                top: mousePosition.y - 80,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
            </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
    <div className="bg-white flex flex-wrap gap-2 items-center justify-center py-15 px-4"> <div className="flex flex-col md:flex-row gap-20"> <div className=""> <p className='text-3xl font-semibold mb-4 max-w-[400px]'> Kenapa Anda Harus Memilih PT.Dunia Maya Comunica? </p> <p className='leading-loose max-w-[400px] text-sm text-justify'> Kami selalu memberikan progress project secara transparan dan bertahap, didukung oleh tim yang profesional dan siap menjawab berbagai kebutuhan Anda. Dengan pengalaman yang telah dipercaya oleh banyak pihak dalam mengerjakan berbagai project pemetaan, kami berkomitmen memberikan hasil terbaik untuk setiap klien. </p> <p className="text-blue-500 underline text-sm mt-3 cursor-pointer"> Kenali kami lebih dalam </p> </div> <div className=""> <img src="/robot.png" alt="" /> </div> </div> </div>

      {/* ================= MAP SECTION ================= */}
      <div
        className="relative min-h-[80vh] md:min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg1.png')" }}
      >
        <div className="flex flex-col justify-center h-full px-6 md:px-16 py-20 text-white max-w-5xl ">
          <p className="text-base md:text-lg leading-relaxed max-w-xl mt-10 md:mt-40">
            Layanan kami menjangkau seluruh Indonesia, mulai dari pemetaan
            topografi, survei lahan, hingga pengembangan aplikasi berbasis GIS
            untuk mendukung pengambilan keputusan berbasis lokasi.
          </p>

          <div className="flex flex-wrap gap-10 mt-10">
            <div className="flex items-center gap-3">
              <Award size={30} />
              <div>
                <p className="text-3xl font-semibold">2001</p>
                <p className="text-sm">Didirikan Sejak</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={30} />
              <div>
                <NumberTicker
                  value={30000}
                  startValue={20000}
                  className="text-3xl font-semibold"
                />
                <p className="text-sm">Hektar Diakuisisi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <div className="px-6 md:px-12 py-16 bg-white md:mt-20">
        <p className="text-lg md:text-2xl text-center text-slate-500 leading-relaxed">
          Kami menciptakan solusi digital yang berdampak melalui strategi yang
          tepat, desain kolaboratif, dan pengembangan inovatif untuk mendukung
          transformasi digital berbasis geospasial.
        </p>
      </div>

      {/* ================= SERVICES ================= */}
      <div className="flex flex-col space-y-4 px-6 md:px-10 py-10 bg-white">
        <LayananCard
          title="Pengembangan Aplikasi & Website"
          description="Solusi inovatif untuk visualisasi data spasial dan pemetaan interaktif berbasis web dan mobile."
          imageSrc="/layanan1.png"
          detailLink="/layanan/pengembangan-aplikasi-web-dan-mobile"
        />

        <LayananCard
          title="Sistem Informasi Geografis (SIG)"
          description="Platform SIG interaktif untuk analisis spasial bagi pemerintah, perusahaan, dan masyarakat."
          imageSrc="/2.jpg"
          detailLink="/layanan/sistem-informasi-geografis"
        />

        <LayananCard
          title="Agrikultur Drone"
          description="Monitoring lahan dan penyemprotan presisi menggunakan teknologi drone modern."
          imageSrc="/16.jpg"
          detailLink="/layanan/agrikultur-drone"
        />

        <LayananCard
          title="Pemetaan Topografi & Utilitas"
          description="Survei dan pemetaan akurat untuk pembangunan infrastruktur dan jaringan utilitas."
          imageSrc="/4.png"
          detailLink="/layanan/pemetaan-topografi-dan-utilitas"
        />

        <LayananCard
          title="3D Geospatial & BIM Technology"
          description="Survei dan pemetaan akurat untuk pembangunan infrastruktur dan jaringan utilitas."
          imageSrc="/4.png"
          detailLink="/layanan/3d-geospatial-&-bim-technology"
        />
      </div>

      {/* ================= PARTNERS ================= */}
      <div className="py-10 bg-white">
        <div className="flex flex-col items-center text-center pb-10">
          <p className="text-2xl mb-5 font-semibold">Mitra Kerja Kami</p>
          <div className="flex flex-wrap justify-center gap-10">
            <img src="/DJI.png" className="h-16 md:h-20 object-contain" />
            <img src="/ESRI.png" className="h-16 md:h-20 object-contain" />
            <img src="/Hi-Target.png" className="h-16 md:h-20 object-contain" />
          </div>
        </div>

        <div className="flex flex-col items-center text-center my-10">
          <p className="text-2xl mb-5 font-semibold">Telah Dipercayai Oleh</p>
          <ImageCarousel />
        </div>
      </div>

      {/* ================= VIDEO ================= */}
      <section className="py-16 px-4 md:px-12 text-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
            Video Dokumentasi PT. Dunia Maya Comunica
          </h2>

          <div className="relative rounded-2xl shadow-lg aspect-video overflow-hidden">
            <video
              key={videos[currentIndex]}
              className="w-full h-full object-cover"
              src={videos[currentIndex]}
              controls
              playsInline
            />

            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}