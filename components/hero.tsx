"use client"

import { useEffect, useRef } from "react"
import { Phone, FileText } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const parallaxShift = Math.min(scrollY * 0.15, 15)
        heroRef.current.style.transform = `translateY(${parallaxShift}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <h1 className="hero-headline font-normal mb-4 leading-tight">
              Restore Your Roof, Gutters & Driveway to Pristine Condition
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg font-normal">
              Eco-safe soft washing and high-pressure cleaning trusted across Portland & Eugene
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2">
                <FileText size={20} />
                <span>Get a Free Quote</span>
              </a>
              <a href="tel:9712806104" className="btn-secondary flex items-center justify-center gap-2">
                <Phone size={20} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          <div className="relative" ref={heroRef}>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/hero.png"
                alt="Beautiful modern home exterior showcasing professional pressure washing results"
                width={800}
                height={500}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
