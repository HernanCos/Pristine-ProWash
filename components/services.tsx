"use client"

import { useState } from "react"
import { Home, Droplet, RouteIcon as Road, ChevronDown, ChevronUp } from "lucide-react"

export default function Services() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <section id="services" className="section-padding bg-gray-900">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Roof Soft Wash */}
          <div className="bg-charcoal rounded-lg p-6 shadow-lg">
            <div className="flex flex-row md:flex-col items-start gap-4">
              <div className="bg-cyan bg-opacity-20 p-3 rounded-full">
                <Home className="h-6 w-6 text-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Roof Soft Wash</h3>
                <p className="text-gray-300 mb-4">
                  Safe algae & moss removal that prolongs shingle life. Our gentle cleaning process removes harmful
                  growth without damaging your roof's surface or warranty.
                </p>
                <button
                  onClick={() => toggleAccordion("roofDetails")}
                  className="text-cyan hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  {openAccordion === "roofDetails" ? "Close" : "Learn More"}
                  {openAccordion === "roofDetails" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    openAccordion === "roofDetails" ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <div id="roofDetails" className="text-gray-300 text-sm leading-relaxed">
                    Using a low-pressure soft-wash system, we apply a biodegradable detergent that penetrates deep into
                    roof pores, breaking down black-streak algae, lichen and moss at the root. After application the
                    solution is left in place so it can keep working; we return about three weeks later to perform a
                    gentle rinse with garden-hose pressure, removing the remaining dead growth. Downspout discharge is
                    bagged to protect landscaping, and we finish with a gutter flow check.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gutter Cleaning */}
          <div className="bg-charcoal rounded-lg p-6 shadow-lg">
            <div className="flex flex-row md:flex-col items-start gap-4">
              <div className="bg-cyan bg-opacity-20 p-3 rounded-full">
                <Droplet className="h-6 w-6 text-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Gutter Cleaning & Brightening</h3>
                <p className="text-gray-300 mb-4">
                  Complete debris removal, downspout flush, and oxidation removal with F13. Restore your gutters to
                  like-new condition while ensuring proper water flow.
                </p>
                <button
                  onClick={() => toggleAccordion("gutterDetails")}
                  className="text-cyan hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  {openAccordion === "gutterDetails" ? "Close" : "Learn More"}
                  {openAccordion === "gutterDetails" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    openAccordion === "gutterDetails" ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <div id="gutterDetails" className="text-gray-300 text-sm leading-relaxed">
                    First we hand-remove leaves, twigs and sediment, then flush each downspout to ensure free flow.
                    Next, we apply F13 gutter brightener to dissolve oxidation 'tiger stripes' on gutter faces,
                    restoring their original finish without repainting. Clean bright gutters protect fascia boards and
                    keep water away from your foundation.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Driveway Cleaning */}
          <div className="bg-charcoal rounded-lg p-6 shadow-lg">
            <div className="flex flex-row md:flex-col items-start gap-4">
              <div className="bg-cyan bg-opacity-20 p-3 rounded-full">
                <Road className="h-6 w-6 text-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">Driveway & Concrete Cleaning</h3>
                <p className="text-gray-300 mb-4">
                  Professional surface-cleaner pass with oil-spot pretreatment using F9 Double Eagle. Restore your
                  concrete surfaces to their original clean appearance.
                </p>
                <button
                  onClick={() => toggleAccordion("drivewayDetails")}
                  className="text-cyan hover:underline inline-flex items-center gap-1 transition-colors"
                >
                  {openAccordion === "drivewayDetails" ? "Close" : "Learn More"}
                  {openAccordion === "drivewayDetails" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out ${
                    openAccordion === "drivewayDetails" ? "max-h-96 mt-4" : "max-h-0"
                  }`}
                >
                  <div id="drivewayDetails" className="text-gray-300 text-sm leading-relaxed">
                    Stubborn oil, rust and organic stains are pre-treated with F9 Double Eagle degreaser, followed by a
                    concentrated surfactant pre-treat that lifts deep contamination for uniform cleaning. We then use a
                    20-inch surface cleaner with balanced nozzles for streak-free 4,200 PSI washing that removes
                    embedded grime without etching the slab. A post-treat solution evens out lighter patches and leaves
                    the concrete uniformly bright.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
