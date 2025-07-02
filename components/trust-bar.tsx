import { Shield, Leaf, CheckCircle, Droplet } from "lucide-react"

export default function TrustBar() {
  return (
    <section className="py-8 bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Droplet className="text-cyan h-6 w-6 flex-shrink-0" />
            <span className="text-sm md:text-base text-center md:text-left">Plant Safe Cleaning Solutions</span>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Shield className="text-cyan h-6 w-6 flex-shrink-0" />
            <span className="text-sm md:text-base text-center md:text-left">Licensed & Insured</span>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <Leaf className="text-green-500 h-6 w-6 flex-shrink-0" />
            <span className="text-sm md:text-base text-center md:text-left">Eco-Friendly Detergents</span>
          </div>

          <div className="flex items-center gap-3 justify-center md:justify-start">
            <CheckCircle className="text-cyan h-6 w-6 flex-shrink-0" />
            <span className="text-sm md:text-base text-center md:text-left">100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}
