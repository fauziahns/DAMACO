// ParallaxScroll.tsx
"use client";

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

type ParallaxScrollProps = {
  media: MediaItem[];
  className?: string;
  onClick?: (src: string) => void;
};

export const ParallaxScroll = ({ media, className, onClick }: ParallaxScrollProps) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(media.length / 3);
  const firstPart = media.slice(0, third);
  const secondPart = media.slice(third, 2 * third);
  const thirdPart = media.slice(2 * third);

  const renderItem = (item: MediaItem, idx: number, yMotion: any, keyPrefix: string) => (
    <motion.div style={{ y: yMotion }} key={`${keyPrefix}-${idx}`}>
      {item.type === "image" ? (
        <img
          src={item.src}
          onClick={() => onClick?.(item.src)}
          className="h-80 w-full object-cover rounded-lg cursor-pointer"
          alt="Gallery item"
        />
      ) : (
        <video
          src={item.src}
          controls
          className="h-80 w-full object-cover rounded-lg"
        />
      )}
    </motion.div>
  );

  return (
    <div className={cn("h-[40rem] items-start overflow-y-auto w-full", className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-10 py-15 px-10">
        <div className="grid gap-10">
          {firstPart.map((item, idx) => renderItem(item, idx, translateFirst, "first"))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((item, idx) => renderItem(item, idx, translateSecond, "second"))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((item, idx) => renderItem(item, idx, translateThird, "third"))}
        </div>
      </div>
    </div>
  );
};
