"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const galleryItems = [
  // Roof Washing
  {
    category: "Roof Washing",
    before:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofBefore1.png-4DUr4Qvt0TksUEsL2KMpQOE9E9XmFY.jpeg",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofAfter1-AekrG21zlgWPxykoNbA9EnyzF4sIhX.png",
    alt: "Roof transformation showing moss removal and shingle restoration",
  },
  {
    category: "Roof Washing",
    before:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofBefore2.png-vQhX6SsvbdpQeM260jOgrLj3SdsDok.jpeg",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofAfter2.png-ftuHMYGOU5XFnDzlmcbFQ1b9t5usXi.jpeg",
    alt: "Before and after roof soft washing showing dramatic improvement",
  },
  {
    category: "Roof Washing",
    before:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofBefore3.png-nKA6muJ53L4SlDTyy68qAwR3c3Cpr3.jpeg",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofAfter3.png-hp6GqTRxtG67VUVTtBRBxUCzIh4ctQ.jpeg",
    alt: "Roof ridge cleaning before and after comparison",
  },
  {
    category: "Roof Washing",
    before:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofBefore4.png-kkGwLE684qBOZATIdXcyrdp2AKMI5O.jpeg",
    after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofAfter4.png-H5Q7s7KxvxDjtYHRQDJJ9w5ClL2C3d.jpeg",
    alt: "Complete roof transformation from severely moss-covered to pristine condition",
  },
  // House Washing
  {
    category: "House Washing",
    before: "/images/house-gallery/HouseBefore1.png",
    after: "/images/house-gallery/HouseAfter1.png",
    alt: "Siding before and after soft washing",
  },
  {
    category: "House Washing",
    before: "/images/house-gallery/HouseBefore2.png",
    after: "/images/house-gallery/HouseAfter2.png",
    alt: "Two-story house before and after soft washing",
  },
  {
    category: "House Washing",
    before: "/images/house-gallery/HouseBefore3.png",
    after: "/images/house-gallery/HouseAfter3.png",
    alt: "House exterior with bushes before and after cleaning",
  },
  {
    category: "House Washing",
    before: "/images/house-gallery/HouseBefore4.png",
    after: "/images/house-gallery/HouseAfter4.png",
    alt: "Siding with window and shutters before and after soft washing",
  },
  // Driveway & Concrete Cleaning
  {
    category: "Driveway & Concrete Cleaning",
    before: "/images/driveway-gallery/DrivewayBefore1.png",
    after: "/images/driveway-gallery/DrivewayAfter1.png",
    alt: "Dirty driveway with brick border before and after power washing",
  },
  {
    category: "Driveway & Concrete Cleaning",
    before: "/images/driveway-gallery/DrivewayBefore2.png",
    after: "/images/driveway-gallery/DrivewayAfter2.png",
    alt: "Long residential driveway before and after professional cleaning",
  },
  {
    category: "Driveway & Concrete Cleaning",
    before: "/images/driveway-gallery/DrivewayBefore3.jpg",
    after: "/images/driveway-gallery/DrivewayAfter3.jpg",
    alt: "Suburban home driveway before and after pressure washing",
  },
  // Gutter Cleaning
  {
    category: "Gutter Cleaning",
    before: "/images/gutter-gallery/GutterBefore1.png",
    after: "/images/gutter-gallery/GutterAfter1.png",
    alt: "Dirty gutter exterior before and after cleaning",
  },
  {
    category: "Gutter Cleaning",
    before: "/images/gutter-gallery/GutterBefore2.png",
    after: "/images/gutter-gallery/GutterAfter2.png",
    alt: "Gutter clogged with debris before and after cleaning",
  },
  // Deck & Fence Cleaning
  {
    category: "Deck & Fence Cleaning",
    before: "/images/deck-fence-gallery/DeckBefore1.png",
    after: "/images/deck-fence-gallery/DeckAfter1.png",
    alt: "Weathered deck before and after restoration",
  },
  {
    category: "Deck & Fence Cleaning",
    before: "/images/deck-fence-gallery/DeckBefore2.png",
    after: "/images/deck-fence-gallery/DeckAfter2.png",
    alt: "Dirty fence before and after cleaning",
  },
]

const filters = [
  "All",
  "Roof Washing",
  "House Washing",
  "Driveway & Concrete Cleaning",
  "Gutter Cleaning",
  "Deck & Fence Cleaning",
]

export default function UnifiedGallery() {
  const [filter, setFilter] = useState("All")

  const filteredItems = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <section className="py-16 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">Before & After Gallery</h2>
        <div className="flex justify-center flex-wrap gap-2 mb-8 md:mb-12">
          {filters.map((f) => (
            <Button
              key={f}
              variant={filter === f ? "default" : "outline"}
              onClick={() => setFilter(f)}
              className={`font-semibold rounded-full px-4 py-2 text-sm md:text-base transition-colors duration-200 ${
                filter === f ? "bg-navy text-white hover:bg-navy/90" : "text-navy border-navy/50 hover:bg-navy/10"
              }`}
            >
              {f}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <Card key={`${filter}-${index}`} className="overflow-hidden shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="text-center text-xl font-bold text-navy">{item.category}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square">
                    <Image
                      src={item.before || "/placeholder.svg"}
                      alt={`Before: ${item.alt}`}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute top-2 left-2 bg-black/60 text-white px-2 py-1 text-xs font-bold rounded">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative aspect-square">
                    <Image
                      src={item.after || "/placeholder.svg"}
                      alt={`After: ${item.alt}`}
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute top-2 left-2 bg-cyan text-navy px-2 py-1 text-xs font-bold rounded">
                      AFTER
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
