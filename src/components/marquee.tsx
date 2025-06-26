

"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "Badan-Informasi-Geospasial.png", "kcic.png", "BNPP.png", 
    "DPKP3.png", "DSN.png", "Kabupaten-Subang.png", 
    "Kementerian-Perhubungan-RI.png", "NSI.png","PTPN-4.png", 
    "PTPN-7.png", "Sinarmas.png", "KAI.png", "HP.png", 
];

export function ImageCarousel() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 6,
      spacing: 8,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 8 },
      },
    },
  });

  return (
    <div className="w-full flex flex-col items-center">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider py-4 w-full">
        {images.map((img, idx) => (
          <div key={idx} className="keen-slider__slide flex justify-center">
            <img
              src={img}
              alt={`carousel-${idx}`}
              className="h-20 w-auto object-contain rounded-md shadow"
            />
          </div>
        ))}
      </div>

      {/* Icon buttons below */}
      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={() => slider.current?.prev()}
          className="bg-slate-300 hover:scale-95 cursor-pointer text-slate-600 p-2 rounded-full shadow"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => slider.current?.next()}
          className="bg-slate-300 hover:scale-95 cursor-pointer text-slate-600 p-2 rounded-full shadow"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}


