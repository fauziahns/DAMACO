// ParallaxScrollDemo.tsx
"use client";

import { useState } from "react";
import { ParallaxScroll } from "./acernity/parallax-scroll";

export function ParallaxScrollKetapang() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const mediaItems: { type: "image" | "video"; src: string }[] = [
    { type: "image", src: "/ketapang/1.jpg" },
    { type: "image", src: "/ketapang/2.jpg" },
    { type: "image", src: "/ketapang/3.jpg" },
    { type: "image", src: "/ketapang/4.jpg" },
    { type: "image", src: "/ketapang/5.jpg" },
    { type: "image", src: "/ketapang/6.jpg" },
    { type: "image", src: "/ketapang/7.jpg" },
    { type: "image", src: "/ketapang/8.jpg" },
  ];

  return (
    <>
      <ParallaxScroll media={mediaItems} onClick={(src) => setSelectedImage(src)} />

      {/* Modal Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl w-full px-4">
            <button
              className="absolute top-4 right-4 text-white text-3xl z-50"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            {selectedImage.endsWith(".mp4") ? (
              <video
                src={selectedImage}
                controls
                className="max-h-[80vh] w-full object-contain rounded-xl shadow-xl"
              />
            ) : (
              <img
                src={selectedImage}
                alt="Preview"
                className="max-h-[80vh] w-full object-contain rounded-xl shadow-xl"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
