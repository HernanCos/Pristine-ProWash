import { RoofIcon, GutterIcon, DrivewayConcretIcon, DeckFenceIcon } from "@/components/service-icons"

export default function ServiceBundles() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Refresh Your Entire Home Exterior and Save 15%
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Pair house soft washing with deck cleaning or driveway cleaning to brighten your home's appearance in one
            visit. Many homeowners also bundle with roof or gutter cleaning for complete property care and receive 15%
            off combined services.
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
