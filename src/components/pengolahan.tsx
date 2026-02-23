import { useState } from "react";

const images = [
  "/p1.png",
  "/p2.png",
  "/p3.png",
  "/p4.png",
  "/p5.png",
];

export default function CarouselPengolahan() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      
      {/* Main Image */}
      <div className="relative w-full overflow-hidden rounded-xl">
        <div className="aspect-[16/9] sm:aspect-[16/10] md:aspect-[16/9]">
          <img
            src={images[currentIndex]}
            alt={`img-${currentIndex}`}
            className="w-full h-full object-cover transition-all duration-300"
          />
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-black flex items-center justify-center"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 bg-black/50 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-black flex items-center justify-center"
        >
          ❯
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 overflow-x-auto">
        <div className="flex gap-2 sm:gap-3 justify-start sm:justify-center min-w-max px-1">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`thumb-${i}`}
              onClick={() => setCurrentIndex(i)}
              className={`w-16 h-12 sm:w-20 sm:h-14 object-cover rounded cursor-pointer border-2 transition-all duration-200 ${
                i === currentIndex
                  ? "border-indigo-500 scale-105"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </div>

    </div>
  );
}