import Image from "next/image"

export default function WhyDrivewayCleaning() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">
          Why Driveway & Concrete Cleaning Exists
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/driveway-before-after.png"
              alt="Dramatic before and after comparison of driveway cleaning showing stained vs clean concrete"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              Driveway and concrete cleaning developed as homeowners realized how quickly outdoor surfaces accumulate
              stains and damage from everyday use. Modern methods go beyond simple pressure washing, using specialized
              surface cleaners and safe chemical treatments to restore bright, clean concrete without causing
              unnecessary wear.
            </p>
            <p>
              In Portland's rainy climate, regular driveway cleaning is more than a cosmetic upgrade. Moisture, tree
              cover, and shade create ideal conditions for moss, algae, and mildew to grow rapidly on concrete.
              Driveways and sidewalks also collect oil stains, rust spots, and general grime from vehicles, foot
              traffic, and rainy weather. Without proper care, these elements combine to make driveways slippery,
              discolored, and prematurely aged.
            </p>
            <p>
              At Pristine ProWash, we use advanced surface cleaning techniques tailored to Portland's conditions. Our
              professional process eliminates moss, algae, and stains, protecting your driveway while keeping your
              property looking its best.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
