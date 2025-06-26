import { useState } from "react";
import { motion } from "framer-motion";
import { NavigationMenuDemo } from "@/components/navbar";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import CustomCarousel from "@/components/swiper";
import Footer from "@/components/footer";

export default function Product() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div>
      <div
        onMouseMove={handleMouseMove}
        className="relative h-screen w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/hero7.png')" }}
      >
        <NavigationMenuDemo className="text-white" textColor="text-black" />

        {/* Text Centered */}
        <div className="flex flex-col items-center justify-center text-center h-full px-4 z-10 relative">
          <p className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Solusi Drone dan Software Terbaik
          </p>
          <p className="text-white text-lg max-w-[700px] leading-relaxed drop-shadow-md">
           Tingkatkan efisiensi survei, pemetaan, dan monitoring dengan teknologi DJI terpercaya.
          </p>
        </div>

        {/* Drone Following Cursor */}
        <motion.img
          src="/drone2.png"
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

      <div className="min-h-screen  py-24">
        <div className="flex justify-center">
            <p className="max-w-[900px] text-justify mb-10 leading-loose mx-10 md:mx-0">
                Kami menyediakan berbagai jenis drone dan software DJI — mulai dari DJI AGRAS untuk kebutuhan pertanian presisi, DJI MATRICE untuk industri, hingga DJI TERRA untuk pemetaan 3D dan DJI MULTI-SPECTRAL untuk analisis vegetasi. Semua produk siap menunjang transformasi digital Anda.
            </p>
        </div>

        <div
            className="relative min-h-screen bg-cover bg-center mt-10"
            style={{ backgroundImage: "url('/bg.png')" }}
            >

            {/* Konten di atas overlay */}
            <div className="flex pt-60 md:pt-0 gap-10  items-center justify-center text-center h-full px-4 z-10 relative">
                <CardContainer className="inter-var">
                    <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border bg-white/10 dark:bg-white/10 border-white/20 backdrop-blur-lg shadow-lg">
                        <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                        DJI MAVIC
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-white text-justify text-sm mt-2"
                            >
                       Merupakan drone lipat serbaguna yang dirancang untuk kebutuhan fotografi dan videografi udara. Dengan desain ringkas, kamera berkualitas tinggi, dan fitur penerbangan cerdas
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <video
                            autoPlay
                            muted
                            playsInline
                            loop
                            src="/dji-mavic.mp4"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            />
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-center justify-center text-sm mt-2 dark:text-neutral-300"
                            >
                                Sumber : https://www.youtube.com/watch?v=4f8NiLApHLk
                        </CardItem>
                    </CardBody>
                </CardContainer>
                 <div className="hidden md:block">
                    <img src="/mavic.png" alt="" className="w-[500px] hover:scale-110"/>
                    <button className="bg-white cursor-pointer text-black text-sm font-semibold hover:text-white px-6 py-3 mt-5 rounded-md hover:bg-green-900 transition-colors">
                        Hubungi Kami  
                    </button>
                </div>
            </div>
        </div>

        <div className="mt-20 mx-10 md:mx-0">
          <CustomCarousel />
        </div>

        <div
            className="relative min-h-screen bg-cover bg-center mt-10"
            style={{ backgroundImage: "url('/hero8.png')" }}
            >

            {/* Konten di atas overlay */}
            <div className="flex pt-60 md:pt-0 gap-10  items-center justify-center text-center h-full px-4 z-10 relative">
                <CardContainer className="inter-var">
                    <CardBody className="relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border bg-white/10 dark:bg-white/10 border-white/20 backdrop-blur-lg shadow-lg">
                        <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                        DJI TERRA
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-white text-justify text-sm mt-2"
                            >
                       DJI Terra mempermudah pengguna drone untuk membuat peta digital dan model 3D dari data penerbangan secara cepat dan presisi.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <video
                            autoPlay
                            muted
                            playsInline
                            loop
                            src="/terra.mp4"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            />
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-center justify-center text-sm mt-2 dark:text-neutral-300"
                            >
                                Sumber : https://www.youtube.com/watch?v=AtCO75QKtyU
                        </CardItem>
                    </CardBody>
                </CardContainer>
                 <div className="hidden md:block">
                    <img src="/terra2.png" alt="" className="w-[500px] hover:scale-110"/>
                    <button className="bg-white cursor-pointer text-black text-sm font-semibold hover:text-white px-6 py-3 mt-5 rounded-md hover:bg-green-900 transition-colors">
                        Hubungi Kami  
                    </button>
                </div>
            </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}
