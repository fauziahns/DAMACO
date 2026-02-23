import { useState } from "react";

const images = [
  "/DJI-Agras-T25.jpg",
  "/matrice.jpg",
  "/agrast40.jpg",
  "/mavic2.jpg",
  "/agrast50.jpg",
  "/mavic3.jpeg",
  "/multi.png",
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      
      {/* Main Image */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[420px] overflow-hidden rounded-2xl shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`img-${currentIndex}`}
          className="w-full h-full object-cover transition duration-500"
        />

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-black transition"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-black transition"
        >
          ❯
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-2 justify-start md:justify-center scrollbar-hide">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`thumb-${i}`}
            onClick={() => setCurrentIndex(i)}
            className={`flex-shrink-0 w-16 h-12 sm:w-20 sm:h-14 object-cover rounded-lg cursor-pointer border-2 transition ${
              i === currentIndex
                ? "border-indigo-500 scale-105"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}