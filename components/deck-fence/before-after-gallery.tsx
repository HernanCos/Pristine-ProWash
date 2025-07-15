import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function BeforeAfterGallery() {
  return (
    <section className="py-16" style={{ backgroundColor: "#D1D5DB" }}>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">Before & After Gallery</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold text-center mb-4 text-navy">Before</h3>
              <div className="relative h-80">
                <Image
                  src="/images/deck-neglected.jpg"
                  alt="Weathered deck with algae and dirt before cleaning"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold text-center mb-4 text-navy">After</h3>
              <div className="relative h-80">
                <Image
                  src="/Deck&Fence.png"
                  alt="Restored deck with natural wood color after cleaning"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
