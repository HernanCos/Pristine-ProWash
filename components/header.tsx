"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-20 flex items-center" style={{ backgroundColor: "#D1D5DB" }}>
        <div className="container flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center mr-8" aria-label="Back to homepage">
              <Image src="/LOGO.png" alt="Pristine ProWash logo" width={90} height={90} priority />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 font-bold text-gray-900">
              <Link href="/" className="hover:text-gray-700 transition-colors">
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-gray-700 transition-colors py-2 px-1">
                  Services
                  <ChevronDown size={16} />
                </button>

                {isServicesOpen && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2">
                      <Link
                        href="/services/roof-soft-wash"
                        className="block px-4 py-2 text-navy hover:bg-gray-50 hover:text-cyan transition-colors"
                      >
                        Roof Soft Washing
                      </Link>
                      <Link
                        href="/services/house-soft-wash"
                        className="block px-4 py-2 text-navy hover:bg-gray-50 hover:text-cyan transition-colors"
                      >
                        House Soft Washing
                      </Link>
                      <Link
                        href="/services/driveway-concrete-cleaning"
                        className="block px-4 py-2 text-navy hover:bg-gray-50 hover:text-cyan transition-colors"
                      >
                        Driveway & Concrete Cleaning
                      </Link>
                      <Link
                        href="/services/gutter-cleaning"
                        className="block px-4 py-2 text-navy hover:bg-gray-50 hover:text-cyan transition-colors"
                      >
                        Gutter Cleaning & Brightening
                      </Link>
                      <Link
                        href="/services/deck-fence-cleaning"
                        className="block px-4 py-2 text-navy hover:bg-gray-50 hover:text-cyan transition-colors"
                      >
                        Deck & Fence Cleaning
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/gallery" className="hover:text-gray-700 transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="hover:text-gray-700 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-700 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:9712806104"
                className="text-gray-900 hover:text-gray-700 transition-colors"
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
              <a href="/contact" className="btn-primary">
                Get a Free Quote
              </a>
              <Image src="/uo-logo.png" alt="University of Oregon logo" width={40} height={40} className="ml-2" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-900 p-2 rounded-md"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
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
            <div className="py-2">
              <div className="text-navy font-bold mb-2">Services</div>
              <div className="pl-4 space-y-2">
                <Link
                  href="/services/roof-soft-wash"
                  className="block text-navy hover:text-cyan transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Roof Soft Washing
                </Link>
                <Link
                  href="/services/house-soft-wash"
                  className="block text-navy hover:text-cyan transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  House Soft Washing
                </Link>
                <Link
                  href="/services/driveway-concrete-cleaning"
                  className="block text-navy hover:text-cyan transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Driveway & Concrete Cleaning
                </Link>
                <Link
                  href="/services/gutter-cleaning"
                  className="block text-navy hover:text-cyan transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gutter Cleaning & Brightening
                </Link>
                <Link
                  href="/services/deck-fence-cleaning"
                  className="block text-navy hover:text-cyan transition-colors py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Deck & Fence Cleaning
                </Link>
              </div>
            </div>
            <Link
              href="/gallery"
              className="text-navy hover:text-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-navy hover:text-cyan transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
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
