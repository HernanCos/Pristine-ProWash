"use client"

import Image from "next/image"
import QuoteForm from "@/components/quote-form"

export default function GutterHero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gutter-hero.png"
          alt="House with gutters needing cleaning"
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
            Prevent Water Damage With Safe, Effective Gutter Cleaning
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Protect your home with professional debris removal and gutter brightening, all without having to climb a
            ladder.
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
