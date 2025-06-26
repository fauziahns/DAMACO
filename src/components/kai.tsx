// ParallaxScrollDemo.tsx
"use client";

import { useState } from "react";
import { ParallaxScroll } from "./acernity/parallax-scroll";

export function ParallaxScrollKAI() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const mediaItems: { type: "image" | "video"; src: string }[] = [
    { type: "image", src: "/dop4/1.jpeg" },
    { type: "image", src: "/dop4/2.jpeg" },
    { type: "image", src: "/dop4/3.jpeg" },
    { type: "image", src: "/dop4/4.jpeg" },
    { type: "image", src: "/dop4/5.jpeg" },
    { type: "image", src: "/dop4/6.jpeg" },
    { type: "image", src: "/dop4/7.jpeg" },
    { type: "image", src: "/dop4/8.jpeg" },
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
