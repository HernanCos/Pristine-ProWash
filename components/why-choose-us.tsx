import { Check } from "lucide-react"

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <Check className="text-cyan h-6 w-6 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-1 text-navy">
                Locally Student-Owned, Professionally Delivered
              </h3>
              <p className="text-gray-600 text-base">
                Support a student-run local business that provides professional results without franchise prices or
                corporate hassle.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="text-cyan h-6 w-6 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-1 text-navy">Customized Surface-Safe Cleaning</h3>
              <p className="text-gray-600 text-base">
                We carefully adjust pressure and treatments to match every surface, ensuring a deep clean without
                causing any damage.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="text-cyan h-6 w-6 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-1 text-navy">Licensed, Insured, and Always Reliable</h3>
              <p className="text-gray-600 text-base">
                Your property is protected by a fully licensed and insured team that shows up on time and gets the job
                done right.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="text-cyan h-6 w-6 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-xl md:text-2xl mb-1 text-navy">
                Fast Scheduling with Flexible Availability
              </h3>
              <p className="text-gray-600 text-base">
                Enjoy quick responses and flexible scheduling, with most projects completed within the same week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
