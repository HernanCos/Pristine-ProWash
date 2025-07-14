import Image from "next/image"

export default function HowPristineProWashDoesIt() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">How Pristine ProWash Does It</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-700">
            <p>
              We begin with a full inspection of your gutters and downspouts, identifying problem areas and blockages.
              Debris is safely removed by hand or specialized gutter tools, followed by a complete downspout flush to
              ensure proper drainage. For high or difficult areas, we use ladder stabilizers and safety harnesses,
              protecting your home and our team.
            </p>
            <p>
              After clearing debris, we finish with gutter brightening using safe, oxidation-removing cleaners that
              restore gutters to a fresh, clean appearance. This service removes years of black streaks and buildup
              without damaging your gutter materials. Every job includes before-and-after photos, so you can see exactly
              what was done.
            </p>
            <p>
              Most Portland gutter cleaning and brightening services range from $125 to $275, depending on roof height,
              debris levels, and gutter condition. Investing in regular gutter cleaning reduces the risk of expensive
              home repairs, keeps your gutters functional, and helps your property look well-maintained year-round.
            </p>
          </div>

          <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/gutter-action.jpg"
              alt="Professional gutter cleaning equipment in action"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
