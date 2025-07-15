import Image from "next/image"

export default function WhyHouseSoftWashing() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">Why House Soft Washing Exists</h2>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Left Column - Before/After Images Side by Side - Larger */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
              {/* Before image - doubled size */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-navy text-center">Before</h3>
                <div className="relative h-[450px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HouseBefore1-UdzhK9YFWw1eKD6tXYXwqcIXOAgDHd.png"
                    alt="House siding before soft washing showing dirt and stains"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* After image - doubled size */}
              <div>
                <h3 className="text-lg font-bold mb-3 text-navy text-center">After</h3>
                <div className="relative h-[450px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HouseAfter1-jXcC8GqmGWegSzkIrEn3wmt32eC3QG.png"
                    alt="House siding after soft washing showing clean, restored appearance"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content - Narrower and Further Right */}
          <div className="lg:col-span-3 space-y-4 text-gray-700 lg:pl-20">
            <p>
              House soft washing was developed as a safer, more effective way to clean delicate exterior siding.
              High-pressure washing can strip paint, scar wood, and damage modern siding materials. Soft washing solves
              this by using a low-pressure detergent application to gently remove dirt, algae, mildew, and mold. It
              restores a fresh, clean appearance while protecting the structure underneath.
            </p>
            <p>
              In Portland, soft washing is essential due to the damp climate that accelerates organic growth. Shaded
              walls and north-facing sides of homes often develop algae streaks, mildew stains, and grime within a year.
              Rain and tree debris create buildup that makes homes appear older and less cared for. Soft washing
              reverses this damage and improves curb appeal without the risks of high-pressure systems.
            </p>
            <p>
              At Pristine ProWash, we follow a siding-safe soft washing process. Whether your home has vinyl, painted
              wood, stucco, or composite siding, our method safely lifts contaminants and revives your exterior. You get
              a cleaner home without risking damage to paint, panels, or underlying materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
