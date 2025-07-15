import Image from "next/image"

export default function WhyGutterCleaning() {
  return (
    <section className="py-16" style={{ backgroundColor: "#D1D5DB" }}>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-12 text-center">
          Why Regular Gutter Cleaning Matters
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/gutter-neglected.png"
              alt="Neglected gutter filled with leaves and debris"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Gutter cleaning is one of the simplest ways to protect your home from avoidable water damage. When gutters
              clog, rainwater overflows onto your roof, siding, and foundation, causing issues like roof leaks, wood
              rot, foundation cracks, and costly water intrusion problems. Clean gutters help ensure water is safely
              directed away from your property, reducing long-term repair costs.
            </p>
            <p>
              In Portland's rainy climate, gutters fill quickly with leaves, moss, and roof debris, especially during
              fall and winter. When neglected, clogged gutters cause pooling water, ice dams in colder months, and
              overflowing gutters that deteriorate fascia boards and siding. Water that cannot drain properly also
              attracts pests like mosquitoes and creates slippery walkways near your home.
            </p>
            <p>
              At Pristine ProWash, we eliminate these risks while improving curb appeal. Our gutter cleaning includes
              full debris removal, downspout flushing, and professional gutter brightening to remove the dark streaks on
              gutter exteriors known as "tiger stripes." You get both improved water flow and a cleaner, sharper home
              appearance without needing to climb a ladder.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
