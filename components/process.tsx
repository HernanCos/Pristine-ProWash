import { ClipboardCheck, Home, CheckSquare } from "lucide-react"

export default function Process() {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Our Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="bg-cyan bg-opacity-20 p-4 rounded-full mb-4">
              <ClipboardCheck className="h-8 w-8 text-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Request Quote Online</h3>
            <p className="text-gray-300">
              Fill out our simple form to get a detailed quote tailored to your specific needs.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-cyan bg-opacity-20 p-4 rounded-full mb-4">
              <Home className="h-8 w-8 text-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. On-Site Service</h3>
            <p className="text-gray-300">
              Our team arrives with professional equipment for thorough soft washing and pressure cleaning.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-cyan bg-opacity-20 p-4 rounded-full mb-4">
              <CheckSquare className="h-8 w-8 text-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Final Walk-Through</h3>
            <p className="text-gray-300">
              We complete a detailed inspection with you to ensure 100% satisfaction with our work.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
