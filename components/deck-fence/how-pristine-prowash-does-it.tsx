import Image from "next/image"

export default function HowPristineProWashDoesIt() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">How Pristine ProWash Does It</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96">
            <Image
              src="/images/deck-action.jpg"
              alt="Professional deck cleaning showing before and after results"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4 text-gray-700">
            <p>
              Every deck and fence cleaning project begins with a full inspection of your outdoor wood surfaces. We take
              the time to identify areas with heavy moss, algae, or mildew buildup, as well as sections showing signs of
              sun fading or moisture exposure. This upfront evaluation helps us tailor our approach to the condition of
              your deck or fence while ensuring all problem areas receive proper treatment. We also take extra steps to
              protect your landscaping by thoroughly soaking surrounding plants before and after the cleaning process.
            </p>
            <p>
              Our soft washing method uses biodegradable, wood-friendly detergents that break down dirt, algae, and
              organic buildup without harming wood fibers or stripping protective finishes. Cleaning is completed using
              low-pressure rinsing equipment designed specifically for delicate wood surfaces, which prevents
              splintering, gouging, or water damage caused by improper high-pressure methods. The process restores
              natural wood tones, removes the dull gray appearance caused by oxidation, and leaves decks and fences
              looking refreshed and healthier.
            </p>
            <p>
              Pristine ProWash finishes every job with a detailed rinse and optional final walkthrough to ensure results
              meet the highest standard. Most deck and fence cleaning projects in Portland fall between $200 and $400,
              depending on the size of the surface and the level of buildup. Every service includes before-and-after
              photo documentation, careful property care, and noticeable improvements in both appearance and lifespan of
              your outdoor spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
