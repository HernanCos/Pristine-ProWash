import Image from "next/image"

export default function WhyDeckFenceCleaning() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/deck-neglected.jpg"
                alt="Neglected wooden deck covered with leaves and weathered wood"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Why Deck & Fence Cleaning Matters</h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Decks and fences are among the most noticeable and well-used features of any home, providing outdoor
                living space, privacy, and property value. Unfortunately, they are also constantly exposed to Portland's
                weather conditions, making them vulnerable to damage from moisture, algae, and sunlight. Without regular
                upkeep, wood surfaces can quickly deteriorate, leading to costly repairs or early replacement. Routine
                professional cleaning helps homeowners protect their investment and enjoy a more attractive outdoor
                space.
              </p>

              <p>
                The Pacific Northwest's unique climate accelerates the aging process of outdoor wood. Frequent rain and
                damp winters create ideal conditions for moss, algae, and mildew to thrive on decks and fences. Shaded
                areas often become slippery and discolored, while constant moisture can promote wood rot and weaken
                structural integrity. During the summer, UV rays contribute to further damage by drying out the wood,
                causing cracks, splintering, and fading. This combination of moisture and sun exposure is especially
                hard on untreated or older wood surfaces.
              </p>

              <p>
                At Pristine ProWash, we help homeowners fight back against these conditions. Our gentle, wood-safe soft
                washing process removes harmful organic buildup, revitalizes the wood's natural appearance, and reduces
                the risks of long-term damage. A clean deck and fence do more than improve your home's appearance.
                Regular cleaning extends the life of outdoor structures, keeps them safer to use, and ensures they
                remain a welcoming part of your outdoor living space for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
