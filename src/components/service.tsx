import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <div className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* HEADER */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <h3 className="text-lg md:text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition">
          {title}
        </h3>

        <ChevronDown
          size={22}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-600" : "text-slate-500"
          }`}
        />
      </button>

      {/* CONTENT */}
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 md:px-6 pb-6 pt-2">
            
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              
              {/* IMAGE */}
              <img
                src={imageSrc}
                alt={title}
                className="w-full md:w-[260px] h-[180px] object-cover rounded-xl shadow-sm"
              />

              {/* TEXT */}
              <div className="flex flex-col gap-4">
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {description}
                </p>

                <a
                  href={detailLink}
                  className="inline-block w-fit px-5 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                >
                  Lihat Detail
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};