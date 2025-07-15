import Image from "next/image"

const galleryData = {
  roof: {
    title: "Roof Soft Washing",
    pairs: [
      {
        before:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofBefore1.png-4DUr4Qvt0TksUEsL2KMpQOE9E9XmFY.jpeg",
        after: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofAfter1-AekrG21zlgWPxykoNbA9EnyzF4sIhX.png",
        alt: "Roof transformation showing moss removal and shingle restoration",
      },
      {
        before:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofBefore2.png-vQhX6SsvbdpQeM260jOgrLj3SdsDok.jpeg",
        after:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofAfter2.png-ftuHMYGOU5XFnDzlmcbFQ1b9t5usXi.jpeg",
        alt: "Before and after roof soft washing showing dramatic improvement",
      },
      {
        before:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofBefore3.png-nKA6muJ53L4SlDTyy68qAwR3c3Cpr3.jpeg",
        after:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofAfter3.png-hp6GqTRxtG67VUVTtBRBxUCzIh4ctQ.jpeg",
        alt: "Roof ridge cleaning before and after comparison",
      },
      {
        before:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofBefore4.png-kkGwLE684qBOZATIdXcyrdp2AKMI5O.jpeg",
        after:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofAfter4.png-H5Q7s7KxvxDjtYHRQDJJ9w5ClL2C3d.jpeg",
        alt: "Complete roof transformation from severely moss-covered to pristine condition",
      },
    ],
  },
  house: {
    title: "House Soft Washing",
    pairs: [
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
    ],
  },
  driveway: {
    title: "Driveway & Concrete Cleaning",
    pairs: [
      {
        before: "/images/driveway-before.png",
        after: "/images/driveway-after.jpg",
        alt: "Concrete driveway before and after cleaning",
      },
      {
        before: "/images/driveway-gallery/DrivewayBefore1.png",
        after: "/images/driveway-gallery/DrivewayAfter1.png",
        alt: "Dirty driveway with brick border before and after power washing",
      },
      {
        before: "/images/driveway-gallery/DrivewayBefore2.png",
        after: "/images/driveway-gallery/DrivewayAfter2.png",
        alt: "Long residential driveway before and after professional cleaning",
      },
      {
        before: "/images/driveway-gallery/DrivewayBefore3.jpg",
        after: "/images/driveway-gallery/DrivewayAfter3.jpg",
        alt: "Suburban home driveway before and after pressure washing",
      },
    ],
  },
  gutter: {
    title: "Gutter Cleaning & Brightening",
    pairs: [
      {
        before: "/images/gutter-before.png",
        after: "/images/gutter-after.png",
        alt: "Gutter before and after cleaning",
      },
      {
        before: "/images/gutter-gallery/GutterBefore1.png",
        after: "/images/gutter-gallery/GutterAfter1.png",
        alt: "Dirty gutter exterior before and after cleaning",
      },
      {
        before: "/images/gutter-gallery/GutterBefore2.png",
        after: "/images/gutter-gallery/GutterAfter2.png",
        alt: "Gutter clogged with debris before and after cleaning",
      },
    ],
  },
  deck: {
    title: "Deck & Fence Cleaning",
    pairs: [
      {
        before: "/images/deck-fence-gallery/DeckBefore1.png",
        after: "/images/deck-fence-gallery/DeckAfter1.png",
        alt: "Weathered deck before and after restoration",
      },
      {
        before: "/images/deck-fence-gallery/DeckBefore2.png",
        after: "/images/deck-fence-gallery/DeckAfter2.png",
        alt: "Dirty fence before and after cleaning",
      },
    ],
  },
}

export default function UnifiedGallery() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">Before & After Gallery</h2>
        <div className="space-y-16">
          {Object.values(galleryData).map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`py-12 px-4 md:px-8 rounded-lg ${categoryIndex % 2 === 0 ? "bg-gray-200" : "bg-gray-300"}`}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-navy">{category.title}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.pairs.map((pair, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 items-center">
                    <div className="text-center">
                      <h4 className="text-lg font-bold mb-2 text-navy">Before</h4>
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={pair.before || "/placeholder.svg"}
                          alt={`Before: ${pair.alt}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-lg font-bold mb-2 text-navy">After</h4>
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={pair.after || "/placeholder.svg"}
                          alt={`After: ${pair.alt}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
