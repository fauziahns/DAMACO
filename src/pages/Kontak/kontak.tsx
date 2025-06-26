import { NavigationMenuDemo } from "@/components/navbar";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Kontak() {
      const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current!, 'YOUR_PUBLIC_KEY')
      .then(() => {
        alert("Pesan berhasil dikirim!");
      }, (error) => {
        alert("Gagal mengirim pesan.");
        console.error(error);
      });
  };
  return (
    <div className="bg-slate-800 h-screen ">
        <NavigationMenuDemo/>
        <section className=" text-white py-20 px-6 md:px-16 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Informasi Kontak */}
            <div>
            <h2 className="text-4xl font-bold text-white mb-4">Hubungi Kami</h2>
            <p className="text-base text-white mb-6 leading-relaxed">
                Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan, ingin berkonsultasi,
                atau tertarik bekerja sama. Kami siap membantu Anda dengan solusi berbasis teknologi terbaik.
            </p>

            <div className="space-y-4">
                <div>
                <p className="font-semibold">Alamat</p>
                <p className="text-white">Jl. Kiara Sari Utama No. 22C, Bandung</p>
                </div>

                <div>
                <p className="font-semibold">Email</p>
                <p className="text-white">duniamaco@yahoo.com</p>
                </div>

                <div>
                <p className="font-semibold">Telepon</p>
                <p className="text-white">Administrasi : +62 822-1691-0528 (Elita)</p>
                <p className="text-white">Drone Spray : +62 813-4936-6100 (Komarudin)</p>
                </div>
            </div>
            </div>

            {/* Formulir Kontak */}
            <div>
                <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-md">
                <div>
                    <label className="block mb-1 font-medium text-slate-700">Nama</label>
                    <input name="user_name" type="text" className="w-full ..." placeholder="Nama lengkap" />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-slate-700">Email</label>
                    <input name="user_email" type="email" className="w-full ..." placeholder="Alamat email" />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-slate-700">Pesan</label>
                    <textarea name="message" className="w-full ..." placeholder="Tulis pesan Anda..." />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                    Kirim Pesan
                </button>
                </form>
            </div>
        </div>
        </section>
    </div>
  )
}
