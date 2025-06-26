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
];

export function TableProject() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("all");
  const itemsPerPage = 5;

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
            <TableHead>Proyek</TableHead>
            <TableHead>Klien</TableHead>
            <TableHead className="whitespace-nowrap">Tahun</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedProjects.map((item) => (
            <TableRow key={item.no} className="hover:bg-gray-50 ">
              <TableCell className="font-semibold">{item.no}</TableCell>
              <TableCell>{item.tempat}</TableCell>
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
