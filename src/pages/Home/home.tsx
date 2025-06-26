import video from '@/assets/video/video.mp4'
import { CardGlass } from '@/components/acernity/card'
import Footer from '@/components/footer'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { ImageCarousel } from '@/components/marquee'
import { NavigationMenuDemo } from '@/components/navbar'
import SpotlightCard from '@/components/react-bits/spotlight-card'
import { motion } from 'framer-motion'
import { Award, Handshake, MapPin, ShieldCheck, SplinePointer, Users } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <section className="relative w-full h-screen overflow-hidden bg-[#FAFAFA]">
      <NavigationMenuDemo/>  
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={video}
            />

            <div className="absolute inset-0 bg-black opacity-40" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
                <h1 className="text-4xl md:text-4xl md:w-[1000px] font-bold mb-4">Solusimu untuk Masalah Pemetaan Geografis Maupun Agrikultur Drone</h1>
                <p className="text-lg md:w-[1000px] text-justify">PT. Dunia Maya Communica adalah perusahaan swasta yang bergerak dibidang jasa survey pemetaan, desain engineering sipil keairan, transportasi dan bidang telematika perangkat lunaks</p>
                <div className="flex gap-4 mt-6">
                    <InteractiveHoverButton className='backdrop-blur-lg bg-white/30 border-b border-white/20 shadow-md text-white'>Mengenai Kami</InteractiveHoverButton>
                    <InteractiveHoverButton className='backdrop-blur-lg bg-white/30 border-b border-white/20 shadow-md text-white'>Hubungi Kami</InteractiveHoverButton>
                </div>
            </div>
        </section>

        <div className="bg-[#FAFAFA] flex flex-wrap gap-2 items-center justify-center py-20 px-4">

            <div className="flex flex-col">
                <img src="/why.png" alt="" className='w-[400px]' />
                <img src="/why2.png" alt="" className='w-[400px]' />
            </div>

            <div className="">
                <div className="">
                    <p className='text-2xl mb-3 font-semibold'>Kenapa Anda Harus Memilih PT.Dunia Maya Comunica?</p>
                </div>
                <div className="grid grid-cols-2 gap-2 items-center justify-center">
                    <SpotlightCard
                        className="custom-spotlight-card bg-[#F5F5F5] border border-[#E3E3E3] w-[300px] cursor-pointer hover:scale-95"
                        spotlightColor="rgba(100, 115, 200, 0.3)">

                        <ShieldCheck size={40}/>
                        <p className="text-xl font-semibold mt-5">Transparan</p>
                        <p className="text-sm mt-2 text-justify">Kami akan memberikan progress project yang sedang dikerjakan secara transparan dan bertahap</p>
                    </SpotlightCard>
                    <SpotlightCard
                        className="custom-spotlight-card bg-[#F5F5F5] border border-[#E3E3E3] w-[300px] cursor-pointer hover:scale-95"
                        spotlightColor="rgba(100, 115, 200, 0.3)">

                        <Handshake size={40}/>
                        <p className="text-xl font-semibold mt-5">Profesional</p>
                        <p className="text-sm mt-2 text-justify">Kami memiliki berbagai tim yang profesional dan mampu menjawab berbagai keinginan anda</p>
                    </SpotlightCard>
                    <SpotlightCard
                        className="custom-spotlight-card bg-[#F5F5F5] border border-[#E3E3E3] w-[300px] cursor-pointer hover:scale-95"
                        spotlightColor="rgba(100, 115, 200, 0.3)">

                        <SplinePointer size={40}/>
                        <p className="text-xl font-semibold mt-5">Berpengalaman</p>
                        <p className="text-sm mt-2 text-justify">Telah banyak yang mempercayakan project-project pemetaan kepada kami</p>
                    </SpotlightCard>

                    <div className="mr-5">
                        <p className='w-[300px] mb-4 leading-relaxed'>Kenali lebih dalam siapa kami, bagaimana kami bekerja, dan mengapa kami menjadi pilihan terpercaya bagi banyak klien.</p>
                        <ShimmerButton className="shadow-2xl ">
                            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white lg:text-lg">
                                Tentang Kami
                            </span>
                        </ShimmerButton>
                    </div>
                </div>
            </div>

        </div>

        <motion.div
          className="bg-[#242222] flex-col lg:flex-row flex"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div
            className="relative bg-[url('/indo.jpg')] w-[800px] bg-cover bg-center px-20 py-15 flex flex-col overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
            {/* Overlay hitam transparan */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Konten utama */}
            <div className="relative z-10">
                <p className="text-[#FFB743] text-4xl font-semibold mb-3">
                PT. Dunia Maya Comunica
                </p>
                <p className="w-[464px] text-justify text-white">
                Seluruh layanan kami yang ada di penjuru Indonesia, mulai dari pemetaan topografi,
                survei lahan, hingga pengembangan aplikasi berbasis GIS. Kami siap membantu Anda
                dalam setiap langkah.
                </p>
            </div>
            </motion.div>

            <div className="">
                    <div className="p-4 gap-10 px-10">
                        <div className="flex  items-center gap-3">
                            <Award size={35} className="text-[#FFB743]"/>
                            <p className='text-white text-4xl font-semibold'>2001</p>
                        </div>
                        <p className="text-white text-md mt-2">PT. Dunia Maya Comunica Berdiri Sejak</p>
                    </div>
                <div className="grid grid-cols-3 p-4 gap-10 px-10 text-white">

                    <div className="flex flex-col itcems-center justify-start">
                        <div className="flex  items-center gap-3">
                            <MapPin size={40} className="text-[#FFB743]"/>
                            <NumberTicker
                                value={30000}
                                startValue={20000}
                                className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white"
                                />
                        </div>
                        <p className="text-white text-md mt-2">Hektar Diakuisisi</p>
                    </div>

                    <div className="flex flex-col itcems-center justify-start">
                        <div className="flex  items-center gap-3">
                            <Users size={35} className="text-[#FFB743]"/>
                            <NumberTicker
                                value={350}
                                startValue={100}
                                className="whitespace-pre-wrap text-3xl font-medium tracking-tighter text-black dark:text-white"
                                />
                        </div>
                        <p className="text-white text-md mt-2">Kepuasan Client</p>
                    </div>
                </div>
            </div>
        </motion.div>
        <p className='pt-20 flex justify-center px-4 text-2xl font-semibold pb-5 text-black bg-[#FAFAFA]'>Layanan PT.Dunia Maya Comunica</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 pb-20  px-4 bg-[#FAFAFA]">
                <CardGlass
                title="Sistem Informasi Geografis"
                description="Pengolahan data spasial untuk analisis lokasi dan pengambilan keputusan berbasis peta."
                image="/geo.jpg"
                />

                <CardGlass
                title="Pemetaan Topografi dan Utilitas"
                description="Layanan survei dan pemetaan kontur tanah serta jaringan utilitas secara akurat."
                image="/map.jpg"
                />

                <CardGlass
                title="Pengembangan Aplikasi Web dan Mobile"
                description="Pembuatan aplikasi digital berbasis web dan mobile sesuai kebutuhan bisnis."
                image="/coding.jpg"
                />

                <CardGlass
                title="Agrikultur Drone"
                description="Teknologi drone untuk pemetaan lahan dan penyemprotan tanaman secara presisi."
                image="/drone.jpg"
                />
        </div>

        <div className="py-10">
            <div className="flex flex-col items-center justify-center text-center pb-10 bg-slate-50 py-5">
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
        <div className="flex flex-col items-center justify-center text-center pb-5">

        </div>
        <Footer/>

    </div>
  )
}
