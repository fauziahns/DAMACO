"use client";
import { cn } from "@/lib/utils";

type CardGlassProps = {
  title: string;
  description: string;
  image: string;
  author?: string;
  authorImg?: string;
};

export function CardGlass({
  title,
  description,
  image,
  author = "PT. Dunia Maya Comunica",
}: CardGlassProps) {
  return (
    <div className="max-w-xs w-full group/card">
        <div
          className={cn(
            "cursor-pointer overflow-hidden relative card h-70 rounded-xl shadow-xl max-w-sm mx-auto bg-cover bg-center flex flex-col justify-between p-4 transition duration-300 hover:scale-95"
          )}
          style={{
            backgroundImage: `url(${image})`,
          }}
        >

        <div className="absolute w-full h-full top-0 left-0 bg-black/50 rounded-xl transition duration-300 group-hover/card:bg-black/40"></div>

        <div className="flex items-center space-x-4 z-10 relative">
          <div className="flex flex-col">
            <p className="text-white font-semibold text-sm">{author}</p>
          </div>
        </div>

        <div className="z-10 relative text-white">
          <h1 className="font-bold text-xl mb-2">{title}</h1>
          <p className="text-sm leading-snug">{description}</p>
        </div>
      </div>
    </div>
  );
}
