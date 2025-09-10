import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="text-navy pt-12 pb-8" style={{ backgroundColor: "#E1E7ED" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start relative">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/LOGO.png" alt="Pristine ProWash logo" width={140} height={140} />
              <Image src="/uo-logo.png" alt="University of Oregon logo" width={50} height={50} />
            </Link>
            <p className="text-navy/80 text-sm text-center md:text-left max-w-[320px]">
              Professional pressure-washing services for residential properties in Portland, Lake Oswego, and Eugene,
              Oregon.
            </p>
            {/* Right border - trimmed */}
            <div className="hidden md:block absolute right-0 top-0 h-[90%] w-px bg-navy/20"></div>
          </div>

          <div className="mb-6 md:mb-0 relative">
            <h3 className="font-bold mb-4 text-xl md:text-2xl">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-navy hover:text-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-navy hover:text-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-navy hover:text-cyan transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-navy hover:text-cyan transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-navy hover:text-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            {/* Right border - trimmed */}
            <div className="hidden md:block absolute right-0 top-0 h-[90%] w-px bg-navy/20"></div>
          </div>

          <div className="relative">
            <h3 className="font-bold mb-4 text-xl md:text-2xl">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-navy hover:text-cyan transition-colors">
                  Roof Soft Washing
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-navy hover:text-cyan transition-colors">
                  Gutter Cleaning & Brightening
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-navy hover:text-cyan transition-colors">
                  Driveway & Concrete Cleaning
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-navy hover:text-cyan transition-colors">
                  Deck & Fence Cleaning
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-navy/20 text-center">
          <p className="text-navy/80 text-sm">
            &copy; {new Date().getFullYear()} Pristine ProWash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
