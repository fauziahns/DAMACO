// ParallaxScrollDemo.tsx
"use client";

import { useState } from "react";
import { ParallaxScroll } from "./acernity/parallax-scroll";

export function ParallaxScrollDemo() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const mediaItems: { type: "image" | "video"; src: string }[] = [
    { type: "image", src: "/gallery/1.jpeg" },
    { type: "video", src: "/gallery/19.mp4" },
    { type: "image", src: "/gallery/2.jpeg" },
    { type: "video", src: "/gallery/22.mp4" },
    { type: "image", src: "/gallery/3.jpeg" },
    { type: "video", src: "/gallery/18.mp4" },
    { type: "video", src: "/gallery/20.mp4" },
    { type: "image", src: "/gallery/5.jpeg" },
    { type: "image", src: "/gallery/6.jpeg" },
    { type: "image", src: "/gallery/7.jpg" },
    { type: "video", src: "/gallery/21.mp4" },
    { type: "image", src: "/gallery/8.jpg" },
    { type: "image", src: "/gallery/9.jpeg" },
    { type: "image", src: "/gallery/10.jpg" },
    { type: "image", src: "/gallery/11.png" },
    { type: "image", src: "/gallery/12.jpg" },
    { type: "image", src: "/gallery/13.jpeg" },
    { type: "image", src: "/gallery/14.jpeg" },
    { type: "image", src: "/gallery/15.jpeg" },
    { type: "image", src: "/gallery/16.jpg" },
    { type: "image", src: "/gallery/17.jpg" }
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
