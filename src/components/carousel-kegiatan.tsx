import { useState } from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

const media: MediaItem[] = [
    { type: "video", src: "/l5.mp4" },
    { type: "video", src: "/l7.mp4" },
  { type: "image", src: "/l1.jpeg" },
    { type: "image", src: "/l2.jpeg" },
    { type: "image", src: "/l3.jpeg" },
    { type: "image", src: "/l4.jpeg" },
];

export default function CarouselKegiatan() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? media.length - 2 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= media.length - 2 ? 0 : prev + 1
    );
  };

  const visibleItems = [
    media[currentIndex],
    media[(currentIndex + 1) % media.length],
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      
      {/* MAIN DISPLAY */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleItems.map((item, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden bg-black"
          >
            <div className="aspect-video">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full hover:bg-black flex items-center justify-center"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full hover:bg-black flex items-center justify-center"
        >
          ❯
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="mt-4 overflow-x-auto">
        <div className="flex gap-3 justify-start md:justify-center min-w-max">
          {media.map((item, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`cursor-pointer border-2 rounded overflow-hidden ${
                i === currentIndex
                  ? "border-indigo-500 scale-105"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  className="w-20 h-14 object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-20 h-14 object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}