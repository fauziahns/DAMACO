import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const allProjects = [
  { no: 1, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Mixer Pupuk", klien: "PT. Perkebunan Nusantara", tahun: "2022" },
  { no: 2, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Mixer Pupuk Beserta Shelternya", klien: "PT. Perkebunan Nusantara", tahun: "2022" },
  { no: 3, tempat: "Kota Bandar Lampung", proyek: "Kebutuhan Spare Part Pompa Perkins T1 104-44", klien: "PT. Perkebunan Nusantara", tahun: "2021" },
  { no: 4, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Part Parbrik LG", klien: "PT. Perkebunan Nusantara", tahun: "2021" },
  { no: 5, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Kebutuhan Spare Part JCB Becho Loader", klien: "PT. Perkebunan Nusantara", tahun: "2021" },
  { no: 6, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Spare Part Valve dan Instalasi 16 Item", klien: "PT. Perkebunan Nusantara", tahun: "2021" },
  { no: 7, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Ban Motor Greader Kebutuhan Unit Ketahun", klien: "PT. Perkebunan Nusantara", tahun: "2021" },
  { no: 8, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Seal Packing dan Vibro Screen", klien: "PT. Perkebunan Nusantara", tahun: "2021" },
  { no: 9, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Ripple Mill Kapasitas 8 Ton", klien: "PT. Perkebunan Nusantara", tahun: "2 Juni 2021" },
{ no: 10, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Bahan Insektisida SM II Tahun 2021", klien: "PT. Perkebunan Nusantara", tahun: "25 Agustus 2021" },
{ no: 11, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Kebutuhan Spare Part Pompa Air Perkins T1006, Ocmis VR3 dan Ebara", klien: "PT. Perkebunan Nusantara", tahun: "10 September 2021" },
{ no: 12, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Pestisida dan Decomposer SM II tahun 2021", klien: "PT. Perkebunan Nusantara", tahun: "15 September 2021" },
{ no: 13, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Bearing, Van Belt dan Kelengkapannya", klien: "PT. Perkebunan Nusantara", tahun: "2 Juni 2021" },
{ no: 14, tempat: "Kota Bandar Lampung", proyek: "Pengadaan Elbow dan Bahan Besi Lainnya", klien: "PT. Perkebunan Nusantara", tahun: "16 Juni 2021" },
{ no: 15, tempat: "Bandung Barat", proyek: "Belanja Jasa Konsultansi Berorientasi Layanan-Jasa Khusus (Aturan Harga Pasar)", klien: "Pemerintah Kabupaten Bandung Barat Badan Pendapatan Daerah", tahun: "14 Desember 2021" },
{ no: 16, tempat: "Jakarta Barat", proyek: "Pembuatan Peta ZNT Skala 1:2500", klien: "Kementrian Agraria dan Tata Ruang BPN", tahun: "14 Desember 2021" },
{ no: 17, tempat: "Bogor", proyek: "Pembuatan Peta Nilai Tanah Skala 1:1000 Di Kantor Pertanahan Bogor", klien: "Kementrian Agraria dan Tata Ruang BPN", tahun: "28 September 2021" },
{ no: 18, tempat: "Bandung", proyek: "Pengadaan Pemetaan dan Pengembangan GIS Aset Prasarana Tahap 2", klien: "PT. Kereta Api Indonesia", tahun: "21 Mei 2021" },
{ no: 19, tempat: "Bandung", proyek: "Pengadaan Pemetaan dan Pengembangan GIS Aset Prasarana Tahap 3", klien: "PT. Kereta Api Indonesia", tahun: "16 September 2021" },
{ no: 20, tempat: "Kab. Luwu Timur", proyek: "Pemutakhiran dan Pembentukan Data Spasial PBB Perdesaan dan Perkotaan Kab. Luwu Timur", klien: "Pemerintah Kabupaten Luwu Timur Badan Pengelolaan Keuangan Daerah", tahun: "30 Desember 2021" },
{ no: 21, tempat: "Bandung", proyek: "Kajian Pemutakhiran ZNT PBB", klien: "Badan Pendapatan Daerah", tahun: "9 Desember 2021" },
{ no: 22, tempat: "Kab. Jayawijaya", proyek: "Jasa Konsultansi Pembuatan ZNT Distrik Wamena, Hubikiak, Wasaput, Wouma dan Napua", klien: "Badan Pengelolaan Keuangan dan Aset Daerah Kabupaten Jayawijaya", tahun: "7 Juli 2021" },
{ no: 23, tempat: "Jakarta Pusat", proyek: "Pengembangan Sistem Informasi Pemberdayaan Tanah Masyarakat", klien: "Kementrian Agraria dan Tata Ruang BPN", tahun: "17 Desember 2021" },
{ no: 24, tempat: "Jakarta Selatan", proyek: "Pembangunan Basis Data dan Sistem Informasi Data Dasar", klien: "Kementrian Agraria dan Tata Ruang BPN", tahun: "15 Desember 2021" },
{ no: 25, tempat: "Kota Serang", proyek: "Pendataan baru JTR dan Pelanggan Penyulang Kepuren", klien: "PT PLN (Persero) UID Banten UP3 Banten Utara", tahun: "10 Agustus 2021" },
{ no: 26, tempat: "Kota Serang", proyek: "Jasa Pendataan Baru JTR Dan Pelanggan Penyulang Sempu", klien: "PT PLN (Persero) UID Banten UP3 Banten Utara", tahun: "7 Oktober 2021" },
{ no: 27, tempat: "Kota Bandung", proyek: "Database Rumah Bersanitasi Kota Bandung 2", klien: "Dinas perumahan & kawasan Permukiman Pertanahan & Pertamanan (Pemkot Bandung)", tahun: "3 Mei 2021" },
{ no: 28, tempat: "Kab. Sinjai", proyek: "Verifikasi Data Dan Pembentukan Data Baru PBB – P2", klien: "Bapeda Kab.Sinjai", tahun: "30 Mei 2020" },
{ no: 29, tempat: "Kota Bandung", proyek: "Pemetaan dan Pengembangan GIS Aset Prasarana", klien: "PT. Kereta Api Indonesia", tahun: "29 Desember 2020" },
{ no: 30, tempat: "Jakarta Pusat", proyek: "Identifikasi Pilar Batas Negara Wilayah Darat", klien: "Badan Nasional Pengelola Perbatasan RI", tahun: "21 Desember 2020" },
{ no: 31, tempat: "Toraja Utara", proyek: "Pendataan PBB", klien: "PEMKAB Toraja Utara", tahun: "22 Desember 2019" },
{ no: 32, tempat: "Jakarta", proyek: "Sistem Manajemen Proyek PHLN", klien: "Kementrian Pekerjaan Umum & Perumahan Rakyat", tahun: "31 Desember 2019" },
{ no: 33, tempat: "Bandung", proyek: "Jasa Konsultansi Teknologi Informasi Pembangunan Aplikasi Command Center Fungsi Operasional", klien: "Diskominfo Prov. Jabar", tahun: "29 Desember 2019" },
{ no: 34, tempat: "Cilegon", proyek: "Jasa Konsultasi Pendataan Dan Penilaian Massal Objek PBB - P2", klien: "PEMKOT Cilegon - BPKAD", tahun: "9 Desember 2019" },
{ no: 35, tempat: "Bandung", proyek: "Pengadaan Jasa Konsultasi Penyusunan Database Rumah Bersanitasi", klien: "Dinas Perumahan Dan Kawasan Permukiman Pertahanan Dan Pertamanan", tahun: "18 Desember 2019" },
{ no: 36, tempat: "Bogor", proyek: "Pembuatan Aplikasi Pengelolaan Stasiun Pasang Surut", klien: "Badan Informasi Geospasial (BIG)", tahun: "29 Desember 2019" },
{ no: 37, tempat: "DKI Jakarta", proyek: "Perumusan Pedoman Survei Foto Udara Untuk Perencanaan Trase Jalur Kereta Api Dan Pelatihan Pilot Drone/Unmanned Aerial Vehicle (PKTE.D.05-18)", klien: "KEMENTRIAN PERHUBUNGAN RI", tahun: "21 Oktober 2018" },
{ no: 38, tempat: "Provinsi Jambi", proyek: "Pekerjaan Jasa Konsultasi Pembuatan Peta LP2B Wilayah Barat", klien: "Dinas Tanaman Pangan, Holtikultura dan Peternakan", tahun: "22 November 2018" },
{ no: 39, tempat: "Surabaya", proyek: "Pengembangan Sistem Informasi Monitoring Terpadu Waduk Lumpur Sidoarjo", klien: "Satker Pusat Pengendalian Lumpur Sidoarjo", tahun: "6 Oktober 2018" },
{ no: 40, tempat: "Kabupaten Banyuwangi", proyek: "Pengukuran, Pemetaan dan Informasi Bidang Tanah Sistematis Lengkap Paket I", klien: "Kementerian Agraria dan Tata Ruang/ Badan Pertanahan Nasional", tahun: "16 September 2018" },
{ no: 41, tempat: "Kabupaten Banyuwangi", proyek: "Pengukuran, Pemetaan dan Informasi Bidang Tanah Sistematis Lengkap Paket II", klien: "Kementerian Agraria dan Tata Ruang/ Badan Pertanahan Nasional", tahun: "16 September 2018" },
{ no: 42, tempat: "Kabupaten Minahasa Selatan", proyek: "Pengukuran, Pemetaan dan Informasi Bidang Tanah Sistematis Lengkap", klien: "Kementerian Agraria dan Tata Ruang/ Badan Pertanahan Nasional", tahun: "29 Agustus 2018" },
{ no: 43, tempat: "Kota Tangerang", proyek: "Program Peningkatan dan Pengembangan Pengelolaan Keuangan Daerah Pendataan PBB P2 Kecamatan Jatiuwung dan Cibodas", klien: "Badan Pendapatan Daerah Kota Tangerang", tahun: "7 Juli 2018" },
{ no: 44, tempat: "Kota Tangerang", proyek: "Analisa Zona Nilai Tanah/ZNT (Penilaian Objek Pajak PBB P2)", klien: "Badan Pendapatan Daerah Kota Tangerang", tahun: "13 Juni 2018" },
{ no: 45, tempat: "Jakarta", proyek: "Pengelolaan Data Tanah Obyek Reforma Agraria Tahun Anggaran 2018", klien: "Kementrian Agraria & Tata Ruang BPN", tahun: "6 Desember 2018" },
{ no: 46, tempat: "Jakarta", proyek: "Pembuatan Service API (Aplication Programming Interface)", klien: "Kementrian Agraria & Tata Ruang BPN", tahun: "30 Desember 2018" },
{ no: 47, tempat: "Batam", proyek: "Pengadaan LMS Tahap 2 (Sistim Informasi Geografis Lahan Berbasis WEB GIS) Kantor pengelolaan lahan thn 2018", klien: "Badan Pengusahaan kawasan perdagangan bebas dan pelabuhan bebas", tahun: "17 Desember 2018" },
{ no: 48, tempat: "Kab. Pasaman Barat", proyek: "Pemutakhiran Data Pajak Bumi dan Bangunan Kabupaten Pasaman Barat", klien: "Badan Aset dan Pendapatan Daerah Kabupaten Pasaman Barat", tahun: "27 Desember 2017" },
{ no: 49, tempat: "Kota Pekanbaru", proyek: "Pengukuran, Pemetaan dan Informasi Bidang Tanah Paket III", klien: "Kementerian Agraria dan Tata Ruang/ Badan Pertanahan Nasional", tahun: "18 Desember 2017" },
{ no: 50, tempat: "Kota Pekanbaru", proyek: "Pengukuran, Pemetaan dan Informasi Bidang Tanah Paket II", klien: "Kementerian Agraria dan Tata Ruang/ Badan Pertanahan Nasional", tahun: "18 Desember 2017" },
{ no: 51, tempat: "Kabupaten Ciamis", proyek: "Pengukuran, Pemetaan dan Informasi Bidang Tanah Paket I", klien: "Kementerian Agraria dan Tata Ruang/ Badan Pertanahan Nasional", tahun: "16 November 2017" },
{ no: 52, tempat: "Kota Singkawang", proyek: "Pengukuran, Pemetaan dan Informasi Bidang Tanah Kantor Pertanahan Kota Singkawang", klien: "Kementerian Agraria dan Tata Ruang/ Badan Pertanahan Nasional", tahun: "13 November 2017" },
{ no: 53, tempat: "Jakarta", proyek: "Penyusunan Album Peta Sebaran Lokasi", klien: "BPN RI", tahun: "11 November 2016" },
{ no: 54, tempat: "SDA Citanduy", proyek: "Penyusunan Peta Rawan Banjir Dan Kekeringan", klien: "Direktorat Jenderal Sumber Daya Air", tahun: "15 Oktober 2017" },
{ no: 55, tempat: "Jakarta", proyek: "Upadting Basis Data Direktorat WP3WT", klien: "BPN RI", tahun: "25 Oktober 2016" },
{ no: 56, tempat: "Kab. Tasikmalaya", proyek: "Pendataan Objek dan Subjek PBB Kab. Tasik", klien: "Dispenda Kab. Tasik", tahun: "04 Oktober 2016" },
{ no: 57, tempat: "Kota Bandung", proyek: "Perencanaan Pemutakhiran Basis Data PBB Wilayah Bandung Timur", klien: "Disyanjak Kota Bandung", tahun: "29 November 2016" },
{ no: 58, tempat: "Kab. Bandung Barat", proyek: "Inventarisasi Data Rumah Belum Berlistrik di Kab. Bandung Barat", klien: "Dinas Energi dan Sumber Daya Mineral", tahun: "29 September 2016" },
{ no: 59, tempat: "Kota Sumedang", proyek: "Inventarisasi Data Rumah Belum Berlistrik di Kab. Sumedang", klien: "Dinas Energi dan Sumber Daya Mineral", tahun: "29 September 2016" },
{ no: 60, tempat: "Kota Bandung", proyek: "Inventarisasi Data Rumah Belum Berlistrik di Kota Bandung dan Kota Cimahi", klien: "Dinas Energi dan Sumber Daya Mineral", tahun: "29 September 2016" },
{ no: 61, tempat: "Kab. Tanggerang", proyek: "Penataan Ruang dan Batas Wilayah Kecamatan (Pengukuran Pilar Batas Kecamatan)", klien: "Setda Tanggerang", tahun: "6 Desember 2016" },
{ no: 62, tempat: "Cirata, Jawa Barat", proyek: "Jasa Survey Bathimetri Pelabuhan khusus PLT", klien: "PT. PLN Pembangkit Jawa Bali", tahun: "2016" },
{ no: 63, tempat: "Jakarta", proyek: "Pengembangan Aplikasi KKP", klien: "BPN RI", tahun: "31 Desember 2016" },
{ no: 64, tempat: "Cibinong, Bogor", proyek: "Basis data Geospasial IG Tematik", klien: "Badan Informasi Geospatial", tahun: "23 Desember 2015" },
{ no: 65, tempat: "Kab. Tasik", proyek: "Pemeliharaan Data Objek dan Subjek Pajak Bumi dan Bangunan Kab. Ciamis", klien: "Dinas Pendapatan Daerah Kab. Ciamis", tahun: "31 Desember 2015" },
{ no: 66, tempat: "Kab. Batang Hari", proyek: "Pendataan Subjek dan Objek PBB Sektor Pedesaan dan Perkotaan", klien: "Dinas Pendapatan Daerah Kab. Batang Hari", tahun: "24 Agustus 2015" },
{ no: 67, tempat: "Kab. Garut", proyek: "Pekerjaan Pengadaan Jasa Konsultansi Pendataan Objek dan Subjek PBB di Kecamatan Mekarmukti", klien: "Dinas Pendapatan Daerah Kab. Garut", tahun: "17 Desember 2015" },


];

export function TableProject() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("all");
  const itemsPerPage = 10;

  const filteredProjects = selectedYear === "all"
    ? allProjects
    : allProjects.filter((p) => p.tahun === selectedYear);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const years = [...new Set(allProjects.map((p) => p.tahun))];

  return (
    <div className="overflow-x-auto px-4 sm:px-8 py-8 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Filter berdasarkan Tahun</h2>
        <Select value={selectedYear} onValueChange={(val) => { setSelectedYear(val); setCurrentPage(1); }}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Pilih Tahun" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="all">Semua Tahun</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year}>{year}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Table className="min-w-[700px] border border-gray-200 shadow-md rounded-md text-md">
        <TableHeader className="bg-blue-50 text-slate-700 ">
          <TableRow>
            <TableHead className="w-12">No</TableHead>
            <TableHead>Tempat</TableHead>
            <TableHead className="max-w-[200px]">Proyek</TableHead>
            <TableHead>Klien</TableHead>
            <TableHead className="whitespace-nowrap">Tahun</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedProjects.map((item) => (
            <TableRow key={item.no} className="hover:bg-gray-50 ">
              <TableCell className="font-semibold">{item.no}</TableCell>
              <TableCell className="max-w-[200px]">{item.tempat}</TableCell>
              <TableCell>{item.proyek}</TableCell>
              <TableCell>{item.klien}</TableCell>
              <TableCell>{item.tahun}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5} className="text-right text-sm text-muted-foreground ">
              Total Proyek: {filteredProjects.length}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        <Button variant="outline" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Prev
        </Button>
        <span className="px-3 py-2 text-sm font-medium">
          Halaman {currentPage} dari {totalPages}
        </span>
        <Button variant="outline" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
}
