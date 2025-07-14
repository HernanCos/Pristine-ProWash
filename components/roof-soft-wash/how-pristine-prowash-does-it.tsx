import Image from "next/image"

export default function HowPristineProWashDoesIt() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">How Pristine ProWash Does It</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-700">
            <p>
              At Pristine ProWash, we follow a low-impact, high-effectiveness approach to roof cleaning. We begin with a
              full inspection of your roof's condition, identifying moss severity, roof pitch, and surrounding plant
              life. Your landscaping is thoroughly soaked with water and a neutralizing agent to protect plants from any
              cleaning runoff before any solution is applied.
            </p>
            <p>
              Our process starts with a professional soft wash application using a low-pressure, plant-safe mixture
              designed to kill moss and algae at the root without harming shingles. The solution is left to dwell and
              fully neutralize organic growth. In most cases, we let nature take its course. Dead moss naturally breaks
              down and washes away over the following weeks with weather exposure, ensuring zero physical damage to the
              roof surface.
            </p>
            <p>
              For homeowners who prefer an immediate visual improvement, we offer an optional post-treatment blow-off,
              where we gently remove loose debris with air equipment or soft brushing on accessible areas. This step is
              ideal for pre-sale cleanups, HOA inspections, or high-visibility roofs. Our priority is always to balance
              a cleaner appearance with long-term roof health, avoiding aggressive scraping or high-pressure rinsing
              that can cause more harm than good.
            </p>
            <p>
              Most Portland roof soft washing services fall between $250 and $450, with optional debris removal
              available for an additional fee based on roof size and condition. Every job is completed with
              before-and-after documentation, so you can see the difference while knowing your roof is being properly
              protected.
            </p>
          </div>

          <div className="relative h-80 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofHow.jpg-v3RFgdp7KoUMLVWOLz2VPS8Cz8FzjY.jpeg"
              alt="Professional roof soft washing process in action showing proper technique and equipment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
