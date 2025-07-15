import Image from "next/image"
import QuoteForm from "@/components/quote-form"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/house-cleaning.jpg"
          alt="Beautifully clean house siding after soft washing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Column - Hero Text */}
        <div className="text-white space-y-6 lg:pr-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Restore Your Home's Beauty, Instantly
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Our gentle soft washing technique safely eliminates dirt, mold, and algae from your siding, revealing a
            pristine exterior without the risk of damage.
          </p>
        </div>

        {/* Right Column - Quote Form */}
        <div className="lg:ml-4">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
