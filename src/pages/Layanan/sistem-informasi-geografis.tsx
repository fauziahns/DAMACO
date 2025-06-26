import Footer from "@/components/footer";
import { NavigationMenuDemo } from "@/components/navbar";
import SpotlightCard from "@/components/react-bits/spotlight-card";

export default function SistemInformasiGeografis() {
  return (
    <div>
      <section className="relative h-[500px] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero4.png')" }}>
        <NavigationMenuDemo/>
        <div className="flex justify-center items-center h-full">
            <p className="text-white text-4xl font-semibold text-center">Sistem Informasi Geografis</p>
        </div>
      </section>
        <div className="relative z-10 mt-[-80px] px-4">
            <div className="flex flex-wrap justify-center gap-6">
                {[
                {
                    title: "GIS Data Capture",
                    desc: "Teknik mendapatkan informasi tentang berbagai peta atribut, fasilitas, aset, dan data digital dan terorganisir pada sistem GIS sesuai layer.",
                },
                {
                    title: "GIS Pemerintahan",
                    desc: "Mengelola berbagai tugas yang berhubungan dengan pemerintah pusat/kota/kabupaten eperti bagian perencanaan Pajak Bumi dan Bangunan, demografi kependudukan, dll. ",
                },
                {
                    title: "GIS Mapping Remote Sensing Photogrammetry",
                    desc: "Kegiatan foto udara dengan mempergunakan pesawat drone yang dapat menghasilkan kualitas foto udara yang sangat jelas",
                },
                ].map((item, i) => (
                <SpotlightCard
                    key={i}
                    className="custom-spotlight-card bg-[#F5F5F5] border border-[#E3E3E3] w-full sm:w-[300px] md:w-[320px] lg:w-[350px] cursor-pointer hover:scale-95 transition-all"
                    spotlightColor="rgba(100, 115, 200, 0.3)"
                >
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-sm mt-2 text-justify">{item.desc}</p>
                </SpotlightCard>
                ))}
            </div>
        </div>
        <section className="min-h-screen bg-gradient-to-r from-white to-blue-50 py-24 px-6 md:px-16  text-slate-800 relative overflow-hidden">
        {/* Vision */}
        <div className="mb-32">
            <div className="flex justify-center leading-loose">
                <p className="text-justify mb-10 max-w-[900px] ">Teknologi GIS membantu kita memahami dan mengelola informasi yang berkaitan dengan lokasi dan peta. Dengan sistem ini, berbagai data bisa diolah dan ditampilkan secara digital, membuat proses analisis jadi lebih cepat dan akurat. GIS banyak digunakan untuk berbagai keperluan, mulai dari perencanaan wilayah, pengelolaan aset, hingga pemantauan lingkungan. Beberapa layanan GIS yang kami tawarkan meliputi:</p>

            </div>
            <h2 className="text-5xl font-thin text-slate-400 mb-4 tracking-widest text-center">GIS DATA CAPTURE</h2>
            <p className="text-indigo-600 text-sm uppercase tracking-widest text-center">GIS DATA CAPTURE</p>
                <div className="flex max-w-[900px] mx-auto flex-col items-center mt-5">
                    <img src="/datacapture.jpg" alt="" className="w-full mt-5" />
                </div>
            <div className="flex justify-center flex-col items-center my-5">
                <p className="text-justify max-w-[900px] mt-10 leading-loose">
                    Kaptur data GIS adalah teknik mendapatkan informasi tentang berbagai peta atribut, fasilitas, aset, dan data digital dan terorganisir pada sistem GIS sesuai layer. Ada 2 kategori GIS data capture, Yaitu:
                </p>

                <p className="text-xl font-semibold mt-10">1. Teknik pengambilan data GIS primer yang menggunakan penginderaan jauh dan survei teknik</p>
                <div className="flex flex-col max-w-[900px] gap-5">
                    <div className="flex gap-4 items-center justify-center">
                        <img src="/dpgs.jpg" alt="gpgs" className="max-w-sm" />
                        <img src="/ets.jpg" alt="gpgs" className="max-w-sm" />
                    </div>
                    <div className="mx-20 md:mx-0">
                        <p className="text-justify mt-5 leading-loose">
                            Raster Data Capture, yaitu proses menangkap atribut, dll tanpa kontak fisik. Hal ini biasanya dilakukan dengan bantuan teknik pencitraan satelit, area fotografi.
                            Vector Data Capture, dimana ini termasuk mendapatkan data-set melalui teknik survey fisik seperti DPGS (Differential Global Positioning System) dan Electronic Total Station (ETS).
                        </p>
                    </div>
                </div>

                <div className="">
                    <p className="text-xl font-semibold mt-10 max-w-[850px]">2. Teknik pengambilan data sekunder dari pemindaian, digitalisasi manual, vektorisasi, fotogrametri, dan COGO</p>
                    <p className="text-justify max-w-[900px] mt-5 leading-loose">
                        Scanning Data Raster, yaitu proses dimana scanner resolusi tinggi memberikan gambar raster sangat akurat dari hard copy, yang dapat rujukan geografis, dan digital untuk mendapatkan output vektor. Digitalisasi Manual: Digitalisasi dilakukan langsung di atas raster, yang menunjuk perangkat manual yang menciptakan peta vektor identik pada layar komputer, mendefinisikan simpul, titik, data line, dll.
                    </p>
                    <div className="flex max-w-[900px] gap-4 items-center justify-center">
                        <img src="/cogo.png" alt="" />
                    </div>
                    <p className="text-justify max-w-[900px] mt-5 leading-loose">
                         Raster Automatic konversi vektor, dimana dengan kemajuan teknologi, software khusus menggunakan algoritma cerdas telah dikembangkan untuk mengenali pola-pola titik, garis dan poligon fitur dan mendigitalisasi secara otomatis untuk menghasilkan data vektor GIS.
                        <br />
                        Photogrammetry, termasuk kegiatan aerial triangulasi, pembuatan mosaics, edge matching, pembuatan tile peta, planimetric feature extraction, pembuatan kontur, orthophoto, ortho rektifikasi, Pembuatan DEM, DTM and DSM, Pemrosesan data LIDAR dan pemodelan kota 3D.
                    </p>
                </div>
                
                <div className="">
                    <p className="text-xl font-semibold mt-10 max-w-[850px]">3. TerraSolid</p>
                    <div className="flex max-w-[900px] mt-10 gap-4 items-center justify-center">
                        <img src="/terrascan.png" alt="" />
                    </div>
                    <p className="text-justify max-w-[900px] mt-5 leading-loose">
                        Seluruh teknik diatas dibantu dengan software Terrasolid untuk membantu dalam memproses data point cloud dari foto udara karena Terrasolid memiliki berbagai tools untuk membantu dalam proses nya seperti Terrascan, TerraPhoto, TerraModeler, TerraMatch, dan TerraStereo yang dapat dipilih sesuai dengan kebutuhan.
                    </p>
                </div>
            </div>

                <h2 className="text-5xl font-thin text-slate-400 mb-4 tracking-widest text-center mt-20">GIS PEMERINTAHAN</h2>
                <p className="text-indigo-600 text-sm uppercase tracking-widest text-center">GIS PEMERINTAHAN</p>
                <div className="flex max-w-[900px] mx-auto flex-col items-center mt-5">
                    <img src="/pemerintahan.png" alt="" className="w-full mt-5" />
                </div>

                <div className="flex justify-center flex-col items-center mt-10">
                    <p className="text-justify max-w-[900px] leading-loose">Merupakan GIS yang mengelola berbagai tugas yang berhubungan dengan pemerintah pusat/kota/kabupaten seperti bagian perencanaan Pajak Bumi dan Bangunan, demografi kependudukan, manajemen data Sosial dan Ekonomi, Potensi daerah, aset pemerintah, dll. Sistemnya berkolaborasi antara bagian perencanaan, pelaksanaan dan monitoring/evaluasi.
                        <br />
                        Layanan Database GIS perkotaan memiliki data dengan informasi rinci, misalnya GIS tata ruang, GIS RDTR, GIS Objek Pajak . Layanan GIS perkotaan juga menyediakan daftar foto dan lokasi objek asset .
                    </p>
                </div>

                <h2 className="text-5xl font-thin text-slate-400 mb-4 tracking-widest text-center mt-20 uppercase">GIS Mapping Remote Sensing Photogrammetry</h2>
                <p className="text-indigo-600 text-sm  tracking-widest text-center uppercase">GIS Mapping Remote Sensing Photogrammetry</p>
                <div className="flex max-w-[900px] mx-auto flex-col items-center mt-5">
                    <img src="/remote.png" alt="" className="w-full mt-5" />
                </div>

                <div className="flex flex-col justify-center  items-center mt-10">
                    <p className="text-justify max-w-[900px] leading-loose"> 
                        UAV – UNMANNED AERIAL VEHICLES, kegiatan foto udara dengan mempergunakan pesawat drone yang dapat menghasilkan kualitas foto udara yang sangat jelas dengan skala 500; dibutuhkan untuk sebagai contoh untuk pemetaan batas tanah pertambangan atau inventarisasi pohon pada perkebunan kelapa sawit.
                        <br />
                        MAPPING SERVICES termasuk kegiatan konversi data skala besar dari hardcopy dan citra satelit, georeferencing, edge-matching, pembuatan topology,dan pembuatan peta.
                    </p>

                    <p className="text-justify max-w-[900px] leading-loose mt-10">
                        <a className="font-bold">Remote Sensing Services</a> 
                       <br />1.  Studi penilaian pertanian; pemetaan estimasi hasil tanaman, studi penilaian kesesuaian, studi deteksi perubahan, pengembangan model tanaman, kerusakan dan degradasi lahan.
                        <br />2.  Penilaian struktural hutan, pengelolaan hutan, klasifikasi tingkat spesies dan pemetaan keanekaragaman hayati, studi analisis mengenai dampak lingkungan.</p>
                </div>
        </div>

        </section>
        <Footer/>
    </div>
  )
}
