"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

type BeforeAfterSliderProps = {
  beforeImage: string
  afterImage: string
  alt: string
}

function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
    setSliderPosition(percent)
  }

  return (
    <div
      className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg cursor-grab shadow-xl"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="absolute inset-0 z-10">
        <Image src={afterImage || "/placeholder.svg"} alt={`After: ${alt}`} fill className="object-cover" />
      </div>

      <div className="absolute inset-0 z-20 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image src={beforeImage || "/placeholder.svg"} alt={`Before: ${alt}`} fill className="object-cover" />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-30 cursor-col-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
          <div className="w-4 h-4 bg-cyan rounded-full"></div>
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-navy bg-opacity-75 text-white px-3 py-1 rounded-md z-40 text-sm">
        Before
      </div>

      <div className="absolute top-4 right-4 bg-navy bg-opacity-75 text-white px-3 py-1 rounded-md z-40 text-sm">
        After
      </div>
    </div>
  )
}

const galleryItems = [
  {
    beforeImage: "/images/roof-before.png",
    afterImage: "/images/roof-after.png",
    alt: "Roof soft washing before and after showing moss and algae removal",
    caption: "Roof Soft Washing",
    positionClasses: "lg:absolute lg:top-0 lg:left-0 lg:w-[45%] lg:rotate-[-3deg]",
  },
  {
    beforeImage: "/images/gutter-before.png",
    afterImage: "/images/gutter-after.png",
    alt: "Gutter cleaning before and after showing debris removal and brightening",
    caption: "Gutter Cleaning & Brightening",
    positionClasses: "lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-[45%] z-10",
  },
  {
    beforeImage: "/images/driveway-before.png",
    afterImage: "/images/driveway-after.jpg",
    alt: "Driveway cleaning before and after showing oil stain removal",
    caption: "Driveway & Concrete Cleaning",
    positionClasses: "lg:absolute lg:top-[15%] lg:right-0 lg:w-[45%] lg:rotate-[2deg]",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 overflow-hidden bg-gray-100">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">Mini Gallery</h2>

        <div className="relative h-auto lg:h-[750px] flex flex-col lg:block gap-12">
          {galleryItems.map((item) => (
            <div key={item.caption} className={item.positionClasses}>
              <div className="space-y-3">
                <BeforeAfterSlider beforeImage={item.beforeImage} afterImage={item.afterImage} alt={item.alt} />
                <p className="text-center text-gray-600 text-base">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/portfolio" className="btn-primary inline-flex items-center gap-2">
            <span>View Full Portfolio</span>
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
