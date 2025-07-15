import Image from "next/image"

const galleryImages = [
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
  return (
    <section className="py-16" style={{ backgroundColor: "#D1D5DB" }}>
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-navy">Before & After Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-bold mb-3 text-navy">Before</h3>
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image src={item.before || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-3 text-navy">After</h3>
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image src={item.after || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
