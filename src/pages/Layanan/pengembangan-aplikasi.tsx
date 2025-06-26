import Footer from "@/components/footer";
import { MarqueeAvatarRow } from "@/components/marquee2";
import { NavigationMenuDemo } from "@/components/navbar";
import { TimelineDemo } from "@/components/timeline-demo";

export default function PengembanganAplikasi() {
  return (
    <div>
      <section className="relative h-[520px] w-full bg-gradient-to-r from-[#f3fffe] to-white">
        <div className="bg-blue-950">
            <NavigationMenuDemo className="text-white" textColor="text-black"/>
        </div>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-around pt-10 px-4 gap-8">
            {/* Konten Teks */}
                <div className="text-center lg:text-left mb-10">
                    <p className="text-3xl sm:text-4xl font-light leading-relaxed">
                       <a className="font-bold">Kolaborasi Digital </a> yang Nyata. <br />
                        Aplikasi Web & Mobile.
                    </p>
                    <p className="max-w-md mt-3 leading-relaxed text-slate-700">
                    Dari ide hingga implementasi, kami wujudkan solusi digital terbaik untuk Anda.
                    </p>
                    <button className="bg-indigo-600 cursor-pointer text-white px-6 py-3 rounded-md mt-5 hover:bg-indigo-700 transition-colors">
                    Hubungi Kami
                    </button>
                </div>

                {/* Gambar Hero */}
                <img
                    src="/hero6.png"
                    alt="Hero"
                    className="w-full max-w-sm sm:max-w-md lg:max-w-[400px]"
                />
            </div>

      </section>
      <div className="mt-80 lg:mt-0">
        <MarqueeAvatarRow />
      </div>

        <section className="min-h-screen bg-white py-24 px-6 md:px-16  text-slate-800 relative overflow-hidden">
        {/* Vision */}
        <div className="mb-20">
            <div className=" flex justify-center">
                <p className="max-w-[900px] text-justify mb-10">
                    Teknologi Geographic Information System (GIS) kini semakin terintegrasi dengan pengembangan aplikasi berbasis web dan mobile. Kami menghadirkan solusi inovatif untuk visualisasi data spasial, pemetaan interaktif, serta pengelolaan informasi berbasis lokasi yang dapat diakses kapan saja dan di mana saja melalui perangkat digital Anda.
                </p>
            </div>
            <h2 className="text-5xl font-thin text-slate-400 mb-4 tracking-widest text-center uppercase">GIS Web Application Development & Mobile GIS</h2>
            <p className="text-indigo-600 text-sm uppercase tracking-widest text-center">GIS Web Application Development & Mobile GIS</p>
                <div className="flex max-w-[900px] mx-auto flex-col items-center mt-5">
                    <img src="/app2.png" alt="" className="w-full mt-5" />
                </div>
            <div className="flex justify-center flex-col items-center my-5">
                <p className="text-justify max-w-[900px] leading-loose mb-10">
                    Kami menyediakan aplikasi end-to-end sesuai keinginan yang dikembangkan berdasarkan kebutuhan dan persyaratan terlepas dari kompleksitasnya. Alur kerja kami terdiri dari modul seperti analisis kebutuhan, desain, coding, dan deployment. Berbagai layanan kami meliputi Peta sesuai keinginan, Tool untuk pengembangan sesuai keinginan, Integrasi Aplikasi Migrasi, Web GIS, dan Mobile aplikasi GIS.
                </p>

                <p className="text-justify max-w-[900px] leading-loose">
                    Kami memiliki pengalaman dibidang pengembangan aplikasi gis desktop, web dan mobile. Tim kami memiliki pengalaman mengembangkan software menggunakan .Net, PHP, Java, javascript, Arcobject, Arcgis for javascript, dll. </p>
            </div>
        </div>

        <div className="">
            <TimelineDemo/>
        </div>

        </section>
        <Footer/>
    </div>
  )
}
