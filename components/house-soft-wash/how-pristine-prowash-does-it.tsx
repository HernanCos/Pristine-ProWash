import Image from "next/image"

export default function HowPristineProWashDoesIt() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">How Pristine ProWash Does It</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-700">
            <p>
              Every soft washing service begins with a detailed inspection. We evaluate your home's exterior materials,
              look for problem areas, and identify sections with heavy buildup. Before any cleaning, we fully protect
              surrounding plants with fresh water and apply a neutralizing agent to prevent runoff issues.
            </p>
            <p>
              Next, we apply a biodegradable detergent using low-pressure equipment. This treatment breaks down grime,
              mildew, and organic stains while avoiding damage to siding materials. The solution is allowed to dwell
              before a controlled rinse removes all residue, leaving your home clean with a uniform finish and no
              streaking.
            </p>
            <p>
              House soft washing services typically range from $275 to $500 in Portland, depending on home size and
              buildup level. Every job includes before-and-after photo documentation and full property care for safe,
              professional results.
            </p>
          </div>

          <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HouseAction.jpg-Ea9bzlzV7O3i7p4jp7kAfmDatcXXyy.jpeg"
              alt="Professional house soft washing service in action showing proper technique and equipment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
