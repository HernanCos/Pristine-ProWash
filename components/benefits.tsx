import { Sparkles, ShieldX, Siren, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: <Sparkles className="h-8 w-8 text-cyan" />,
    title: "Improved Curb Appeal",
    text: "Boost your home's value and appearance by removing years of stains and grime.",
  },
  {
    icon: <ShieldX className="h-8 w-8 text-cyan" />,
    title: "Prevents Mold & Damage",
    text: "Eliminate harmful mold, mildew, and algae that can cause costly structural damage.",
  },
  {
    icon: <Siren className="h-8 w-8 text-cyan" />,
    title: "Enhances Safety",
    text: "Remove slippery buildup from walkways and driveways to prevent accidents.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-cyan" />,
    title: "Extends Surface Life",
    text: "Regular cleaning protects your siding, roof, and concrete, saving on future repairs.",
  },
]

export default function Benefits() {
  return (
    <section className="section-padding bg-darkband">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-navy">
          The Benefits of a Pristine Exterior
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white/50 p-6 rounded-lg shadow-md">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-xl mb-2 text-navy">{benefit.title}</h3>
                <p className="text-gray-700 text-base">{benefit.text}</p>
              </div>
            ))}
          </div>
          <div className="hidden md:block text-center bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            {/* <!-- INSERT SIDE IMAGE HERE --> */}
            <p className="text-gray-500">Image Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}
