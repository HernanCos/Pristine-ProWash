"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-charcoal shadow-lg py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Pristine ProWash logo"
            width={180}
            height={48}
            className="h-12 w-auto"
            priority
          />
          <span className="text-white font-source-sans-pro font-normal text-lg md:text-xl tracking-wide">
            Pristine ProWash
          </span>
        </Link>

        {!isMobile ? (
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-white hover:text-cyan transition-colors">
                Home
              </Link>
              <Link href="#services" className="text-white hover:text-cyan transition-colors">
                Services
              </Link>
              <Link href="#gallery" className="text-white hover:text-cyan transition-colors">
                Gallery
              </Link>
              <Link href="#about" className="text-white hover:text-cyan transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-white hover:text-cyan transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <a href="tel:9712806104" className="text-white hover:text-cyan transition-colors">
                (971) 280-6104
              </a>
              <a href="#contact" className="btn-primary">
                Get a Free Quote
              </a>
            </div>
          </div>
        ) : (
          <button onClick={toggleMenu} className="text-white p-2 rounded-md" aria-label="Toggle menu">
            <Menu size={24} />
          </button>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-charcoal shadow-lg py-4">
          <nav className="container flex flex-col gap-4">
            <Link
              href="/"
              className="text-white hover:text-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-white hover:text-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className="text-white hover:text-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
