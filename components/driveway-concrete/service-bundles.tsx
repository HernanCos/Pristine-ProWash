import { HouseIcon, RoofIcon, GutterIcon, DeckFenceIcon } from "@/components/service-icons"

export default function ServiceBundles() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Bundle Driveway Cleaning With Other Services and Save 15%
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Homeowners often pair driveway cleaning with house soft washing to make the whole property shine. Add gutter
            cleaning or roof soft washing for a total exterior refresh and enjoy 15% off your services.
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
              <RoofIcon />
            </div>
            <h3 className="font-semibold text-navy">Roof Soft Washing</h3>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <GutterIcon />
            </div>
            <h3 className="font-semibold text-navy">Gutter Cleaning & Brightening</h3>
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
