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
    <section className="bg-lightband section-padding overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <h1 className="hero-headline font-bold leading-tight">
              Restore Your Home’s Fresh Look With Expert Exterior Cleaning
            </h1>
            <p className="text-xl font-bold text-gray-700 my-8">
              Licensed, student-run pros delivering eco-safe, fast roof, gutter, and driveway cleaning, all backed by a
              satisfaction guarantee.
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
            <Image
              src="/housewash.jpg"
              alt="Technician soft-washing home siding, visible clean trail"
              width={640}
              height={720}
              priority
              className="rounded-lg border-2 border-navy shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
