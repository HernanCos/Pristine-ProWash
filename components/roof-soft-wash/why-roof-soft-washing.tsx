import Image from "next/image"

export default function WhyRoofSoftWashing() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">Why Roof Soft Washing Exists</h2>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left Column - Before/After Images Side by Side - Larger */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              {/* Before image - doubled size */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-navy text-center">Before</h3>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofBefore1.png-4DUr4Qvt0TksUEsL2KMpQOE9E9XmFY.jpeg"
                    alt="Roof before soft washing showing heavy moss growth"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* After image - doubled size */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-navy text-center">After</h3>
                <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofAfter1-AekrG21zlgWPxykoNbA9EnyzF4sIhX.png"
                    alt="Roof after soft washing showing clean shingles"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content - Narrower and Further Right */}
          <div className="lg:col-span-3 space-y-4 text-gray-700 lg:pl-12">
            <p>
              Roof soft washing was developed to safely clean roofs without causing damage to shingles or roof
              structures. Unlike traditional pressure washing, which can strip away protective granules and void
              warranties, soft washing uses a low-pressure application of biodegradable solutions to eliminate moss,
              algae, and lichen at the root. This method preserves the integrity of your roof while delivering a
              lasting, deeper clean.
            </p>
            <p>
              In Portland's rainy and moss-prone climate, roof soft washing is not just about curb appeal. It is
              essential maintenance. Frequent wet seasons and shaded roofs create ideal conditions for moss and algae to
              thrive, leading to premature roof deterioration if left unchecked. North-facing slopes in particular are
              highly susceptible to moss build-up, which can cause costly structural issues over time.
            </p>
            <p>
              At Pristine ProWash, we use modern, plant-safe soft washing systems designed specifically for Pacific
              Northwest homes. Our process restores your roof's appearance while significantly extending its lifespan.
              Many HOAs in Portland also require roof moss removal, making soft washing a smart way to protect both your
              property value and neighborhood compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
