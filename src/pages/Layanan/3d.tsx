import CarouselBIM from "@/components/bim";
import CarouselKegiatan from "@/components/carousel-kegiatan";
import Footer from "@/components/footer";
import { NavigationMenuDemo } from "@/components/navbar";
import CarouselPengolahan from "@/components/pengolahan";
import SpotlightCard from "@/components/react-bits/spotlight-card";

export default function Lidar() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative h-[520px] w-full bg-cover bg-center bg-no-repeat bg-[url('/hero-mobile2.png')] 
                        sm:bg-[url('/lidar.png')]"
      >
        <NavigationMenuDemo />
        <div className="flex justify-center items-center h-full" />
      </section>

      {/* CONTENT */}
      <section className="min-h-screen bg-gradient-to-r from-white to-blue-50 py-24 px-6 md:px-16 text-slate-800">
        <div className="max-w-5xl mx-auto space-y-16">

          {/* ========================= */}
          {/* 3D BIM PROCESSING */}
          {/* ========================= */}
          <div>

            <div className="mx-4 my-8 md:mx-0">
                <CarouselKegiatan />
            </div>

            <SpotlightCard>
              <p className="leading-relaxed text-slate-700 text-justify">
                Setelah proses pemindaian menggunakan teknologi LiDAR menghasilkan 
                data point cloud yang detail, tahap berikutnya adalah pengolahan data 
                menjadi model tiga dimensi yang akurat. Kami mengolah data tersebut 
                menggunakan <strong>Autodesk Revit</strong> untuk membangun model 
                <strong> Building Information Modeling (BIM)</strong> yang presisi dan 
                kaya informasi.
                <br /><br />
                Pada tahap ini, point cloud dikonversi menjadi elemen bangunan yang 
                lengkap seperti struktur, dinding, lantai, atap, serta komponen teknis 
                lainnya. Model BIM yang dihasilkan tidak hanya merepresentasikan bentuk 
                visual, tetapi juga memuat data teknis yang dapat digunakan untuk 
                dokumentasi aset, perencanaan renovasi, analisis struktur, serta 
                pengelolaan fasilitas secara digital.
                <br /><br />
                Dengan pendekatan ini, pemilik aset memperoleh representasi digital 
                yang akurat dari kondisi eksisting di lapangan, sehingga meminimalkan 
                kesalahan perencanaan dan meningkatkan efisiensi operasional.
              </p>
            </SpotlightCard>
          </div>

          {/* Carousel Pengolahan */}
          <div className="mx-4 md:mx-0">
            <CarouselPengolahan />
          </div>

          {/* ========================= */}
          {/* GIS & WEBSITE INTEGRATION */}
          {/* ========================= */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Integrasi GIS & Visualisasi Berbasis Website
            </h2>

            <SpotlightCard>
              <p className="leading-relaxed text-slate-700 text-justify">
                Model BIM yang telah selesai kemudian diintegrasikan dengan sistem 
                <strong>Geographic Information System (GIS)</strong> untuk menempatkan 
                setiap aset dalam konteks geografis yang akurat. Integrasi ini memungkinkan 
                visualisasi spasial yang memberikan pemahaman menyeluruh mengenai lokasi, 
                distribusi, serta hubungan antar aset dalam suatu kawasan.
                <br /><br />
                Kami mengembangkan platform berbasis web yang menampilkan 
                <strong> 3D Maps</strong>, di mana model BIM dapat divisualisasikan 
                langsung di atas peta digital. Pengguna dapat menelusuri aset secara 
                interaktif, melihat informasi teknis, serta memahami kondisi lapangan 
                tanpa harus berada di lokasi fisik.
                <br /><br />
                Solusi ini mendukung transformasi digital dalam pengelolaan infrastruktur, 
                meningkatkan transparansi data, mempercepat proses monitoring, serta 
                membantu pengambilan keputusan berbasis lokasi secara lebih efektif.
              </p>
            </SpotlightCard>
          </div>

          {/* Carousel BIM */}
          <div className="mx-4 md:mx-0">
            <CarouselBIM />
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}