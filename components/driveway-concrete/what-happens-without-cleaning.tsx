import Image from "next/image"

export default function WhatHappensWithoutCleaning() {
  return (
    <section className="py-16" style={{ backgroundColor: "#D1D5DB" }}>
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">
          What Happens When You Don't Wash Your Concrete
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96">
            <Image
              src="/images/driveway-neglected.png"
              alt="Neglected concrete showing damage and stains"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              Neglecting driveway and concrete cleaning leads to more than dull surfaces. Organic growth like moss and
              algae soaks into concrete, making it slippery and unsafe, especially after rain. Over time, grime builds
              up, causing long-lasting discoloration and damaging the concrete's surface layer.
            </p>
            <p>
              Oil leaks, rust stains, and automotive fluids sink deep into porous concrete, creating stubborn marks that
              worsen with time. In colder seasons, water trapped beneath dirt and moss expands in freeze-thaw cycles,
              increasing the risk of small surface cracks.
            </p>
            <p>
              Dirty, stained concrete drags down the overall appearance of your home. Whether you plan to stay long-term
              or prepare for sale, clean driveways and sidewalks improve curb appeal and reflect proper home
              maintenance, helping preserve property value.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
