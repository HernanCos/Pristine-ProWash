"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-darkband h-20 flex items-center shadow-sm">
        <div className="container flex items-center h-full">
          <Link href="/" className="flex items-center" aria-label="Back to homepage">
            <Image src="/LOGO.png" alt="Pristine ProWash logo" width={90} height={90} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="ml-8 hidden md:flex items-center gap-6 font-bold text-navy">
            <Link href="/" className="hover:text-cyan transition-colors">
              Home
            </Link>
            <Link href="#services" className="hover:text-cyan transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="hover:text-cyan transition-colors">
              Gallery
            </Link>
            <Link href="#about" className="hover:text-cyan transition-colors">
              About
            </Link>
            <Link href="#contact" className="hover:text-cyan transition-colors">
              Contact
            </Link>
          </nav>
          <div className="ml-auto hidden md:flex items-center gap-4">
            <a
              href="tel:9712806104"
              className="text-navy hover:text-cyan transition-colors"
              onClick={() => {
                if (typeof window.gtag === "function") {
                  window.gtag("event", "conversion", {
                    send_to: "AW-17289761916/O-RxCOT-u-0aEPyos7RA",
                  })
                }
              }}
            >
              (971) 280-6104
            </a>
            <a href="#contact" className="btn-primary">
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="ml-auto md:hidden text-navy p-2 rounded-md"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bg-white shadow-lg py-4 z-40 md:hidden">
          <nav className="container flex flex-col gap-4">
            <Link
              href="/"
              className="text-navy hover:text-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-navy hover:text-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className="text-navy hover:text-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#about"
              className="text-navy hover:text-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-navy hover:text-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
