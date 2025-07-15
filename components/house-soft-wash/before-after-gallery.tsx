"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryPairs = [
  {
    before: "/images/house-gallery/HouseBefore1.png",
    after: "/images/house-gallery/HouseAfter1.png",
    alt: "Siding before and after soft washing",
  },
  {
    before: "/images/house-gallery/HouseBefore2.png",
    after: "/images/house-gallery/HouseAfter2.png",
    alt: "Two-story house before and after soft washing",
  },
  {
    before: "/images/house-gallery/HouseBefore3.png",
    after: "/images/house-gallery/HouseAfter3.png",
    alt: "House exterior with bushes before and after cleaning",
  },
  {
    before: "/images/house-gallery/HouseBefore4.png",
    after: "/images/house-gallery/HouseAfter4.png",
    alt: "Siding with window and shutters before and after soft washing",
  },
]

export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === galleryPairs.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryPairs.length - 1 : prev - 1))
  }

  return (
    <section className="py-16" style={{ backgroundColor: "#D1D5DB" }}>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">Before & After Gallery</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryPairs.map((pair, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-navy text-center">Before</h3>
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={pair.before || "/placeholder.svg"}
                          alt={`Before: ${pair.alt}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-navy text-center">After</h3>
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={pair.after || "/placeholder.svg"}
                          alt={`After: ${pair.alt}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous image pair"
          >
            <ChevronLeft className="h-6 w-6 text-navy" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next image pair"
          >
            <ChevronRight className="h-6 w-6 text-navy" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {galleryPairs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-cyan" : "bg-gray-400"}`}
                aria-label={`Go to image pair ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
