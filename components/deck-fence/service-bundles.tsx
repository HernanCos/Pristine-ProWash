import { HouseIcon, GutterIcon, DrivewayConcretIcon, RoofIcon } from "@/components/service-icons"

export default function ServiceBundles() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Clean Your Outdoor Spaces and Save 15% With Bundles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deck and fence cleaning is often combined with house soft washing for a cleaner, brighter home exterior. You
            can also add driveway or gutter cleaning and save 15% when booking multiple services together.
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
              <RoofIcon />
            </div>
            <h3 className="font-semibold text-navy">Roof Soft Washing</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
