import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Thank You – Pristine ProWash",
  description: "Thank you for your quote request. We'll get back to you within 24 hours.",
}

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white min-h-screen">
      <div className="pt-20">
        <h1 className="hero-headline mb-4">Thanks for your quote request!</h1>
        <p className="text-xl text-gray-300 mb-8">We’ll get back to you within 24 hours.</p>
        <Link href="/" className="btn-secondary inline-flex items-center gap-2">
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  )
}
