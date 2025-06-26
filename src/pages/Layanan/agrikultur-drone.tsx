import Footer from "@/components/footer";
import { NavigationMenuDemo } from "@/components/navbar";
import SpotlightCard from "@/components/react-bits/spotlight-card";
import { motion } from "framer-motion";
import { AlertTriangle, Droplet, Droplets, Gauge, Leaf, SearchCheck, SprayCan, Tractor } from "lucide-react";

export default function AgrikulturDrone() {
    const features = [
        {
            title: "Mengidentifikasi Kesuburan Tanah",
            desc: "Kondisi kandungan tanah dapat ditinjau saat menggunakan citra, jika satu area dideteksi kekurangan zat hara, maka saat pemberian pupuk urea tersebut harus dioptimalkan. Selain itu, identifikasi kesuburan tanah menghindari Anda dari kegagalan panen.",
            icon: SearchCheck,
        },
        {
            title: "Mengidentifikasi Gulma",
            desc: "Gulma merupakan tumbuhan liar yang kehadirannya dianggap mengganggu pertumbuhan tanaman. Biasanya gulma tumbuh di sekitar tanaman produksi dan harus segera dipangkas. Sama halnya dengan kesuburan tanah, drone menggunakan citra untuk mengidentifikasi keberadaan gulma.",
            icon: Leaf,
        },
        {
            title: "Mendeteksi Fungsi Pengairan",
            desc: "Irigasi merupakan bagian penting yang tidak terpisahkan dari sistem pertanian. Sukses tidaknya hasil produksi ditentukan juga dari asupan air. Drone juga dapat mendeteksi wilayah mana saja yang kekurangan air.",
            icon: Droplets,
        },
        {
            title: "Penyemprotan Pestisida",
            desc: "Drone sprayer turut mempermudah kita dalam menyemprotkan nutrisi / pestisida ke area tanaman. Penyemprotan yang dilakukan cenderung hemat, cepat, dan merata.",
            icon: SprayCan,
        },
        ];

        const issues = [
            {
                title: "Resiko Bahaya Kimia",
                desc: "Resiko pekerja terhadap bahaya kimia yang dihasilkan oleh obat kimia yang digunakan, dimana dengan menggunakan drone menghilangkan bahaya ini.",
                icon: AlertTriangle,
            },
            {
                title: "Produktivitas Rendah",
                desc: "Produktifitas yang rendah ketika digunakan di sawah ataupun kebun yang luas, dan kemungkinan untuk merusak tanaman karena mesin yang digunakan petani.",
                icon: Tractor,
        },
            {
                title: "Pemborosan Sumber Daya",
                desc: "Menggunakan sumber daya yang lebih banyak, seperti obat kimia ataupun air untuk penyemprotan tanaman, dibandingkan dengan menggunakan drone yang sudah memiliki automasi pengeluaran.",
                icon: Droplet,
            },
            {
                title: "Efektivitas Rendah",
                desc: "Efektifitas yang lebih rendah dibandingkan ketika menggunakan drone, dimana dengan metode tradisional hanya dapat mencapai 0,6 HA/hari sementara drone bisa mencapai 40 HA/hari.",
                icon: Gauge,
            },
        ];

  return (
    <div>
      <section className="relative h-[600px] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero5.png')" }}>
        <NavigationMenuDemo/>
        <div className="flex justify-center items-center h-full">
            <p className="text-white text-6xl mt-10 font-semibold text-center">Agrikultur Drone</p>
        </div>
      </section>
        <section className="min-h-screen bg-gradient-to-r from-white to-blue-50 py-24 px-6 md:px-16  text-slate-800 relative overflow-hidden">
            <div className="flex flex-col md:flex-row max-w-[900px] mx-auto items-center gap-5">
                <div className="">
                    <img src="/drone.png" alt=""  className="max-h-[700px]"/>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-justify max-w-[900px] leading-loose">Dengan bantuan teknologi seperti drone, dapat memberikan informasi yang lebih akurat dan meminimalisir kerusakan lingkungan, serta membantu mencapai ketahanan pangan yang stabil, berkelanjutan, dan modern.</p>
                    <p className="text-justify max-w-[900px] leading-loose mt-5">
                        Teknologi drone memanfaatkan fitur yang dimiliki untuk membantu petani dalam bidang pertanian, seperti : sistem navigasi, perangkat perekam seperti kamera, infrared, dan berbagai sensor yang dimiliki drone. Drone juga mengoleksi raw data yang kemudian diolah menggunakan algoritma menjadi informasi yang berguna bagi petani. Kemampuan tersebut kemudian diaplikasikan untuk melakukan hal-hal seperti
                    </p>
                </div>
            </div>

            <section className="py-16 px-4 md:px-12 text-justify text-slate-800">
               <div className="flex flex-wrap justify-center gap-6">
                    {features.map((item, i) => (
                        <SpotlightCard
                        key={i}
                        className="custom-spotlight-card bg-white border border-[#E3E3E3] w-full sm:w-[300px] md:w-[320px] lg:w-[350px] cursor-pointer hover:scale-95 transition-all"
                        spotlightColor="rgba(57, 255, 20, 0.1)"
                        >
                        <div className="flex items-center gap-3 mb-3">
                            <item.icon className="w-6 h-6 text-green-700" />
                            <p className="text-lg font-semibold">{item.title}</p>
                        </div>
                        <p className="text-sm text-justify">{item.desc}</p>
                        </SpotlightCard>
                    ))}
                </div>
            </section>
            
                <section className=" py-5 px-4 md:px-12 text-slate-800">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="max-w-[870px] mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
                        Penggunaan Analisis Foto Multispectral
                        </h2>
                        <p className="text-base leading-relaxed mb-6 text-justify">
                        Analisis citra multispektral digunakan untuk aplikasi penting di bidang pertanian,
                        kehutanan, perhitungan karbon, ilmu lingkungan, dan konservasi alam. Selain dilengkapi
                        dengan kamera spektrum Red, Green, dan Blue yang didapatkan dari kamera RGB, dilengkapi
                        juga dengan kamera citra Near Infrared (NIR) yang dapat merefleksikan kadar klorofil pada
                        tanaman.
                        </p>
                        <p className="text-base leading-relaxed text-justify">
                        Multispektral termasuk analisis lanjutan seperti analisis kesehatan tanaman, deteksi hama
                        dan penyakit, perencanaan penggunaan pupuk, manajemen irigasi, riset fenotip dan genetik,
                        dan rehabilitasi lingkungan.
                        </p>
                    </motion.div>
                </section>

                <div className="flex justify-center mt-10">
                    <img src="/nir.png" alt="" />
                </div>    
                
                <div className="flex max-w-[850px] mt-10 mx-auto items-center gap-5">
                    <div className="">
                        <img src="/ndvi.png" alt=""  className="max-h-[700px]"/>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <p className="text-justify max-w-[900px] leading-loose mt-5">
                            Menggunakan foto Near Infrared (NIR) yang dihasilkan oleh drone, dapat dilihat bagaimana kesehatan tanaman tersebut dari bagaimana dia menyerap cahaya yang masuk dari matahari, dimana tanaman yang sehat akan menampilkan warna NIR yang lebih besar, sementara tanaman yang tidak sehat akan menampilkan warna NIR yang lebih sedikit.
                        </p>
                        <p className="text-justify max-w-[900px] leading-loose mt-5">
                            Disamping merupakan contoh analisis multispectral untuk mengetahui kesehatan tanaman, dengan presisi ukuran centimeter.
                        </p>
                    </div>
                </div>
                <section className="mt-10 py-5 px-4 md:px-12 text-slate-800">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="max-w-[870px] mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
                        Perbandingan antara Metode Tradisional dan Menggunakan Drone
                        </h2>
                        <div className="flex justify-center mt-10">
                            <img src="/tradisional.png" alt="" />
                        </div>    
                        <p className="text-base mt-10 leading-relaxed mb-6 text-justify">
                        Banyak petani masih menggunakan metode tradisional seperti diatas, dimana mereka harus berjalan kaki untuk memeriksa kondisi tanaman mereka, yang tentu saja sangat melelahkan dan memakan waktu. Akan tetapi, menggunakan metode tradisional seperti ini memiliki banyak kekurangan, seperti :
                        </p>
                         <div className="flex flex-wrap justify-center gap-6">
                            {issues.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <SpotlightCard
                                className="custom-spotlight-card bg-white border border-[#E3E3E3] w-full sm:w-[300px] md:w-[320px] lg:w-[350px] cursor-pointer hover:scale-95 transition-all"
                                spotlightColor="rgba(57, 255, 20, 0.1)" 
                                >
                                <div className="flex items-center gap-3 mb-3">
                                    <item.icon className="w-6 h-6 text-green-700" />
                                    <p className="text-lg font-semibold">{item.title}</p>
                                </div>
                                <p className="text-sm text-justify">{item.desc}</p>
                                </SpotlightCard>
                            </motion.div>
                            ))}
                        </div>
                        <p className="text-base mt-10 leading-relaxed mb-6 text-justify">
                            Teknologi Drone Spraying menjadi solusi terbaik untuk membantu pengelolaan tanaman lebih efektif dan efisien. Dengan drone spraying, pekerjaan tidak hanya lebih cepat dan hemat namun menjamin kesehatan petani dari bahan kimia.
                        </p>
                         <p className="text-base mt-2 leading-relaxed mb-6 text-justify">
                             Kami mengerti bahwa merubah kultur dan kebiasaan SDM bukan hal mudah, terlebih mengedukasi para pekerja lapangan dari area lahan Anda untuk mengoperasikan drone. maka daripada itu, Personal Professional Service adalah cerminan dari passion kami untuk memberikan solusi terbaik, tepat sasaran, efektif dan efisien.
                         </p>
                    </motion.div>
                </section>

                <section className="py-16 px-4 md:px-12 text-slate-800">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6">
                        Dokumentasi PT. Dunia Maya Comunica
                        </h2>
                        <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-video">
                        <video
                            className="w-full h-full object-cover"
                            src="/gallery/22.mp4"
                            controls
                            playsInline
                        />
                        </div>
                    </div>
                </section>

        </section>
        <Footer/>
    </div>
  )
}
