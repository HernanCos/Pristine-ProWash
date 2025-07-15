import Image from "next/image"

export default function WhatHappensWithoutWashing() {
  return (
    <section className="py-16" style={{ backgroundColor: "#D1D5DB" }}>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">
          What Happens When You Don't Wash Your House
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/HouseNeglected1.jpg"
              alt="Neglected house siding showing severe algae, mildew, and staining"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              Neglecting your siding leads to more than just an unsightly appearance. In Portland's wet climate, mildew
              and algae quickly form on shaded and north-facing walls. This organic growth traps moisture against the
              siding, which can cause paint to peel, wood to rot, and panels to warp over time.
            </p>
            <p>
              Dirty siding lowers your home's overall appearance and value. Failing to clean it regularly means
              repainting happens more frequently, repairs become more expensive, and damage spreads to windows, trim,
              and fascia boards. Interior air quality can also be affected as mold spores accumulate around the home.
            </p>
            <p>
              Many homeowners associations in Portland enforce exterior appearance guidelines. Persistent staining or
              mildew can lead to warnings or fines. Routine soft washing keeps your home's exterior protected,
              attractive, and compliant with neighborhood standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
