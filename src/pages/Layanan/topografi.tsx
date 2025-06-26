import Footer from "@/components/footer";
import { NavigationMenuDemo } from "@/components/navbar";
import SpotlightCard from "@/components/react-bits/spotlight-card";

export default function Topografi() {
  return (
    <div>
      <section className="relative h-[520px] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/topografi.png')" }}>
        <NavigationMenuDemo/>
        <div className="flex justify-center items-center h-full">
            <p className="text-white text-4xl font-semibold text-center">Layanan Pemetaan Topografi dan Utilitas</p>
        </div>
      </section>
        <div className="relative z-10 mt-[-80px] px-4">
            <div className="flex flex-wrap justify-center gap-6">
                {[
                {
                    title: "Layanan Pemetaan Topografi",
                    desc: " Layanan Pemetaan Topografi untuk membuat peta topografi yang komprehensif dan peta topografi 3D untuk parameter proyeksi yang ditentukan, kontur dengan ketinggian& rincian planimetris. ",
                },
                {
                    title: "Layanan Pemetaan Utilitas",
                    desc: "Layanan pemetaan utilitas untuk jalur pasokan utilitas seperti listrik air, jalur data, saluran telepon, saluran listrik, listrik gas, dan saluran pembuangan.  ",
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
            <p className="text-justify mb-10">Sebagai bagian dari komitmen kami dalam menyediakan solusi geospasial yang menyeluruh, PT. Dunia Maya Comunica menghadirkan layanan pemetaan profesional untuk mendukung berbagai kebutuhan proyek pembangunan dan infrastruktur. Dengan teknologi dan tim ahli di bidangnya, kami siap membantu klien dalam memperoleh data spasial yang akurat dan terstruktur.</p>
            <h2 className="text-5xl font-thin text-slate-400 mb-4 tracking-widest text-center uppercase">Layanan Pemetaan Topografi</h2>
            <p className="text-indigo-600 text-sm uppercase tracking-widest text-center">Layanan Pemetaan Topografi</p>
                <div className="flex max-w-[900px] mx-auto flex-col items-center mt-5">
                    <img src="/topografi2.png" alt="" className="w-full mt-5" />
                </div>
            <div className="flex justify-center flex-col items-center my-5">
                <p className="text-justify max-w-[900px] leading-loose mb-10">
                    Kami menawarkan layanan Pemetaan Topografi untuk membuat peta topografi yang komprehensif dan peta topografi 3D untuk parameter proyeksi yang ditentukan, kontur dengan ketinggian& rincian planimetris. Layanan pemetaan topografi membantu dalam perencanaan. Perusahaan ini telah bekerja pada beragam proyek pemetaan topografi
                </p>

                <p className="text-justify max-w-[900px] leading-loose">
                    Konversi raster ke Vector untuk layanan pemetaan topografi dilakukan pada perangkat lunak berbasis CAD seperti Global Mapper dan hasilnya AutoCAD. layanan pemetaan topografi memungkinkan untuk fitur yang berbeda dari peta topografi seperti garis kontur, garis batas, transportasi, daerah air, vegetasi, tempat tinggal dan kawasan hutan yang akan diambil atau didigitalkan di layer yang berbeda untuk menghasilkan peta topografi dalam format vektor.
                </p>
            </div>

                <h2 className="text-5xl font-thin text-slate-400 mb-4 tracking-widest text-center mt-20 uppercase">Layanan Pemetaan Utilitas</h2>
                <p className="text-indigo-600 text-sm uppercase tracking-widest text-center">Layanan Pemetaan Utilitas</p>
                <div className="flex max-w-[900px] mx-auto flex-col items-center mt-5">
                    <img src="/utilitas.png" alt="" className="w-full mt-5" />
                </div>

                <div className="flex justify-center flex-col items-center mt-10 px-4">
                <p className="text-left sm:text-justify max-w-4xl leading-loose">
                    Kami Perusahaan Jasa menawarkan layanan pemetaan utilitas untuk jalur pasokan utilitas seperti listrik air, jalur data, saluran telepon, saluran listrik, listrik gas, dan saluran pembuangan. Kami memberikan layanan yang dapat membantu dalam merancang dengan efisien, pengelolaan sumber daya, distribusi manajemen, perencanaan database dan instalasi manajemen, manajemen saluran listrik dan monitorings.
                </p>

                <div className="overflow-x-auto mt-5 w-full">
                    <div className="min-w-[600px] max-w-5xl mx-auto">
                    <table className="min-w-full table-auto border border-gray-300 shadow-md">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 sm:px-6 py-3 text-left font-semibold text-gray-700 border-b">Electric</th>
                            <th className="px-4 sm:px-6 py-3 text-left font-semibold text-gray-700 border-b">Telecom</th>
                        </tr>
                        </thead>
                        <tbody>
                        {[
                            ["Network Mapping", "Fiber Optik FTTH"],
                            ["Network Re-alignment", "Network Mapping"],
                            ["AM/FM Mapping", "Network Planning"],
                            ["Consumer Indexing", "RF Digital Maps Creation"],
                            ["Network Topology", "RF Terrain Map Creation"],
                            ["Spatial Analysis", "RF 3D Maps Creation"],
                            ["Energy Auditing", ""],
                            ["Network Analysis", ""],
                        ].map(([electric, telecom], index) => (
                            <tr key={index} className="border-b">
                            <td className="px-4 sm:px-6 py-3">{electric}</td>
                            <td className="px-4 sm:px-6 py-3">{telecom}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
                </div>
                </div>

        </div>

        </section>
        <Footer/>
    </div>
  )
}
