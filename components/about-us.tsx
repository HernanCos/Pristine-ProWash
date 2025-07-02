import { Check } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#0D1B2A" }}>
      <div className="container">
        <div className="max-w-[700px] mx-auto bg-charcoal rounded-lg p-12 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">About Pristine ProWash</h2>
            <div className="w-16 h-1 bg-cyan mx-auto mb-8"></div>

            <div className="text-gray-300 leading-relaxed mb-8 space-y-4">
              <p>
                Pristine ProWash delivers meticulous, plant-safe exterior cleaning with a promise of honesty and
                transparent pricing.
              </p>

              <p>
                Hi, I'm Hernan—a finance student at the University of Oregon who turned a passion for spotless gear and
                smart business into a local pressure-washing service.
              </p>

              <p>
                Born in Mexico City, raised in Portland, and now serving homeowners in Portland, Lake Oswego, and Eugene
                while I complete my degree.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-cyan bg-opacity-20 p-3 rounded-full mb-3">
                  <Check className="h-6 w-6 text-cyan" />
                </div>
                <h4 className="font-bold mb-2">Safety First</h4>
                <p className="text-gray-300 text-sm">Eco-friendly detergents</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-cyan bg-opacity-20 p-3 rounded-full mb-3">
                  <Check className="h-6 w-6 text-cyan" />
                </div>
                <h4 className="font-bold mb-2">Transparent Pricing</h4>
                <p className="text-gray-300 text-sm">No hidden fees or surprises</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-cyan bg-opacity-20 p-3 rounded-full mb-3">
                  <Check className="h-6 w-6 text-cyan" />
                </div>
                <h4 className="font-bold mb-2">Respect for Your Property</h4>
                <p className="text-gray-300 text-sm">& schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
