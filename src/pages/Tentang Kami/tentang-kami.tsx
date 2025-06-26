
import Footer from "@/components/footer";
import { ImageCarousel } from "@/components/marquee";
import { NavigationMenuDemo } from "@/components/navbar";
import { motion } from "framer-motion";

export default function TentangKami() {
  return (
    <div>
        <section className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero2.png')" }}>
        <NavigationMenuDemo/>
        </section>

        <div className="">
            <div className="flex flex-col items-center justify-center text-center my-10">
                <p className="text-xl mb-5 font-light">Kepercayaan mereka adalah komitmen kami</p>
                <ImageCarousel/>
            </div>
        </div>

        <motion.div
            className="mt-20 mb-10 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
        <p className="text-2xl w-[800px] text-center font-bold text-slate-700 leading-relaxed">
            Sejak tahun 2001, kami hadir untuk memberikan solusi digital terbaik
            melalui teknologi, inovasi, dan kepercayaan
        </p>

        </motion.div>
        <div className="flex justify-center">
            <img src="/about.png" alt="" className="flex justify-center" />

        </div>
        <motion.div
            className="mb-5 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <p className="text-justify leading-loose max-w-[800px] mx-4"><a className="font-bold">PT. DUNIA MAYA COMMUNICA (DAMACO)</a> didirikan pada tanggal
                12 Desember 2001 di Bandung.

                <br />Pendirian PT. DAMACO diilhami oleh keadaan yang
                memandang perlunya usaha jasa konsultasi non teknik di bidang rancang bangun aplikasi dan rekayasa komputer, untuk turut membantu mencarikan solusi terbaik dalam mencapai kesuksesan di bidang investasi Informasi (IT) baik di bidang pemerintahan maupun Swasta. Dengan ditunjang oleh sumber daya manusia yang cukup terlatih dibidangnya.</p>
        </motion.div>
        <motion.div
            className="mb-10 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
             <p className="text-justify leading-loose max-w-[800px] mx-4">PT. DUNIA MAYA COMMUNICA (Damaco) merupakan perusahaan swasta yang bergerak dibidang <a className="font-semibold">jasa survey pemetaan, desain enjiniring sipil keairan, transportasi dan bidang telematika perangkat lunak.</a>

             Damaco mempunyai pengalaman bidang jasa konsultasi meliputi bidang survey dan pemetaan pajak bumi dan bangunan, topografi, survey inventarisasi kondisi jalan, IRMS, pemetaan utilitas jaringan listrik, pemetaan drone, citra satelit/ remote sensing, photo udara, pengembangan sistem Informasi, pembuatan aplikasi bisnis proses, perangkat lunak GIS berbasis desktop, GIS berbasis Web, aplikasi mobile dan GIS mobile serta Database GIS.</p>
        </motion.div>

        <section className="min-h-screen bg-gradient-to-r from-white to-blue-50 py-24 px-6 md:px-16 text-center text-slate-800 relative overflow-hidden">
            {/* Vision */}
            <motion.div
                className="mb-32"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl font-thin text-slate-400 mb-4 tracking-widest">Our vision</h2>
                <p className="text-indigo-600 text-sm uppercase tracking-widest">OUR VISION</p>
                <p className="mt-6 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto italic">
                “Menjadi perusahaan konsultan IT yang terdepan dalam menghasilkan produk dan jasa sebagai solusi terkini, terintegrasi, sinergis, profesional dan berkelanjutan sehingga memuaskan client dan stakeholder”
                </p>
            </motion.div>

            {/* Missions */}
            <motion.div
                className="mb-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl font-thin text-slate-400 mb-4 tracking-widest">Our missions</h2>
                <p className="text-indigo-600 text-sm uppercase tracking-widest">OUR MISSIONS</p>
                <p className="mt-6 text-md text-slate-600 max-w-2xl mx-auto">
                Dalam menjalankan visi dan misinya, PT. Dunia Maya Comunica senantiasa menjunjung nilai-nilai inti yang menjadi fondasi dalam setiap langkah dan layanan yang diberikan, yaitu:
                </p>

                {/* Misi Cards */}
                <div className="flex flex-col flex-wrap justify-center items-center gap-4 mt-12">
                {[
                    "Mengembangkan produk IT yang kompetitif",
                    "Mengedepankan profesionalisme dan teamwork dalam menghasilkan layanan yang berkualitas",
                    "Memberikan layanan yang terbaik dan maksimal terhadap client",
                    "Mengembangkan kerjasama dan kemitraan usaha yang saling menguntungkan",
                    "Mengembangkan inovasi teknologi terbaik dan terkini dalam setiap produk"
                ].map((text, i) => (
                    <motion.div
                    key={i}
                    className="p-5 w-[500px] border border-slate-400 flex items-center justify-center text-center px-4 text-sm text-slate-700 hover:bg-blue-900 hover:text-white cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.4 }}
                    viewport={{ once: true }}
                    >
                    <p>{text}</p>
                    </motion.div>
                ))}
                </div>
            </motion.div>
        </section>

        <Footer/>
    </div>
  )
}
