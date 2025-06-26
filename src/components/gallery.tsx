"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const mediaItems = [
  { type: "image", src: "/gallery/1.jpeg" },
  { type: "image", src: "/gallery/2.jpeg" },
  {
    type: "video",
    src: "/gallery/21.mp4",
    thumbnail: "/gallery/5.jpeg",
  },
  { type: "image", src: "/gallery/3.jpeg" },
]


export function MediaCarousel() {
  const [open, setOpen] = useState(false)
  const [activeMedia, setActiveMedia] = useState<{ type: string; src: string } | null>(null)

  const handleClick = (item: any) => {
    setActiveMedia(item)
    setOpen(true)
  }

  return (
    <>
      <Carousel opts={{ align: "start" }} className="w-full max-w-4xl">
        <CarouselContent>
          {mediaItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <div className="p-2">
                <Card onClick={() => handleClick(item)} className="cursor-pointer hover:scale-[0.97] transition">
                  <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden">
                    <img
                      src={item.type === "video" ? item.thumbnail : item.src}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Modal untuk play video atau show image */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {activeMedia?.type === "image" && (
            <img src={activeMedia.src} alt="" className="w-full h-auto" />
          )}
          {activeMedia?.type === "video" && (
            <video src={activeMedia.src} controls autoPlay className="w-full h-auto" />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
