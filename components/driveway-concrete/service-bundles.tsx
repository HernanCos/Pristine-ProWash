export default function ServiceBundles() {
  return (
    <section className="py-16" style={{ backgroundColor: "#D1D5DB" }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-navy">
            Save More With Driveway + Exterior Cleaning Bundles
          </h2>
          <p className="text-lg text-gray-700">Bundle multiple services for extra savings and complete curb appeal.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-8">
          <div className="text-center">
            <div className="text-4xl mb-3">🚿</div>
            <h3 className="font-bold text-navy">Driveway Cleaning</h3>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🏠</div>
            <h3 className="font-bold text-navy">House Soft Washing</h3>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🌀</div>
            <h3 className="font-bold text-navy">Gutter Brightening</h3>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">🏡</div>
            <h3 className="font-bold text-navy">Roof Soft Washing</h3>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-700">
            Combine driveway cleaning with other exterior services and enjoy discounted bundle pricing. Many homeowners
            choose to pair driveway cleaning with house soft washing, gutter brightening, or roof cleaning for complete
            curb appeal in a single visit. Ask about bundle discounts when booking to maximize results and savings.
          </p>
        </div>
      </div>
    </section>
  )
}
