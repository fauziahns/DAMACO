import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface LayananCardProps {
  title: string;
  description: string;
  imageSrc: string;
  detailLink: string;
}

export const LayananCard = ({
  title,
  description,
  imageSrc,
  detailLink,
}: LayananCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5 border border-slate-400 flex gap-10 items-start justify-between">
      {/* Kiri: Judul + konten */}
      <div className="flex flex-col md:flex-row gap-5">
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <p className="text-lg font-semibold text-black min-w-[300px]">{title}</p>
        </div>

        {/* Konten collapse */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          {isOpen && (
            <div className="flex flex-col gap-4">
              <p className="max-w-[600px] text-justify text-sm text-slate-600">
                {description}
              </p>
              <img src={imageSrc} alt={title} className="max-w-[260px] rounded-lg" />
            </div>
          )}
        </div>
      </div>

      {/* Kanan: tombol & icon */}
      <div className="flex items-center gap-5 cursor-pointer">
        {isOpen && (
          <a
            href={detailLink}
            className="p-2 px-4 text-sm rounded-xl text-white bg-blue-500"
          >
            Lihat Detail
          </a>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-600 cursor-pointer"
        >
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
    </div>
  );
};





