import { Check } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-padding bg-gray-900">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <Check className="text-cyan h-6 w-6 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Plant-Safe Process</h3>
              <p className="text-gray-300">
                Our eco-friendly cleaning solutions are safe for your landscaping and pets.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="text-cyan h-6 w-6 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Student-Owned Local Business</h3>
              <p className="text-gray-300">Supporting your local economy while delivering professional results.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="text-cyan h-6 w-6 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Same-Week Scheduling</h3>
              <p className="text-gray-300">Quick response times and flexible scheduling to meet your needs.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="text-cyan h-6 w-6 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-1">Rain-Guarantee Rescheduling</h3>
              <p className="text-gray-300">Weather-related cancellations are promptly rescheduled at no extra cost.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
