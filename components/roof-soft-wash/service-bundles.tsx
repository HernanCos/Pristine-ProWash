import { HouseIcon, GutterIcon, DrivewayConcretIcon, DeckFenceIcon } from "@/components/service-icons"

export default function ServiceBundles() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Get a 15% Discount When You Combine Roof Cleaning With Other Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Many homeowners schedule gutter cleaning alongside roof soft washing to improve drainage and prevent moss
            from returning. You can also combine with house washing, driveway, or deck cleaning for a full home refresh
            and save 15% when bundling.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <HouseIcon />
            </div>
            <h3 className="font-semibold text-navy">House Soft Washing</h3>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <GutterIcon />
            </div>
            <h3 className="font-semibold text-navy">Gutter Cleaning & Brightening</h3>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <DrivewayConcretIcon />
            </div>
            <h3 className="font-semibold text-navy">Driveway & Concrete Cleaning</h3>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <DeckFenceIcon />
            </div>
            <h3 className="font-semibold text-navy">Deck & Fence Cleaning</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
