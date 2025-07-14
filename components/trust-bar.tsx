import { Shield, Leaf, CheckCircle, Droplet } from "lucide-react"

export default function TrustBar() {
  return (
    <section className="py-4 bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="flex items-center gap-3 justify-center">
            <Droplet className="text-cyan h-6 w-6 flex-shrink-0" />
            <span className="text-sm md:text-base text-center md:text-left text-navy">
              Plant Safe Cleaning Solutions
            </span>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <Shield className="text-cyan h-6 w-6 flex-shrink-0" />
            <span className="text-sm md:text-base text-center md:text-left text-navy">Licensed & Insured</span>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <Leaf className="text-green-500 h-6 w-6 flex-shrink-0" />
            <span className="text-sm md:text-base text-center md:text-left text-navy">Eco-Friendly Detergents</span>
          </div>

          <div className="flex items-center gap-3 justify-center">
            <CheckCircle className="text-cyan h-6 w-6 flex-shrink-0" />
            <span className="text-sm md:text-base text-center md:text-left text-navy">100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}
