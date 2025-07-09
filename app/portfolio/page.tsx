import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-navy flex flex-col">
      {/* Header spacing */}
      <div className="pt-24"></div>

      {/* Main content - centered */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <h1 className="hero-headline font-normal mb-6 leading-tight text-navy">Portfolio Coming Soon</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto font-normal">
            We're building our gallery. In the meantime, follow our latest projects on Instagram @PristineProWash.
          </p>
          <Link href="/" className="btn-secondary inline-flex items-center gap-2">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
