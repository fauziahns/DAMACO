import { NavigationMenuDemo } from "@/components/navbar";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Kontak() {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current!,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Pesan berhasil dikirim!");
        },
        (error) => {
          alert("Gagal mengirim pesan.");
          console.error(error);
        }
      );
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <NavigationMenuDemo />

      <section className="py-16 px-5 sm:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE */}
          <div>
            <p className="text-blue-600 font-semibold mb-2">Kontak Kami</p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Mari Diskusikan <br /> Kebutuhan Proyek Anda
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Jangan ragu menghubungi kami untuk konsultasi, pertanyaan, atau
              peluang kerja sama. Tim kami siap membantu Anda dengan solusi
              teknologi terbaik.
            </p>

            <div className="space-y-6 text-gray-700">
            <div>
                <p className="font-semibold text-gray-900">Studio</p>
                <p>Jl. Kiara Sari Utama No. 22C, Bandung</p>
            </div>

            <div>
                <p className="font-semibold text-gray-900">Kantor</p>
                <p>Jl. Cibolerang No. 15, Bandung</p>
            </div>

            <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p>duniamaco@yahoo.com</p>
            </div>

            <div>
                <p className="font-semibold text-gray-900">Telepon</p>
                <p>Administrasi: +62 822-1691-0528 (Elita)</p>
                <p>Drone Spray: +62 813-4936-6100 (Komarudin)</p>
            </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 sm:p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Nama
                </label>
                <input
                  name="user_name"
                  type="text"
                  placeholder="Nama lengkap"
                  required
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  name="user_email"
                  type="email"
                  placeholder="Alamat email"
                  required
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Pesan
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tulis pesan Anda..."
                  required
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}