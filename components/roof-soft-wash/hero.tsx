"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import QuoteForm from "@/components/quote-form"

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RoofHero.jpg-tVCxYBtrFIOZUBtcCKNvvGu4S1MqHs.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container grid lg:grid-cols-5 gap-12 items-center">
        <div className="text-center lg:text-left lg:col-span-3">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Soft Wash Roof Cleaning That Protects Your Home
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Safe, effective moss removal with zero roof damage, perfect for Portland's rainy climate.
          </p>
          <div className="lg:hidden mb-8">
            <Button asChild size="lg" className="bg-cyan hover:bg-cyan/90 text-navy font-bold">
              <Link href="#contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-2 lg:ml-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}
