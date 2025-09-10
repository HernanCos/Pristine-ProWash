import Image from "next/image"
import Link from "next/link"
import UnifiedGallery from "@/components/unified-gallery"
import { Button } from "@/components/ui/button"

export default function GalleryPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/images/GalleryBackground.jpg"
            alt="An art gallery with three large framed photos on a gray wall"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="relative z-10 text-center space-y-4 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">See the Pristine ProWash Difference</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Real before-and-after transformations from Portland homeowners.
          </p>
        </div>
      </section>

      {/* Why Results Matter Section */}
      <section className="py-16 bg-gray-200">
        <div className="container text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            More Than Curb Appeal: Protect Your Home Investment
          </h2>
          <div className="space-y-4 text-navy/80 text-lg">
            <p>
              Pressure washing is more than just about making your home look good. These essential cleanings protect
              your property from damage caused by mold, algae, and grime, preventing costly repairs and extending the
              lifespan of your exterior surfaces.
            </p>
            <p>
              See how our professional services not only restore your home's beauty but also safeguard your investment.
            </p>
          </div>
        </div>
      </section>

      {/* Unified Gallery Section */}
      <UnifiedGallery />

      {/* Call to Action Banner */}
      <section className="py-16" style={{ backgroundColor: "var(--section-light)" }}>
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Ready for Your Own Transformation?</h2>
          <p className="text-lg text-navy/80 mb-8">Get a fast, free quote from Pristine ProWash today.</p>
          <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-navy font-bold">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
