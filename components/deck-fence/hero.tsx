"use client"

import Image from "next/image"
import QuoteForm from "@/components/quote-form"

export default function DeckFenceHero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/deck-hero.jpeg"
          alt="Beautiful wooden deck with pergola"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 grid lg:grid-cols-2 gap-8 items-center min-h-screen py-20">
        {/* Left Column - Hero Text */}
        <div className="text-white space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Prolong Your Deck and Fence Lifespan With Safe, Professional Cleaning
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Restore natural wood color, prevent algae damage, and protect your outdoor spaces year-round.
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
