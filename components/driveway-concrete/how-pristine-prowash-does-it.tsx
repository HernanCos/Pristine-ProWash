import Image from "next/image"

export default function HowPristineProWashDoesIt() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">How Pristine ProWash Does It</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96">
            <Image
              src="/images/driveway-action.png"
              alt="Professional driveway cleaning in action"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              Our driveway cleaning service starts with a surface inspection, checking for stains, moss patches, and
              problem areas. We pre-treat tough spots using plant-safe degreasers and moss killers to loosen grime
              before cleaning.
            </p>
            <p>
              Our main method uses a rotary surface cleaner that applies even, controlled pressure, eliminating buildup
              while protecting concrete from streaking or gouging. Where needed, we finish with a rinse to leave the
              concrete looking clean and evenly restored. For areas with stubborn stains, we offer optional oil spot
              treatment to target and break down automotive spots.
            </p>
            <p>
              Most driveway and concrete cleaning services in Portland range between $175 and $350, depending on
              driveway size and condition. Every job includes before-and-after photos and safe, environmentally
              responsible cleaning practices that extend the life of your concrete.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
