import { RoofIcon, HouseIcon, DrivewayConcretIcon, DeckFenceIcon } from "@/components/service-icons"

export default function ServiceBundles() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Save 15% When You Bundle Gutter Cleaning With Other Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Gutter cleaning pairs well with roof soft washing to protect against water damage and moss. Many homeowners
            also bundle with house washing or driveway cleaning for a fresh, clean look and save 15% on combined
            services.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <RoofIcon />
            </div>
            <h3 className="font-semibold text-navy">Roof Soft Washing</h3>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <HouseIcon />
            </div>
            <h3 className="font-semibold text-navy">House Soft Washing</h3>
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
