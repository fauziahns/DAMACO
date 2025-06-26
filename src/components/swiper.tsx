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
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Image */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
        <img
          src={images[currentIndex]}
          alt={`img-${currentIndex}`}
          className="w-full h-full object-cover transition-all duration-300"
        />
        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded hover:bg-black"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded hover:bg-black"
        >
          ❯
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center gap-3 mt-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`thumb-${i}`}
            onClick={() => setCurrentIndex(i)}
            className={`w-20 h-14 object-cover rounded cursor-pointer border-2 transition-all duration-200 ${
              i === currentIndex ? "border-indigo-500" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
